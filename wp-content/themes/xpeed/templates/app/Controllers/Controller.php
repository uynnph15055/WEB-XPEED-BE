<?php

namespace app\Controllers;

class Controller
{
    public function getCurrentUrl()
    {
        $current_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https://' : 'http://') . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        return $current_url;
    }
    public function respond($code = 0, $message = null, $data = null, array $trace = null, array $headers = [], $httpCode = 200)
    {
        // Thiết lập mã HTTP
        http_response_code($httpCode);

        // Thiết lập các header
        foreach ($headers as $key => $value) {
            header("$key: $value");
        }

        // Tạo response
        $response = [
            'code' => $code,
            'message' => $message,
            'data' => $data,
            'trace' => $trace,
        ];

        // Trả về response dưới dạng JSON
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
        exit; // Kết thúc script sau khi trả về response
    }

    public function unauthorized($message = 'Unauthorized', array $headers = [], $code = null)
    {
        return $this->respond($code, $message, null, null, $headers, 401);
    }

    public function forbidden($message = 'Forbidden', array $headers = [], $code = null)
    {
        return $this->respond($code, $message, null, null, $headers, 403);
    }

    public function bad_request($message = 'Invalid request data', array $trace = null, array $headers = [], $code = 1)
    {
        return $this->respond($code, $message, null, $trace, $headers, 400);
    }

    public function not_found($message = 'Not found')
    {
        return $this->respond(null, $message, null, null, [], 404);
    }

    public function method_not_allowed(array $trace = null, $message = 'Method not allowed')
    {
        return $this->respond(null, $message, null, $trace, [], 405);
    }

    public function no_content($message = 'No content', array $headers = [], $code = 1)
    {
        return $this->respond($code, $message, null, null, $headers, 204);
    }

    public function success($message = 'Success', $data = null, array $headers = [], $code = 0, $httpCode = 200)
    {
        return $this->respond($code, $message, $data, null, $headers, $httpCode);
    }

    public function fail($message = 'Fail', $code = 1, array $trace = null, array $headers = [], $httpCode = 500)
    {
        return $this->respond($code, $message, null, $trace, $headers, $httpCode);
    }
    public function failData($message = 'Fail', $data = null, $code = 1, array $trace = null, array $headers = [], $httpCode = 500)
    {
        return $this->respond($code, $message, $data, $trace, $headers, $httpCode);
    }
}
