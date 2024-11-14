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

    function getOrderDetail($orderId)
    {
        // Kiểm tra người dùng đã đăng nhập
        if (!is_user_logged_in()) {
            return 'Người dùng chưa đăng nhập';
        }

        // Lấy thông tin người dùng đang đăng nhập
        $current_user_id = get_current_user_id();

        // Lấy thông tin đơn hàng từ WooCommerce
        $order = wc_get_order($orderId);

        if (!$order) {
            return 'Không tìm thấy đơn hàng';
        }

        // Kiểm tra xem đơn hàng có thuộc về người dùng đang đăng nhập không
        if ($order->get_customer_id() !== $current_user_id) {
            return 'Bạn không có quyền xem đơn hàng này';
        }

        // Lấy thông tin chi tiết sản phẩm trong đơn hàng
        $order_items = [];
        foreach ($order->get_items() as $item_id => $item) {
            $product = $item->get_product();
            $product_id = $item->get_product_id();
            $variation_id = $item->get_variation_id();
            $product_name = $item->get_name();
            $quantity = $item->get_quantity();
            $subtotal = $item->get_subtotal();
            $total = $item->get_total();
            $price = $item->get_total() / $quantity;
            $product_thumbnail = get_the_post_thumbnail_url($product_id, 'thumbnail'); // Lấy URL ảnh thumbnail
            $product_link = get_permalink($product_id); // Lấy link sản phẩm

            // Lấy thông tin biến thể sản phẩm
            $variation_data = [];
            if ($variation_id) {
                $variation = wc_get_product($variation_id);
                $attributes = $variation->get_attributes();
                foreach ($attributes as $attribute_name => $attribute_value) {
                    $variation_data[] = [
                        'name' => wc_attribute_label($attribute_name),
                        'value' => $attribute_value,
                    ];
                }
            }

            // Lưu thông tin sản phẩm vào mảng
            $order_items[] = [
                'product_id' => $product_id,
                'variation_id' => $variation_id,
                'product_name' => $product_name,
                'quantity' => $quantity,
                'price' => wc_price($price),
                'subtotal' => wc_price($subtotal),
                'total' => wc_price($total),
                'variation_data' => $variation_data,
                'thumbnail' => $product_thumbnail,
                'link' => $product_link
            ];
        }

        // Lấy thông tin tổng quan của đơn hàng
        $order_data = [
            'order_id' => $orderId,
            'order_number' => $order->get_order_number(),
            'order_date' => $order->get_date_created()->date('Y-m-d H:i:s'),
            'status' => wc_get_order_status_name($order->get_status()),
            'total' => wc_price($order->get_total()),
            'shipping_total' => wc_price($order->get_shipping_total()),
            'payment_method' => $order->get_payment_method_title(),
            'billing_address' => $order->get_formatted_billing_address(),
            'shipping_address' => $order->get_formatted_shipping_address(),
            'items' => $order_items,
        ];

        return $order_data;
    }

}
