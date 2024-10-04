<?php
namespace app\helpers;

use Illuminate\Support\Facades\DB;

class Validator
{
    protected $errors = [];

    public function validate($data, $rules)
    {
        foreach ($rules as $field => $rule) {
            $value = isset($data[$field]) ? $data[$field] : null;
            foreach (explode('|', $rule) as $method) {
                // Tách tên phương thức và tham số
                $methodParts = explode(':', $method);
                $methodName = $methodParts[0]; // tên phương thức
                $methodParams = isset($methodParts[1]) ? $methodParts[1] : null; // tham số, nếu có

                if (method_exists($this, $methodName)) {
                    // Gọi phương thức với tham số, nếu có
                    if ($methodParams !== null) {
                        $this->$methodName($field, $value, $methodParams);
                    } else {
                        $this->$methodName($field, $value);
                    }
                }
                if (!empty($this->errors[$field])) {
                    break; // dừng kiểm tra nếu có lỗi
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
        if (empty($value)) {
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
            $this->errors[$field][] = "$field is not a valid URL.";
        }
    }

    // Quy tắc: alpha
    public function alpha($field, $value)
    {
        if (!ctype_alpha($value)) {
            $this->errors[$field][] = "$field may only contain letters.";
        }
    }

    // Quy tắc: numeric
    public function numeric($field, $value)
    {
        if (!is_numeric($value)) {
            $this->errors[$field][] = "$field must be a number.";
        }
    }

    // Quy tắc: in
    public function in($field, $value, $options)
    {
        if (!in_array($value, $options)) {
            $this->errors[$field][] = "$field must be one of the following: " . implode(', ', $options);
        }
    }

    // Quy tắc: min (cho số và chuỗi)
    public function min($field, $value, $min)
    {
        $min = (int)$min;
        if (strlen($value) < $min) {
            $this->errors[$field][] = "$field must be at least $min characters.";
        }
    }

    // Quy tắc: max (cho số và chuỗi)
    public function max($field, $value, $max)
    {
        if (is_numeric($value) && $value > $max) {
            $this->errors[$field][] = "$field must be less than or equal to $max.";
        } elseif (is_string($value) && strlen($value) > $max) {
            $this->errors[$field][] = "$field may not exceed $max characters.";
        }
    }

    // Quy tắc: confirmed (xác nhận mật khẩu)
    public function confirmed($field, $value, $confirmation_value)
    {
        if ($value !== $confirmation_value) {
            $this->errors[$field][] = "$field does not match the confirmation.";
        }
    }

    // Quy tắc: date
    public function date($field, $value)
    {
        if (strtotime($value) === false) {
            $this->errors[$field][] = "$field is not a valid date.";
        }
    }

    // Quy tắc: after (ngày)
    public function after($field, $value, $after_date)
    {
        if (strtotime($value) <= strtotime($after_date)) {
            $this->errors[$field][] = "$field must be after $after_date.";
        }
    }

    // Quy tắc: before (ngày)
    public function before($field, $value, $before_date)
    {
        if (strtotime($value) >= strtotime($before_date)) {
            $this->errors[$field][] = "$field must be before $before_date.";
        }
    }

    // Quy tắc: unique
    public function unique($field, $value, $params)
    {
        // Tách tên model và cột từ tham số
        [$modelClass, $column] = explode(',', $params);

        // Kiểm tra xem giá trị đã tồn tại trong model không
        $exists = $modelClass::where($column, $value)->exists();
        if ($exists) {
            $this->errors[$field][] = "$field already exists.";
        }
    }
}