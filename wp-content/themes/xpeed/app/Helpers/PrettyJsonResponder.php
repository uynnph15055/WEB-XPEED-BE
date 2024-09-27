<?php

namespace app\Helpers;

use Illuminate\Support\Traits\Macroable;

class PrettyJsonResponder
{
    use Macroable;

    /**
     * Trả về phản hồi 401 Unauthorized.
     *
     * @param string $message
     * @param array $headers
     * @param int|null $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function unauthorized($message = 'Unauthorized', array $headers = [], $code = null)
    {
        return $this->respond($code, $message, null, null, $headers, 401);
    }

    /**
     * Trả về phản hồi 403 Forbidden.
     *
     * @param string $message
     * @param array $headers
     * @param int|null $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function forbidden($message = 'Forbidden', array $headers = [], $code = null)
    {
        return $this->respond($code, $message, null, null, $headers, 403);
    }

    /**
     * Trả về phản hồi 400 Bad Request.
     *
     * @param string $message
     * @param array|null $trace
     * @param array $headers
     * @param int $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function bad_request($message = 'Invalid request data', array $trace = null, array $headers = [], $code = 1)
    {
        return $this->respond($code, $message, null, $trace, $headers, 400);
    }

    /**
     * Trả về phản hồi 404 Not Found.
     *
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public function not_found($message = 'Not found')
    {
        return $this->respond(null, $message, null, null, [], 404);
    }

    /**
     * Trả về phản hồi 405 Method Not Allowed.
     *
     * @param array|null $trace
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public function method_not_allowed(array $trace = null, $message = 'Method not allowed')
    {
        return $this->respond(null, $message, null, $trace, [], 405);
    }

    /**
     * Trả về phản hồi 204 No Content.
     *
     * @param string $message
     * @param array $headers
     * @param int $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function no_content($message = 'No content', array $headers = [], $code = 1)
    {
        return $this->respond($code, $message, null, null, $headers, 204);
    }

    /**
     * Trả về phản hồi 200 Success.
     *
     * @param mixed $data
     * @param string $message
     * @param array $headers
     * @param int $code
     * @param int $httpCode
     * @return \Illuminate\Http\JsonResponse
     */
    public function success($data = null, $message = 'Success', array $headers = [], $code = 0, $httpCode = 200)
    {
        return $this->respond($code, $message, $data, null, $headers, $httpCode);
    }

    /**
     * Trả về phản hồi 500 Fail.
     *
     * @param string $message
     * @param int $code
     * @param array|null $trace
     * @param array $headers
     * @param int $httpCode
     * @return \Illuminate\Http\JsonResponse
     */
    public function fail($message = 'Fail', $code = 1, array $trace = null, array $headers = [], $httpCode = 500)
    {
        return $this->respond($code, $message, null, $trace, $headers, $httpCode);
    }

    /**
     * Phương thức xử lý phản hồi chung.
     *
     * @param int $code
     * @param string|null $message
     * @param mixed|null $data
     * @param array|null $trace
     * @param array $headers
     * @param int $httpCode
     * @return \Illuminate\Http\JsonResponse
     */
    public function respond($code = 0, $message = null, $data = null, array $trace = null, array $headers = [], $httpCode = 200)
    {
        return response()->json([
            'code' => $code,
            'message' => $message,
            'data' => $data,
            'trace' => $trace,
        ], $httpCode, $headers, JSON_UNESCAPED_UNICODE);
    }
}
