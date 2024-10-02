<?php
namespace app\helpers;

class Validator
{
    protected $errors = [];

    public function validate($data, $rules)
    {
        foreach ($rules as $field => $rule) {
            $value = isset($data[$field]) ? $data[$field] : null;

            foreach (explode('|', $rule) as $method) {
                if (method_exists($this, $method)) {
                    $this->$method($field, $value);
                } else {
                    // Nếu phương thức chưa được định nghĩa, báo lỗi
                    $this->errors[$field][] = "Rule $method is invalid.";
                }
            }
        }

        return empty($this->errors);
    }

    public function getErrors()
    {
        return $this->errors;
    }

    // Quy tắc: required
    public function required($field, $value)
    {
        if (is_null($value) || $value === '') {
            $this->errors[$field][] = "$field is required.";
        }
    }

    // Quy tắc: email
    public function email($field, $value)
    {
        if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
            $this->errors[$field][] = "$field is not a valid email.";
        }
    }

    // Quy tắc: url
    public function active_url($field, $value)
    {
        if (!filter_var($value, FILTER_VALIDATE_URL)) {
            $this->errors[$field][] = "$field is not a valid url.";
        }
    }

    // Quy tắc: alpha
    public function alpha($field, $value)
    {
        if (!ctype_alpha($value)) {
            $this->errors[$field][] = "$field chỉ được chứa các ký tự chữ cái.";
        }
    }

    // Quy tắc: numeric
    public function numeric($field, $value)
    {
        if (!is_numeric($value)) {
            $this->errors[$field][] = "$field phải là số.";
        }
    }

    // Quy tắc: in
    public function in($field, $value, $options)
    {
        if (!in_array($value, $options)) {
            $this->errors[$field][] = "$field phải nằm trong danh sách: " . implode(', ', $options);
        }
    }

    // Quy tắc: min (cho số và chuỗi)
    public function min($field, $value, $min)
    {
        if (is_numeric($value) && $value < $min) {
            $this->errors[$field][] = "$field phải lớn hơn hoặc bằng $min.";
        } elseif (is_string($value) && strlen($value) < $min) {
            $this->errors[$field][] = "$field phải có ít nhất $min ký tự.";
        }
    }

    // Quy tắc: max (cho số và chuỗi)
    public function max($field, $value, $max)
    {
        if (is_numeric($value) && $value > $max) {
            $this->errors[$field][] = "$field phải nhỏ hơn hoặc bằng $max.";
        } elseif (is_string($value) && strlen($value) > $max) {
            $this->errors[$field][] = "$field không được vượt quá $max ký tự.";
        }
    }

    // Quy tắc: confirmed (xác nhận mật khẩu)
    public function confirmed($field, $value, $confirmation_value)
    {
        if ($value !== $confirmation_value) {
            $this->errors[$field][] = "$field không trùng khớp với phần xác nhận.";
        }
    }

    // Quy tắc: date
    public function date($field, $value)
    {
        if (strtotime($value) === false) {
            $this->errors[$field][] = "$field không phải là ngày hợp lệ.";
        }
    }

    // Quy tắc: after (ngày)
    public function after($field, $value, $after_date)
    {
        if (strtotime($value) <= strtotime($after_date)) {
            $this->errors[$field][] = "$field phải sau ngày $after_date.";
        }
    }

    // Quy tắc: before (ngày)
    public function before($field, $value, $before_date)
    {
        if (strtotime($value) >= strtotime($before_date)) {
            $this->errors[$field][] = "$field phải trước ngày $before_date.";
        }
    }
}
