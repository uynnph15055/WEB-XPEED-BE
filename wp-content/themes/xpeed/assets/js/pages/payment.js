import APIHandler from '../apiHandler.js';
import locationsData from '../locations.js';

$(document).ready(function() {
    const errorClass = 'input-error';
    window.onbeforeunload = function() {
        return 'Are you sure you want to navigate away from this page?';
    };

    // Initialize event listeners
    $('.payment_actions--continue').on('click', handlePayment);
    $('.payment_address--checkbox-input').on('change', saveShippingInfo);

    initializeProvinceSelect(locationsData);
    loadShippingInfo();
    injectErrorStyles();

    function handlePayment() {
        if (validateForm()) {
            const amount = $('.payment_cart--summary-total-value').text().replace(/\D/g, '');
            const orderInfo = "Thanh toán đơn hàng";
            const shippingInfo = collectShippingInfo();
            const orderId = $('.payment_form').data('orderid');
            console.log('handlePayment',orderId )
            localStorage.setItem('shippingInfo', JSON.stringify({
                ...shippingInfo,
                provinceId: $('#provinceSelect').val(), // Lưu ID tỉnh
                districtId: $('#districtSelect').val() // Lưu ID quận
            }));

            if (amount) {
                APIHandler.post('/wp-json/custom-api/v1/process-payment', {
                    amount,
                    orderInfo,
                    orderId,
                    shippingInfo
                })
                    .done(handlePaymentResponse)
                    .fail((error) => showError(error.responseJSON.message ?? "Xảy ra lỗi khi xử lý thanh toán."));
            } else {
                showError("Giỏ hàng rỗng, vui lòng kiểm tra lại.");
            }
        } else {
            showError("Vui lòng điền đầy đủ tất cả các trường.");
        }
    }

    function collectShippingInfo() {
        const provinceId = $('#provinceSelect').val();
        const districtId = $('#districtSelect').val();

        return {
            name: $('[name="name"]').val(),
            zipCode: $('[name="zipCode"]').val(),
            province: getLocationName(locationsData, provinceId), // Lấy tên tỉnh
            district: getLocationName(locationsData, districtId, provinceId), // Lấy tên quận
            address: $('[name="address"]').val(),
            apartment: $('[name="apartment"]').val(),
            phone: $('[name="phone"]').val()
        };
    }

// Hàm để tìm tên của tỉnh hoặc quận
    function getLocationName(locations, id, parentId = null) {
        if (parentId) {
            const province = locations.find(loc => loc.Id === parentId);
            const district = province ? province.Districts.find(dist => dist.Id === id) : null;
            return district ? district.Name : '';
        } else {
            const province = locations.find(loc => loc.Id === id);
            return province ? province.Name : '';
        }
    }
    function handlePaymentResponse(response) {
        if (response && response.data.payUrl) {
            window.location.href = response.data.payUrl;
        } else {
            showError("Không thể tạo yêu cầu thanh toán.");
        }
    }

    function saveShippingInfo() {
        if ($(this).is(':checked')) {
            if (validateForm()) {
                const shippingInfo = collectShippingInfo();
                localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
                showSuccess("Đại chỉ giao hàng đã được cập nhật!");
            } else {
                $(this).prop('checked', false);
            }
        } else {
            localStorage.removeItem('shippingInfo');
        }
    }

    function initializeProvinceSelect(data) {
        $.each(data, function(index, location) {
            $('#provinceSelect').append(new Option(location.Name, location.Id));
        });

        $('#provinceSelect').change(function() {
            loadDistricts($(this).val());
            $('#wardSelect').html('<option value="">Chọn Phường/Xã</option>').prop('disabled', true);
        });
    }

    function loadDistricts(provinceId, selectedDistrictId = null) {
        const province = locationsData.find(loc => loc.Id === provinceId);
        const districts = province ? province.Districts : [];

        $('#districtSelect').html('<option value="">Chọn Quận/Huyện</option>').prop('disabled', !districts.length);
        districts.forEach(district => {
            $('#districtSelect').append(new Option(district.Name, district.Id));
        });

        $('#districtSelect').change(function() {
            loadWards(provinceId, $(this).val());
        });

        if (selectedDistrictId) {
            $('#districtSelect').val(selectedDistrictId).change();
        }
    }

    function loadWards(provinceId, districtId, selectedWardId = null) {
        const province = locationsData.find(loc => loc.Id === provinceId);
        const district = province ? province.Districts.find(dist => dist.Id === districtId) : null;
        const wards = district ? district.Wards : [];

        $('#wardSelect').html('<option value="">Chọn Phường/Xã</option>').prop('disabled', !wards.length);
        wards.forEach(ward => {
            $('#wardSelect').append(new Option(ward.Name, ward.Id));
        });

        if (selectedWardId) {
            $('#wardSelect').val(selectedWardId);
        }
    }

    function validateForm() {
        let isValid = true;

        $('.payment_form--input').each(function() {
            if (!$(this).val()) {
                $(this).addClass(errorClass);
                isValid = false;
            } else {
                $(this).removeClass(errorClass);
            }
        });

        return isValid;
    }

    function loadShippingInfo() {
        const savedInfo = JSON.parse(localStorage.getItem('shippingInfo'));

        if (savedInfo) {
            $('[name="name"]').val(savedInfo.name || '');
            $('[name="zipCode"]').val(savedInfo.zipCode || '');
            $('[name="address"]').val(savedInfo.address || '');
            $('[name="apartment"]').val(savedInfo.apartment || '');
            $('[name="phone"]').val(savedInfo.phone || '');

            if (savedInfo.province) {
                $('#provinceSelect').val(savedInfo.province).change();
                if (savedInfo.district) {
                    loadDistricts(savedInfo.province, savedInfo.district);
                    if (savedInfo.ward) {
                        loadWards(savedInfo.province, savedInfo.district, savedInfo.ward);
                    }
                }
            }
        }
    }

    function injectErrorStyles() {
        $('<style>')
            .prop('type', 'text/css')
            .html(`.${errorClass} { border: 1px solid #ff0019; }`)
            .appendTo('head');
    }

    function showError(message) {
        Swal.fire({
            icon: "error",
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }

    function showSuccess(message) {
        Swal.fire({
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }
});
