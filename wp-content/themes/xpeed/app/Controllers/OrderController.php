<?php

namespace app\Controllers;

use app\Controllers\Controller as BaseController;
use Illuminate\Database\Capsule\Manager as DB;
use Illuminate\Support\Str;

class OrderController extends BaseController
{
    public function __construct()
    {
        session_start(); // Bắt đầu session
    }
    /**
     * Lấy thông tin tất cả đơn hàng của người dùng đang đăng nhập
     *
     * @return array|false Mảng chứa thông tin các đơn hàng hoặc false nếu không có đơn hàng
     */
    public function getAllOrdersForCurrentUser()
    {
        // Kiểm tra xem người dùng đã đăng nhập chưa
        if (!is_user_logged_in()) {
            return false;
        }

        // Lấy thông tin người dùng hiện tại
        $user_id = get_current_user_id();

        // Truy vấn các đơn hàng của người dùng dựa trên user_id
        $query_args = [
            'customer_id' => $user_id,
            'status' => ['wc-processing', 'wc-completed', 'wc-on-hold', 'wc-pending'],
            'limit' => -1, // Lấy tất cả đơn hàng, có thể giới hạn nếu cần
        ];

        // Lấy danh sách đơn hàng
        $orders = wc_get_orders($query_args);

        // Nếu không tìm thấy đơn hàng, trả về false
        if (empty($orders)) {
            return false;
        }

        // Mảng chứa thông tin các đơn hàng
        $order_details = [];

        // Duyệt qua từng đơn hàng và lấy thông tin cần thiết
        foreach ($orders as $order) {
            $order_id = $order->get_id();
            $order_data = [
                'order_id' => $order_id,
                'date_created' => $order->get_date_created()->date('Y-m-d H:i:s'),
                'status' => $order->get_status(),
                'total' => $order->get_total(),
                'shipping_total' => $order->get_shipping_total(),
                'payment_method' => $order->get_payment_method_title(),
            ];

            $order_details[] = $order_data;
        }

        return $order_details;
    }

}
