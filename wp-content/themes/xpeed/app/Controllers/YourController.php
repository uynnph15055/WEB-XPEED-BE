<?php
// app/Controllers/YourController.php
class YourController {
    public function index($request) {
        return wp_send_json_success(['message' => 'Hello World']);
    }

    public function show($request) {
        $id = $request['id']; // Lấy ID từ request
        return wp_send_json_success(['id' => $id, 'data' => 'Sample data for ID ' . $id]);
    }
}
