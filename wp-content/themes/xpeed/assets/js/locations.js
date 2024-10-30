
const locationsData = [
  {
    "Id": "01",
    "Name": "Thành phố Hà Nội",
    "Districts": [
      {
        "Id": "001",
        "Name": "Quận Ba Đình",
        "Wards": [
          { "Id": "00001", "Name": "Phường Phúc Xá", "Level": "Phường" },
          { "Id": "00004", "Name": "Phường Trúc Bạch", "Level": "Phường" },
          { "Id": "00006", "Name": "Phường Vĩnh Phúc", "Level": "Phường" },
          { "Id": "00007", "Name": "Phường Cống Vị", "Level": "Phường" },
          { "Id": "00008", "Name": "Phường Liễu Giai", "Level": "Phường" },
          {
            "Id": "00010",
            "Name": "Phường Nguyễn Trung Trực",
            "Level": "Phường"
          },
          { "Id": "00013", "Name": "Phường Quán Thánh", "Level": "Phường" },
          { "Id": "00016", "Name": "Phường Ngọc Hà", "Level": "Phường" },
          { "Id": "00019", "Name": "Phường Điện Biên", "Level": "Phường" },
          { "Id": "00022", "Name": "Phường Đội Cấn", "Level": "Phường" },
          { "Id": "00025", "Name": "Phường Ngọc Khánh", "Level": "Phường" },
          { "Id": "00028", "Name": "Phường Kim Mã", "Level": "Phường" },
          { "Id": "00031", "Name": "Phường Giảng Võ", "Level": "Phường" },
          { "Id": "00034", "Name": "Phường Thành Công", "Level": "Phường" }
        ]
      },
      {
        "Id": "002",
        "Name": "Quận Hoàn Kiếm",
        "Wards": [
          { "Id": "00037", "Name": "Phường Phúc Tân", "Level": "Phường" },
          { "Id": "00040", "Name": "Phường Đồng Xuân", "Level": "Phường" },
          { "Id": "00043", "Name": "Phường Hàng Mã", "Level": "Phường" },
          { "Id": "00046", "Name": "Phường Hàng Buồm", "Level": "Phường" },
          { "Id": "00049", "Name": "Phường Hàng Đào", "Level": "Phường" },
          { "Id": "00052", "Name": "Phường Hàng Bồ", "Level": "Phường" },
          { "Id": "00055", "Name": "Phường Cửa Đông", "Level": "Phường" },
          { "Id": "00058", "Name": "Phường Lý Thái Tổ", "Level": "Phường" },
          { "Id": "00061", "Name": "Phường Hàng Bạc", "Level": "Phường" },
          { "Id": "00064", "Name": "Phường Hàng Gai", "Level": "Phường" },
          { "Id": "00067", "Name": "Phường Chương Dương", "Level": "Phường" },
          { "Id": "00070", "Name": "Phường Hàng Trống", "Level": "Phường" },
          { "Id": "00073", "Name": "Phường Cửa Nam", "Level": "Phường" },
          { "Id": "00076", "Name": "Phường Hàng Bông", "Level": "Phường" },
          { "Id": "00079", "Name": "Phường Tràng Tiền", "Level": "Phường" },
          { "Id": "00082", "Name": "Phường Trần Hưng Đạo", "Level": "Phường" },
          { "Id": "00085", "Name": "Phường Phan Chu Trinh", "Level": "Phường" },
          { "Id": "00088", "Name": "Phường Hàng Bài", "Level": "Phường" }
        ]
      },
      {
        "Id": "003",
        "Name": "Quận Tây Hồ",
        "Wards": [
          { "Id": "00091", "Name": "Phường Phú Thượng", "Level": "Phường" },
          { "Id": "00094", "Name": "Phường Nhật Tân", "Level": "Phường" },
          { "Id": "00097", "Name": "Phường Tứ Liên", "Level": "Phường" },
          { "Id": "00100", "Name": "Phường Quảng An", "Level": "Phường" },
          { "Id": "00103", "Name": "Phường Xuân La", "Level": "Phường" },
          { "Id": "00106", "Name": "Phường Yên Phụ", "Level": "Phường" },
          { "Id": "00109", "Name": "Phường Bưởi", "Level": "Phường" },
          { "Id": "00112", "Name": "Phường Thụy Khuê", "Level": "Phường" }
        ]
      },
      {
        "Id": "004",
        "Name": "Quận Long Biên",
        "Wards": [
          { "Id": "00115", "Name": "Phường Thượng Thanh", "Level": "Phường" },
          { "Id": "00118", "Name": "Phường Ngọc Thụy", "Level": "Phường" },
          { "Id": "00121", "Name": "Phường Giang Biên", "Level": "Phường" },
          { "Id": "00124", "Name": "Phường Đức Giang", "Level": "Phường" },
          { "Id": "00127", "Name": "Phường Việt Hưng", "Level": "Phường" },
          { "Id": "00130", "Name": "Phường Gia Thụy", "Level": "Phường" },
          { "Id": "00133", "Name": "Phường Ngọc Lâm", "Level": "Phường" },
          { "Id": "00136", "Name": "Phường Phúc Lợi", "Level": "Phường" },
          { "Id": "00139", "Name": "Phường Bồ Đề", "Level": "Phường" },
          { "Id": "00142", "Name": "Phường Sài Đồng", "Level": "Phường" },
          { "Id": "00145", "Name": "Phường Long Biên", "Level": "Phường" },
          { "Id": "00148", "Name": "Phường Thạch Bàn", "Level": "Phường" },
          { "Id": "00151", "Name": "Phường Phúc Đồng", "Level": "Phường" },
          { "Id": "00154", "Name": "Phường Cự Khối", "Level": "Phường" }
        ]
      },
      {
        "Id": "005",
        "Name": "Quận Cầu Giấy",
        "Wards": [
          { "Id": "00157", "Name": "Phường Nghĩa Đô", "Level": "Phường" },
          { "Id": "00160", "Name": "Phường Nghĩa Tân", "Level": "Phường" },
          { "Id": "00163", "Name": "Phường Mai Dịch", "Level": "Phường" },
          { "Id": "00166", "Name": "Phường Dịch Vọng", "Level": "Phường" },
          { "Id": "00167", "Name": "Phường Dịch Vọng Hậu", "Level": "Phường" },
          { "Id": "00169", "Name": "Phường Quan Hoa", "Level": "Phường" },
          { "Id": "00172", "Name": "Phường Yên Hoà", "Level": "Phường" },
          { "Id": "00175", "Name": "Phường Trung Hoà", "Level": "Phường" }
        ]
      },
      {
        "Id": "006",
        "Name": "Quận Đống Đa",
        "Wards": [
          { "Id": "00178", "Name": "Phường Cát Linh", "Level": "Phường" },
          { "Id": "00181", "Name": "Phường Văn Miếu", "Level": "Phường" },
          { "Id": "00184", "Name": "Phường Quốc Tử Giám", "Level": "Phường" },
          { "Id": "00187", "Name": "Phường Láng Thượng", "Level": "Phường" },
          { "Id": "00190", "Name": "Phường Ô Chợ Dừa", "Level": "Phường" },
          { "Id": "00193", "Name": "Phường Văn Chương", "Level": "Phường" },
          { "Id": "00196", "Name": "Phường Hàng Bột", "Level": "Phường" },
          { "Id": "00199", "Name": "Phường Láng Hạ", "Level": "Phường" },
          { "Id": "00202", "Name": "Phường Khâm Thiên", "Level": "Phường" },
          { "Id": "00205", "Name": "Phường Thổ Quan", "Level": "Phường" },
          { "Id": "00208", "Name": "Phường Nam Đồng", "Level": "Phường" },
          { "Id": "00211", "Name": "Phường Trung Phụng", "Level": "Phường" },
          { "Id": "00214", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "00217", "Name": "Phường Trung Liệt", "Level": "Phường" },
          { "Id": "00220", "Name": "Phường Phương Liên", "Level": "Phường" },
          { "Id": "00223", "Name": "Phường Thịnh Quang", "Level": "Phường" },
          { "Id": "00226", "Name": "Phường Trung Tự", "Level": "Phường" },
          { "Id": "00229", "Name": "Phường Kim Liên", "Level": "Phường" },
          { "Id": "00232", "Name": "Phường Phương Mai", "Level": "Phường" },
          { "Id": "00235", "Name": "Phường Ngã Tư Sở", "Level": "Phường" },
          { "Id": "00238", "Name": "Phường Khương Thượng", "Level": "Phường" }
        ]
      },
      {
        "Id": "007",
        "Name": "Quận Hai Bà Trưng",
        "Wards": [
          { "Id": "00241", "Name": "Phường Nguyễn Du", "Level": "Phường" },
          { "Id": "00244", "Name": "Phường Bạch Đằng", "Level": "Phường" },
          { "Id": "00247", "Name": "Phường Phạm Đình Hổ", "Level": "Phường" },
          { "Id": "00256", "Name": "Phường Lê Đại Hành", "Level": "Phường" },
          { "Id": "00259", "Name": "Phường Đồng Nhân", "Level": "Phường" },
          { "Id": "00262", "Name": "Phường Phố Huế", "Level": "Phường" },
          { "Id": "00265", "Name": "Phường Đống Mác", "Level": "Phường" },
          { "Id": "00268", "Name": "Phường Thanh Lương", "Level": "Phường" },
          { "Id": "00271", "Name": "Phường Thanh Nhàn", "Level": "Phường" },
          { "Id": "00274", "Name": "Phường Cầu Dền", "Level": "Phường" },
          { "Id": "00277", "Name": "Phường Bách Khoa", "Level": "Phường" },
          { "Id": "00280", "Name": "Phường Đồng Tâm", "Level": "Phường" },
          { "Id": "00283", "Name": "Phường Vĩnh Tuy", "Level": "Phường" },
          { "Id": "00286", "Name": "Phường Bạch Mai", "Level": "Phường" },
          { "Id": "00289", "Name": "Phường Quỳnh Mai", "Level": "Phường" },
          { "Id": "00292", "Name": "Phường Quỳnh Lôi", "Level": "Phường" },
          { "Id": "00295", "Name": "Phường Minh Khai", "Level": "Phường" },
          { "Id": "00298", "Name": "Phường Trương Định", "Level": "Phường" }
        ]
      },
      {
        "Id": "008",
        "Name": "Quận Hoàng Mai",
        "Wards": [
          { "Id": "00301", "Name": "Phường Thanh Trì", "Level": "Phường" },
          { "Id": "00304", "Name": "Phường Vĩnh Hưng", "Level": "Phường" },
          { "Id": "00307", "Name": "Phường Định Công", "Level": "Phường" },
          { "Id": "00310", "Name": "Phường Mai Động", "Level": "Phường" },
          { "Id": "00313", "Name": "Phường Tương Mai", "Level": "Phường" },
          { "Id": "00316", "Name": "Phường Đại Kim", "Level": "Phường" },
          { "Id": "00319", "Name": "Phường Tân Mai", "Level": "Phường" },
          { "Id": "00322", "Name": "Phường Hoàng Văn Thụ", "Level": "Phường" },
          { "Id": "00325", "Name": "Phường Giáp Bát", "Level": "Phường" },
          { "Id": "00328", "Name": "Phường Lĩnh Nam", "Level": "Phường" },
          { "Id": "00331", "Name": "Phường Thịnh Liệt", "Level": "Phường" },
          { "Id": "00334", "Name": "Phường Trần Phú", "Level": "Phường" },
          { "Id": "00337", "Name": "Phường Hoàng Liệt", "Level": "Phường" },
          { "Id": "00340", "Name": "Phường Yên Sở", "Level": "Phường" }
        ]
      },
      {
        "Id": "009",
        "Name": "Quận Thanh Xuân",
        "Wards": [
          { "Id": "00343", "Name": "Phường Nhân Chính", "Level": "Phường" },
          { "Id": "00346", "Name": "Phường Thượng Đình", "Level": "Phường" },
          { "Id": "00349", "Name": "Phường Khương Trung", "Level": "Phường" },
          { "Id": "00352", "Name": "Phường Khương Mai", "Level": "Phường" },
          {
            "Id": "00355",
            "Name": "Phường Thanh Xuân Trung",
            "Level": "Phường"
          },
          { "Id": "00358", "Name": "Phường Phương Liệt", "Level": "Phường" },
          { "Id": "00361", "Name": "Phường Hạ Đình", "Level": "Phường" },
          { "Id": "00364", "Name": "Phường Khương Đình", "Level": "Phường" },
          { "Id": "00367", "Name": "Phường Thanh Xuân Bắc", "Level": "Phường" },
          { "Id": "00370", "Name": "Phường Thanh Xuân Nam", "Level": "Phường" },
          { "Id": "00373", "Name": "Phường Kim Giang", "Level": "Phường" }
        ]
      },
      {
        "Id": "016",
        "Name": "Huyện Sóc Sơn",
        "Wards": [
          { "Id": "00376", "Name": "Thị trấn Sóc Sơn", "Level": "Thị trấn" },
          { "Id": "00379", "Name": "Xã Bắc Sơn", "Level": "Xã" },
          { "Id": "00382", "Name": "Xã Minh Trí", "Level": "Xã" },
          { "Id": "00385", "Name": "Xã Hồng Kỳ", "Level": "Xã" },
          { "Id": "00388", "Name": "Xã Nam Sơn", "Level": "Xã" },
          { "Id": "00391", "Name": "Xã Trung Giã", "Level": "Xã" },
          { "Id": "00394", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "00397", "Name": "Xã Minh Phú", "Level": "Xã" },
          { "Id": "00400", "Name": "Xã Phù Linh", "Level": "Xã" },
          { "Id": "00403", "Name": "Xã Bắc Phú", "Level": "Xã" },
          { "Id": "00406", "Name": "Xã Tân Minh", "Level": "Xã" },
          { "Id": "00409", "Name": "Xã Quang Tiến", "Level": "Xã" },
          { "Id": "00412", "Name": "Xã Hiền Ninh", "Level": "Xã" },
          { "Id": "00415", "Name": "Xã Tân Dân", "Level": "Xã" },
          { "Id": "00418", "Name": "Xã Tiên Dược", "Level": "Xã" },
          { "Id": "00421", "Name": "Xã Việt Long", "Level": "Xã" },
          { "Id": "00424", "Name": "Xã Xuân Giang", "Level": "Xã" },
          { "Id": "00427", "Name": "Xã Mai Đình", "Level": "Xã" },
          { "Id": "00430", "Name": "Xã Đức Hoà", "Level": "Xã" },
          { "Id": "00433", "Name": "Xã Thanh Xuân", "Level": "Xã" },
          { "Id": "00436", "Name": "Xã Đông Xuân", "Level": "Xã" },
          { "Id": "00439", "Name": "Xã Kim Lũ", "Level": "Xã" },
          { "Id": "00442", "Name": "Xã Phú Cường", "Level": "Xã" },
          { "Id": "00445", "Name": "Xã Phú Minh", "Level": "Xã" },
          { "Id": "00448", "Name": "Xã Phù Lỗ", "Level": "Xã" },
          { "Id": "00451", "Name": "Xã Xuân Thu", "Level": "Xã" }
        ]
      },
      {
        "Id": "017",
        "Name": "Huyện Đông Anh",
        "Wards": [
          { "Id": "00454", "Name": "Thị trấn Đông Anh", "Level": "Thị trấn" },
          { "Id": "00457", "Name": "Xã Xuân Nộn", "Level": "Xã" },
          { "Id": "00460", "Name": "Xã Thuỵ Lâm", "Level": "Xã" },
          { "Id": "00463", "Name": "Xã Bắc Hồng", "Level": "Xã" },
          { "Id": "00466", "Name": "Xã Nguyên Khê", "Level": "Xã" },
          { "Id": "00469", "Name": "Xã Nam Hồng", "Level": "Xã" },
          { "Id": "00472", "Name": "Xã Tiên Dương", "Level": "Xã" },
          { "Id": "00475", "Name": "Xã Vân Hà", "Level": "Xã" },
          { "Id": "00478", "Name": "Xã Uy Nỗ", "Level": "Xã" },
          { "Id": "00481", "Name": "Xã Vân Nội", "Level": "Xã" },
          { "Id": "00484", "Name": "Xã Liên Hà", "Level": "Xã" },
          { "Id": "00487", "Name": "Xã Việt Hùng", "Level": "Xã" },
          { "Id": "00490", "Name": "Xã Kim Nỗ", "Level": "Xã" },
          { "Id": "00493", "Name": "Xã Kim Chung", "Level": "Xã" },
          { "Id": "00496", "Name": "Xã Dục Tú", "Level": "Xã" },
          { "Id": "00499", "Name": "Xã Đại Mạch", "Level": "Xã" },
          { "Id": "00502", "Name": "Xã Vĩnh Ngọc", "Level": "Xã" },
          { "Id": "00505", "Name": "Xã Cổ Loa", "Level": "Xã" },
          { "Id": "00508", "Name": "Xã Hải Bối", "Level": "Xã" },
          { "Id": "00511", "Name": "Xã Xuân Canh", "Level": "Xã" },
          { "Id": "00514", "Name": "Xã Võng La", "Level": "Xã" },
          { "Id": "00517", "Name": "Xã Tàm Xá", "Level": "Xã" },
          { "Id": "00520", "Name": "Xã Mai Lâm", "Level": "Xã" },
          { "Id": "00523", "Name": "Xã Đông Hội", "Level": "Xã" }
        ]
      },
      {
        "Id": "018",
        "Name": "Huyện Gia Lâm",
        "Wards": [
          { "Id": "00526", "Name": "Thị trấn Yên Viên", "Level": "Thị trấn" },
          { "Id": "00529", "Name": "Xã Yên Thường", "Level": "Xã" },
          { "Id": "00532", "Name": "Xã Yên Viên", "Level": "Xã" },
          { "Id": "00535", "Name": "Xã Ninh Hiệp", "Level": "Xã" },
          { "Id": "00538", "Name": "Xã Đình Xuyên", "Level": "Xã" },
          { "Id": "00541", "Name": "Xã Dương Hà", "Level": "Xã" },
          { "Id": "00544", "Name": "Xã Phù Đổng", "Level": "Xã" },
          { "Id": "00547", "Name": "Xã Trung Mầu", "Level": "Xã" },
          { "Id": "00550", "Name": "Xã Lệ Chi", "Level": "Xã" },
          { "Id": "00553", "Name": "Xã Cổ Bi", "Level": "Xã" },
          { "Id": "00556", "Name": "Xã Đặng Xá", "Level": "Xã" },
          { "Id": "00559", "Name": "Xã Phú Thị", "Level": "Xã" },
          { "Id": "00562", "Name": "Xã Kim Sơn", "Level": "Xã" },
          { "Id": "00565", "Name": "Thị trấn Trâu Quỳ", "Level": "Thị trấn" },
          { "Id": "00568", "Name": "Xã Dương Quang", "Level": "Xã" },
          { "Id": "00571", "Name": "Xã Dương Xá", "Level": "Xã" },
          { "Id": "00574", "Name": "Xã Đông Dư", "Level": "Xã" },
          { "Id": "00577", "Name": "Xã Đa Tốn", "Level": "Xã" },
          { "Id": "00580", "Name": "Xã Kiêu Kỵ", "Level": "Xã" },
          { "Id": "00583", "Name": "Xã Bát Tràng", "Level": "Xã" },
          { "Id": "00586", "Name": "Xã Kim Lan", "Level": "Xã" },
          { "Id": "00589", "Name": "Xã Văn Đức", "Level": "Xã" }
        ]
      },
      {
        "Id": "019",
        "Name": "Quận Nam Từ Liêm",
        "Wards": [
          { "Id": "00592", "Name": "Phường Cầu Diễn", "Level": "Phường" },
          { "Id": "00622", "Name": "Phường Xuân Phương", "Level": "Phường" },
          { "Id": "00623", "Name": "Phường Phương Canh", "Level": "Phường" },
          { "Id": "00625", "Name": "Phường Mỹ Đình 1", "Level": "Phường" },
          { "Id": "00626", "Name": "Phường Mỹ Đình 2", "Level": "Phường" },
          { "Id": "00628", "Name": "Phường Tây Mỗ", "Level": "Phường" },
          { "Id": "00631", "Name": "Phường Mễ Trì", "Level": "Phường" },
          { "Id": "00632", "Name": "Phường Phú Đô", "Level": "Phường" },
          { "Id": "00634", "Name": "Phường Đại Mỗ", "Level": "Phường" },
          { "Id": "00637", "Name": "Phường Trung Văn", "Level": "Phường" }
        ]
      },
      {
        "Id": "020",
        "Name": "Huyện Thanh Trì",
        "Wards": [
          { "Id": "00640", "Name": "Thị trấn Văn Điển", "Level": "Thị trấn" },
          { "Id": "00643", "Name": "Xã Tân Triều", "Level": "Xã" },
          { "Id": "00646", "Name": "Xã Thanh Liệt", "Level": "Xã" },
          { "Id": "00649", "Name": "Xã Tả Thanh Oai", "Level": "Xã" },
          { "Id": "00652", "Name": "Xã Hữu Hoà", "Level": "Xã" },
          { "Id": "00655", "Name": "Xã Tam Hiệp", "Level": "Xã" },
          { "Id": "00658", "Name": "Xã Tứ Hiệp", "Level": "Xã" },
          { "Id": "00661", "Name": "Xã Yên Mỹ", "Level": "Xã" },
          { "Id": "00664", "Name": "Xã Vĩnh Quỳnh", "Level": "Xã" },
          { "Id": "00667", "Name": "Xã Ngũ Hiệp", "Level": "Xã" },
          { "Id": "00670", "Name": "Xã Duyên Hà", "Level": "Xã" },
          { "Id": "00673", "Name": "Xã Ngọc Hồi", "Level": "Xã" },
          { "Id": "00676", "Name": "Xã Vạn Phúc", "Level": "Xã" },
          { "Id": "00679", "Name": "Xã Đại áng", "Level": "Xã" },
          { "Id": "00682", "Name": "Xã Liên Ninh", "Level": "Xã" },
          { "Id": "00685", "Name": "Xã Đông Mỹ", "Level": "Xã" }
        ]
      },
      {
        "Id": "021",
        "Name": "Quận Bắc Từ Liêm",
        "Wards": [
          { "Id": "00595", "Name": "Phường Thượng Cát", "Level": "Phường" },
          { "Id": "00598", "Name": "Phường Liên Mạc", "Level": "Phường" },
          { "Id": "00601", "Name": "Phường Đông Ngạc", "Level": "Phường" },
          { "Id": "00602", "Name": "Phường Đức Thắng", "Level": "Phường" },
          { "Id": "00604", "Name": "Phường Thụy Phương", "Level": "Phường" },
          { "Id": "00607", "Name": "Phường Tây Tựu", "Level": "Phường" },
          { "Id": "00610", "Name": "Phường Xuân Đỉnh", "Level": "Phường" },
          { "Id": "00611", "Name": "Phường Xuân Tảo", "Level": "Phường" },
          { "Id": "00613", "Name": "Phường Minh Khai", "Level": "Phường" },
          { "Id": "00616", "Name": "Phường Cổ Nhuế 1", "Level": "Phường" },
          { "Id": "00617", "Name": "Phường Cổ Nhuế 2", "Level": "Phường" },
          { "Id": "00619", "Name": "Phường Phú Diễn", "Level": "Phường" },
          { "Id": "00620", "Name": "Phường Phúc Diễn", "Level": "Phường" }
        ]
      },
      {
        "Id": "250",
        "Name": "Huyện Mê Linh",
        "Wards": [
          { "Id": "08973", "Name": "Thị trấn Chi Đông", "Level": "Thị trấn" },
          { "Id": "08974", "Name": "Xã Đại Thịnh", "Level": "Xã" },
          { "Id": "08977", "Name": "Xã Kim Hoa", "Level": "Xã" },
          { "Id": "08980", "Name": "Xã Thạch Đà", "Level": "Xã" },
          { "Id": "08983", "Name": "Xã Tiến Thắng", "Level": "Xã" },
          { "Id": "08986", "Name": "Xã Tự Lập", "Level": "Xã" },
          { "Id": "08989", "Name": "Thị trấn Quang Minh", "Level": "Thị trấn" },
          { "Id": "08992", "Name": "Xã Thanh Lâm", "Level": "Xã" },
          { "Id": "08995", "Name": "Xã Tam Đồng", "Level": "Xã" },
          { "Id": "08998", "Name": "Xã Liên Mạc", "Level": "Xã" },
          { "Id": "09001", "Name": "Xã Vạn Yên", "Level": "Xã" },
          { "Id": "09004", "Name": "Xã Chu Phan", "Level": "Xã" },
          { "Id": "09007", "Name": "Xã Tiến Thịnh", "Level": "Xã" },
          { "Id": "09010", "Name": "Xã Mê Linh", "Level": "Xã" },
          { "Id": "09013", "Name": "Xã Văn Khê", "Level": "Xã" },
          { "Id": "09016", "Name": "Xã Hoàng Kim", "Level": "Xã" },
          { "Id": "09019", "Name": "Xã Tiền Phong", "Level": "Xã" },
          { "Id": "09022", "Name": "Xã Tráng Việt", "Level": "Xã" }
        ]
      },
      {
        "Id": "268",
        "Name": "Quận Hà Đông",
        "Wards": [
          { "Id": "09538", "Name": "Phường Nguyễn Trãi", "Level": "Phường" },
          { "Id": "09541", "Name": "Phường Mộ Lao", "Level": "Phường" },
          { "Id": "09542", "Name": "Phường Văn Quán", "Level": "Phường" },
          { "Id": "09544", "Name": "Phường Vạn Phúc", "Level": "Phường" },
          { "Id": "09547", "Name": "Phường Yết Kiêu", "Level": "Phường" },
          { "Id": "09550", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "09551", "Name": "Phường La Khê", "Level": "Phường" },
          { "Id": "09552", "Name": "Phường Phú La", "Level": "Phường" },
          { "Id": "09553", "Name": "Phường Phúc La", "Level": "Phường" },
          { "Id": "09556", "Name": "Phường Hà Cầu", "Level": "Phường" },
          { "Id": "09562", "Name": "Phường Yên Nghĩa", "Level": "Phường" },
          { "Id": "09565", "Name": "Phường Kiến Hưng", "Level": "Phường" },
          { "Id": "09568", "Name": "Phường Phú Lãm", "Level": "Phường" },
          { "Id": "09571", "Name": "Phường Phú Lương", "Level": "Phường" },
          { "Id": "09886", "Name": "Phường Dương Nội", "Level": "Phường" },
          { "Id": "10117", "Name": "Phường Đồng Mai", "Level": "Phường" },
          { "Id": "10123", "Name": "Phường Biên Giang", "Level": "Phường" }
        ]
      },
      {
        "Id": "269",
        "Name": "Thị xã Sơn Tây",
        "Wards": [
          { "Id": "09574", "Name": "Phường Lê Lợi", "Level": "Phường" },
          { "Id": "09577", "Name": "Phường Phú Thịnh", "Level": "Phường" },
          { "Id": "09580", "Name": "Phường Ngô Quyền", "Level": "Phường" },
          { "Id": "09583", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "09586", "Name": "Phường Sơn Lộc", "Level": "Phường" },
          { "Id": "09589", "Name": "Phường Xuân Khanh", "Level": "Phường" },
          { "Id": "09592", "Name": "Xã Đường Lâm", "Level": "Xã" },
          { "Id": "09595", "Name": "Phường Viên Sơn", "Level": "Phường" },
          { "Id": "09598", "Name": "Xã Xuân Sơn", "Level": "Xã" },
          { "Id": "09601", "Name": "Phường Trung Hưng", "Level": "Phường" },
          { "Id": "09604", "Name": "Xã Thanh Mỹ", "Level": "Xã" },
          { "Id": "09607", "Name": "Phường Trung Sơn Trầm", "Level": "Phường" },
          { "Id": "09610", "Name": "Xã Kim Sơn", "Level": "Xã" },
          { "Id": "09613", "Name": "Xã Sơn Đông", "Level": "Xã" },
          { "Id": "09616", "Name": "Xã Cổ Đông", "Level": "Xã" }
        ]
      },
      {
        "Id": "271",
        "Name": "Huyện Ba Vì",
        "Wards": [
          { "Id": "09619", "Name": "Thị trấn Tây Đằng", "Level": "Thị trấn" },
          { "Id": "09625", "Name": "Xã Phú Cường", "Level": "Xã" },
          { "Id": "09628", "Name": "Xã Cổ Đô", "Level": "Xã" },
          { "Id": "09631", "Name": "Xã Tản Hồng", "Level": "Xã" },
          { "Id": "09634", "Name": "Xã Vạn Thắng", "Level": "Xã" },
          { "Id": "09637", "Name": "Xã Châu Sơn", "Level": "Xã" },
          { "Id": "09640", "Name": "Xã Phong Vân", "Level": "Xã" },
          { "Id": "09643", "Name": "Xã Phú Đông", "Level": "Xã" },
          { "Id": "09646", "Name": "Xã Phú Phương", "Level": "Xã" },
          { "Id": "09649", "Name": "Xã Phú Châu", "Level": "Xã" },
          { "Id": "09652", "Name": "Xã Thái Hòa", "Level": "Xã" },
          { "Id": "09655", "Name": "Xã Đồng Thái", "Level": "Xã" },
          { "Id": "09658", "Name": "Xã Phú Sơn", "Level": "Xã" },
          { "Id": "09661", "Name": "Xã Minh Châu", "Level": "Xã" },
          { "Id": "09664", "Name": "Xã Vật Lại", "Level": "Xã" },
          { "Id": "09667", "Name": "Xã Chu Minh", "Level": "Xã" },
          { "Id": "09670", "Name": "Xã Tòng Bạt", "Level": "Xã" },
          { "Id": "09673", "Name": "Xã Cẩm Lĩnh", "Level": "Xã" },
          { "Id": "09676", "Name": "Xã Sơn Đà", "Level": "Xã" },
          { "Id": "09679", "Name": "Xã Đông Quang", "Level": "Xã" },
          { "Id": "09682", "Name": "Xã Tiên Phong", "Level": "Xã" },
          { "Id": "09685", "Name": "Xã Thụy An", "Level": "Xã" },
          { "Id": "09688", "Name": "Xã Cam Thượng", "Level": "Xã" },
          { "Id": "09691", "Name": "Xã Thuần Mỹ", "Level": "Xã" },
          { "Id": "09694", "Name": "Xã Tản Lĩnh", "Level": "Xã" },
          { "Id": "09697", "Name": "Xã Ba Trại", "Level": "Xã" },
          { "Id": "09700", "Name": "Xã Minh Quang", "Level": "Xã" },
          { "Id": "09703", "Name": "Xã Ba Vì", "Level": "Xã" },
          { "Id": "09706", "Name": "Xã Vân Hòa", "Level": "Xã" },
          { "Id": "09709", "Name": "Xã Yên Bài", "Level": "Xã" },
          { "Id": "09712", "Name": "Xã Khánh Thượng", "Level": "Xã" }
        ]
      },
      {
        "Id": "272",
        "Name": "Huyện Phúc Thọ",
        "Wards": [
          { "Id": "09715", "Name": "Thị trấn Phúc Thọ", "Level": "Thị trấn" },
          { "Id": "09718", "Name": "Xã Vân Hà", "Level": "Xã" },
          { "Id": "09721", "Name": "Xã Vân Phúc", "Level": "Xã" },
          { "Id": "09724", "Name": "Xã Vân Nam", "Level": "Xã" },
          { "Id": "09727", "Name": "Xã Xuân Đình", "Level": "Xã" },
          { "Id": "09733", "Name": "Xã Sen Phương", "Level": "Xã" },
          { "Id": "09739", "Name": "Xã Võng Xuyên", "Level": "Xã" },
          { "Id": "09742", "Name": "Xã Thọ Lộc", "Level": "Xã" },
          { "Id": "09745", "Name": "Xã Long Xuyên", "Level": "Xã" },
          { "Id": "09748", "Name": "Xã Thượng Cốc", "Level": "Xã" },
          { "Id": "09751", "Name": "Xã Hát Môn", "Level": "Xã" },
          { "Id": "09754", "Name": "Xã Tích Giang", "Level": "Xã" },
          { "Id": "09757", "Name": "Xã Thanh Đa", "Level": "Xã" },
          { "Id": "09760", "Name": "Xã Trạch Mỹ Lộc", "Level": "Xã" },
          { "Id": "09763", "Name": "Xã Phúc Hòa", "Level": "Xã" },
          { "Id": "09766", "Name": "Xã Ngọc Tảo", "Level": "Xã" },
          { "Id": "09769", "Name": "Xã Phụng Thượng", "Level": "Xã" },
          { "Id": "09772", "Name": "Xã Tam Thuấn", "Level": "Xã" },
          { "Id": "09775", "Name": "Xã Tam Hiệp", "Level": "Xã" },
          { "Id": "09778", "Name": "Xã Hiệp Thuận", "Level": "Xã" },
          { "Id": "09781", "Name": "Xã Liên Hiệp", "Level": "Xã" }
        ]
      },
      {
        "Id": "273",
        "Name": "Huyện Đan Phượng",
        "Wards": [
          { "Id": "09784", "Name": "Thị trấn Phùng", "Level": "Thị trấn" },
          { "Id": "09787", "Name": "Xã Trung Châu", "Level": "Xã" },
          { "Id": "09790", "Name": "Xã Thọ An", "Level": "Xã" },
          { "Id": "09793", "Name": "Xã Thọ Xuân", "Level": "Xã" },
          { "Id": "09796", "Name": "Xã Hồng Hà", "Level": "Xã" },
          { "Id": "09799", "Name": "Xã Liên Hồng", "Level": "Xã" },
          { "Id": "09802", "Name": "Xã Liên Hà", "Level": "Xã" },
          { "Id": "09805", "Name": "Xã Hạ Mỗ", "Level": "Xã" },
          { "Id": "09808", "Name": "Xã Liên Trung", "Level": "Xã" },
          { "Id": "09811", "Name": "Xã Phương Đình", "Level": "Xã" },
          { "Id": "09814", "Name": "Xã Thượng Mỗ", "Level": "Xã" },
          { "Id": "09817", "Name": "Xã Tân Hội", "Level": "Xã" },
          { "Id": "09820", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "09823", "Name": "Xã Đan Phượng", "Level": "Xã" },
          { "Id": "09826", "Name": "Xã Đồng Tháp", "Level": "Xã" },
          { "Id": "09829", "Name": "Xã Song Phượng", "Level": "Xã" }
        ]
      },
      {
        "Id": "274",
        "Name": "Huyện Hoài Đức",
        "Wards": [
          { "Id": "09832", "Name": "Thị trấn Trạm Trôi", "Level": "Thị trấn" },
          { "Id": "09835", "Name": "Xã Đức Thượng", "Level": "Xã" },
          { "Id": "09838", "Name": "Xã Minh Khai", "Level": "Xã" },
          { "Id": "09841", "Name": "Xã Dương Liễu", "Level": "Xã" },
          { "Id": "09844", "Name": "Xã Di Trạch", "Level": "Xã" },
          { "Id": "09847", "Name": "Xã Đức Giang", "Level": "Xã" },
          { "Id": "09850", "Name": "Xã Cát Quế", "Level": "Xã" },
          { "Id": "09853", "Name": "Xã Kim Chung", "Level": "Xã" },
          { "Id": "09856", "Name": "Xã Yên Sở", "Level": "Xã" },
          { "Id": "09859", "Name": "Xã Sơn Đồng", "Level": "Xã" },
          { "Id": "09862", "Name": "Xã Vân Canh", "Level": "Xã" },
          { "Id": "09865", "Name": "Xã Đắc Sở", "Level": "Xã" },
          { "Id": "09868", "Name": "Xã Lại Yên", "Level": "Xã" },
          { "Id": "09871", "Name": "Xã Tiền Yên", "Level": "Xã" },
          { "Id": "09874", "Name": "Xã Song Phương", "Level": "Xã" },
          { "Id": "09877", "Name": "Xã An Khánh", "Level": "Xã" },
          { "Id": "09880", "Name": "Xã An Thượng", "Level": "Xã" },
          { "Id": "09883", "Name": "Xã Vân Côn", "Level": "Xã" },
          { "Id": "09889", "Name": "Xã La Phù", "Level": "Xã" },
          { "Id": "09892", "Name": "Xã Đông La", "Level": "Xã" }
        ]
      },
      {
        "Id": "275",
        "Name": "Huyện Quốc Oai",
        "Wards": [
          { "Id": "04939", "Name": "Xã Đông Xuân", "Level": "Xã" },
          { "Id": "09895", "Name": "Thị trấn Quốc Oai", "Level": "Thị trấn" },
          { "Id": "09898", "Name": "Xã Sài Sơn", "Level": "Xã" },
          { "Id": "09901", "Name": "Xã Phượng Cách", "Level": "Xã" },
          { "Id": "09904", "Name": "Xã Yên Sơn", "Level": "Xã" },
          { "Id": "09907", "Name": "Xã Ngọc Liệp", "Level": "Xã" },
          { "Id": "09910", "Name": "Xã Ngọc Mỹ", "Level": "Xã" },
          { "Id": "09913", "Name": "Xã Liệp Tuyết", "Level": "Xã" },
          { "Id": "09916", "Name": "Xã Thạch Thán", "Level": "Xã" },
          { "Id": "09919", "Name": "Xã Đồng Quang", "Level": "Xã" },
          { "Id": "09922", "Name": "Xã Phú Cát", "Level": "Xã" },
          { "Id": "09925", "Name": "Xã Tuyết Nghĩa", "Level": "Xã" },
          { "Id": "09928", "Name": "Xã Nghĩa Hương", "Level": "Xã" },
          { "Id": "09931", "Name": "Xã Cộng Hòa", "Level": "Xã" },
          { "Id": "09934", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "09937", "Name": "Xã Đại Thành", "Level": "Xã" },
          { "Id": "09940", "Name": "Xã Phú Mãn", "Level": "Xã" },
          { "Id": "09943", "Name": "Xã Cấn Hữu", "Level": "Xã" },
          { "Id": "09946", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "09949", "Name": "Xã Hòa Thạch", "Level": "Xã" },
          { "Id": "09952", "Name": "Xã Đông Yên", "Level": "Xã" }
        ]
      },
      {
        "Id": "276",
        "Name": "Huyện Thạch Thất",
        "Wards": [
          { "Id": "04927", "Name": "Xã Yên Trung", "Level": "Xã" },
          { "Id": "04930", "Name": "Xã Yên Bình", "Level": "Xã" },
          { "Id": "04936", "Name": "Xã Tiến Xuân", "Level": "Xã" },
          { "Id": "09955", "Name": "Thị trấn Liên Quan", "Level": "Thị trấn" },
          { "Id": "09958", "Name": "Xã Đại Đồng", "Level": "Xã" },
          { "Id": "09961", "Name": "Xã Cẩm Yên", "Level": "Xã" },
          { "Id": "09964", "Name": "Xã Lại Thượng", "Level": "Xã" },
          { "Id": "09967", "Name": "Xã Phú Kim", "Level": "Xã" },
          { "Id": "09970", "Name": "Xã Hương Ngải", "Level": "Xã" },
          { "Id": "09973", "Name": "Xã Canh Nậu", "Level": "Xã" },
          { "Id": "09976", "Name": "Xã Kim Quan", "Level": "Xã" },
          { "Id": "09979", "Name": "Xã Dị Nậu", "Level": "Xã" },
          { "Id": "09982", "Name": "Xã Bình Yên", "Level": "Xã" },
          { "Id": "09985", "Name": "Xã Chàng Sơn", "Level": "Xã" },
          { "Id": "09988", "Name": "Xã Thạch Hoà", "Level": "Xã" },
          { "Id": "09991", "Name": "Xã Cần Kiệm", "Level": "Xã" },
          { "Id": "09994", "Name": "Xã Hữu Bằng", "Level": "Xã" },
          { "Id": "09997", "Name": "Xã Phùng Xá", "Level": "Xã" },
          { "Id": "10000", "Name": "Xã Tân Xã", "Level": "Xã" },
          { "Id": "10003", "Name": "Xã Thạch Xá", "Level": "Xã" },
          { "Id": "10006", "Name": "Xã Bình Phú", "Level": "Xã" },
          { "Id": "10009", "Name": "Xã Hạ Bằng", "Level": "Xã" },
          { "Id": "10012", "Name": "Xã Đồng Trúc", "Level": "Xã" }
        ]
      },
      {
        "Id": "277",
        "Name": "Huyện Chương Mỹ",
        "Wards": [
          { "Id": "10015", "Name": "Thị trấn Chúc Sơn", "Level": "Thị trấn" },
          { "Id": "10018", "Name": "Thị trấn Xuân Mai", "Level": "Thị trấn" },
          { "Id": "10021", "Name": "Xã Phụng Châu", "Level": "Xã" },
          { "Id": "10024", "Name": "Xã Tiên Phương", "Level": "Xã" },
          { "Id": "10027", "Name": "Xã Đông Sơn", "Level": "Xã" },
          { "Id": "10030", "Name": "Xã Đông Phương Yên", "Level": "Xã" },
          { "Id": "10033", "Name": "Xã Phú Nghĩa", "Level": "Xã" },
          { "Id": "10039", "Name": "Xã Trường Yên", "Level": "Xã" },
          { "Id": "10042", "Name": "Xã Ngọc Hòa", "Level": "Xã" },
          { "Id": "10045", "Name": "Xã Thủy Xuân Tiên", "Level": "Xã" },
          { "Id": "10048", "Name": "Xã Thanh Bình", "Level": "Xã" },
          { "Id": "10051", "Name": "Xã Trung Hòa", "Level": "Xã" },
          { "Id": "10054", "Name": "Xã Đại Yên", "Level": "Xã" },
          { "Id": "10057", "Name": "Xã Thụy Hương", "Level": "Xã" },
          { "Id": "10060", "Name": "Xã Tốt Động", "Level": "Xã" },
          { "Id": "10063", "Name": "Xã Lam Điền", "Level": "Xã" },
          { "Id": "10066", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "10069", "Name": "Xã Nam Phương Tiến", "Level": "Xã" },
          { "Id": "10072", "Name": "Xã Hợp Đồng", "Level": "Xã" },
          { "Id": "10075", "Name": "Xã Hoàng Văn Thụ", "Level": "Xã" },
          { "Id": "10078", "Name": "Xã Hoàng Diệu", "Level": "Xã" },
          { "Id": "10081", "Name": "Xã Hữu Văn", "Level": "Xã" },
          { "Id": "10084", "Name": "Xã Quảng Bị", "Level": "Xã" },
          { "Id": "10087", "Name": "Xã Mỹ Lương", "Level": "Xã" },
          { "Id": "10090", "Name": "Xã Thượng Vực", "Level": "Xã" },
          { "Id": "10093", "Name": "Xã Hồng Phong", "Level": "Xã" },
          { "Id": "10096", "Name": "Xã Đồng Phú", "Level": "Xã" },
          { "Id": "10099", "Name": "Xã Trần Phú", "Level": "Xã" },
          { "Id": "10102", "Name": "Xã Văn Võ", "Level": "Xã" },
          { "Id": "10105", "Name": "Xã Đồng Lạc", "Level": "Xã" },
          { "Id": "10108", "Name": "Xã Hòa Chính", "Level": "Xã" },
          { "Id": "10111", "Name": "Xã Phú Nam An", "Level": "Xã" }
        ]
      },
      {
        "Id": "278",
        "Name": "Huyện Thanh Oai",
        "Wards": [
          { "Id": "10114", "Name": "Thị trấn Kim Bài", "Level": "Thị trấn" },
          { "Id": "10120", "Name": "Xã Cự Khê", "Level": "Xã" },
          { "Id": "10126", "Name": "Xã Bích Hòa", "Level": "Xã" },
          { "Id": "10129", "Name": "Xã Mỹ Hưng", "Level": "Xã" },
          { "Id": "10132", "Name": "Xã Cao Viên", "Level": "Xã" },
          { "Id": "10135", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "10138", "Name": "Xã Tam Hưng", "Level": "Xã" },
          { "Id": "10141", "Name": "Xã Thanh Cao", "Level": "Xã" },
          { "Id": "10144", "Name": "Xã Thanh Thùy", "Level": "Xã" },
          { "Id": "10147", "Name": "Xã Thanh Mai", "Level": "Xã" },
          { "Id": "10150", "Name": "Xã Thanh Văn", "Level": "Xã" },
          { "Id": "10153", "Name": "Xã Đỗ Động", "Level": "Xã" },
          { "Id": "10156", "Name": "Xã Kim An", "Level": "Xã" },
          { "Id": "10159", "Name": "Xã Kim Thư", "Level": "Xã" },
          { "Id": "10162", "Name": "Xã Phương Trung", "Level": "Xã" },
          { "Id": "10165", "Name": "Xã Tân Ước", "Level": "Xã" },
          { "Id": "10168", "Name": "Xã Dân Hòa", "Level": "Xã" },
          { "Id": "10171", "Name": "Xã Liên Châu", "Level": "Xã" },
          { "Id": "10174", "Name": "Xã Cao Dương", "Level": "Xã" },
          { "Id": "10177", "Name": "Xã Xuân Dương", "Level": "Xã" },
          { "Id": "10180", "Name": "Xã Hồng Dương", "Level": "Xã" }
        ]
      },
      {
        "Id": "279",
        "Name": "Huyện Thường Tín",
        "Wards": [
          { "Id": "10183", "Name": "Thị trấn Thường Tín", "Level": "Thị trấn" },
          { "Id": "10186", "Name": "Xã Ninh Sở", "Level": "Xã" },
          { "Id": "10189", "Name": "Xã Nhị Khê", "Level": "Xã" },
          { "Id": "10192", "Name": "Xã Duyên Thái", "Level": "Xã" },
          { "Id": "10195", "Name": "Xã Khánh Hà", "Level": "Xã" },
          { "Id": "10198", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "10201", "Name": "Xã Văn Bình", "Level": "Xã" },
          { "Id": "10204", "Name": "Xã Hiền Giang", "Level": "Xã" },
          { "Id": "10207", "Name": "Xã Hồng Vân", "Level": "Xã" },
          { "Id": "10210", "Name": "Xã Vân Tảo", "Level": "Xã" },
          { "Id": "10213", "Name": "Xã Liên Phương", "Level": "Xã" },
          { "Id": "10216", "Name": "Xã Văn Phú", "Level": "Xã" },
          { "Id": "10219", "Name": "Xã Tự Nhiên", "Level": "Xã" },
          { "Id": "10222", "Name": "Xã Tiền Phong", "Level": "Xã" },
          { "Id": "10225", "Name": "Xã Hà Hồi", "Level": "Xã" },
          { "Id": "10228", "Name": "Xã Thư Phú", "Level": "Xã" },
          { "Id": "10231", "Name": "Xã Nguyễn Trãi", "Level": "Xã" },
          { "Id": "10234", "Name": "Xã Quất Động", "Level": "Xã" },
          { "Id": "10237", "Name": "Xã Chương Dương", "Level": "Xã" },
          { "Id": "10240", "Name": "Xã Tân Minh", "Level": "Xã" },
          { "Id": "10243", "Name": "Xã Lê Lợi", "Level": "Xã" },
          { "Id": "10246", "Name": "Xã Thắng Lợi", "Level": "Xã" },
          { "Id": "10249", "Name": "Xã Dũng Tiến", "Level": "Xã" },
          { "Id": "10252", "Name": "Xã Thống Nhất", "Level": "Xã" },
          { "Id": "10255", "Name": "Xã Nghiêm Xuyên", "Level": "Xã" },
          { "Id": "10258", "Name": "Xã Tô Hiệu", "Level": "Xã" },
          { "Id": "10261", "Name": "Xã Văn Tự", "Level": "Xã" },
          { "Id": "10264", "Name": "Xã Vạn Điểm", "Level": "Xã" },
          { "Id": "10267", "Name": "Xã Minh Cường", "Level": "Xã" }
        ]
      },
      {
        "Id": "280",
        "Name": "Huyện Phú Xuyên",
        "Wards": [
          { "Id": "10270", "Name": "Thị trấn Phú Minh", "Level": "Thị trấn" },
          { "Id": "10273", "Name": "Thị trấn Phú Xuyên", "Level": "Thị trấn" },
          { "Id": "10276", "Name": "Xã Hồng Minh", "Level": "Xã" },
          { "Id": "10279", "Name": "Xã Phượng Dực", "Level": "Xã" },
          { "Id": "10282", "Name": "Xã Nam Tiến", "Level": "Xã" },
          { "Id": "10288", "Name": "Xã Tri Trung", "Level": "Xã" },
          { "Id": "10291", "Name": "Xã Đại Thắng", "Level": "Xã" },
          { "Id": "10294", "Name": "Xã Phú Túc", "Level": "Xã" },
          { "Id": "10297", "Name": "Xã Văn Hoàng", "Level": "Xã" },
          { "Id": "10300", "Name": "Xã Hồng Thái", "Level": "Xã" },
          { "Id": "10303", "Name": "Xã Hoàng Long", "Level": "Xã" },
          { "Id": "10306", "Name": "Xã Quang Trung", "Level": "Xã" },
          { "Id": "10309", "Name": "Xã Nam Phong", "Level": "Xã" },
          { "Id": "10312", "Name": "Xã Nam Triều", "Level": "Xã" },
          { "Id": "10315", "Name": "Xã Tân Dân", "Level": "Xã" },
          { "Id": "10318", "Name": "Xã Sơn Hà", "Level": "Xã" },
          { "Id": "10321", "Name": "Xã Chuyên Mỹ", "Level": "Xã" },
          { "Id": "10324", "Name": "Xã Khai Thái", "Level": "Xã" },
          { "Id": "10327", "Name": "Xã Phúc Tiến", "Level": "Xã" },
          { "Id": "10330", "Name": "Xã Vân Từ", "Level": "Xã" },
          { "Id": "10333", "Name": "Xã Tri Thủy", "Level": "Xã" },
          { "Id": "10336", "Name": "Xã Đại Xuyên", "Level": "Xã" },
          { "Id": "10339", "Name": "Xã Phú Yên", "Level": "Xã" },
          { "Id": "10342", "Name": "Xã Bạch Hạ", "Level": "Xã" },
          { "Id": "10345", "Name": "Xã Quang Lãng", "Level": "Xã" },
          { "Id": "10348", "Name": "Xã Châu Can", "Level": "Xã" },
          { "Id": "10351", "Name": "Xã Minh Tân", "Level": "Xã" }
        ]
      },
      {
        "Id": "281",
        "Name": "Huyện Ứng Hòa",
        "Wards": [
          { "Id": "10354", "Name": "Thị trấn Vân Đình", "Level": "Thị trấn" },
          { "Id": "10357", "Name": "Xã Viên An", "Level": "Xã" },
          { "Id": "10360", "Name": "Xã Viên Nội", "Level": "Xã" },
          { "Id": "10363", "Name": "Xã Hoa Sơn", "Level": "Xã" },
          { "Id": "10366", "Name": "Xã Quảng Phú Cầu", "Level": "Xã" },
          { "Id": "10369", "Name": "Xã Trường Thịnh", "Level": "Xã" },
          { "Id": "10372", "Name": "Xã Cao Thành", "Level": "Xã" },
          { "Id": "10375", "Name": "Xã Liên Bạt", "Level": "Xã" },
          { "Id": "10378", "Name": "Xã Sơn Công", "Level": "Xã" },
          { "Id": "10381", "Name": "Xã Đồng Tiến", "Level": "Xã" },
          { "Id": "10384", "Name": "Xã Phương Tú", "Level": "Xã" },
          { "Id": "10387", "Name": "Xã Trung Tú", "Level": "Xã" },
          { "Id": "10390", "Name": "Xã Đồng Tân", "Level": "Xã" },
          { "Id": "10393", "Name": "Xã Tảo Dương Văn", "Level": "Xã" },
          { "Id": "10396", "Name": "Xã Vạn Thái", "Level": "Xã" },
          { "Id": "10399", "Name": "Xã Minh Đức", "Level": "Xã" },
          { "Id": "10402", "Name": "Xã Hòa Lâm", "Level": "Xã" },
          { "Id": "10405", "Name": "Xã Hòa Xá", "Level": "Xã" },
          { "Id": "10408", "Name": "Xã Trầm Lộng", "Level": "Xã" },
          { "Id": "10411", "Name": "Xã Kim Đường", "Level": "Xã" },
          { "Id": "10414", "Name": "Xã Hòa Nam", "Level": "Xã" },
          { "Id": "10417", "Name": "Xã Hòa Phú", "Level": "Xã" },
          { "Id": "10420", "Name": "Xã Đội Bình", "Level": "Xã" },
          { "Id": "10423", "Name": "Xã Đại Hùng", "Level": "Xã" },
          { "Id": "10426", "Name": "Xã Đông Lỗ", "Level": "Xã" },
          { "Id": "10429", "Name": "Xã Phù Lưu", "Level": "Xã" },
          { "Id": "10432", "Name": "Xã Đại Cường", "Level": "Xã" },
          { "Id": "10435", "Name": "Xã Lưu Hoàng", "Level": "Xã" },
          { "Id": "10438", "Name": "Xã Hồng Quang", "Level": "Xã" }
        ]
      },
      {
        "Id": "282",
        "Name": "Huyện Mỹ Đức",
        "Wards": [
          { "Id": "10441", "Name": "Thị trấn Đại Nghĩa", "Level": "Thị trấn" },
          { "Id": "10444", "Name": "Xã Đồng Tâm", "Level": "Xã" },
          { "Id": "10447", "Name": "Xã Thượng Lâm", "Level": "Xã" },
          { "Id": "10450", "Name": "Xã Tuy Lai", "Level": "Xã" },
          { "Id": "10453", "Name": "Xã Phúc Lâm", "Level": "Xã" },
          { "Id": "10456", "Name": "Xã Mỹ Thành", "Level": "Xã" },
          { "Id": "10459", "Name": "Xã Bột Xuyên", "Level": "Xã" },
          { "Id": "10462", "Name": "Xã An Mỹ", "Level": "Xã" },
          { "Id": "10465", "Name": "Xã Hồng Sơn", "Level": "Xã" },
          { "Id": "10468", "Name": "Xã Lê Thanh", "Level": "Xã" },
          { "Id": "10471", "Name": "Xã Xuy Xá", "Level": "Xã" },
          { "Id": "10474", "Name": "Xã Phùng Xá", "Level": "Xã" },
          { "Id": "10477", "Name": "Xã Phù Lưu Tế", "Level": "Xã" },
          { "Id": "10480", "Name": "Xã Đại Hưng", "Level": "Xã" },
          { "Id": "10483", "Name": "Xã Vạn Kim", "Level": "Xã" },
          { "Id": "10486", "Name": "Xã Đốc Tín", "Level": "Xã" },
          { "Id": "10489", "Name": "Xã Hương Sơn", "Level": "Xã" },
          { "Id": "10492", "Name": "Xã Hùng Tiến", "Level": "Xã" },
          { "Id": "10495", "Name": "Xã An Tiến", "Level": "Xã" },
          { "Id": "10498", "Name": "Xã Hợp Tiến", "Level": "Xã" },
          { "Id": "10501", "Name": "Xã Hợp Thanh", "Level": "Xã" },
          { "Id": "10504", "Name": "Xã An Phú", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "02",
    "Name": "Tỉnh Hà Giang",
    "Districts": [
      {
        "Id": "024",
        "Name": "Thành phố Hà Giang",
        "Wards": [
          { "Id": "00688", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "00691", "Name": "Phường Trần Phú", "Level": "Phường" },
          { "Id": "00692", "Name": "Phường Ngọc Hà", "Level": "Phường" },
          { "Id": "00694", "Name": "Phường Nguyễn Trãi", "Level": "Phường" },
          { "Id": "00697", "Name": "Phường Minh Khai", "Level": "Phường" },
          { "Id": "00700", "Name": "Xã Ngọc Đường", "Level": "Xã" },
          { "Id": "00946", "Name": "Xã Phương Độ", "Level": "Xã" },
          { "Id": "00949", "Name": "Xã Phương Thiện", "Level": "Xã" }
        ]
      },
      {
        "Id": "026",
        "Name": "Huyện Đồng Văn",
        "Wards": [
          { "Id": "00712", "Name": "Thị trấn Phó Bảng", "Level": "Thị trấn" },
          { "Id": "00715", "Name": "Xã Lũng Cú", "Level": "Xã" },
          { "Id": "00718", "Name": "Xã Má Lé", "Level": "Xã" },
          { "Id": "00721", "Name": "Thị trấn Đồng Văn", "Level": "Thị trấn" },
          { "Id": "00724", "Name": "Xã Lũng Táo", "Level": "Xã" },
          { "Id": "00727", "Name": "Xã Phố Là", "Level": "Xã" },
          { "Id": "00730", "Name": "Xã Thài Phìn Tủng", "Level": "Xã" },
          { "Id": "00733", "Name": "Xã Sủng Là", "Level": "Xã" },
          { "Id": "00736", "Name": "Xã Xà Phìn", "Level": "Xã" },
          { "Id": "00739", "Name": "Xã Tả Phìn", "Level": "Xã" },
          { "Id": "00742", "Name": "Xã Tả Lủng", "Level": "Xã" },
          { "Id": "00745", "Name": "Xã Phố Cáo", "Level": "Xã" },
          { "Id": "00748", "Name": "Xã Sính Lủng", "Level": "Xã" },
          { "Id": "00751", "Name": "Xã Sảng Tủng", "Level": "Xã" },
          { "Id": "00754", "Name": "Xã Lũng Thầu", "Level": "Xã" },
          { "Id": "00757", "Name": "Xã Hố Quáng Phìn", "Level": "Xã" },
          { "Id": "00760", "Name": "Xã Vần Chải", "Level": "Xã" },
          { "Id": "00763", "Name": "Xã Lũng Phìn", "Level": "Xã" },
          { "Id": "00766", "Name": "Xã Sủng Trái", "Level": "Xã" }
        ]
      },
      {
        "Id": "027",
        "Name": "Huyện Mèo Vạc",
        "Wards": [
          { "Id": "00769", "Name": "Thị trấn Mèo Vạc", "Level": "Thị trấn" },
          { "Id": "00772", "Name": "Xã Thượng Phùng", "Level": "Xã" },
          { "Id": "00775", "Name": "Xã Pải Lủng", "Level": "Xã" },
          { "Id": "00778", "Name": "Xã Xín Cái", "Level": "Xã" },
          { "Id": "00781", "Name": "Xã Pả Vi", "Level": "Xã" },
          { "Id": "00784", "Name": "Xã Giàng Chu Phìn", "Level": "Xã" },
          { "Id": "00787", "Name": "Xã Sủng Trà", "Level": "Xã" },
          { "Id": "00790", "Name": "Xã Sủng Máng", "Level": "Xã" },
          { "Id": "00793", "Name": "Xã Sơn Vĩ", "Level": "Xã" },
          { "Id": "00796", "Name": "Xã Tả Lủng", "Level": "Xã" },
          { "Id": "00799", "Name": "Xã Cán Chu Phìn", "Level": "Xã" },
          { "Id": "00802", "Name": "Xã Lũng Pù", "Level": "Xã" },
          { "Id": "00805", "Name": "Xã Lũng Chinh", "Level": "Xã" },
          { "Id": "00808", "Name": "Xã Tát Ngà", "Level": "Xã" },
          { "Id": "00811", "Name": "Xã Nậm Ban", "Level": "Xã" },
          { "Id": "00814", "Name": "Xã Khâu Vai", "Level": "Xã" },
          { "Id": "00815", "Name": "Xã Niêm Tòng", "Level": "Xã" },
          { "Id": "00817", "Name": "Xã Niêm Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "028",
        "Name": "Huyện Yên Minh",
        "Wards": [
          { "Id": "00820", "Name": "Thị trấn Yên Minh", "Level": "Thị trấn" },
          { "Id": "00823", "Name": "Xã Thắng Mố", "Level": "Xã" },
          { "Id": "00826", "Name": "Xã Phú Lũng", "Level": "Xã" },
          { "Id": "00829", "Name": "Xã Sủng Tráng", "Level": "Xã" },
          { "Id": "00832", "Name": "Xã Bạch Đích", "Level": "Xã" },
          { "Id": "00835", "Name": "Xã Na Khê", "Level": "Xã" },
          { "Id": "00838", "Name": "Xã Sủng Thài", "Level": "Xã" },
          { "Id": "00841", "Name": "Xã Hữu Vinh", "Level": "Xã" },
          { "Id": "00844", "Name": "Xã Lao Và Chải", "Level": "Xã" },
          { "Id": "00847", "Name": "Xã Mậu Duệ", "Level": "Xã" },
          { "Id": "00850", "Name": "Xã Đông Minh", "Level": "Xã" },
          { "Id": "00853", "Name": "Xã Mậu Long", "Level": "Xã" },
          { "Id": "00856", "Name": "Xã Ngam La", "Level": "Xã" },
          { "Id": "00859", "Name": "Xã Ngọc Long", "Level": "Xã" },
          { "Id": "00862", "Name": "Xã Đường Thượng", "Level": "Xã" },
          { "Id": "00865", "Name": "Xã Lũng Hồ", "Level": "Xã" },
          { "Id": "00868", "Name": "Xã Du Tiến", "Level": "Xã" },
          { "Id": "00871", "Name": "Xã Du Già", "Level": "Xã" }
        ]
      },
      {
        "Id": "029",
        "Name": "Huyện Quản Bạ",
        "Wards": [
          { "Id": "00874", "Name": "Thị trấn Tam Sơn", "Level": "Thị trấn" },
          { "Id": "00877", "Name": "Xã Bát Đại Sơn", "Level": "Xã" },
          { "Id": "00880", "Name": "Xã Nghĩa Thuận", "Level": "Xã" },
          { "Id": "00883", "Name": "Xã Cán Tỷ", "Level": "Xã" },
          { "Id": "00886", "Name": "Xã Cao Mã Pờ", "Level": "Xã" },
          { "Id": "00889", "Name": "Xã Thanh Vân", "Level": "Xã" },
          { "Id": "00892", "Name": "Xã Tùng Vài", "Level": "Xã" },
          { "Id": "00895", "Name": "Xã Đông Hà", "Level": "Xã" },
          { "Id": "00898", "Name": "Xã Quản Bạ", "Level": "Xã" },
          { "Id": "00901", "Name": "Xã Lùng Tám", "Level": "Xã" },
          { "Id": "00904", "Name": "Xã Quyết Tiến", "Level": "Xã" },
          { "Id": "00907", "Name": "Xã Tả Ván", "Level": "Xã" },
          { "Id": "00910", "Name": "Xã Thái An", "Level": "Xã" }
        ]
      },
      {
        "Id": "030",
        "Name": "Huyện Vị Xuyên",
        "Wards": [
          { "Id": "00703", "Name": "Xã Kim Thạch", "Level": "Xã" },
          { "Id": "00706", "Name": "Xã Phú Linh", "Level": "Xã" },
          { "Id": "00709", "Name": "Xã Kim Linh", "Level": "Xã" },
          { "Id": "00913", "Name": "Thị trấn Vị Xuyên", "Level": "Thị trấn" },
          {
            "Id": "00916",
            "Name": "Thị trấn Nông Trường Việt Lâm",
            "Level": "Thị trấn"
          },
          { "Id": "00919", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "00922", "Name": "Xã Thuận Hoà", "Level": "Xã" },
          { "Id": "00925", "Name": "Xã Tùng Bá", "Level": "Xã" },
          { "Id": "00928", "Name": "Xã Thanh Thủy", "Level": "Xã" },
          { "Id": "00931", "Name": "Xã Thanh Đức", "Level": "Xã" },
          { "Id": "00934", "Name": "Xã Phong Quang", "Level": "Xã" },
          { "Id": "00937", "Name": "Xã Xín Chải", "Level": "Xã" },
          { "Id": "00940", "Name": "Xã Phương Tiến", "Level": "Xã" },
          { "Id": "00943", "Name": "Xã Lao Chải", "Level": "Xã" },
          { "Id": "00952", "Name": "Xã Cao Bồ", "Level": "Xã" },
          { "Id": "00955", "Name": "Xã Đạo Đức", "Level": "Xã" },
          { "Id": "00958", "Name": "Xã Thượng Sơn", "Level": "Xã" },
          { "Id": "00961", "Name": "Xã Linh Hồ", "Level": "Xã" },
          { "Id": "00964", "Name": "Xã Quảng Ngần", "Level": "Xã" },
          { "Id": "00967", "Name": "Xã Việt Lâm", "Level": "Xã" },
          { "Id": "00970", "Name": "Xã Ngọc Linh", "Level": "Xã" },
          { "Id": "00973", "Name": "Xã Ngọc Minh", "Level": "Xã" },
          { "Id": "00976", "Name": "Xã Bạch Ngọc", "Level": "Xã" },
          { "Id": "00979", "Name": "Xã Trung Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "031",
        "Name": "Huyện Bắc Mê",
        "Wards": [
          { "Id": "00982", "Name": "Xã Minh Sơn", "Level": "Xã" },
          { "Id": "00985", "Name": "Xã Giáp Trung", "Level": "Xã" },
          { "Id": "00988", "Name": "Xã Yên Định", "Level": "Xã" },
          { "Id": "00991", "Name": "Thị trấn Yên Phú", "Level": "Thị trấn" },
          { "Id": "00994", "Name": "Xã Minh Ngọc", "Level": "Xã" },
          { "Id": "00997", "Name": "Xã Yên Phong", "Level": "Xã" },
          { "Id": "01000", "Name": "Xã Lạc Nông", "Level": "Xã" },
          { "Id": "01003", "Name": "Xã Phú Nam", "Level": "Xã" },
          { "Id": "01006", "Name": "Xã Yên Cường", "Level": "Xã" },
          { "Id": "01009", "Name": "Xã Thượng Tân", "Level": "Xã" },
          { "Id": "01012", "Name": "Xã Đường Âm", "Level": "Xã" },
          { "Id": "01015", "Name": "Xã Đường Hồng", "Level": "Xã" },
          { "Id": "01018", "Name": "Xã Phiêng Luông", "Level": "Xã" }
        ]
      },
      {
        "Id": "032",
        "Name": "Huyện Hoàng Su Phì",
        "Wards": [
          { "Id": "01021", "Name": "Thị trấn Vinh Quang", "Level": "Thị trấn" },
          { "Id": "01024", "Name": "Xã Bản Máy", "Level": "Xã" },
          { "Id": "01027", "Name": "Xã Thàng Tín", "Level": "Xã" },
          { "Id": "01030", "Name": "Xã Thèn Chu Phìn", "Level": "Xã" },
          { "Id": "01033", "Name": "Xã Pố Lồ", "Level": "Xã" },
          { "Id": "01036", "Name": "Xã Bản Phùng", "Level": "Xã" },
          { "Id": "01039", "Name": "Xã Túng Sán", "Level": "Xã" },
          { "Id": "01042", "Name": "Xã Chiến Phố", "Level": "Xã" },
          { "Id": "01045", "Name": "Xã Đản Ván", "Level": "Xã" },
          { "Id": "01048", "Name": "Xã Tụ Nhân", "Level": "Xã" },
          { "Id": "01051", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "01054", "Name": "Xã Nàng Đôn", "Level": "Xã" },
          { "Id": "01057", "Name": "Xã Pờ Ly Ngài", "Level": "Xã" },
          { "Id": "01060", "Name": "Xã Sán Xả Hồ", "Level": "Xã" },
          { "Id": "01063", "Name": "Xã Bản Luốc", "Level": "Xã" },
          { "Id": "01066", "Name": "Xã Ngàm Đăng Vài", "Level": "Xã" },
          { "Id": "01069", "Name": "Xã Bản Nhùng", "Level": "Xã" },
          { "Id": "01072", "Name": "Xã Tả Sử Choóng", "Level": "Xã" },
          { "Id": "01075", "Name": "Xã Nậm Dịch", "Level": "Xã" },
          { "Id": "01081", "Name": "Xã Hồ Thầu", "Level": "Xã" },
          { "Id": "01084", "Name": "Xã Nam Sơn", "Level": "Xã" },
          { "Id": "01087", "Name": "Xã Nậm Tỵ", "Level": "Xã" },
          { "Id": "01090", "Name": "Xã Thông Nguyên", "Level": "Xã" },
          { "Id": "01093", "Name": "Xã Nậm Khòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "033",
        "Name": "Huyện Xín Mần",
        "Wards": [
          { "Id": "01096", "Name": "Thị trấn Cốc Pài", "Level": "Thị trấn" },
          { "Id": "01099", "Name": "Xã Nàn Xỉn", "Level": "Xã" },
          { "Id": "01102", "Name": "Xã Bản Díu", "Level": "Xã" },
          { "Id": "01105", "Name": "Xã Chí Cà", "Level": "Xã" },
          { "Id": "01108", "Name": "Xã Xín Mần", "Level": "Xã" },
          { "Id": "01114", "Name": "Xã Thèn Phàng", "Level": "Xã" },
          { "Id": "01117", "Name": "Xã Trung Thịnh", "Level": "Xã" },
          { "Id": "01120", "Name": "Xã Pà Vầy Sủ", "Level": "Xã" },
          { "Id": "01123", "Name": "Xã Cốc Rế", "Level": "Xã" },
          { "Id": "01126", "Name": "Xã Thu Tà", "Level": "Xã" },
          { "Id": "01129", "Name": "Xã Nàn Ma", "Level": "Xã" },
          { "Id": "01132", "Name": "Xã Tả Nhìu", "Level": "Xã" },
          { "Id": "01135", "Name": "Xã Bản Ngò", "Level": "Xã" },
          { "Id": "01138", "Name": "Xã Chế Là", "Level": "Xã" },
          { "Id": "01141", "Name": "Xã Nấm Dẩn", "Level": "Xã" },
          { "Id": "01144", "Name": "Xã Quảng Nguyên", "Level": "Xã" },
          { "Id": "01147", "Name": "Xã Nà Chì", "Level": "Xã" },
          { "Id": "01150", "Name": "Xã Khuôn Lùng", "Level": "Xã" }
        ]
      },
      {
        "Id": "034",
        "Name": "Huyện Bắc Quang",
        "Wards": [
          { "Id": "01153", "Name": "Thị trấn Việt Quang", "Level": "Thị trấn" },
          { "Id": "01156", "Name": "Thị trấn Vĩnh Tuy", "Level": "Thị trấn" },
          { "Id": "01159", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "01162", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "01165", "Name": "Xã Đồng Tiến", "Level": "Xã" },
          { "Id": "01168", "Name": "Xã Đồng Tâm", "Level": "Xã" },
          { "Id": "01171", "Name": "Xã Tân Quang", "Level": "Xã" },
          { "Id": "01174", "Name": "Xã Thượng Bình", "Level": "Xã" },
          { "Id": "01177", "Name": "Xã Hữu Sản", "Level": "Xã" },
          { "Id": "01180", "Name": "Xã Kim Ngọc", "Level": "Xã" },
          { "Id": "01183", "Name": "Xã Việt Vinh", "Level": "Xã" },
          { "Id": "01186", "Name": "Xã Bằng Hành", "Level": "Xã" },
          { "Id": "01189", "Name": "Xã Quang Minh", "Level": "Xã" },
          { "Id": "01192", "Name": "Xã Liên Hiệp", "Level": "Xã" },
          { "Id": "01195", "Name": "Xã Vô Điếm", "Level": "Xã" },
          { "Id": "01198", "Name": "Xã Việt Hồng", "Level": "Xã" },
          { "Id": "01201", "Name": "Xã Hùng An", "Level": "Xã" },
          { "Id": "01204", "Name": "Xã Đức Xuân", "Level": "Xã" },
          { "Id": "01207", "Name": "Xã Tiên Kiều", "Level": "Xã" },
          { "Id": "01210", "Name": "Xã Vĩnh Hảo", "Level": "Xã" },
          { "Id": "01213", "Name": "Xã Vĩnh Phúc", "Level": "Xã" },
          { "Id": "01216", "Name": "Xã Đồng Yên", "Level": "Xã" },
          { "Id": "01219", "Name": "Xã Đông Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "035",
        "Name": "Huyện Quang Bình",
        "Wards": [
          { "Id": "01222", "Name": "Xã Xuân Minh", "Level": "Xã" },
          { "Id": "01225", "Name": "Xã Tiên Nguyên", "Level": "Xã" },
          { "Id": "01228", "Name": "Xã Tân Nam", "Level": "Xã" },
          { "Id": "01231", "Name": "Xã Bản Rịa", "Level": "Xã" },
          { "Id": "01234", "Name": "Xã Yên Thành", "Level": "Xã" },
          { "Id": "01237", "Name": "Thị trấn Yên Bình", "Level": "Thị trấn" },
          { "Id": "01240", "Name": "Xã Tân Trịnh", "Level": "Xã" },
          { "Id": "01243", "Name": "Xã Tân Bắc", "Level": "Xã" },
          { "Id": "01246", "Name": "Xã Bằng Lang", "Level": "Xã" },
          { "Id": "01249", "Name": "Xã Yên Hà", "Level": "Xã" },
          { "Id": "01252", "Name": "Xã Hương Sơn", "Level": "Xã" },
          { "Id": "01255", "Name": "Xã Xuân Giang", "Level": "Xã" },
          { "Id": "01258", "Name": "Xã Nà Khương", "Level": "Xã" },
          { "Id": "01261", "Name": "Xã Tiên Yên", "Level": "Xã" },
          { "Id": "01264", "Name": "Xã Vĩ Thượng", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "04",
    "Name": "Tỉnh Cao Bằng",
    "Districts": [
      {
        "Id": "040",
        "Name": "Thành phố Cao Bằng",
        "Wards": [
          { "Id": "01267", "Name": "Phường Sông Hiến", "Level": "Phường" },
          { "Id": "01270", "Name": "Phường Sông Bằng", "Level": "Phường" },
          { "Id": "01273", "Name": "Phường Hợp Giang", "Level": "Phường" },
          { "Id": "01276", "Name": "Phường Tân Giang", "Level": "Phường" },
          { "Id": "01279", "Name": "Phường Ngọc Xuân", "Level": "Phường" },
          { "Id": "01282", "Name": "Phường Đề Thám", "Level": "Phường" },
          { "Id": "01285", "Name": "Phường Hoà Chung", "Level": "Phường" },
          { "Id": "01288", "Name": "Phường Duyệt Trung", "Level": "Phường" },
          { "Id": "01693", "Name": "Xã Vĩnh Quang", "Level": "Xã" },
          { "Id": "01705", "Name": "Xã Hưng Đạo", "Level": "Xã" },
          { "Id": "01720", "Name": "Xã Chu Trinh", "Level": "Xã" }
        ]
      },
      {
        "Id": "042",
        "Name": "Huyện Bảo Lâm",
        "Wards": [
          { "Id": "01290", "Name": "Thị trấn Pác Miầu", "Level": "Thị trấn" },
          { "Id": "01291", "Name": "Xã Đức Hạnh", "Level": "Xã" },
          { "Id": "01294", "Name": "Xã Lý Bôn", "Level": "Xã" },
          { "Id": "01296", "Name": "Xã Nam Cao", "Level": "Xã" },
          { "Id": "01297", "Name": "Xã Nam Quang", "Level": "Xã" },
          { "Id": "01300", "Name": "Xã Vĩnh Quang", "Level": "Xã" },
          { "Id": "01303", "Name": "Xã Quảng Lâm", "Level": "Xã" },
          { "Id": "01304", "Name": "Xã Thạch Lâm", "Level": "Xã" },
          { "Id": "01309", "Name": "Xã Vĩnh Phong", "Level": "Xã" },
          { "Id": "01312", "Name": "Xã Mông Ân", "Level": "Xã" },
          { "Id": "01315", "Name": "Xã Thái Học", "Level": "Xã" },
          { "Id": "01316", "Name": "Xã Thái Sơn", "Level": "Xã" },
          { "Id": "01318", "Name": "Xã Yên Thổ", "Level": "Xã" }
        ]
      },
      {
        "Id": "043",
        "Name": "Huyện Bảo Lạc",
        "Wards": [
          { "Id": "01321", "Name": "Thị trấn Bảo Lạc", "Level": "Thị trấn" },
          { "Id": "01324", "Name": "Xã Cốc Pàng", "Level": "Xã" },
          { "Id": "01327", "Name": "Xã Thượng Hà", "Level": "Xã" },
          { "Id": "01330", "Name": "Xã Cô Ba", "Level": "Xã" },
          { "Id": "01333", "Name": "Xã Bảo Toàn", "Level": "Xã" },
          { "Id": "01336", "Name": "Xã Khánh Xuân", "Level": "Xã" },
          { "Id": "01339", "Name": "Xã Xuân Trường", "Level": "Xã" },
          { "Id": "01342", "Name": "Xã Hồng Trị", "Level": "Xã" },
          { "Id": "01343", "Name": "Xã Kim Cúc", "Level": "Xã" },
          { "Id": "01345", "Name": "Xã Phan Thanh", "Level": "Xã" },
          { "Id": "01348", "Name": "Xã Hồng An", "Level": "Xã" },
          { "Id": "01351", "Name": "Xã Hưng Đạo", "Level": "Xã" },
          { "Id": "01352", "Name": "Xã Hưng Thịnh", "Level": "Xã" },
          { "Id": "01354", "Name": "Xã Huy Giáp", "Level": "Xã" },
          { "Id": "01357", "Name": "Xã Đình Phùng", "Level": "Xã" },
          { "Id": "01359", "Name": "Xã Sơn Lập", "Level": "Xã" },
          { "Id": "01360", "Name": "Xã Sơn Lộ", "Level": "Xã" }
        ]
      },
      {
        "Id": "045",
        "Name": "Huyện Hà Quảng",
        "Wards": [
          { "Id": "01363", "Name": "Thị trấn Thông Nông", "Level": "Thị trấn" },
          { "Id": "01366", "Name": "Xã Cần Yên", "Level": "Xã" },
          { "Id": "01367", "Name": "Xã Cần Nông", "Level": "Xã" },
          { "Id": "01372", "Name": "Xã Lương Thông", "Level": "Xã" },
          { "Id": "01375", "Name": "Xã Đa Thông", "Level": "Xã" },
          { "Id": "01378", "Name": "Xã Ngọc Động", "Level": "Xã" },
          { "Id": "01381", "Name": "Xã Yên Sơn", "Level": "Xã" },
          { "Id": "01384", "Name": "Xã Lương Can", "Level": "Xã" },
          { "Id": "01387", "Name": "Xã Thanh Long", "Level": "Xã" },
          { "Id": "01392", "Name": "Thị trấn Xuân Hòa", "Level": "Thị trấn" },
          { "Id": "01393", "Name": "Xã Lũng Nặm", "Level": "Xã" },
          { "Id": "01399", "Name": "Xã Trường Hà", "Level": "Xã" },
          { "Id": "01402", "Name": "Xã Cải Viên", "Level": "Xã" },
          { "Id": "01411", "Name": "Xã Nội Thôn", "Level": "Xã" },
          { "Id": "01414", "Name": "Xã Tổng Cọt", "Level": "Xã" },
          { "Id": "01417", "Name": "Xã Sóc Hà", "Level": "Xã" },
          { "Id": "01420", "Name": "Xã Thượng Thôn", "Level": "Xã" },
          { "Id": "01429", "Name": "Xã Hồng Sỹ", "Level": "Xã" },
          { "Id": "01432", "Name": "Xã Quý Quân", "Level": "Xã" },
          { "Id": "01435", "Name": "Xã Mã Ba", "Level": "Xã" },
          { "Id": "01438", "Name": "Xã Ngọc Đào", "Level": "Xã" }
        ]
      },
      {
        "Id": "047",
        "Name": "Huyện Trùng Khánh",
        "Wards": [
          { "Id": "01447", "Name": "Thị trấn Trà Lĩnh", "Level": "Thị trấn" },
          { "Id": "01453", "Name": "Xã Tri Phương", "Level": "Xã" },
          { "Id": "01456", "Name": "Xã Quang Hán", "Level": "Xã" },
          { "Id": "01462", "Name": "Xã Xuân Nội", "Level": "Xã" },
          { "Id": "01465", "Name": "Xã Quang Trung", "Level": "Xã" },
          { "Id": "01468", "Name": "Xã Quang Vinh", "Level": "Xã" },
          { "Id": "01471", "Name": "Xã Cao Chương", "Level": "Xã" },
          {
            "Id": "01477",
            "Name": "Thị trấn Trùng Khánh",
            "Level": "Thị trấn"
          },
          { "Id": "01480", "Name": "Xã Ngọc Khê", "Level": "Xã" },
          { "Id": "01481", "Name": "Xã Ngọc Côn", "Level": "Xã" },
          { "Id": "01483", "Name": "Xã Phong Nậm", "Level": "Xã" },
          { "Id": "01489", "Name": "Xã Đình Phong", "Level": "Xã" },
          { "Id": "01495", "Name": "Xã Đàm Thuỷ", "Level": "Xã" },
          { "Id": "01498", "Name": "Xã Khâm Thành", "Level": "Xã" },
          { "Id": "01501", "Name": "Xã Chí Viễn", "Level": "Xã" },
          { "Id": "01504", "Name": "Xã Lăng Hiếu", "Level": "Xã" },
          { "Id": "01507", "Name": "Xã Phong Châu", "Level": "Xã" },
          { "Id": "01516", "Name": "Xã Trung Phúc", "Level": "Xã" },
          { "Id": "01519", "Name": "Xã Cao Thăng", "Level": "Xã" },
          { "Id": "01522", "Name": "Xã Đức Hồng", "Level": "Xã" },
          { "Id": "01525", "Name": "Xã Đoài Dương", "Level": "Xã" }
        ]
      },
      {
        "Id": "048",
        "Name": "Huyện Hạ Lang",
        "Wards": [
          { "Id": "01534", "Name": "Xã Minh Long", "Level": "Xã" },
          { "Id": "01537", "Name": "Xã Lý Quốc", "Level": "Xã" },
          { "Id": "01540", "Name": "Xã Thắng Lợi", "Level": "Xã" },
          { "Id": "01543", "Name": "Xã Đồng Loan", "Level": "Xã" },
          { "Id": "01546", "Name": "Xã Đức Quang", "Level": "Xã" },
          { "Id": "01549", "Name": "Xã Kim Loan", "Level": "Xã" },
          { "Id": "01552", "Name": "Xã Quang Long", "Level": "Xã" },
          { "Id": "01555", "Name": "Xã An Lạc", "Level": "Xã" },
          { "Id": "01558", "Name": "Thị trấn Thanh Nhật", "Level": "Thị trấn" },
          { "Id": "01561", "Name": "Xã Vinh Quý", "Level": "Xã" },
          { "Id": "01564", "Name": "Xã Thống Nhất", "Level": "Xã" },
          { "Id": "01567", "Name": "Xã Cô Ngân", "Level": "Xã" },
          { "Id": "01573", "Name": "Xã Thị Hoa", "Level": "Xã" }
        ]
      },
      {
        "Id": "049",
        "Name": "Huyện Quảng Hòa",
        "Wards": [
          { "Id": "01474", "Name": "Xã Quốc Toản", "Level": "Xã" },
          { "Id": "01576", "Name": "Thị trấn Quảng Uyên", "Level": "Thị trấn" },
          { "Id": "01579", "Name": "Xã Phi Hải", "Level": "Xã" },
          { "Id": "01582", "Name": "Xã Quảng Hưng", "Level": "Xã" },
          { "Id": "01594", "Name": "Xã Độc Lập", "Level": "Xã" },
          { "Id": "01597", "Name": "Xã Cai Bộ", "Level": "Xã" },
          { "Id": "01603", "Name": "Xã Phúc Sen", "Level": "Xã" },
          { "Id": "01606", "Name": "Xã Chí Thảo", "Level": "Xã" },
          { "Id": "01609", "Name": "Xã Tự Do", "Level": "Xã" },
          { "Id": "01615", "Name": "Xã Hồng Quang", "Level": "Xã" },
          { "Id": "01618", "Name": "Xã Ngọc Động", "Level": "Xã" },
          { "Id": "01624", "Name": "Xã Hạnh Phúc", "Level": "Xã" },
          { "Id": "01627", "Name": "Thị trấn Tà Lùng", "Level": "Thị trấn" },
          { "Id": "01630", "Name": "Xã Bế Văn Đàn", "Level": "Xã" },
          { "Id": "01636", "Name": "Xã Cách Linh", "Level": "Xã" },
          { "Id": "01639", "Name": "Xã Đại Sơn", "Level": "Xã" },
          { "Id": "01645", "Name": "Xã Tiên Thành", "Level": "Xã" },
          { "Id": "01648", "Name": "Thị trấn Hoà Thuận", "Level": "Thị trấn" },
          { "Id": "01651", "Name": "Xã Mỹ Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "051",
        "Name": "Huyện Hoà An",
        "Wards": [
          { "Id": "01654", "Name": "Thị trấn Nước Hai", "Level": "Thị trấn" },
          { "Id": "01657", "Name": "Xã Dân Chủ", "Level": "Xã" },
          { "Id": "01660", "Name": "Xã Nam Tuấn", "Level": "Xã" },
          { "Id": "01666", "Name": "Xã Đại Tiến", "Level": "Xã" },
          { "Id": "01669", "Name": "Xã Đức Long", "Level": "Xã" },
          { "Id": "01672", "Name": "Xã Ngũ Lão", "Level": "Xã" },
          { "Id": "01675", "Name": "Xã Trương Lương", "Level": "Xã" },
          { "Id": "01687", "Name": "Xã Hồng Việt", "Level": "Xã" },
          { "Id": "01696", "Name": "Xã Hoàng Tung", "Level": "Xã" },
          { "Id": "01699", "Name": "Xã Nguyễn Huệ", "Level": "Xã" },
          { "Id": "01702", "Name": "Xã Quang Trung", "Level": "Xã" },
          { "Id": "01708", "Name": "Xã Bạch Đằng", "Level": "Xã" },
          { "Id": "01711", "Name": "Xã Bình Dương", "Level": "Xã" },
          { "Id": "01714", "Name": "Xã Lê Chung", "Level": "Xã" },
          { "Id": "01723", "Name": "Xã Hồng Nam", "Level": "Xã" }
        ]
      },
      {
        "Id": "052",
        "Name": "Huyện Nguyên Bình",
        "Wards": [
          {
            "Id": "01726",
            "Name": "Thị trấn Nguyên Bình",
            "Level": "Thị trấn"
          },
          { "Id": "01729", "Name": "Thị trấn Tĩnh Túc", "Level": "Thị trấn" },
          { "Id": "01732", "Name": "Xã Yên Lạc", "Level": "Xã" },
          { "Id": "01735", "Name": "Xã Triệu Nguyên", "Level": "Xã" },
          { "Id": "01738", "Name": "Xã Ca Thành", "Level": "Xã" },
          { "Id": "01744", "Name": "Xã Vũ Nông", "Level": "Xã" },
          { "Id": "01747", "Name": "Xã Minh Tâm", "Level": "Xã" },
          { "Id": "01750", "Name": "Xã Thể Dục", "Level": "Xã" },
          { "Id": "01756", "Name": "Xã Mai Long", "Level": "Xã" },
          { "Id": "01762", "Name": "Xã Vũ Minh", "Level": "Xã" },
          { "Id": "01765", "Name": "Xã Hoa Thám", "Level": "Xã" },
          { "Id": "01768", "Name": "Xã Phan Thanh", "Level": "Xã" },
          { "Id": "01771", "Name": "Xã Quang Thành", "Level": "Xã" },
          { "Id": "01774", "Name": "Xã Tam Kim", "Level": "Xã" },
          { "Id": "01777", "Name": "Xã Thành Công", "Level": "Xã" },
          { "Id": "01780", "Name": "Xã Thịnh Vượng", "Level": "Xã" },
          { "Id": "01783", "Name": "Xã Hưng Đạo", "Level": "Xã" }
        ]
      },
      {
        "Id": "053",
        "Name": "Huyện Thạch An",
        "Wards": [
          { "Id": "01786", "Name": "Thị trấn Đông Khê", "Level": "Thị trấn" },
          { "Id": "01789", "Name": "Xã Canh Tân", "Level": "Xã" },
          { "Id": "01792", "Name": "Xã Kim Đồng", "Level": "Xã" },
          { "Id": "01795", "Name": "Xã Minh Khai", "Level": "Xã" },
          { "Id": "01801", "Name": "Xã Đức Thông", "Level": "Xã" },
          { "Id": "01804", "Name": "Xã Thái Cường", "Level": "Xã" },
          { "Id": "01807", "Name": "Xã Vân Trình", "Level": "Xã" },
          { "Id": "01810", "Name": "Xã Thụy Hùng", "Level": "Xã" },
          { "Id": "01813", "Name": "Xã Quang Trọng", "Level": "Xã" },
          { "Id": "01816", "Name": "Xã Trọng Con", "Level": "Xã" },
          { "Id": "01819", "Name": "Xã Lê Lai", "Level": "Xã" },
          { "Id": "01822", "Name": "Xã Đức Long", "Level": "Xã" },
          { "Id": "01828", "Name": "Xã Lê Lợi", "Level": "Xã" },
          { "Id": "01831", "Name": "Xã Đức Xuân", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "06",
    "Name": "Tỉnh Bắc Kạn",
    "Districts": [
      {
        "Id": "058",
        "Name": "Thành Phố Bắc Kạn",
        "Wards": [
          {
            "Id": "01834",
            "Name": "Phường Nguyễn Thị Minh Khai",
            "Level": "Phường"
          },
          { "Id": "01837", "Name": "Phường Sông Cầu", "Level": "Phường" },
          { "Id": "01840", "Name": "Phường Đức Xuân", "Level": "Phường" },
          { "Id": "01843", "Name": "Phường Phùng Chí Kiên", "Level": "Phường" },
          { "Id": "01846", "Name": "Phường Huyền Tụng", "Level": "Phường" },
          { "Id": "01849", "Name": "Xã Dương Quang", "Level": "Xã" },
          { "Id": "01852", "Name": "Xã Nông Thượng", "Level": "Xã" },
          { "Id": "01855", "Name": "Phường Xuất Hóa", "Level": "Phường" }
        ]
      },
      {
        "Id": "060",
        "Name": "Huyện Pác Nặm",
        "Wards": [
          { "Id": "01858", "Name": "Xã Bằng Thành", "Level": "Xã" },
          { "Id": "01861", "Name": "Xã Nhạn Môn", "Level": "Xã" },
          { "Id": "01864", "Name": "Xã Bộc Bố", "Level": "Xã" },
          { "Id": "01867", "Name": "Xã Công Bằng", "Level": "Xã" },
          { "Id": "01870", "Name": "Xã Giáo Hiệu", "Level": "Xã" },
          { "Id": "01873", "Name": "Xã Xuân La", "Level": "Xã" },
          { "Id": "01876", "Name": "Xã An Thắng", "Level": "Xã" },
          { "Id": "01879", "Name": "Xã Cổ Linh", "Level": "Xã" },
          { "Id": "01882", "Name": "Xã Nghiên Loan", "Level": "Xã" },
          { "Id": "01885", "Name": "Xã Cao Tân", "Level": "Xã" }
        ]
      },
      {
        "Id": "061",
        "Name": "Huyện Ba Bể",
        "Wards": [
          { "Id": "01888", "Name": "Thị trấn Chợ Rã", "Level": "Thị trấn" },
          { "Id": "01891", "Name": "Xã Bành Trạch", "Level": "Xã" },
          { "Id": "01894", "Name": "Xã Phúc Lộc", "Level": "Xã" },
          { "Id": "01897", "Name": "Xã Hà Hiệu", "Level": "Xã" },
          { "Id": "01900", "Name": "Xã Cao Thượng", "Level": "Xã" },
          { "Id": "01906", "Name": "Xã Khang Ninh", "Level": "Xã" },
          { "Id": "01909", "Name": "Xã Nam Mẫu", "Level": "Xã" },
          { "Id": "01912", "Name": "Xã Thượng Giáo", "Level": "Xã" },
          { "Id": "01915", "Name": "Xã Địa Linh", "Level": "Xã" },
          { "Id": "01918", "Name": "Xã Yến Dương", "Level": "Xã" },
          { "Id": "01921", "Name": "Xã Chu Hương", "Level": "Xã" },
          { "Id": "01924", "Name": "Xã Quảng Khê", "Level": "Xã" },
          { "Id": "01927", "Name": "Xã Mỹ Phương", "Level": "Xã" },
          { "Id": "01930", "Name": "Xã Hoàng Trĩ", "Level": "Xã" },
          { "Id": "01933", "Name": "Xã Đồng Phúc", "Level": "Xã" }
        ]
      },
      {
        "Id": "062",
        "Name": "Huyện Ngân Sơn",
        "Wards": [
          { "Id": "01936", "Name": "Thị trấn Nà Phặc", "Level": "Thị trấn" },
          { "Id": "01939", "Name": "Xã Thượng Ân", "Level": "Xã" },
          { "Id": "01942", "Name": "Xã Bằng Vân", "Level": "Xã" },
          { "Id": "01945", "Name": "Xã Cốc Đán", "Level": "Xã" },
          { "Id": "01948", "Name": "Xã Trung Hoà", "Level": "Xã" },
          { "Id": "01951", "Name": "Xã Đức Vân", "Level": "Xã" },
          { "Id": "01954", "Name": "Xã Vân Tùng", "Level": "Xã" },
          { "Id": "01957", "Name": "Xã Thượng Quan", "Level": "Xã" },
          { "Id": "01960", "Name": "Xã Hiệp Lực", "Level": "Xã" },
          { "Id": "01963", "Name": "Xã Thuần Mang", "Level": "Xã" }
        ]
      },
      {
        "Id": "063",
        "Name": "Huyện Bạch Thông",
        "Wards": [
          { "Id": "01969", "Name": "Thị trấn Phủ Thông", "Level": "Thị trấn" },
          { "Id": "01975", "Name": "Xã Vi Hương", "Level": "Xã" },
          { "Id": "01978", "Name": "Xã Sĩ Bình", "Level": "Xã" },
          { "Id": "01981", "Name": "Xã Vũ Muộn", "Level": "Xã" },
          { "Id": "01984", "Name": "Xã Đôn Phong", "Level": "Xã" },
          { "Id": "01990", "Name": "Xã Lục Bình", "Level": "Xã" },
          { "Id": "01993", "Name": "Xã Tân Tú", "Level": "Xã" },
          { "Id": "01999", "Name": "Xã Nguyên Phúc", "Level": "Xã" },
          { "Id": "02002", "Name": "Xã Cao Sơn", "Level": "Xã" },
          { "Id": "02005", "Name": "Xã Quân Hà", "Level": "Xã" },
          { "Id": "02008", "Name": "Xã Cẩm Giàng", "Level": "Xã" },
          { "Id": "02011", "Name": "Xã Mỹ Thanh", "Level": "Xã" },
          { "Id": "02014", "Name": "Xã Dương Phong", "Level": "Xã" },
          { "Id": "02017", "Name": "Xã Quang Thuận", "Level": "Xã" }
        ]
      },
      {
        "Id": "064",
        "Name": "Huyện Chợ Đồn",
        "Wards": [
          { "Id": "02020", "Name": "Thị trấn Bằng Lũng", "Level": "Thị trấn" },
          { "Id": "02023", "Name": "Xã Xuân Lạc", "Level": "Xã" },
          { "Id": "02026", "Name": "Xã Nam Cường", "Level": "Xã" },
          { "Id": "02029", "Name": "Xã Đồng Lạc", "Level": "Xã" },
          { "Id": "02032", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "02035", "Name": "Xã Bản Thi", "Level": "Xã" },
          { "Id": "02038", "Name": "Xã Quảng Bạch", "Level": "Xã" },
          { "Id": "02041", "Name": "Xã Bằng Phúc", "Level": "Xã" },
          { "Id": "02044", "Name": "Xã Yên Thịnh", "Level": "Xã" },
          { "Id": "02047", "Name": "Xã Yên Thượng", "Level": "Xã" },
          { "Id": "02050", "Name": "Xã Phương Viên", "Level": "Xã" },
          { "Id": "02053", "Name": "Xã Ngọc Phái", "Level": "Xã" },
          { "Id": "02059", "Name": "Xã Đồng Thắng", "Level": "Xã" },
          { "Id": "02062", "Name": "Xã Lương Bằng", "Level": "Xã" },
          { "Id": "02065", "Name": "Xã Bằng Lãng", "Level": "Xã" },
          { "Id": "02068", "Name": "Xã Đại Sảo", "Level": "Xã" },
          { "Id": "02071", "Name": "Xã Nghĩa Tá", "Level": "Xã" },
          { "Id": "02077", "Name": "Xã Yên Mỹ", "Level": "Xã" },
          { "Id": "02080", "Name": "Xã Bình Trung", "Level": "Xã" },
          { "Id": "02083", "Name": "Xã Yên Phong", "Level": "Xã" }
        ]
      },
      {
        "Id": "065",
        "Name": "Huyện Chợ Mới",
        "Wards": [
          { "Id": "02086", "Name": "Thị trấn Đồng Tâm", "Level": "Thị trấn" },
          { "Id": "02089", "Name": "Xã Tân Sơn", "Level": "Xã" },
          { "Id": "02092", "Name": "Xã Thanh Vận", "Level": "Xã" },
          { "Id": "02095", "Name": "Xã Mai Lạp", "Level": "Xã" },
          { "Id": "02098", "Name": "Xã Hoà Mục", "Level": "Xã" },
          { "Id": "02101", "Name": "Xã Thanh Mai", "Level": "Xã" },
          { "Id": "02104", "Name": "Xã Cao Kỳ", "Level": "Xã" },
          { "Id": "02107", "Name": "Xã Nông Hạ", "Level": "Xã" },
          { "Id": "02110", "Name": "Xã Yên Cư", "Level": "Xã" },
          { "Id": "02113", "Name": "Xã Thanh Thịnh", "Level": "Xã" },
          { "Id": "02116", "Name": "Xã Yên Hân", "Level": "Xã" },
          { "Id": "02122", "Name": "Xã Như Cố", "Level": "Xã" },
          { "Id": "02125", "Name": "Xã Bình Văn", "Level": "Xã" },
          { "Id": "02131", "Name": "Xã Quảng Chu", "Level": "Xã" }
        ]
      },
      {
        "Id": "066",
        "Name": "Huyện Na Rì",
        "Wards": [
          { "Id": "02137", "Name": "Xã Văn Vũ", "Level": "Xã" },
          { "Id": "02140", "Name": "Xã Văn Lang", "Level": "Xã" },
          { "Id": "02143", "Name": "Xã Lương Thượng", "Level": "Xã" },
          { "Id": "02146", "Name": "Xã Kim Hỷ", "Level": "Xã" },
          { "Id": "02152", "Name": "Xã Cường Lợi", "Level": "Xã" },
          { "Id": "02155", "Name": "Thị trấn Yến Lạc", "Level": "Thị trấn" },
          { "Id": "02158", "Name": "Xã Kim Lư", "Level": "Xã" },
          { "Id": "02161", "Name": "Xã Sơn Thành", "Level": "Xã" },
          { "Id": "02170", "Name": "Xã Văn Minh", "Level": "Xã" },
          { "Id": "02173", "Name": "Xã Côn Minh", "Level": "Xã" },
          { "Id": "02176", "Name": "Xã Cư Lễ", "Level": "Xã" },
          { "Id": "02179", "Name": "Xã Trần Phú", "Level": "Xã" },
          { "Id": "02185", "Name": "Xã Quang Phong", "Level": "Xã" },
          { "Id": "02188", "Name": "Xã Dương Sơn", "Level": "Xã" },
          { "Id": "02191", "Name": "Xã Xuân Dương", "Level": "Xã" },
          { "Id": "02194", "Name": "Xã Đổng Xá", "Level": "Xã" },
          { "Id": "02197", "Name": "Xã Liêm Thuỷ", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "08",
    "Name": "Tỉnh Tuyên Quang",
    "Districts": [
      {
        "Id": "070",
        "Name": "Thành phố Tuyên Quang",
        "Wards": [
          { "Id": "02200", "Name": "Phường Phan Thiết", "Level": "Phường" },
          { "Id": "02203", "Name": "Phường Minh Xuân", "Level": "Phường" },
          { "Id": "02206", "Name": "Phường Tân Quang", "Level": "Phường" },
          { "Id": "02209", "Name": "Xã Tràng Đà", "Level": "Xã" },
          { "Id": "02212", "Name": "Phường Nông Tiến", "Level": "Phường" },
          { "Id": "02215", "Name": "Phường Ỷ La", "Level": "Phường" },
          { "Id": "02216", "Name": "Phường Tân Hà", "Level": "Phường" },
          { "Id": "02218", "Name": "Phường Hưng Thành", "Level": "Phường" },
          { "Id": "02497", "Name": "Xã Kim Phú", "Level": "Xã" },
          { "Id": "02503", "Name": "Xã An Khang", "Level": "Xã" },
          { "Id": "02509", "Name": "Phường Mỹ Lâm", "Level": "Phường" },
          { "Id": "02512", "Name": "Phường An Tường", "Level": "Phường" },
          { "Id": "02515", "Name": "Xã Lưỡng Vượng", "Level": "Xã" },
          { "Id": "02521", "Name": "Xã Thái Long", "Level": "Xã" },
          { "Id": "02524", "Name": "Phường Đội Cấn", "Level": "Phường" }
        ]
      },
      {
        "Id": "071",
        "Name": "Huyện Lâm Bình",
        "Wards": [
          { "Id": "02233", "Name": "Xã Phúc Yên", "Level": "Xã" },
          { "Id": "02242", "Name": "Xã Xuân Lập", "Level": "Xã" },
          { "Id": "02251", "Name": "Xã Khuôn Hà", "Level": "Xã" },
          { "Id": "02266", "Name": "Xã Lăng Can", "Level": "Xã" },
          { "Id": "02269", "Name": "Xã Thượng Lâm", "Level": "Xã" },
          { "Id": "02290", "Name": "Xã Bình An", "Level": "Xã" },
          { "Id": "02293", "Name": "Xã Hồng Quang", "Level": "Xã" },
          { "Id": "02296", "Name": "Xã Thổ Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "072",
        "Name": "Huyện Na Hang",
        "Wards": [
          { "Id": "02221", "Name": "Thị trấn Na Hang", "Level": "Thị trấn" },
          { "Id": "02227", "Name": "Xã Sinh Long", "Level": "Xã" },
          { "Id": "02230", "Name": "Xã Thượng Giáp", "Level": "Xã" },
          { "Id": "02239", "Name": "Xã Thượng Nông", "Level": "Xã" },
          { "Id": "02245", "Name": "Xã Côn Lôn", "Level": "Xã" },
          { "Id": "02248", "Name": "Xã Yên Hoa", "Level": "Xã" },
          { "Id": "02254", "Name": "Xã Hồng Thái", "Level": "Xã" },
          { "Id": "02260", "Name": "Xã Đà Vị", "Level": "Xã" },
          { "Id": "02263", "Name": "Xã Khau Tinh", "Level": "Xã" },
          { "Id": "02275", "Name": "Xã Sơn Phú", "Level": "Xã" },
          { "Id": "02281", "Name": "Xã Năng Khả", "Level": "Xã" },
          { "Id": "02284", "Name": "Xã Thanh Tương", "Level": "Xã" }
        ]
      },
      {
        "Id": "073",
        "Name": "Huyện Chiêm Hóa",
        "Wards": [
          { "Id": "02287", "Name": "Thị trấn Vĩnh Lộc", "Level": "Thị trấn" },
          { "Id": "02299", "Name": "Xã Phúc Sơn", "Level": "Xã" },
          { "Id": "02302", "Name": "Xã Minh Quang", "Level": "Xã" },
          { "Id": "02305", "Name": "Xã Trung Hà", "Level": "Xã" },
          { "Id": "02308", "Name": "Xã Tân Mỹ", "Level": "Xã" },
          { "Id": "02311", "Name": "Xã Hà Lang", "Level": "Xã" },
          { "Id": "02314", "Name": "Xã Hùng Mỹ", "Level": "Xã" },
          { "Id": "02317", "Name": "Xã Yên Lập", "Level": "Xã" },
          { "Id": "02320", "Name": "Xã Tân An", "Level": "Xã" },
          { "Id": "02323", "Name": "Xã Bình Phú", "Level": "Xã" },
          { "Id": "02326", "Name": "Xã Xuân Quang", "Level": "Xã" },
          { "Id": "02329", "Name": "Xã Ngọc Hội", "Level": "Xã" },
          { "Id": "02332", "Name": "Xã Phú Bình", "Level": "Xã" },
          { "Id": "02335", "Name": "Xã Hòa Phú", "Level": "Xã" },
          { "Id": "02338", "Name": "Xã Phúc Thịnh", "Level": "Xã" },
          { "Id": "02341", "Name": "Xã Kiên Đài", "Level": "Xã" },
          { "Id": "02344", "Name": "Xã Tân Thịnh", "Level": "Xã" },
          { "Id": "02347", "Name": "Xã Trung Hòa", "Level": "Xã" },
          { "Id": "02350", "Name": "Xã Kim Bình", "Level": "Xã" },
          { "Id": "02353", "Name": "Xã Hòa An", "Level": "Xã" },
          { "Id": "02356", "Name": "Xã Vinh Quang", "Level": "Xã" },
          { "Id": "02359", "Name": "Xã Tri Phú", "Level": "Xã" },
          { "Id": "02362", "Name": "Xã Nhân Lý", "Level": "Xã" },
          { "Id": "02365", "Name": "Xã Yên Nguyên", "Level": "Xã" },
          { "Id": "02368", "Name": "Xã Linh Phú", "Level": "Xã" },
          { "Id": "02371", "Name": "Xã Bình Nhân", "Level": "Xã" }
        ]
      },
      {
        "Id": "074",
        "Name": "Huyện Hàm Yên",
        "Wards": [
          { "Id": "02374", "Name": "Thị trấn Tân Yên", "Level": "Thị trấn" },
          { "Id": "02377", "Name": "Xã Yên Thuận", "Level": "Xã" },
          { "Id": "02380", "Name": "Xã Bạch Xa", "Level": "Xã" },
          { "Id": "02383", "Name": "Xã Minh Khương", "Level": "Xã" },
          { "Id": "02386", "Name": "Xã Yên Lâm", "Level": "Xã" },
          { "Id": "02389", "Name": "Xã Minh Dân", "Level": "Xã" },
          { "Id": "02392", "Name": "Xã Phù Lưu", "Level": "Xã" },
          { "Id": "02395", "Name": "Xã Minh Hương", "Level": "Xã" },
          { "Id": "02398", "Name": "Xã Yên Phú", "Level": "Xã" },
          { "Id": "02401", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "02404", "Name": "Xã Bình Xa", "Level": "Xã" },
          { "Id": "02407", "Name": "Xã Thái Sơn", "Level": "Xã" },
          { "Id": "02410", "Name": "Xã Nhân Mục", "Level": "Xã" },
          { "Id": "02413", "Name": "Xã Thành Long", "Level": "Xã" },
          { "Id": "02416", "Name": "Xã Bằng Cốc", "Level": "Xã" },
          { "Id": "02419", "Name": "Xã Thái Hòa", "Level": "Xã" },
          { "Id": "02422", "Name": "Xã Đức Ninh", "Level": "Xã" },
          { "Id": "02425", "Name": "Xã Hùng Đức", "Level": "Xã" }
        ]
      },
      {
        "Id": "075",
        "Name": "Huyện Yên Sơn",
        "Wards": [
          { "Id": "02431", "Name": "Xã Quí Quân", "Level": "Xã" },
          { "Id": "02434", "Name": "Xã Lực Hành", "Level": "Xã" },
          { "Id": "02437", "Name": "Xã Kiến Thiết", "Level": "Xã" },
          { "Id": "02440", "Name": "Xã Trung Minh", "Level": "Xã" },
          { "Id": "02443", "Name": "Xã Chiêu Yên", "Level": "Xã" },
          { "Id": "02446", "Name": "Xã Trung Trực", "Level": "Xã" },
          { "Id": "02449", "Name": "Xã Xuân Vân", "Level": "Xã" },
          { "Id": "02452", "Name": "Xã Phúc Ninh", "Level": "Xã" },
          { "Id": "02455", "Name": "Xã Hùng Lợi", "Level": "Xã" },
          { "Id": "02458", "Name": "Xã Trung Sơn", "Level": "Xã" },
          { "Id": "02461", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "02464", "Name": "Xã Tứ Quận", "Level": "Xã" },
          { "Id": "02467", "Name": "Xã Đạo Viện", "Level": "Xã" },
          { "Id": "02470", "Name": "Xã Tân Long", "Level": "Xã" },
          { "Id": "02473", "Name": "Xã Thắng Quân", "Level": "Xã" },
          { "Id": "02476", "Name": "Xã Kim Quan", "Level": "Xã" },
          { "Id": "02479", "Name": "Xã Lang Quán", "Level": "Xã" },
          { "Id": "02482", "Name": "Xã Phú Thịnh", "Level": "Xã" },
          { "Id": "02485", "Name": "Xã Công Đa", "Level": "Xã" },
          { "Id": "02488", "Name": "Xã Trung Môn", "Level": "Xã" },
          { "Id": "02491", "Name": "Xã Chân Sơn", "Level": "Xã" },
          { "Id": "02494", "Name": "Xã Thái Bình", "Level": "Xã" },
          { "Id": "02500", "Name": "Xã Tiến Bộ", "Level": "Xã" },
          { "Id": "02506", "Name": "Xã Mỹ Bằng", "Level": "Xã" },
          { "Id": "02518", "Name": "Xã Hoàng Khai", "Level": "Xã" },
          { "Id": "02527", "Name": "Xã Nhữ Hán", "Level": "Xã" },
          { "Id": "02530", "Name": "Xã Nhữ Khê", "Level": "Xã" },
          { "Id": "02533", "Name": "Xã Đội Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "076",
        "Name": "Huyện Sơn Dương",
        "Wards": [
          { "Id": "02536", "Name": "Thị trấn Sơn Dương", "Level": "Thị trấn" },
          { "Id": "02539", "Name": "Xã Trung Yên", "Level": "Xã" },
          { "Id": "02542", "Name": "Xã Minh Thanh", "Level": "Xã" },
          { "Id": "02545", "Name": "Xã Tân Trào", "Level": "Xã" },
          { "Id": "02548", "Name": "Xã Vĩnh Lợi", "Level": "Xã" },
          { "Id": "02551", "Name": "Xã Thượng Ấm", "Level": "Xã" },
          { "Id": "02554", "Name": "Xã Bình Yên", "Level": "Xã" },
          { "Id": "02557", "Name": "Xã Lương Thiện", "Level": "Xã" },
          { "Id": "02560", "Name": "Xã Tú Thịnh", "Level": "Xã" },
          { "Id": "02563", "Name": "Xã Cấp Tiến", "Level": "Xã" },
          { "Id": "02566", "Name": "Xã Hợp Thành", "Level": "Xã" },
          { "Id": "02569", "Name": "Xã Phúc Ứng", "Level": "Xã" },
          { "Id": "02572", "Name": "Xã Đông Thọ", "Level": "Xã" },
          { "Id": "02575", "Name": "Xã Kháng Nhật", "Level": "Xã" },
          { "Id": "02578", "Name": "Xã Hợp Hòa", "Level": "Xã" },
          { "Id": "02584", "Name": "Xã Quyết Thắng", "Level": "Xã" },
          { "Id": "02587", "Name": "Xã Đồng Quý", "Level": "Xã" },
          { "Id": "02590", "Name": "Xã Tân Thanh", "Level": "Xã" },
          { "Id": "02593", "Name": "Xã Vân Sơn", "Level": "Xã" },
          { "Id": "02596", "Name": "Xã Văn Phú", "Level": "Xã" },
          { "Id": "02599", "Name": "Xã Chi Thiết", "Level": "Xã" },
          { "Id": "02602", "Name": "Xã Đông Lợi", "Level": "Xã" },
          { "Id": "02605", "Name": "Xã Thiện Kế", "Level": "Xã" },
          { "Id": "02608", "Name": "Xã Hồng Lạc", "Level": "Xã" },
          { "Id": "02611", "Name": "Xã Phú Lương", "Level": "Xã" },
          { "Id": "02614", "Name": "Xã Ninh Lai", "Level": "Xã" },
          { "Id": "02617", "Name": "Xã Đại Phú", "Level": "Xã" },
          { "Id": "02620", "Name": "Xã Sơn Nam", "Level": "Xã" },
          { "Id": "02623", "Name": "Xã Hào Phú", "Level": "Xã" },
          { "Id": "02626", "Name": "Xã Tam Đa", "Level": "Xã" },
          { "Id": "02632", "Name": "Xã Trường Sinh", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "10",
    "Name": "Tỉnh Lào Cai",
    "Districts": [
      {
        "Id": "080",
        "Name": "Thành phố Lào Cai",
        "Wards": [
          { "Id": "02635", "Name": "Phường Duyên Hải", "Level": "Phường" },
          { "Id": "02641", "Name": "Phường Lào Cai", "Level": "Phường" },
          { "Id": "02644", "Name": "Phường Cốc Lếu", "Level": "Phường" },
          { "Id": "02647", "Name": "Phường Kim Tân", "Level": "Phường" },
          { "Id": "02650", "Name": "Phường Bắc Lệnh", "Level": "Phường" },
          { "Id": "02653", "Name": "Phường Pom Hán", "Level": "Phường" },
          { "Id": "02656", "Name": "Phường Xuân Tăng", "Level": "Phường" },
          { "Id": "02658", "Name": "Phường Bình Minh", "Level": "Phường" },
          { "Id": "02659", "Name": "Xã Thống Nhất", "Level": "Xã" },
          { "Id": "02662", "Name": "Xã Đồng Tuyển", "Level": "Xã" },
          { "Id": "02665", "Name": "Xã Vạn Hoà", "Level": "Xã" },
          { "Id": "02668", "Name": "Phường Bắc Cường", "Level": "Phường" },
          { "Id": "02671", "Name": "Phường Nam Cường", "Level": "Phường" },
          { "Id": "02674", "Name": "Xã Cam Đường", "Level": "Xã" },
          { "Id": "02677", "Name": "Xã Tả Phời", "Level": "Xã" },
          { "Id": "02680", "Name": "Xã Hợp Thành", "Level": "Xã" },
          { "Id": "02746", "Name": "Xã Cốc San", "Level": "Xã" }
        ]
      },
      {
        "Id": "082",
        "Name": "Huyện Bát Xát",
        "Wards": [
          { "Id": "02683", "Name": "Thị trấn Bát Xát", "Level": "Thị trấn" },
          { "Id": "02686", "Name": "Xã A Mú Sung", "Level": "Xã" },
          { "Id": "02689", "Name": "Xã Nậm Chạc", "Level": "Xã" },
          { "Id": "02692", "Name": "Xã A Lù", "Level": "Xã" },
          { "Id": "02695", "Name": "Xã Trịnh Tường", "Level": "Xã" },
          { "Id": "02701", "Name": "Xã Y Tý", "Level": "Xã" },
          { "Id": "02704", "Name": "Xã Cốc Mỳ", "Level": "Xã" },
          { "Id": "02707", "Name": "Xã Dền Sáng", "Level": "Xã" },
          { "Id": "02710", "Name": "Xã Bản Vược", "Level": "Xã" },
          { "Id": "02713", "Name": "Xã Sàng Ma Sáo", "Level": "Xã" },
          { "Id": "02716", "Name": "Xã Bản Qua", "Level": "Xã" },
          { "Id": "02719", "Name": "Xã Mường Vi", "Level": "Xã" },
          { "Id": "02722", "Name": "Xã Dền Thàng", "Level": "Xã" },
          { "Id": "02725", "Name": "Xã Bản Xèo", "Level": "Xã" },
          { "Id": "02728", "Name": "Xã Mường Hum", "Level": "Xã" },
          { "Id": "02731", "Name": "Xã Trung Lèng Hồ", "Level": "Xã" },
          { "Id": "02734", "Name": "Xã Quang Kim", "Level": "Xã" },
          { "Id": "02737", "Name": "Xã Pa Cheo", "Level": "Xã" },
          { "Id": "02740", "Name": "Xã Nậm Pung", "Level": "Xã" },
          { "Id": "02743", "Name": "Xã Phìn Ngan", "Level": "Xã" },
          { "Id": "02749", "Name": "Xã Tòng Sành", "Level": "Xã" }
        ]
      },
      {
        "Id": "083",
        "Name": "Huyện Mường Khương",
        "Wards": [
          { "Id": "02752", "Name": "Xã Pha Long", "Level": "Xã" },
          { "Id": "02755", "Name": "Xã Tả Ngải Chồ", "Level": "Xã" },
          { "Id": "02758", "Name": "Xã Tung Chung Phố", "Level": "Xã" },
          {
            "Id": "02761",
            "Name": "Thị trấn Mường Khương",
            "Level": "Thị trấn"
          },
          { "Id": "02764", "Name": "Xã Dìn Chin", "Level": "Xã" },
          { "Id": "02767", "Name": "Xã Tả Gia Khâu", "Level": "Xã" },
          { "Id": "02770", "Name": "Xã Nậm Chảy", "Level": "Xã" },
          { "Id": "02773", "Name": "Xã Nấm Lư", "Level": "Xã" },
          { "Id": "02776", "Name": "Xã Lùng Khấu Nhin", "Level": "Xã" },
          { "Id": "02779", "Name": "Xã Thanh Bình", "Level": "Xã" },
          { "Id": "02782", "Name": "Xã Cao Sơn", "Level": "Xã" },
          { "Id": "02785", "Name": "Xã Lùng Vai", "Level": "Xã" },
          { "Id": "02788", "Name": "Xã Bản Lầu", "Level": "Xã" },
          { "Id": "02791", "Name": "Xã La Pan Tẩn", "Level": "Xã" },
          { "Id": "02794", "Name": "Xã Tả Thàng", "Level": "Xã" },
          { "Id": "02797", "Name": "Xã Bản Sen", "Level": "Xã" }
        ]
      },
      {
        "Id": "084",
        "Name": "Huyện Si Ma Cai",
        "Wards": [
          { "Id": "02800", "Name": "Xã Nàn Sán", "Level": "Xã" },
          { "Id": "02803", "Name": "Xã Thào Chư Phìn", "Level": "Xã" },
          { "Id": "02806", "Name": "Xã Bản Mế", "Level": "Xã" },
          { "Id": "02809", "Name": "Thị trấn Si Ma Cai", "Level": "Thị trấn" },
          { "Id": "02812", "Name": "Xã Sán Chải", "Level": "Xã" },
          { "Id": "02818", "Name": "Xã Lùng Thẩn", "Level": "Xã" },
          { "Id": "02821", "Name": "Xã Cán Cấu", "Level": "Xã" },
          { "Id": "02824", "Name": "Xã Sín Chéng", "Level": "Xã" },
          { "Id": "02827", "Name": "Xã Quan Hồ Thẩn", "Level": "Xã" },
          { "Id": "02836", "Name": "Xã Nàn Xín", "Level": "Xã" }
        ]
      },
      {
        "Id": "085",
        "Name": "Huyện Bắc Hà",
        "Wards": [
          { "Id": "02839", "Name": "Thị trấn Bắc Hà", "Level": "Thị trấn" },
          { "Id": "02842", "Name": "Xã Lùng Cải", "Level": "Xã" },
          { "Id": "02848", "Name": "Xã Lùng Phình", "Level": "Xã" },
          { "Id": "02851", "Name": "Xã Tả Van Chư", "Level": "Xã" },
          { "Id": "02854", "Name": "Xã Tả Củ Tỷ", "Level": "Xã" },
          { "Id": "02857", "Name": "Xã Thải Giàng Phố", "Level": "Xã" },
          { "Id": "02863", "Name": "Xã Hoàng Thu Phố", "Level": "Xã" },
          { "Id": "02866", "Name": "Xã Bản Phố", "Level": "Xã" },
          { "Id": "02869", "Name": "Xã Bản Liền", "Level": "Xã" },
          { "Id": "02872", "Name": "Xã Tà Chải", "Level": "Xã" },
          { "Id": "02875", "Name": "Xã Na Hối", "Level": "Xã" },
          { "Id": "02878", "Name": "Xã Cốc Ly", "Level": "Xã" },
          { "Id": "02881", "Name": "Xã Nậm Mòn", "Level": "Xã" },
          { "Id": "02884", "Name": "Xã Nậm Đét", "Level": "Xã" },
          { "Id": "02887", "Name": "Xã Nậm Khánh", "Level": "Xã" },
          { "Id": "02890", "Name": "Xã Bảo Nhai", "Level": "Xã" },
          { "Id": "02893", "Name": "Xã Nậm Lúc", "Level": "Xã" },
          { "Id": "02896", "Name": "Xã Cốc Lầu", "Level": "Xã" },
          { "Id": "02899", "Name": "Xã Bản Cái", "Level": "Xã" }
        ]
      },
      {
        "Id": "086",
        "Name": "Huyện Bảo Thắng",
        "Wards": [
          {
            "Id": "02902",
            "Name": "Thị trấn N.T Phong Hải",
            "Level": "Thị trấn"
          },
          { "Id": "02905", "Name": "Thị trấn Phố Lu", "Level": "Thị trấn" },
          { "Id": "02908", "Name": "Thị trấn Tằng Loỏng", "Level": "Thị trấn" },
          { "Id": "02911", "Name": "Xã Bản Phiệt", "Level": "Xã" },
          { "Id": "02914", "Name": "Xã Bản Cầm", "Level": "Xã" },
          { "Id": "02917", "Name": "Xã Thái Niên", "Level": "Xã" },
          { "Id": "02920", "Name": "Xã Phong Niên", "Level": "Xã" },
          { "Id": "02923", "Name": "Xã Gia Phú", "Level": "Xã" },
          { "Id": "02926", "Name": "Xã Xuân Quang", "Level": "Xã" },
          { "Id": "02929", "Name": "Xã Sơn Hải", "Level": "Xã" },
          { "Id": "02932", "Name": "Xã Xuân Giao", "Level": "Xã" },
          { "Id": "02935", "Name": "Xã Trì Quang", "Level": "Xã" },
          { "Id": "02938", "Name": "Xã Sơn Hà", "Level": "Xã" },
          { "Id": "02944", "Name": "Xã Phú Nhuận", "Level": "Xã" }
        ]
      },
      {
        "Id": "087",
        "Name": "Huyện Bảo Yên",
        "Wards": [
          { "Id": "02947", "Name": "Thị trấn Phố Ràng", "Level": "Thị trấn" },
          { "Id": "02950", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "02953", "Name": "Xã Nghĩa Đô", "Level": "Xã" },
          { "Id": "02956", "Name": "Xã Vĩnh Yên", "Level": "Xã" },
          { "Id": "02959", "Name": "Xã Điện Quan", "Level": "Xã" },
          { "Id": "02962", "Name": "Xã Xuân Hoà", "Level": "Xã" },
          { "Id": "02965", "Name": "Xã Tân Dương", "Level": "Xã" },
          { "Id": "02968", "Name": "Xã Thượng Hà", "Level": "Xã" },
          { "Id": "02971", "Name": "Xã Kim Sơn", "Level": "Xã" },
          { "Id": "02974", "Name": "Xã Cam Cọn", "Level": "Xã" },
          { "Id": "02977", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "02980", "Name": "Xã Xuân Thượng", "Level": "Xã" },
          { "Id": "02983", "Name": "Xã Việt Tiến", "Level": "Xã" },
          { "Id": "02986", "Name": "Xã Yên Sơn", "Level": "Xã" },
          { "Id": "02989", "Name": "Xã Bảo Hà", "Level": "Xã" },
          { "Id": "02992", "Name": "Xã Lương Sơn", "Level": "Xã" },
          { "Id": "02998", "Name": "Xã Phúc Khánh", "Level": "Xã" }
        ]
      },
      {
        "Id": "088",
        "Name": "Thị xã Sa Pa",
        "Wards": [
          { "Id": "03001", "Name": "Phường Sa Pa", "Level": "Phường" },
          { "Id": "03002", "Name": "Phường Sa Pả", "Level": "Phường" },
          { "Id": "03003", "Name": "Phường Ô Quý Hồ", "Level": "Phường" },
          { "Id": "03004", "Name": "Xã Ngũ Chỉ Sơn", "Level": "Xã" },
          { "Id": "03006", "Name": "Phường Phan Si Păng", "Level": "Phường" },
          { "Id": "03010", "Name": "Xã Trung Chải", "Level": "Xã" },
          { "Id": "03013", "Name": "Xã Tả Phìn", "Level": "Xã" },
          { "Id": "03016", "Name": "Phường Hàm Rồng", "Level": "Xã" },
          { "Id": "03019", "Name": "Xã Hoàng Liên", "Level": "Xã" },
          { "Id": "03022", "Name": "Xã Thanh Bình", "Level": "Xã" },
          { "Id": "03028", "Name": "Phường Cầu Mây", "Level": "Phường" },
          { "Id": "03037", "Name": "Xã Mường Hoa", "Level": "Xã" },
          { "Id": "03040", "Name": "Xã Tả Van", "Level": "Xã" },
          { "Id": "03043", "Name": "Xã Mường Bo", "Level": "Xã" },
          { "Id": "03046", "Name": "Xã Bản Hồ", "Level": "Xã" },
          { "Id": "03052", "Name": "Xã Liên Minh", "Level": "Xã" }
        ]
      },
      {
        "Id": "089",
        "Name": "Huyện Văn Bàn",
        "Wards": [
          { "Id": "03055", "Name": "Thị trấn Khánh Yên", "Level": "Thị trấn" },
          { "Id": "03061", "Name": "Xã Võ Lao", "Level": "Xã" },
          { "Id": "03064", "Name": "Xã Sơn Thuỷ", "Level": "Xã" },
          { "Id": "03067", "Name": "Xã Nậm Mả", "Level": "Xã" },
          { "Id": "03070", "Name": "Xã Tân Thượng", "Level": "Xã" },
          { "Id": "03073", "Name": "Xã Nậm Rạng", "Level": "Xã" },
          { "Id": "03076", "Name": "Xã Nậm Chầy", "Level": "Xã" },
          { "Id": "03079", "Name": "Xã Tân An", "Level": "Xã" },
          { "Id": "03082", "Name": "Xã Khánh Yên Thượng", "Level": "Xã" },
          { "Id": "03085", "Name": "Xã Nậm Xé", "Level": "Xã" },
          { "Id": "03088", "Name": "Xã Dần Thàng", "Level": "Xã" },
          { "Id": "03091", "Name": "Xã Chiềng Ken", "Level": "Xã" },
          { "Id": "03094", "Name": "Xã Làng Giàng", "Level": "Xã" },
          { "Id": "03097", "Name": "Xã Hoà Mạc", "Level": "Xã" },
          { "Id": "03100", "Name": "Xã Khánh Yên Trung", "Level": "Xã" },
          { "Id": "03103", "Name": "Xã Khánh Yên Hạ", "Level": "Xã" },
          { "Id": "03106", "Name": "Xã Dương Quỳ", "Level": "Xã" },
          { "Id": "03109", "Name": "Xã Nậm Tha", "Level": "Xã" },
          { "Id": "03112", "Name": "Xã Minh Lương", "Level": "Xã" },
          { "Id": "03115", "Name": "Xã Thẩm Dương", "Level": "Xã" },
          { "Id": "03118", "Name": "Xã Liêm Phú", "Level": "Xã" },
          { "Id": "03121", "Name": "Xã Nậm Xây", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "11",
    "Name": "Tỉnh Điện Biên",
    "Districts": [
      {
        "Id": "094",
        "Name": "Thành phố Điện Biên Phủ",
        "Wards": [
          { "Id": "03124", "Name": "Phường Noong Bua", "Level": "Phường" },
          { "Id": "03127", "Name": "Phường Him Lam", "Level": "Phường" },
          { "Id": "03130", "Name": "Phường Thanh Bình", "Level": "Phường" },
          { "Id": "03133", "Name": "Phường Tân Thanh", "Level": "Phường" },
          { "Id": "03136", "Name": "Phường Mường Thanh", "Level": "Phường" },
          { "Id": "03139", "Name": "Phường Nam Thanh", "Level": "Phường" },
          { "Id": "03142", "Name": "Phường Thanh Trường", "Level": "Phường" },
          { "Id": "03145", "Name": "Xã Thanh Minh", "Level": "Xã" },
          { "Id": "03316", "Name": "Xã Nà Tấu", "Level": "Xã" },
          { "Id": "03317", "Name": "Xã Nà Nhạn", "Level": "Xã" },
          { "Id": "03325", "Name": "Xã Mường Phăng", "Level": "Xã" },
          { "Id": "03326", "Name": "Xã Pá Khoang", "Level": "Xã" }
        ]
      },
      {
        "Id": "095",
        "Name": "Thị Xã Mường Lay",
        "Wards": [
          { "Id": "03148", "Name": "Phường Sông Đà", "Level": "Phường" },
          { "Id": "03151", "Name": "Phường Na Lay", "Level": "Phường" },
          { "Id": "03184", "Name": "Xã Lay Nưa", "Level": "Xã" }
        ]
      },
      {
        "Id": "096",
        "Name": "Huyện Mường Nhé",
        "Wards": [
          { "Id": "03154", "Name": "Xã Sín Thầu", "Level": "Xã" },
          { "Id": "03155", "Name": "Xã Sen Thượng", "Level": "Xã" },
          { "Id": "03157", "Name": "Xã Chung Chải", "Level": "Xã" },
          { "Id": "03158", "Name": "Xã Leng Su Sìn", "Level": "Xã" },
          { "Id": "03159", "Name": "Xã Pá Mỳ", "Level": "Xã" },
          { "Id": "03160", "Name": "Xã Mường Nhé", "Level": "Xã" },
          { "Id": "03161", "Name": "Xã Nậm Vì", "Level": "Xã" },
          { "Id": "03162", "Name": "Xã Nậm Kè", "Level": "Xã" },
          { "Id": "03163", "Name": "Xã Mường Toong", "Level": "Xã" },
          { "Id": "03164", "Name": "Xã Quảng Lâm", "Level": "Xã" },
          { "Id": "03177", "Name": "Xã Huổi Lếnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "097",
        "Name": "Huyện Mường Chà",
        "Wards": [
          { "Id": "03172", "Name": "Thị Trấn Mường Chà", "Level": "Thị trấn" },
          { "Id": "03178", "Name": "Xã Xá Tổng", "Level": "Xã" },
          { "Id": "03181", "Name": "Xã Mường Tùng", "Level": "Xã" },
          { "Id": "03190", "Name": "Xã Hừa Ngài", "Level": "Xã" },
          { "Id": "03191", "Name": "Xã Huổi Mí", "Level": "Xã" },
          { "Id": "03193", "Name": "Xã Pa Ham", "Level": "Xã" },
          { "Id": "03194", "Name": "Xã Nậm Nèn", "Level": "Xã" },
          { "Id": "03196", "Name": "Xã Huổi Lèng", "Level": "Xã" },
          { "Id": "03197", "Name": "Xã Sa Lông", "Level": "Xã" },
          { "Id": "03200", "Name": "Xã Ma Thì Hồ", "Level": "Xã" },
          { "Id": "03201", "Name": "Xã Na Sang", "Level": "Xã" },
          { "Id": "03202", "Name": "Xã Mường Mươn", "Level": "Xã" }
        ]
      },
      {
        "Id": "098",
        "Name": "Huyện Tủa Chùa",
        "Wards": [
          { "Id": "03217", "Name": "Thị trấn Tủa Chùa", "Level": "Thị trấn" },
          { "Id": "03220", "Name": "Xã Huổi Só", "Level": "Xã" },
          { "Id": "03223", "Name": "Xã Xín Chải", "Level": "Xã" },
          { "Id": "03226", "Name": "Xã Tả Sìn Thàng", "Level": "Xã" },
          { "Id": "03229", "Name": "Xã Lao Xả Phình", "Level": "Xã" },
          { "Id": "03232", "Name": "Xã Tả Phìn", "Level": "Xã" },
          { "Id": "03235", "Name": "Xã Tủa Thàng", "Level": "Xã" },
          { "Id": "03238", "Name": "Xã Trung Thu", "Level": "Xã" },
          { "Id": "03241", "Name": "Xã Sính Phình", "Level": "Xã" },
          { "Id": "03244", "Name": "Xã Sáng Nhè", "Level": "Xã" },
          { "Id": "03247", "Name": "Xã Mường Đun", "Level": "Xã" },
          { "Id": "03250", "Name": "Xã Mường Báng", "Level": "Xã" }
        ]
      },
      {
        "Id": "099",
        "Name": "Huyện Tuần Giáo",
        "Wards": [
          { "Id": "03253", "Name": "Thị trấn Tuần Giáo", "Level": "Thị trấn" },
          { "Id": "03259", "Name": "Xã Phình Sáng", "Level": "Xã" },
          { "Id": "03260", "Name": "Xã Rạng Đông", "Level": "Xã" },
          { "Id": "03262", "Name": "Xã Mùn Chung", "Level": "Xã" },
          { "Id": "03263", "Name": "Xã Nà Tòng", "Level": "Xã" },
          { "Id": "03265", "Name": "Xã Ta Ma", "Level": "Xã" },
          { "Id": "03268", "Name": "Xã Mường Mùn", "Level": "Xã" },
          { "Id": "03269", "Name": "Xã Pú Xi", "Level": "Xã" },
          { "Id": "03271", "Name": "Xã Pú Nhung", "Level": "Xã" },
          { "Id": "03274", "Name": "Xã Quài Nưa", "Level": "Xã" },
          { "Id": "03277", "Name": "Xã Mường Thín", "Level": "Xã" },
          { "Id": "03280", "Name": "Xã Tỏa Tình", "Level": "Xã" },
          { "Id": "03283", "Name": "Xã Nà Sáy", "Level": "Xã" },
          { "Id": "03284", "Name": "Xã Mường Khong", "Level": "Xã" },
          { "Id": "03289", "Name": "Xã Quài Cang", "Level": "Xã" },
          { "Id": "03295", "Name": "Xã Quài Tở", "Level": "Xã" },
          { "Id": "03298", "Name": "Xã Chiềng Sinh", "Level": "Xã" },
          { "Id": "03299", "Name": "Xã Chiềng Đông", "Level": "Xã" },
          { "Id": "03304", "Name": "Xã Tênh Phông", "Level": "Xã" }
        ]
      },
      {
        "Id": "100",
        "Name": "Huyện Điện Biên",
        "Wards": [
          { "Id": "03319", "Name": "Xã Mường Pồn", "Level": "Xã" },
          { "Id": "03322", "Name": "Xã Thanh Nưa", "Level": "Xã" },
          { "Id": "03323", "Name": "Xã Hua Thanh", "Level": "Xã" },
          { "Id": "03328", "Name": "Xã Thanh Luông", "Level": "Xã" },
          { "Id": "03331", "Name": "Xã Thanh Hưng", "Level": "Xã" },
          { "Id": "03334", "Name": "Xã Thanh Xương", "Level": "Xã" },
          { "Id": "03337", "Name": "Xã Thanh Chăn", "Level": "Xã" },
          { "Id": "03340", "Name": "Xã Pa Thơm", "Level": "Xã" },
          { "Id": "03343", "Name": "Xã Thanh An", "Level": "Xã" },
          { "Id": "03346", "Name": "Xã Thanh Yên", "Level": "Xã" },
          { "Id": "03349", "Name": "Xã Noong Luống", "Level": "Xã" },
          { "Id": "03352", "Name": "Xã Noọng Hẹt", "Level": "Xã" },
          { "Id": "03355", "Name": "Xã Sam Mứn", "Level": "Xã" },
          { "Id": "03356", "Name": "Xã Pom Lót", "Level": "Xã" },
          { "Id": "03358", "Name": "Xã Núa Ngam", "Level": "Xã" },
          { "Id": "03359", "Name": "Xã Hẹ Muông", "Level": "Xã" },
          { "Id": "03361", "Name": "Xã Na Ư", "Level": "Xã" },
          { "Id": "03364", "Name": "Xã Mường Nhà", "Level": "Xã" },
          { "Id": "03365", "Name": "Xã Na Tông", "Level": "Xã" },
          { "Id": "03367", "Name": "Xã Mường Lói", "Level": "Xã" },
          { "Id": "03368", "Name": "Xã Phu Luông", "Level": "Xã" }
        ]
      },
      {
        "Id": "101",
        "Name": "Huyện Điện Biên Đông",
        "Wards": [
          {
            "Id": "03203",
            "Name": "Thị trấn Điện Biên Đông",
            "Level": "Thị trấn"
          },
          { "Id": "03205", "Name": "Xã Na Son", "Level": "Xã" },
          { "Id": "03208", "Name": "Xã Phì Nhừ", "Level": "Xã" },
          { "Id": "03211", "Name": "Xã Chiềng Sơ", "Level": "Xã" },
          { "Id": "03214", "Name": "Xã Mường Luân", "Level": "Xã" },
          { "Id": "03370", "Name": "Xã Pú Nhi", "Level": "Xã" },
          { "Id": "03371", "Name": "Xã Nong U", "Level": "Xã" },
          { "Id": "03373", "Name": "Xã Xa Dung", "Level": "Xã" },
          { "Id": "03376", "Name": "Xã Keo Lôm", "Level": "Xã" },
          { "Id": "03379", "Name": "Xã Luân Giới", "Level": "Xã" },
          { "Id": "03382", "Name": "Xã Phình Giàng", "Level": "Xã" },
          { "Id": "03383", "Name": "Xã Pú Hồng", "Level": "Xã" },
          { "Id": "03384", "Name": "Xã Tìa Dình", "Level": "Xã" },
          { "Id": "03385", "Name": "Xã Háng Lìa", "Level": "Xã" }
        ]
      },
      {
        "Id": "102",
        "Name": "Huyện Mường Ảng",
        "Wards": [
          { "Id": "03256", "Name": "Thị trấn Mường Ảng", "Level": "Thị trấn" },
          { "Id": "03286", "Name": "Xã Mường Đăng", "Level": "Xã" },
          { "Id": "03287", "Name": "Xã Ngối Cáy", "Level": "Xã" },
          { "Id": "03292", "Name": "Xã Ẳng Tở", "Level": "Xã" },
          { "Id": "03301", "Name": "Xã Búng Lao", "Level": "Xã" },
          { "Id": "03302", "Name": "Xã Xuân Lao", "Level": "Xã" },
          { "Id": "03307", "Name": "Xã Ẳng Nưa", "Level": "Xã" },
          { "Id": "03310", "Name": "Xã Ẳng Cang", "Level": "Xã" },
          { "Id": "03312", "Name": "Xã Nặm Lịch", "Level": "Xã" },
          { "Id": "03313", "Name": "Xã Mường Lạn", "Level": "Xã" }
        ]
      },
      {
        "Id": "103",
        "Name": "Huyện Nậm Pồ",
        "Wards": [
          { "Id": "03156", "Name": "Xã Nậm Tin", "Level": "Xã" },
          { "Id": "03165", "Name": "Xã Pa Tần", "Level": "Xã" },
          { "Id": "03166", "Name": "Xã Chà Cang", "Level": "Xã" },
          { "Id": "03167", "Name": "Xã Na Cô Sa", "Level": "Xã" },
          { "Id": "03168", "Name": "Xã Nà Khoa", "Level": "Xã" },
          { "Id": "03169", "Name": "Xã Nà Hỳ", "Level": "Xã" },
          { "Id": "03170", "Name": "Xã Nà Bủng", "Level": "Xã" },
          { "Id": "03171", "Name": "Xã Nậm Nhừ", "Level": "Xã" },
          { "Id": "03173", "Name": "Xã Nậm Chua", "Level": "Xã" },
          { "Id": "03174", "Name": "Xã Nậm Khăn", "Level": "Xã" },
          { "Id": "03175", "Name": "Xã Chà Tở", "Level": "Xã" },
          { "Id": "03176", "Name": "Xã Vàng Đán", "Level": "Xã" },
          { "Id": "03187", "Name": "Xã Chà Nưa", "Level": "Xã" },
          { "Id": "03198", "Name": "Xã Phìn Hồ", "Level": "Xã" },
          { "Id": "03199", "Name": "Xã Si Pa Phìn", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "12",
    "Name": "Tỉnh Lai Châu",
    "Districts": [
      {
        "Id": "105",
        "Name": "Thành phố Lai Châu",
        "Wards": [
          { "Id": "03386", "Name": "Phường Quyết Thắng", "Level": "Phường" },
          { "Id": "03387", "Name": "Phường Tân Phong", "Level": "Phường" },
          { "Id": "03388", "Name": "Phường Quyết Tiến", "Level": "Phường" },
          { "Id": "03389", "Name": "Phường Đoàn Kết", "Level": "Phường" },
          { "Id": "03403", "Name": "Xã Sùng Phài", "Level": "Xã" },
          { "Id": "03408", "Name": "Phường Đông Phong", "Level": "Phường" },
          { "Id": "03409", "Name": "Xã San Thàng", "Level": "Xã" }
        ]
      },
      {
        "Id": "106",
        "Name": "Huyện Tam Đường",
        "Wards": [
          { "Id": "03390", "Name": "Thị trấn Tam Đường", "Level": "Thị trấn" },
          { "Id": "03394", "Name": "Xã Thèn Sin", "Level": "Xã" },
          { "Id": "03400", "Name": "Xã Tả Lèng", "Level": "Xã" },
          { "Id": "03405", "Name": "Xã Giang Ma", "Level": "Xã" },
          { "Id": "03406", "Name": "Xã Hồ Thầu", "Level": "Xã" },
          { "Id": "03412", "Name": "Xã Bình Lư", "Level": "Xã" },
          { "Id": "03413", "Name": "Xã Sơn Bình", "Level": "Xã" },
          { "Id": "03415", "Name": "Xã Nùng Nàng", "Level": "Xã" },
          { "Id": "03418", "Name": "Xã Bản Giang", "Level": "Xã" },
          { "Id": "03421", "Name": "Xã Bản Hon", "Level": "Xã" },
          { "Id": "03424", "Name": "Xã Bản Bo", "Level": "Xã" },
          { "Id": "03427", "Name": "Xã Nà Tăm", "Level": "Xã" },
          { "Id": "03430", "Name": "Xã Khun Há", "Level": "Xã" }
        ]
      },
      {
        "Id": "107",
        "Name": "Huyện Mường Tè",
        "Wards": [
          { "Id": "03433", "Name": "Thị trấn Mường Tè", "Level": "Thị trấn" },
          { "Id": "03436", "Name": "Xã Thu Lũm", "Level": "Xã" },
          { "Id": "03439", "Name": "Xã Ka Lăng", "Level": "Xã" },
          { "Id": "03440", "Name": "Xã Tá Bạ", "Level": "Xã" },
          { "Id": "03442", "Name": "Xã Pa ủ", "Level": "Xã" },
          { "Id": "03445", "Name": "Xã Mường Tè", "Level": "Xã" },
          { "Id": "03448", "Name": "Xã Pa Vệ Sử", "Level": "Xã" },
          { "Id": "03451", "Name": "Xã Mù Cả", "Level": "Xã" },
          { "Id": "03454", "Name": "Xã Bum Tở", "Level": "Xã" },
          { "Id": "03457", "Name": "Xã Nậm Khao", "Level": "Xã" },
          { "Id": "03463", "Name": "Xã Tà Tổng", "Level": "Xã" },
          { "Id": "03466", "Name": "Xã Bum Nưa", "Level": "Xã" },
          { "Id": "03467", "Name": "Xã Vàng San", "Level": "Xã" },
          { "Id": "03469", "Name": "Xã Kan Hồ", "Level": "Xã" }
        ]
      },
      {
        "Id": "108",
        "Name": "Huyện Sìn Hồ",
        "Wards": [
          { "Id": "03478", "Name": "Thị trấn Sìn Hồ", "Level": "Thị trấn" },
          { "Id": "03487", "Name": "Xã Chăn Nưa", "Level": "Xã" },
          { "Id": "03493", "Name": "Xã Pa Tần", "Level": "Xã" },
          { "Id": "03496", "Name": "Xã Phìn Hồ", "Level": "Xã" },
          { "Id": "03499", "Name": "Xã Hồng Thu", "Level": "Xã" },
          { "Id": "03505", "Name": "Xã Phăng Sô Lin", "Level": "Xã" },
          { "Id": "03508", "Name": "Xã Ma Quai", "Level": "Xã" },
          { "Id": "03509", "Name": "Xã Lùng Thàng", "Level": "Xã" },
          { "Id": "03511", "Name": "Xã Tả Phìn", "Level": "Xã" },
          { "Id": "03514", "Name": "Xã Sà Dề Phìn", "Level": "Xã" },
          { "Id": "03517", "Name": "Xã Nậm Tăm", "Level": "Xã" },
          { "Id": "03520", "Name": "Xã Tả Ngảo", "Level": "Xã" },
          { "Id": "03523", "Name": "Xã Pu Sam Cáp", "Level": "Xã" },
          { "Id": "03526", "Name": "Xã Nậm Cha", "Level": "Xã" },
          { "Id": "03527", "Name": "Xã Pa Khoá", "Level": "Xã" },
          { "Id": "03529", "Name": "Xã Làng Mô", "Level": "Xã" },
          { "Id": "03532", "Name": "Xã Noong Hẻo", "Level": "Xã" },
          { "Id": "03535", "Name": "Xã Nậm Mạ", "Level": "Xã" },
          { "Id": "03538", "Name": "Xã Căn Co", "Level": "Xã" },
          { "Id": "03541", "Name": "Xã Tủa Sín Chải", "Level": "Xã" },
          { "Id": "03544", "Name": "Xã Nậm Cuổi", "Level": "Xã" },
          { "Id": "03547", "Name": "Xã Nậm Hăn", "Level": "Xã" }
        ]
      },
      {
        "Id": "109",
        "Name": "Huyện Phong Thổ",
        "Wards": [
          { "Id": "03391", "Name": "Xã Lả Nhì Thàng", "Level": "Xã" },
          { "Id": "03490", "Name": "Xã Huổi Luông", "Level": "Xã" },
          { "Id": "03549", "Name": "Thị trấn Phong Thổ", "Level": "Thị trấn" },
          { "Id": "03550", "Name": "Xã Sì Lở Lầu", "Level": "Xã" },
          { "Id": "03553", "Name": "Xã Mồ Sì San", "Level": "Xã" },
          { "Id": "03559", "Name": "Xã Pa Vây Sử", "Level": "Xã" },
          { "Id": "03562", "Name": "Xã Vàng Ma Chải", "Level": "Xã" },
          { "Id": "03565", "Name": "Xã Tông Qua Lìn", "Level": "Xã" },
          { "Id": "03568", "Name": "Xã Mù Sang", "Level": "Xã" },
          { "Id": "03571", "Name": "Xã Dào San", "Level": "Xã" },
          { "Id": "03574", "Name": "Xã Ma Ly Pho", "Level": "Xã" },
          { "Id": "03577", "Name": "Xã Bản Lang", "Level": "Xã" },
          { "Id": "03580", "Name": "Xã Hoang Thèn", "Level": "Xã" },
          { "Id": "03583", "Name": "Xã Khổng Lào", "Level": "Xã" },
          { "Id": "03586", "Name": "Xã Nậm Xe", "Level": "Xã" },
          { "Id": "03589", "Name": "Xã Mường So", "Level": "Xã" },
          { "Id": "03592", "Name": "Xã Sin Suối Hồ", "Level": "Xã" }
        ]
      },
      {
        "Id": "110",
        "Name": "Huyện Than Uyên",
        "Wards": [
          { "Id": "03595", "Name": "Thị trấn Than Uyên", "Level": "Thị trấn" },
          { "Id": "03618", "Name": "Xã Phúc Than", "Level": "Xã" },
          { "Id": "03619", "Name": "Xã Mường Than", "Level": "Xã" },
          { "Id": "03625", "Name": "Xã Mường Mít", "Level": "Xã" },
          { "Id": "03628", "Name": "Xã Pha Mu", "Level": "Xã" },
          { "Id": "03631", "Name": "Xã Mường Cang", "Level": "Xã" },
          { "Id": "03632", "Name": "Xã Hua Nà", "Level": "Xã" },
          { "Id": "03634", "Name": "Xã Tà Hừa", "Level": "Xã" },
          { "Id": "03637", "Name": "Xã Mường Kim", "Level": "Xã" },
          { "Id": "03638", "Name": "Xã Tà Mung", "Level": "Xã" },
          { "Id": "03640", "Name": "Xã Tà Gia", "Level": "Xã" },
          { "Id": "03643", "Name": "Xã Khoen On", "Level": "Xã" }
        ]
      },
      {
        "Id": "111",
        "Name": "Huyện Tân Uyên",
        "Wards": [
          { "Id": "03598", "Name": "Thị trấn Tân Uyên", "Level": "Thị trấn" },
          { "Id": "03601", "Name": "Xã Mường Khoa", "Level": "Xã" },
          { "Id": "03602", "Name": "Xã Phúc Khoa", "Level": "Xã" },
          { "Id": "03604", "Name": "Xã Thân Thuộc", "Level": "Xã" },
          { "Id": "03605", "Name": "Xã Trung Đồng", "Level": "Xã" },
          { "Id": "03607", "Name": "Xã Hố Mít", "Level": "Xã" },
          { "Id": "03610", "Name": "Xã Nậm Cần", "Level": "Xã" },
          { "Id": "03613", "Name": "Xã Nậm Sỏ", "Level": "Xã" },
          { "Id": "03616", "Name": "Xã Pắc Ta", "Level": "Xã" },
          { "Id": "03622", "Name": "Xã Tà Mít", "Level": "Xã" }
        ]
      },
      {
        "Id": "112",
        "Name": "Huyện Nậm Nhùn",
        "Wards": [
          { "Id": "03434", "Name": "Thị trấn Nậm Nhùn", "Level": "Thị trấn" },
          { "Id": "03460", "Name": "Xã Hua Bun", "Level": "Xã" },
          { "Id": "03472", "Name": "Xã Mường Mô", "Level": "Xã" },
          { "Id": "03473", "Name": "Xã Nậm Chà", "Level": "Xã" },
          { "Id": "03474", "Name": "Xã Nậm Manh", "Level": "Xã" },
          { "Id": "03475", "Name": "Xã Nậm Hàng", "Level": "Xã" },
          { "Id": "03481", "Name": "Xã Lê Lợi", "Level": "Xã" },
          { "Id": "03484", "Name": "Xã Pú Đao", "Level": "Xã" },
          { "Id": "03488", "Name": "Xã Nậm Pì", "Level": "Xã" },
          { "Id": "03502", "Name": "Xã Nậm Ban", "Level": "Xã" },
          { "Id": "03503", "Name": "Xã Trung Chải", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "14",
    "Name": "Tỉnh Sơn La",
    "Districts": [
      {
        "Id": "116",
        "Name": "Thành phố Sơn La",
        "Wards": [
          { "Id": "03646", "Name": "Phường Chiềng Lề", "Level": "Phường" },
          { "Id": "03649", "Name": "Phường Tô Hiệu", "Level": "Phường" },
          { "Id": "03652", "Name": "Phường Quyết Thắng", "Level": "Phường" },
          { "Id": "03655", "Name": "Phường Quyết Tâm", "Level": "Phường" },
          { "Id": "03658", "Name": "Xã Chiềng Cọ", "Level": "Xã" },
          { "Id": "03661", "Name": "Xã Chiềng Đen", "Level": "Xã" },
          { "Id": "03664", "Name": "Xã Chiềng Xôm", "Level": "Xã" },
          { "Id": "03667", "Name": "Phường Chiềng An", "Level": "Phường" },
          { "Id": "03670", "Name": "Phường Chiềng Cơi", "Level": "Phường" },
          { "Id": "03673", "Name": "Xã Chiềng Ngần", "Level": "Xã" },
          { "Id": "03676", "Name": "Xã Hua La", "Level": "Xã" },
          { "Id": "03679", "Name": "Phường Chiềng Sinh", "Level": "Phường" }
        ]
      },
      {
        "Id": "118",
        "Name": "Huyện Quỳnh Nhai",
        "Wards": [
          { "Id": "03682", "Name": "Xã Mường Chiên", "Level": "Xã" },
          { "Id": "03685", "Name": "Xã Cà Nàng", "Level": "Xã" },
          { "Id": "03688", "Name": "Xã Chiềng Khay", "Level": "Xã" },
          { "Id": "03694", "Name": "Xã Mường Giôn", "Level": "Xã" },
          { "Id": "03697", "Name": "Xã Pá Ma Pha Khinh", "Level": "Xã" },
          { "Id": "03700", "Name": "Xã Chiềng Ơn", "Level": "Xã" },
          { "Id": "03703", "Name": "Xã Mường Giàng", "Level": "Xã" },
          { "Id": "03706", "Name": "Xã Chiềng Bằng", "Level": "Xã" },
          { "Id": "03709", "Name": "Xã Mường Sại", "Level": "Xã" },
          { "Id": "03712", "Name": "Xã Nậm ét", "Level": "Xã" },
          { "Id": "03718", "Name": "Xã Chiềng Khoang", "Level": "Xã" }
        ]
      },
      {
        "Id": "119",
        "Name": "Huyện Thuận Châu",
        "Wards": [
          { "Id": "03721", "Name": "Thị trấn Thuận Châu", "Level": "Thị trấn" },
          { "Id": "03724", "Name": "Xã Phổng Lái", "Level": "Xã" },
          { "Id": "03727", "Name": "Xã Mường é", "Level": "Xã" },
          { "Id": "03730", "Name": "Xã Chiềng Pha", "Level": "Xã" },
          { "Id": "03733", "Name": "Xã Chiềng La", "Level": "Xã" },
          { "Id": "03736", "Name": "Xã Chiềng Ngàm", "Level": "Xã" },
          { "Id": "03739", "Name": "Xã Liệp Tè", "Level": "Xã" },
          { "Id": "03742", "Name": "Xã é Tòng", "Level": "Xã" },
          { "Id": "03745", "Name": "Xã Phổng Lập", "Level": "Xã" },
          { "Id": "03748", "Name": "Xã Phổng Lăng", "Level": "Xã" },
          { "Id": "03751", "Name": "Xã Chiềng Ly", "Level": "Xã" },
          { "Id": "03754", "Name": "Xã Noong Lay", "Level": "Xã" },
          { "Id": "03757", "Name": "Xã Mường Khiêng", "Level": "Xã" },
          { "Id": "03760", "Name": "Xã Mường Bám", "Level": "Xã" },
          { "Id": "03763", "Name": "Xã Long Hẹ", "Level": "Xã" },
          { "Id": "03766", "Name": "Xã Chiềng Bôm", "Level": "Xã" },
          { "Id": "03769", "Name": "Xã Thôm Mòn", "Level": "Xã" },
          { "Id": "03772", "Name": "Xã Tông Lạnh", "Level": "Xã" },
          { "Id": "03775", "Name": "Xã Tông Cọ", "Level": "Xã" },
          { "Id": "03778", "Name": "Xã Bó Mười", "Level": "Xã" },
          { "Id": "03781", "Name": "Xã Co Mạ", "Level": "Xã" },
          { "Id": "03784", "Name": "Xã Púng Tra", "Level": "Xã" },
          { "Id": "03787", "Name": "Xã Chiềng Pấc", "Level": "Xã" },
          { "Id": "03790", "Name": "Xã Nậm Lầu", "Level": "Xã" },
          { "Id": "03793", "Name": "Xã Bon Phặng", "Level": "Xã" },
          { "Id": "03796", "Name": "Xã Co Tòng", "Level": "Xã" },
          { "Id": "03799", "Name": "Xã Muổi Nọi", "Level": "Xã" },
          { "Id": "03802", "Name": "Xã Pá Lông", "Level": "Xã" },
          { "Id": "03805", "Name": "Xã Bản Lầm", "Level": "Xã" }
        ]
      },
      {
        "Id": "120",
        "Name": "Huyện Mường La",
        "Wards": [
          { "Id": "03808", "Name": "Thị trấn Ít Ong", "Level": "Thị trấn" },
          { "Id": "03811", "Name": "Xã Nậm Giôn", "Level": "Xã" },
          { "Id": "03814", "Name": "Xã Chiềng Lao", "Level": "Xã" },
          { "Id": "03817", "Name": "Xã Hua Trai", "Level": "Xã" },
          { "Id": "03820", "Name": "Xã Ngọc Chiến", "Level": "Xã" },
          { "Id": "03823", "Name": "Xã Mường Trai", "Level": "Xã" },
          { "Id": "03826", "Name": "Xã Nậm Păm", "Level": "Xã" },
          { "Id": "03829", "Name": "Xã Chiềng Muôn", "Level": "Xã" },
          { "Id": "03832", "Name": "Xã Chiềng Ân", "Level": "Xã" },
          { "Id": "03835", "Name": "Xã Pi Toong", "Level": "Xã" },
          { "Id": "03838", "Name": "Xã Chiềng Công", "Level": "Xã" },
          { "Id": "03841", "Name": "Xã Tạ Bú", "Level": "Xã" },
          { "Id": "03844", "Name": "Xã Chiềng San", "Level": "Xã" },
          { "Id": "03847", "Name": "Xã Mường Bú", "Level": "Xã" },
          { "Id": "03850", "Name": "Xã Chiềng Hoa", "Level": "Xã" },
          { "Id": "03853", "Name": "Xã Mường Chùm", "Level": "Xã" }
        ]
      },
      {
        "Id": "121",
        "Name": "Huyện Bắc Yên",
        "Wards": [
          { "Id": "03856", "Name": "Thị trấn Bắc Yên", "Level": "Thị trấn" },
          { "Id": "03859", "Name": "Xã Phiêng Ban", "Level": "Xã" },
          { "Id": "03862", "Name": "Xã Hang Chú", "Level": "Xã" },
          { "Id": "03865", "Name": "Xã Xím Vàng", "Level": "Xã" },
          { "Id": "03868", "Name": "Xã Tà Xùa", "Level": "Xã" },
          { "Id": "03869", "Name": "Xã Háng Đồng", "Level": "Xã" },
          { "Id": "03871", "Name": "Xã Pắc Ngà", "Level": "Xã" },
          { "Id": "03874", "Name": "Xã Làng Chếu", "Level": "Xã" },
          { "Id": "03877", "Name": "Xã Chim Vàn", "Level": "Xã" },
          { "Id": "03880", "Name": "Xã Mường Khoa", "Level": "Xã" },
          { "Id": "03883", "Name": "Xã Song Pe", "Level": "Xã" },
          { "Id": "03886", "Name": "Xã Hồng Ngài", "Level": "Xã" },
          { "Id": "03889", "Name": "Xã Tạ Khoa", "Level": "Xã" },
          { "Id": "03890", "Name": "Xã Hua Nhàn", "Level": "Xã" },
          { "Id": "03892", "Name": "Xã Phiêng Côn", "Level": "Xã" },
          { "Id": "03895", "Name": "Xã Chiềng Sại", "Level": "Xã" }
        ]
      },
      {
        "Id": "122",
        "Name": "Huyện Phù Yên",
        "Wards": [
          { "Id": "03898", "Name": "Thị trấn Phù Yên", "Level": "Thị trấn" },
          { "Id": "03901", "Name": "Xã Suối Tọ", "Level": "Xã" },
          { "Id": "03904", "Name": "Xã Mường Thải", "Level": "Xã" },
          { "Id": "03907", "Name": "Xã Mường Cơi", "Level": "Xã" },
          { "Id": "03910", "Name": "Xã Quang Huy", "Level": "Xã" },
          { "Id": "03913", "Name": "Xã Huy Bắc", "Level": "Xã" },
          { "Id": "03916", "Name": "Xã Huy Thượng", "Level": "Xã" },
          { "Id": "03919", "Name": "Xã Tân Lang", "Level": "Xã" },
          { "Id": "03922", "Name": "Xã Gia Phù", "Level": "Xã" },
          { "Id": "03925", "Name": "Xã Tường Phù", "Level": "Xã" },
          { "Id": "03928", "Name": "Xã Huy Hạ", "Level": "Xã" },
          { "Id": "03931", "Name": "Xã Huy Tân", "Level": "Xã" },
          { "Id": "03934", "Name": "Xã Mường Lang", "Level": "Xã" },
          { "Id": "03937", "Name": "Xã Suối Bau", "Level": "Xã" },
          { "Id": "03940", "Name": "Xã Huy Tường", "Level": "Xã" },
          { "Id": "03943", "Name": "Xã Mường Do", "Level": "Xã" },
          { "Id": "03946", "Name": "Xã Sập Xa", "Level": "Xã" },
          { "Id": "03949", "Name": "Xã Tường Thượng", "Level": "Xã" },
          { "Id": "03952", "Name": "Xã Tường Tiến", "Level": "Xã" },
          { "Id": "03955", "Name": "Xã Tường Phong", "Level": "Xã" },
          { "Id": "03958", "Name": "Xã Tường Hạ", "Level": "Xã" },
          { "Id": "03961", "Name": "Xã Kim Bon", "Level": "Xã" },
          { "Id": "03964", "Name": "Xã Mường Bang", "Level": "Xã" },
          { "Id": "03967", "Name": "Xã Đá Đỏ", "Level": "Xã" },
          { "Id": "03970", "Name": "Xã Tân Phong", "Level": "Xã" },
          { "Id": "03973", "Name": "Xã Nam Phong", "Level": "Xã" },
          { "Id": "03976", "Name": "Xã Bắc Phong", "Level": "Xã" }
        ]
      },
      {
        "Id": "123",
        "Name": "Huyện Mộc Châu",
        "Wards": [
          { "Id": "03979", "Name": "Thị trấn Mộc Châu", "Level": "Thị trấn" },
          {
            "Id": "03982",
            "Name": "Thị trấn NT Mộc Châu",
            "Level": "Thị trấn"
          },
          { "Id": "03985", "Name": "Xã Chiềng Sơn", "Level": "Xã" },
          { "Id": "03988", "Name": "Xã Tân Hợp", "Level": "Xã" },
          { "Id": "03991", "Name": "Xã Qui Hướng", "Level": "Xã" },
          { "Id": "03997", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "04000", "Name": "Xã Nà Mường", "Level": "Xã" },
          { "Id": "04003", "Name": "Xã Tà Lai", "Level": "Xã" },
          { "Id": "04012", "Name": "Xã Chiềng Hắc", "Level": "Xã" },
          { "Id": "04015", "Name": "Xã Hua Păng", "Level": "Xã" },
          { "Id": "04024", "Name": "Xã Chiềng Khừa", "Level": "Xã" },
          { "Id": "04027", "Name": "Xã Mường Sang", "Level": "Xã" },
          { "Id": "04030", "Name": "Xã Đông Sang", "Level": "Xã" },
          { "Id": "04033", "Name": "Xã Phiêng Luông", "Level": "Xã" },
          { "Id": "04045", "Name": "Xã Lóng Sập", "Level": "Xã" }
        ]
      },
      {
        "Id": "124",
        "Name": "Huyện Yên Châu",
        "Wards": [
          { "Id": "04060", "Name": "Thị trấn Yên Châu", "Level": "Thị trấn" },
          { "Id": "04063", "Name": "Xã Chiềng Đông", "Level": "Xã" },
          { "Id": "04066", "Name": "Xã Sập Vạt", "Level": "Xã" },
          { "Id": "04069", "Name": "Xã Chiềng Sàng", "Level": "Xã" },
          { "Id": "04072", "Name": "Xã Chiềng Pằn", "Level": "Xã" },
          { "Id": "04075", "Name": "Xã Viêng Lán", "Level": "Xã" },
          { "Id": "04078", "Name": "Xã Chiềng Hặc", "Level": "Xã" },
          { "Id": "04081", "Name": "Xã Mường Lựm", "Level": "Xã" },
          { "Id": "04084", "Name": "Xã Chiềng On", "Level": "Xã" },
          { "Id": "04087", "Name": "Xã Yên Sơn", "Level": "Xã" },
          { "Id": "04090", "Name": "Xã Chiềng Khoi", "Level": "Xã" },
          { "Id": "04093", "Name": "Xã Tú Nang", "Level": "Xã" },
          { "Id": "04096", "Name": "Xã Lóng Phiêng", "Level": "Xã" },
          { "Id": "04099", "Name": "Xã Phiêng Khoài", "Level": "Xã" },
          { "Id": "04102", "Name": "Xã Chiềng Tương", "Level": "Xã" }
        ]
      },
      {
        "Id": "125",
        "Name": "Huyện Mai Sơn",
        "Wards": [
          { "Id": "04105", "Name": "Thị trấn Hát Lót", "Level": "Thị trấn" },
          { "Id": "04108", "Name": "Xã Chiềng Sung", "Level": "Xã" },
          { "Id": "04111", "Name": "Xã Mường Bằng", "Level": "Xã" },
          { "Id": "04114", "Name": "Xã Chiềng Chăn", "Level": "Xã" },
          { "Id": "04117", "Name": "Xã Mương Chanh", "Level": "Xã" },
          { "Id": "04120", "Name": "Xã Chiềng Ban", "Level": "Xã" },
          { "Id": "04123", "Name": "Xã Chiềng Mung", "Level": "Xã" },
          { "Id": "04126", "Name": "Xã Mường Bon", "Level": "Xã" },
          { "Id": "04129", "Name": "Xã Chiềng Chung", "Level": "Xã" },
          { "Id": "04132", "Name": "Xã Chiềng Mai", "Level": "Xã" },
          { "Id": "04135", "Name": "Xã Hát Lót", "Level": "Xã" },
          { "Id": "04136", "Name": "Xã Nà Pó", "Level": "Xã" },
          { "Id": "04138", "Name": "Xã Cò  Nòi", "Level": "Xã" },
          { "Id": "04141", "Name": "Xã Chiềng Nơi", "Level": "Xã" },
          { "Id": "04144", "Name": "Xã Phiêng Cằm", "Level": "Xã" },
          { "Id": "04147", "Name": "Xã Chiềng Dong", "Level": "Xã" },
          { "Id": "04150", "Name": "Xã Chiềng Kheo", "Level": "Xã" },
          { "Id": "04153", "Name": "Xã Chiềng Ve", "Level": "Xã" },
          { "Id": "04156", "Name": "Xã Chiềng Lương", "Level": "Xã" },
          { "Id": "04159", "Name": "Xã Phiêng Pằn", "Level": "Xã" },
          { "Id": "04162", "Name": "Xã Nà Ơt", "Level": "Xã" },
          { "Id": "04165", "Name": "Xã Tà Hộc", "Level": "Xã" }
        ]
      },
      {
        "Id": "126",
        "Name": "Huyện Sông Mã",
        "Wards": [
          { "Id": "04168", "Name": "Thị trấn Sông Mã", "Level": "Thị trấn" },
          { "Id": "04171", "Name": "Xã Bó Sinh", "Level": "Xã" },
          { "Id": "04174", "Name": "Xã Pú Pẩu", "Level": "Xã" },
          { "Id": "04177", "Name": "Xã Chiềng Phung", "Level": "Xã" },
          { "Id": "04180", "Name": "Xã Chiềng En", "Level": "Xã" },
          { "Id": "04183", "Name": "Xã Mường Lầm", "Level": "Xã" },
          { "Id": "04186", "Name": "Xã Nậm Ty", "Level": "Xã" },
          { "Id": "04189", "Name": "Xã Đứa Mòn", "Level": "Xã" },
          { "Id": "04192", "Name": "Xã Yên Hưng", "Level": "Xã" },
          { "Id": "04195", "Name": "Xã Chiềng Sơ", "Level": "Xã" },
          { "Id": "04198", "Name": "Xã Nà Nghịu", "Level": "Xã" },
          { "Id": "04201", "Name": "Xã Nậm Mằn", "Level": "Xã" },
          { "Id": "04204", "Name": "Xã Chiềng Khoong", "Level": "Xã" },
          { "Id": "04207", "Name": "Xã Chiềng Cang", "Level": "Xã" },
          { "Id": "04210", "Name": "Xã Huổi Một", "Level": "Xã" },
          { "Id": "04213", "Name": "Xã Mường Sai", "Level": "Xã" },
          { "Id": "04216", "Name": "Xã Mường Cai", "Level": "Xã" },
          { "Id": "04219", "Name": "Xã Mường Hung", "Level": "Xã" },
          { "Id": "04222", "Name": "Xã Chiềng Khương", "Level": "Xã" }
        ]
      },
      {
        "Id": "127",
        "Name": "Huyện Sốp Cộp",
        "Wards": [
          { "Id": "04225", "Name": "Xã Sam Kha", "Level": "Xã" },
          { "Id": "04228", "Name": "Xã Púng Bánh", "Level": "Xã" },
          { "Id": "04231", "Name": "Xã Sốp Cộp", "Level": "Xã" },
          { "Id": "04234", "Name": "Xã Dồm Cang", "Level": "Xã" },
          { "Id": "04237", "Name": "Xã Nậm Lạnh", "Level": "Xã" },
          { "Id": "04240", "Name": "Xã Mường Lèo", "Level": "Xã" },
          { "Id": "04243", "Name": "Xã Mường Và", "Level": "Xã" },
          { "Id": "04246", "Name": "Xã Mường Lạn", "Level": "Xã" }
        ]
      },
      {
        "Id": "128",
        "Name": "Huyện Vân Hồ",
        "Wards": [
          { "Id": "03994", "Name": "Xã Suối Bàng", "Level": "Xã" },
          { "Id": "04006", "Name": "Xã Song Khủa", "Level": "Xã" },
          { "Id": "04009", "Name": "Xã Liên Hoà", "Level": "Xã" },
          { "Id": "04018", "Name": "Xã Tô Múa", "Level": "Xã" },
          { "Id": "04021", "Name": "Xã Mường Tè", "Level": "Xã" },
          { "Id": "04036", "Name": "Xã Chiềng Khoa", "Level": "Xã" },
          { "Id": "04039", "Name": "Xã Mường Men", "Level": "Xã" },
          { "Id": "04042", "Name": "Xã Quang Minh", "Level": "Xã" },
          { "Id": "04048", "Name": "Xã Vân Hồ", "Level": "Xã" },
          { "Id": "04051", "Name": "Xã Lóng Luông", "Level": "Xã" },
          { "Id": "04054", "Name": "Xã Chiềng Yên", "Level": "Xã" },
          { "Id": "04056", "Name": "Xã Chiềng Xuân", "Level": "Xã" },
          { "Id": "04057", "Name": "Xã Xuân Nha", "Level": "Xã" },
          { "Id": "04058", "Name": "Xã Tân Xuân", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "15",
    "Name": "Tỉnh Yên Bái",
    "Districts": [
      {
        "Id": "132",
        "Name": "Thành phố Yên Bái",
        "Wards": [
          { "Id": "04249", "Name": "Phường Yên Thịnh", "Level": "Phường" },
          { "Id": "04252", "Name": "Phường Yên Ninh", "Level": "Phường" },
          { "Id": "04255", "Name": "Phường Minh Tân", "Level": "Phường" },
          {
            "Id": "04258",
            "Name": "Phường Nguyễn Thái Học",
            "Level": "Phường"
          },
          { "Id": "04261", "Name": "Phường Đồng Tâm", "Level": "Phường" },
          { "Id": "04264", "Name": "Phường Nguyễn Phúc", "Level": "Phường" },
          { "Id": "04267", "Name": "Phường Hồng Hà", "Level": "Phường" },
          { "Id": "04270", "Name": "Xã Minh Bảo", "Level": "Xã" },
          { "Id": "04273", "Name": "Phường Nam Cường", "Level": "Phường" },
          { "Id": "04276", "Name": "Xã Tuy Lộc", "Level": "Xã" },
          { "Id": "04279", "Name": "Xã Tân Thịnh", "Level": "Xã" },
          { "Id": "04540", "Name": "Xã Âu Lâu", "Level": "Xã" },
          { "Id": "04543", "Name": "Xã Giới Phiên", "Level": "Xã" },
          { "Id": "04546", "Name": "Phường Hợp Minh", "Level": "Phường" },
          { "Id": "04558", "Name": "Xã Văn Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "133",
        "Name": "Thị xã Nghĩa Lộ",
        "Wards": [
          { "Id": "04282", "Name": "Phường Pú Trạng", "Level": "Phường" },
          { "Id": "04285", "Name": "Phường Trung Tâm", "Level": "Phường" },
          { "Id": "04288", "Name": "Phường Tân An", "Level": "Phường" },
          { "Id": "04291", "Name": "Phường Cầu Thia", "Level": "Phường" },
          { "Id": "04294", "Name": "Xã Nghĩa Lợi", "Level": "Xã" },
          { "Id": "04297", "Name": "Xã Nghĩa Phúc", "Level": "Xã" },
          { "Id": "04300", "Name": "Xã Nghĩa An", "Level": "Xã" },
          { "Id": "04624", "Name": "Xã Nghĩa Lộ", "Level": "Xã" },
          { "Id": "04660", "Name": "Xã Sơn A", "Level": "Xã" },
          { "Id": "04663", "Name": "Xã Phù Nham", "Level": "Xã" },
          { "Id": "04675", "Name": "Xã Thanh Lương", "Level": "Xã" },
          { "Id": "04678", "Name": "Xã Hạnh Sơn", "Level": "Xã" },
          { "Id": "04681", "Name": "Xã Phúc Sơn", "Level": "Xã" },
          { "Id": "04684", "Name": "Xã Thạch Lương", "Level": "Xã" }
        ]
      },
      {
        "Id": "135",
        "Name": "Huyện Lục Yên",
        "Wards": [
          { "Id": "04303", "Name": "Thị trấn Yên Thế", "Level": "Thị trấn" },
          { "Id": "04306", "Name": "Xã Tân Phượng", "Level": "Xã" },
          { "Id": "04309", "Name": "Xã Lâm Thượng", "Level": "Xã" },
          { "Id": "04312", "Name": "Xã Khánh Thiện", "Level": "Xã" },
          { "Id": "04315", "Name": "Xã Minh Chuẩn", "Level": "Xã" },
          { "Id": "04318", "Name": "Xã Mai Sơn", "Level": "Xã" },
          { "Id": "04321", "Name": "Xã Khai Trung", "Level": "Xã" },
          { "Id": "04324", "Name": "Xã Mường Lai", "Level": "Xã" },
          { "Id": "04327", "Name": "Xã An Lạc", "Level": "Xã" },
          { "Id": "04330", "Name": "Xã Minh Xuân", "Level": "Xã" },
          { "Id": "04333", "Name": "Xã Tô Mậu", "Level": "Xã" },
          { "Id": "04336", "Name": "Xã Tân Lĩnh", "Level": "Xã" },
          { "Id": "04339", "Name": "Xã Yên Thắng", "Level": "Xã" },
          { "Id": "04342", "Name": "Xã Khánh Hoà", "Level": "Xã" },
          { "Id": "04345", "Name": "Xã Vĩnh Lạc", "Level": "Xã" },
          { "Id": "04348", "Name": "Xã Liễu Đô", "Level": "Xã" },
          { "Id": "04351", "Name": "Xã Động Quan", "Level": "Xã" },
          { "Id": "04354", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "04357", "Name": "Xã Minh Tiến", "Level": "Xã" },
          { "Id": "04360", "Name": "Xã Trúc Lâu", "Level": "Xã" },
          { "Id": "04363", "Name": "Xã Phúc Lợi", "Level": "Xã" },
          { "Id": "04366", "Name": "Xã Phan Thanh", "Level": "Xã" },
          { "Id": "04369", "Name": "Xã An Phú", "Level": "Xã" },
          { "Id": "04372", "Name": "Xã Trung Tâm", "Level": "Xã" }
        ]
      },
      {
        "Id": "136",
        "Name": "Huyện Văn Yên",
        "Wards": [
          { "Id": "04375", "Name": "Thị trấn Mậu A", "Level": "Thị trấn" },
          { "Id": "04378", "Name": "Xã Lang Thíp", "Level": "Xã" },
          { "Id": "04381", "Name": "Xã Lâm Giang", "Level": "Xã" },
          { "Id": "04384", "Name": "Xã Châu Quế Thượng", "Level": "Xã" },
          { "Id": "04387", "Name": "Xã Châu Quế Hạ", "Level": "Xã" },
          { "Id": "04390", "Name": "Xã An Bình", "Level": "Xã" },
          { "Id": "04393", "Name": "Xã Quang Minh", "Level": "Xã" },
          { "Id": "04396", "Name": "Xã Đông An", "Level": "Xã" },
          { "Id": "04399", "Name": "Xã Đông Cuông", "Level": "Xã" },
          { "Id": "04402", "Name": "Xã Phong Dụ Hạ", "Level": "Xã" },
          { "Id": "04405", "Name": "Xã Mậu Đông", "Level": "Xã" },
          { "Id": "04408", "Name": "Xã Ngòi A", "Level": "Xã" },
          { "Id": "04411", "Name": "Xã Xuân Tầm", "Level": "Xã" },
          { "Id": "04414", "Name": "Xã Tân Hợp", "Level": "Xã" },
          { "Id": "04417", "Name": "Xã An Thịnh", "Level": "Xã" },
          { "Id": "04420", "Name": "Xã Yên Thái", "Level": "Xã" },
          { "Id": "04423", "Name": "Xã Phong Dụ Thượng", "Level": "Xã" },
          { "Id": "04426", "Name": "Xã Yên Hợp", "Level": "Xã" },
          { "Id": "04429", "Name": "Xã Đại Sơn", "Level": "Xã" },
          { "Id": "04435", "Name": "Xã Đại Phác", "Level": "Xã" },
          { "Id": "04438", "Name": "Xã Yên Phú", "Level": "Xã" },
          { "Id": "04441", "Name": "Xã Xuân Ái", "Level": "Xã" },
          { "Id": "04447", "Name": "Xã Viễn Sơn", "Level": "Xã" },
          { "Id": "04450", "Name": "Xã Mỏ Vàng", "Level": "Xã" },
          { "Id": "04453", "Name": "Xã Nà Hẩu", "Level": "Xã" }
        ]
      },
      {
        "Id": "137",
        "Name": "Huyện Mù Căng Chải",
        "Wards": [
          {
            "Id": "04456",
            "Name": "Thị trấn Mù Căng Chải",
            "Level": "Thị trấn"
          },
          { "Id": "04459", "Name": "Xã Hồ Bốn", "Level": "Xã" },
          { "Id": "04462", "Name": "Xã Nậm Có", "Level": "Xã" },
          { "Id": "04465", "Name": "Xã Khao Mang", "Level": "Xã" },
          { "Id": "04468", "Name": "Xã Mồ Dề", "Level": "Xã" },
          { "Id": "04471", "Name": "Xã Chế Cu Nha", "Level": "Xã" },
          { "Id": "04474", "Name": "Xã Lao Chải", "Level": "Xã" },
          { "Id": "04477", "Name": "Xã Kim Nọi", "Level": "Xã" },
          { "Id": "04480", "Name": "Xã Cao Phạ", "Level": "Xã" },
          { "Id": "04483", "Name": "Xã La Pán Tẩn", "Level": "Xã" },
          { "Id": "04486", "Name": "Xã Dế Su Phình", "Level": "Xã" },
          { "Id": "04489", "Name": "Xã Chế Tạo", "Level": "Xã" },
          { "Id": "04492", "Name": "Xã Púng Luông", "Level": "Xã" },
          { "Id": "04495", "Name": "Xã Nậm Khắt", "Level": "Xã" }
        ]
      },
      {
        "Id": "138",
        "Name": "Huyện Trấn Yên",
        "Wards": [
          { "Id": "04498", "Name": "Thị trấn Cổ Phúc", "Level": "Thị trấn" },
          { "Id": "04501", "Name": "Xã Tân Đồng", "Level": "Xã" },
          { "Id": "04504", "Name": "Xã Báo Đáp", "Level": "Xã" },
          { "Id": "04507", "Name": "Xã Đào Thịnh", "Level": "Xã" },
          { "Id": "04510", "Name": "Xã Việt Thành", "Level": "Xã" },
          { "Id": "04513", "Name": "Xã Hòa Cuông", "Level": "Xã" },
          { "Id": "04516", "Name": "Xã Minh Quán", "Level": "Xã" },
          { "Id": "04519", "Name": "Xã Quy Mông", "Level": "Xã" },
          { "Id": "04522", "Name": "Xã Cường Thịnh", "Level": "Xã" },
          { "Id": "04525", "Name": "Xã Kiên Thành", "Level": "Xã" },
          { "Id": "04528", "Name": "Xã Nga Quán", "Level": "Xã" },
          { "Id": "04531", "Name": "Xã Y Can", "Level": "Xã" },
          { "Id": "04537", "Name": "Xã Lương Thịnh", "Level": "Xã" },
          { "Id": "04561", "Name": "Xã Bảo Hưng", "Level": "Xã" },
          { "Id": "04564", "Name": "Xã Việt Cường", "Level": "Xã" },
          { "Id": "04567", "Name": "Xã Minh Quân", "Level": "Xã" },
          { "Id": "04570", "Name": "Xã Hồng Ca", "Level": "Xã" },
          { "Id": "04573", "Name": "Xã Hưng Thịnh", "Level": "Xã" },
          { "Id": "04576", "Name": "Xã Hưng Khánh", "Level": "Xã" },
          { "Id": "04579", "Name": "Xã Việt Hồng", "Level": "Xã" },
          { "Id": "04582", "Name": "Xã Vân Hội", "Level": "Xã" }
        ]
      },
      {
        "Id": "139",
        "Name": "Huyện Trạm Tấu",
        "Wards": [
          { "Id": "04585", "Name": "Thị trấn Trạm Tấu", "Level": "Thị trấn" },
          { "Id": "04588", "Name": "Xã Túc Đán", "Level": "Xã" },
          { "Id": "04591", "Name": "Xã Pá Lau", "Level": "Xã" },
          { "Id": "04594", "Name": "Xã Xà Hồ", "Level": "Xã" },
          { "Id": "04597", "Name": "Xã Phình Hồ", "Level": "Xã" },
          { "Id": "04600", "Name": "Xã Trạm Tấu", "Level": "Xã" },
          { "Id": "04603", "Name": "Xã Tà Si Láng", "Level": "Xã" },
          { "Id": "04606", "Name": "Xã Pá Hu", "Level": "Xã" },
          { "Id": "04609", "Name": "Xã Làng Nhì", "Level": "Xã" },
          { "Id": "04612", "Name": "Xã Bản Công", "Level": "Xã" },
          { "Id": "04615", "Name": "Xã Bản Mù", "Level": "Xã" },
          { "Id": "04618", "Name": "Xã Hát Lìu", "Level": "Xã" }
        ]
      },
      {
        "Id": "140",
        "Name": "Huyện Văn Chấn",
        "Wards": [
          {
            "Id": "04621",
            "Name": "Thị trấn NT Liên Sơn",
            "Level": "Thị trấn"
          },
          {
            "Id": "04627",
            "Name": "Thị trấn NT Trần Phú",
            "Level": "Thị trấn"
          },
          { "Id": "04630", "Name": "Xã Tú Lệ", "Level": "Xã" },
          { "Id": "04633", "Name": "Xã Nậm Búng", "Level": "Xã" },
          { "Id": "04636", "Name": "Xã Gia Hội", "Level": "Xã" },
          { "Id": "04639", "Name": "Xã Sùng Đô", "Level": "Xã" },
          { "Id": "04642", "Name": "Xã Nậm Mười", "Level": "Xã" },
          { "Id": "04645", "Name": "Xã An Lương", "Level": "Xã" },
          { "Id": "04648", "Name": "Xã Nậm Lành", "Level": "Xã" },
          { "Id": "04651", "Name": "Xã Sơn Lương", "Level": "Xã" },
          { "Id": "04654", "Name": "Xã Suối Quyền", "Level": "Xã" },
          { "Id": "04657", "Name": "Xã Suối Giàng", "Level": "Xã" },
          { "Id": "04666", "Name": "Xã Nghĩa Sơn", "Level": "Xã" },
          { "Id": "04669", "Name": "Xã Suối Bu", "Level": "Xã" },
          { "Id": "04672", "Name": "Thị trấn Sơn Thịnh", "Level": "Thị trấn" },
          { "Id": "04687", "Name": "Xã Đại Lịch", "Level": "Xã" },
          { "Id": "04690", "Name": "Xã Đồng Khê", "Level": "Xã" },
          { "Id": "04693", "Name": "Xã Cát Thịnh", "Level": "Xã" },
          { "Id": "04696", "Name": "Xã Tân Thịnh", "Level": "Xã" },
          { "Id": "04699", "Name": "Xã Chấn Thịnh", "Level": "Xã" },
          { "Id": "04702", "Name": "Xã Bình Thuận", "Level": "Xã" },
          { "Id": "04705", "Name": "Xã Thượng Bằng La", "Level": "Xã" },
          { "Id": "04708", "Name": "Xã Minh An", "Level": "Xã" },
          { "Id": "04711", "Name": "Xã Nghĩa Tâm", "Level": "Xã" }
        ]
      },
      {
        "Id": "141",
        "Name": "Huyện Yên Bình",
        "Wards": [
          { "Id": "04714", "Name": "Thị trấn Yên Bình", "Level": "Thị trấn" },
          { "Id": "04717", "Name": "Thị trấn Thác Bà", "Level": "Thị trấn" },
          { "Id": "04720", "Name": "Xã Xuân Long", "Level": "Xã" },
          { "Id": "04726", "Name": "Xã Cảm Nhân", "Level": "Xã" },
          { "Id": "04729", "Name": "Xã Ngọc Chấn", "Level": "Xã" },
          { "Id": "04732", "Name": "Xã Tân Nguyên", "Level": "Xã" },
          { "Id": "04735", "Name": "Xã Phúc Ninh", "Level": "Xã" },
          { "Id": "04738", "Name": "Xã Bảo Ái", "Level": "Xã" },
          { "Id": "04741", "Name": "Xã Mỹ Gia", "Level": "Xã" },
          { "Id": "04744", "Name": "Xã Xuân Lai", "Level": "Xã" },
          { "Id": "04747", "Name": "Xã Mông Sơn", "Level": "Xã" },
          { "Id": "04750", "Name": "Xã Cảm Ân", "Level": "Xã" },
          { "Id": "04753", "Name": "Xã Yên Thành", "Level": "Xã" },
          { "Id": "04756", "Name": "Xã Tân Hương", "Level": "Xã" },
          { "Id": "04759", "Name": "Xã Phúc An", "Level": "Xã" },
          { "Id": "04762", "Name": "Xã Bạch Hà", "Level": "Xã" },
          { "Id": "04765", "Name": "Xã Vũ Linh", "Level": "Xã" },
          { "Id": "04768", "Name": "Xã Đại Đồng", "Level": "Xã" },
          { "Id": "04771", "Name": "Xã Vĩnh Kiên", "Level": "Xã" },
          { "Id": "04774", "Name": "Xã Yên Bình", "Level": "Xã" },
          { "Id": "04777", "Name": "Xã Thịnh Hưng", "Level": "Xã" },
          { "Id": "04780", "Name": "Xã Hán Đà", "Level": "Xã" },
          { "Id": "04783", "Name": "Xã Phú Thịnh", "Level": "Xã" },
          { "Id": "04786", "Name": "Xã Đại Minh", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "17",
    "Name": "Tỉnh Hoà Bình",
    "Districts": [
      {
        "Id": "148",
        "Name": "Thành phố Hòa Bình",
        "Wards": [
          { "Id": "04789", "Name": "Phường Thái Bình", "Level": "Phường" },
          { "Id": "04792", "Name": "Phường Tân Hòa", "Level": "Phường" },
          { "Id": "04795", "Name": "Phường Thịnh Lang", "Level": "Phường" },
          { "Id": "04798", "Name": "Phường Hữu Nghị", "Level": "Phường" },
          { "Id": "04801", "Name": "Phường Tân Thịnh", "Level": "Phường" },
          { "Id": "04804", "Name": "Phường Đồng Tiến", "Level": "Phường" },
          { "Id": "04807", "Name": "Phường Phương Lâm", "Level": "Phường" },
          { "Id": "04813", "Name": "Xã Yên Mông", "Level": "Xã" },
          { "Id": "04816", "Name": "Xã Sủ Ngòi", "Level": "Xã" },
          { "Id": "04819", "Name": "Phường Dân Chủ", "Level": "Phường" },
          { "Id": "04825", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "04828", "Name": "Phường Thống Nhất", "Level": "Phường" },
          { "Id": "04894", "Name": "Phường Kỳ Sơn", "Level": "Phường" },
          { "Id": "04897", "Name": "Xã Thịnh Minh", "Level": "Xã" },
          { "Id": "04903", "Name": "Xã Hợp Thành", "Level": "Xã" },
          { "Id": "04906", "Name": "Xã Quang Tiến", "Level": "Xã" },
          { "Id": "04912", "Name": "Xã Mông Hóa", "Level": "Xã" },
          { "Id": "04918", "Name": "Xã Trung Minh", "Level": "Xã" },
          { "Id": "04921", "Name": "Xã Độc Lập", "Level": "Xã" }
        ]
      },
      {
        "Id": "150",
        "Name": "Huyện Đà Bắc",
        "Wards": [
          { "Id": "04831", "Name": "Thị trấn Đà Bắc", "Level": "Thị trấn" },
          { "Id": "04834", "Name": "Xã Nánh Nghê", "Level": "Xã" },
          { "Id": "04840", "Name": "Xã Giáp Đắt", "Level": "Xã" },
          { "Id": "04846", "Name": "Xã Mường Chiềng", "Level": "Xã" },
          { "Id": "04849", "Name": "Xã Tân Pheo", "Level": "Xã" },
          { "Id": "04852", "Name": "Xã Đồng Chum", "Level": "Xã" },
          { "Id": "04855", "Name": "Xã Tân Minh", "Level": "Xã" },
          { "Id": "04858", "Name": "Xã Đoàn Kết", "Level": "Xã" },
          { "Id": "04861", "Name": "Xã Đồng Ruộng", "Level": "Xã" },
          { "Id": "04867", "Name": "Xã Tú Lý", "Level": "Xã" },
          { "Id": "04870", "Name": "Xã Trung Thành", "Level": "Xã" },
          { "Id": "04873", "Name": "Xã Yên Hòa", "Level": "Xã" },
          { "Id": "04876", "Name": "Xã Cao Sơn", "Level": "Xã" },
          { "Id": "04879", "Name": "Xã Toàn Sơn", "Level": "Xã" },
          { "Id": "04885", "Name": "Xã Hiền Lương", "Level": "Xã" },
          { "Id": "04888", "Name": "Xã Tiền Phong", "Level": "Xã" },
          { "Id": "04891", "Name": "Xã Vầy Nưa", "Level": "Xã" }
        ]
      },
      {
        "Id": "152",
        "Name": "Huyện Lương Sơn",
        "Wards": [
          { "Id": "04924", "Name": "Thị trấn Lương Sơn", "Level": "Thị trấn" },
          { "Id": "04942", "Name": "Xã Lâm Sơn", "Level": "Xã" },
          { "Id": "04945", "Name": "Xã Hòa Sơn", "Level": "Xã" },
          { "Id": "04951", "Name": "Xã Tân Vinh", "Level": "Xã" },
          { "Id": "04954", "Name": "Xã Nhuận Trạch", "Level": "Xã" },
          { "Id": "04957", "Name": "Xã Cao Sơn", "Level": "Xã" },
          { "Id": "04960", "Name": "Xã Cư Yên", "Level": "Xã" },
          { "Id": "04969", "Name": "Xã Liên Sơn", "Level": "Xã" },
          { "Id": "05008", "Name": "Xã Cao Dương", "Level": "Xã" },
          { "Id": "05041", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "05047", "Name": "Xã Thanh Cao", "Level": "Xã" }
        ]
      },
      {
        "Id": "153",
        "Name": "Huyện Kim Bôi",
        "Wards": [
          { "Id": "04978", "Name": "Thị trấn Bo", "Level": "Thị trấn" },
          { "Id": "04984", "Name": "Xã Đú Sáng", "Level": "Xã" },
          { "Id": "04987", "Name": "Xã Hùng Sơn", "Level": "Xã" },
          { "Id": "04990", "Name": "Xã Bình Sơn", "Level": "Xã" },
          { "Id": "04999", "Name": "Xã Tú Sơn", "Level": "Xã" },
          { "Id": "05005", "Name": "Xã Vĩnh Tiến", "Level": "Xã" },
          { "Id": "05014", "Name": "Xã Đông Bắc", "Level": "Xã" },
          { "Id": "05017", "Name": "Xã Xuân Thủy", "Level": "Xã" },
          { "Id": "05026", "Name": "Xã Vĩnh Đồng", "Level": "Xã" },
          { "Id": "05035", "Name": "Xã Kim Lập", "Level": "Xã" },
          { "Id": "05038", "Name": "Xã Hợp Tiến", "Level": "Xã" },
          { "Id": "05065", "Name": "Xã Kim Bôi", "Level": "Xã" },
          { "Id": "05068", "Name": "Xã Nam Thượng", "Level": "Xã" },
          { "Id": "05077", "Name": "Xã Cuối Hạ", "Level": "Xã" },
          { "Id": "05080", "Name": "Xã Sào Báy", "Level": "Xã" },
          { "Id": "05083", "Name": "Xã Mi Hòa", "Level": "Xã" },
          { "Id": "05086", "Name": "Xã Nuông Dăm", "Level": "Xã" }
        ]
      },
      {
        "Id": "154",
        "Name": "Huyện Cao Phong",
        "Wards": [
          { "Id": "05089", "Name": "Thị trấn Cao Phong", "Level": "Thị trấn" },
          { "Id": "05092", "Name": "Xã Bình Thanh", "Level": "Xã" },
          { "Id": "05095", "Name": "Xã Thung Nai", "Level": "Xã" },
          { "Id": "05098", "Name": "Xã Bắc Phong", "Level": "Xã" },
          { "Id": "05101", "Name": "Xã Thu Phong", "Level": "Xã" },
          { "Id": "05104", "Name": "Xã Hợp Phong", "Level": "Xã" },
          { "Id": "05110", "Name": "Xã Tây Phong", "Level": "Xã" },
          { "Id": "05116", "Name": "Xã Dũng Phong", "Level": "Xã" },
          { "Id": "05119", "Name": "Xã Nam Phong", "Level": "Xã" },
          { "Id": "05125", "Name": "Xã Thạch Yên", "Level": "Xã" }
        ]
      },
      {
        "Id": "155",
        "Name": "Huyện Tân Lạc",
        "Wards": [
          { "Id": "05128", "Name": "Thị trấn Mãn Đức", "Level": "Thị trấn" },
          { "Id": "05134", "Name": "Xã Suối Hoa", "Level": "Xã" },
          { "Id": "05137", "Name": "Xã Phú Vinh", "Level": "Xã" },
          { "Id": "05140", "Name": "Xã Phú Cường", "Level": "Xã" },
          { "Id": "05143", "Name": "Xã Mỹ Hòa", "Level": "Xã" },
          { "Id": "05152", "Name": "Xã Quyết Chiến", "Level": "Xã" },
          { "Id": "05158", "Name": "Xã Phong Phú", "Level": "Xã" },
          { "Id": "05164", "Name": "Xã Tử Nê", "Level": "Xã" },
          { "Id": "05167", "Name": "Xã Thanh Hối", "Level": "Xã" },
          { "Id": "05170", "Name": "Xã Ngọc Mỹ", "Level": "Xã" },
          { "Id": "05173", "Name": "Xã Đông Lai", "Level": "Xã" },
          { "Id": "05176", "Name": "Xã Vân Sơn", "Level": "Xã" },
          { "Id": "05182", "Name": "Xã Nhân Mỹ", "Level": "Xã" },
          { "Id": "05191", "Name": "Xã Lỗ Sơn", "Level": "Xã" },
          { "Id": "05194", "Name": "Xã Ngổ Luông", "Level": "Xã" },
          { "Id": "05197", "Name": "Xã Gia Mô", "Level": "Xã" }
        ]
      },
      {
        "Id": "156",
        "Name": "Huyện Mai Châu",
        "Wards": [
          { "Id": "04882", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "05200", "Name": "Thị trấn Mai Châu", "Level": "Thị trấn" },
          { "Id": "05206", "Name": "Xã Sơn Thủy", "Level": "Xã" },
          { "Id": "05209", "Name": "Xã Pà Cò", "Level": "Xã" },
          { "Id": "05212", "Name": "Xã Hang Kia", "Level": "Xã" },
          { "Id": "05221", "Name": "Xã Đồng Tân", "Level": "Xã" },
          { "Id": "05224", "Name": "Xã Cun Pheo", "Level": "Xã" },
          { "Id": "05227", "Name": "Xã Bao La", "Level": "Xã" },
          { "Id": "05233", "Name": "Xã Tòng Đậu", "Level": "Xã" },
          { "Id": "05242", "Name": "Xã Nà Phòn", "Level": "Xã" },
          { "Id": "05245", "Name": "Xã Săm Khóe", "Level": "Xã" },
          { "Id": "05248", "Name": "Xã Chiềng Châu", "Level": "Xã" },
          { "Id": "05251", "Name": "Xã Mai Hạ", "Level": "Xã" },
          { "Id": "05254", "Name": "Xã Thành Sơn", "Level": "Xã" },
          { "Id": "05257", "Name": "Xã Mai Hịch", "Level": "Xã" },
          { "Id": "05263", "Name": "Xã Vạn Mai", "Level": "Xã" }
        ]
      },
      {
        "Id": "157",
        "Name": "Huyện Lạc Sơn",
        "Wards": [
          { "Id": "05266", "Name": "Thị trấn Vụ Bản", "Level": "Thị trấn" },
          { "Id": "05269", "Name": "Xã Quý Hòa", "Level": "Xã" },
          { "Id": "05272", "Name": "Xã Miền Đồi", "Level": "Xã" },
          { "Id": "05275", "Name": "Xã Mỹ Thành", "Level": "Xã" },
          { "Id": "05278", "Name": "Xã Tuân Đạo", "Level": "Xã" },
          { "Id": "05281", "Name": "Xã Văn Nghĩa", "Level": "Xã" },
          { "Id": "05284", "Name": "Xã Văn Sơn", "Level": "Xã" },
          { "Id": "05287", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "05290", "Name": "Xã Nhân Nghĩa", "Level": "Xã" },
          { "Id": "05293", "Name": "Xã Thượng Cốc", "Level": "Xã" },
          { "Id": "05299", "Name": "Xã Quyết Thắng", "Level": "Xã" },
          { "Id": "05302", "Name": "Xã Xuất Hóa", "Level": "Xã" },
          { "Id": "05305", "Name": "Xã Yên Phú", "Level": "Xã" },
          { "Id": "05308", "Name": "Xã Bình Hẻm", "Level": "Xã" },
          { "Id": "05320", "Name": "Xã Định Cư", "Level": "Xã" },
          { "Id": "05323", "Name": "Xã Chí Đạo", "Level": "Xã" },
          { "Id": "05329", "Name": "Xã Ngọc Sơn", "Level": "Xã" },
          { "Id": "05332", "Name": "Xã Hương Nhượng", "Level": "Xã" },
          { "Id": "05335", "Name": "Xã Vũ Bình", "Level": "Xã" },
          { "Id": "05338", "Name": "Xã Tự Do", "Level": "Xã" },
          { "Id": "05341", "Name": "Xã Yên Nghiệp", "Level": "Xã" },
          { "Id": "05344", "Name": "Xã Tân Mỹ", "Level": "Xã" },
          { "Id": "05347", "Name": "Xã Ân Nghĩa", "Level": "Xã" },
          { "Id": "05350", "Name": "Xã Ngọc Lâu", "Level": "Xã" }
        ]
      },
      {
        "Id": "158",
        "Name": "Huyện Yên Thủy",
        "Wards": [
          { "Id": "05353", "Name": "Thị trấn Hàng Trạm", "Level": "Thị trấn" },
          { "Id": "05356", "Name": "Xã Lạc Sỹ", "Level": "Xã" },
          { "Id": "05362", "Name": "Xã Lạc Lương", "Level": "Xã" },
          { "Id": "05365", "Name": "Xã Bảo Hiệu", "Level": "Xã" },
          { "Id": "05368", "Name": "Xã Đa Phúc", "Level": "Xã" },
          { "Id": "05371", "Name": "Xã Hữu Lợi", "Level": "Xã" },
          { "Id": "05374", "Name": "Xã Lạc Thịnh", "Level": "Xã" },
          { "Id": "05380", "Name": "Xã Đoàn Kết", "Level": "Xã" },
          { "Id": "05383", "Name": "Xã Phú Lai", "Level": "Xã" },
          { "Id": "05386", "Name": "Xã Yên Trị", "Level": "Xã" },
          { "Id": "05389", "Name": "Xã Ngọc Lương", "Level": "Xã" }
        ]
      },
      {
        "Id": "159",
        "Name": "Huyện Lạc Thủy",
        "Wards": [
          {
            "Id": "04981",
            "Name": "Thị trấn Ba Hàng Đồi",
            "Level": "Thị trấn"
          },
          { "Id": "05392", "Name": "Thị trấn Chi Nê", "Level": "Thị trấn" },
          { "Id": "05395", "Name": "Xã Phú Nghĩa", "Level": "Xã" },
          { "Id": "05398", "Name": "Xã Phú Thành", "Level": "Xã" },
          { "Id": "05404", "Name": "Xã Hưng Thi", "Level": "Xã" },
          { "Id": "05413", "Name": "Xã Khoan Dụ", "Level": "Xã" },
          { "Id": "05419", "Name": "Xã Đồng Tâm", "Level": "Xã" },
          { "Id": "05422", "Name": "Xã Yên Bồng", "Level": "Xã" },
          { "Id": "05425", "Name": "Xã Thống Nhất", "Level": "Xã" },
          { "Id": "05428", "Name": "Xã An Bình", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "19",
    "Name": "Tỉnh Thái Nguyên",
    "Districts": [
      {
        "Id": "164",
        "Name": "Thành phố Thái Nguyên",
        "Wards": [
          { "Id": "05431", "Name": "Phường Quán Triều", "Level": "Phường" },
          { "Id": "05434", "Name": "Phường Quang Vinh", "Level": "Phường" },
          { "Id": "05437", "Name": "Phường Túc Duyên", "Level": "Phường" },
          { "Id": "05440", "Name": "Phường Hoàng Văn Thụ", "Level": "Phường" },
          { "Id": "05443", "Name": "Phường Trưng Vương", "Level": "Phường" },
          { "Id": "05446", "Name": "Phường Quang Trung", "Level": "Phường" },
          {
            "Id": "05449",
            "Name": "Phường Phan Đình Phùng",
            "Level": "Phường"
          },
          { "Id": "05452", "Name": "Phường Tân Thịnh", "Level": "Phường" },
          { "Id": "05455", "Name": "Phường Thịnh Đán", "Level": "Phường" },
          { "Id": "05458", "Name": "Phường Đồng Quang", "Level": "Phường" },
          { "Id": "05461", "Name": "Phường Gia Sàng", "Level": "Phường" },
          { "Id": "05464", "Name": "Phường Tân Lập", "Level": "Phường" },
          { "Id": "05467", "Name": "Phường Cam Giá", "Level": "Phường" },
          { "Id": "05470", "Name": "Phường Phú Xá", "Level": "Phường" },
          { "Id": "05473", "Name": "Phường Hương Sơn", "Level": "Phường" },
          { "Id": "05476", "Name": "Phường Trung Thành", "Level": "Phường" },
          { "Id": "05479", "Name": "Phường Tân Thành", "Level": "Phường" },
          { "Id": "05482", "Name": "Phường Tân Long", "Level": "Phường" },
          { "Id": "05485", "Name": "Xã Phúc Hà", "Level": "Xã" },
          { "Id": "05488", "Name": "Xã Phúc Xuân", "Level": "Xã" },
          { "Id": "05491", "Name": "Xã Quyết Thắng", "Level": "Xã" },
          { "Id": "05494", "Name": "Xã Phúc Trìu", "Level": "Xã" },
          { "Id": "05497", "Name": "Xã Thịnh Đức", "Level": "Xã" },
          { "Id": "05500", "Name": "Phường Tích Lương", "Level": "Phường" },
          { "Id": "05503", "Name": "Xã Tân Cương", "Level": "Xã" },
          { "Id": "05653", "Name": "Xã Sơn Cẩm", "Level": "Xã" },
          { "Id": "05659", "Name": "Phường Chùa Hang", "Level": "Phường" },
          { "Id": "05695", "Name": "Xã Cao Ngạn", "Level": "Xã" },
          { "Id": "05701", "Name": "Xã Linh Sơn", "Level": "Xã" },
          { "Id": "05710", "Name": "Phường Đồng Bẩm", "Level": "Phường" },
          { "Id": "05713", "Name": "Xã Huống Thượng", "Level": "Xã" },
          { "Id": "05914", "Name": "Xã Đồng Liên", "Level": "Xã" }
        ]
      },
      {
        "Id": "165",
        "Name": "Thành phố Sông Công",
        "Wards": [
          { "Id": "05506", "Name": "Phường Lương Sơn", "Level": "Phường" },
          { "Id": "05509", "Name": "Phường Châu Sơn", "Level": "Phường" },
          { "Id": "05512", "Name": "Phường Mỏ Chè", "Level": "Phường" },
          { "Id": "05515", "Name": "Phường Cải Đan", "Level": "Phường" },
          { "Id": "05518", "Name": "Phường Thắng Lợi", "Level": "Phường" },
          { "Id": "05521", "Name": "Phường Phố Cò", "Level": "Phường" },
          { "Id": "05527", "Name": "Xã Tân Quang", "Level": "Xã" },
          { "Id": "05528", "Name": "Phường Bách Quang", "Level": "Phường" },
          { "Id": "05530", "Name": "Xã Bình Sơn", "Level": "Xã" },
          { "Id": "05533", "Name": "Xã Bá Xuyên", "Level": "Xã" }
        ]
      },
      {
        "Id": "167",
        "Name": "Huyện Định Hóa",
        "Wards": [
          { "Id": "05536", "Name": "Thị trấn Chợ Chu", "Level": "Thị trấn" },
          { "Id": "05539", "Name": "Xã Linh Thông", "Level": "Xã" },
          { "Id": "05542", "Name": "Xã Lam Vỹ", "Level": "Xã" },
          { "Id": "05545", "Name": "Xã Quy Kỳ", "Level": "Xã" },
          { "Id": "05548", "Name": "Xã Tân Thịnh", "Level": "Xã" },
          { "Id": "05551", "Name": "Xã Kim Phượng", "Level": "Xã" },
          { "Id": "05554", "Name": "Xã Bảo Linh", "Level": "Xã" },
          { "Id": "05560", "Name": "Xã Phúc Chu", "Level": "Xã" },
          { "Id": "05563", "Name": "Xã Tân Dương", "Level": "Xã" },
          { "Id": "05566", "Name": "Xã Phượng Tiến", "Level": "Xã" },
          { "Id": "05569", "Name": "Xã Bảo Cường", "Level": "Xã" },
          { "Id": "05572", "Name": "Xã Đồng Thịnh", "Level": "Xã" },
          { "Id": "05575", "Name": "Xã Định Biên", "Level": "Xã" },
          { "Id": "05578", "Name": "Xã Thanh Định", "Level": "Xã" },
          { "Id": "05581", "Name": "Xã Trung Hội", "Level": "Xã" },
          { "Id": "05584", "Name": "Xã Trung Lương", "Level": "Xã" },
          { "Id": "05587", "Name": "Xã Bình Yên", "Level": "Xã" },
          { "Id": "05590", "Name": "Xã Điềm Mặc", "Level": "Xã" },
          { "Id": "05593", "Name": "Xã Phú Tiến", "Level": "Xã" },
          { "Id": "05596", "Name": "Xã Bộc Nhiêu", "Level": "Xã" },
          { "Id": "05599", "Name": "Xã Sơn Phú", "Level": "Xã" },
          { "Id": "05602", "Name": "Xã Phú Đình", "Level": "Xã" },
          { "Id": "05605", "Name": "Xã Bình Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "168",
        "Name": "Huyện Phú Lương",
        "Wards": [
          { "Id": "05608", "Name": "Thị trấn Giang Tiên", "Level": "Thị trấn" },
          { "Id": "05611", "Name": "Thị trấn Đu", "Level": "Thị trấn" },
          { "Id": "05614", "Name": "Xã Yên Ninh", "Level": "Xã" },
          { "Id": "05617", "Name": "Xã Yên Trạch", "Level": "Xã" },
          { "Id": "05620", "Name": "Xã Yên Đổ", "Level": "Xã" },
          { "Id": "05623", "Name": "Xã Yên Lạc", "Level": "Xã" },
          { "Id": "05626", "Name": "Xã Ôn Lương", "Level": "Xã" },
          { "Id": "05629", "Name": "Xã Động Đạt", "Level": "Xã" },
          { "Id": "05632", "Name": "Xã Phủ Lý", "Level": "Xã" },
          { "Id": "05635", "Name": "Xã Phú Đô", "Level": "Xã" },
          { "Id": "05638", "Name": "Xã Hợp Thành", "Level": "Xã" },
          { "Id": "05641", "Name": "Xã Tức Tranh", "Level": "Xã" },
          { "Id": "05644", "Name": "Xã Phấn Mễ", "Level": "Xã" },
          { "Id": "05647", "Name": "Xã Vô Tranh", "Level": "Xã" },
          { "Id": "05650", "Name": "Xã Cổ Lũng", "Level": "Xã" }
        ]
      },
      {
        "Id": "169",
        "Name": "Huyện Đồng Hỷ",
        "Wards": [
          { "Id": "05656", "Name": "Thị trấn Sông Cầu", "Level": "Thị trấn" },
          { "Id": "05662", "Name": "Thị trấn Trại Cau", "Level": "Thị trấn" },
          { "Id": "05665", "Name": "Xã Văn Lăng", "Level": "Xã" },
          { "Id": "05668", "Name": "Xã Tân Long", "Level": "Xã" },
          { "Id": "05671", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "05674", "Name": "Xã Quang Sơn", "Level": "Xã" },
          { "Id": "05677", "Name": "Xã Minh Lập", "Level": "Xã" },
          { "Id": "05680", "Name": "Xã Văn Hán", "Level": "Xã" },
          { "Id": "05683", "Name": "Xã Hóa Trung", "Level": "Xã" },
          { "Id": "05686", "Name": "Xã Khe Mo", "Level": "Xã" },
          { "Id": "05689", "Name": "Xã Cây Thị", "Level": "Xã" },
          { "Id": "05692", "Name": "Xã Hóa Thượng", "Level": "Xã" },
          { "Id": "05698", "Name": "Xã Hợp Tiến", "Level": "Xã" },
          { "Id": "05704", "Name": "Xã Tân Lợi", "Level": "Xã" },
          { "Id": "05707", "Name": "Xã Nam Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "170",
        "Name": "Huyện Võ Nhai",
        "Wards": [
          { "Id": "05716", "Name": "Thị trấn Đình Cả", "Level": "Thị trấn" },
          { "Id": "05719", "Name": "Xã Sảng Mộc", "Level": "Xã" },
          { "Id": "05722", "Name": "Xã Nghinh Tường", "Level": "Xã" },
          { "Id": "05725", "Name": "Xã Thần Xa", "Level": "Xã" },
          { "Id": "05728", "Name": "Xã Vũ Chấn", "Level": "Xã" },
          { "Id": "05731", "Name": "Xã Thượng Nung", "Level": "Xã" },
          { "Id": "05734", "Name": "Xã Phú Thượng", "Level": "Xã" },
          { "Id": "05737", "Name": "Xã Cúc Đường", "Level": "Xã" },
          { "Id": "05740", "Name": "Xã La Hiên", "Level": "Xã" },
          { "Id": "05743", "Name": "Xã Lâu Thượng", "Level": "Xã" },
          { "Id": "05746", "Name": "Xã Tràng Xá", "Level": "Xã" },
          { "Id": "05749", "Name": "Xã Phương Giao", "Level": "Xã" },
          { "Id": "05752", "Name": "Xã Liên Minh", "Level": "Xã" },
          { "Id": "05755", "Name": "Xã Dân Tiến", "Level": "Xã" },
          { "Id": "05758", "Name": "Xã Bình Long", "Level": "Xã" }
        ]
      },
      {
        "Id": "171",
        "Name": "Huyện Đại Từ",
        "Wards": [
          { "Id": "05761", "Name": "Thị trấn Hùng Sơn", "Level": "Thị trấn" },
          { "Id": "05764", "Name": "Thị trấn Quân Chu", "Level": "Thị trấn" },
          { "Id": "05767", "Name": "Xã Phúc Lương", "Level": "Xã" },
          { "Id": "05770", "Name": "Xã Minh Tiến", "Level": "Xã" },
          { "Id": "05773", "Name": "Xã Yên Lãng", "Level": "Xã" },
          { "Id": "05776", "Name": "Xã Đức Lương", "Level": "Xã" },
          { "Id": "05779", "Name": "Xã Phú Cường", "Level": "Xã" },
          { "Id": "05782", "Name": "Xã Na Mao", "Level": "Xã" },
          { "Id": "05785", "Name": "Xã Phú Lạc", "Level": "Xã" },
          { "Id": "05788", "Name": "Xã Tân Linh", "Level": "Xã" },
          { "Id": "05791", "Name": "Xã Phú Thịnh", "Level": "Xã" },
          { "Id": "05794", "Name": "Xã Phục Linh", "Level": "Xã" },
          { "Id": "05797", "Name": "Xã Phú Xuyên", "Level": "Xã" },
          { "Id": "05800", "Name": "Xã Bản Ngoại", "Level": "Xã" },
          { "Id": "05803", "Name": "Xã Tiên Hội", "Level": "Xã" },
          { "Id": "05809", "Name": "Xã Cù Vân", "Level": "Xã" },
          { "Id": "05812", "Name": "Xã Hà Thượng", "Level": "Xã" },
          { "Id": "05815", "Name": "Xã La Bằng", "Level": "Xã" },
          { "Id": "05818", "Name": "Xã Hoàng Nông", "Level": "Xã" },
          { "Id": "05821", "Name": "Xã Khôi Kỳ", "Level": "Xã" },
          { "Id": "05824", "Name": "Xã An Khánh", "Level": "Xã" },
          { "Id": "05827", "Name": "Xã Tân Thái", "Level": "Xã" },
          { "Id": "05830", "Name": "Xã Bình Thuận", "Level": "Xã" },
          { "Id": "05833", "Name": "Xã Lục Ba", "Level": "Xã" },
          { "Id": "05836", "Name": "Xã Mỹ Yên", "Level": "Xã" },
          { "Id": "05839", "Name": "Xã Vạn Thọ", "Level": "Xã" },
          { "Id": "05842", "Name": "Xã Văn Yên", "Level": "Xã" },
          { "Id": "05845", "Name": "Xã Ký Phú", "Level": "Xã" },
          { "Id": "05848", "Name": "Xã Cát Nê", "Level": "Xã" },
          { "Id": "05851", "Name": "Xã Quân Chu", "Level": "Xã" }
        ]
      },
      {
        "Id": "172",
        "Name": "Thị xã Phổ Yên",
        "Wards": [
          { "Id": "05854", "Name": "Phường Bãi Bông", "Level": "Phường" },
          { "Id": "05857", "Name": "Phường Bắc Sơn", "Level": "Phường" },
          { "Id": "05860", "Name": "Phường Ba Hàng", "Level": "Phường" },
          { "Id": "05863", "Name": "Xã Phúc Tân", "Level": "Xã" },
          { "Id": "05866", "Name": "Xã Phúc Thuận", "Level": "Xã" },
          { "Id": "05869", "Name": "Xã Hồng Tiến", "Level": "Xã" },
          { "Id": "05872", "Name": "Xã Minh Đức", "Level": "Xã" },
          { "Id": "05875", "Name": "Xã Đắc Sơn", "Level": "Xã" },
          { "Id": "05878", "Name": "Phường Đồng Tiến", "Level": "Phường" },
          { "Id": "05881", "Name": "Xã Thành Công", "Level": "Xã" },
          { "Id": "05884", "Name": "Xã Tiên Phong", "Level": "Xã" },
          { "Id": "05887", "Name": "Xã Vạn Phái", "Level": "Xã" },
          { "Id": "05890", "Name": "Xã Nam Tiến", "Level": "Xã" },
          { "Id": "05893", "Name": "Xã Tân Hương", "Level": "Xã" },
          { "Id": "05896", "Name": "Xã Đông Cao", "Level": "Xã" },
          { "Id": "05899", "Name": "Xã Trung Thành", "Level": "Xã" },
          { "Id": "05902", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "05905", "Name": "Xã Thuận Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "173",
        "Name": "Huyện Phú Bình",
        "Wards": [
          { "Id": "05908", "Name": "Thị trấn Hương Sơn", "Level": "Thị trấn" },
          { "Id": "05911", "Name": "Xã Bàn Đạt", "Level": "Xã" },
          { "Id": "05917", "Name": "Xã Tân Khánh", "Level": "Xã" },
          { "Id": "05920", "Name": "Xã Tân Kim", "Level": "Xã" },
          { "Id": "05923", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "05926", "Name": "Xã Đào Xá", "Level": "Xã" },
          { "Id": "05929", "Name": "Xã Bảo Lý", "Level": "Xã" },
          { "Id": "05932", "Name": "Xã Thượng Đình", "Level": "Xã" },
          { "Id": "05935", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "05938", "Name": "Xã Nhã Lộng", "Level": "Xã" },
          { "Id": "05941", "Name": "Xã Điềm Thụy", "Level": "Xã" },
          { "Id": "05944", "Name": "Xã Xuân Phương", "Level": "Xã" },
          { "Id": "05947", "Name": "Xã Tân Đức", "Level": "Xã" },
          { "Id": "05950", "Name": "Xã Úc Kỳ", "Level": "Xã" },
          { "Id": "05953", "Name": "Xã Lương Phú", "Level": "Xã" },
          { "Id": "05956", "Name": "Xã Nga My", "Level": "Xã" },
          { "Id": "05959", "Name": "Xã Kha Sơn", "Level": "Xã" },
          { "Id": "05962", "Name": "Xã Thanh Ninh", "Level": "Xã" },
          { "Id": "05965", "Name": "Xã Dương Thành", "Level": "Xã" },
          { "Id": "05968", "Name": "Xã Hà Châu", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "20",
    "Name": "Tỉnh Lạng Sơn",
    "Districts": [
      {
        "Id": "178",
        "Name": "Thành phố Lạng Sơn",
        "Wards": [
          { "Id": "05971", "Name": "Phường Hoàng Văn Thụ", "Level": "Phường" },
          { "Id": "05974", "Name": "Phường Tam Thanh", "Level": "Phường" },
          { "Id": "05977", "Name": "Phường Vĩnh Trại", "Level": "Phường" },
          { "Id": "05980", "Name": "Phường Đông Kinh", "Level": "Phường" },
          { "Id": "05983", "Name": "Phường Chi Lăng", "Level": "Phường" },
          { "Id": "05986", "Name": "Xã Hoàng Đồng", "Level": "Xã" },
          { "Id": "05989", "Name": "Xã Quảng Lạc", "Level": "Xã" },
          { "Id": "05992", "Name": "Xã Mai Pha", "Level": "Xã" }
        ]
      },
      {
        "Id": "180",
        "Name": "Huyện Tràng Định",
        "Wards": [
          { "Id": "05995", "Name": "Thị trấn Thất Khê", "Level": "Thị trấn" },
          { "Id": "05998", "Name": "Xã Khánh Long", "Level": "Xã" },
          { "Id": "06001", "Name": "Xã Đoàn Kết", "Level": "Xã" },
          { "Id": "06004", "Name": "Xã Quốc Khánh", "Level": "Xã" },
          { "Id": "06007", "Name": "Xã Vĩnh Tiến", "Level": "Xã" },
          { "Id": "06010", "Name": "Xã Cao Minh", "Level": "Xã" },
          { "Id": "06013", "Name": "Xã Chí Minh", "Level": "Xã" },
          { "Id": "06016", "Name": "Xã Tri Phương", "Level": "Xã" },
          { "Id": "06019", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "06022", "Name": "Xã Tân Yên", "Level": "Xã" },
          { "Id": "06025", "Name": "Xã Đội Cấn", "Level": "Xã" },
          { "Id": "06028", "Name": "Xã Tân Minh", "Level": "Xã" },
          { "Id": "06031", "Name": "Xã Kim Đồng", "Level": "Xã" },
          { "Id": "06034", "Name": "Xã Chi Lăng", "Level": "Xã" },
          { "Id": "06037", "Name": "Xã Trung Thành", "Level": "Xã" },
          { "Id": "06040", "Name": "Xã Đại Đồng", "Level": "Xã" },
          { "Id": "06043", "Name": "Xã Đào Viên", "Level": "Xã" },
          { "Id": "06046", "Name": "Xã Đề Thám", "Level": "Xã" },
          { "Id": "06049", "Name": "Xã Kháng Chiến", "Level": "Xã" },
          { "Id": "06055", "Name": "Xã Hùng Sơn", "Level": "Xã" },
          { "Id": "06058", "Name": "Xã Quốc Việt", "Level": "Xã" },
          { "Id": "06061", "Name": "Xã Hùng Việt", "Level": "Xã" }
        ]
      },
      {
        "Id": "181",
        "Name": "Huyện Bình Gia",
        "Wards": [
          { "Id": "06067", "Name": "Xã Hưng Đạo", "Level": "Xã" },
          { "Id": "06070", "Name": "Xã Vĩnh Yên", "Level": "Xã" },
          { "Id": "06073", "Name": "Xã Hoa Thám", "Level": "Xã" },
          { "Id": "06076", "Name": "Xã Quý Hòa", "Level": "Xã" },
          { "Id": "06079", "Name": "Xã Hồng Phong", "Level": "Xã" },
          { "Id": "06082", "Name": "Xã Yên Lỗ", "Level": "Xã" },
          { "Id": "06085", "Name": "Xã Thiện Hòa", "Level": "Xã" },
          { "Id": "06088", "Name": "Xã Quang Trung", "Level": "Xã" },
          { "Id": "06091", "Name": "Xã Thiện Thuật", "Level": "Xã" },
          { "Id": "06094", "Name": "Xã Minh Khai", "Level": "Xã" },
          { "Id": "06097", "Name": "Xã Thiện Long", "Level": "Xã" },
          { "Id": "06100", "Name": "Xã Hoàng Văn Thụ", "Level": "Xã" },
          { "Id": "06103", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "06106", "Name": "Xã Mông Ân", "Level": "Xã" },
          { "Id": "06109", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "06112", "Name": "Thị trấn Bình Gia", "Level": "Thị trấn" },
          { "Id": "06115", "Name": "Xã Hồng Thái", "Level": "Xã" },
          { "Id": "06118", "Name": "Xã Bình La", "Level": "Xã" },
          { "Id": "06121", "Name": "Xã Tân Văn", "Level": "Xã" }
        ]
      },
      {
        "Id": "182",
        "Name": "Huyện Văn Lãng",
        "Wards": [
          { "Id": "06124", "Name": "Thị trấn Na Sầm", "Level": "Thị trấn" },
          { "Id": "06127", "Name": "Xã Trùng Khánh", "Level": "Xã" },
          { "Id": "06133", "Name": "Xã Bắc La", "Level": "Xã" },
          { "Id": "06136", "Name": "Xã Thụy Hùng", "Level": "Xã" },
          { "Id": "06139", "Name": "Xã Bắc Hùng", "Level": "Xã" },
          { "Id": "06142", "Name": "Xã Tân Tác", "Level": "Xã" },
          { "Id": "06148", "Name": "Xã Thanh Long", "Level": "Xã" },
          { "Id": "06151", "Name": "Xã Hội Hoan", "Level": "Xã" },
          { "Id": "06154", "Name": "Xã Bắc Việt", "Level": "Xã" },
          { "Id": "06157", "Name": "Xã Hoàng Việt", "Level": "Xã" },
          { "Id": "06160", "Name": "Xã Gia Miễn", "Level": "Xã" },
          { "Id": "06163", "Name": "Xã Thành Hòa", "Level": "Xã" },
          { "Id": "06166", "Name": "Xã Tân Thanh", "Level": "Xã" },
          { "Id": "06172", "Name": "Xã Tân Mỹ", "Level": "Xã" },
          { "Id": "06175", "Name": "Xã Hồng Thái", "Level": "Xã" },
          { "Id": "06178", "Name": "Xã  Hoàng Văn Thụ", "Level": "Xã" },
          { "Id": "06181", "Name": "Xã Nhạc Kỳ", "Level": "Xã" }
        ]
      },
      {
        "Id": "183",
        "Name": "Huyện Cao Lộc",
        "Wards": [
          { "Id": "06184", "Name": "Thị trấn Đồng Đăng", "Level": "Thị trấn" },
          { "Id": "06187", "Name": "Thị trấn Cao Lộc", "Level": "Thị trấn" },
          { "Id": "06190", "Name": "Xã Bảo Lâm", "Level": "Xã" },
          { "Id": "06193", "Name": "Xã Thanh Lòa", "Level": "Xã" },
          { "Id": "06196", "Name": "Xã Cao Lâu", "Level": "Xã" },
          { "Id": "06199", "Name": "Xã Thạch Đạn", "Level": "Xã" },
          { "Id": "06202", "Name": "Xã Xuất Lễ", "Level": "Xã" },
          { "Id": "06205", "Name": "Xã Hồng Phong", "Level": "Xã" },
          { "Id": "06208", "Name": "Xã Thụy Hùng", "Level": "Xã" },
          { "Id": "06211", "Name": "Xã Lộc Yên", "Level": "Xã" },
          { "Id": "06214", "Name": "Xã Phú Xá", "Level": "Xã" },
          { "Id": "06217", "Name": "Xã Bình Trung", "Level": "Xã" },
          { "Id": "06220", "Name": "Xã Hải Yến", "Level": "Xã" },
          { "Id": "06223", "Name": "Xã Hòa Cư", "Level": "Xã" },
          { "Id": "06226", "Name": "Xã Hợp Thành", "Level": "Xã" },
          { "Id": "06232", "Name": "Xã Công Sơn", "Level": "Xã" },
          { "Id": "06235", "Name": "Xã Gia Cát", "Level": "Xã" },
          { "Id": "06238", "Name": "Xã Mẫu Sơn", "Level": "Xã" },
          { "Id": "06241", "Name": "Xã Xuân Long", "Level": "Xã" },
          { "Id": "06244", "Name": "Xã Tân Liên", "Level": "Xã" },
          { "Id": "06247", "Name": "Xã Yên Trạch", "Level": "Xã" },
          { "Id": "06250", "Name": "Xã Tân Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "184",
        "Name": "Huyện Văn Quan",
        "Wards": [
          { "Id": "06253", "Name": "Thị trấn Văn Quan", "Level": "Thị trấn" },
          { "Id": "06256", "Name": "Xã Trấn Ninh", "Level": "Xã" },
          { "Id": "06268", "Name": "Xã Liên Hội", "Level": "Xã" },
          { "Id": "06274", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "06277", "Name": "Xã Tú Xuyên", "Level": "Xã" },
          { "Id": "06280", "Name": "Xã Điềm He", "Level": "Xã" },
          { "Id": "06283", "Name": "Xã An Sơn", "Level": "Xã" },
          { "Id": "06286", "Name": "Xã Khánh Khê", "Level": "Xã" },
          { "Id": "06292", "Name": "Xã Lương Năng", "Level": "Xã" },
          { "Id": "06295", "Name": "Xã Đồng Giáp", "Level": "Xã" },
          { "Id": "06298", "Name": "Xã Bình Phúc", "Level": "Xã" },
          { "Id": "06301", "Name": "Xã Tràng Các", "Level": "Xã" },
          { "Id": "06307", "Name": "Xã Tân Đoàn", "Level": "Xã" },
          { "Id": "06313", "Name": "Xã Tri Lễ", "Level": "Xã" },
          { "Id": "06316", "Name": "Xã Tràng Phái", "Level": "Xã" },
          { "Id": "06319", "Name": "Xã Yên Phúc", "Level": "Xã" },
          { "Id": "06322", "Name": "Xã Hữu Lễ", "Level": "Xã" }
        ]
      },
      {
        "Id": "185",
        "Name": "Huyện Bắc Sơn",
        "Wards": [
          { "Id": "06325", "Name": "Thị trấn Bắc Sơn", "Level": "Thị trấn" },
          { "Id": "06328", "Name": "Xã Long Đống", "Level": "Xã" },
          { "Id": "06331", "Name": "Xã Vạn Thủy", "Level": "Xã" },
          { "Id": "06337", "Name": "Xã Đồng ý", "Level": "Xã" },
          { "Id": "06340", "Name": "Xã Tân Tri", "Level": "Xã" },
          { "Id": "06343", "Name": "Xã Bắc Quỳnh", "Level": "Xã" },
          { "Id": "06349", "Name": "Xã Hưng Vũ", "Level": "Xã" },
          { "Id": "06352", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "06355", "Name": "Xã Vũ Sơn", "Level": "Xã" },
          { "Id": "06358", "Name": "Xã Chiêu Vũ", "Level": "Xã" },
          { "Id": "06361", "Name": "Xã Tân Hương", "Level": "Xã" },
          { "Id": "06364", "Name": "Xã Chiến Thắng", "Level": "Xã" },
          { "Id": "06367", "Name": "Xã Vũ Lăng", "Level": "Xã" },
          { "Id": "06370", "Name": "Xã Trấn Yên", "Level": "Xã" },
          { "Id": "06373", "Name": "Xã Vũ Lễ", "Level": "Xã" },
          { "Id": "06376", "Name": "Xã Nhất Hòa", "Level": "Xã" },
          { "Id": "06379", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "06382", "Name": "Xã Nhất Tiến", "Level": "Xã" }
        ]
      },
      {
        "Id": "186",
        "Name": "Huyện Hữu Lũng",
        "Wards": [
          { "Id": "06385", "Name": "Thị trấn Hữu Lũng", "Level": "Thị trấn" },
          { "Id": "06388", "Name": "Xã Hữu Liên", "Level": "Xã" },
          { "Id": "06391", "Name": "Xã Yên Bình", "Level": "Xã" },
          { "Id": "06394", "Name": "Xã Quyết Thắng", "Level": "Xã" },
          { "Id": "06397", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "06400", "Name": "Xã Yên Thịnh", "Level": "Xã" },
          { "Id": "06403", "Name": "Xã Yên Sơn", "Level": "Xã" },
          { "Id": "06406", "Name": "Xã Thiện Tân", "Level": "Xã" },
          { "Id": "06412", "Name": "Xã Yên Vượng", "Level": "Xã" },
          { "Id": "06415", "Name": "Xã Minh Tiến", "Level": "Xã" },
          { "Id": "06418", "Name": "Xã Nhật Tiến", "Level": "Xã" },
          { "Id": "06421", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "06424", "Name": "Xã Đồng Tân", "Level": "Xã" },
          { "Id": "06427", "Name": "Xã Cai Kinh", "Level": "Xã" },
          { "Id": "06430", "Name": "Xã Hòa Lạc", "Level": "Xã" },
          { "Id": "06433", "Name": "Xã Vân Nham", "Level": "Xã" },
          { "Id": "06436", "Name": "Xã Đồng Tiến", "Level": "Xã" },
          { "Id": "06442", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "06445", "Name": "Xã Hòa Sơn", "Level": "Xã" },
          { "Id": "06448", "Name": "Xã Minh Sơn", "Level": "Xã" },
          { "Id": "06451", "Name": "Xã Hồ Sơn", "Level": "Xã" },
          { "Id": "06454", "Name": "Xã Sơn Hà", "Level": "Xã" },
          { "Id": "06457", "Name": "Xã Minh Hòa", "Level": "Xã" },
          { "Id": "06460", "Name": "Xã Hòa Thắng", "Level": "Xã" }
        ]
      },
      {
        "Id": "187",
        "Name": "Huyện Chi Lăng",
        "Wards": [
          { "Id": "06463", "Name": "Thị trấn Đồng Mỏ", "Level": "Thị trấn" },
          { "Id": "06466", "Name": "Thị trấn Chi Lăng", "Level": "Thị trấn" },
          { "Id": "06469", "Name": "Xã Vân An", "Level": "Xã" },
          { "Id": "06472", "Name": "Xã Vân Thủy", "Level": "Xã" },
          { "Id": "06475", "Name": "Xã Gia Lộc", "Level": "Xã" },
          { "Id": "06478", "Name": "Xã Bắc Thủy", "Level": "Xã" },
          { "Id": "06481", "Name": "Xã Chiến Thắng", "Level": "Xã" },
          { "Id": "06484", "Name": "Xã Mai Sao", "Level": "Xã" },
          { "Id": "06487", "Name": "Xã Bằng Hữu", "Level": "Xã" },
          { "Id": "06490", "Name": "Xã Thượng Cường", "Level": "Xã" },
          { "Id": "06493", "Name": "Xã Bằng Mạc", "Level": "Xã" },
          { "Id": "06496", "Name": "Xã Nhân Lý", "Level": "Xã" },
          { "Id": "06499", "Name": "Xã Lâm Sơn", "Level": "Xã" },
          { "Id": "06502", "Name": "Xã Liên Sơn", "Level": "Xã" },
          { "Id": "06505", "Name": "Xã Vạn Linh", "Level": "Xã" },
          { "Id": "06508", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "06514", "Name": "Xã Hữu Kiên", "Level": "Xã" },
          { "Id": "06517", "Name": "Xã Quan Sơn", "Level": "Xã" },
          { "Id": "06520", "Name": "Xã Y Tịch", "Level": "Xã" },
          { "Id": "06523", "Name": "Xã Chi Lăng", "Level": "Xã" }
        ]
      },
      {
        "Id": "188",
        "Name": "Huyện Lộc Bình",
        "Wards": [
          { "Id": "06526", "Name": "Thị trấn Na Dương", "Level": "Thị trấn" },
          { "Id": "06529", "Name": "Thị trấn Lộc Bình", "Level": "Thị trấn" },
          { "Id": "06532", "Name": "Xã Mẫu Sơn", "Level": "Xã" },
          { "Id": "06541", "Name": "Xã Yên Khoái", "Level": "Xã" },
          { "Id": "06544", "Name": "Xã Khánh Xuân", "Level": "Xã" },
          { "Id": "06547", "Name": "Xã Tú Mịch", "Level": "Xã" },
          { "Id": "06550", "Name": "Xã Hữu Khánh", "Level": "Xã" },
          { "Id": "06553", "Name": "Xã Đồng Bục", "Level": "Xã" },
          { "Id": "06559", "Name": "Xã Tam Gia", "Level": "Xã" },
          { "Id": "06562", "Name": "Xã Tú Đoạn", "Level": "Xã" },
          { "Id": "06565", "Name": "Xã Khuất Xá", "Level": "Xã" },
          { "Id": "06574", "Name": "Xã Tĩnh Bắc", "Level": "Xã" },
          { "Id": "06577", "Name": "Xã Thống Nhất", "Level": "Xã" },
          { "Id": "06589", "Name": "Xã Sàn Viên", "Level": "Xã" },
          { "Id": "06592", "Name": "Xã Đông Quan", "Level": "Xã" },
          { "Id": "06595", "Name": "Xã Minh Hiệp", "Level": "Xã" },
          { "Id": "06598", "Name": "Xã Hữu Lân", "Level": "Xã" },
          { "Id": "06601", "Name": "Xã Lợi Bác", "Level": "Xã" },
          { "Id": "06604", "Name": "Xã Nam Quan", "Level": "Xã" },
          { "Id": "06607", "Name": "Xã Xuân Dương", "Level": "Xã" },
          { "Id": "06610", "Name": "Xã Ái Quốc", "Level": "Xã" }
        ]
      },
      {
        "Id": "189",
        "Name": "Huyện Đình Lập",
        "Wards": [
          { "Id": "06613", "Name": "Thị trấn Đình Lập", "Level": "Thị trấn" },
          {
            "Id": "06616",
            "Name": "Thị trấn NT Thái Bình",
            "Level": "Thị trấn"
          },
          { "Id": "06619", "Name": "Xã Bắc Xa", "Level": "Xã" },
          { "Id": "06622", "Name": "Xã Bính Xá", "Level": "Xã" },
          { "Id": "06625", "Name": "Xã Kiên Mộc", "Level": "Xã" },
          { "Id": "06628", "Name": "Xã Đình Lập", "Level": "Xã" },
          { "Id": "06631", "Name": "Xã Thái Bình", "Level": "Xã" },
          { "Id": "06634", "Name": "Xã Cường Lợi", "Level": "Xã" },
          { "Id": "06637", "Name": "Xã Châu Sơn", "Level": "Xã" },
          { "Id": "06640", "Name": "Xã Lâm Ca", "Level": "Xã" },
          { "Id": "06643", "Name": "Xã Đồng Thắng", "Level": "Xã" },
          { "Id": "06646", "Name": "Xã Bắc Lãng", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "22",
    "Name": "Tỉnh Quảng Ninh",
    "Districts": [
      {
        "Id": "193",
        "Name": "Thành phố Hạ Long",
        "Wards": [
          { "Id": "06649", "Name": "Phường Hà Khánh", "Level": "Phường" },
          { "Id": "06652", "Name": "Phường Hà Phong", "Level": "Phường" },
          { "Id": "06655", "Name": "Phường Hà Khẩu", "Level": "Phường" },
          { "Id": "06658", "Name": "Phường Cao Xanh", "Level": "Phường" },
          { "Id": "06661", "Name": "Phường Giếng Đáy", "Level": "Phường" },
          { "Id": "06664", "Name": "Phường Hà Tu", "Level": "Phường" },
          { "Id": "06667", "Name": "Phường Hà Trung", "Level": "Phường" },
          { "Id": "06670", "Name": "Phường Hà Lầm", "Level": "Phường" },
          { "Id": "06673", "Name": "Phường Bãi Cháy", "Level": "Phường" },
          { "Id": "06676", "Name": "Phường Cao Thắng", "Level": "Phường" },
          { "Id": "06679", "Name": "Phường Hùng Thắng", "Level": "Phường" },
          { "Id": "06682", "Name": "Phường Yết Kiêu", "Level": "Phường" },
          { "Id": "06685", "Name": "Phường Trần Hưng Đạo", "Level": "Phường" },
          { "Id": "06688", "Name": "Phường Hồng Hải", "Level": "Phường" },
          { "Id": "06691", "Name": "Phường Hồng Gai", "Level": "Phường" },
          { "Id": "06694", "Name": "Phường Bạch Đằng", "Level": "Phường" },
          { "Id": "06697", "Name": "Phường Hồng Hà", "Level": "Phường" },
          { "Id": "06700", "Name": "Phường Tuần Châu", "Level": "Phường" },
          { "Id": "06703", "Name": "Phường Việt Hưng", "Level": "Phường" },
          { "Id": "06706", "Name": "Phường Đại Yên", "Level": "Phường" },
          { "Id": "07030", "Name": "Phường Hoành Bồ", "Level": "Phường" },
          { "Id": "07033", "Name": "Xã Kỳ Thượng", "Level": "Xã" },
          { "Id": "07036", "Name": "Xã Đồng Sơn", "Level": "Xã" },
          { "Id": "07039", "Name": "Xã Tân Dân", "Level": "Xã" },
          { "Id": "07042", "Name": "Xã Đồng Lâm", "Level": "Xã" },
          { "Id": "07045", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "07048", "Name": "Xã Vũ Oai", "Level": "Xã" },
          { "Id": "07051", "Name": "Xã Dân Chủ", "Level": "Xã" },
          { "Id": "07054", "Name": "Xã Quảng La", "Level": "Xã" },
          { "Id": "07057", "Name": "Xã Bằng Cả", "Level": "Xã" },
          { "Id": "07060", "Name": "Xã Thống Nhất", "Level": "Xã" },
          { "Id": "07063", "Name": "Xã Sơn Dương", "Level": "Xã" },
          { "Id": "07066", "Name": "Xã Lê Lợi", "Level": "Xã" }
        ]
      },
      {
        "Id": "194",
        "Name": "Thành phố Móng Cái",
        "Wards": [
          { "Id": "06709", "Name": "Phường Ka Long", "Level": "Phường" },
          { "Id": "06712", "Name": "Phường Trần Phú", "Level": "Phường" },
          { "Id": "06715", "Name": "Phường Ninh Dương", "Level": "Phường" },
          { "Id": "06718", "Name": "Phường Hoà Lạc", "Level": "Phường" },
          { "Id": "06721", "Name": "Phường Trà Cổ", "Level": "Phường" },
          { "Id": "06724", "Name": "Xã Hải Sơn", "Level": "Xã" },
          { "Id": "06727", "Name": "Xã Bắc Sơn", "Level": "Xã" },
          { "Id": "06730", "Name": "Xã Hải Đông", "Level": "Xã" },
          { "Id": "06733", "Name": "Xã Hải Tiến", "Level": "Xã" },
          { "Id": "06736", "Name": "Phường Hải Yên", "Level": "Phường" },
          { "Id": "06739", "Name": "Xã Quảng Nghĩa", "Level": "Xã" },
          { "Id": "06742", "Name": "Phường Hải Hoà", "Level": "Phường" },
          { "Id": "06745", "Name": "Xã Hải Xuân", "Level": "Xã" },
          { "Id": "06748", "Name": "Xã Vạn Ninh", "Level": "Xã" },
          { "Id": "06751", "Name": "Phường Bình Ngọc", "Level": "Phường" },
          { "Id": "06754", "Name": "Xã Vĩnh Trung", "Level": "Xã" },
          { "Id": "06757", "Name": "Xã Vĩnh Thực", "Level": "Xã" }
        ]
      },
      {
        "Id": "195",
        "Name": "Thành phố Cẩm Phả",
        "Wards": [
          { "Id": "06760", "Name": "Phường Mông Dương", "Level": "Phường" },
          { "Id": "06763", "Name": "Phường Cửa Ông", "Level": "Phường" },
          { "Id": "06766", "Name": "Phường Cẩm Sơn", "Level": "Phường" },
          { "Id": "06769", "Name": "Phường Cẩm Đông", "Level": "Phường" },
          { "Id": "06772", "Name": "Phường Cẩm Phú", "Level": "Phường" },
          { "Id": "06775", "Name": "Phường Cẩm Tây", "Level": "Phường" },
          { "Id": "06778", "Name": "Phường Quang Hanh", "Level": "Phường" },
          { "Id": "06781", "Name": "Phường Cẩm Thịnh", "Level": "Phường" },
          { "Id": "06784", "Name": "Phường Cẩm Thủy", "Level": "Phường" },
          { "Id": "06787", "Name": "Phường Cẩm Thạch", "Level": "Phường" },
          { "Id": "06790", "Name": "Phường Cẩm Thành", "Level": "Phường" },
          { "Id": "06793", "Name": "Phường Cẩm Trung", "Level": "Phường" },
          { "Id": "06796", "Name": "Phường Cẩm Bình", "Level": "Phường" },
          { "Id": "06799", "Name": "Xã Cộng Hòa", "Level": "Xã" },
          { "Id": "06802", "Name": "Xã Cẩm Hải", "Level": "Xã" },
          { "Id": "06805", "Name": "Xã Dương Huy", "Level": "Xã" }
        ]
      },
      {
        "Id": "196",
        "Name": "Thành phố Uông Bí",
        "Wards": [
          { "Id": "06808", "Name": "Phường Vàng Danh", "Level": "Phường" },
          { "Id": "06811", "Name": "Phường Thanh Sơn", "Level": "Phường" },
          { "Id": "06814", "Name": "Phường Bắc Sơn", "Level": "Phường" },
          { "Id": "06817", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "06820", "Name": "Phường Trưng Vương", "Level": "Phường" },
          { "Id": "06823", "Name": "Phường Nam Khê", "Level": "Phường" },
          { "Id": "06826", "Name": "Phường Yên Thanh", "Level": "Phường" },
          { "Id": "06829", "Name": "Xã Thượng Yên Công", "Level": "Xã" },
          { "Id": "06832", "Name": "Phường Phương Đông", "Level": "Phường" },
          { "Id": "06835", "Name": "Phường Phương Nam", "Level": "Phường" }
        ]
      },
      {
        "Id": "198",
        "Name": "Huyện Bình Liêu",
        "Wards": [
          { "Id": "06838", "Name": "Thị trấn Bình Liêu", "Level": "Thị trấn" },
          { "Id": "06841", "Name": "Xã Hoành Mô", "Level": "Xã" },
          { "Id": "06844", "Name": "Xã Đồng Tâm", "Level": "Xã" },
          { "Id": "06847", "Name": "Xã Đồng Văn", "Level": "Xã" },
          { "Id": "06853", "Name": "Xã Vô Ngại", "Level": "Xã" },
          { "Id": "06856", "Name": "Xã Lục Hồn", "Level": "Xã" },
          { "Id": "06859", "Name": "Xã Húc Động", "Level": "Xã" }
        ]
      },
      {
        "Id": "199",
        "Name": "Huyện Tiên Yên",
        "Wards": [
          { "Id": "06862", "Name": "Thị trấn Tiên Yên", "Level": "Thị trấn" },
          { "Id": "06865", "Name": "Xã Hà Lâu", "Level": "Xã" },
          { "Id": "06868", "Name": "Xã Đại Dực", "Level": "Xã" },
          { "Id": "06871", "Name": "Xã Phong Dụ", "Level": "Xã" },
          { "Id": "06874", "Name": "Xã Điền Xá", "Level": "Xã" },
          { "Id": "06877", "Name": "Xã Đông Ngũ", "Level": "Xã" },
          { "Id": "06880", "Name": "Xã Yên Than", "Level": "Xã" },
          { "Id": "06883", "Name": "Xã Đông Hải", "Level": "Xã" },
          { "Id": "06886", "Name": "Xã Hải Lạng", "Level": "Xã" },
          { "Id": "06889", "Name": "Xã Tiên Lãng", "Level": "Xã" },
          { "Id": "06892", "Name": "Xã Đồng Rui", "Level": "Xã" }
        ]
      },
      {
        "Id": "200",
        "Name": "Huyện Đầm Hà",
        "Wards": [
          { "Id": "06895", "Name": "Thị trấn Đầm Hà", "Level": "Thị trấn" },
          { "Id": "06898", "Name": "Xã Quảng Lâm", "Level": "Xã" },
          { "Id": "06901", "Name": "Xã Quảng An", "Level": "Xã" },
          { "Id": "06904", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "06910", "Name": "Xã Dực Yên", "Level": "Xã" },
          { "Id": "06913", "Name": "Xã Quảng Tân", "Level": "Xã" },
          { "Id": "06916", "Name": "Xã Đầm Hà", "Level": "Xã" },
          { "Id": "06917", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "06919", "Name": "Xã Đại Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "201",
        "Name": "Huyện Hải Hà",
        "Wards": [
          { "Id": "06922", "Name": "Thị trấn Quảng Hà", "Level": "Thị trấn" },
          { "Id": "06925", "Name": "Xã Quảng Đức", "Level": "Xã" },
          { "Id": "06928", "Name": "Xã Quảng Sơn", "Level": "Xã" },
          { "Id": "06931", "Name": "Xã Quảng Thành", "Level": "Xã" },
          { "Id": "06937", "Name": "Xã Quảng Thịnh", "Level": "Xã" },
          { "Id": "06940", "Name": "Xã Quảng Minh", "Level": "Xã" },
          { "Id": "06943", "Name": "Xã Quảng Chính", "Level": "Xã" },
          { "Id": "06946", "Name": "Xã Quảng Long", "Level": "Xã" },
          { "Id": "06949", "Name": "Xã Đường Hoa", "Level": "Xã" },
          { "Id": "06952", "Name": "Xã Quảng Phong", "Level": "Xã" },
          { "Id": "06967", "Name": "Xã Cái Chiên", "Level": "Xã" }
        ]
      },
      {
        "Id": "202",
        "Name": "Huyện Ba Chẽ",
        "Wards": [
          { "Id": "06970", "Name": "Thị trấn Ba Chẽ", "Level": "Thị trấn" },
          { "Id": "06973", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "06976", "Name": "Xã Thanh Lâm", "Level": "Xã" },
          { "Id": "06979", "Name": "Xã Đạp Thanh", "Level": "Xã" },
          { "Id": "06982", "Name": "Xã Nam Sơn", "Level": "Xã" },
          { "Id": "06985", "Name": "Xã Lương Mông", "Level": "Xã" },
          { "Id": "06988", "Name": "Xã Đồn Đạc", "Level": "Xã" },
          { "Id": "06991", "Name": "Xã Minh Cầm", "Level": "Xã" }
        ]
      },
      {
        "Id": "203",
        "Name": "Huyện Vân Đồn",
        "Wards": [
          { "Id": "06994", "Name": "Thị trấn Cái Rồng", "Level": "Thị trấn" },
          { "Id": "06997", "Name": "Xã Đài Xuyên", "Level": "Xã" },
          { "Id": "07000", "Name": "Xã Bình Dân", "Level": "Xã" },
          { "Id": "07003", "Name": "Xã Vạn Yên", "Level": "Xã" },
          { "Id": "07006", "Name": "Xã Minh Châu", "Level": "Xã" },
          { "Id": "07009", "Name": "Xã Đoàn Kết", "Level": "Xã" },
          { "Id": "07012", "Name": "Xã Hạ Long", "Level": "Xã" },
          { "Id": "07015", "Name": "Xã Đông Xá", "Level": "Xã" },
          { "Id": "07018", "Name": "Xã Bản Sen", "Level": "Xã" },
          { "Id": "07021", "Name": "Xã Thắng Lợi", "Level": "Xã" },
          { "Id": "07024", "Name": "Xã Quan Lạn", "Level": "Xã" },
          { "Id": "07027", "Name": "Xã Ngọc Vừng", "Level": "Xã" }
        ]
      },
      {
        "Id": "205",
        "Name": "Thị xã Đông Triều",
        "Wards": [
          { "Id": "07069", "Name": "Phường Mạo Khê", "Level": "Phường" },
          { "Id": "07072", "Name": "Phường Đông Triều", "Level": "Phường" },
          { "Id": "07075", "Name": "Xã An Sinh", "Level": "Xã" },
          { "Id": "07078", "Name": "Xã Tràng Lương", "Level": "Xã" },
          { "Id": "07081", "Name": "Xã Bình Khê", "Level": "Xã" },
          { "Id": "07084", "Name": "Xã Việt Dân", "Level": "Xã" },
          { "Id": "07087", "Name": "Xã Tân Việt", "Level": "Xã" },
          { "Id": "07090", "Name": "Xã Bình Dương", "Level": "Xã" },
          { "Id": "07093", "Name": "Phường Đức Chính", "Level": "Phường" },
          { "Id": "07096", "Name": "Phường Tràng An", "Level": "Phường" },
          { "Id": "07099", "Name": "Xã Nguyễn Huệ", "Level": "Xã" },
          { "Id": "07102", "Name": "Xã Thủy An", "Level": "Xã" },
          { "Id": "07105", "Name": "Phường Xuân Sơn", "Level": "Phường" },
          { "Id": "07108", "Name": "Xã Hồng Thái Tây", "Level": "Xã" },
          { "Id": "07111", "Name": "Xã Hồng Thái Đông", "Level": "Xã" },
          { "Id": "07114", "Name": "Phường Hoàng Quế", "Level": "Phường" },
          { "Id": "07117", "Name": "Phường Yên Thọ", "Level": "Phường" },
          { "Id": "07120", "Name": "Phường Hồng Phong", "Level": "Phường" },
          { "Id": "07123", "Name": "Phường Kim Sơn", "Level": "Phường" },
          { "Id": "07126", "Name": "Phường Hưng Đạo", "Level": "Phường" },
          { "Id": "07129", "Name": "Xã Yên Đức", "Level": "Xã" }
        ]
      },
      {
        "Id": "206",
        "Name": "Thị xã Quảng Yên",
        "Wards": [
          { "Id": "07132", "Name": "Phường Quảng Yên", "Level": "Phường" },
          { "Id": "07135", "Name": "Phường Đông Mai", "Level": "Phường" },
          { "Id": "07138", "Name": "Phường Minh Thành", "Level": "Phường" },
          { "Id": "07144", "Name": "Xã Sông Khoai", "Level": "Xã" },
          { "Id": "07147", "Name": "Xã Hiệp Hòa", "Level": "Xã" },
          { "Id": "07150", "Name": "Phường Cộng Hòa", "Level": "Phường" },
          { "Id": "07153", "Name": "Xã Tiền An", "Level": "Xã" },
          { "Id": "07156", "Name": "Xã Hoàng Tân", "Level": "Xã" },
          { "Id": "07159", "Name": "Phường Tân An", "Level": "Phường" },
          { "Id": "07162", "Name": "Phường Yên Giang", "Level": "Phường" },
          { "Id": "07165", "Name": "Phường Nam Hoà", "Level": "Phường" },
          { "Id": "07168", "Name": "Phường Hà An", "Level": "Phường" },
          { "Id": "07171", "Name": "Xã Cẩm La", "Level": "Xã" },
          { "Id": "07174", "Name": "Phường Phong Hải", "Level": "Phường" },
          { "Id": "07177", "Name": "Phường Yên Hải", "Level": "Phường" },
          { "Id": "07180", "Name": "Xã Liên Hòa", "Level": "Xã" },
          { "Id": "07183", "Name": "Phường Phong Cốc", "Level": "Phường" },
          { "Id": "07186", "Name": "Xã Liên Vị", "Level": "Xã" },
          { "Id": "07189", "Name": "Xã Tiền Phong", "Level": "Xã" }
        ]
      },
      {
        "Id": "207",
        "Name": "Huyện Cô Tô",
        "Wards": [
          { "Id": "07192", "Name": "Thị trấn Cô Tô", "Level": "Thị trấn" },
          { "Id": "07195", "Name": "Xã Đồng Tiến", "Level": "Xã" },
          { "Id": "07198", "Name": "Xã Thanh Lân", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "24",
    "Name": "Tỉnh Bắc Giang",
    "Districts": [
      {
        "Id": "213",
        "Name": "Thành phố Bắc Giang",
        "Wards": [
          { "Id": "07201", "Name": "Phường Thọ Xương", "Level": "Phường" },
          {
            "Id": "07204",
            "Name": "Phường Trần Nguyên Hãn",
            "Level": "Phường"
          },
          { "Id": "07207", "Name": "Phường Ngô Quyền", "Level": "Phường" },
          { "Id": "07210", "Name": "Phường Hoàng Văn Thụ", "Level": "Phường" },
          { "Id": "07213", "Name": "Phường Trần Phú", "Level": "Phường" },
          { "Id": "07216", "Name": "Phường Mỹ Độ", "Level": "Phường" },
          { "Id": "07219", "Name": "Phường Lê Lợi", "Level": "Phường" },
          { "Id": "07222", "Name": "Xã Song Mai", "Level": "Xã" },
          { "Id": "07225", "Name": "Phường Xương Giang", "Level": "Phường" },
          { "Id": "07228", "Name": "Phường Đa Mai", "Level": "Phường" },
          { "Id": "07231", "Name": "Phường Dĩnh Kế", "Level": "Phường" },
          { "Id": "07441", "Name": "Xã Dĩnh Trì", "Level": "Xã" },
          { "Id": "07687", "Name": "Xã Tân Mỹ", "Level": "Xã" },
          { "Id": "07696", "Name": "Xã Đồng Sơn", "Level": "Xã" },
          { "Id": "07699", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "07705", "Name": "Xã Song Khê", "Level": "Xã" }
        ]
      },
      {
        "Id": "215",
        "Name": "Huyện Yên Thế",
        "Wards": [
          { "Id": "07243", "Name": "Xã Đồng Tiến", "Level": "Xã" },
          { "Id": "07246", "Name": "Xã Canh Nậu", "Level": "Xã" },
          { "Id": "07249", "Name": "Xã Xuân Lương", "Level": "Xã" },
          { "Id": "07252", "Name": "Xã Tam Tiến", "Level": "Xã" },
          { "Id": "07255", "Name": "Xã Đồng Vương", "Level": "Xã" },
          { "Id": "07258", "Name": "Xã Đồng Hưu", "Level": "Xã" },
          { "Id": "07260", "Name": "Xã Đồng Tâm", "Level": "Xã" },
          { "Id": "07261", "Name": "Xã Tam Hiệp", "Level": "Xã" },
          { "Id": "07264", "Name": "Xã Tiến Thắng", "Level": "Xã" },
          { "Id": "07267", "Name": "Xã Hồng Kỳ", "Level": "Xã" },
          { "Id": "07270", "Name": "Xã Đồng Lạc", "Level": "Xã" },
          { "Id": "07273", "Name": "Xã Đông Sơn", "Level": "Xã" },
          { "Id": "07276", "Name": "Xã Tân Hiệp", "Level": "Xã" },
          { "Id": "07279", "Name": "Xã Hương Vĩ", "Level": "Xã" },
          { "Id": "07282", "Name": "Xã Đồng Kỳ", "Level": "Xã" },
          { "Id": "07285", "Name": "Xã An Thượng", "Level": "Xã" },
          { "Id": "07288", "Name": "Thị trấn Phồn Xương", "Level": "Thị trấn" },
          { "Id": "07291", "Name": "Xã Tân Sỏi", "Level": "Xã" },
          { "Id": "07294", "Name": "Thị trấn Bố Hạ", "Level": "Thị trấn" }
        ]
      },
      {
        "Id": "216",
        "Name": "Huyện Tân Yên",
        "Wards": [
          { "Id": "07303", "Name": "Xã Lan Giới", "Level": "Xã" },
          { "Id": "07306", "Name": "Thị trấn Nhã Nam", "Level": "Thị trấn" },
          { "Id": "07309", "Name": "Xã Tân Trung", "Level": "Xã" },
          { "Id": "07312", "Name": "Xã Đại Hóa", "Level": "Xã" },
          { "Id": "07315", "Name": "Xã Quang Tiến", "Level": "Xã" },
          { "Id": "07318", "Name": "Xã Phúc Sơn", "Level": "Xã" },
          { "Id": "07321", "Name": "Xã An Dương", "Level": "Xã" },
          { "Id": "07324", "Name": "Xã Phúc Hòa", "Level": "Xã" },
          { "Id": "07327", "Name": "Xã Liên Sơn", "Level": "Xã" },
          { "Id": "07330", "Name": "Xã Hợp Đức", "Level": "Xã" },
          { "Id": "07333", "Name": "Xã Lam Cốt", "Level": "Xã" },
          { "Id": "07336", "Name": "Xã Cao Xá", "Level": "Xã" },
          { "Id": "07339", "Name": "Thị trấn Cao Thượng", "Level": "Thị trấn" },
          { "Id": "07342", "Name": "Xã Việt Ngọc", "Level": "Xã" },
          { "Id": "07345", "Name": "Xã Song Vân", "Level": "Xã" },
          { "Id": "07348", "Name": "Xã Ngọc Châu", "Level": "Xã" },
          { "Id": "07351", "Name": "Xã Ngọc Vân", "Level": "Xã" },
          { "Id": "07354", "Name": "Xã Việt Lập", "Level": "Xã" },
          { "Id": "07357", "Name": "Xã Liên Chung", "Level": "Xã" },
          { "Id": "07360", "Name": "Xã Ngọc Thiện", "Level": "Xã" },
          { "Id": "07363", "Name": "Xã Ngọc Lý", "Level": "Xã" },
          { "Id": "07366", "Name": "Xã Quế Nham", "Level": "Xã" }
        ]
      },
      {
        "Id": "217",
        "Name": "Huyện Lạng Giang",
        "Wards": [
          { "Id": "07375", "Name": "Thị trấn Vôi", "Level": "Thị trấn" },
          { "Id": "07378", "Name": "Xã Nghĩa Hòa", "Level": "Xã" },
          { "Id": "07381", "Name": "Xã Nghĩa Hưng", "Level": "Xã" },
          { "Id": "07384", "Name": "Xã Quang Thịnh", "Level": "Xã" },
          { "Id": "07387", "Name": "Xã Hương Sơn", "Level": "Xã" },
          { "Id": "07390", "Name": "Xã Đào Mỹ", "Level": "Xã" },
          { "Id": "07393", "Name": "Xã Tiên Lục", "Level": "Xã" },
          { "Id": "07396", "Name": "Xã An Hà", "Level": "Xã" },
          { "Id": "07399", "Name": "Thị trấn Kép", "Level": "Thị trấn" },
          { "Id": "07402", "Name": "Xã Mỹ Hà", "Level": "Xã" },
          { "Id": "07405", "Name": "Xã Hương Lạc", "Level": "Xã" },
          { "Id": "07408", "Name": "Xã Dương Đức", "Level": "Xã" },
          { "Id": "07411", "Name": "Xã Tân Thanh", "Level": "Xã" },
          { "Id": "07414", "Name": "Xã Yên Mỹ", "Level": "Xã" },
          { "Id": "07417", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "07420", "Name": "Xã Mỹ Thái", "Level": "Xã" },
          { "Id": "07426", "Name": "Xã Xương Lâm", "Level": "Xã" },
          { "Id": "07429", "Name": "Xã Xuân Hương", "Level": "Xã" },
          { "Id": "07432", "Name": "Xã Tân Dĩnh", "Level": "Xã" },
          { "Id": "07435", "Name": "Xã Đại Lâm", "Level": "Xã" },
          { "Id": "07438", "Name": "Xã Thái Đào", "Level": "Xã" }
        ]
      },
      {
        "Id": "218",
        "Name": "Huyện Lục Nam",
        "Wards": [
          { "Id": "07444", "Name": "Thị trấn Đồi Ngô", "Level": "Thị trấn" },
          { "Id": "07450", "Name": "Xã Đông Hưng", "Level": "Xã" },
          { "Id": "07453", "Name": "Xã Đông Phú", "Level": "Xã" },
          { "Id": "07456", "Name": "Xã Tam Dị", "Level": "Xã" },
          { "Id": "07459", "Name": "Xã Bảo Sơn", "Level": "Xã" },
          { "Id": "07462", "Name": "Xã Bảo Đài", "Level": "Xã" },
          { "Id": "07465", "Name": "Xã Thanh Lâm", "Level": "Xã" },
          { "Id": "07468", "Name": "Xã Tiên Nha", "Level": "Xã" },
          { "Id": "07471", "Name": "Xã Trường Giang", "Level": "Xã" },
          { "Id": "07477", "Name": "Xã Phương Sơn", "Level": "Xã" },
          { "Id": "07480", "Name": "Xã Chu Điện", "Level": "Xã" },
          { "Id": "07483", "Name": "Xã Cương Sơn", "Level": "Xã" },
          { "Id": "07486", "Name": "Xã Nghĩa Phương", "Level": "Xã" },
          { "Id": "07489", "Name": "Xã Vô Tranh", "Level": "Xã" },
          { "Id": "07492", "Name": "Xã Bình Sơn", "Level": "Xã" },
          { "Id": "07495", "Name": "Xã Lan Mẫu", "Level": "Xã" },
          { "Id": "07498", "Name": "Xã Yên Sơn", "Level": "Xã" },
          { "Id": "07501", "Name": "Xã Khám Lạng", "Level": "Xã" },
          { "Id": "07504", "Name": "Xã Huyền Sơn", "Level": "Xã" },
          { "Id": "07507", "Name": "Xã Trường Sơn", "Level": "Xã" },
          { "Id": "07510", "Name": "Xã Lục Sơn", "Level": "Xã" },
          { "Id": "07513", "Name": "Xã Bắc Lũng", "Level": "Xã" },
          { "Id": "07516", "Name": "Xã Vũ Xá", "Level": "Xã" },
          { "Id": "07519", "Name": "Xã Cẩm Lý", "Level": "Xã" },
          { "Id": "07522", "Name": "Xã Đan Hội", "Level": "Xã" }
        ]
      },
      {
        "Id": "219",
        "Name": "Huyện Lục Ngạn",
        "Wards": [
          { "Id": "07525", "Name": "Thị trấn Chũ", "Level": "Thị trấn" },
          { "Id": "07528", "Name": "Xã Cấm Sơn", "Level": "Xã" },
          { "Id": "07531", "Name": "Xã Tân Sơn", "Level": "Xã" },
          { "Id": "07534", "Name": "Xã Phong Minh", "Level": "Xã" },
          { "Id": "07537", "Name": "Xã Phong Vân", "Level": "Xã" },
          { "Id": "07540", "Name": "Xã Xa Lý", "Level": "Xã" },
          { "Id": "07543", "Name": "Xã Hộ Đáp", "Level": "Xã" },
          { "Id": "07546", "Name": "Xã Sơn Hải", "Level": "Xã" },
          { "Id": "07549", "Name": "Xã Thanh Hải", "Level": "Xã" },
          { "Id": "07552", "Name": "Xã Kiên Lao", "Level": "Xã" },
          { "Id": "07555", "Name": "Xã Biên Sơn", "Level": "Xã" },
          { "Id": "07558", "Name": "Xã Kiên Thành", "Level": "Xã" },
          { "Id": "07561", "Name": "Xã Hồng Giang", "Level": "Xã" },
          { "Id": "07564", "Name": "Xã Kim Sơn", "Level": "Xã" },
          { "Id": "07567", "Name": "Xã Tân Hoa", "Level": "Xã" },
          { "Id": "07570", "Name": "Xã Giáp Sơn", "Level": "Xã" },
          { "Id": "07573", "Name": "Xã Biển Động", "Level": "Xã" },
          { "Id": "07576", "Name": "Xã Quý Sơn", "Level": "Xã" },
          { "Id": "07579", "Name": "Xã Trù Hựu", "Level": "Xã" },
          { "Id": "07582", "Name": "Xã Phì Điền", "Level": "Xã" },
          { "Id": "07588", "Name": "Xã Tân Quang", "Level": "Xã" },
          { "Id": "07591", "Name": "Xã Đồng Cốc", "Level": "Xã" },
          { "Id": "07594", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "07597", "Name": "Xã Phú Nhuận", "Level": "Xã" },
          { "Id": "07600", "Name": "Xã Mỹ An", "Level": "Xã" },
          { "Id": "07603", "Name": "Xã Nam Dương", "Level": "Xã" },
          { "Id": "07606", "Name": "Xã Tân Mộc", "Level": "Xã" },
          { "Id": "07609", "Name": "Xã Đèo Gia", "Level": "Xã" },
          { "Id": "07612", "Name": "Xã Phượng Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "220",
        "Name": "Huyện Sơn Động",
        "Wards": [
          { "Id": "07615", "Name": "Thị trấn An Châu", "Level": "Thị trấn" },
          { "Id": "07616", "Name": "Thị trấn Tây Yên Tử", "Level": "Thị trấn" },
          { "Id": "07621", "Name": "Xã Vân Sơn", "Level": "Xã" },
          { "Id": "07624", "Name": "Xã Hữu Sản", "Level": "Xã" },
          { "Id": "07627", "Name": "Xã Đại Sơn", "Level": "Xã" },
          { "Id": "07630", "Name": "Xã Phúc Sơn", "Level": "Xã" },
          { "Id": "07636", "Name": "Xã Giáo Liêm", "Level": "Xã" },
          { "Id": "07642", "Name": "Xã Cẩm Đàn", "Level": "Xã" },
          { "Id": "07645", "Name": "Xã An Lạc", "Level": "Xã" },
          { "Id": "07648", "Name": "Xã Vĩnh An", "Level": "Xã" },
          { "Id": "07651", "Name": "Xã Yên Định", "Level": "Xã" },
          { "Id": "07654", "Name": "Xã Lệ Viễn", "Level": "Xã" },
          { "Id": "07660", "Name": "Xã An Bá", "Level": "Xã" },
          { "Id": "07663", "Name": "Xã Tuấn Đạo", "Level": "Xã" },
          { "Id": "07666", "Name": "Xã Dương Hưu", "Level": "Xã" },
          { "Id": "07672", "Name": "Xã Long Sơn", "Level": "Xã" },
          { "Id": "07678", "Name": "Xã Thanh Luận", "Level": "Xã" }
        ]
      },
      {
        "Id": "221",
        "Name": "Huyện Yên Dũng",
        "Wards": [
          { "Id": "07681", "Name": "Thị trấn Nham Biền", "Level": "Thị trấn" },
          { "Id": "07682", "Name": "Thị trấn Tân An", "Level": "Thị trấn" },
          { "Id": "07684", "Name": "Xã Lão Hộ", "Level": "Xã" },
          { "Id": "07690", "Name": "Xã Hương Gián", "Level": "Xã" },
          { "Id": "07702", "Name": "Xã Quỳnh Sơn", "Level": "Xã" },
          { "Id": "07708", "Name": "Xã Nội Hoàng", "Level": "Xã" },
          { "Id": "07711", "Name": "Xã Tiền Phong", "Level": "Xã" },
          { "Id": "07714", "Name": "Xã Xuân Phú", "Level": "Xã" },
          { "Id": "07717", "Name": "Xã Tân Liễu", "Level": "Xã" },
          { "Id": "07720", "Name": "Xã Trí Yên", "Level": "Xã" },
          { "Id": "07723", "Name": "Xã Lãng Sơn", "Level": "Xã" },
          { "Id": "07726", "Name": "Xã Yên Lư", "Level": "Xã" },
          { "Id": "07729", "Name": "Xã Tiến Dũng", "Level": "Xã" },
          { "Id": "07735", "Name": "Xã Đức Giang", "Level": "Xã" },
          { "Id": "07738", "Name": "Xã Cảnh Thụy", "Level": "Xã" },
          { "Id": "07741", "Name": "Xã Tư Mại", "Level": "Xã" },
          { "Id": "07747", "Name": "Xã Đồng Việt", "Level": "Xã" },
          { "Id": "07750", "Name": "Xã Đồng Phúc", "Level": "Xã" }
        ]
      },
      {
        "Id": "222",
        "Name": "Huyện Việt Yên",
        "Wards": [
          { "Id": "07759", "Name": "Xã Thượng Lan", "Level": "Xã" },
          { "Id": "07762", "Name": "Xã Việt Tiến", "Level": "Xã" },
          { "Id": "07765", "Name": "Xã Nghĩa Trung", "Level": "Xã" },
          { "Id": "07768", "Name": "Xã Minh Đức", "Level": "Xã" },
          { "Id": "07771", "Name": "Xã Hương Mai", "Level": "Xã" },
          { "Id": "07774", "Name": "Xã Tự Lạn", "Level": "Xã" },
          { "Id": "07777", "Name": "Thị trấn Bích Động", "Level": "Thị trấn" },
          { "Id": "07780", "Name": "Xã Trung Sơn", "Level": "Xã" },
          { "Id": "07783", "Name": "Xã Hồng Thái", "Level": "Xã" },
          { "Id": "07786", "Name": "Xã Tiên Sơn", "Level": "Xã" },
          { "Id": "07789", "Name": "Xã Tăng Tiến", "Level": "Xã" },
          { "Id": "07792", "Name": "Xã Quảng Minh", "Level": "Xã" },
          { "Id": "07795", "Name": "Thị trấn Nếnh", "Level": "Thị trấn" },
          { "Id": "07798", "Name": "Xã Ninh Sơn", "Level": "Xã" },
          { "Id": "07801", "Name": "Xã Vân Trung", "Level": "Xã" },
          { "Id": "07804", "Name": "Xã Vân Hà", "Level": "Xã" },
          { "Id": "07807", "Name": "Xã Quang Châu", "Level": "Xã" }
        ]
      },
      {
        "Id": "223",
        "Name": "Huyện Hiệp Hòa",
        "Wards": [
          { "Id": "07813", "Name": "Xã Đồng Tân", "Level": "Xã" },
          { "Id": "07816", "Name": "Xã Thanh Vân", "Level": "Xã" },
          { "Id": "07819", "Name": "Xã Hoàng Lương", "Level": "Xã" },
          { "Id": "07822", "Name": "Xã Hoàng Vân", "Level": "Xã" },
          { "Id": "07825", "Name": "Xã Hoàng Thanh", "Level": "Xã" },
          { "Id": "07828", "Name": "Xã Hoàng An", "Level": "Xã" },
          { "Id": "07831", "Name": "Xã Ngọc Sơn", "Level": "Xã" },
          { "Id": "07834", "Name": "Xã Thái Sơn", "Level": "Xã" },
          { "Id": "07837", "Name": "Xã Hòa Sơn", "Level": "Xã" },
          { "Id": "07840", "Name": "Thị trấn Thắng", "Level": "Thị trấn" },
          { "Id": "07843", "Name": "Xã Quang Minh", "Level": "Xã" },
          { "Id": "07846", "Name": "Xã Lương Phong", "Level": "Xã" },
          { "Id": "07849", "Name": "Xã Hùng Sơn", "Level": "Xã" },
          { "Id": "07852", "Name": "Xã Đại Thành", "Level": "Xã" },
          { "Id": "07855", "Name": "Xã Thường Thắng", "Level": "Xã" },
          { "Id": "07858", "Name": "Xã Hợp Thịnh", "Level": "Xã" },
          { "Id": "07861", "Name": "Xã Danh Thắng", "Level": "Xã" },
          { "Id": "07864", "Name": "Xã Mai Trung", "Level": "Xã" },
          { "Id": "07867", "Name": "Xã Đoan Bái", "Level": "Xã" },
          { "Id": "07870", "Name": "Xã Bắc Lý", "Level": "Xã" },
          { "Id": "07873", "Name": "Xã Xuân Cẩm", "Level": "Xã" },
          { "Id": "07876", "Name": "Xã Hương Lâm", "Level": "Xã" },
          { "Id": "07879", "Name": "Xã Đông Lỗ", "Level": "Xã" },
          { "Id": "07882", "Name": "Xã Châu Minh", "Level": "Xã" },
          { "Id": "07885", "Name": "Xã Mai Đình", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "25",
    "Name": "Tỉnh Phú Thọ",
    "Districts": [
      {
        "Id": "227",
        "Name": "Thành phố Việt Trì",
        "Wards": [
          { "Id": "07888", "Name": "Phường Dữu Lâu", "Level": "Phường" },
          { "Id": "07891", "Name": "Phường Vân Cơ", "Level": "Phường" },
          { "Id": "07894", "Name": "Phường Nông Trang", "Level": "Phường" },
          { "Id": "07897", "Name": "Phường Tân Dân", "Level": "Phường" },
          { "Id": "07900", "Name": "Phường Gia Cẩm", "Level": "Phường" },
          { "Id": "07903", "Name": "Phường Tiên Cát", "Level": "Phường" },
          { "Id": "07906", "Name": "Phường Thọ Sơn", "Level": "Phường" },
          { "Id": "07909", "Name": "Phường Thanh Miếu", "Level": "Phường" },
          { "Id": "07912", "Name": "Phường Bạch Hạc", "Level": "Phường" },
          { "Id": "07915", "Name": "Phường Bến Gót", "Level": "Phường" },
          { "Id": "07918", "Name": "Phường Vân Phú", "Level": "Phường" },
          { "Id": "07921", "Name": "Xã Phượng Lâu", "Level": "Xã" },
          { "Id": "07924", "Name": "Xã Thụy Vân", "Level": "Xã" },
          { "Id": "07927", "Name": "Phường Minh Phương", "Level": "Phường" },
          { "Id": "07930", "Name": "Xã Trưng Vương", "Level": "Xã" },
          { "Id": "07933", "Name": "Phường Minh Nông", "Level": "Phường" },
          { "Id": "07936", "Name": "Xã Sông Lô", "Level": "Xã" },
          { "Id": "08281", "Name": "Xã Kim Đức", "Level": "Xã" },
          { "Id": "08287", "Name": "Xã Hùng Lô", "Level": "Xã" },
          { "Id": "08503", "Name": "Xã Hy Cương", "Level": "Xã" },
          { "Id": "08506", "Name": "Xã Chu Hóa", "Level": "Xã" },
          { "Id": "08515", "Name": "Xã Thanh Đình", "Level": "Xã" }
        ]
      },
      {
        "Id": "228",
        "Name": "Thị xã Phú Thọ",
        "Wards": [
          { "Id": "07942", "Name": "Phường Hùng Vương", "Level": "Phường" },
          { "Id": "07945", "Name": "Phường Phong Châu", "Level": "Phường" },
          { "Id": "07948", "Name": "Phường Âu Cơ", "Level": "Phường" },
          { "Id": "07951", "Name": "Xã Hà Lộc", "Level": "Xã" },
          { "Id": "07954", "Name": "Xã Phú Hộ", "Level": "Xã" },
          { "Id": "07957", "Name": "Xã Văn Lung", "Level": "Xã" },
          { "Id": "07960", "Name": "Xã Thanh Minh", "Level": "Xã" },
          { "Id": "07963", "Name": "Xã Hà Thạch", "Level": "Xã" },
          { "Id": "07966", "Name": "Phường Thanh Vinh", "Level": "Phường" }
        ]
      },
      {
        "Id": "230",
        "Name": "Huyện Đoan Hùng",
        "Wards": [
          { "Id": "07969", "Name": "Thị trấn Đoan Hùng", "Level": "Thị trấn" },
          { "Id": "07975", "Name": "Xã Hùng Xuyên", "Level": "Xã" },
          { "Id": "07981", "Name": "Xã Bằng Luân", "Level": "Xã" },
          { "Id": "07984", "Name": "Xã Vân Du", "Level": "Xã" },
          { "Id": "07987", "Name": "Xã Phú Lâm", "Level": "Xã" },
          { "Id": "07993", "Name": "Xã Minh Lương", "Level": "Xã" },
          { "Id": "07996", "Name": "Xã Bằng Doãn", "Level": "Xã" },
          { "Id": "07999", "Name": "Xã Chí Đám", "Level": "Xã" },
          { "Id": "08005", "Name": "Xã Phúc Lai", "Level": "Xã" },
          { "Id": "08008", "Name": "Xã Ngọc Quan", "Level": "Xã" },
          { "Id": "08014", "Name": "Xã Hợp Nhất", "Level": "Xã" },
          { "Id": "08017", "Name": "Xã Sóc Đăng", "Level": "Xã" },
          { "Id": "08023", "Name": "Xã Tây Cốc", "Level": "Xã" },
          { "Id": "08026", "Name": "Xã Yên Kiện", "Level": "Xã" },
          { "Id": "08029", "Name": "Xã Hùng Long", "Level": "Xã" },
          { "Id": "08032", "Name": "Xã Vụ Quang", "Level": "Xã" },
          { "Id": "08035", "Name": "Xã Vân Đồn", "Level": "Xã" },
          { "Id": "08038", "Name": "Xã Tiêu Sơn", "Level": "Xã" },
          { "Id": "08041", "Name": "Xã Minh Tiến", "Level": "Xã" },
          { "Id": "08044", "Name": "Xã Minh Phú", "Level": "Xã" },
          { "Id": "08047", "Name": "Xã Chân Mộng", "Level": "Xã" },
          { "Id": "08050", "Name": "Xã Ca Đình", "Level": "Xã" }
        ]
      },
      {
        "Id": "231",
        "Name": "Huyện Hạ Hoà",
        "Wards": [
          { "Id": "08053", "Name": "Thị trấn Hạ Hoà", "Level": "Thị trấn" },
          { "Id": "08056", "Name": "Xã Đại Phạm", "Level": "Xã" },
          { "Id": "08062", "Name": "Xã Đan Thượng", "Level": "Xã" },
          { "Id": "08065", "Name": "Xã Hà Lương", "Level": "Xã" },
          { "Id": "08071", "Name": "Xã Tứ Hiệp", "Level": "Xã" },
          { "Id": "08080", "Name": "Xã Hiền Lương", "Level": "Xã" },
          { "Id": "08089", "Name": "Xã Phương Viên", "Level": "Xã" },
          { "Id": "08092", "Name": "Xã Gia Điền", "Level": "Xã" },
          { "Id": "08095", "Name": "Xã Ấm Hạ", "Level": "Xã" },
          { "Id": "08104", "Name": "Xã Hương Xạ", "Level": "Xã" },
          { "Id": "08110", "Name": "Xã Xuân Áng", "Level": "Xã" },
          { "Id": "08113", "Name": "Xã Yên Kỳ", "Level": "Xã" },
          { "Id": "08119", "Name": "Xã Minh Hạc", "Level": "Xã" },
          { "Id": "08122", "Name": "Xã Lang Sơn", "Level": "Xã" },
          { "Id": "08125", "Name": "Xã Bằng Giã", "Level": "Xã" },
          { "Id": "08128", "Name": "Xã Yên Luật", "Level": "Xã" },
          { "Id": "08131", "Name": "Xã Vô Tranh", "Level": "Xã" },
          { "Id": "08134", "Name": "Xã Văn Lang", "Level": "Xã" },
          { "Id": "08140", "Name": "Xã Minh Côi", "Level": "Xã" },
          { "Id": "08143", "Name": "Xã Vĩnh Chân", "Level": "Xã" }
        ]
      },
      {
        "Id": "232",
        "Name": "Huyện Thanh Ba",
        "Wards": [
          { "Id": "08152", "Name": "Thị trấn Thanh Ba", "Level": "Thị trấn" },
          { "Id": "08156", "Name": "Xã Vân Lĩnh", "Level": "Xã" },
          { "Id": "08158", "Name": "Xã Đông Lĩnh", "Level": "Xã" },
          { "Id": "08161", "Name": "Xã Đại An", "Level": "Xã" },
          { "Id": "08164", "Name": "Xã Hanh Cù", "Level": "Xã" },
          { "Id": "08170", "Name": "Xã Đồng Xuân", "Level": "Xã" },
          { "Id": "08173", "Name": "Xã Quảng Yên", "Level": "Xã" },
          { "Id": "08179", "Name": "Xã Ninh Dân", "Level": "Xã" },
          { "Id": "08194", "Name": "Xã Võ Lao", "Level": "Xã" },
          { "Id": "08197", "Name": "Xã Khải Xuân", "Level": "Xã" },
          { "Id": "08200", "Name": "Xã Mạn Lạn", "Level": "Xã" },
          { "Id": "08203", "Name": "Xã Hoàng Cương", "Level": "Xã" },
          { "Id": "08206", "Name": "Xã Chí Tiên", "Level": "Xã" },
          { "Id": "08209", "Name": "Xã Đông Thành", "Level": "Xã" },
          { "Id": "08215", "Name": "Xã Sơn Cương", "Level": "Xã" },
          { "Id": "08218", "Name": "Xã Thanh Hà", "Level": "Xã" },
          { "Id": "08221", "Name": "Xã Đỗ Sơn", "Level": "Xã" },
          { "Id": "08224", "Name": "Xã Đỗ Xuyên", "Level": "Xã" },
          { "Id": "08227", "Name": "Xã Lương Lỗ", "Level": "Xã" }
        ]
      },
      {
        "Id": "233",
        "Name": "Huyện Phù Ninh",
        "Wards": [
          { "Id": "08230", "Name": "Thị trấn Phong Châu", "Level": "Thị trấn" },
          { "Id": "08233", "Name": "Xã Phú Mỹ", "Level": "Xã" },
          { "Id": "08234", "Name": "Xã Lệ Mỹ", "Level": "Xã" },
          { "Id": "08236", "Name": "Xã Liên Hoa", "Level": "Xã" },
          { "Id": "08239", "Name": "Xã Trạm Thản", "Level": "Xã" },
          { "Id": "08242", "Name": "Xã Trị Quận", "Level": "Xã" },
          { "Id": "08245", "Name": "Xã Trung Giáp", "Level": "Xã" },
          { "Id": "08248", "Name": "Xã Tiên Phú", "Level": "Xã" },
          { "Id": "08251", "Name": "Xã Hạ Giáp", "Level": "Xã" },
          { "Id": "08254", "Name": "Xã Bảo Thanh", "Level": "Xã" },
          { "Id": "08257", "Name": "Xã Phú Lộc", "Level": "Xã" },
          { "Id": "08260", "Name": "Xã Gia Thanh", "Level": "Xã" },
          { "Id": "08263", "Name": "Xã Tiên Du", "Level": "Xã" },
          { "Id": "08266", "Name": "Xã Phú Nham", "Level": "Xã" },
          { "Id": "08272", "Name": "Xã An Đạo", "Level": "Xã" },
          { "Id": "08275", "Name": "Xã Bình Phú", "Level": "Xã" },
          { "Id": "08278", "Name": "Xã Phù Ninh", "Level": "Xã" }
        ]
      },
      {
        "Id": "234",
        "Name": "Huyện Yên Lập",
        "Wards": [
          { "Id": "08290", "Name": "Thị trấn Yên Lập", "Level": "Thị trấn" },
          { "Id": "08293", "Name": "Xã Mỹ Lung", "Level": "Xã" },
          { "Id": "08296", "Name": "Xã Mỹ Lương", "Level": "Xã" },
          { "Id": "08299", "Name": "Xã Lương Sơn", "Level": "Xã" },
          { "Id": "08302", "Name": "Xã Xuân An", "Level": "Xã" },
          { "Id": "08305", "Name": "Xã Xuân Viên", "Level": "Xã" },
          { "Id": "08308", "Name": "Xã Xuân Thủy", "Level": "Xã" },
          { "Id": "08311", "Name": "Xã Trung Sơn", "Level": "Xã" },
          { "Id": "08314", "Name": "Xã Hưng Long", "Level": "Xã" },
          { "Id": "08317", "Name": "Xã Nga Hoàng", "Level": "Xã" },
          { "Id": "08320", "Name": "Xã Đồng Lạc", "Level": "Xã" },
          { "Id": "08323", "Name": "Xã Thượng Long", "Level": "Xã" },
          { "Id": "08326", "Name": "Xã Đồng Thịnh", "Level": "Xã" },
          { "Id": "08329", "Name": "Xã Phúc Khánh", "Level": "Xã" },
          { "Id": "08332", "Name": "Xã Minh Hòa", "Level": "Xã" },
          { "Id": "08335", "Name": "Xã Ngọc Lập", "Level": "Xã" },
          { "Id": "08338", "Name": "Xã Ngọc Đồng", "Level": "Xã" }
        ]
      },
      {
        "Id": "235",
        "Name": "Huyện Cẩm Khê",
        "Wards": [
          { "Id": "08341", "Name": "Thị trấn Cẩm Khê", "Level": "Thị trấn" },
          { "Id": "08344", "Name": "Xã Tiên Lương", "Level": "Xã" },
          { "Id": "08347", "Name": "Xã Tuy Lộc", "Level": "Xã" },
          { "Id": "08350", "Name": "Xã Ngô Xá", "Level": "Xã" },
          { "Id": "08353", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "08356", "Name": "Xã Phượng Vĩ", "Level": "Xã" },
          { "Id": "08362", "Name": "Xã Thụy Liễu", "Level": "Xã" },
          { "Id": "08374", "Name": "Xã Tùng Khê", "Level": "Xã" },
          { "Id": "08377", "Name": "Xã Tam Sơn", "Level": "Xã" },
          { "Id": "08380", "Name": "Xã Văn Bán", "Level": "Xã" },
          { "Id": "08383", "Name": "Xã Cấp Dẫn", "Level": "Xã" },
          { "Id": "08389", "Name": "Xã Xương Thịnh", "Level": "Xã" },
          { "Id": "08392", "Name": "Xã Phú Khê", "Level": "Xã" },
          { "Id": "08395", "Name": "Xã Sơn Tình", "Level": "Xã" },
          { "Id": "08398", "Name": "Xã Yên Tập", "Level": "Xã" },
          { "Id": "08401", "Name": "Xã Hương Lung", "Level": "Xã" },
          { "Id": "08404", "Name": "Xã Tạ Xá", "Level": "Xã" },
          { "Id": "08407", "Name": "Xã Phú Lạc", "Level": "Xã" },
          { "Id": "08413", "Name": "Xã Chương Xá", "Level": "Xã" },
          { "Id": "08416", "Name": "Xã Hùng Việt", "Level": "Xã" },
          { "Id": "08419", "Name": "Xã Văn Khúc", "Level": "Xã" },
          { "Id": "08422", "Name": "Xã Yên Dưỡng", "Level": "Xã" },
          { "Id": "08428", "Name": "Xã Điêu Lương", "Level": "Xã" },
          { "Id": "08431", "Name": "Xã Đồng Lương", "Level": "Xã" }
        ]
      },
      {
        "Id": "236",
        "Name": "Huyện Tam Nông",
        "Wards": [
          { "Id": "08434", "Name": "Thị trấn Hưng Hoá", "Level": "Thị trấn" },
          { "Id": "08440", "Name": "Xã Hiền Quan", "Level": "Xã" },
          { "Id": "08443", "Name": "Xã Bắc Sơn", "Level": "Xã" },
          { "Id": "08446", "Name": "Xã Thanh Uyên", "Level": "Xã" },
          { "Id": "08461", "Name": "Xã Lam Sơn", "Level": "Xã" },
          { "Id": "08467", "Name": "Xã Vạn Xuân", "Level": "Xã" },
          { "Id": "08470", "Name": "Xã Quang Húc", "Level": "Xã" },
          { "Id": "08473", "Name": "Xã Hương Nộn", "Level": "Xã" },
          { "Id": "08476", "Name": "Xã Tề Lễ", "Level": "Xã" },
          { "Id": "08479", "Name": "Xã Thọ Văn", "Level": "Xã" },
          { "Id": "08482", "Name": "Xã Dị Nậu", "Level": "Xã" },
          { "Id": "08491", "Name": "Xã Dân Quyền", "Level": "Xã" }
        ]
      },
      {
        "Id": "237",
        "Name": "Huyện Lâm Thao",
        "Wards": [
          { "Id": "08494", "Name": "Thị trấn Lâm Thao", "Level": "Thị trấn" },
          { "Id": "08497", "Name": "Xã Tiên Kiên", "Level": "Xã" },
          { "Id": "08498", "Name": "Thị trấn Hùng Sơn", "Level": "Thị trấn" },
          { "Id": "08500", "Name": "Xã Xuân Lũng", "Level": "Xã" },
          { "Id": "08509", "Name": "Xã Xuân Huy", "Level": "Xã" },
          { "Id": "08512", "Name": "Xã Thạch Sơn", "Level": "Xã" },
          { "Id": "08518", "Name": "Xã Sơn Vi", "Level": "Xã" },
          { "Id": "08521", "Name": "Xã Phùng Nguyên", "Level": "Xã" },
          { "Id": "08527", "Name": "Xã Cao Xá", "Level": "Xã" },
          { "Id": "08533", "Name": "Xã Vĩnh Lại", "Level": "Xã" },
          { "Id": "08536", "Name": "Xã Tứ Xã", "Level": "Xã" },
          { "Id": "08539", "Name": "Xã Bản Nguyên", "Level": "Xã" }
        ]
      },
      {
        "Id": "238",
        "Name": "Huyện Thanh Sơn",
        "Wards": [
          { "Id": "08542", "Name": "Thị trấn Thanh Sơn", "Level": "Thị trấn" },
          { "Id": "08563", "Name": "Xã Sơn Hùng", "Level": "Xã" },
          { "Id": "08572", "Name": "Xã Địch Quả", "Level": "Xã" },
          { "Id": "08575", "Name": "Xã Giáp Lai", "Level": "Xã" },
          { "Id": "08581", "Name": "Xã Thục Luyện", "Level": "Xã" },
          { "Id": "08584", "Name": "Xã Võ Miếu", "Level": "Xã" },
          { "Id": "08587", "Name": "Xã Thạch Khoán", "Level": "Xã" },
          { "Id": "08602", "Name": "Xã Cự Thắng", "Level": "Xã" },
          { "Id": "08605", "Name": "Xã Tất Thắng", "Level": "Xã" },
          { "Id": "08611", "Name": "Xã Văn Miếu", "Level": "Xã" },
          { "Id": "08614", "Name": "Xã Cự Đồng", "Level": "Xã" },
          { "Id": "08623", "Name": "Xã Thắng Sơn", "Level": "Xã" },
          { "Id": "08629", "Name": "Xã Tân Minh", "Level": "Xã" },
          { "Id": "08632", "Name": "Xã Hương Cần", "Level": "Xã" },
          { "Id": "08635", "Name": "Xã Khả Cửu", "Level": "Xã" },
          { "Id": "08638", "Name": "Xã Đông Cửu", "Level": "Xã" },
          { "Id": "08641", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "08644", "Name": "Xã Yên Lãng", "Level": "Xã" },
          { "Id": "08647", "Name": "Xã Yên Lương", "Level": "Xã" },
          { "Id": "08650", "Name": "Xã Thượng Cửu", "Level": "Xã" },
          { "Id": "08653", "Name": "Xã Lương Nha", "Level": "Xã" },
          { "Id": "08656", "Name": "Xã Yên Sơn", "Level": "Xã" },
          { "Id": "08659", "Name": "Xã Tinh Nhuệ", "Level": "Xã" }
        ]
      },
      {
        "Id": "239",
        "Name": "Huyện Thanh Thuỷ",
        "Wards": [
          { "Id": "08662", "Name": "Xã Đào Xá", "Level": "Xã" },
          { "Id": "08665", "Name": "Xã Thạch Đồng", "Level": "Xã" },
          { "Id": "08668", "Name": "Xã Xuân Lộc", "Level": "Xã" },
          { "Id": "08671", "Name": "Xã Tân Phương", "Level": "Xã" },
          { "Id": "08674", "Name": "Thị trấn Thanh Thủy", "Level": "Thị trấn" },
          { "Id": "08677", "Name": "Xã Sơn Thủy", "Level": "Xã" },
          { "Id": "08680", "Name": "Xã Bảo Yên", "Level": "Xã" },
          { "Id": "08683", "Name": "Xã Đoan Hạ", "Level": "Xã" },
          { "Id": "08686", "Name": "Xã Đồng Trung", "Level": "Xã" },
          { "Id": "08689", "Name": "Xã Hoàng Xá", "Level": "Xã" },
          { "Id": "08701", "Name": "Xã Tu Vũ", "Level": "Xã" }
        ]
      },
      {
        "Id": "240",
        "Name": "Huyện Tân Sơn",
        "Wards": [
          { "Id": "08545", "Name": "Xã Thu Cúc", "Level": "Xã" },
          { "Id": "08548", "Name": "Xã Thạch Kiệt", "Level": "Xã" },
          { "Id": "08551", "Name": "Xã Thu Ngạc", "Level": "Xã" },
          { "Id": "08554", "Name": "Xã Kiệt Sơn", "Level": "Xã" },
          { "Id": "08557", "Name": "Xã Đồng Sơn", "Level": "Xã" },
          { "Id": "08560", "Name": "Xã Lai Đồng", "Level": "Xã" },
          { "Id": "08566", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "08569", "Name": "Xã Mỹ Thuận", "Level": "Xã" },
          { "Id": "08578", "Name": "Xã Tân Sơn", "Level": "Xã" },
          { "Id": "08590", "Name": "Xã Xuân Đài", "Level": "Xã" },
          { "Id": "08593", "Name": "Xã Minh Đài", "Level": "Xã" },
          { "Id": "08596", "Name": "Xã Văn Luông", "Level": "Xã" },
          { "Id": "08599", "Name": "Xã Xuân Sơn", "Level": "Xã" },
          { "Id": "08608", "Name": "Xã Long Cốc", "Level": "Xã" },
          { "Id": "08617", "Name": "Xã Kim Thượng", "Level": "Xã" },
          { "Id": "08620", "Name": "Xã Tam Thanh", "Level": "Xã" },
          { "Id": "08626", "Name": "Xã Vinh Tiền", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "26",
    "Name": "Tỉnh Vĩnh Phúc",
    "Districts": [
      {
        "Id": "243",
        "Name": "Thành phố Vĩnh Yên",
        "Wards": [
          { "Id": "08707", "Name": "Phường Tích Sơn", "Level": "Phường" },
          { "Id": "08710", "Name": "Phường Liên Bảo", "Level": "Phường" },
          { "Id": "08713", "Name": "Phường Hội Hợp", "Level": "Phường" },
          { "Id": "08716", "Name": "Phường Đống Đa", "Level": "Phường" },
          { "Id": "08719", "Name": "Phường Ngô Quyền", "Level": "Phường" },
          { "Id": "08722", "Name": "Phường Đồng Tâm", "Level": "Phường" },
          { "Id": "08725", "Name": "Xã Định Trung", "Level": "Xã" },
          { "Id": "08728", "Name": "Phường Khai Quang", "Level": "Phường" },
          { "Id": "08731", "Name": "Xã Thanh Trù", "Level": "Xã" }
        ]
      },
      {
        "Id": "244",
        "Name": "Thành phố Phúc Yên",
        "Wards": [
          { "Id": "08734", "Name": "Phường Trưng Trắc", "Level": "Phường" },
          { "Id": "08737", "Name": "Phường Hùng Vương", "Level": "Phường" },
          { "Id": "08740", "Name": "Phường Trưng Nhị", "Level": "Phường" },
          { "Id": "08743", "Name": "Phường Phúc Thắng", "Level": "Phường" },
          { "Id": "08746", "Name": "Phường Xuân Hoà", "Level": "Phường" },
          { "Id": "08747", "Name": "Phường Đồng Xuân", "Level": "Phường" },
          { "Id": "08749", "Name": "Xã Ngọc Thanh", "Level": "Xã" },
          { "Id": "08752", "Name": "Xã Cao Minh", "Level": "Xã" },
          { "Id": "08755", "Name": "Phường Nam Viêm", "Level": "Phường" },
          { "Id": "08758", "Name": "Phường Tiền Châu", "Level": "Phường" }
        ]
      },
      {
        "Id": "246",
        "Name": "Huyện Lập Thạch",
        "Wards": [
          { "Id": "08761", "Name": "Thị trấn Lập Thạch", "Level": "Thị trấn" },
          { "Id": "08764", "Name": "Xã Quang Sơn", "Level": "Xã" },
          { "Id": "08767", "Name": "Xã Ngọc Mỹ", "Level": "Xã" },
          { "Id": "08770", "Name": "Xã Hợp Lý", "Level": "Xã" },
          { "Id": "08785", "Name": "Xã Bắc Bình", "Level": "Xã" },
          { "Id": "08788", "Name": "Xã Thái Hòa", "Level": "Xã" },
          { "Id": "08789", "Name": "Thị trấn Hoa Sơn", "Level": "Thị trấn" },
          { "Id": "08791", "Name": "Xã Liễn Sơn", "Level": "Xã" },
          { "Id": "08794", "Name": "Xã Xuân Hòa", "Level": "Xã" },
          { "Id": "08797", "Name": "Xã Vân Trục", "Level": "Xã" },
          { "Id": "08812", "Name": "Xã Liên Hòa", "Level": "Xã" },
          { "Id": "08815", "Name": "Xã Tử Du", "Level": "Xã" },
          { "Id": "08833", "Name": "Xã Bàn Giản", "Level": "Xã" },
          { "Id": "08836", "Name": "Xã Xuân Lôi", "Level": "Xã" },
          { "Id": "08839", "Name": "Xã Đồng Ích", "Level": "Xã" },
          { "Id": "08842", "Name": "Xã Tiên Lữ", "Level": "Xã" },
          { "Id": "08845", "Name": "Xã Văn Quán", "Level": "Xã" },
          { "Id": "08857", "Name": "Xã Đình Chu", "Level": "Xã" },
          { "Id": "08863", "Name": "Xã Triệu Đề", "Level": "Xã" },
          { "Id": "08866", "Name": "Xã Sơn Đông", "Level": "Xã" }
        ]
      },
      {
        "Id": "247",
        "Name": "Huyện Tam Dương",
        "Wards": [
          { "Id": "08869", "Name": "Thị trấn Hợp Hòa", "Level": "Thị trấn" },
          { "Id": "08872", "Name": "Xã Hoàng Hoa", "Level": "Xã" },
          { "Id": "08875", "Name": "Xã Đồng Tĩnh", "Level": "Xã" },
          { "Id": "08878", "Name": "Xã Kim Long", "Level": "Xã" },
          { "Id": "08881", "Name": "Xã Hướng Đạo", "Level": "Xã" },
          { "Id": "08884", "Name": "Xã Đạo Tú", "Level": "Xã" },
          { "Id": "08887", "Name": "Xã An Hòa", "Level": "Xã" },
          { "Id": "08890", "Name": "Xã Thanh Vân", "Level": "Xã" },
          { "Id": "08893", "Name": "Xã Duy Phiên", "Level": "Xã" },
          { "Id": "08896", "Name": "Xã Hoàng Đan", "Level": "Xã" },
          { "Id": "08899", "Name": "Xã Hoàng Lâu", "Level": "Xã" },
          { "Id": "08902", "Name": "Xã Vân Hội", "Level": "Xã" },
          { "Id": "08905", "Name": "Xã Hợp Thịnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "248",
        "Name": "Huyện Tam Đảo",
        "Wards": [
          { "Id": "08908", "Name": "Thị trấn Tam Đảo", "Level": "Thị trấn" },
          { "Id": "08911", "Name": "Thị trấn Hợp Châu", "Level": "Thị trấn" },
          { "Id": "08914", "Name": "Xã Đạo Trù", "Level": "Xã" },
          { "Id": "08917", "Name": "Xã Yên Dương", "Level": "Xã" },
          { "Id": "08920", "Name": "Xã Bồ Lý", "Level": "Xã" },
          { "Id": "08923", "Name": "Thị trấn Đại Đình", "Level": "Thị trấn" },
          { "Id": "08926", "Name": "Xã Tam Quan", "Level": "Xã" },
          { "Id": "08929", "Name": "Xã Hồ Sơn", "Level": "Xã" },
          { "Id": "08932", "Name": "Xã Minh Quang", "Level": "Xã" }
        ]
      },
      {
        "Id": "249",
        "Name": "Huyện Bình Xuyên",
        "Wards": [
          { "Id": "08935", "Name": "Thị trấn Hương Canh", "Level": "Thị trấn" },
          { "Id": "08936", "Name": "Thị trấn Gia Khánh", "Level": "Thị trấn" },
          { "Id": "08938", "Name": "Xã Trung Mỹ", "Level": "Xã" },
          { "Id": "08944", "Name": "Thị trấn Bá Hiến", "Level": "Thị trấn" },
          { "Id": "08947", "Name": "Xã Thiện Kế", "Level": "Xã" },
          { "Id": "08950", "Name": "Xã Hương Sơn", "Level": "Xã" },
          { "Id": "08953", "Name": "Xã Tam Hợp", "Level": "Xã" },
          { "Id": "08956", "Name": "Xã Quất Lưu", "Level": "Xã" },
          { "Id": "08959", "Name": "Xã Sơn Lôi", "Level": "Xã" },
          { "Id": "08962", "Name": "Thị trấn Đạo Đức", "Level": "Thị trấn" },
          { "Id": "08965", "Name": "Xã Tân Phong", "Level": "Xã" },
          { "Id": "08968", "Name": "Thị trấn Thanh Lãng", "Level": "Thị trấn" },
          { "Id": "08971", "Name": "Xã Phú Xuân", "Level": "Xã" }
        ]
      },
      {
        "Id": "251",
        "Name": "Huyện Yên Lạc",
        "Wards": [
          { "Id": "09025", "Name": "Thị trấn Yên Lạc", "Level": "Thị trấn" },
          { "Id": "09028", "Name": "Xã Đồng Cương", "Level": "Xã" },
          { "Id": "09031", "Name": "Xã Đồng Văn", "Level": "Xã" },
          { "Id": "09034", "Name": "Xã Bình Định", "Level": "Xã" },
          { "Id": "09037", "Name": "Xã Trung Nguyên", "Level": "Xã" },
          { "Id": "09040", "Name": "Xã Tề Lỗ", "Level": "Xã" },
          { "Id": "09043", "Name": "Xã Tam Hồng", "Level": "Xã" },
          { "Id": "09046", "Name": "Xã Yên Đồng", "Level": "Xã" },
          { "Id": "09049", "Name": "Xã Văn Tiến", "Level": "Xã" },
          { "Id": "09052", "Name": "Xã Nguyệt Đức", "Level": "Xã" },
          { "Id": "09055", "Name": "Xã Yên Phương", "Level": "Xã" },
          { "Id": "09058", "Name": "Xã Hồng Phương", "Level": "Xã" },
          { "Id": "09061", "Name": "Xã Trung Kiên", "Level": "Xã" },
          { "Id": "09064", "Name": "Xã Liên Châu", "Level": "Xã" },
          { "Id": "09067", "Name": "Xã Đại Tự", "Level": "Xã" },
          { "Id": "09070", "Name": "Xã Hồng Châu", "Level": "Xã" },
          { "Id": "09073", "Name": "Xã Trung Hà", "Level": "Xã" }
        ]
      },
      {
        "Id": "252",
        "Name": "Huyện Vĩnh Tường",
        "Wards": [
          { "Id": "09076", "Name": "Thị trấn Vĩnh Tường", "Level": "Thị trấn" },
          { "Id": "09079", "Name": "Xã Kim Xá", "Level": "Xã" },
          { "Id": "09082", "Name": "Xã Yên Bình", "Level": "Xã" },
          { "Id": "09085", "Name": "Xã Chấn Hưng", "Level": "Xã" },
          { "Id": "09088", "Name": "Xã Nghĩa Hưng", "Level": "Xã" },
          { "Id": "09091", "Name": "Xã Yên Lập", "Level": "Xã" },
          { "Id": "09094", "Name": "Xã Việt Xuân", "Level": "Xã" },
          { "Id": "09097", "Name": "Xã Bồ Sao", "Level": "Xã" },
          { "Id": "09100", "Name": "Xã Đại Đồng", "Level": "Xã" },
          { "Id": "09103", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "09106", "Name": "Xã Lũng Hoà", "Level": "Xã" },
          { "Id": "09109", "Name": "Xã Cao Đại", "Level": "Xã" },
          { "Id": "09112", "Name": "Thị Trấn Thổ Tang", "Level": "Thị trấn" },
          { "Id": "09115", "Name": "Xã Vĩnh Sơn", "Level": "Xã" },
          { "Id": "09118", "Name": "Xã Bình Dương", "Level": "Xã" },
          { "Id": "09124", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "09127", "Name": "Xã Thượng Trưng", "Level": "Xã" },
          { "Id": "09130", "Name": "Xã Vũ Di", "Level": "Xã" },
          { "Id": "09133", "Name": "Xã Lý Nhân", "Level": "Xã" },
          { "Id": "09136", "Name": "Xã Tuân Chính", "Level": "Xã" },
          { "Id": "09139", "Name": "Xã Vân Xuân", "Level": "Xã" },
          { "Id": "09142", "Name": "Xã Tam Phúc", "Level": "Xã" },
          { "Id": "09145", "Name": "Thị trấn Tứ Trưng", "Level": "Thị trấn" },
          { "Id": "09148", "Name": "Xã Ngũ Kiên", "Level": "Xã" },
          { "Id": "09151", "Name": "Xã An Tường", "Level": "Xã" },
          { "Id": "09154", "Name": "Xã Vĩnh Thịnh", "Level": "Xã" },
          { "Id": "09157", "Name": "Xã Phú Đa", "Level": "Xã" },
          { "Id": "09160", "Name": "Xã Vĩnh Ninh", "Level": "Xã" }
        ]
      },
      {
        "Id": "253",
        "Name": "Huyện Sông Lô",
        "Wards": [
          { "Id": "08773", "Name": "Xã Lãng Công", "Level": "Xã" },
          { "Id": "08776", "Name": "Xã Quang Yên", "Level": "Xã" },
          { "Id": "08779", "Name": "Xã Bạch Lưu", "Level": "Xã" },
          { "Id": "08782", "Name": "Xã Hải Lựu", "Level": "Xã" },
          { "Id": "08800", "Name": "Xã Đồng Quế", "Level": "Xã" },
          { "Id": "08803", "Name": "Xã Nhân Đạo", "Level": "Xã" },
          { "Id": "08806", "Name": "Xã Đôn Nhân", "Level": "Xã" },
          { "Id": "08809", "Name": "Xã Phương Khoan", "Level": "Xã" },
          { "Id": "08818", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "08821", "Name": "Xã Nhạo Sơn", "Level": "Xã" },
          { "Id": "08824", "Name": "Thị trấn Tam Sơn", "Level": "Thị trấn" },
          { "Id": "08827", "Name": "Xã Như Thụy", "Level": "Xã" },
          { "Id": "08830", "Name": "Xã Yên Thạch", "Level": "Xã" },
          { "Id": "08848", "Name": "Xã Đồng Thịnh", "Level": "Xã" },
          { "Id": "08851", "Name": "Xã Tứ Yên", "Level": "Xã" },
          { "Id": "08854", "Name": "Xã Đức Bác", "Level": "Xã" },
          { "Id": "08860", "Name": "Xã Cao Phong", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "27",
    "Name": "Tỉnh Bắc Ninh",
    "Districts": [
      {
        "Id": "256",
        "Name": "Thành phố Bắc Ninh",
        "Wards": [
          { "Id": "09163", "Name": "Phường Vũ Ninh", "Level": "Phường" },
          { "Id": "09166", "Name": "Phường Đáp Cầu", "Level": "Phường" },
          { "Id": "09169", "Name": "Phường Thị Cầu", "Level": "Phường" },
          { "Id": "09172", "Name": "Phường Kinh Bắc", "Level": "Phường" },
          { "Id": "09175", "Name": "Phường Vệ An", "Level": "Phường" },
          { "Id": "09178", "Name": "Phường Tiền An", "Level": "Phường" },
          { "Id": "09181", "Name": "Phường Đại Phúc", "Level": "Phường" },
          { "Id": "09184", "Name": "Phường Ninh Xá", "Level": "Phường" },
          { "Id": "09187", "Name": "Phường Suối Hoa", "Level": "Phường" },
          { "Id": "09190", "Name": "Phường Võ Cường", "Level": "Phường" },
          { "Id": "09214", "Name": "Phường Hòa Long", "Level": "Phường" },
          { "Id": "09226", "Name": "Phường Vạn An", "Level": "Phường" },
          { "Id": "09235", "Name": "Phường Khúc Xuyên", "Level": "Phường" },
          { "Id": "09244", "Name": "Phường Phong Khê", "Level": "Phường" },
          { "Id": "09256", "Name": "Phường Kim Chân", "Level": "Phường" },
          { "Id": "09271", "Name": "Phường Vân Dương", "Level": "Phường" },
          { "Id": "09286", "Name": "Phường Nam Sơn", "Level": "Phường" },
          { "Id": "09325", "Name": "Phường Khắc Niệm", "Level": "Phường" },
          { "Id": "09331", "Name": "Phường Hạp Lĩnh", "Level": "Phường" }
        ]
      },
      {
        "Id": "258",
        "Name": "Huyện Yên Phong",
        "Wards": [
          { "Id": "09193", "Name": "Thị trấn Chờ", "Level": "Thị trấn" },
          { "Id": "09196", "Name": "Xã Dũng Liệt", "Level": "Xã" },
          { "Id": "09199", "Name": "Xã Tam Đa", "Level": "Xã" },
          { "Id": "09202", "Name": "Xã Tam Giang", "Level": "Xã" },
          { "Id": "09205", "Name": "Xã Yên Trung", "Level": "Xã" },
          { "Id": "09208", "Name": "Xã Thụy Hòa", "Level": "Xã" },
          { "Id": "09211", "Name": "Xã Hòa Tiến", "Level": "Xã" },
          { "Id": "09217", "Name": "Xã Đông Tiến", "Level": "Xã" },
          { "Id": "09220", "Name": "Xã Yên Phụ", "Level": "Xã" },
          { "Id": "09223", "Name": "Xã Trung Nghĩa", "Level": "Xã" },
          { "Id": "09229", "Name": "Xã Đông Phong", "Level": "Xã" },
          { "Id": "09232", "Name": "Xã Long Châu", "Level": "Xã" },
          { "Id": "09238", "Name": "Xã Văn Môn", "Level": "Xã" },
          { "Id": "09241", "Name": "Xã Đông Thọ", "Level": "Xã" }
        ]
      },
      {
        "Id": "259",
        "Name": "Huyện Quế Võ",
        "Wards": [
          { "Id": "09247", "Name": "Thị trấn Phố Mới", "Level": "Thị trấn" },
          { "Id": "09250", "Name": "Xã Việt Thống", "Level": "Xã" },
          { "Id": "09253", "Name": "Xã Đại Xuân", "Level": "Xã" },
          { "Id": "09259", "Name": "Xã Nhân Hòa", "Level": "Xã" },
          { "Id": "09262", "Name": "Xã Bằng An", "Level": "Xã" },
          { "Id": "09265", "Name": "Xã Phương Liễu", "Level": "Xã" },
          { "Id": "09268", "Name": "Xã Quế Tân", "Level": "Xã" },
          { "Id": "09274", "Name": "Xã Phù Lương", "Level": "Xã" },
          { "Id": "09277", "Name": "Xã Phù Lãng", "Level": "Xã" },
          { "Id": "09280", "Name": "Xã Phượng Mao", "Level": "Xã" },
          { "Id": "09283", "Name": "Xã Việt Hùng", "Level": "Xã" },
          { "Id": "09289", "Name": "Xã Ngọc Xá", "Level": "Xã" },
          { "Id": "09292", "Name": "Xã Châu Phong", "Level": "Xã" },
          { "Id": "09295", "Name": "Xã Bồng Lai", "Level": "Xã" },
          { "Id": "09298", "Name": "Xã Cách Bi", "Level": "Xã" },
          { "Id": "09301", "Name": "Xã Đào Viên", "Level": "Xã" },
          { "Id": "09304", "Name": "Xã Yên Giả", "Level": "Xã" },
          { "Id": "09307", "Name": "Xã Mộ Đạo", "Level": "Xã" },
          { "Id": "09310", "Name": "Xã Đức Long", "Level": "Xã" },
          { "Id": "09313", "Name": "Xã Chi Lăng", "Level": "Xã" },
          { "Id": "09316", "Name": "Xã Hán Quảng", "Level": "Xã" }
        ]
      },
      {
        "Id": "260",
        "Name": "Huyện Tiên Du",
        "Wards": [
          { "Id": "09319", "Name": "Thị trấn Lim", "Level": "Thị trấn" },
          { "Id": "09322", "Name": "Xã Phú Lâm", "Level": "Xã" },
          { "Id": "09328", "Name": "Xã Nội Duệ", "Level": "Xã" },
          { "Id": "09334", "Name": "Xã Liên Bão", "Level": "Xã" },
          { "Id": "09337", "Name": "Xã Hiên Vân", "Level": "Xã" },
          { "Id": "09340", "Name": "Xã Hoàn Sơn", "Level": "Xã" },
          { "Id": "09343", "Name": "Xã Lạc Vệ", "Level": "Xã" },
          { "Id": "09346", "Name": "Xã Việt Đoàn", "Level": "Xã" },
          { "Id": "09349", "Name": "Xã Phật Tích", "Level": "Xã" },
          { "Id": "09352", "Name": "Xã Tân Chi", "Level": "Xã" },
          { "Id": "09355", "Name": "Xã Đại Đồng", "Level": "Xã" },
          { "Id": "09358", "Name": "Xã Tri Phương", "Level": "Xã" },
          { "Id": "09361", "Name": "Xã Minh Đạo", "Level": "Xã" },
          { "Id": "09364", "Name": "Xã Cảnh Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "261",
        "Name": "Thị xã Từ Sơn",
        "Wards": [
          { "Id": "09367", "Name": "Phường Đông Ngàn", "Level": "Phường" },
          { "Id": "09370", "Name": "Xã Tam Sơn", "Level": "Xã" },
          { "Id": "09373", "Name": "Xã Hương Mạc", "Level": "Xã" },
          { "Id": "09376", "Name": "Xã Tương Giang", "Level": "Xã" },
          { "Id": "09379", "Name": "Xã Phù Khê", "Level": "Xã" },
          { "Id": "09382", "Name": "Phường Đồng Kỵ", "Level": "Phường" },
          { "Id": "09383", "Name": "Phường Trang Hạ", "Level": "Phường" },
          { "Id": "09385", "Name": "Phường Đồng Nguyên", "Level": "Phường" },
          { "Id": "09388", "Name": "Phường Châu Khê", "Level": "Phường" },
          { "Id": "09391", "Name": "Phường Tân Hồng", "Level": "Phường" },
          { "Id": "09394", "Name": "Phường Đình Bảng", "Level": "Phường" },
          { "Id": "09397", "Name": "Xã Phù Chẩn", "Level": "Xã" }
        ]
      },
      {
        "Id": "262",
        "Name": "Huyện Thuận Thành",
        "Wards": [
          { "Id": "09400", "Name": "Thị trấn Hồ", "Level": "Thị trấn" },
          { "Id": "09403", "Name": "Xã Hoài Thượng", "Level": "Xã" },
          { "Id": "09406", "Name": "Xã Đại Đồng Thành", "Level": "Xã" },
          { "Id": "09409", "Name": "Xã Mão Điền", "Level": "Xã" },
          { "Id": "09412", "Name": "Xã Song Hồ", "Level": "Xã" },
          { "Id": "09415", "Name": "Xã Đình Tổ", "Level": "Xã" },
          { "Id": "09418", "Name": "Xã An Bình", "Level": "Xã" },
          { "Id": "09421", "Name": "Xã Trí Quả", "Level": "Xã" },
          { "Id": "09424", "Name": "Xã Gia Đông", "Level": "Xã" },
          { "Id": "09427", "Name": "Xã Thanh Khương", "Level": "Xã" },
          { "Id": "09430", "Name": "Xã Trạm Lộ", "Level": "Xã" },
          { "Id": "09433", "Name": "Xã Xuân Lâm", "Level": "Xã" },
          { "Id": "09436", "Name": "Xã Hà Mãn", "Level": "Xã" },
          { "Id": "09439", "Name": "Xã Ngũ Thái", "Level": "Xã" },
          { "Id": "09442", "Name": "Xã Nguyệt Đức", "Level": "Xã" },
          { "Id": "09445", "Name": "Xã Ninh Xá", "Level": "Xã" },
          { "Id": "09448", "Name": "Xã Nghĩa Đạo", "Level": "Xã" },
          { "Id": "09451", "Name": "Xã Song Liễu", "Level": "Xã" }
        ]
      },
      {
        "Id": "263",
        "Name": "Huyện Gia Bình",
        "Wards": [
          { "Id": "09454", "Name": "Thị trấn Gia Bình", "Level": "Thị trấn" },
          { "Id": "09457", "Name": "Xã Vạn Ninh", "Level": "Xã" },
          { "Id": "09460", "Name": "Xã Thái Bảo", "Level": "Xã" },
          { "Id": "09463", "Name": "Xã Giang Sơn", "Level": "Xã" },
          { "Id": "09466", "Name": "Xã Cao Đức", "Level": "Xã" },
          { "Id": "09469", "Name": "Xã Đại Lai", "Level": "Xã" },
          { "Id": "09472", "Name": "Xã Song Giang", "Level": "Xã" },
          { "Id": "09475", "Name": "Xã Bình Dương", "Level": "Xã" },
          { "Id": "09478", "Name": "Xã Lãng Ngâm", "Level": "Xã" },
          { "Id": "09481", "Name": "Xã Nhân Thắng", "Level": "Xã" },
          { "Id": "09484", "Name": "Xã Xuân Lai", "Level": "Xã" },
          { "Id": "09487", "Name": "Xã Đông Cứu", "Level": "Xã" },
          { "Id": "09490", "Name": "Xã Đại Bái", "Level": "Xã" },
          { "Id": "09493", "Name": "Xã Quỳnh Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "264",
        "Name": "Huyện Lương Tài",
        "Wards": [
          { "Id": "09496", "Name": "Thị trấn Thứa", "Level": "Thị trấn" },
          { "Id": "09499", "Name": "Xã An Thịnh", "Level": "Xã" },
          { "Id": "09502", "Name": "Xã Trung Kênh", "Level": "Xã" },
          { "Id": "09505", "Name": "Xã Phú Hòa", "Level": "Xã" },
          { "Id": "09508", "Name": "Xã Mỹ Hương", "Level": "Xã" },
          { "Id": "09511", "Name": "Xã Tân Lãng", "Level": "Xã" },
          { "Id": "09514", "Name": "Xã Quảng Phú", "Level": "Xã" },
          { "Id": "09517", "Name": "Xã Trừng Xá", "Level": "Xã" },
          { "Id": "09520", "Name": "Xã Lai Hạ", "Level": "Xã" },
          { "Id": "09523", "Name": "Xã Trung Chính", "Level": "Xã" },
          { "Id": "09526", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "09529", "Name": "Xã Bình Định", "Level": "Xã" },
          { "Id": "09532", "Name": "Xã Phú Lương", "Level": "Xã" },
          { "Id": "09535", "Name": "Xã Lâm Thao", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "30",
    "Name": "Tỉnh Hải Dương",
    "Districts": [
      {
        "Id": "288",
        "Name": "Thành phố Hải Dương",
        "Wards": [
          { "Id": "10507", "Name": "Phường Cẩm Thượng", "Level": "Phường" },
          { "Id": "10510", "Name": "Phường Bình Hàn", "Level": "Phường" },
          { "Id": "10513", "Name": "Phường Ngọc Châu", "Level": "Phường" },
          { "Id": "10514", "Name": "Phường Nhị Châu", "Level": "Phường" },
          { "Id": "10516", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "10519", "Name": "Phường Nguyễn Trãi", "Level": "Phường" },
          { "Id": "10522", "Name": "Phường Phạm Ngũ Lão", "Level": "Phường" },
          { "Id": "10525", "Name": "Phường Trần Hưng Đạo", "Level": "Phường" },
          { "Id": "10528", "Name": "Phường Trần Phú", "Level": "Phường" },
          { "Id": "10531", "Name": "Phường Thanh Bình", "Level": "Phường" },
          { "Id": "10532", "Name": "Phường Tân Bình", "Level": "Phường" },
          { "Id": "10534", "Name": "Phường Lê Thanh Nghị", "Level": "Phường" },
          { "Id": "10537", "Name": "Phường Hải Tân", "Level": "Phường" },
          { "Id": "10540", "Name": "Phường Tứ Minh", "Level": "Phường" },
          { "Id": "10543", "Name": "Phường Việt Hoà", "Level": "Phường" },
          { "Id": "10660", "Name": "Phường Ái Quốc", "Level": "Phường" },
          { "Id": "10663", "Name": "Xã An Thượng", "Level": "Xã" },
          { "Id": "10672", "Name": "Phường Nam Đồng", "Level": "Phường" },
          { "Id": "10822", "Name": "Xã Quyết Thắng", "Level": "Xã" },
          { "Id": "10837", "Name": "Xã Tiền Tiến", "Level": "Xã" },
          { "Id": "11002", "Name": "Phường Thạch Khôi", "Level": "Phường" },
          { "Id": "11005", "Name": "Xã Liên Hồng", "Level": "Xã" },
          { "Id": "11011", "Name": "Phường Tân Hưng", "Level": "Phường" },
          { "Id": "11017", "Name": "Xã Gia Xuyên", "Level": "Xã" },
          { "Id": "11077", "Name": "Xã Ngọc Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "290",
        "Name": "Thành phố Chí Linh",
        "Wards": [
          { "Id": "10546", "Name": "Phường Phả Lại", "Level": "Phường" },
          { "Id": "10549", "Name": "Phường Sao Đỏ", "Level": "Phường" },
          { "Id": "10552", "Name": "Phường Bến Tắm", "Level": "Phường" },
          { "Id": "10555", "Name": "Xã Hoàng Hoa Thám", "Level": "Xã" },
          { "Id": "10558", "Name": "Xã Bắc An", "Level": "Xã" },
          { "Id": "10561", "Name": "Xã Hưng Đạo", "Level": "Xã" },
          { "Id": "10564", "Name": "Xã Lê Lợi", "Level": "Xã" },
          { "Id": "10567", "Name": "Phường Hoàng Tiến", "Level": "Phường" },
          { "Id": "10570", "Name": "Phường Cộng Hoà", "Level": "Phường" },
          { "Id": "10573", "Name": "Phường Hoàng Tân", "Level": "Phường" },
          { "Id": "10576", "Name": "Phường Cổ Thành", "Level": "Phường" },
          { "Id": "10579", "Name": "Phường Văn An", "Level": "Phường" },
          { "Id": "10582", "Name": "Phường Chí Minh", "Level": "Phường" },
          { "Id": "10585", "Name": "Phường Văn Đức", "Level": "Phường" },
          { "Id": "10588", "Name": "Phường Thái Học", "Level": "Phường" },
          { "Id": "10591", "Name": "Xã Nhân Huệ", "Level": "Xã" },
          { "Id": "10594", "Name": "Phường An Lạc", "Level": "Phường" },
          { "Id": "10600", "Name": "Phường Đồng Lạc", "Level": "Phường" },
          { "Id": "10603", "Name": "Phường Tân Dân", "Level": "Phường" }
        ]
      },
      {
        "Id": "291",
        "Name": "Huyện Nam Sách",
        "Wards": [
          { "Id": "10606", "Name": "Thị trấn Nam Sách", "Level": "Thị trấn" },
          { "Id": "10609", "Name": "Xã Nam Hưng", "Level": "Xã" },
          { "Id": "10612", "Name": "Xã Nam Tân", "Level": "Xã" },
          { "Id": "10615", "Name": "Xã Hợp Tiến", "Level": "Xã" },
          { "Id": "10618", "Name": "Xã Hiệp Cát", "Level": "Xã" },
          { "Id": "10621", "Name": "Xã Thanh Quang", "Level": "Xã" },
          { "Id": "10624", "Name": "Xã Quốc Tuấn", "Level": "Xã" },
          { "Id": "10627", "Name": "Xã Nam Chính", "Level": "Xã" },
          { "Id": "10630", "Name": "Xã An Bình", "Level": "Xã" },
          { "Id": "10633", "Name": "Xã Nam Trung", "Level": "Xã" },
          { "Id": "10636", "Name": "Xã An Sơn", "Level": "Xã" },
          { "Id": "10639", "Name": "Xã Cộng Hòa", "Level": "Xã" },
          { "Id": "10642", "Name": "Xã Thái Tân", "Level": "Xã" },
          { "Id": "10645", "Name": "Xã An Lâm", "Level": "Xã" },
          { "Id": "10648", "Name": "Xã Phú Điền", "Level": "Xã" },
          { "Id": "10651", "Name": "Xã Nam Hồng", "Level": "Xã" },
          { "Id": "10654", "Name": "Xã Hồng Phong", "Level": "Xã" },
          { "Id": "10657", "Name": "Xã Đồng Lạc", "Level": "Xã" },
          { "Id": "10666", "Name": "Xã Minh Tân", "Level": "Xã" }
        ]
      },
      {
        "Id": "292",
        "Name": "Thị xã Kinh Môn",
        "Wards": [
          { "Id": "10675", "Name": "Phường An Lưu", "Level": "Phường" },
          { "Id": "10678", "Name": "Xã Bạch Đằng", "Level": "Xã" },
          { "Id": "10681", "Name": "Phường Thất Hùng", "Level": "Phường" },
          { "Id": "10684", "Name": "Xã Lê Ninh", "Level": "Xã" },
          { "Id": "10687", "Name": "Xã Hoành Sơn", "Level": "Xã" },
          { "Id": "10693", "Name": "Phường Phạm Thái", "Level": "Phường" },
          { "Id": "10696", "Name": "Phường Duy Tân", "Level": "Phường" },
          { "Id": "10699", "Name": "Phường Tân Dân", "Level": "Phường" },
          { "Id": "10702", "Name": "Phường Minh Tân", "Level": "Phường" },
          { "Id": "10705", "Name": "Xã Quang Thành", "Level": "Xã" },
          { "Id": "10708", "Name": "Xã Hiệp Hòa", "Level": "Xã" },
          { "Id": "10714", "Name": "Phường Phú Thứ", "Level": "Phường" },
          { "Id": "10717", "Name": "Xã Thăng Long", "Level": "Xã" },
          { "Id": "10720", "Name": "Xã Lạc Long", "Level": "Xã" },
          { "Id": "10723", "Name": "Phường An Sinh", "Level": "Phường" },
          { "Id": "10726", "Name": "Phường Hiệp Sơn", "Level": "Phường" },
          { "Id": "10729", "Name": "Xã Thượng Quận", "Level": "Xã" },
          { "Id": "10732", "Name": "Phường An Phụ", "Level": "Phường" },
          { "Id": "10735", "Name": "Phường Hiệp An", "Level": "Phường" },
          { "Id": "10738", "Name": "Phường Long Xuyên", "Level": "Phường" },
          { "Id": "10741", "Name": "Phường Thái Thịnh", "Level": "Phường" },
          { "Id": "10744", "Name": "Phường Hiến Thành", "Level": "Phường" },
          { "Id": "10747", "Name": "Xã Minh Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "293",
        "Name": "Huyện Kim Thành",
        "Wards": [
          { "Id": "10750", "Name": "Thị trấn Phú Thái", "Level": "Thị trấn" },
          { "Id": "10753", "Name": "Xã Lai Vu", "Level": "Xã" },
          { "Id": "10756", "Name": "Xã Cộng Hòa", "Level": "Xã" },
          { "Id": "10759", "Name": "Xã Thượng Vũ", "Level": "Xã" },
          { "Id": "10762", "Name": "Xã Cổ Dũng", "Level": "Xã" },
          { "Id": "10768", "Name": "Xã Tuấn Việt", "Level": "Xã" },
          { "Id": "10771", "Name": "Xã Kim Xuyên", "Level": "Xã" },
          { "Id": "10774", "Name": "Xã Phúc Thành A", "Level": "Xã" },
          { "Id": "10777", "Name": "Xã Ngũ Phúc", "Level": "Xã" },
          { "Id": "10780", "Name": "Xã Kim Anh", "Level": "Xã" },
          { "Id": "10783", "Name": "Xã Kim Liên", "Level": "Xã" },
          { "Id": "10786", "Name": "Xã Kim Tân", "Level": "Xã" },
          { "Id": "10792", "Name": "Xã Kim Đính", "Level": "Xã" },
          { "Id": "10798", "Name": "Xã Bình Dân", "Level": "Xã" },
          { "Id": "10801", "Name": "Xã Tam Kỳ", "Level": "Xã" },
          { "Id": "10804", "Name": "Xã Đồng Cẩm", "Level": "Xã" },
          { "Id": "10807", "Name": "Xã Liên Hòa", "Level": "Xã" },
          { "Id": "10810", "Name": "Xã Đại Đức", "Level": "Xã" }
        ]
      },
      {
        "Id": "294",
        "Name": "Huyện Thanh Hà",
        "Wards": [
          { "Id": "10813", "Name": "Thị trấn Thanh Hà", "Level": "Thị trấn" },
          { "Id": "10816", "Name": "Xã Hồng Lạc", "Level": "Xã" },
          { "Id": "10819", "Name": "Xã Việt Hồng", "Level": "Xã" },
          { "Id": "10825", "Name": "Xã Tân Việt", "Level": "Xã" },
          { "Id": "10828", "Name": "Xã Cẩm Chế", "Level": "Xã" },
          { "Id": "10831", "Name": "Xã Thanh An", "Level": "Xã" },
          { "Id": "10834", "Name": "Xã Thanh Lang", "Level": "Xã" },
          { "Id": "10840", "Name": "Xã Tân An", "Level": "Xã" },
          { "Id": "10843", "Name": "Xã Liên Mạc", "Level": "Xã" },
          { "Id": "10846", "Name": "Xã Thanh Hải", "Level": "Xã" },
          { "Id": "10849", "Name": "Xã Thanh Khê", "Level": "Xã" },
          { "Id": "10852", "Name": "Xã Thanh Xá", "Level": "Xã" },
          { "Id": "10855", "Name": "Xã Thanh Xuân", "Level": "Xã" },
          { "Id": "10861", "Name": "Xã Thanh Thủy", "Level": "Xã" },
          { "Id": "10864", "Name": "Xã An Phượng", "Level": "Xã" },
          { "Id": "10867", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "10876", "Name": "Xã Thanh Quang", "Level": "Xã" },
          { "Id": "10879", "Name": "Xã Thanh Hồng", "Level": "Xã" },
          { "Id": "10882", "Name": "Xã Thanh Cường", "Level": "Xã" },
          { "Id": "10885", "Name": "Xã Vĩnh Lập", "Level": "Xã" }
        ]
      },
      {
        "Id": "295",
        "Name": "Huyện Cẩm Giàng",
        "Wards": [
          { "Id": "10888", "Name": "Thị trấn Cẩm Giang", "Level": "Thị trấn" },
          { "Id": "10891", "Name": "Thị trấn Lai Cách", "Level": "Thị trấn" },
          { "Id": "10894", "Name": "Xã Cẩm Hưng", "Level": "Xã" },
          { "Id": "10897", "Name": "Xã Cẩm Hoàng", "Level": "Xã" },
          { "Id": "10900", "Name": "Xã Cẩm Văn", "Level": "Xã" },
          { "Id": "10903", "Name": "Xã Ngọc Liên", "Level": "Xã" },
          { "Id": "10906", "Name": "Xã Thạch Lỗi", "Level": "Xã" },
          { "Id": "10909", "Name": "Xã Cẩm Vũ", "Level": "Xã" },
          { "Id": "10912", "Name": "Xã Đức Chính", "Level": "Xã" },
          { "Id": "10918", "Name": "Xã Định Sơn", "Level": "Xã" },
          { "Id": "10924", "Name": "Xã Lương Điền", "Level": "Xã" },
          { "Id": "10927", "Name": "Xã Cao An", "Level": "Xã" },
          { "Id": "10930", "Name": "Xã Tân Trường", "Level": "Xã" },
          { "Id": "10933", "Name": "Xã Cẩm Phúc", "Level": "Xã" },
          { "Id": "10936", "Name": "Xã Cẩm Điền", "Level": "Xã" },
          { "Id": "10939", "Name": "Xã Cẩm Đông", "Level": "Xã" },
          { "Id": "10942", "Name": "Xã Cẩm Đoài", "Level": "Xã" }
        ]
      },
      {
        "Id": "296",
        "Name": "Huyện Bình Giang",
        "Wards": [
          { "Id": "10945", "Name": "Thị trấn Kẻ Sặt", "Level": "Thị trấn" },
          { "Id": "10951", "Name": "Xã Vĩnh Hưng", "Level": "Xã" },
          { "Id": "10954", "Name": "Xã Hùng Thắng", "Level": "Xã" },
          { "Id": "10960", "Name": "Xã Vĩnh Hồng", "Level": "Xã" },
          { "Id": "10963", "Name": "Xã Long Xuyên", "Level": "Xã" },
          { "Id": "10966", "Name": "Xã Tân Việt", "Level": "Xã" },
          { "Id": "10969", "Name": "Xã Thúc Kháng", "Level": "Xã" },
          { "Id": "10972", "Name": "Xã Tân Hồng", "Level": "Xã" },
          { "Id": "10975", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "10978", "Name": "Xã Hồng Khê", "Level": "Xã" },
          { "Id": "10981", "Name": "Xã Thái Học", "Level": "Xã" },
          { "Id": "10984", "Name": "Xã Cổ Bì", "Level": "Xã" },
          { "Id": "10987", "Name": "Xã Nhân Quyền", "Level": "Xã" },
          { "Id": "10990", "Name": "Xã Thái Dương", "Level": "Xã" },
          { "Id": "10993", "Name": "Xã Thái Hòa", "Level": "Xã" },
          { "Id": "10996", "Name": "Xã Bình Xuyên", "Level": "Xã" }
        ]
      },
      {
        "Id": "297",
        "Name": "Huyện Gia Lộc",
        "Wards": [
          { "Id": "10999", "Name": "Thị trấn Gia Lộc", "Level": "Thị trấn" },
          { "Id": "11008", "Name": "Xã Thống Nhất", "Level": "Xã" },
          { "Id": "11020", "Name": "Xã Yết Kiêu", "Level": "Xã" },
          { "Id": "11029", "Name": "Xã Gia Tân", "Level": "Xã" },
          { "Id": "11032", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "11035", "Name": "Xã Gia Khánh", "Level": "Xã" },
          { "Id": "11038", "Name": "Xã Gia Lương", "Level": "Xã" },
          { "Id": "11041", "Name": "Xã Lê Lợi", "Level": "Xã" },
          { "Id": "11044", "Name": "Xã Toàn Thắng", "Level": "Xã" },
          { "Id": "11047", "Name": "Xã Hoàng Diệu", "Level": "Xã" },
          { "Id": "11050", "Name": "Xã Hồng Hưng", "Level": "Xã" },
          { "Id": "11053", "Name": "Xã Phạm Trấn", "Level": "Xã" },
          { "Id": "11056", "Name": "Xã Đoàn Thượng", "Level": "Xã" },
          { "Id": "11059", "Name": "Xã Thống Kênh", "Level": "Xã" },
          { "Id": "11062", "Name": "Xã Quang Minh", "Level": "Xã" },
          { "Id": "11065", "Name": "Xã Đồng Quang", "Level": "Xã" },
          { "Id": "11068", "Name": "Xã Nhật Tân", "Level": "Xã" },
          { "Id": "11071", "Name": "Xã Đức Xương", "Level": "Xã" }
        ]
      },
      {
        "Id": "298",
        "Name": "Huyện Tứ Kỳ",
        "Wards": [
          { "Id": "11074", "Name": "Thị trấn Tứ Kỳ", "Level": "Thị trấn" },
          { "Id": "11083", "Name": "Xã Đại Sơn", "Level": "Xã" },
          { "Id": "11086", "Name": "Xã Hưng Đạo", "Level": "Xã" },
          { "Id": "11089", "Name": "Xã Ngọc Kỳ", "Level": "Xã" },
          { "Id": "11092", "Name": "Xã Bình Lăng", "Level": "Xã" },
          { "Id": "11095", "Name": "Xã Chí Minh", "Level": "Xã" },
          { "Id": "11098", "Name": "Xã Tái Sơn", "Level": "Xã" },
          { "Id": "11101", "Name": "Xã Quang Phục", "Level": "Xã" },
          { "Id": "11110", "Name": "Xã Dân Chủ", "Level": "Xã" },
          { "Id": "11113", "Name": "Xã Tân Kỳ", "Level": "Xã" },
          { "Id": "11116", "Name": "Xã Quang Khải", "Level": "Xã" },
          { "Id": "11119", "Name": "Xã Đại Hợp", "Level": "Xã" },
          { "Id": "11122", "Name": "Xã Quảng Nghiệp", "Level": "Xã" },
          { "Id": "11125", "Name": "Xã An Thanh", "Level": "Xã" },
          { "Id": "11128", "Name": "Xã Minh Đức", "Level": "Xã" },
          { "Id": "11131", "Name": "Xã Văn Tố", "Level": "Xã" },
          { "Id": "11134", "Name": "Xã Quang Trung", "Level": "Xã" },
          { "Id": "11137", "Name": "Xã Phượng Kỳ", "Level": "Xã" },
          { "Id": "11140", "Name": "Xã Cộng Lạc", "Level": "Xã" },
          { "Id": "11143", "Name": "Xã Tiên Động", "Level": "Xã" },
          { "Id": "11146", "Name": "Xã Nguyên Giáp", "Level": "Xã" },
          { "Id": "11149", "Name": "Xã Hà Kỳ", "Level": "Xã" },
          { "Id": "11152", "Name": "Xã Hà Thanh", "Level": "Xã" }
        ]
      },
      {
        "Id": "299",
        "Name": "Huyện Ninh Giang",
        "Wards": [
          { "Id": "11155", "Name": "Thị trấn Ninh Giang", "Level": "Thị trấn" },
          { "Id": "11161", "Name": "Xã Ứng Hoè", "Level": "Xã" },
          { "Id": "11164", "Name": "Xã Nghĩa An", "Level": "Xã" },
          { "Id": "11167", "Name": "Xã Hồng Đức", "Level": "Xã" },
          { "Id": "11173", "Name": "Xã An Đức", "Level": "Xã" },
          { "Id": "11176", "Name": "Xã Vạn Phúc", "Level": "Xã" },
          { "Id": "11179", "Name": "Xã Tân Hương", "Level": "Xã" },
          { "Id": "11185", "Name": "Xã Vĩnh Hòa", "Level": "Xã" },
          { "Id": "11188", "Name": "Xã Đông Xuyên", "Level": "Xã" },
          { "Id": "11197", "Name": "Xã Tân Phong", "Level": "Xã" },
          { "Id": "11200", "Name": "Xã Ninh Hải", "Level": "Xã" },
          { "Id": "11203", "Name": "Xã Đồng Tâm", "Level": "Xã" },
          { "Id": "11206", "Name": "Xã Tân Quang", "Level": "Xã" },
          { "Id": "11209", "Name": "Xã Kiến Quốc", "Level": "Xã" },
          { "Id": "11215", "Name": "Xã Hồng Dụ", "Level": "Xã" },
          { "Id": "11218", "Name": "Xã Văn Hội", "Level": "Xã" },
          { "Id": "11224", "Name": "Xã Hồng Phong", "Level": "Xã" },
          { "Id": "11227", "Name": "Xã Hiệp Lực", "Level": "Xã" },
          { "Id": "11230", "Name": "Xã Hồng Phúc", "Level": "Xã" },
          { "Id": "11233", "Name": "Xã Hưng Long", "Level": "Xã" }
        ]
      },
      {
        "Id": "300",
        "Name": "Huyện Thanh Miện",
        "Wards": [
          { "Id": "11239", "Name": "Thị trấn Thanh Miện", "Level": "Thị trấn" },
          { "Id": "11242", "Name": "Xã Thanh Tùng", "Level": "Xã" },
          { "Id": "11245", "Name": "Xã Phạm Kha", "Level": "Xã" },
          { "Id": "11248", "Name": "Xã Ngô Quyền", "Level": "Xã" },
          { "Id": "11251", "Name": "Xã Đoàn Tùng", "Level": "Xã" },
          { "Id": "11254", "Name": "Xã Hồng Quang", "Level": "Xã" },
          { "Id": "11257", "Name": "Xã Tân Trào", "Level": "Xã" },
          { "Id": "11260", "Name": "Xã Lam Sơn", "Level": "Xã" },
          { "Id": "11263", "Name": "Xã Đoàn Kết", "Level": "Xã" },
          { "Id": "11266", "Name": "Xã Lê Hồng", "Level": "Xã" },
          { "Id": "11269", "Name": "Xã Tứ Cường", "Level": "Xã" },
          { "Id": "11275", "Name": "Xã Ngũ Hùng", "Level": "Xã" },
          { "Id": "11278", "Name": "Xã Cao Thắng", "Level": "Xã" },
          { "Id": "11281", "Name": "Xã Chi Lăng Bắc", "Level": "Xã" },
          { "Id": "11284", "Name": "Xã Chi Lăng Nam", "Level": "Xã" },
          { "Id": "11287", "Name": "Xã Thanh Giang", "Level": "Xã" },
          { "Id": "11293", "Name": "Xã Hồng Phong", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "31",
    "Name": "Thành phố Hải Phòng",
    "Districts": [
      {
        "Id": "303",
        "Name": "Quận Hồng Bàng",
        "Wards": [
          { "Id": "11296", "Name": "Phường Quán Toan", "Level": "Phường" },
          { "Id": "11299", "Name": "Phường Hùng Vương", "Level": "Phường" },
          { "Id": "11302", "Name": "Phường Sở Dầu", "Level": "Phường" },
          { "Id": "11305", "Name": "Phường Thượng Lý", "Level": "Phường" },
          { "Id": "11308", "Name": "Phường Hạ Lý", "Level": "Phường" },
          { "Id": "11311", "Name": "Phường Minh Khai", "Level": "Phường" },
          { "Id": "11314", "Name": "Phường Trại Chuối", "Level": "Phường" },
          { "Id": "11320", "Name": "Phường Hoàng Văn Thụ", "Level": "Phường" },
          { "Id": "11323", "Name": "Phường Phan Bội Châu", "Level": "Phường" }
        ]
      },
      {
        "Id": "304",
        "Name": "Quận Ngô Quyền",
        "Wards": [
          { "Id": "11329", "Name": "Phường Máy Chai", "Level": "Phường" },
          { "Id": "11332", "Name": "Phường Máy Tơ", "Level": "Phường" },
          { "Id": "11335", "Name": "Phường Vạn Mỹ", "Level": "Phường" },
          { "Id": "11338", "Name": "Phường Cầu Tre", "Level": "Phường" },
          { "Id": "11341", "Name": "Phường Lạc Viên", "Level": "Phường" },
          { "Id": "11347", "Name": "Phường Gia Viên", "Level": "Phường" },
          { "Id": "11350", "Name": "Phường Đông Khê", "Level": "Phường" },
          { "Id": "11353", "Name": "Phường Cầu Đất", "Level": "Phường" },
          { "Id": "11356", "Name": "Phường Lê Lợi", "Level": "Phường" },
          { "Id": "11359", "Name": "Phường Đằng Giang", "Level": "Phường" },
          { "Id": "11362", "Name": "Phường Lạch Tray", "Level": "Phường" },
          { "Id": "11365", "Name": "Phường Đổng Quốc Bình", "Level": "Phường" }
        ]
      },
      {
        "Id": "305",
        "Name": "Quận Lê Chân",
        "Wards": [
          { "Id": "11368", "Name": "Phường Cát Dài", "Level": "Phường" },
          { "Id": "11371", "Name": "Phường An Biên", "Level": "Phường" },
          { "Id": "11374", "Name": "Phường Lam Sơn", "Level": "Phường" },
          { "Id": "11377", "Name": "Phường An Dương", "Level": "Phường" },
          {
            "Id": "11380",
            "Name": "Phường Trần Nguyên Hãn",
            "Level": "Phường"
          },
          { "Id": "11383", "Name": "Phường Hồ Nam", "Level": "Phường" },
          { "Id": "11386", "Name": "Phường Trại Cau", "Level": "Phường" },
          { "Id": "11389", "Name": "Phường Dư Hàng", "Level": "Phường" },
          { "Id": "11392", "Name": "Phường Hàng Kênh", "Level": "Phường" },
          { "Id": "11395", "Name": "Phường Đông Hải", "Level": "Phường" },
          { "Id": "11398", "Name": "Phường Niệm Nghĩa", "Level": "Phường" },
          { "Id": "11401", "Name": "Phường Nghĩa Xá", "Level": "Phường" },
          { "Id": "11404", "Name": "Phường Dư Hàng Kênh", "Level": "Phường" },
          { "Id": "11405", "Name": "Phường Kênh Dương", "Level": "Phường" },
          { "Id": "11407", "Name": "Phường Vĩnh Niệm", "Level": "Phường" }
        ]
      },
      {
        "Id": "306",
        "Name": "Quận Hải An",
        "Wards": [
          { "Id": "11410", "Name": "Phường Đông Hải 1", "Level": "Phường" },
          { "Id": "11411", "Name": "Phường Đông Hải 2", "Level": "Phường" },
          { "Id": "11413", "Name": "Phường Đằng Lâm", "Level": "Phường" },
          { "Id": "11414", "Name": "Phường Thành Tô", "Level": "Phường" },
          { "Id": "11416", "Name": "Phường Đằng Hải", "Level": "Phường" },
          { "Id": "11419", "Name": "Phường Nam Hải", "Level": "Phường" },
          { "Id": "11422", "Name": "Phường Cát Bi", "Level": "Phường" },
          { "Id": "11425", "Name": "Phường Tràng Cát", "Level": "Phường" }
        ]
      },
      {
        "Id": "307",
        "Name": "Quận Kiến An",
        "Wards": [
          { "Id": "11428", "Name": "Phường Quán Trữ", "Level": "Phường" },
          { "Id": "11429", "Name": "Phường Lãm Hà", "Level": "Phường" },
          { "Id": "11431", "Name": "Phường Đồng Hoà", "Level": "Phường" },
          { "Id": "11434", "Name": "Phường Bắc Sơn", "Level": "Phường" },
          { "Id": "11437", "Name": "Phường Nam Sơn", "Level": "Phường" },
          { "Id": "11440", "Name": "Phường Ngọc Sơn", "Level": "Phường" },
          { "Id": "11443", "Name": "Phường Trần Thành Ngọ", "Level": "Phường" },
          { "Id": "11446", "Name": "Phường Văn Đẩu", "Level": "Phường" },
          { "Id": "11449", "Name": "Phường Phù Liễn", "Level": "Phường" },
          { "Id": "11452", "Name": "Phường Tràng Minh", "Level": "Phường" }
        ]
      },
      {
        "Id": "308",
        "Name": "Quận Đồ Sơn",
        "Wards": [
          { "Id": "11455", "Name": "Phường Ngọc Xuyên", "Level": "Phường" },
          { "Id": "11458", "Name": "Phường Hải Sơn", "Level": "Phường" },
          { "Id": "11461", "Name": "Phường Vạn Hương", "Level": "Phường" },
          { "Id": "11465", "Name": "Phường Minh Đức", "Level": "Phường" },
          { "Id": "11467", "Name": "Phường Bàng La", "Level": "Phường" },
          { "Id": "11737", "Name": "Phường Hợp Đức", "Level": "Phường" }
        ]
      },
      {
        "Id": "309",
        "Name": "Quận Dương Kinh",
        "Wards": [
          { "Id": "11683", "Name": "Phường Đa Phúc", "Level": "Phường" },
          { "Id": "11686", "Name": "Phường Hưng Đạo", "Level": "Phường" },
          { "Id": "11689", "Name": "Phường Anh Dũng", "Level": "Phường" },
          { "Id": "11692", "Name": "Phường Hải Thành", "Level": "Phường" },
          { "Id": "11707", "Name": "Phường Hoà Nghĩa", "Level": "Phường" },
          { "Id": "11740", "Name": "Phường Tân Thành", "Level": "Phường" }
        ]
      },
      {
        "Id": "311",
        "Name": "Huyện Thuỷ Nguyên",
        "Wards": [
          { "Id": "11470", "Name": "Thị trấn Núi Đèo", "Level": "Thị trấn" },
          { "Id": "11473", "Name": "Thị trấn Minh Đức", "Level": "Thị trấn" },
          { "Id": "11476", "Name": "Xã Lại Xuân", "Level": "Xã" },
          { "Id": "11479", "Name": "Xã An Sơn", "Level": "Xã" },
          { "Id": "11482", "Name": "Xã Kỳ Sơn", "Level": "Xã" },
          { "Id": "11485", "Name": "Xã Liên Khê", "Level": "Xã" },
          { "Id": "11488", "Name": "Xã Lưu Kiếm", "Level": "Xã" },
          { "Id": "11491", "Name": "Xã Lưu Kỳ", "Level": "Xã" },
          { "Id": "11494", "Name": "Xã Gia Minh", "Level": "Xã" },
          { "Id": "11497", "Name": "Xã Gia Đức", "Level": "Xã" },
          { "Id": "11500", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "11503", "Name": "Xã Phù Ninh", "Level": "Xã" },
          { "Id": "11506", "Name": "Xã Quảng Thanh", "Level": "Xã" },
          { "Id": "11509", "Name": "Xã Chính Mỹ", "Level": "Xã" },
          { "Id": "11512", "Name": "Xã Kênh Giang", "Level": "Xã" },
          { "Id": "11515", "Name": "Xã Hợp Thành", "Level": "Xã" },
          { "Id": "11518", "Name": "Xã Cao Nhân", "Level": "Xã" },
          { "Id": "11521", "Name": "Xã Mỹ Đồng", "Level": "Xã" },
          { "Id": "11524", "Name": "Xã Đông Sơn", "Level": "Xã" },
          { "Id": "11527", "Name": "Xã Hoà Bình", "Level": "Xã" },
          { "Id": "11530", "Name": "Xã Trung Hà", "Level": "Xã" },
          { "Id": "11533", "Name": "Xã An Lư", "Level": "Xã" },
          { "Id": "11536", "Name": "Xã Thuỷ Triều", "Level": "Xã" },
          { "Id": "11539", "Name": "Xã Ngũ Lão", "Level": "Xã" },
          { "Id": "11542", "Name": "Xã Phục Lễ", "Level": "Xã" },
          { "Id": "11545", "Name": "Xã Tam Hưng", "Level": "Xã" },
          { "Id": "11548", "Name": "Xã Phả Lễ", "Level": "Xã" },
          { "Id": "11551", "Name": "Xã Lập Lễ", "Level": "Xã" },
          { "Id": "11554", "Name": "Xã Kiền Bái", "Level": "Xã" },
          { "Id": "11557", "Name": "Xã Thiên Hương", "Level": "Xã" },
          { "Id": "11560", "Name": "Xã Thuỷ Sơn", "Level": "Xã" },
          { "Id": "11563", "Name": "Xã Thuỷ Đường", "Level": "Xã" },
          { "Id": "11566", "Name": "Xã Hoàng Động", "Level": "Xã" },
          { "Id": "11569", "Name": "Xã Lâm Động", "Level": "Xã" },
          { "Id": "11572", "Name": "Xã Hoa Động", "Level": "Xã" },
          { "Id": "11575", "Name": "Xã Tân Dương", "Level": "Xã" },
          { "Id": "11578", "Name": "Xã Dương Quan", "Level": "Xã" }
        ]
      },
      {
        "Id": "312",
        "Name": "Huyện An Dương",
        "Wards": [
          { "Id": "11581", "Name": "Thị trấn An Dương", "Level": "Thị trấn" },
          { "Id": "11584", "Name": "Xã Lê Thiện", "Level": "Xã" },
          { "Id": "11587", "Name": "Xã Đại Bản", "Level": "Xã" },
          { "Id": "11590", "Name": "Xã An Hoà", "Level": "Xã" },
          { "Id": "11593", "Name": "Xã Hồng Phong", "Level": "Xã" },
          { "Id": "11596", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "11599", "Name": "Xã An Hưng", "Level": "Xã" },
          { "Id": "11602", "Name": "Xã An Hồng", "Level": "Xã" },
          { "Id": "11605", "Name": "Xã Bắc Sơn", "Level": "Xã" },
          { "Id": "11608", "Name": "Xã Nam Sơn", "Level": "Xã" },
          { "Id": "11611", "Name": "Xã Lê Lợi", "Level": "Xã" },
          { "Id": "11614", "Name": "Xã Đặng Cương", "Level": "Xã" },
          { "Id": "11617", "Name": "Xã Đồng Thái", "Level": "Xã" },
          { "Id": "11620", "Name": "Xã Quốc Tuấn", "Level": "Xã" },
          { "Id": "11623", "Name": "Xã An Đồng", "Level": "Xã" },
          { "Id": "11626", "Name": "Xã Hồng Thái", "Level": "Xã" }
        ]
      },
      {
        "Id": "313",
        "Name": "Huyện An Lão",
        "Wards": [
          { "Id": "11629", "Name": "Thị trấn An Lão", "Level": "Thị trấn" },
          { "Id": "11632", "Name": "Xã Bát Trang", "Level": "Xã" },
          { "Id": "11635", "Name": "Xã Trường Thọ", "Level": "Xã" },
          { "Id": "11638", "Name": "Xã Trường Thành", "Level": "Xã" },
          { "Id": "11641", "Name": "Xã An Tiến", "Level": "Xã" },
          { "Id": "11644", "Name": "Xã Quang Hưng", "Level": "Xã" },
          { "Id": "11647", "Name": "Xã Quang Trung", "Level": "Xã" },
          { "Id": "11650", "Name": "Xã Quốc Tuấn", "Level": "Xã" },
          { "Id": "11653", "Name": "Xã An Thắng", "Level": "Xã" },
          { "Id": "11656", "Name": "Thị trấn Trường Sơn", "Level": "Thị trấn" },
          { "Id": "11659", "Name": "Xã Tân Dân", "Level": "Xã" },
          { "Id": "11662", "Name": "Xã Thái Sơn", "Level": "Xã" },
          { "Id": "11665", "Name": "Xã Tân Viên", "Level": "Xã" },
          { "Id": "11668", "Name": "Xã Mỹ Đức", "Level": "Xã" },
          { "Id": "11671", "Name": "Xã Chiến Thắng", "Level": "Xã" },
          { "Id": "11674", "Name": "Xã An Thọ", "Level": "Xã" },
          { "Id": "11677", "Name": "Xã An Thái", "Level": "Xã" }
        ]
      },
      {
        "Id": "314",
        "Name": "Huyện Kiến Thuỵ",
        "Wards": [
          { "Id": "11680", "Name": "Thị trấn Núi Đối", "Level": "Thị trấn" },
          { "Id": "11695", "Name": "Xã Đông Phương", "Level": "Xã" },
          { "Id": "11698", "Name": "Xã Thuận Thiên", "Level": "Xã" },
          { "Id": "11701", "Name": "Xã Hữu Bằng", "Level": "Xã" },
          { "Id": "11704", "Name": "Xã Đại Đồng", "Level": "Xã" },
          { "Id": "11710", "Name": "Xã Ngũ Phúc", "Level": "Xã" },
          { "Id": "11713", "Name": "Xã Kiến Quốc", "Level": "Xã" },
          { "Id": "11716", "Name": "Xã Du Lễ", "Level": "Xã" },
          { "Id": "11719", "Name": "Xã Thuỵ Hương", "Level": "Xã" },
          { "Id": "11722", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "11725", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "11728", "Name": "Xã Đại Hà", "Level": "Xã" },
          { "Id": "11731", "Name": "Xã Ngũ Đoan", "Level": "Xã" },
          { "Id": "11734", "Name": "Xã Tân Phong", "Level": "Xã" },
          { "Id": "11743", "Name": "Xã Tân Trào", "Level": "Xã" },
          { "Id": "11746", "Name": "Xã Đoàn Xá", "Level": "Xã" },
          { "Id": "11749", "Name": "Xã Tú Sơn", "Level": "Xã" },
          { "Id": "11752", "Name": "Xã Đại Hợp", "Level": "Xã" }
        ]
      },
      {
        "Id": "315",
        "Name": "Huyện Tiên Lãng",
        "Wards": [
          { "Id": "11755", "Name": "Thị trấn Tiên Lãng", "Level": "Thị trấn" },
          { "Id": "11758", "Name": "Xã Đại Thắng", "Level": "Xã" },
          { "Id": "11761", "Name": "Xã Tiên Cường", "Level": "Xã" },
          { "Id": "11764", "Name": "Xã Tự Cường", "Level": "Xã" },
          { "Id": "11770", "Name": "Xã Quyết Tiến", "Level": "Xã" },
          { "Id": "11773", "Name": "Xã Khởi Nghĩa", "Level": "Xã" },
          { "Id": "11776", "Name": "Xã Tiên Thanh", "Level": "Xã" },
          { "Id": "11779", "Name": "Xã Cấp Tiến", "Level": "Xã" },
          { "Id": "11782", "Name": "Xã Kiến Thiết", "Level": "Xã" },
          { "Id": "11785", "Name": "Xã Đoàn Lập", "Level": "Xã" },
          { "Id": "11788", "Name": "Xã Bạch Đằng", "Level": "Xã" },
          { "Id": "11791", "Name": "Xã Quang Phục", "Level": "Xã" },
          { "Id": "11794", "Name": "Xã Toàn Thắng", "Level": "Xã" },
          { "Id": "11797", "Name": "Xã Tiên Thắng", "Level": "Xã" },
          { "Id": "11800", "Name": "Xã Tiên Minh", "Level": "Xã" },
          { "Id": "11803", "Name": "Xã Bắc Hưng", "Level": "Xã" },
          { "Id": "11806", "Name": "Xã Nam Hưng", "Level": "Xã" },
          { "Id": "11809", "Name": "Xã Hùng Thắng", "Level": "Xã" },
          { "Id": "11812", "Name": "Xã Tây Hưng", "Level": "Xã" },
          { "Id": "11815", "Name": "Xã Đông Hưng", "Level": "Xã" },
          { "Id": "11821", "Name": "Xã Vinh Quang", "Level": "Xã" }
        ]
      },
      {
        "Id": "316",
        "Name": "Huyện Vĩnh Bảo",
        "Wards": [
          { "Id": "11824", "Name": "Thị trấn Vĩnh Bảo", "Level": "Thị trấn" },
          { "Id": "11827", "Name": "Xã Dũng Tiến", "Level": "Xã" },
          { "Id": "11830", "Name": "Xã Giang Biên", "Level": "Xã" },
          { "Id": "11833", "Name": "Xã Thắng Thuỷ", "Level": "Xã" },
          { "Id": "11836", "Name": "Xã Trung Lập", "Level": "Xã" },
          { "Id": "11839", "Name": "Xã Việt Tiến", "Level": "Xã" },
          { "Id": "11842", "Name": "Xã Vĩnh An", "Level": "Xã" },
          { "Id": "11845", "Name": "Xã Vĩnh Long", "Level": "Xã" },
          { "Id": "11848", "Name": "Xã Hiệp Hoà", "Level": "Xã" },
          { "Id": "11851", "Name": "Xã Hùng Tiến", "Level": "Xã" },
          { "Id": "11854", "Name": "Xã An Hoà", "Level": "Xã" },
          { "Id": "11857", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "11860", "Name": "Xã Tân Liên", "Level": "Xã" },
          { "Id": "11863", "Name": "Xã Nhân Hoà", "Level": "Xã" },
          { "Id": "11866", "Name": "Xã Tam Đa", "Level": "Xã" },
          { "Id": "11869", "Name": "Xã Hưng Nhân", "Level": "Xã" },
          { "Id": "11872", "Name": "Xã Vinh Quang", "Level": "Xã" },
          { "Id": "11875", "Name": "Xã Đồng Minh", "Level": "Xã" },
          { "Id": "11878", "Name": "Xã Thanh Lương", "Level": "Xã" },
          { "Id": "11881", "Name": "Xã Liên Am", "Level": "Xã" },
          { "Id": "11884", "Name": "Xã Lý Học", "Level": "Xã" },
          { "Id": "11887", "Name": "Xã Tam Cường", "Level": "Xã" },
          { "Id": "11890", "Name": "Xã Hoà Bình", "Level": "Xã" },
          { "Id": "11893", "Name": "Xã Tiền Phong", "Level": "Xã" },
          { "Id": "11896", "Name": "Xã Vĩnh Phong", "Level": "Xã" },
          { "Id": "11899", "Name": "Xã Cộng Hiền", "Level": "Xã" },
          { "Id": "11902", "Name": "Xã Cao Minh", "Level": "Xã" },
          { "Id": "11905", "Name": "Xã Cổ Am", "Level": "Xã" },
          { "Id": "11908", "Name": "Xã Vĩnh Tiến", "Level": "Xã" },
          { "Id": "11911", "Name": "Xã Trấn Dương", "Level": "Xã" }
        ]
      },
      {
        "Id": "317",
        "Name": "Huyện Cát Hải",
        "Wards": [
          { "Id": "11914", "Name": "Thị trấn Cát Bà", "Level": "Thị trấn" },
          { "Id": "11917", "Name": "Thị trấn Cát Hải", "Level": "Thị trấn" },
          { "Id": "11920", "Name": "Xã Nghĩa Lộ", "Level": "Xã" },
          { "Id": "11923", "Name": "Xã Đồng Bài", "Level": "Xã" },
          { "Id": "11926", "Name": "Xã Hoàng Châu", "Level": "Xã" },
          { "Id": "11929", "Name": "Xã Văn Phong", "Level": "Xã" },
          { "Id": "11932", "Name": "Xã Phù Long", "Level": "Xã" },
          { "Id": "11935", "Name": "Xã Gia Luận", "Level": "Xã" },
          { "Id": "11938", "Name": "Xã Hiền Hào", "Level": "Xã" },
          { "Id": "11941", "Name": "Xã Trân Châu", "Level": "Xã" },
          { "Id": "11944", "Name": "Xã Việt Hải", "Level": "Xã" },
          { "Id": "11947", "Name": "Xã Xuân Đám", "Level": "Xã" }
        ]
      },
      {
        "Id": "318",
        "Name": "Huyện Bạch Long Vĩ",
        "Wards": [{ "Level": "Huyện" }]
      }
    ]
  },
  {
    "Id": "33",
    "Name": "Tỉnh Hưng Yên",
    "Districts": [
      {
        "Id": "323",
        "Name": "Thành phố Hưng Yên",
        "Wards": [
          { "Id": "11950", "Name": "Phường Lam Sơn", "Level": "Phường" },
          { "Id": "11953", "Name": "Phường Hiến Nam", "Level": "Phường" },
          { "Id": "11956", "Name": "Phường An Tảo", "Level": "Phường" },
          { "Id": "11959", "Name": "Phường Lê Lợi", "Level": "Phường" },
          { "Id": "11962", "Name": "Phường Minh Khai", "Level": "Phường" },
          { "Id": "11965", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "11968", "Name": "Phường Hồng Châu", "Level": "Phường" },
          { "Id": "11971", "Name": "Xã Trung Nghĩa", "Level": "Xã" },
          { "Id": "11974", "Name": "Xã Liên Phương", "Level": "Xã" },
          { "Id": "11977", "Name": "Xã Hồng Nam", "Level": "Xã" },
          { "Id": "11980", "Name": "Xã Quảng Châu", "Level": "Xã" },
          { "Id": "11983", "Name": "Xã Bảo Khê", "Level": "Xã" },
          { "Id": "12331", "Name": "Xã Phú Cường", "Level": "Xã" },
          { "Id": "12334", "Name": "Xã Hùng Cường", "Level": "Xã" },
          { "Id": "12382", "Name": "Xã Phương Chiểu", "Level": "Xã" },
          { "Id": "12385", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "12388", "Name": "Xã Hoàng Hanh", "Level": "Xã" }
        ]
      },
      {
        "Id": "325",
        "Name": "Huyện Văn Lâm",
        "Wards": [
          { "Id": "11986", "Name": "Thị trấn Như Quỳnh", "Level": "Thị trấn" },
          { "Id": "11989", "Name": "Xã Lạc Đạo", "Level": "Xã" },
          { "Id": "11992", "Name": "Xã Chỉ Đạo", "Level": "Xã" },
          { "Id": "11995", "Name": "Xã Đại Đồng", "Level": "Xã" },
          { "Id": "11998", "Name": "Xã Việt Hưng", "Level": "Xã" },
          { "Id": "12001", "Name": "Xã Tân Quang", "Level": "Xã" },
          { "Id": "12004", "Name": "Xã Đình Dù", "Level": "Xã" },
          { "Id": "12007", "Name": "Xã Minh Hải", "Level": "Xã" },
          { "Id": "12010", "Name": "Xã Lương Tài", "Level": "Xã" },
          { "Id": "12013", "Name": "Xã Trưng Trắc", "Level": "Xã" },
          { "Id": "12016", "Name": "Xã Lạc Hồng", "Level": "Xã" }
        ]
      },
      {
        "Id": "326",
        "Name": "Huyện Văn Giang",
        "Wards": [
          { "Id": "12019", "Name": "Thị trấn Văn Giang", "Level": "Thị trấn" },
          { "Id": "12022", "Name": "Xã Xuân Quan", "Level": "Xã" },
          { "Id": "12025", "Name": "Xã Cửu Cao", "Level": "Xã" },
          { "Id": "12028", "Name": "Xã Phụng Công", "Level": "Xã" },
          { "Id": "12031", "Name": "Xã Nghĩa Trụ", "Level": "Xã" },
          { "Id": "12034", "Name": "Xã Long Hưng", "Level": "Xã" },
          { "Id": "12037", "Name": "Xã Vĩnh Khúc", "Level": "Xã" },
          { "Id": "12040", "Name": "Xã Liên Nghĩa", "Level": "Xã" },
          { "Id": "12043", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "12046", "Name": "Xã Thắng Lợi", "Level": "Xã" },
          { "Id": "12049", "Name": "Xã Mễ Sở", "Level": "Xã" }
        ]
      },
      {
        "Id": "327",
        "Name": "Huyện Yên Mỹ",
        "Wards": [
          { "Id": "12052", "Name": "Thị trấn Yên Mỹ", "Level": "Thị trấn" },
          { "Id": "12055", "Name": "Xã Giai Phạm", "Level": "Xã" },
          { "Id": "12058", "Name": "Xã Nghĩa Hiệp", "Level": "Xã" },
          { "Id": "12061", "Name": "Xã Đồng Than", "Level": "Xã" },
          { "Id": "12064", "Name": "Xã Ngọc Long", "Level": "Xã" },
          { "Id": "12067", "Name": "Xã Liêu Xá", "Level": "Xã" },
          { "Id": "12070", "Name": "Xã Hoàn Long", "Level": "Xã" },
          { "Id": "12073", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "12076", "Name": "Xã Thanh Long", "Level": "Xã" },
          { "Id": "12079", "Name": "Xã Yên Phú", "Level": "Xã" },
          { "Id": "12082", "Name": "Xã Việt Cường", "Level": "Xã" },
          { "Id": "12085", "Name": "Xã Trung Hòa", "Level": "Xã" },
          { "Id": "12088", "Name": "Xã Yên Hòa", "Level": "Xã" },
          { "Id": "12091", "Name": "Xã Minh Châu", "Level": "Xã" },
          { "Id": "12094", "Name": "Xã Trung Hưng", "Level": "Xã" },
          { "Id": "12097", "Name": "Xã Lý Thường Kiệt", "Level": "Xã" },
          { "Id": "12100", "Name": "Xã Tân Việt", "Level": "Xã" }
        ]
      },
      {
        "Id": "328",
        "Name": "Thị xã Mỹ Hào",
        "Wards": [
          { "Id": "12103", "Name": "Phường Bần Yên Nhân", "Level": "Phường" },
          {
            "Id": "12106",
            "Name": "Phường Phan Đình Phùng",
            "Level": "Phường"
          },
          { "Id": "12109", "Name": "Xã Cẩm Xá", "Level": "Xã" },
          { "Id": "12112", "Name": "Xã Dương Quang", "Level": "Xã" },
          { "Id": "12115", "Name": "Xã Hòa Phong", "Level": "Xã" },
          { "Id": "12118", "Name": "Phường Nhân Hòa", "Level": "Phường" },
          { "Id": "12121", "Name": "Phường Dị Sử", "Level": "Phường" },
          { "Id": "12124", "Name": "Phường Bạch Sam", "Level": "Phường" },
          { "Id": "12127", "Name": "Phường Minh Đức", "Level": "Phường" },
          { "Id": "12130", "Name": "Phường Phùng Chí Kiên", "Level": "Phường" },
          { "Id": "12133", "Name": "Xã Xuân Dục", "Level": "Xã" },
          { "Id": "12136", "Name": "Xã Ngọc Lâm", "Level": "Xã" },
          { "Id": "12139", "Name": "Xã Hưng Long", "Level": "Xã" }
        ]
      },
      {
        "Id": "329",
        "Name": "Huyện Ân Thi",
        "Wards": [
          { "Id": "12142", "Name": "Thị trấn Ân Thi", "Level": "Thị trấn" },
          { "Id": "12145", "Name": "Xã Phù Ủng", "Level": "Xã" },
          { "Id": "12148", "Name": "Xã Bắc Sơn", "Level": "Xã" },
          { "Id": "12151", "Name": "Xã Bãi Sậy", "Level": "Xã" },
          { "Id": "12154", "Name": "Xã Đào Dương", "Level": "Xã" },
          { "Id": "12157", "Name": "Xã Tân Phúc", "Level": "Xã" },
          { "Id": "12160", "Name": "Xã Vân Du", "Level": "Xã" },
          { "Id": "12163", "Name": "Xã Quang Vinh", "Level": "Xã" },
          { "Id": "12166", "Name": "Xã Xuân Trúc", "Level": "Xã" },
          { "Id": "12169", "Name": "Xã Hoàng Hoa Thám", "Level": "Xã" },
          { "Id": "12172", "Name": "Xã Quảng Lãng", "Level": "Xã" },
          { "Id": "12175", "Name": "Xã Văn Nhuệ", "Level": "Xã" },
          { "Id": "12178", "Name": "Xã Đặng Lễ", "Level": "Xã" },
          { "Id": "12181", "Name": "Xã Cẩm Ninh", "Level": "Xã" },
          { "Id": "12184", "Name": "Xã Nguyễn Trãi", "Level": "Xã" },
          { "Id": "12187", "Name": "Xã Đa Lộc", "Level": "Xã" },
          { "Id": "12190", "Name": "Xã Hồ Tùng Mậu", "Level": "Xã" },
          { "Id": "12193", "Name": "Xã Tiền Phong", "Level": "Xã" },
          { "Id": "12196", "Name": "Xã Hồng Vân", "Level": "Xã" },
          { "Id": "12199", "Name": "Xã Hồng Quang", "Level": "Xã" },
          { "Id": "12202", "Name": "Xã Hạ Lễ", "Level": "Xã" }
        ]
      },
      {
        "Id": "330",
        "Name": "Huyện Khoái Châu",
        "Wards": [
          { "Id": "12205", "Name": "Thị trấn Khoái Châu", "Level": "Thị trấn" },
          { "Id": "12208", "Name": "Xã Đông Tảo", "Level": "Xã" },
          { "Id": "12211", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "12214", "Name": "Xã Dạ Trạch", "Level": "Xã" },
          { "Id": "12217", "Name": "Xã Hàm Tử", "Level": "Xã" },
          { "Id": "12220", "Name": "Xã Ông Đình", "Level": "Xã" },
          { "Id": "12223", "Name": "Xã Tân Dân", "Level": "Xã" },
          { "Id": "12226", "Name": "Xã Tứ Dân", "Level": "Xã" },
          { "Id": "12229", "Name": "Xã An Vĩ", "Level": "Xã" },
          { "Id": "12232", "Name": "Xã Đông Kết", "Level": "Xã" },
          { "Id": "12235", "Name": "Xã Bình Kiều", "Level": "Xã" },
          { "Id": "12238", "Name": "Xã Dân Tiến", "Level": "Xã" },
          { "Id": "12241", "Name": "Xã Đồng Tiến", "Level": "Xã" },
          { "Id": "12244", "Name": "Xã Hồng Tiến", "Level": "Xã" },
          { "Id": "12247", "Name": "Xã Tân Châu", "Level": "Xã" },
          { "Id": "12250", "Name": "Xã Liên Khê", "Level": "Xã" },
          { "Id": "12253", "Name": "Xã Phùng Hưng", "Level": "Xã" },
          { "Id": "12256", "Name": "Xã Việt Hòa", "Level": "Xã" },
          { "Id": "12259", "Name": "Xã Đông Ninh", "Level": "Xã" },
          { "Id": "12262", "Name": "Xã Đại Tập", "Level": "Xã" },
          { "Id": "12265", "Name": "Xã Chí Tân", "Level": "Xã" },
          { "Id": "12268", "Name": "Xã Đại Hưng", "Level": "Xã" },
          { "Id": "12271", "Name": "Xã Thuần Hưng", "Level": "Xã" },
          { "Id": "12274", "Name": "Xã Thành Công", "Level": "Xã" },
          { "Id": "12277", "Name": "Xã Nhuế Dương", "Level": "Xã" }
        ]
      },
      {
        "Id": "331",
        "Name": "Huyện Kim Động",
        "Wards": [
          { "Id": "12280", "Name": "Thị trấn Lương Bằng", "Level": "Thị trấn" },
          { "Id": "12283", "Name": "Xã Nghĩa Dân", "Level": "Xã" },
          { "Id": "12286", "Name": "Xã Toàn Thắng", "Level": "Xã" },
          { "Id": "12289", "Name": "Xã Vĩnh Xá", "Level": "Xã" },
          { "Id": "12292", "Name": "Xã Phạm Ngũ Lão", "Level": "Xã" },
          { "Id": "12295", "Name": "Xã Thọ Vinh", "Level": "Xã" },
          { "Id": "12298", "Name": "Xã Đồng Thanh", "Level": "Xã" },
          { "Id": "12301", "Name": "Xã Song Mai", "Level": "Xã" },
          { "Id": "12304", "Name": "Xã Chính Nghĩa", "Level": "Xã" },
          { "Id": "12307", "Name": "Xã Nhân La", "Level": "Xã" },
          { "Id": "12310", "Name": "Xã Phú Thịnh", "Level": "Xã" },
          { "Id": "12313", "Name": "Xã Mai Động", "Level": "Xã" },
          { "Id": "12316", "Name": "Xã Đức Hợp", "Level": "Xã" },
          { "Id": "12319", "Name": "Xã Hùng An", "Level": "Xã" },
          { "Id": "12322", "Name": "Xã Ngọc Thanh", "Level": "Xã" },
          { "Id": "12325", "Name": "Xã Vũ Xá", "Level": "Xã" },
          { "Id": "12328", "Name": "Xã Hiệp Cường", "Level": "Xã" }
        ]
      },
      {
        "Id": "332",
        "Name": "Huyện Tiên Lữ",
        "Wards": [
          { "Id": "12337", "Name": "Thị trấn Vương", "Level": "Thị trấn" },
          { "Id": "12340", "Name": "Xã Hưng Đạo", "Level": "Xã" },
          { "Id": "12343", "Name": "Xã Ngô Quyền", "Level": "Xã" },
          { "Id": "12346", "Name": "Xã Nhật Tân", "Level": "Xã" },
          { "Id": "12349", "Name": "Xã Dị Chế", "Level": "Xã" },
          { "Id": "12352", "Name": "Xã Lệ Xá", "Level": "Xã" },
          { "Id": "12355", "Name": "Xã An Viên", "Level": "Xã" },
          { "Id": "12358", "Name": "Xã Đức Thắng", "Level": "Xã" },
          { "Id": "12361", "Name": "Xã Trung Dũng", "Level": "Xã" },
          { "Id": "12364", "Name": "Xã Hải Triều", "Level": "Xã" },
          { "Id": "12367", "Name": "Xã Thủ Sỹ", "Level": "Xã" },
          { "Id": "12370", "Name": "Xã Thiện Phiến", "Level": "Xã" },
          { "Id": "12373", "Name": "Xã Thụy Lôi", "Level": "Xã" },
          { "Id": "12376", "Name": "Xã Cương Chính", "Level": "Xã" },
          { "Id": "12379", "Name": "Xã Minh Phượng", "Level": "Xã" }
        ]
      },
      {
        "Id": "333",
        "Name": "Huyện Phù Cừ",
        "Wards": [
          { "Id": "12391", "Name": "Thị trấn Trần Cao", "Level": "Thị trấn" },
          { "Id": "12394", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "12397", "Name": "Xã Phan Sào Nam", "Level": "Xã" },
          { "Id": "12400", "Name": "Xã Quang Hưng", "Level": "Xã" },
          { "Id": "12403", "Name": "Xã Minh Hoàng", "Level": "Xã" },
          { "Id": "12406", "Name": "Xã Đoàn Đào", "Level": "Xã" },
          { "Id": "12409", "Name": "Xã Tống Phan", "Level": "Xã" },
          { "Id": "12412", "Name": "Xã Đình Cao", "Level": "Xã" },
          { "Id": "12415", "Name": "Xã Nhật Quang", "Level": "Xã" },
          { "Id": "12418", "Name": "Xã Tiền Tiến", "Level": "Xã" },
          { "Id": "12421", "Name": "Xã Tam Đa", "Level": "Xã" },
          { "Id": "12424", "Name": "Xã Minh Tiến", "Level": "Xã" },
          { "Id": "12427", "Name": "Xã Nguyên Hòa", "Level": "Xã" },
          { "Id": "12430", "Name": "Xã Tống Trân", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "34",
    "Name": "Tỉnh Thái Bình",
    "Districts": [
      {
        "Id": "336",
        "Name": "Thành phố Thái Bình",
        "Wards": [
          { "Id": "12433", "Name": "Phường Lê Hồng Phong", "Level": "Phường" },
          { "Id": "12436", "Name": "Phường Bồ Xuyên", "Level": "Phường" },
          { "Id": "12439", "Name": "Phường Đề Thám", "Level": "Phường" },
          { "Id": "12442", "Name": "Phường Kỳ Bá", "Level": "Phường" },
          { "Id": "12445", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "12448", "Name": "Phường Phú Khánh", "Level": "Phường" },
          { "Id": "12451", "Name": "Phường Tiền Phong", "Level": "Phường" },
          { "Id": "12452", "Name": "Phường Trần Hưng Đạo", "Level": "Phường" },
          { "Id": "12454", "Name": "Phường Trần Lãm", "Level": "Phường" },
          { "Id": "12457", "Name": "Xã Đông Hòa", "Level": "Xã" },
          { "Id": "12460", "Name": "Phường Hoàng Diệu", "Level": "Phường" },
          { "Id": "12463", "Name": "Xã Phú Xuân", "Level": "Xã" },
          { "Id": "12466", "Name": "Xã Vũ Phúc", "Level": "Xã" },
          { "Id": "12469", "Name": "Xã Vũ Chính", "Level": "Xã" },
          { "Id": "12817", "Name": "Xã Đông Mỹ", "Level": "Xã" },
          { "Id": "12820", "Name": "Xã Đông Thọ", "Level": "Xã" },
          { "Id": "13084", "Name": "Xã Vũ Đông", "Level": "Xã" },
          { "Id": "13108", "Name": "Xã Vũ Lạc", "Level": "Xã" },
          { "Id": "13225", "Name": "Xã Tân Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "338",
        "Name": "Huyện Quỳnh Phụ",
        "Wards": [
          { "Id": "12472", "Name": "Thị trấn Quỳnh Côi", "Level": "Thị trấn" },
          { "Id": "12475", "Name": "Xã An Khê", "Level": "Xã" },
          { "Id": "12478", "Name": "Xã An Đồng", "Level": "Xã" },
          { "Id": "12481", "Name": "Xã Quỳnh Hoa", "Level": "Xã" },
          { "Id": "12484", "Name": "Xã Quỳnh Lâm", "Level": "Xã" },
          { "Id": "12487", "Name": "Xã Quỳnh Thọ", "Level": "Xã" },
          { "Id": "12490", "Name": "Xã An Hiệp", "Level": "Xã" },
          { "Id": "12493", "Name": "Xã Quỳnh Hoàng", "Level": "Xã" },
          { "Id": "12496", "Name": "Xã Quỳnh Giao", "Level": "Xã" },
          { "Id": "12499", "Name": "Xã An Thái", "Level": "Xã" },
          { "Id": "12502", "Name": "Xã An Cầu", "Level": "Xã" },
          { "Id": "12505", "Name": "Xã Quỳnh Hồng", "Level": "Xã" },
          { "Id": "12508", "Name": "Xã Quỳnh Khê", "Level": "Xã" },
          { "Id": "12511", "Name": "Xã Quỳnh Minh", "Level": "Xã" },
          { "Id": "12514", "Name": "Xã An Ninh", "Level": "Xã" },
          { "Id": "12517", "Name": "Xã Quỳnh Ngọc", "Level": "Xã" },
          { "Id": "12520", "Name": "Xã Quỳnh Hải", "Level": "Xã" },
          { "Id": "12523", "Name": "Thị trấn An Bài", "Level": "Thị trấn" },
          { "Id": "12526", "Name": "Xã An Ấp", "Level": "Xã" },
          { "Id": "12529", "Name": "Xã Quỳnh Hội", "Level": "Xã" },
          { "Id": "12532", "Name": "Xã Châu Sơn", "Level": "Xã" },
          { "Id": "12535", "Name": "Xã Quỳnh Mỹ", "Level": "Xã" },
          { "Id": "12538", "Name": "Xã An Quí", "Level": "Xã" },
          { "Id": "12541", "Name": "Xã An Thanh", "Level": "Xã" },
          { "Id": "12547", "Name": "Xã An Vũ", "Level": "Xã" },
          { "Id": "12550", "Name": "Xã An Lễ", "Level": "Xã" },
          { "Id": "12553", "Name": "Xã Quỳnh Hưng", "Level": "Xã" },
          { "Id": "12556", "Name": "Xã Quỳnh Bảo", "Level": "Xã" },
          { "Id": "12559", "Name": "Xã An Mỹ", "Level": "Xã" },
          { "Id": "12562", "Name": "Xã Quỳnh Nguyên", "Level": "Xã" },
          { "Id": "12565", "Name": "Xã An Vinh", "Level": "Xã" },
          { "Id": "12568", "Name": "Xã Quỳnh Xá", "Level": "Xã" },
          { "Id": "12571", "Name": "Xã An Dục", "Level": "Xã" },
          { "Id": "12574", "Name": "Xã Đông Hải", "Level": "Xã" },
          { "Id": "12577", "Name": "Xã Quỳnh Trang", "Level": "Xã" },
          { "Id": "12580", "Name": "Xã An Tràng", "Level": "Xã" },
          { "Id": "12583", "Name": "Xã Đồng Tiến", "Level": "Xã" }
        ]
      },
      {
        "Id": "339",
        "Name": "Huyện Hưng Hà",
        "Wards": [
          { "Id": "12586", "Name": "Thị trấn Hưng Hà", "Level": "Thị trấn" },
          { "Id": "12589", "Name": "Xã Điệp Nông", "Level": "Xã" },
          { "Id": "12592", "Name": "Xã Tân Lễ", "Level": "Xã" },
          { "Id": "12595", "Name": "Xã Cộng Hòa", "Level": "Xã" },
          { "Id": "12598", "Name": "Xã Dân Chủ", "Level": "Xã" },
          { "Id": "12601", "Name": "Xã Canh Tân", "Level": "Xã" },
          { "Id": "12604", "Name": "Xã Hòa Tiến", "Level": "Xã" },
          { "Id": "12607", "Name": "Xã Hùng Dũng", "Level": "Xã" },
          { "Id": "12610", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "12613", "Name": "Thị trấn Hưng Nhân", "Level": "Thị trấn" },
          { "Id": "12616", "Name": "Xã Đoan Hùng", "Level": "Xã" },
          { "Id": "12619", "Name": "Xã Duyên Hải", "Level": "Xã" },
          { "Id": "12622", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "12625", "Name": "Xã Văn Cẩm", "Level": "Xã" },
          { "Id": "12628", "Name": "Xã Bắc Sơn", "Level": "Xã" },
          { "Id": "12631", "Name": "Xã Đông Đô", "Level": "Xã" },
          { "Id": "12634", "Name": "Xã Phúc Khánh", "Level": "Xã" },
          { "Id": "12637", "Name": "Xã Liên Hiệp", "Level": "Xã" },
          { "Id": "12640", "Name": "Xã Tây Đô", "Level": "Xã" },
          { "Id": "12643", "Name": "Xã Thống Nhất", "Level": "Xã" },
          { "Id": "12646", "Name": "Xã Tiến Đức", "Level": "Xã" },
          { "Id": "12649", "Name": "Xã Thái Hưng", "Level": "Xã" },
          { "Id": "12652", "Name": "Xã Thái Phương", "Level": "Xã" },
          { "Id": "12655", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "12656", "Name": "Xã Chi Lăng", "Level": "Xã" },
          { "Id": "12658", "Name": "Xã Minh Khai", "Level": "Xã" },
          { "Id": "12661", "Name": "Xã Hồng An", "Level": "Xã" },
          { "Id": "12664", "Name": "Xã Kim Chung", "Level": "Xã" },
          { "Id": "12667", "Name": "Xã Hồng Lĩnh", "Level": "Xã" },
          { "Id": "12670", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "12673", "Name": "Xã Văn Lang", "Level": "Xã" },
          { "Id": "12676", "Name": "Xã Độc Lập", "Level": "Xã" },
          { "Id": "12679", "Name": "Xã Chí Hòa", "Level": "Xã" },
          { "Id": "12682", "Name": "Xã Minh Hòa", "Level": "Xã" },
          { "Id": "12685", "Name": "Xã Hồng Minh", "Level": "Xã" }
        ]
      },
      {
        "Id": "340",
        "Name": "Huyện Đông Hưng",
        "Wards": [
          { "Id": "12688", "Name": "Thị trấn Đông Hưng", "Level": "Thị trấn" },
          { "Id": "12691", "Name": "Xã Đô Lương", "Level": "Xã" },
          { "Id": "12694", "Name": "Xã Đông Phương", "Level": "Xã" },
          { "Id": "12697", "Name": "Xã Liên Giang", "Level": "Xã" },
          { "Id": "12700", "Name": "Xã An Châu", "Level": "Xã" },
          { "Id": "12703", "Name": "Xã Đông Sơn", "Level": "Xã" },
          { "Id": "12706", "Name": "Xã Đông Cường", "Level": "Xã" },
          { "Id": "12709", "Name": "Xã Phú Lương", "Level": "Xã" },
          { "Id": "12712", "Name": "Xã Mê Linh", "Level": "Xã" },
          { "Id": "12715", "Name": "Xã Lô Giang", "Level": "Xã" },
          { "Id": "12718", "Name": "Xã Đông La", "Level": "Xã" },
          { "Id": "12721", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "12724", "Name": "Xã Đông Xá", "Level": "Xã" },
          { "Id": "12727", "Name": "Xã Chương Dương", "Level": "Xã" },
          { "Id": "12730", "Name": "Xã Nguyên Xá", "Level": "Xã" },
          { "Id": "12733", "Name": "Xã Phong Châu", "Level": "Xã" },
          { "Id": "12736", "Name": "Xã Hợp Tiến", "Level": "Xã" },
          { "Id": "12739", "Name": "Xã Hồng Việt", "Level": "Xã" },
          { "Id": "12745", "Name": "Xã Hà Giang", "Level": "Xã" },
          { "Id": "12748", "Name": "Xã Đông Kinh", "Level": "Xã" },
          { "Id": "12751", "Name": "Xã Đông Hợp", "Level": "Xã" },
          { "Id": "12754", "Name": "Xã Thăng Long", "Level": "Xã" },
          { "Id": "12757", "Name": "Xã Đông Các", "Level": "Xã" },
          { "Id": "12760", "Name": "Xã Phú Châu", "Level": "Xã" },
          { "Id": "12763", "Name": "Xã Liên Hoa", "Level": "Xã" },
          { "Id": "12769", "Name": "Xã Đông Tân", "Level": "Xã" },
          { "Id": "12772", "Name": "Xã Đông Vinh", "Level": "Xã" },
          { "Id": "12775", "Name": "Xã Đông Động", "Level": "Xã" },
          { "Id": "12778", "Name": "Xã Hồng Bạch", "Level": "Xã" },
          { "Id": "12784", "Name": "Xã Trọng Quan", "Level": "Xã" },
          { "Id": "12790", "Name": "Xã Hồng Giang", "Level": "Xã" },
          { "Id": "12793", "Name": "Xã Đông Quan", "Level": "Xã" },
          { "Id": "12796", "Name": "Xã Đông Quang", "Level": "Xã" },
          { "Id": "12799", "Name": "Xã Đông Xuân", "Level": "Xã" },
          { "Id": "12802", "Name": "Xã Đông Á", "Level": "Xã" },
          { "Id": "12808", "Name": "Xã Đông Hoàng", "Level": "Xã" },
          { "Id": "12811", "Name": "Xã Đông Dương", "Level": "Xã" },
          { "Id": "12823", "Name": "Xã Minh Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "341",
        "Name": "Huyện Thái Thụy",
        "Wards": [
          { "Id": "12826", "Name": "Thị trấn Diêm Điền", "Level": "Thị trấn" },
          { "Id": "12832", "Name": "Xã Thụy Trường", "Level": "Xã" },
          { "Id": "12841", "Name": "Xã Hồng Dũng", "Level": "Xã" },
          { "Id": "12844", "Name": "Xã Thụy Quỳnh", "Level": "Xã" },
          { "Id": "12847", "Name": "Xã An Tân", "Level": "Xã" },
          { "Id": "12850", "Name": "Xã Thụy Ninh", "Level": "Xã" },
          { "Id": "12853", "Name": "Xã Thụy Hưng", "Level": "Xã" },
          { "Id": "12856", "Name": "Xã Thụy Việt", "Level": "Xã" },
          { "Id": "12859", "Name": "Xã Thụy Văn", "Level": "Xã" },
          { "Id": "12862", "Name": "Xã Thụy Xuân", "Level": "Xã" },
          { "Id": "12865", "Name": "Xã Dương Phúc", "Level": "Xã" },
          { "Id": "12868", "Name": "Xã Thụy Trình", "Level": "Xã" },
          { "Id": "12871", "Name": "Xã Thụy Bình", "Level": "Xã" },
          { "Id": "12874", "Name": "Xã Thụy Chính", "Level": "Xã" },
          { "Id": "12877", "Name": "Xã Thụy Dân", "Level": "Xã" },
          { "Id": "12880", "Name": "Xã Thụy Hải", "Level": "Xã" },
          { "Id": "12889", "Name": "Xã Thụy Liên", "Level": "Xã" },
          { "Id": "12892", "Name": "Xã Thụy Duyên", "Level": "Xã" },
          { "Id": "12898", "Name": "Xã Thụy Thanh", "Level": "Xã" },
          { "Id": "12901", "Name": "Xã Thụy Sơn", "Level": "Xã" },
          { "Id": "12904", "Name": "Xã Thụy Phong", "Level": "Xã" },
          { "Id": "12907", "Name": "Xã Thái Thượng", "Level": "Xã" },
          { "Id": "12910", "Name": "Xã Thái Nguyên", "Level": "Xã" },
          { "Id": "12916", "Name": "Xã Dương Hồng  Thủy", "Level": "Xã" },
          { "Id": "12919", "Name": "Xã Thái Giang", "Level": "Xã" },
          { "Id": "12922", "Name": "Xã Hòa An", "Level": "Xã" },
          { "Id": "12925", "Name": "Xã Sơn Hà", "Level": "Xã" },
          { "Id": "12934", "Name": "Xã Thái Phúc", "Level": "Xã" },
          { "Id": "12937", "Name": "Xã Thái Hưng", "Level": "Xã" },
          { "Id": "12940", "Name": "Xã Thái Đô", "Level": "Xã" },
          { "Id": "12943", "Name": "Xã Thái Xuyên", "Level": "Xã" },
          { "Id": "12949", "Name": "Xã  Mỹ Lộc", "Level": "Xã" },
          { "Id": "12958", "Name": "Xã Tân Học", "Level": "Xã" },
          { "Id": "12961", "Name": "Xã Thái Thịnh", "Level": "Xã" },
          { "Id": "12964", "Name": "Xã Thuần Thành", "Level": "Xã" },
          { "Id": "12967", "Name": "Xã Thái Thọ", "Level": "Xã" }
        ]
      },
      {
        "Id": "342",
        "Name": "Huyện Tiền Hải",
        "Wards": [
          { "Id": "12970", "Name": "Thị trấn Tiền Hải", "Level": "Thị trấn" },
          { "Id": "12976", "Name": "Xã Đông Trà", "Level": "Xã" },
          { "Id": "12979", "Name": "Xã Đông Long", "Level": "Xã" },
          { "Id": "12982", "Name": "Xã Đông Quí", "Level": "Xã" },
          { "Id": "12985", "Name": "Xã Vũ Lăng", "Level": "Xã" },
          { "Id": "12988", "Name": "Xã Đông Xuyên", "Level": "Xã" },
          { "Id": "12991", "Name": "Xã Tây Lương", "Level": "Xã" },
          { "Id": "12994", "Name": "Xã Tây Ninh", "Level": "Xã" },
          { "Id": "12997", "Name": "Xã Đông Trung", "Level": "Xã" },
          { "Id": "13000", "Name": "Xã Đông Hoàng", "Level": "Xã" },
          { "Id": "13003", "Name": "Xã Đông Minh", "Level": "Xã" },
          { "Id": "13009", "Name": "Xã Đông Phong", "Level": "Xã" },
          { "Id": "13012", "Name": "Xã An Ninh", "Level": "Xã" },
          { "Id": "13018", "Name": "Xã Đông Cơ", "Level": "Xã" },
          { "Id": "13021", "Name": "Xã Tây Giang", "Level": "Xã" },
          { "Id": "13024", "Name": "Xã Đông Lâm", "Level": "Xã" },
          { "Id": "13027", "Name": "Xã Phương Công", "Level": "Xã" },
          { "Id": "13030", "Name": "Xã Tây Phong", "Level": "Xã" },
          { "Id": "13033", "Name": "Xã Tây Tiến", "Level": "Xã" },
          { "Id": "13036", "Name": "Xã Nam Cường", "Level": "Xã" },
          { "Id": "13039", "Name": "Xã Vân Trường", "Level": "Xã" },
          { "Id": "13042", "Name": "Xã Nam Thắng", "Level": "Xã" },
          { "Id": "13045", "Name": "Xã Nam Chính", "Level": "Xã" },
          { "Id": "13048", "Name": "Xã Bắc Hải", "Level": "Xã" },
          { "Id": "13051", "Name": "Xã Nam Thịnh", "Level": "Xã" },
          { "Id": "13054", "Name": "Xã Nam Hà", "Level": "Xã" },
          { "Id": "13057", "Name": "Xã Nam Thanh", "Level": "Xã" },
          { "Id": "13060", "Name": "Xã Nam Trung", "Level": "Xã" },
          { "Id": "13063", "Name": "Xã Nam Hồng", "Level": "Xã" },
          { "Id": "13066", "Name": "Xã Nam Hưng", "Level": "Xã" },
          { "Id": "13069", "Name": "Xã Nam Hải", "Level": "Xã" },
          { "Id": "13072", "Name": "Xã Nam Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "343",
        "Name": "Huyện Kiến Xương",
        "Wards": [
          { "Id": "13075", "Name": "Thị trấn Kiến Xương", "Level": "Thị trấn" },
          { "Id": "13078", "Name": "Xã Trà Giang", "Level": "Xã" },
          { "Id": "13081", "Name": "Xã Quốc Tuấn", "Level": "Xã" },
          { "Id": "13087", "Name": "Xã An Bình", "Level": "Xã" },
          { "Id": "13090", "Name": "Xã Tây Sơn", "Level": "Xã" },
          { "Id": "13093", "Name": "Xã Hồng Thái", "Level": "Xã" },
          { "Id": "13096", "Name": "Xã Bình Nguyên", "Level": "Xã" },
          { "Id": "13102", "Name": "Xã Lê Lợi", "Level": "Xã" },
          { "Id": "13111", "Name": "Xã Vũ Lễ", "Level": "Xã" },
          { "Id": "13114", "Name": "Xã Thanh Tân", "Level": "Xã" },
          { "Id": "13117", "Name": "Xã Thượng Hiền", "Level": "Xã" },
          { "Id": "13120", "Name": "Xã Nam Cao", "Level": "Xã" },
          { "Id": "13123", "Name": "Xã Đình Phùng", "Level": "Xã" },
          { "Id": "13126", "Name": "Xã Vũ Ninh", "Level": "Xã" },
          { "Id": "13129", "Name": "Xã Vũ An", "Level": "Xã" },
          { "Id": "13132", "Name": "Xã Quang Lịch", "Level": "Xã" },
          { "Id": "13135", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "13138", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "13141", "Name": "Xã Vũ Quí", "Level": "Xã" },
          { "Id": "13144", "Name": "Xã Quang Bình", "Level": "Xã" },
          { "Id": "13150", "Name": "Xã Vũ Trung", "Level": "Xã" },
          { "Id": "13153", "Name": "Xã Vũ Thắng", "Level": "Xã" },
          { "Id": "13156", "Name": "Xã Vũ Công", "Level": "Xã" },
          { "Id": "13159", "Name": "Xã Vũ Hòa", "Level": "Xã" },
          { "Id": "13162", "Name": "Xã Quang Minh", "Level": "Xã" },
          { "Id": "13165", "Name": "Xã Quang Trung", "Level": "Xã" },
          { "Id": "13171", "Name": "Xã Minh Quang", "Level": "Xã" },
          { "Id": "13174", "Name": "Xã Vũ Bình", "Level": "Xã" },
          { "Id": "13177", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "13180", "Name": "Xã Nam Bình", "Level": "Xã" },
          { "Id": "13183", "Name": "Xã Bình Thanh", "Level": "Xã" },
          { "Id": "13186", "Name": "Xã Bình Định", "Level": "Xã" },
          { "Id": "13189", "Name": "Xã Hồng Tiến", "Level": "Xã" }
        ]
      },
      {
        "Id": "344",
        "Name": "Huyện Vũ Thư",
        "Wards": [
          { "Id": "13192", "Name": "Thị trấn Vũ Thư", "Level": "Thị trấn" },
          { "Id": "13195", "Name": "Xã Hồng Lý", "Level": "Xã" },
          { "Id": "13198", "Name": "Xã Đồng Thanh", "Level": "Xã" },
          { "Id": "13201", "Name": "Xã Xuân Hòa", "Level": "Xã" },
          { "Id": "13204", "Name": "Xã Hiệp Hòa", "Level": "Xã" },
          { "Id": "13207", "Name": "Xã Phúc Thành", "Level": "Xã" },
          { "Id": "13210", "Name": "Xã Tân Phong", "Level": "Xã" },
          { "Id": "13213", "Name": "Xã Song Lãng", "Level": "Xã" },
          { "Id": "13216", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "13219", "Name": "Xã Việt Hùng", "Level": "Xã" },
          { "Id": "13222", "Name": "Xã Minh Lãng", "Level": "Xã" },
          { "Id": "13228", "Name": "Xã Minh Khai", "Level": "Xã" },
          { "Id": "13231", "Name": "Xã Dũng Nghĩa", "Level": "Xã" },
          { "Id": "13234", "Name": "Xã Minh Quang", "Level": "Xã" },
          { "Id": "13237", "Name": "Xã Tam Quang", "Level": "Xã" },
          { "Id": "13240", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "13243", "Name": "Xã Bách Thuận", "Level": "Xã" },
          { "Id": "13246", "Name": "Xã Tự Tân", "Level": "Xã" },
          { "Id": "13249", "Name": "Xã Song An", "Level": "Xã" },
          { "Id": "13252", "Name": "Xã Trung An", "Level": "Xã" },
          { "Id": "13255", "Name": "Xã Vũ Hội", "Level": "Xã" },
          { "Id": "13258", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "13261", "Name": "Xã Nguyên Xá", "Level": "Xã" },
          { "Id": "13264", "Name": "Xã Việt Thuận", "Level": "Xã" },
          { "Id": "13267", "Name": "Xã Vũ Vinh", "Level": "Xã" },
          { "Id": "13270", "Name": "Xã Vũ Đoài", "Level": "Xã" },
          { "Id": "13273", "Name": "Xã Vũ Tiến", "Level": "Xã" },
          { "Id": "13276", "Name": "Xã Vũ Vân", "Level": "Xã" },
          { "Id": "13279", "Name": "Xã Duy Nhất", "Level": "Xã" },
          { "Id": "13282", "Name": "Xã Hồng Phong", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "35",
    "Name": "Tỉnh Hà Nam",
    "Districts": [
      {
        "Id": "347",
        "Name": "Thành phố Phủ Lý",
        "Wards": [
          { "Id": "13285", "Name": "Phường Quang Trung", "Level": "Phường" },
          {
            "Id": "13288",
            "Name": "Phường Lương Khánh Thiện",
            "Level": "Phường"
          },
          { "Id": "13291", "Name": "Phường Lê Hồng Phong", "Level": "Phường" },
          { "Id": "13294", "Name": "Phường Minh Khai", "Level": "Phường" },
          { "Id": "13297", "Name": "Phường Hai Bà Trưng", "Level": "Phường" },
          { "Id": "13300", "Name": "Phường Trần Hưng Đạo", "Level": "Phường" },
          { "Id": "13303", "Name": "Phường Lam Hạ", "Level": "Phường" },
          { "Id": "13306", "Name": "Xã Phù Vân", "Level": "Xã" },
          { "Id": "13309", "Name": "Phường Liêm Chính", "Level": "Phường" },
          { "Id": "13312", "Name": "Xã Liêm Chung", "Level": "Xã" },
          { "Id": "13315", "Name": "Phường Thanh Châu", "Level": "Phường" },
          { "Id": "13318", "Name": "Phường Châu Sơn", "Level": "Phường" },
          { "Id": "13366", "Name": "Xã Tiên Tân", "Level": "Xã" },
          { "Id": "13372", "Name": "Xã Tiên Hiệp", "Level": "Xã" },
          { "Id": "13381", "Name": "Xã Tiên Hải", "Level": "Xã" },
          { "Id": "13426", "Name": "Xã Kim Bình", "Level": "Xã" },
          { "Id": "13444", "Name": "Xã Liêm Tuyền", "Level": "Xã" },
          { "Id": "13447", "Name": "Xã Liêm Tiết", "Level": "Xã" },
          { "Id": "13459", "Name": "Phường Thanh Tuyền", "Level": "Phường" },
          { "Id": "13507", "Name": "Xã Đinh Xá", "Level": "Xã" },
          { "Id": "13513", "Name": "Xã Trịnh Xá", "Level": "Xã" }
        ]
      },
      {
        "Id": "349",
        "Name": "Thị xã Duy Tiên",
        "Wards": [
          { "Id": "13321", "Name": "Phường Đồng Văn", "Level": "Phường" },
          { "Id": "13324", "Name": "Phường Hòa Mạc", "Level": "Phường" },
          { "Id": "13327", "Name": "Xã Mộc Bắc", "Level": "Xã" },
          { "Id": "13330", "Name": "Phường Châu Giang", "Level": "Phường" },
          { "Id": "13333", "Name": "Phường Bạch Thượng", "Level": "Phường" },
          { "Id": "13336", "Name": "Phường Duy Minh", "Level": "Phường" },
          { "Id": "13339", "Name": "Xã Mộc Nam", "Level": "Xã" },
          { "Id": "13342", "Name": "Phường Duy Hải", "Level": "Phường" },
          { "Id": "13345", "Name": "Xã Chuyên Ngoại", "Level": "Xã" },
          { "Id": "13348", "Name": "Phường Yên Bắc", "Level": "Phường" },
          { "Id": "13351", "Name": "Xã Trác Văn", "Level": "Xã" },
          { "Id": "13354", "Name": "Phường Tiên Nội", "Level": "Phường" },
          { "Id": "13357", "Name": "Phường Hoàng Đông", "Level": "Phường" },
          { "Id": "13360", "Name": "Xã Yên Nam", "Level": "Xã" },
          { "Id": "13363", "Name": "Xã Tiên Ngoại", "Level": "Xã" },
          { "Id": "13369", "Name": "Xã Tiên Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "350",
        "Name": "Huyện Kim Bảng",
        "Wards": [
          { "Id": "13384", "Name": "Thị trấn Quế", "Level": "Thị trấn" },
          { "Id": "13387", "Name": "Xã Nguyễn Úy", "Level": "Xã" },
          { "Id": "13390", "Name": "Xã Đại Cương", "Level": "Xã" },
          { "Id": "13393", "Name": "Xã Lê Hồ", "Level": "Xã" },
          { "Id": "13396", "Name": "Xã Tượng Lĩnh", "Level": "Xã" },
          { "Id": "13399", "Name": "Xã Nhật Tựu", "Level": "Xã" },
          { "Id": "13402", "Name": "Xã Nhật Tân", "Level": "Xã" },
          { "Id": "13405", "Name": "Xã Đồng Hóa", "Level": "Xã" },
          { "Id": "13408", "Name": "Xã Hoàng Tây", "Level": "Xã" },
          { "Id": "13411", "Name": "Xã Tân Sơn", "Level": "Xã" },
          { "Id": "13414", "Name": "Xã Thụy Lôi", "Level": "Xã" },
          { "Id": "13417", "Name": "Xã Văn Xá", "Level": "Xã" },
          { "Id": "13420", "Name": "Xã Khả Phong", "Level": "Xã" },
          { "Id": "13423", "Name": "Xã Ngọc Sơn", "Level": "Xã" },
          { "Id": "13429", "Name": "Thị trấn Ba Sao", "Level": "Thị trấn" },
          { "Id": "13432", "Name": "Xã Liên Sơn", "Level": "Xã" },
          { "Id": "13435", "Name": "Xã Thi Sơn", "Level": "Xã" },
          { "Id": "13438", "Name": "Xã Thanh Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "351",
        "Name": "Huyện Thanh Liêm",
        "Wards": [
          { "Id": "13441", "Name": "Thị trấn Kiện Khê", "Level": "Thị trấn" },
          { "Id": "13450", "Name": "Xã Liêm Phong", "Level": "Xã" },
          { "Id": "13453", "Name": "Xã Thanh Hà", "Level": "Xã" },
          { "Id": "13456", "Name": "Xã Liêm Cần", "Level": "Xã" },
          { "Id": "13465", "Name": "Xã Liêm Thuận", "Level": "Xã" },
          { "Id": "13468", "Name": "Xã Thanh Thủy", "Level": "Xã" },
          { "Id": "13471", "Name": "Xã Thanh Phong", "Level": "Xã" },
          { "Id": "13474", "Name": "Thị trấn Tân Thanh", "Level": "Thị trấn" },
          { "Id": "13477", "Name": "Xã Thanh Tân", "Level": "Xã" },
          { "Id": "13480", "Name": "Xã Liêm Túc", "Level": "Xã" },
          { "Id": "13483", "Name": "Xã Liêm Sơn", "Level": "Xã" },
          { "Id": "13486", "Name": "Xã Thanh Hương", "Level": "Xã" },
          { "Id": "13489", "Name": "Xã Thanh Nghị", "Level": "Xã" },
          { "Id": "13492", "Name": "Xã Thanh Tâm", "Level": "Xã" },
          { "Id": "13495", "Name": "Xã Thanh Nguyên", "Level": "Xã" },
          { "Id": "13498", "Name": "Xã Thanh Hải", "Level": "Xã" }
        ]
      },
      {
        "Id": "352",
        "Name": "Huyện Bình Lục",
        "Wards": [
          { "Id": "13501", "Name": "Thị trấn Bình Mỹ", "Level": "Thị trấn" },
          { "Id": "13504", "Name": "Xã Bình Nghĩa", "Level": "Xã" },
          { "Id": "13510", "Name": "Xã Tràng An", "Level": "Xã" },
          { "Id": "13516", "Name": "Xã Đồng Du", "Level": "Xã" },
          { "Id": "13519", "Name": "Xã Ngọc Lũ", "Level": "Xã" },
          { "Id": "13522", "Name": "Xã Hưng Công", "Level": "Xã" },
          { "Id": "13525", "Name": "Xã Đồn Xá", "Level": "Xã" },
          { "Id": "13528", "Name": "Xã An Ninh", "Level": "Xã" },
          { "Id": "13531", "Name": "Xã Bồ Đề", "Level": "Xã" },
          { "Id": "13534", "Name": "Xã Bối Cầu", "Level": "Xã" },
          { "Id": "13540", "Name": "Xã An Nội", "Level": "Xã" },
          { "Id": "13543", "Name": "Xã Vũ Bản", "Level": "Xã" },
          { "Id": "13546", "Name": "Xã Trung Lương", "Level": "Xã" },
          { "Id": "13552", "Name": "Xã An Đổ", "Level": "Xã" },
          { "Id": "13555", "Name": "Xã La Sơn", "Level": "Xã" },
          { "Id": "13558", "Name": "Xã Tiêu Động", "Level": "Xã" },
          { "Id": "13561", "Name": "Xã An Lão", "Level": "Xã" }
        ]
      },
      {
        "Id": "353",
        "Name": "Huyện Lý Nhân",
        "Wards": [
          { "Id": "13567", "Name": "Xã Hợp Lý", "Level": "Xã" },
          { "Id": "13570", "Name": "Xã Nguyên Lý", "Level": "Xã" },
          { "Id": "13573", "Name": "Xã Chính Lý", "Level": "Xã" },
          { "Id": "13576", "Name": "Xã Chân Lý", "Level": "Xã" },
          { "Id": "13579", "Name": "Xã Đạo Lý", "Level": "Xã" },
          { "Id": "13582", "Name": "Xã Công Lý", "Level": "Xã" },
          { "Id": "13585", "Name": "Xã Văn Lý", "Level": "Xã" },
          { "Id": "13588", "Name": "Xã Bắc Lý", "Level": "Xã" },
          { "Id": "13591", "Name": "Xã Đức Lý", "Level": "Xã" },
          { "Id": "13594", "Name": "Xã Trần Hưng Đạo", "Level": "Xã" },
          { "Id": "13597", "Name": "Thị trấn Vĩnh Trụ", "Level": "Thị trấn" },
          { "Id": "13600", "Name": "Xã Nhân Thịnh", "Level": "Xã" },
          { "Id": "13606", "Name": "Xã Nhân Khang", "Level": "Xã" },
          { "Id": "13609", "Name": "Xã Nhân Mỹ", "Level": "Xã" },
          { "Id": "13612", "Name": "Xã Nhân Nghĩa", "Level": "Xã" },
          { "Id": "13615", "Name": "Xã Nhân Chính", "Level": "Xã" },
          { "Id": "13618", "Name": "Xã Nhân Bình", "Level": "Xã" },
          { "Id": "13621", "Name": "Xã Phú Phúc", "Level": "Xã" },
          { "Id": "13624", "Name": "Xã Xuân Khê", "Level": "Xã" },
          { "Id": "13627", "Name": "Xã Tiến Thắng", "Level": "Xã" },
          { "Id": "13630", "Name": "Xã Hòa Hậu", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "36",
    "Name": "Tỉnh Nam Định",
    "Districts": [
      {
        "Id": "356",
        "Name": "Thành phố Nam Định",
        "Wards": [
          { "Id": "13633", "Name": "Phường Hạ Long", "Level": "Phường" },
          { "Id": "13636", "Name": "Phường Trần Tế Xương", "Level": "Phường" },
          { "Id": "13639", "Name": "Phường Vị Hoàng", "Level": "Phường" },
          { "Id": "13642", "Name": "Phường Vị Xuyên", "Level": "Phường" },
          { "Id": "13645", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "13648", "Name": "Phường Cửa Bắc", "Level": "Phường" },
          { "Id": "13651", "Name": "Phường Nguyễn Du", "Level": "Phường" },
          { "Id": "13654", "Name": "Phường Bà Triệu", "Level": "Phường" },
          { "Id": "13657", "Name": "Phường Trường Thi", "Level": "Phường" },
          {
            "Id": "13660",
            "Name": "Phường Phan Đình Phùng",
            "Level": "Phường"
          },
          { "Id": "13663", "Name": "Phường Ngô Quyền", "Level": "Phường" },
          { "Id": "13666", "Name": "Phường Trần Hưng Đạo", "Level": "Phường" },
          { "Id": "13669", "Name": "Phường Trần Đăng Ninh", "Level": "Phường" },
          { "Id": "13672", "Name": "Phường Năng Tĩnh", "Level": "Phường" },
          { "Id": "13675", "Name": "Phường Văn Miếu", "Level": "Phường" },
          {
            "Id": "13678",
            "Name": "Phường Trần Quang Khải",
            "Level": "Phường"
          },
          { "Id": "13681", "Name": "Phường Thống Nhất", "Level": "Phường" },
          { "Id": "13684", "Name": "Phường Lộc Hạ", "Level": "Phường" },
          { "Id": "13687", "Name": "Phường Lộc Vượng", "Level": "Phường" },
          { "Id": "13690", "Name": "Phường Cửa Nam", "Level": "Phường" },
          { "Id": "13693", "Name": "Phường Lộc Hòa", "Level": "Phường" },
          { "Id": "13696", "Name": "Xã Nam Phong", "Level": "Xã" },
          { "Id": "13699", "Name": "Phường Mỹ Xá", "Level": "Phường" },
          { "Id": "13702", "Name": "Xã Lộc An", "Level": "Xã" },
          { "Id": "13705", "Name": "Xã Nam Vân", "Level": "Xã" }
        ]
      },
      {
        "Id": "358",
        "Name": "Huyện Mỹ Lộc",
        "Wards": [
          { "Id": "13708", "Name": "Thị trấn Mỹ Lộc", "Level": "Thị trấn" },
          { "Id": "13711", "Name": "Xã Mỹ Hà", "Level": "Xã" },
          { "Id": "13714", "Name": "Xã Mỹ Tiến", "Level": "Xã" },
          { "Id": "13717", "Name": "Xã Mỹ Thắng", "Level": "Xã" },
          { "Id": "13720", "Name": "Xã Mỹ Trung", "Level": "Xã" },
          { "Id": "13723", "Name": "Xã Mỹ Tân", "Level": "Xã" },
          { "Id": "13726", "Name": "Xã Mỹ Phúc", "Level": "Xã" },
          { "Id": "13729", "Name": "Xã Mỹ Hưng", "Level": "Xã" },
          { "Id": "13732", "Name": "Xã Mỹ Thuận", "Level": "Xã" },
          { "Id": "13735", "Name": "Xã Mỹ Thịnh", "Level": "Xã" },
          { "Id": "13738", "Name": "Xã Mỹ Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "359",
        "Name": "Huyện Vụ Bản",
        "Wards": [
          { "Id": "13741", "Name": "Thị trấn Gôi", "Level": "Thị trấn" },
          { "Id": "13744", "Name": "Xã Minh Thuận", "Level": "Xã" },
          { "Id": "13747", "Name": "Xã Hiển Khánh", "Level": "Xã" },
          { "Id": "13750", "Name": "Xã Tân Khánh", "Level": "Xã" },
          { "Id": "13753", "Name": "Xã Hợp Hưng", "Level": "Xã" },
          { "Id": "13756", "Name": "Xã Đại An", "Level": "Xã" },
          { "Id": "13759", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "13762", "Name": "Xã Cộng Hòa", "Level": "Xã" },
          { "Id": "13765", "Name": "Xã Trung Thành", "Level": "Xã" },
          { "Id": "13768", "Name": "Xã Quang Trung", "Level": "Xã" },
          { "Id": "13771", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "13774", "Name": "Xã Liên Bảo", "Level": "Xã" },
          { "Id": "13777", "Name": "Xã Thành Lợi", "Level": "Xã" },
          { "Id": "13780", "Name": "Xã Kim Thái", "Level": "Xã" },
          { "Id": "13783", "Name": "Xã Liên Minh", "Level": "Xã" },
          { "Id": "13786", "Name": "Xã Đại Thắng", "Level": "Xã" },
          { "Id": "13789", "Name": "Xã Tam Thanh", "Level": "Xã" },
          { "Id": "13792", "Name": "Xã Vĩnh Hào", "Level": "Xã" }
        ]
      },
      {
        "Id": "360",
        "Name": "Huyện Ý Yên",
        "Wards": [
          { "Id": "13795", "Name": "Thị trấn Lâm", "Level": "Thị trấn" },
          { "Id": "13798", "Name": "Xã Yên Trung", "Level": "Xã" },
          { "Id": "13801", "Name": "Xã Yên Thành", "Level": "Xã" },
          { "Id": "13804", "Name": "Xã Yên Tân", "Level": "Xã" },
          { "Id": "13807", "Name": "Xã Yên Lợi", "Level": "Xã" },
          { "Id": "13810", "Name": "Xã Yên Thọ", "Level": "Xã" },
          { "Id": "13813", "Name": "Xã Yên Nghĩa", "Level": "Xã" },
          { "Id": "13816", "Name": "Xã Yên Minh", "Level": "Xã" },
          { "Id": "13819", "Name": "Xã Yên Phương", "Level": "Xã" },
          { "Id": "13822", "Name": "Xã Yên Chính", "Level": "Xã" },
          { "Id": "13825", "Name": "Xã Yên Bình", "Level": "Xã" },
          { "Id": "13828", "Name": "Xã Yên Phú", "Level": "Xã" },
          { "Id": "13831", "Name": "Xã Yên Mỹ", "Level": "Xã" },
          { "Id": "13834", "Name": "Xã Yên Dương", "Level": "Xã" },
          { "Id": "13840", "Name": "Xã Yên Hưng", "Level": "Xã" },
          { "Id": "13843", "Name": "Xã Yên Khánh", "Level": "Xã" },
          { "Id": "13846", "Name": "Xã Yên Phong", "Level": "Xã" },
          { "Id": "13849", "Name": "Xã Yên Ninh", "Level": "Xã" },
          { "Id": "13852", "Name": "Xã Yên Lương", "Level": "Xã" },
          { "Id": "13855", "Name": "Xã Yên Hồng", "Level": "Xã" },
          { "Id": "13858", "Name": "Xã Yên Quang", "Level": "Xã" },
          { "Id": "13861", "Name": "Xã Yên Tiến", "Level": "Xã" },
          { "Id": "13864", "Name": "Xã Yên Thắng", "Level": "Xã" },
          { "Id": "13867", "Name": "Xã Yên Phúc", "Level": "Xã" },
          { "Id": "13870", "Name": "Xã Yên Cường", "Level": "Xã" },
          { "Id": "13873", "Name": "Xã Yên Lộc", "Level": "Xã" },
          { "Id": "13876", "Name": "Xã Yên Bằng", "Level": "Xã" },
          { "Id": "13879", "Name": "Xã Yên Đồng", "Level": "Xã" },
          { "Id": "13882", "Name": "Xã Yên Khang", "Level": "Xã" },
          { "Id": "13885", "Name": "Xã Yên Nhân", "Level": "Xã" },
          { "Id": "13888", "Name": "Xã Yên Trị", "Level": "Xã" }
        ]
      },
      {
        "Id": "361",
        "Name": "Huyện Nghĩa Hưng",
        "Wards": [
          { "Id": "13891", "Name": "Thị trấn Liễu Đề", "Level": "Thị trấn" },
          { "Id": "13894", "Name": "Thị trấn Rạng Đông", "Level": "Thị trấn" },
          { "Id": "13897", "Name": "Xã Nghĩa Đồng", "Level": "Xã" },
          { "Id": "13900", "Name": "Xã Nghĩa Thịnh", "Level": "Xã" },
          { "Id": "13903", "Name": "Xã Nghĩa Minh", "Level": "Xã" },
          { "Id": "13906", "Name": "Xã Nghĩa Thái", "Level": "Xã" },
          { "Id": "13909", "Name": "Xã Hoàng Nam", "Level": "Xã" },
          { "Id": "13912", "Name": "Xã Nghĩa Châu", "Level": "Xã" },
          { "Id": "13915", "Name": "Xã Nghĩa Trung", "Level": "Xã" },
          { "Id": "13918", "Name": "Xã Nghĩa Sơn", "Level": "Xã" },
          { "Id": "13921", "Name": "Xã Nghĩa Lạc", "Level": "Xã" },
          { "Id": "13924", "Name": "Xã Nghĩa Hồng", "Level": "Xã" },
          { "Id": "13927", "Name": "Xã Nghĩa Phong", "Level": "Xã" },
          { "Id": "13930", "Name": "Xã Nghĩa Phú", "Level": "Xã" },
          { "Id": "13933", "Name": "Xã Nghĩa Bình", "Level": "Xã" },
          { "Id": "13936", "Name": "Thị trấn Quỹ Nhất", "Level": "Thị trấn" },
          { "Id": "13939", "Name": "Xã Nghĩa Tân", "Level": "Xã" },
          { "Id": "13942", "Name": "Xã Nghĩa Hùng", "Level": "Xã" },
          { "Id": "13945", "Name": "Xã Nghĩa Lâm", "Level": "Xã" },
          { "Id": "13948", "Name": "Xã Nghĩa Thành", "Level": "Xã" },
          { "Id": "13951", "Name": "Xã Phúc Thắng", "Level": "Xã" },
          { "Id": "13954", "Name": "Xã Nghĩa Lợi", "Level": "Xã" },
          { "Id": "13957", "Name": "Xã Nghĩa Hải", "Level": "Xã" },
          { "Id": "13963", "Name": "Xã Nam Điền", "Level": "Xã" }
        ]
      },
      {
        "Id": "362",
        "Name": "Huyện Nam Trực",
        "Wards": [
          { "Id": "13966", "Name": "Thị trấn Nam Giang", "Level": "Thị trấn" },
          { "Id": "13969", "Name": "Xã Nam Mỹ", "Level": "Xã" },
          { "Id": "13972", "Name": "Xã Điền Xá", "Level": "Xã" },
          { "Id": "13975", "Name": "Xã Nghĩa An", "Level": "Xã" },
          { "Id": "13978", "Name": "Xã Nam Thắng", "Level": "Xã" },
          { "Id": "13981", "Name": "Xã Nam Toàn", "Level": "Xã" },
          { "Id": "13984", "Name": "Xã Hồng Quang", "Level": "Xã" },
          { "Id": "13987", "Name": "Xã Tân Thịnh", "Level": "Xã" },
          { "Id": "13990", "Name": "Xã Nam Cường", "Level": "Xã" },
          { "Id": "13993", "Name": "Xã Nam Hồng", "Level": "Xã" },
          { "Id": "13996", "Name": "Xã Nam Hùng", "Level": "Xã" },
          { "Id": "13999", "Name": "Xã Nam Hoa", "Level": "Xã" },
          { "Id": "14002", "Name": "Xã Nam Dương", "Level": "Xã" },
          { "Id": "14005", "Name": "Xã Nam Thanh", "Level": "Xã" },
          { "Id": "14008", "Name": "Xã Nam Lợi", "Level": "Xã" },
          { "Id": "14011", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "14014", "Name": "Xã Đồng Sơn", "Level": "Xã" },
          { "Id": "14017", "Name": "Xã Nam Tiến", "Level": "Xã" },
          { "Id": "14020", "Name": "Xã Nam Hải", "Level": "Xã" },
          { "Id": "14023", "Name": "Xã Nam Thái", "Level": "Xã" }
        ]
      },
      {
        "Id": "363",
        "Name": "Huyện Trực Ninh",
        "Wards": [
          { "Id": "14026", "Name": "Thị trấn Cổ Lễ", "Level": "Thị trấn" },
          { "Id": "14029", "Name": "Xã Phương Định", "Level": "Xã" },
          { "Id": "14032", "Name": "Xã Trực Chính", "Level": "Xã" },
          { "Id": "14035", "Name": "Xã Trung Đông", "Level": "Xã" },
          { "Id": "14038", "Name": "Xã Liêm Hải", "Level": "Xã" },
          { "Id": "14041", "Name": "Xã Trực Tuấn", "Level": "Xã" },
          { "Id": "14044", "Name": "Xã Việt Hùng", "Level": "Xã" },
          { "Id": "14047", "Name": "Xã Trực Đạo", "Level": "Xã" },
          { "Id": "14050", "Name": "Xã Trực Hưng", "Level": "Xã" },
          { "Id": "14053", "Name": "Xã Trực Nội", "Level": "Xã" },
          { "Id": "14056", "Name": "Thị trấn Cát Thành", "Level": "Thị trấn" },
          { "Id": "14059", "Name": "Xã Trực Thanh", "Level": "Xã" },
          { "Id": "14062", "Name": "Xã Trực Khang", "Level": "Xã" },
          { "Id": "14065", "Name": "Xã Trực Thuận", "Level": "Xã" },
          { "Id": "14068", "Name": "Xã Trực Mỹ", "Level": "Xã" },
          { "Id": "14071", "Name": "Xã Trực Đại", "Level": "Xã" },
          { "Id": "14074", "Name": "Xã Trực Cường", "Level": "Xã" },
          { "Id": "14077", "Name": "Thị trấn Ninh Cường", "Level": "Thị trấn" },
          { "Id": "14080", "Name": "Xã Trực Thái", "Level": "Xã" },
          { "Id": "14083", "Name": "Xã Trực Hùng", "Level": "Xã" },
          { "Id": "14086", "Name": "Xã Trực Thắng", "Level": "Xã" }
        ]
      },
      {
        "Id": "364",
        "Name": "Huyện Xuân Trường",
        "Wards": [
          {
            "Id": "14089",
            "Name": "Thị trấn Xuân Trường",
            "Level": "Thị trấn"
          },
          { "Id": "14092", "Name": "Xã Xuân Châu", "Level": "Xã" },
          { "Id": "14095", "Name": "Xã Xuân Hồng", "Level": "Xã" },
          { "Id": "14098", "Name": "Xã Xuân Thành", "Level": "Xã" },
          { "Id": "14101", "Name": "Xã Xuân Thượng", "Level": "Xã" },
          { "Id": "14104", "Name": "Xã Xuân Phong", "Level": "Xã" },
          { "Id": "14107", "Name": "Xã Xuân Đài", "Level": "Xã" },
          { "Id": "14110", "Name": "Xã Xuân Tân", "Level": "Xã" },
          { "Id": "14113", "Name": "Xã Xuân Thủy", "Level": "Xã" },
          { "Id": "14116", "Name": "Xã Xuân Ngọc", "Level": "Xã" },
          { "Id": "14119", "Name": "Xã Xuân Bắc", "Level": "Xã" },
          { "Id": "14122", "Name": "Xã Xuân Phương", "Level": "Xã" },
          { "Id": "14125", "Name": "Xã Thọ Nghiệp", "Level": "Xã" },
          { "Id": "14128", "Name": "Xã Xuân Phú", "Level": "Xã" },
          { "Id": "14131", "Name": "Xã Xuân Trung", "Level": "Xã" },
          { "Id": "14134", "Name": "Xã Xuân Vinh", "Level": "Xã" },
          { "Id": "14137", "Name": "Xã Xuân Kiên", "Level": "Xã" },
          { "Id": "14140", "Name": "Xã Xuân Tiến", "Level": "Xã" },
          { "Id": "14143", "Name": "Xã Xuân Ninh", "Level": "Xã" },
          { "Id": "14146", "Name": "Xã Xuân Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "365",
        "Name": "Huyện Giao Thủy",
        "Wards": [
          { "Id": "14149", "Name": "Thị trấn Ngô Đồng", "Level": "Thị trấn" },
          { "Id": "14152", "Name": "Thị trấn Quất Lâm", "Level": "Thị trấn" },
          { "Id": "14155", "Name": "Xã Giao Hương", "Level": "Xã" },
          { "Id": "14158", "Name": "Xã Hồng Thuận", "Level": "Xã" },
          { "Id": "14161", "Name": "Xã Giao Thiện", "Level": "Xã" },
          { "Id": "14164", "Name": "Xã Giao Thanh", "Level": "Xã" },
          { "Id": "14167", "Name": "Xã Hoành Sơn", "Level": "Xã" },
          { "Id": "14170", "Name": "Xã Bình Hòa", "Level": "Xã" },
          { "Id": "14173", "Name": "Xã Giao Tiến", "Level": "Xã" },
          { "Id": "14176", "Name": "Xã Giao Hà", "Level": "Xã" },
          { "Id": "14179", "Name": "Xã Giao Nhân", "Level": "Xã" },
          { "Id": "14182", "Name": "Xã Giao An", "Level": "Xã" },
          { "Id": "14185", "Name": "Xã Giao Lạc", "Level": "Xã" },
          { "Id": "14188", "Name": "Xã Giao Châu", "Level": "Xã" },
          { "Id": "14191", "Name": "Xã Giao Tân", "Level": "Xã" },
          { "Id": "14194", "Name": "Xã Giao Yến", "Level": "Xã" },
          { "Id": "14197", "Name": "Xã Giao Xuân", "Level": "Xã" },
          { "Id": "14200", "Name": "Xã Giao Thịnh", "Level": "Xã" },
          { "Id": "14203", "Name": "Xã Giao Hải", "Level": "Xã" },
          { "Id": "14206", "Name": "Xã Bạch Long", "Level": "Xã" },
          { "Id": "14209", "Name": "Xã Giao Long", "Level": "Xã" },
          { "Id": "14212", "Name": "Xã Giao Phong", "Level": "Xã" }
        ]
      },
      {
        "Id": "366",
        "Name": "Huyện Hải Hậu",
        "Wards": [
          { "Id": "14215", "Name": "Thị trấn Yên Định", "Level": "Thị trấn" },
          { "Id": "14218", "Name": "Thị trấn Cồn", "Level": "Thị trấn" },
          { "Id": "14221", "Name": "Thị trấn Thịnh Long", "Level": "Thị trấn" },
          { "Id": "14224", "Name": "Xã Hải Nam", "Level": "Xã" },
          { "Id": "14227", "Name": "Xã Hải Trung", "Level": "Xã" },
          { "Id": "14230", "Name": "Xã Hải Vân", "Level": "Xã" },
          { "Id": "14233", "Name": "Xã Hải Minh", "Level": "Xã" },
          { "Id": "14236", "Name": "Xã Hải Anh", "Level": "Xã" },
          { "Id": "14239", "Name": "Xã Hải Hưng", "Level": "Xã" },
          { "Id": "14242", "Name": "Xã Hải Bắc", "Level": "Xã" },
          { "Id": "14245", "Name": "Xã Hải Phúc", "Level": "Xã" },
          { "Id": "14248", "Name": "Xã Hải Thanh", "Level": "Xã" },
          { "Id": "14251", "Name": "Xã Hải Hà", "Level": "Xã" },
          { "Id": "14254", "Name": "Xã Hải Long", "Level": "Xã" },
          { "Id": "14257", "Name": "Xã Hải Phương", "Level": "Xã" },
          { "Id": "14260", "Name": "Xã Hải Đường", "Level": "Xã" },
          { "Id": "14263", "Name": "Xã Hải Lộc", "Level": "Xã" },
          { "Id": "14266", "Name": "Xã Hải Quang", "Level": "Xã" },
          { "Id": "14269", "Name": "Xã Hải Đông", "Level": "Xã" },
          { "Id": "14272", "Name": "Xã Hải Sơn", "Level": "Xã" },
          { "Id": "14275", "Name": "Xã Hải Tân", "Level": "Xã" },
          { "Id": "14281", "Name": "Xã Hải Phong", "Level": "Xã" },
          { "Id": "14284", "Name": "Xã Hải An", "Level": "Xã" },
          { "Id": "14287", "Name": "Xã Hải Tây", "Level": "Xã" },
          { "Id": "14290", "Name": "Xã Hải Lý", "Level": "Xã" },
          { "Id": "14293", "Name": "Xã Hải Phú", "Level": "Xã" },
          { "Id": "14296", "Name": "Xã Hải Giang", "Level": "Xã" },
          { "Id": "14299", "Name": "Xã Hải Cường", "Level": "Xã" },
          { "Id": "14302", "Name": "Xã Hải Ninh", "Level": "Xã" },
          { "Id": "14305", "Name": "Xã Hải Chính", "Level": "Xã" },
          { "Id": "14308", "Name": "Xã Hải Xuân", "Level": "Xã" },
          { "Id": "14311", "Name": "Xã Hải Châu", "Level": "Xã" },
          { "Id": "14314", "Name": "Xã Hải Triều", "Level": "Xã" },
          { "Id": "14317", "Name": "Xã Hải Hòa", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "37",
    "Name": "Tỉnh Ninh Bình",
    "Districts": [
      {
        "Id": "369",
        "Name": "Thành phố Ninh Bình",
        "Wards": [
          { "Id": "14320", "Name": "Phường Đông Thành", "Level": "Phường" },
          { "Id": "14323", "Name": "Phường Tân Thành", "Level": "Phường" },
          { "Id": "14326", "Name": "Phường Thanh Bình", "Level": "Phường" },
          { "Id": "14329", "Name": "Phường Vân Giang", "Level": "Phường" },
          { "Id": "14332", "Name": "Phường Bích Đào", "Level": "Phường" },
          { "Id": "14335", "Name": "Phường Phúc Thành", "Level": "Phường" },
          { "Id": "14338", "Name": "Phường Nam Bình", "Level": "Phường" },
          { "Id": "14341", "Name": "Phường Nam Thành", "Level": "Phường" },
          { "Id": "14344", "Name": "Phường Ninh Khánh", "Level": "Phường" },
          { "Id": "14347", "Name": "Xã Ninh Nhất", "Level": "Xã" },
          { "Id": "14350", "Name": "Xã Ninh Tiến", "Level": "Xã" },
          { "Id": "14353", "Name": "Xã Ninh Phúc", "Level": "Xã" },
          { "Id": "14356", "Name": "Phường Ninh Sơn", "Level": "Phường" },
          { "Id": "14359", "Name": "Phường Ninh Phong", "Level": "Phường" }
        ]
      },
      {
        "Id": "370",
        "Name": "Thành phố Tam Điệp",
        "Wards": [
          { "Id": "14362", "Name": "Phường Bắc Sơn", "Level": "Phường" },
          { "Id": "14365", "Name": "Phường Trung Sơn", "Level": "Phường" },
          { "Id": "14368", "Name": "Phường Nam Sơn", "Level": "Phường" },
          { "Id": "14369", "Name": "Phường Tây Sơn", "Level": "Phường" },
          { "Id": "14371", "Name": "Xã Yên Sơn", "Level": "Xã" },
          { "Id": "14374", "Name": "Phường Yên Bình", "Level": "Phường" },
          { "Id": "14375", "Name": "Phường Tân Bình", "Level": "Phường" },
          { "Id": "14377", "Name": "Xã Quang Sơn", "Level": "Xã" },
          { "Id": "14380", "Name": "Xã Đông Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "372",
        "Name": "Huyện Nho Quan",
        "Wards": [
          { "Id": "14383", "Name": "Thị trấn Nho Quan", "Level": "Thị trấn" },
          { "Id": "14386", "Name": "Xã Xích Thổ", "Level": "Xã" },
          { "Id": "14389", "Name": "Xã Gia Lâm", "Level": "Xã" },
          { "Id": "14392", "Name": "Xã Gia Sơn", "Level": "Xã" },
          { "Id": "14395", "Name": "Xã Thạch Bình", "Level": "Xã" },
          { "Id": "14398", "Name": "Xã Gia Thủy", "Level": "Xã" },
          { "Id": "14401", "Name": "Xã Gia Tường", "Level": "Xã" },
          { "Id": "14404", "Name": "Xã Cúc Phương", "Level": "Xã" },
          { "Id": "14407", "Name": "Xã Phú Sơn", "Level": "Xã" },
          { "Id": "14410", "Name": "Xã Đức Long", "Level": "Xã" },
          { "Id": "14413", "Name": "Xã Lạc Vân", "Level": "Xã" },
          { "Id": "14416", "Name": "Xã Đồng Phong", "Level": "Xã" },
          { "Id": "14419", "Name": "Xã Yên Quang", "Level": "Xã" },
          { "Id": "14422", "Name": "Xã Lạng Phong", "Level": "Xã" },
          { "Id": "14425", "Name": "Xã Thượng Hòa", "Level": "Xã" },
          { "Id": "14428", "Name": "Xã Văn Phong", "Level": "Xã" },
          { "Id": "14431", "Name": "Xã Văn Phương", "Level": "Xã" },
          { "Id": "14434", "Name": "Xã Thanh Lạc", "Level": "Xã" },
          { "Id": "14437", "Name": "Xã Sơn Lai", "Level": "Xã" },
          { "Id": "14440", "Name": "Xã Sơn Thành", "Level": "Xã" },
          { "Id": "14443", "Name": "Xã Văn Phú", "Level": "Xã" },
          { "Id": "14446", "Name": "Xã Phú Lộc", "Level": "Xã" },
          { "Id": "14449", "Name": "Xã Kỳ Phú", "Level": "Xã" },
          { "Id": "14452", "Name": "Xã Quỳnh Lưu", "Level": "Xã" },
          { "Id": "14455", "Name": "Xã Sơn Hà", "Level": "Xã" },
          { "Id": "14458", "Name": "Xã Phú Long", "Level": "Xã" },
          { "Id": "14461", "Name": "Xã Quảng Lạc", "Level": "Xã" }
        ]
      },
      {
        "Id": "373",
        "Name": "Huyện Gia Viễn",
        "Wards": [
          { "Id": "14464", "Name": "Thị trấn Me", "Level": "Thị trấn" },
          { "Id": "14467", "Name": "Xã Gia Hòa", "Level": "Xã" },
          { "Id": "14470", "Name": "Xã Gia Hưng", "Level": "Xã" },
          { "Id": "14473", "Name": "Xã Liên Sơn", "Level": "Xã" },
          { "Id": "14476", "Name": "Xã Gia Thanh", "Level": "Xã" },
          { "Id": "14479", "Name": "Xã Gia Vân", "Level": "Xã" },
          { "Id": "14482", "Name": "Xã Gia Phú", "Level": "Xã" },
          { "Id": "14485", "Name": "Xã Gia Xuân", "Level": "Xã" },
          { "Id": "14488", "Name": "Xã Gia Lập", "Level": "Xã" },
          { "Id": "14491", "Name": "Xã Gia Vượng", "Level": "Xã" },
          { "Id": "14494", "Name": "Xã Gia Trấn", "Level": "Xã" },
          { "Id": "14497", "Name": "Xã Gia Thịnh", "Level": "Xã" },
          { "Id": "14500", "Name": "Xã Gia Phương", "Level": "Xã" },
          { "Id": "14503", "Name": "Xã Gia Tân", "Level": "Xã" },
          { "Id": "14506", "Name": "Xã Gia Thắng", "Level": "Xã" },
          { "Id": "14509", "Name": "Xã Gia Trung", "Level": "Xã" },
          { "Id": "14512", "Name": "Xã Gia Minh", "Level": "Xã" },
          { "Id": "14515", "Name": "Xã Gia Lạc", "Level": "Xã" },
          { "Id": "14518", "Name": "Xã Gia Tiến", "Level": "Xã" },
          { "Id": "14521", "Name": "Xã Gia Sinh", "Level": "Xã" },
          { "Id": "14524", "Name": "Xã Gia Phong", "Level": "Xã" }
        ]
      },
      {
        "Id": "374",
        "Name": "Huyện Hoa Lư",
        "Wards": [
          { "Id": "14527", "Name": "Thị trấn Thiên Tôn", "Level": "Thị trấn" },
          { "Id": "14530", "Name": "Xã Ninh Giang", "Level": "Xã" },
          { "Id": "14533", "Name": "Xã Trường Yên", "Level": "Xã" },
          { "Id": "14536", "Name": "Xã Ninh Khang", "Level": "Xã" },
          { "Id": "14539", "Name": "Xã Ninh Mỹ", "Level": "Xã" },
          { "Id": "14542", "Name": "Xã Ninh Hòa", "Level": "Xã" },
          { "Id": "14545", "Name": "Xã Ninh Xuân", "Level": "Xã" },
          { "Id": "14548", "Name": "Xã Ninh Hải", "Level": "Xã" },
          { "Id": "14551", "Name": "Xã Ninh Thắng", "Level": "Xã" },
          { "Id": "14554", "Name": "Xã Ninh Vân", "Level": "Xã" },
          { "Id": "14557", "Name": "Xã Ninh An", "Level": "Xã" }
        ]
      },
      {
        "Id": "375",
        "Name": "Huyện Yên Khánh",
        "Wards": [
          { "Id": "14560", "Name": "Thị trấn Yên Ninh", "Level": "Thị trấn" },
          { "Id": "14563", "Name": "Xã Khánh Tiên", "Level": "Xã" },
          { "Id": "14566", "Name": "Xã Khánh Phú", "Level": "Xã" },
          { "Id": "14569", "Name": "Xã Khánh Hòa", "Level": "Xã" },
          { "Id": "14572", "Name": "Xã Khánh Lợi", "Level": "Xã" },
          { "Id": "14575", "Name": "Xã Khánh An", "Level": "Xã" },
          { "Id": "14578", "Name": "Xã Khánh Cường", "Level": "Xã" },
          { "Id": "14581", "Name": "Xã Khánh Cư", "Level": "Xã" },
          { "Id": "14584", "Name": "Xã Khánh Thiện", "Level": "Xã" },
          { "Id": "14587", "Name": "Xã Khánh Hải", "Level": "Xã" },
          { "Id": "14590", "Name": "Xã Khánh Trung", "Level": "Xã" },
          { "Id": "14593", "Name": "Xã Khánh Mậu", "Level": "Xã" },
          { "Id": "14596", "Name": "Xã Khánh Vân", "Level": "Xã" },
          { "Id": "14599", "Name": "Xã Khánh Hội", "Level": "Xã" },
          { "Id": "14602", "Name": "Xã Khánh Công", "Level": "Xã" },
          { "Id": "14608", "Name": "Xã Khánh Thành", "Level": "Xã" },
          { "Id": "14611", "Name": "Xã Khánh Nhạc", "Level": "Xã" },
          { "Id": "14614", "Name": "Xã Khánh Thủy", "Level": "Xã" },
          { "Id": "14617", "Name": "Xã Khánh Hồng", "Level": "Xã" }
        ]
      },
      {
        "Id": "376",
        "Name": "Huyện Kim Sơn",
        "Wards": [
          { "Id": "14620", "Name": "Thị trấn Phát Diệm", "Level": "Thị trấn" },
          { "Id": "14623", "Name": "Thị trấn Bình Minh", "Level": "Thị trấn" },
          { "Id": "14629", "Name": "Xã Hồi Ninh", "Level": "Xã" },
          { "Id": "14632", "Name": "Xã Xuân Chính", "Level": "Xã" },
          { "Id": "14635", "Name": "Xã Kim Định", "Level": "Xã" },
          { "Id": "14638", "Name": "Xã Ân Hòa", "Level": "Xã" },
          { "Id": "14641", "Name": "Xã Hùng Tiến", "Level": "Xã" },
          { "Id": "14647", "Name": "Xã Quang Thiện", "Level": "Xã" },
          { "Id": "14650", "Name": "Xã Như Hòa", "Level": "Xã" },
          { "Id": "14653", "Name": "Xã Chất Bình", "Level": "Xã" },
          { "Id": "14656", "Name": "Xã Đồng Hướng", "Level": "Xã" },
          { "Id": "14659", "Name": "Xã Kim Chính", "Level": "Xã" },
          { "Id": "14662", "Name": "Xã Thượng Kiệm", "Level": "Xã" },
          { "Id": "14665", "Name": "Xã Lưu Phương", "Level": "Xã" },
          { "Id": "14668", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "14671", "Name": "Xã Yên Lộc", "Level": "Xã" },
          { "Id": "14674", "Name": "Xã Lai Thành", "Level": "Xã" },
          { "Id": "14677", "Name": "Xã Định Hóa", "Level": "Xã" },
          { "Id": "14680", "Name": "Xã Văn Hải", "Level": "Xã" },
          { "Id": "14683", "Name": "Xã Kim Tân", "Level": "Xã" },
          { "Id": "14686", "Name": "Xã Kim Mỹ", "Level": "Xã" },
          { "Id": "14689", "Name": "Xã Cồn Thoi", "Level": "Xã" },
          { "Id": "14692", "Name": "Xã Kim Hải", "Level": "Xã" },
          { "Id": "14695", "Name": "Xã Kim Trung", "Level": "Xã" },
          { "Id": "14698", "Name": "Xã Kim Đông", "Level": "Xã" }
        ]
      },
      {
        "Id": "377",
        "Name": "Huyện Yên Mô",
        "Wards": [
          { "Id": "14701", "Name": "Thị trấn Yên Thịnh", "Level": "Thị trấn" },
          { "Id": "14704", "Name": "Xã Khánh Thượng", "Level": "Xã" },
          { "Id": "14707", "Name": "Xã Khánh Dương", "Level": "Xã" },
          { "Id": "14710", "Name": "Xã Mai Sơn", "Level": "Xã" },
          { "Id": "14713", "Name": "Xã Khánh Thịnh", "Level": "Xã" },
          { "Id": "14719", "Name": "Xã Yên Phong", "Level": "Xã" },
          { "Id": "14722", "Name": "Xã Yên Hòa", "Level": "Xã" },
          { "Id": "14725", "Name": "Xã Yên Thắng", "Level": "Xã" },
          { "Id": "14728", "Name": "Xã Yên Từ", "Level": "Xã" },
          { "Id": "14731", "Name": "Xã Yên Hưng", "Level": "Xã" },
          { "Id": "14734", "Name": "Xã Yên Thành", "Level": "Xã" },
          { "Id": "14737", "Name": "Xã Yên Nhân", "Level": "Xã" },
          { "Id": "14740", "Name": "Xã Yên Mỹ", "Level": "Xã" },
          { "Id": "14743", "Name": "Xã Yên Mạc", "Level": "Xã" },
          { "Id": "14746", "Name": "Xã Yên Đồng", "Level": "Xã" },
          { "Id": "14749", "Name": "Xã Yên Thái", "Level": "Xã" },
          { "Id": "14752", "Name": "Xã Yên Lâm", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "38",
    "Name": "Tỉnh Thanh Hóa",
    "Districts": [
      {
        "Id": "380",
        "Name": "Thành phố Thanh Hóa",
        "Wards": [
          { "Id": "14755", "Name": "Phường Hàm Rồng", "Level": "Phường" },
          { "Id": "14758", "Name": "Phường Đông Thọ", "Level": "Phường" },
          { "Id": "14761", "Name": "Phường Nam Ngạn", "Level": "Phường" },
          { "Id": "14764", "Name": "Phường Trường Thi", "Level": "Phường" },
          { "Id": "14767", "Name": "Phường Điện Biên", "Level": "Phường" },
          { "Id": "14770", "Name": "Phường Phú Sơn", "Level": "Phường" },
          { "Id": "14773", "Name": "Phường Lam Sơn", "Level": "Phường" },
          { "Id": "14776", "Name": "Phường Ba Đình", "Level": "Phường" },
          { "Id": "14779", "Name": "Phường Ngọc Trạo", "Level": "Phường" },
          { "Id": "14782", "Name": "Phường Đông Vệ", "Level": "Phường" },
          { "Id": "14785", "Name": "Phường Đông Sơn", "Level": "Phường" },
          { "Id": "14788", "Name": "Phường Tân Sơn", "Level": "Phường" },
          { "Id": "14791", "Name": "Phường Đông Cương", "Level": "Phường" },
          { "Id": "14794", "Name": "Phường Đông Hương", "Level": "Phường" },
          { "Id": "14797", "Name": "Phường Đông Hải", "Level": "Phường" },
          { "Id": "14800", "Name": "Phường Quảng Hưng", "Level": "Phường" },
          { "Id": "14803", "Name": "Phường Quảng Thắng", "Level": "Phường" },
          { "Id": "14806", "Name": "Phường Quảng Thành", "Level": "Phường" },
          { "Id": "15850", "Name": "Xã Thiệu Vân", "Level": "Xã" },
          { "Id": "15856", "Name": "Xã Thiệu Khánh", "Level": "Xã" },
          { "Id": "15859", "Name": "Xã Thiệu Dương", "Level": "Xã" },
          { "Id": "15913", "Name": "Phường Tào Xuyên", "Level": "Phường" },
          { "Id": "15922", "Name": "Xã Long Anh", "Level": "Xã" },
          { "Id": "15925", "Name": "Xã Hoằng Quang", "Level": "Xã" },
          { "Id": "15970", "Name": "Xã Hoằng Đại", "Level": "Xã" },
          { "Id": "16396", "Name": "Xã Đông Lĩnh", "Level": "Xã" },
          { "Id": "16429", "Name": "Xã Đông Vinh", "Level": "Xã" },
          { "Id": "16432", "Name": "Xã Đông Tân", "Level": "Xã" },
          { "Id": "16435", "Name": "Phường An Hưng", "Level": "Phường" },
          { "Id": "16441", "Name": "Xã Quảng Thịnh", "Level": "Xã" },
          { "Id": "16459", "Name": "Xã Quảng Đông", "Level": "Xã" },
          { "Id": "16507", "Name": "Xã Quảng Cát", "Level": "Xã" },
          { "Id": "16522", "Name": "Xã Quảng Phú", "Level": "Xã" },
          { "Id": "16525", "Name": "Xã Quảng Tâm", "Level": "Xã" }
        ]
      },
      {
        "Id": "381",
        "Name": "Thị xã Bỉm Sơn",
        "Wards": [
          { "Id": "14809", "Name": "Phường Bắc Sơn", "Level": "Phường" },
          { "Id": "14812", "Name": "Phường Ba Đình", "Level": "Phường" },
          { "Id": "14815", "Name": "Phường Lam Sơn", "Level": "Phường" },
          { "Id": "14818", "Name": "Phường Ngọc Trạo", "Level": "Phường" },
          { "Id": "14821", "Name": "Phường Đông Sơn", "Level": "Phường" },
          { "Id": "14823", "Name": "Phường Phú Sơn", "Level": "Phường" },
          { "Id": "14824", "Name": "Xã Quang Trung", "Level": "Xã" }
        ]
      },
      {
        "Id": "382",
        "Name": "Thành phố Sầm Sơn",
        "Wards": [
          { "Id": "14830", "Name": "Phường Trung Sơn", "Level": "Phường" },
          { "Id": "14833", "Name": "Phường Bắc Sơn", "Level": "Phường" },
          { "Id": "14836", "Name": "Phường Trường Sơn", "Level": "Phường" },
          { "Id": "14839", "Name": "Phường Quảng Cư", "Level": "Phường" },
          { "Id": "14842", "Name": "Phường Quảng Tiến", "Level": "Phường" },
          { "Id": "16513", "Name": "Xã Quảng Minh", "Level": "Xã" },
          { "Id": "16516", "Name": "Xã Quảng Hùng", "Level": "Xã" },
          { "Id": "16528", "Name": "Phường Quảng Thọ", "Level": "Phường" },
          { "Id": "16531", "Name": "Phường Quảng Châu", "Level": "Phường" },
          { "Id": "16534", "Name": "Phường Quảng Vinh", "Level": "Phường" },
          { "Id": "16537", "Name": "Xã Quảng Đại", "Level": "Xã" }
        ]
      },
      {
        "Id": "384",
        "Name": "Huyện Mường Lát",
        "Wards": [
          { "Id": "14845", "Name": "Thị trấn Mường Lát", "Level": "Thị trấn" },
          { "Id": "14848", "Name": "Xã Tam Chung", "Level": "Xã" },
          { "Id": "14854", "Name": "Xã Mường Lý", "Level": "Xã" },
          { "Id": "14857", "Name": "Xã Trung Lý", "Level": "Xã" },
          { "Id": "14860", "Name": "Xã Quang Chiểu", "Level": "Xã" },
          { "Id": "14863", "Name": "Xã Pù Nhi", "Level": "Xã" },
          { "Id": "14864", "Name": "Xã Nhi Sơn", "Level": "Xã" },
          { "Id": "14866", "Name": "Xã Mường Chanh", "Level": "Xã" }
        ]
      },
      {
        "Id": "385",
        "Name": "Huyện Quan Hóa",
        "Wards": [
          { "Id": "14869", "Name": "Thị trấn Hồi Xuân", "Level": "Thị trấn" },
          { "Id": "14872", "Name": "Xã Thành Sơn", "Level": "Xã" },
          { "Id": "14875", "Name": "Xã Trung Sơn", "Level": "Xã" },
          { "Id": "14878", "Name": "Xã Phú Thanh", "Level": "Xã" },
          { "Id": "14881", "Name": "Xã Trung Thành", "Level": "Xã" },
          { "Id": "14884", "Name": "Xã Phú Lệ", "Level": "Xã" },
          { "Id": "14887", "Name": "Xã Phú Sơn", "Level": "Xã" },
          { "Id": "14890", "Name": "Xã Phú Xuân", "Level": "Xã" },
          { "Id": "14896", "Name": "Xã Hiền Chung", "Level": "Xã" },
          { "Id": "14899", "Name": "Xã Hiền Kiệt", "Level": "Xã" },
          { "Id": "14902", "Name": "Xã Nam Tiến", "Level": "Xã" },
          { "Id": "14908", "Name": "Xã Thiên Phủ", "Level": "Xã" },
          { "Id": "14911", "Name": "Xã Phú Nghiêm", "Level": "Xã" },
          { "Id": "14914", "Name": "Xã Nam Xuân", "Level": "Xã" },
          { "Id": "14917", "Name": "Xã Nam Động", "Level": "Xã" }
        ]
      },
      {
        "Id": "386",
        "Name": "Huyện Bá Thước",
        "Wards": [
          { "Id": "14923", "Name": "Thị trấn Cành Nàng", "Level": "Thị trấn" },
          { "Id": "14926", "Name": "Xã Điền Thượng", "Level": "Xã" },
          { "Id": "14929", "Name": "Xã Điền Hạ", "Level": "Xã" },
          { "Id": "14932", "Name": "Xã Điền Quang", "Level": "Xã" },
          { "Id": "14935", "Name": "Xã Điền Trung", "Level": "Xã" },
          { "Id": "14938", "Name": "Xã Thành Sơn", "Level": "Xã" },
          { "Id": "14941", "Name": "Xã Lương Ngoại", "Level": "Xã" },
          { "Id": "14944", "Name": "Xã Ái Thượng", "Level": "Xã" },
          { "Id": "14947", "Name": "Xã Lương Nội", "Level": "Xã" },
          { "Id": "14950", "Name": "Xã Điền Lư", "Level": "Xã" },
          { "Id": "14953", "Name": "Xã Lương Trung", "Level": "Xã" },
          { "Id": "14956", "Name": "Xã Lũng Niêm", "Level": "Xã" },
          { "Id": "14959", "Name": "Xã Lũng Cao", "Level": "Xã" },
          { "Id": "14962", "Name": "Xã Hạ Trung", "Level": "Xã" },
          { "Id": "14965", "Name": "Xã Cổ Lũng", "Level": "Xã" },
          { "Id": "14968", "Name": "Xã Thành Lâm", "Level": "Xã" },
          { "Id": "14971", "Name": "Xã Ban Công", "Level": "Xã" },
          { "Id": "14974", "Name": "Xã Kỳ Tân", "Level": "Xã" },
          { "Id": "14977", "Name": "Xã Văn Nho", "Level": "Xã" },
          { "Id": "14980", "Name": "Xã Thiết Ống", "Level": "Xã" },
          { "Id": "14986", "Name": "Xã Thiết Kế", "Level": "Xã" }
        ]
      },
      {
        "Id": "387",
        "Name": "Huyện Quan Sơn",
        "Wards": [
          { "Id": "14995", "Name": "Xã Trung Xuân", "Level": "Xã" },
          { "Id": "14998", "Name": "Xã Trung Thượng", "Level": "Xã" },
          { "Id": "14999", "Name": "Xã Trung Tiến", "Level": "Xã" },
          { "Id": "15001", "Name": "Xã Trung Hạ", "Level": "Xã" },
          { "Id": "15004", "Name": "Xã Sơn Hà", "Level": "Xã" },
          { "Id": "15007", "Name": "Xã Tam Thanh", "Level": "Xã" },
          { "Id": "15010", "Name": "Xã Sơn Thủy", "Level": "Xã" },
          { "Id": "15013", "Name": "Xã Na Mèo", "Level": "Xã" },
          { "Id": "15016", "Name": "Thị trấn Sơn Lư", "Level": "Thị trấn" },
          { "Id": "15019", "Name": "Xã Tam Lư", "Level": "Xã" },
          { "Id": "15022", "Name": "Xã Sơn Điện", "Level": "Xã" },
          { "Id": "15025", "Name": "Xã Mường Mìn", "Level": "Xã" }
        ]
      },
      {
        "Id": "388",
        "Name": "Huyện Lang Chánh",
        "Wards": [
          { "Id": "15031", "Name": "Xã Yên Khương", "Level": "Xã" },
          { "Id": "15034", "Name": "Xã Yên Thắng", "Level": "Xã" },
          { "Id": "15037", "Name": "Xã Trí Nang", "Level": "Xã" },
          { "Id": "15040", "Name": "Xã Giao An", "Level": "Xã" },
          { "Id": "15043", "Name": "Xã Giao Thiện", "Level": "Xã" },
          { "Id": "15046", "Name": "Xã Tân Phúc", "Level": "Xã" },
          { "Id": "15049", "Name": "Xã Tam Văn", "Level": "Xã" },
          { "Id": "15052", "Name": "Xã Lâm Phú", "Level": "Xã" },
          { "Id": "15055", "Name": "Thị trấn Lang Chánh", "Level": "Thị trấn" },
          { "Id": "15058", "Name": "Xã Đồng Lương", "Level": "Xã" }
        ]
      },
      {
        "Id": "389",
        "Name": "Huyện Ngọc Lặc",
        "Wards": [
          { "Id": "15061", "Name": "Thị Trấn Ngọc Lặc", "Level": "Thị trấn" },
          { "Id": "15064", "Name": "Xã Lam Sơn", "Level": "Xã" },
          { "Id": "15067", "Name": "Xã Mỹ Tân", "Level": "Xã" },
          { "Id": "15070", "Name": "Xã Thúy Sơn", "Level": "Xã" },
          { "Id": "15073", "Name": "Xã Thạch Lập", "Level": "Xã" },
          { "Id": "15076", "Name": "Xã Vân Âm", "Level": "Xã" },
          { "Id": "15079", "Name": "Xã Cao Ngọc", "Level": "Xã" },
          { "Id": "15085", "Name": "Xã Quang Trung", "Level": "Xã" },
          { "Id": "15088", "Name": "Xã Đồng Thịnh", "Level": "Xã" },
          { "Id": "15091", "Name": "Xã Ngọc Liên", "Level": "Xã" },
          { "Id": "15094", "Name": "Xã Ngọc Sơn", "Level": "Xã" },
          { "Id": "15097", "Name": "Xã Lộc Thịnh", "Level": "Xã" },
          { "Id": "15100", "Name": "Xã Cao Thịnh", "Level": "Xã" },
          { "Id": "15103", "Name": "Xã Ngọc Trung", "Level": "Xã" },
          { "Id": "15106", "Name": "Xã Phùng Giáo", "Level": "Xã" },
          { "Id": "15109", "Name": "Xã Phùng Minh", "Level": "Xã" },
          { "Id": "15112", "Name": "Xã Phúc Thịnh", "Level": "Xã" },
          { "Id": "15115", "Name": "Xã Nguyệt Ấn", "Level": "Xã" },
          { "Id": "15118", "Name": "Xã Kiên Thọ", "Level": "Xã" },
          { "Id": "15121", "Name": "Xã Minh Tiến", "Level": "Xã" },
          { "Id": "15124", "Name": "Xã Minh Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "390",
        "Name": "Huyện Cẩm Thủy",
        "Wards": [
          { "Id": "15127", "Name": "Thị trấn Phong Sơn", "Level": "Thị trấn" },
          { "Id": "15133", "Name": "Xã Cẩm Thành", "Level": "Xã" },
          { "Id": "15136", "Name": "Xã Cẩm Quý", "Level": "Xã" },
          { "Id": "15139", "Name": "Xã Cẩm Lương", "Level": "Xã" },
          { "Id": "15142", "Name": "Xã Cẩm Thạch", "Level": "Xã" },
          { "Id": "15145", "Name": "Xã Cẩm Liên", "Level": "Xã" },
          { "Id": "15148", "Name": "Xã Cẩm Giang", "Level": "Xã" },
          { "Id": "15151", "Name": "Xã Cẩm Bình", "Level": "Xã" },
          { "Id": "15154", "Name": "Xã Cẩm Tú", "Level": "Xã" },
          { "Id": "15160", "Name": "Xã Cẩm Châu", "Level": "Xã" },
          { "Id": "15163", "Name": "Xã Cẩm Tâm", "Level": "Xã" },
          { "Id": "15169", "Name": "Xã Cẩm Ngọc", "Level": "Xã" },
          { "Id": "15172", "Name": "Xã Cẩm Long", "Level": "Xã" },
          { "Id": "15175", "Name": "Xã Cẩm Yên", "Level": "Xã" },
          { "Id": "15178", "Name": "Xã Cẩm Tân", "Level": "Xã" },
          { "Id": "15181", "Name": "Xã Cẩm Phú", "Level": "Xã" },
          { "Id": "15184", "Name": "Xã Cẩm Vân", "Level": "Xã" }
        ]
      },
      {
        "Id": "391",
        "Name": "Huyện Thạch Thành",
        "Wards": [
          { "Id": "15187", "Name": "Thị trấn Kim Tân", "Level": "Thị trấn" },
          { "Id": "15190", "Name": "Thị trấn Vân Du", "Level": "Thị trấn" },
          { "Id": "15196", "Name": "Xã Thạch Lâm", "Level": "Xã" },
          { "Id": "15199", "Name": "Xã Thạch Quảng", "Level": "Xã" },
          { "Id": "15202", "Name": "Xã Thạch Tượng", "Level": "Xã" },
          { "Id": "15205", "Name": "Xã Thạch Cẩm", "Level": "Xã" },
          { "Id": "15208", "Name": "Xã Thạch Sơn", "Level": "Xã" },
          { "Id": "15211", "Name": "Xã Thạch Bình", "Level": "Xã" },
          { "Id": "15214", "Name": "Xã Thạch Định", "Level": "Xã" },
          { "Id": "15217", "Name": "Xã Thạch Đồng", "Level": "Xã" },
          { "Id": "15220", "Name": "Xã Thạch Long", "Level": "Xã" },
          { "Id": "15223", "Name": "Xã Thành Mỹ", "Level": "Xã" },
          { "Id": "15226", "Name": "Xã Thành Yên", "Level": "Xã" },
          { "Id": "15229", "Name": "Xã Thành Vinh", "Level": "Xã" },
          { "Id": "15232", "Name": "Xã Thành Minh", "Level": "Xã" },
          { "Id": "15235", "Name": "Xã Thành Công", "Level": "Xã" },
          { "Id": "15238", "Name": "Xã Thành Tân", "Level": "Xã" },
          { "Id": "15241", "Name": "Xã Thành Trực", "Level": "Xã" },
          { "Id": "15247", "Name": "Xã Thành Tâm", "Level": "Xã" },
          { "Id": "15250", "Name": "Xã Thành An", "Level": "Xã" },
          { "Id": "15253", "Name": "Xã Thành Thọ", "Level": "Xã" },
          { "Id": "15256", "Name": "Xã Thành Tiến", "Level": "Xã" },
          { "Id": "15259", "Name": "Xã Thành Long", "Level": "Xã" },
          { "Id": "15265", "Name": "Xã Thành Hưng", "Level": "Xã" },
          { "Id": "15268", "Name": "Xã Ngọc Trạo", "Level": "Xã" }
        ]
      },
      {
        "Id": "392",
        "Name": "Huyện Hà Trung",
        "Wards": [
          { "Id": "15271", "Name": "Thị trấn Hà Trung", "Level": "Thị trấn" },
          { "Id": "15274", "Name": "Xã Hà Long", "Level": "Xã" },
          { "Id": "15277", "Name": "Xã Hà Vinh", "Level": "Xã" },
          { "Id": "15280", "Name": "Xã Hà Bắc", "Level": "Xã" },
          { "Id": "15283", "Name": "Xã Hoạt Giang", "Level": "Xã" },
          { "Id": "15286", "Name": "Xã Yên Dương", "Level": "Xã" },
          { "Id": "15292", "Name": "Xã Hà Giang", "Level": "Xã" },
          { "Id": "15298", "Name": "Xã Lĩnh Toại", "Level": "Xã" },
          { "Id": "15304", "Name": "Xã Hà Ngọc", "Level": "Xã" },
          { "Id": "15307", "Name": "Xã Yến Sơn", "Level": "Xã" },
          { "Id": "15313", "Name": "Xã Hà Sơn", "Level": "Xã" },
          { "Id": "15316", "Name": "Xã Hà Lĩnh", "Level": "Xã" },
          { "Id": "15319", "Name": "Xã Hà Đông", "Level": "Xã" },
          { "Id": "15322", "Name": "Xã Hà Tân", "Level": "Xã" },
          { "Id": "15325", "Name": "Xã Hà Tiến", "Level": "Xã" },
          { "Id": "15328", "Name": "Xã Hà Bình", "Level": "Xã" },
          { "Id": "15331", "Name": "Xã Hà Lai", "Level": "Xã" },
          { "Id": "15334", "Name": "Xã Hà Châu", "Level": "Xã" },
          { "Id": "15340", "Name": "Xã Hà Thái", "Level": "Xã" },
          { "Id": "15343", "Name": "Xã Hà Hải", "Level": "Xã" }
        ]
      },
      {
        "Id": "393",
        "Name": "Huyện Vĩnh Lộc",
        "Wards": [
          { "Id": "15349", "Name": "Thị trấn Vĩnh Lộc", "Level": "Thị trấn" },
          { "Id": "15352", "Name": "Xã Vĩnh Quang", "Level": "Xã" },
          { "Id": "15355", "Name": "Xã Vĩnh Yên", "Level": "Xã" },
          { "Id": "15358", "Name": "Xã Vĩnh Tiến", "Level": "Xã" },
          { "Id": "15361", "Name": "Xã Vĩnh Long", "Level": "Xã" },
          { "Id": "15364", "Name": "Xã Vĩnh Phúc", "Level": "Xã" },
          { "Id": "15367", "Name": "Xã Vĩnh Hưng", "Level": "Xã" },
          { "Id": "15376", "Name": "Xã Vĩnh Hòa", "Level": "Xã" },
          { "Id": "15379", "Name": "Xã Vĩnh Hùng", "Level": "Xã" },
          { "Id": "15382", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "15385", "Name": "Xã Ninh Khang", "Level": "Xã" },
          { "Id": "15388", "Name": "Xã Vĩnh Thịnh", "Level": "Xã" },
          { "Id": "15391", "Name": "Xã Vĩnh An", "Level": "Xã" }
        ]
      },
      {
        "Id": "394",
        "Name": "Huyện Yên Định",
        "Wards": [
          { "Id": "15397", "Name": "Thị trấn Thống Nhất", "Level": "Thị trấn" },
          { "Id": "15403", "Name": "Xã Yên Lâm", "Level": "Xã" },
          { "Id": "15406", "Name": "Xã Yên Tâm", "Level": "Xã" },
          { "Id": "15409", "Name": "Xã Yên Phú", "Level": "Xã" },
          { "Id": "15412", "Name": "Xã Quí Lộc", "Level": "Xã" },
          { "Id": "15415", "Name": "Xã Yên Thọ", "Level": "Xã" },
          { "Id": "15418", "Name": "Xã Yên Trung", "Level": "Xã" },
          { "Id": "15421", "Name": "Xã Yên Trường", "Level": "Xã" },
          { "Id": "15427", "Name": "Xã Yên Phong", "Level": "Xã" },
          { "Id": "15430", "Name": "Xã Yên Thái", "Level": "Xã" },
          { "Id": "15433", "Name": "Xã Yên Hùng", "Level": "Xã" },
          { "Id": "15436", "Name": "Xã Yên Thịnh", "Level": "Xã" },
          { "Id": "15439", "Name": "Xã Yên Ninh", "Level": "Xã" },
          { "Id": "15442", "Name": "Xã Yên Lạc", "Level": "Xã" },
          { "Id": "15445", "Name": "Xã Định Tăng", "Level": "Xã" },
          { "Id": "15448", "Name": "Xã Định Hòa", "Level": "Xã" },
          { "Id": "15451", "Name": "Xã Định Thành", "Level": "Xã" },
          { "Id": "15454", "Name": "Xã Định Công", "Level": "Xã" },
          { "Id": "15457", "Name": "Xã Định Tân", "Level": "Xã" },
          { "Id": "15460", "Name": "Xã Định Tiến", "Level": "Xã" },
          { "Id": "15463", "Name": "Xã Định Long", "Level": "Xã" },
          { "Id": "15466", "Name": "Xã Định Liên", "Level": "Xã" },
          { "Id": "15469", "Name": "Thị trấn Quán Lào", "Level": "Thị trấn" },
          { "Id": "15472", "Name": "Xã Định Hưng", "Level": "Xã" },
          { "Id": "15475", "Name": "Xã Định Hải", "Level": "Xã" },
          { "Id": "15478", "Name": "Xã Định Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "395",
        "Name": "Huyện Thọ Xuân",
        "Wards": [
          { "Id": "15493", "Name": "Xã Xuân Hồng", "Level": "Xã" },
          { "Id": "15499", "Name": "Thị trấn Thọ Xuân", "Level": "Thị trấn" },
          { "Id": "15502", "Name": "Xã Bắc Lương", "Level": "Xã" },
          { "Id": "15505", "Name": "Xã Nam Giang", "Level": "Xã" },
          { "Id": "15508", "Name": "Xã Xuân Phong", "Level": "Xã" },
          { "Id": "15511", "Name": "Xã Thọ Lộc", "Level": "Xã" },
          { "Id": "15514", "Name": "Xã Xuân Trường", "Level": "Xã" },
          { "Id": "15517", "Name": "Xã Xuân Hòa", "Level": "Xã" },
          { "Id": "15520", "Name": "Xã Thọ Hải", "Level": "Xã" },
          { "Id": "15523", "Name": "Xã Tây Hồ", "Level": "Xã" },
          { "Id": "15526", "Name": "Xã Xuân Giang", "Level": "Xã" },
          { "Id": "15532", "Name": "Xã Xuân Sinh", "Level": "Xã" },
          { "Id": "15535", "Name": "Xã Xuân Hưng", "Level": "Xã" },
          { "Id": "15538", "Name": "Xã Thọ Diên", "Level": "Xã" },
          { "Id": "15541", "Name": "Xã Thọ Lâm", "Level": "Xã" },
          { "Id": "15544", "Name": "Xã Thọ Xương", "Level": "Xã" },
          { "Id": "15547", "Name": "Xã Xuân Bái", "Level": "Xã" },
          { "Id": "15550", "Name": "Xã Xuân Phú", "Level": "Xã" },
          { "Id": "15553", "Name": "Thị trấn Sao Vàng", "Level": "Thị trấn" },
          { "Id": "15556", "Name": "Thị trấn Lam Sơn", "Level": "Thị trấn" },
          { "Id": "15559", "Name": "Xã Xuân Thiên", "Level": "Xã" },
          { "Id": "15565", "Name": "Xã Thuận Minh", "Level": "Xã" },
          { "Id": "15568", "Name": "Xã Thọ Lập", "Level": "Xã" },
          { "Id": "15571", "Name": "Xã Quảng Phú", "Level": "Xã" },
          { "Id": "15574", "Name": "Xã Xuân Tín", "Level": "Xã" },
          { "Id": "15577", "Name": "Xã Phú Xuân", "Level": "Xã" },
          { "Id": "15583", "Name": "Xã Xuân Lai", "Level": "Xã" },
          { "Id": "15586", "Name": "Xã Xuân Lập", "Level": "Xã" },
          { "Id": "15592", "Name": "Xã Xuân Minh", "Level": "Xã" },
          { "Id": "15598", "Name": "Xã Trường Xuân", "Level": "Xã" }
        ]
      },
      {
        "Id": "396",
        "Name": "Huyện Thường Xuân",
        "Wards": [
          { "Id": "15607", "Name": "Xã Bát Mọt", "Level": "Xã" },
          { "Id": "15610", "Name": "Xã Yên Nhân", "Level": "Xã" },
          { "Id": "15619", "Name": "Xã Xuân Lẹ", "Level": "Xã" },
          { "Id": "15622", "Name": "Xã Vạn Xuân", "Level": "Xã" },
          { "Id": "15628", "Name": "Xã Lương Sơn", "Level": "Xã" },
          { "Id": "15631", "Name": "Xã Xuân Cao", "Level": "Xã" },
          { "Id": "15634", "Name": "Xã Luận Thành", "Level": "Xã" },
          { "Id": "15637", "Name": "Xã Luận Khê", "Level": "Xã" },
          { "Id": "15640", "Name": "Xã Xuân Thắng", "Level": "Xã" },
          { "Id": "15643", "Name": "Xã Xuân Lộc", "Level": "Xã" },
          {
            "Id": "15646",
            "Name": "Thị trấn Thường Xuân",
            "Level": "Thị trấn"
          },
          { "Id": "15649", "Name": "Xã Xuân Dương", "Level": "Xã" },
          { "Id": "15652", "Name": "Xã Thọ Thanh", "Level": "Xã" },
          { "Id": "15655", "Name": "Xã Ngọc Phụng", "Level": "Xã" },
          { "Id": "15658", "Name": "Xã Xuân Chinh", "Level": "Xã" },
          { "Id": "15661", "Name": "Xã Tân Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "397",
        "Name": "Huyện Triệu Sơn",
        "Wards": [
          { "Id": "15664", "Name": "Thị trấn Triệu Sơn", "Level": "Thị trấn" },
          { "Id": "15667", "Name": "Xã Thọ Sơn", "Level": "Xã" },
          { "Id": "15670", "Name": "Xã Thọ Bình", "Level": "Xã" },
          { "Id": "15673", "Name": "Xã Thọ Tiến", "Level": "Xã" },
          { "Id": "15676", "Name": "Xã Hợp Lý", "Level": "Xã" },
          { "Id": "15679", "Name": "Xã Hợp Tiến", "Level": "Xã" },
          { "Id": "15682", "Name": "Xã Hợp Thành", "Level": "Xã" },
          { "Id": "15685", "Name": "Xã Triệu Thành", "Level": "Xã" },
          { "Id": "15688", "Name": "Xã Hợp Thắng", "Level": "Xã" },
          { "Id": "15691", "Name": "Xã Minh Sơn", "Level": "Xã" },
          { "Id": "15700", "Name": "Xã Dân Lực", "Level": "Xã" },
          { "Id": "15703", "Name": "Xã Dân Lý", "Level": "Xã" },
          { "Id": "15706", "Name": "Xã Dân Quyền", "Level": "Xã" },
          { "Id": "15709", "Name": "Xã An Nông", "Level": "Xã" },
          { "Id": "15712", "Name": "Xã Văn Sơn", "Level": "Xã" },
          { "Id": "15715", "Name": "Xã Thái Hòa", "Level": "Xã" },
          { "Id": "15718", "Name": "Thị trấn Nưa", "Level": "Thị trấn" },
          { "Id": "15721", "Name": "Xã Đồng Lợi", "Level": "Xã" },
          { "Id": "15724", "Name": "Xã Đồng Tiến", "Level": "Xã" },
          { "Id": "15727", "Name": "Xã Đồng Thắng", "Level": "Xã" },
          { "Id": "15730", "Name": "Xã Tiến Nông", "Level": "Xã" },
          { "Id": "15733", "Name": "Xã Khuyến Nông", "Level": "Xã" },
          { "Id": "15736", "Name": "Xã Xuân Thịnh", "Level": "Xã" },
          { "Id": "15739", "Name": "Xã Xuân Lộc", "Level": "Xã" },
          { "Id": "15742", "Name": "Xã Thọ Dân", "Level": "Xã" },
          { "Id": "15745", "Name": "Xã Xuân Thọ", "Level": "Xã" },
          { "Id": "15748", "Name": "Xã Thọ Tân", "Level": "Xã" },
          { "Id": "15751", "Name": "Xã Thọ Ngọc", "Level": "Xã" },
          { "Id": "15754", "Name": "Xã Thọ Cường", "Level": "Xã" },
          { "Id": "15757", "Name": "Xã Thọ Phú", "Level": "Xã" },
          { "Id": "15760", "Name": "Xã Thọ Vực", "Level": "Xã" },
          { "Id": "15763", "Name": "Xã Thọ Thế", "Level": "Xã" },
          { "Id": "15766", "Name": "Xã Nông Trường", "Level": "Xã" },
          { "Id": "15769", "Name": "Xã Bình Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "398",
        "Name": "Huyện Thiệu Hóa",
        "Wards": [
          { "Id": "15772", "Name": "Thị trấn Thiệu Hóa", "Level": "Thị trấn" },
          { "Id": "15775", "Name": "Xã Thiệu Ngọc", "Level": "Xã" },
          { "Id": "15778", "Name": "Xã Thiệu Vũ", "Level": "Xã" },
          { "Id": "15781", "Name": "Xã Thiệu Phúc", "Level": "Xã" },
          { "Id": "15784", "Name": "Xã Thiệu Tiến", "Level": "Xã" },
          { "Id": "15787", "Name": "Xã Thiệu Công", "Level": "Xã" },
          { "Id": "15790", "Name": "Xã Thiệu Phú", "Level": "Xã" },
          { "Id": "15793", "Name": "Xã Thiệu Long", "Level": "Xã" },
          { "Id": "15796", "Name": "Xã Thiệu Giang", "Level": "Xã" },
          { "Id": "15799", "Name": "Xã Thiệu Duy", "Level": "Xã" },
          { "Id": "15802", "Name": "Xã Thiệu Nguyên", "Level": "Xã" },
          { "Id": "15805", "Name": "Xã Thiệu Hợp", "Level": "Xã" },
          { "Id": "15808", "Name": "Xã Thiệu Thịnh", "Level": "Xã" },
          { "Id": "15811", "Name": "Xã Thiệu Quang", "Level": "Xã" },
          { "Id": "15814", "Name": "Xã Thiệu Thành", "Level": "Xã" },
          { "Id": "15817", "Name": "Xã Thiệu Toán", "Level": "Xã" },
          { "Id": "15820", "Name": "Xã Thiệu Chính", "Level": "Xã" },
          { "Id": "15823", "Name": "Xã Thiệu Hòa", "Level": "Xã" },
          { "Id": "15829", "Name": "Xã Minh Tâm", "Level": "Xã" },
          { "Id": "15832", "Name": "Xã Thiệu Viên", "Level": "Xã" },
          { "Id": "15835", "Name": "Xã Thiệu Lý", "Level": "Xã" },
          { "Id": "15838", "Name": "Xã Thiệu Vận", "Level": "Xã" },
          { "Id": "15841", "Name": "Xã Thiệu Trung", "Level": "Xã" },
          { "Id": "15847", "Name": "Xã Tân Châu", "Level": "Xã" },
          { "Id": "15853", "Name": "Xã Thiệu Giao", "Level": "Xã" }
        ]
      },
      {
        "Id": "399",
        "Name": "Huyện Hoằng Hóa",
        "Wards": [
          { "Id": "15865", "Name": "Thị trấn Bút Sơn", "Level": "Thị trấn" },
          { "Id": "15871", "Name": "Xã Hoằng Giang", "Level": "Xã" },
          { "Id": "15877", "Name": "Xã Hoằng Xuân", "Level": "Xã" },
          { "Id": "15880", "Name": "Xã Hoằng Phượng", "Level": "Xã" },
          { "Id": "15883", "Name": "Xã Hoằng Phú", "Level": "Xã" },
          { "Id": "15886", "Name": "Xã Hoằng Quỳ", "Level": "Xã" },
          { "Id": "15889", "Name": "Xã Hoằng Kim", "Level": "Xã" },
          { "Id": "15892", "Name": "Xã Hoằng Trung", "Level": "Xã" },
          { "Id": "15895", "Name": "Xã Hoằng Trinh", "Level": "Xã" },
          { "Id": "15901", "Name": "Xã Hoằng Sơn", "Level": "Xã" },
          { "Id": "15907", "Name": "Xã Hoằng Cát", "Level": "Xã" },
          { "Id": "15910", "Name": "Xã Hoằng Xuyên", "Level": "Xã" },
          { "Id": "15916", "Name": "Xã Hoằng Quý", "Level": "Xã" },
          { "Id": "15919", "Name": "Xã Hoằng Hợp", "Level": "Xã" },
          { "Id": "15928", "Name": "Xã Hoằng Đức", "Level": "Xã" },
          { "Id": "15937", "Name": "Xã Hoằng Hà", "Level": "Xã" },
          { "Id": "15940", "Name": "Xã Hoằng Đạt", "Level": "Xã" },
          { "Id": "15946", "Name": "Xã Hoằng Đạo", "Level": "Xã" },
          { "Id": "15949", "Name": "Xã Hoằng Thắng", "Level": "Xã" },
          { "Id": "15952", "Name": "Xã Hoằng Đồng", "Level": "Xã" },
          { "Id": "15955", "Name": "Xã Hoằng Thái", "Level": "Xã" },
          { "Id": "15958", "Name": "Xã Hoằng Thịnh", "Level": "Xã" },
          { "Id": "15961", "Name": "Xã Hoằng Thành", "Level": "Xã" },
          { "Id": "15964", "Name": "Xã Hoằng Lộc", "Level": "Xã" },
          { "Id": "15967", "Name": "Xã Hoằng Trạch", "Level": "Xã" },
          { "Id": "15973", "Name": "Xã Hoằng Phong", "Level": "Xã" },
          { "Id": "15976", "Name": "Xã Hoằng Lưu", "Level": "Xã" },
          { "Id": "15979", "Name": "Xã Hoằng Châu", "Level": "Xã" },
          { "Id": "15982", "Name": "Xã Hoằng Tân", "Level": "Xã" },
          { "Id": "15985", "Name": "Xã Hoằng Yến", "Level": "Xã" },
          { "Id": "15988", "Name": "Xã Hoằng Tiến", "Level": "Xã" },
          { "Id": "15991", "Name": "Xã Hoằng Hải", "Level": "Xã" },
          { "Id": "15994", "Name": "Xã Hoằng Ngọc", "Level": "Xã" },
          { "Id": "15997", "Name": "Xã Hoằng Đông", "Level": "Xã" },
          { "Id": "16000", "Name": "Xã Hoằng Thanh", "Level": "Xã" },
          { "Id": "16003", "Name": "Xã Hoằng Phụ", "Level": "Xã" },
          { "Id": "16006", "Name": "Xã Hoằng Trường", "Level": "Xã" }
        ]
      },
      {
        "Id": "400",
        "Name": "Huyện Hậu Lộc",
        "Wards": [
          { "Id": "16012", "Name": "Thị trấn Hậu Lộc", "Level": "Thị trấn" },
          { "Id": "16015", "Name": "Xã Đồng Lộc", "Level": "Xã" },
          { "Id": "16018", "Name": "Xã Đại Lộc", "Level": "Xã" },
          { "Id": "16021", "Name": "Xã Triệu Lộc", "Level": "Xã" },
          { "Id": "16027", "Name": "Xã Tiến Lộc", "Level": "Xã" },
          { "Id": "16030", "Name": "Xã Lộc Sơn", "Level": "Xã" },
          { "Id": "16033", "Name": "Xã Cầu Lộc", "Level": "Xã" },
          { "Id": "16036", "Name": "Xã Thành Lộc", "Level": "Xã" },
          { "Id": "16039", "Name": "Xã Tuy Lộc", "Level": "Xã" },
          { "Id": "16042", "Name": "Xã Phong Lộc", "Level": "Xã" },
          { "Id": "16045", "Name": "Xã Mỹ Lộc", "Level": "Xã" },
          { "Id": "16048", "Name": "Xã Thuần Lộc", "Level": "Xã" },
          { "Id": "16057", "Name": "Xã Xuân Lộc", "Level": "Xã" },
          { "Id": "16063", "Name": "Xã Hoa Lộc", "Level": "Xã" },
          { "Id": "16066", "Name": "Xã Liên Lộc", "Level": "Xã" },
          { "Id": "16069", "Name": "Xã Quang Lộc", "Level": "Xã" },
          { "Id": "16072", "Name": "Xã Phú Lộc", "Level": "Xã" },
          { "Id": "16075", "Name": "Xã Hòa Lộc", "Level": "Xã" },
          { "Id": "16078", "Name": "Xã Minh Lộc", "Level": "Xã" },
          { "Id": "16081", "Name": "Xã Hưng Lộc", "Level": "Xã" },
          { "Id": "16084", "Name": "Xã Hải Lộc", "Level": "Xã" },
          { "Id": "16087", "Name": "Xã Đa Lộc", "Level": "Xã" },
          { "Id": "16090", "Name": "Xã Ngư Lộc", "Level": "Xã" }
        ]
      },
      {
        "Id": "401",
        "Name": "Huyện Nga Sơn",
        "Wards": [
          { "Id": "16093", "Name": "Thị trấn Nga Sơn", "Level": "Thị trấn" },
          { "Id": "16096", "Name": "Xã Ba Đình", "Level": "Xã" },
          { "Id": "16099", "Name": "Xã Nga Vịnh", "Level": "Xã" },
          { "Id": "16102", "Name": "Xã Nga Văn", "Level": "Xã" },
          { "Id": "16105", "Name": "Xã Nga Thiện", "Level": "Xã" },
          { "Id": "16108", "Name": "Xã Nga Tiến", "Level": "Xã" },
          { "Id": "16114", "Name": "Xã Nga Phượng", "Level": "Xã" },
          { "Id": "16117", "Name": "Xã Nga Trung", "Level": "Xã" },
          { "Id": "16120", "Name": "Xã Nga Bạch", "Level": "Xã" },
          { "Id": "16123", "Name": "Xã Nga Thanh", "Level": "Xã" },
          { "Id": "16132", "Name": "Xã Nga Yên", "Level": "Xã" },
          { "Id": "16135", "Name": "Xã Nga Giáp", "Level": "Xã" },
          { "Id": "16138", "Name": "Xã Nga Hải", "Level": "Xã" },
          { "Id": "16141", "Name": "Xã Nga Thành", "Level": "Xã" },
          { "Id": "16144", "Name": "Xã Nga An", "Level": "Xã" },
          { "Id": "16147", "Name": "Xã Nga Phú", "Level": "Xã" },
          { "Id": "16150", "Name": "Xã Nga Điền", "Level": "Xã" },
          { "Id": "16153", "Name": "Xã Nga Tân", "Level": "Xã" },
          { "Id": "16156", "Name": "Xã Nga Thủy", "Level": "Xã" },
          { "Id": "16159", "Name": "Xã Nga Liên", "Level": "Xã" },
          { "Id": "16162", "Name": "Xã Nga Thái", "Level": "Xã" },
          { "Id": "16165", "Name": "Xã Nga Thạch", "Level": "Xã" },
          { "Id": "16168", "Name": "Xã Nga Thắng", "Level": "Xã" },
          { "Id": "16171", "Name": "Xã Nga Trường", "Level": "Xã" }
        ]
      },
      {
        "Id": "402",
        "Name": "Huyện Như Xuân",
        "Wards": [
          { "Id": "16174", "Name": "Thị trấn Yên Cát", "Level": "Thị trấn" },
          { "Id": "16177", "Name": "Xã Bãi Trành", "Level": "Xã" },
          { "Id": "16180", "Name": "Xã Xuân Hòa", "Level": "Xã" },
          { "Id": "16183", "Name": "Xã Xuân Bình", "Level": "Xã" },
          { "Id": "16186", "Name": "Xã Hóa Quỳ", "Level": "Xã" },
          { "Id": "16195", "Name": "Xã Cát Vân", "Level": "Xã" },
          { "Id": "16198", "Name": "Xã Cát Tân", "Level": "Xã" },
          { "Id": "16201", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "16204", "Name": "Xã Bình Lương", "Level": "Xã" },
          { "Id": "16207", "Name": "Xã Thanh Quân", "Level": "Xã" },
          { "Id": "16210", "Name": "Xã Thanh Xuân", "Level": "Xã" },
          { "Id": "16213", "Name": "Xã Thanh Hòa", "Level": "Xã" },
          { "Id": "16216", "Name": "Xã Thanh Phong", "Level": "Xã" },
          { "Id": "16219", "Name": "Xã Thanh Lâm", "Level": "Xã" },
          { "Id": "16222", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "16225", "Name": "Xã Thượng Ninh", "Level": "Xã" }
        ]
      },
      {
        "Id": "403",
        "Name": "Huyện Như Thanh",
        "Wards": [
          { "Id": "16228", "Name": "Thị trấn Bến Sung", "Level": "Thị trấn" },
          { "Id": "16231", "Name": "Xã Cán Khê", "Level": "Xã" },
          { "Id": "16234", "Name": "Xã Xuân Du", "Level": "Xã" },
          { "Id": "16240", "Name": "Xã Phượng Nghi", "Level": "Xã" },
          { "Id": "16243", "Name": "Xã Mậu Lâm", "Level": "Xã" },
          { "Id": "16246", "Name": "Xã Xuân Khang", "Level": "Xã" },
          { "Id": "16249", "Name": "Xã Phú Nhuận", "Level": "Xã" },
          { "Id": "16252", "Name": "Xã Hải Long", "Level": "Xã" },
          { "Id": "16258", "Name": "Xã Xuân Thái", "Level": "Xã" },
          { "Id": "16261", "Name": "Xã Xuân Phúc", "Level": "Xã" },
          { "Id": "16264", "Name": "Xã Yên Thọ", "Level": "Xã" },
          { "Id": "16267", "Name": "Xã Yên Lạc", "Level": "Xã" },
          { "Id": "16273", "Name": "Xã Thanh Tân", "Level": "Xã" },
          { "Id": "16276", "Name": "Xã Thanh Kỳ", "Level": "Xã" }
        ]
      },
      {
        "Id": "404",
        "Name": "Huyện Nông Cống",
        "Wards": [
          { "Id": "16279", "Name": "Thị trấn Nông Cống", "Level": "Thị trấn" },
          { "Id": "16282", "Name": "Xã Tân Phúc", "Level": "Xã" },
          { "Id": "16285", "Name": "Xã Tân Thọ", "Level": "Xã" },
          { "Id": "16288", "Name": "Xã Hoàng Sơn", "Level": "Xã" },
          { "Id": "16291", "Name": "Xã Tân Khang", "Level": "Xã" },
          { "Id": "16294", "Name": "Xã Hoàng Giang", "Level": "Xã" },
          { "Id": "16297", "Name": "Xã Trung Chính", "Level": "Xã" },
          { "Id": "16303", "Name": "Xã Trung Thành", "Level": "Xã" },
          { "Id": "16309", "Name": "Xã Tế Thắng", "Level": "Xã" },
          { "Id": "16315", "Name": "Xã Tế Lợi", "Level": "Xã" },
          { "Id": "16318", "Name": "Xã Tế Nông", "Level": "Xã" },
          { "Id": "16321", "Name": "Xã Minh Nghĩa", "Level": "Xã" },
          { "Id": "16324", "Name": "Xã Minh Khôi", "Level": "Xã" },
          { "Id": "16327", "Name": "Xã Vạn Hòa", "Level": "Xã" },
          { "Id": "16330", "Name": "Xã Trường Trung", "Level": "Xã" },
          { "Id": "16333", "Name": "Xã Vạn Thắng", "Level": "Xã" },
          { "Id": "16336", "Name": "Xã Trường Giang", "Level": "Xã" },
          { "Id": "16339", "Name": "Xã Vạn Thiện", "Level": "Xã" },
          { "Id": "16342", "Name": "Xã Thăng Long", "Level": "Xã" },
          { "Id": "16345", "Name": "Xã Trường Minh", "Level": "Xã" },
          { "Id": "16348", "Name": "Xã Trường Sơn", "Level": "Xã" },
          { "Id": "16351", "Name": "Xã Thăng Bình", "Level": "Xã" },
          { "Id": "16354", "Name": "Xã Công Liêm", "Level": "Xã" },
          { "Id": "16357", "Name": "Xã Tượng Văn", "Level": "Xã" },
          { "Id": "16360", "Name": "Xã Thăng Thọ", "Level": "Xã" },
          { "Id": "16363", "Name": "Xã Tượng Lĩnh", "Level": "Xã" },
          { "Id": "16366", "Name": "Xã Tượng Sơn", "Level": "Xã" },
          { "Id": "16369", "Name": "Xã Công Chính", "Level": "Xã" },
          { "Id": "16375", "Name": "Xã Yên Mỹ", "Level": "Xã" }
        ]
      },
      {
        "Id": "405",
        "Name": "Huyện Đông Sơn",
        "Wards": [
          { "Id": "16378", "Name": "Thị trấn Rừng Thông", "Level": "Thị trấn" },
          { "Id": "16381", "Name": "Xã Đông Hoàng", "Level": "Xã" },
          { "Id": "16384", "Name": "Xã Đông Ninh", "Level": "Xã" },
          { "Id": "16390", "Name": "Xã Đông Hòa", "Level": "Xã" },
          { "Id": "16393", "Name": "Xã Đông Yên", "Level": "Xã" },
          { "Id": "16399", "Name": "Xã Đông Minh", "Level": "Xã" },
          { "Id": "16402", "Name": "Xã Đông Thanh", "Level": "Xã" },
          { "Id": "16405", "Name": "Xã Đông Tiến", "Level": "Xã" },
          { "Id": "16408", "Name": "Xã Đông Khê", "Level": "Xã" },
          { "Id": "16414", "Name": "Xã Đông Thịnh", "Level": "Xã" },
          { "Id": "16417", "Name": "Xã Đông Văn", "Level": "Xã" },
          { "Id": "16420", "Name": "Xã Đông Phú", "Level": "Xã" },
          { "Id": "16423", "Name": "Xã Đông Nam", "Level": "Xã" },
          { "Id": "16426", "Name": "Xã Đông Quang", "Level": "Xã" }
        ]
      },
      {
        "Id": "406",
        "Name": "Huyện Quảng Xương",
        "Wards": [
          { "Id": "16438", "Name": "Thị trấn Tân Phong", "Level": "Thị trấn" },
          { "Id": "16447", "Name": "Xã Quảng Trạch", "Level": "Xã" },
          { "Id": "16453", "Name": "Xã Quảng Đức", "Level": "Xã" },
          { "Id": "16456", "Name": "Xã Quảng Định", "Level": "Xã" },
          { "Id": "16462", "Name": "Xã Quảng Nhân", "Level": "Xã" },
          { "Id": "16465", "Name": "Xã Quảng Ninh", "Level": "Xã" },
          { "Id": "16468", "Name": "Xã Quảng Bình", "Level": "Xã" },
          { "Id": "16471", "Name": "Xã Quảng Hợp", "Level": "Xã" },
          { "Id": "16474", "Name": "Xã Quảng Văn", "Level": "Xã" },
          { "Id": "16477", "Name": "Xã Quảng Long", "Level": "Xã" },
          { "Id": "16480", "Name": "Xã Quảng Yên", "Level": "Xã" },
          { "Id": "16483", "Name": "Xã Quảng Hòa", "Level": "Xã" },
          { "Id": "16489", "Name": "Xã Quảng Khê", "Level": "Xã" },
          { "Id": "16492", "Name": "Xã Quảng Trung", "Level": "Xã" },
          { "Id": "16495", "Name": "Xã Quảng Chính", "Level": "Xã" },
          { "Id": "16498", "Name": "Xã Quảng Ngọc", "Level": "Xã" },
          { "Id": "16501", "Name": "Xã Quảng Trường", "Level": "Xã" },
          { "Id": "16510", "Name": "Xã Quảng Phúc", "Level": "Xã" },
          { "Id": "16519", "Name": "Xã Quảng Giao", "Level": "Xã" },
          { "Id": "16540", "Name": "Xã Quảng Hải", "Level": "Xã" },
          { "Id": "16543", "Name": "Xã Quảng Lưu", "Level": "Xã" },
          { "Id": "16546", "Name": "Xã Quảng Lộc", "Level": "Xã" },
          { "Id": "16549", "Name": "Xã Tiên Trang", "Level": "Xã" },
          { "Id": "16552", "Name": "Xã Quảng Nham", "Level": "Xã" },
          { "Id": "16555", "Name": "Xã Quảng Thạch", "Level": "Xã" },
          { "Id": "16558", "Name": "Xã Quảng Thái", "Level": "Xã" }
        ]
      },
      {
        "Id": "407",
        "Name": "Thị xã Nghi Sơn",
        "Wards": [
          { "Id": "16561", "Name": "Phường Hải Hòa", "Level": "Phường" },
          { "Id": "16564", "Name": "Phường Hải Châu", "Level": "Phường" },
          { "Id": "16567", "Name": "Xã Thanh Thủy", "Level": "Xã" },
          { "Id": "16570", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "16576", "Name": "Phường Hải Ninh", "Level": "Phường" },
          { "Id": "16579", "Name": "Xã Anh Sơn", "Level": "Xã" },
          { "Id": "16582", "Name": "Xã Ngọc Lĩnh", "Level": "Xã" },
          { "Id": "16585", "Name": "Phường Hải An", "Level": "Phường" },
          { "Id": "16591", "Name": "Xã Các Sơn", "Level": "Xã" },
          { "Id": "16594", "Name": "Phường Tân Dân", "Level": "Phường" },
          { "Id": "16597", "Name": "Phường Hải Lĩnh", "Level": "Phường" },
          { "Id": "16600", "Name": "Xã Định Hải", "Level": "Xã" },
          { "Id": "16603", "Name": "Xã Phú Sơn", "Level": "Xã" },
          { "Id": "16606", "Name": "Phường Ninh Hải", "Level": "Phường" },
          { "Id": "16609", "Name": "Phường Nguyên Bình", "Level": "Phường" },
          { "Id": "16612", "Name": "Xã Hải Nhân", "Level": "Xã" },
          { "Id": "16618", "Name": "Phường Bình Minh", "Level": "Phường" },
          { "Id": "16621", "Name": "Phường Hải Thanh", "Level": "Phường" },
          { "Id": "16624", "Name": "Xã Phú Lâm", "Level": "Xã" },
          { "Id": "16627", "Name": "Phường Xuân Lâm", "Level": "Phường" },
          { "Id": "16630", "Name": "Phường Trúc Lâm", "Level": "Phường" },
          { "Id": "16633", "Name": "Phường Hải Bình", "Level": "Phường" },
          { "Id": "16636", "Name": "Xã Tân Trường", "Level": "Xã" },
          { "Id": "16639", "Name": "Xã Tùng Lâm", "Level": "Xã" },
          { "Id": "16642", "Name": "Phường Tĩnh Hải", "Level": "Phường" },
          { "Id": "16645", "Name": "Phường Mai Lâm", "Level": "Phường" },
          { "Id": "16648", "Name": "Xã Trường Lâm", "Level": "Xã" },
          { "Id": "16651", "Name": "Xã Hải Yến", "Level": "Xã" },
          { "Id": "16654", "Name": "Phường Hải Thượng", "Level": "Phường" },
          { "Id": "16657", "Name": "Xã Nghi Sơn", "Level": "Xã" },
          { "Id": "16660", "Name": "Xã Hải Hà", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "40",
    "Name": "Tỉnh Nghệ An",
    "Districts": [
      {
        "Id": "412",
        "Name": "Thành phố Vinh",
        "Wards": [
          { "Id": "16663", "Name": "Phường Đông Vĩnh", "Level": "Phường" },
          { "Id": "16666", "Name": "Phường Hà Huy Tập", "Level": "Phường" },
          { "Id": "16669", "Name": "Phường Lê Lợi", "Level": "Phường" },
          { "Id": "16670", "Name": "Phường Quán Bàu", "Level": "Phường" },
          { "Id": "16672", "Name": "Phường Hưng Bình", "Level": "Phường" },
          { "Id": "16673", "Name": "Phường Hưng Phúc", "Level": "Phường" },
          { "Id": "16675", "Name": "Phường Hưng Dũng", "Level": "Phường" },
          { "Id": "16678", "Name": "Phường Cửa Nam", "Level": "Phường" },
          { "Id": "16681", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "16684", "Name": "Phường Đội Cung", "Level": "Phường" },
          { "Id": "16687", "Name": "Phường Lê Mao", "Level": "Phường" },
          { "Id": "16690", "Name": "Phường Trường Thi", "Level": "Phường" },
          { "Id": "16693", "Name": "Phường Bến Thủy", "Level": "Phường" },
          { "Id": "16696", "Name": "Phường Hồng Sơn", "Level": "Phường" },
          { "Id": "16699", "Name": "Phường Trung Đô", "Level": "Phường" },
          { "Id": "16702", "Name": "Xã Nghi Phú", "Level": "Xã" },
          { "Id": "16705", "Name": "Xã Hưng Đông", "Level": "Xã" },
          { "Id": "16708", "Name": "Xã Hưng Lộc", "Level": "Xã" },
          { "Id": "16711", "Name": "Xã Hưng Hòa", "Level": "Xã" },
          { "Id": "16714", "Name": "Phường Vinh Tân", "Level": "Phường" },
          { "Id": "17908", "Name": "Xã Nghi Liên", "Level": "Xã" },
          { "Id": "17914", "Name": "Xã Nghi Ân", "Level": "Xã" },
          { "Id": "17920", "Name": "Xã Nghi Kim", "Level": "Xã" },
          { "Id": "17923", "Name": "Xã Nghi Đức", "Level": "Xã" },
          { "Id": "18013", "Name": "Xã Hưng Chính", "Level": "Xã" }
        ]
      },
      {
        "Id": "413",
        "Name": "Thị xã Cửa Lò",
        "Wards": [
          { "Id": "16717", "Name": "Phường Nghi Thuỷ", "Level": "Phường" },
          { "Id": "16720", "Name": "Phường Nghi Tân", "Level": "Phường" },
          { "Id": "16723", "Name": "Phường Thu Thuỷ", "Level": "Phường" },
          { "Id": "16726", "Name": "Phường Nghi Hòa", "Level": "Phường" },
          { "Id": "16729", "Name": "Phường Nghi Hải", "Level": "Phường" },
          { "Id": "16732", "Name": "Phường Nghi Hương", "Level": "Phường" },
          { "Id": "16735", "Name": "Phường Nghi Thu", "Level": "Phường" }
        ]
      },
      {
        "Id": "414",
        "Name": "Thị xã Thái Hoà",
        "Wards": [
          { "Id": "16939", "Name": "Phường Hoà Hiếu", "Level": "Phường" },
          { "Id": "16993", "Name": "Phường Quang Phong", "Level": "Phường" },
          { "Id": "16994", "Name": "Phường Quang Tiến", "Level": "Phường" },
          { "Id": "17003", "Name": "Phường Long Sơn", "Level": "Phường" },
          { "Id": "17005", "Name": "Xã Nghĩa Tiến", "Level": "Xã" },
          { "Id": "17008", "Name": "Xã Nghĩa Mỹ", "Level": "Xã" },
          { "Id": "17011", "Name": "Xã Tây Hiếu", "Level": "Xã" },
          { "Id": "17014", "Name": "Xã Nghĩa Thuận", "Level": "Xã" },
          { "Id": "17017", "Name": "Xã Đông Hiếu", "Level": "Xã" }
        ]
      },
      {
        "Id": "415",
        "Name": "Huyện Quế Phong",
        "Wards": [
          { "Id": "16738", "Name": "Thị trấn Kim Sơn", "Level": "Thị trấn" },
          { "Id": "16741", "Name": "Xã Thông Thụ", "Level": "Xã" },
          { "Id": "16744", "Name": "Xã Đồng Văn", "Level": "Xã" },
          { "Id": "16747", "Name": "Xã Hạnh Dịch", "Level": "Xã" },
          { "Id": "16750", "Name": "Xã Tiền Phong", "Level": "Xã" },
          { "Id": "16753", "Name": "Xã Nậm Giải", "Level": "Xã" },
          { "Id": "16756", "Name": "Xã Tri Lễ", "Level": "Xã" },
          { "Id": "16759", "Name": "Xã Châu Kim", "Level": "Xã" },
          { "Id": "16763", "Name": "Xã Mường Nọc", "Level": "Xã" },
          { "Id": "16765", "Name": "Xã Châu Thôn", "Level": "Xã" },
          { "Id": "16768", "Name": "Xã Nậm Nhoóng", "Level": "Xã" },
          { "Id": "16771", "Name": "Xã Quang Phong", "Level": "Xã" },
          { "Id": "16774", "Name": "Xã Căm Muộn", "Level": "Xã" }
        ]
      },
      {
        "Id": "416",
        "Name": "Huyện Quỳ Châu",
        "Wards": [
          { "Id": "16777", "Name": "Thị trấn Tân Lạc", "Level": "Thị trấn" },
          { "Id": "16780", "Name": "Xã Châu Bính", "Level": "Xã" },
          { "Id": "16783", "Name": "Xã Châu Thuận", "Level": "Xã" },
          { "Id": "16786", "Name": "Xã Châu Hội", "Level": "Xã" },
          { "Id": "16789", "Name": "Xã Châu Nga", "Level": "Xã" },
          { "Id": "16792", "Name": "Xã Châu Tiến", "Level": "Xã" },
          { "Id": "16795", "Name": "Xã Châu Hạnh", "Level": "Xã" },
          { "Id": "16798", "Name": "Xã Châu Thắng", "Level": "Xã" },
          { "Id": "16801", "Name": "Xã Châu Phong", "Level": "Xã" },
          { "Id": "16804", "Name": "Xã Châu Bình", "Level": "Xã" },
          { "Id": "16807", "Name": "Xã Châu Hoàn", "Level": "Xã" },
          { "Id": "16810", "Name": "Xã Diên Lãm", "Level": "Xã" }
        ]
      },
      {
        "Id": "417",
        "Name": "Huyện Kỳ Sơn",
        "Wards": [
          { "Id": "16813", "Name": "Thị trấn Mường Xén", "Level": "Thị trấn" },
          { "Id": "16816", "Name": "Xã Mỹ Lý", "Level": "Xã" },
          { "Id": "16819", "Name": "Xã Bắc Lý", "Level": "Xã" },
          { "Id": "16822", "Name": "Xã Keng Đu", "Level": "Xã" },
          { "Id": "16825", "Name": "Xã Đoọc Mạy", "Level": "Xã" },
          { "Id": "16828", "Name": "Xã Huồi Tụ", "Level": "Xã" },
          { "Id": "16831", "Name": "Xã Mường Lống", "Level": "Xã" },
          { "Id": "16834", "Name": "Xã Na Loi", "Level": "Xã" },
          { "Id": "16837", "Name": "Xã Nậm Cắn", "Level": "Xã" },
          { "Id": "16840", "Name": "Xã Bảo Nam", "Level": "Xã" },
          { "Id": "16843", "Name": "Xã Phà Đánh", "Level": "Xã" },
          { "Id": "16846", "Name": "Xã Bảo Thắng", "Level": "Xã" },
          { "Id": "16849", "Name": "Xã Hữu Lập", "Level": "Xã" },
          { "Id": "16852", "Name": "Xã Tà Cạ", "Level": "Xã" },
          { "Id": "16855", "Name": "Xã Chiêu Lưu", "Level": "Xã" },
          { "Id": "16858", "Name": "Xã Mường Típ", "Level": "Xã" },
          { "Id": "16861", "Name": "Xã Hữu Kiệm", "Level": "Xã" },
          { "Id": "16864", "Name": "Xã Tây Sơn", "Level": "Xã" },
          { "Id": "16867", "Name": "Xã Mường Ải", "Level": "Xã" },
          { "Id": "16870", "Name": "Xã Na Ngoi", "Level": "Xã" },
          { "Id": "16873", "Name": "Xã Nậm Càn", "Level": "Xã" }
        ]
      },
      {
        "Id": "418",
        "Name": "Huyện Tương Dương",
        "Wards": [
          { "Id": "16876", "Name": "Thị trấn Thạch Giám", "Level": "Thị trấn" },
          { "Id": "16879", "Name": "Xã Mai Sơn", "Level": "Xã" },
          { "Id": "16882", "Name": "Xã Nhôn Mai", "Level": "Xã" },
          { "Id": "16885", "Name": "Xã Hữu Khuông", "Level": "Xã" },
          { "Id": "16900", "Name": "Xã Yên Tĩnh", "Level": "Xã" },
          { "Id": "16903", "Name": "Xã Nga My", "Level": "Xã" },
          { "Id": "16904", "Name": "Xã Xiêng My", "Level": "Xã" },
          { "Id": "16906", "Name": "Xã Lưỡng Minh", "Level": "Xã" },
          { "Id": "16909", "Name": "Xã Yên Hòa", "Level": "Xã" },
          { "Id": "16912", "Name": "Xã Yên Na", "Level": "Xã" },
          { "Id": "16915", "Name": "Xã Lưu Kiền", "Level": "Xã" },
          { "Id": "16921", "Name": "Xã Xá Lượng", "Level": "Xã" },
          { "Id": "16924", "Name": "Xã Tam Thái", "Level": "Xã" },
          { "Id": "16927", "Name": "Xã Tam Đình", "Level": "Xã" },
          { "Id": "16930", "Name": "Xã Yên Thắng", "Level": "Xã" },
          { "Id": "16933", "Name": "Xã Tam Quang", "Level": "Xã" },
          { "Id": "16936", "Name": "Xã Tam Hợp", "Level": "Xã" }
        ]
      },
      {
        "Id": "419",
        "Name": "Huyện Nghĩa Đàn",
        "Wards": [
          { "Id": "16941", "Name": "Thị trấn Nghĩa Đàn", "Level": "Thị trấn" },
          { "Id": "16942", "Name": "Xã Nghĩa Mai", "Level": "Xã" },
          { "Id": "16945", "Name": "Xã Nghĩa Yên", "Level": "Xã" },
          { "Id": "16948", "Name": "Xã Nghĩa Lạc", "Level": "Xã" },
          { "Id": "16951", "Name": "Xã Nghĩa Lâm", "Level": "Xã" },
          { "Id": "16954", "Name": "Xã Nghĩa Sơn", "Level": "Xã" },
          { "Id": "16957", "Name": "Xã Nghĩa Lợi", "Level": "Xã" },
          { "Id": "16960", "Name": "Xã Nghĩa Bình", "Level": "Xã" },
          { "Id": "16963", "Name": "Xã Nghĩa Thọ", "Level": "Xã" },
          { "Id": "16966", "Name": "Xã Nghĩa Minh", "Level": "Xã" },
          { "Id": "16969", "Name": "Xã Nghĩa Phú", "Level": "Xã" },
          { "Id": "16972", "Name": "Xã Nghĩa Hưng", "Level": "Xã" },
          { "Id": "16975", "Name": "Xã Nghĩa Hồng", "Level": "Xã" },
          { "Id": "16978", "Name": "Xã Nghĩa Thịnh", "Level": "Xã" },
          { "Id": "16981", "Name": "Xã Nghĩa Trung", "Level": "Xã" },
          { "Id": "16984", "Name": "Xã Nghĩa Hội", "Level": "Xã" },
          { "Id": "16987", "Name": "Xã Nghĩa Thành", "Level": "Xã" },
          { "Id": "16996", "Name": "Xã Nghĩa Hiếu", "Level": "Xã" },
          { "Id": "17020", "Name": "Xã Nghĩa Đức", "Level": "Xã" },
          { "Id": "17023", "Name": "Xã Nghĩa An", "Level": "Xã" },
          { "Id": "17026", "Name": "Xã Nghĩa Long", "Level": "Xã" },
          { "Id": "17029", "Name": "Xã Nghĩa Lộc", "Level": "Xã" },
          { "Id": "17032", "Name": "Xã Nghĩa Khánh", "Level": "Xã" }
        ]
      },
      {
        "Id": "420",
        "Name": "Huyện Quỳ Hợp",
        "Wards": [
          { "Id": "17035", "Name": "Thị trấn Quỳ Hợp", "Level": "Thị trấn" },
          { "Id": "17038", "Name": "Xã Yên Hợp", "Level": "Xã" },
          { "Id": "17041", "Name": "Xã Châu Tiến", "Level": "Xã" },
          { "Id": "17044", "Name": "Xã Châu Hồng", "Level": "Xã" },
          { "Id": "17047", "Name": "Xã Đồng Hợp", "Level": "Xã" },
          { "Id": "17050", "Name": "Xã Châu Thành", "Level": "Xã" },
          { "Id": "17053", "Name": "Xã Liên Hợp", "Level": "Xã" },
          { "Id": "17056", "Name": "Xã Châu Lộc", "Level": "Xã" },
          { "Id": "17059", "Name": "Xã Tam Hợp", "Level": "Xã" },
          { "Id": "17062", "Name": "Xã Châu Cường", "Level": "Xã" },
          { "Id": "17065", "Name": "Xã Châu Quang", "Level": "Xã" },
          { "Id": "17068", "Name": "Xã Thọ Hợp", "Level": "Xã" },
          { "Id": "17071", "Name": "Xã Minh Hợp", "Level": "Xã" },
          { "Id": "17074", "Name": "Xã Nghĩa Xuân", "Level": "Xã" },
          { "Id": "17077", "Name": "Xã Châu Thái", "Level": "Xã" },
          { "Id": "17080", "Name": "Xã Châu Đình", "Level": "Xã" },
          { "Id": "17083", "Name": "Xã Văn Lợi", "Level": "Xã" },
          { "Id": "17086", "Name": "Xã Nam Sơn", "Level": "Xã" },
          { "Id": "17089", "Name": "Xã Châu Lý", "Level": "Xã" },
          { "Id": "17092", "Name": "Xã Hạ Sơn", "Level": "Xã" },
          { "Id": "17095", "Name": "Xã Bắc Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "421",
        "Name": "Huyện Quỳnh Lưu",
        "Wards": [
          { "Id": "17098", "Name": "Thị trấn Cầu Giát", "Level": "Thị trấn" },
          { "Id": "17101", "Name": "Xã Quỳnh Thắng", "Level": "Xã" },
          { "Id": "17119", "Name": "Xã Quỳnh Tân", "Level": "Xã" },
          { "Id": "17122", "Name": "Xã Quỳnh Châu", "Level": "Xã" },
          { "Id": "17140", "Name": "Xã Tân Sơn", "Level": "Xã" },
          { "Id": "17143", "Name": "Xã Quỳnh Văn", "Level": "Xã" },
          { "Id": "17146", "Name": "Xã Ngọc Sơn", "Level": "Xã" },
          { "Id": "17149", "Name": "Xã Quỳnh Tam", "Level": "Xã" },
          { "Id": "17152", "Name": "Xã Quỳnh Hoa", "Level": "Xã" },
          { "Id": "17155", "Name": "Xã Quỳnh Thạch", "Level": "Xã" },
          { "Id": "17158", "Name": "Xã Quỳnh Bảng", "Level": "Xã" },
          { "Id": "17161", "Name": "Xã Quỳnh Mỹ", "Level": "Xã" },
          { "Id": "17164", "Name": "Xã Quỳnh Thanh", "Level": "Xã" },
          { "Id": "17167", "Name": "Xã Quỳnh Hậu", "Level": "Xã" },
          { "Id": "17170", "Name": "Xã Quỳnh Lâm", "Level": "Xã" },
          { "Id": "17173", "Name": "Xã Quỳnh Đôi", "Level": "Xã" },
          { "Id": "17176", "Name": "Xã Quỳnh Lương", "Level": "Xã" },
          { "Id": "17179", "Name": "Xã Quỳnh Hồng", "Level": "Xã" },
          { "Id": "17182", "Name": "Xã Quỳnh Yên", "Level": "Xã" },
          { "Id": "17185", "Name": "Xã Quỳnh Bá", "Level": "Xã" },
          { "Id": "17188", "Name": "Xã Quỳnh Minh", "Level": "Xã" },
          { "Id": "17191", "Name": "Xã Quỳnh Diễn", "Level": "Xã" },
          { "Id": "17194", "Name": "Xã Quỳnh Hưng", "Level": "Xã" },
          { "Id": "17197", "Name": "Xã Quỳnh Giang", "Level": "Xã" },
          { "Id": "17200", "Name": "Xã Quỳnh Ngọc", "Level": "Xã" },
          { "Id": "17203", "Name": "Xã Quỳnh Nghĩa", "Level": "Xã" },
          { "Id": "17206", "Name": "Xã An Hòa", "Level": "Xã" },
          { "Id": "17209", "Name": "Xã Tiến Thủy", "Level": "Xã" },
          { "Id": "17212", "Name": "Xã Sơn Hải", "Level": "Xã" },
          { "Id": "17215", "Name": "Xã Quỳnh Thọ", "Level": "Xã" },
          { "Id": "17218", "Name": "Xã Quỳnh Thuận", "Level": "Xã" },
          { "Id": "17221", "Name": "Xã Quỳnh Long", "Level": "Xã" },
          { "Id": "17224", "Name": "Xã Tân Thắng", "Level": "Xã" }
        ]
      },
      {
        "Id": "422",
        "Name": "Huyện Con Cuông",
        "Wards": [
          { "Id": "17227", "Name": "Thị trấn Con Cuông", "Level": "Thị trấn" },
          { "Id": "17230", "Name": "Xã Bình Chuẩn", "Level": "Xã" },
          { "Id": "17233", "Name": "Xã Lạng Khê", "Level": "Xã" },
          { "Id": "17236", "Name": "Xã Cam Lâm", "Level": "Xã" },
          { "Id": "17239", "Name": "Xã Thạch Ngàn", "Level": "Xã" },
          { "Id": "17242", "Name": "Xã Đôn Phục", "Level": "Xã" },
          { "Id": "17245", "Name": "Xã Mậu Đức", "Level": "Xã" },
          { "Id": "17248", "Name": "Xã Châu Khê", "Level": "Xã" },
          { "Id": "17251", "Name": "Xã Chi Khê", "Level": "Xã" },
          { "Id": "17254", "Name": "Xã Bồng Khê", "Level": "Xã" },
          { "Id": "17257", "Name": "Xã Yên Khê", "Level": "Xã" },
          { "Id": "17260", "Name": "Xã Lục Dạ", "Level": "Xã" },
          { "Id": "17263", "Name": "Xã Môn Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "423",
        "Name": "Huyện Tân Kỳ",
        "Wards": [
          { "Id": "17266", "Name": "Thị trấn Tân Kỳ", "Level": "Thị trấn" },
          { "Id": "17269", "Name": "Xã Tân Hợp", "Level": "Xã" },
          { "Id": "17272", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "17275", "Name": "Xã Tân Xuân", "Level": "Xã" },
          { "Id": "17278", "Name": "Xã Giai Xuân", "Level": "Xã" },
          { "Id": "17281", "Name": "Xã Nghĩa Bình", "Level": "Xã" },
          { "Id": "17284", "Name": "Xã Nghĩa Đồng", "Level": "Xã" },
          { "Id": "17287", "Name": "Xã Đồng Văn", "Level": "Xã" },
          { "Id": "17290", "Name": "Xã Nghĩa Thái", "Level": "Xã" },
          { "Id": "17293", "Name": "Xã Nghĩa Hợp", "Level": "Xã" },
          { "Id": "17296", "Name": "Xã Nghĩa Hoàn", "Level": "Xã" },
          { "Id": "17299", "Name": "Xã Nghĩa Phúc", "Level": "Xã" },
          { "Id": "17302", "Name": "Xã Tiên Kỳ", "Level": "Xã" },
          { "Id": "17305", "Name": "Xã Tân An", "Level": "Xã" },
          { "Id": "17308", "Name": "Xã Nghĩa Dũng", "Level": "Xã" },
          { "Id": "17311", "Name": "Xã Tân Long", "Level": "Xã" },
          { "Id": "17314", "Name": "Xã Kỳ Sơn", "Level": "Xã" },
          { "Id": "17317", "Name": "Xã Hương Sơn", "Level": "Xã" },
          { "Id": "17320", "Name": "Xã Kỳ Tân", "Level": "Xã" },
          { "Id": "17323", "Name": "Xã Phú Sơn", "Level": "Xã" },
          { "Id": "17325", "Name": "Xã Tân Hương", "Level": "Xã" },
          { "Id": "17326", "Name": "Xã Nghĩa Hành", "Level": "Xã" }
        ]
      },
      {
        "Id": "424",
        "Name": "Huyện Anh Sơn",
        "Wards": [
          { "Id": "17329", "Name": "Thị trấn Anh Sơn", "Level": "Thị trấn" },
          { "Id": "17332", "Name": "Xã Thọ Sơn", "Level": "Xã" },
          { "Id": "17335", "Name": "Xã Thành Sơn", "Level": "Xã" },
          { "Id": "17338", "Name": "Xã Bình Sơn", "Level": "Xã" },
          { "Id": "17341", "Name": "Xã Tam Sơn", "Level": "Xã" },
          { "Id": "17344", "Name": "Xã Đỉnh Sơn", "Level": "Xã" },
          { "Id": "17347", "Name": "Xã Hùng Sơn", "Level": "Xã" },
          { "Id": "17350", "Name": "Xã Cẩm Sơn", "Level": "Xã" },
          { "Id": "17353", "Name": "Xã Đức Sơn", "Level": "Xã" },
          { "Id": "17356", "Name": "Xã Tường Sơn", "Level": "Xã" },
          { "Id": "17357", "Name": "Xã Hoa Sơn", "Level": "Xã" },
          { "Id": "17359", "Name": "Xã Tào Sơn", "Level": "Xã" },
          { "Id": "17362", "Name": "Xã Vĩnh Sơn", "Level": "Xã" },
          { "Id": "17365", "Name": "Xã Lạng Sơn", "Level": "Xã" },
          { "Id": "17368", "Name": "Xã Hội Sơn", "Level": "Xã" },
          { "Id": "17371", "Name": "Xã Thạch Sơn", "Level": "Xã" },
          { "Id": "17374", "Name": "Xã Phúc Sơn", "Level": "Xã" },
          { "Id": "17377", "Name": "Xã Long Sơn", "Level": "Xã" },
          { "Id": "17380", "Name": "Xã Khai Sơn", "Level": "Xã" },
          { "Id": "17383", "Name": "Xã Lĩnh Sơn", "Level": "Xã" },
          { "Id": "17386", "Name": "Xã Cao Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "425",
        "Name": "Huyện Diễn Châu",
        "Wards": [
          { "Id": "17389", "Name": "Thị trấn Diễn Châu", "Level": "Thị trấn" },
          { "Id": "17392", "Name": "Xã Diễn Lâm", "Level": "Xã" },
          { "Id": "17395", "Name": "Xã Diễn Đoài", "Level": "Xã" },
          { "Id": "17398", "Name": "Xã Diễn Trường", "Level": "Xã" },
          { "Id": "17401", "Name": "Xã Diễn Yên", "Level": "Xã" },
          { "Id": "17404", "Name": "Xã Diễn Hoàng", "Level": "Xã" },
          { "Id": "17407", "Name": "Xã Diễn Hùng", "Level": "Xã" },
          { "Id": "17410", "Name": "Xã Diễn Mỹ", "Level": "Xã" },
          { "Id": "17413", "Name": "Xã Diễn Hồng", "Level": "Xã" },
          { "Id": "17416", "Name": "Xã Diễn Phong", "Level": "Xã" },
          { "Id": "17419", "Name": "Xã Diễn Hải", "Level": "Xã" },
          { "Id": "17422", "Name": "Xã Diễn Tháp", "Level": "Xã" },
          { "Id": "17425", "Name": "Xã Diễn Liên", "Level": "Xã" },
          { "Id": "17428", "Name": "Xã Diễn Vạn", "Level": "Xã" },
          { "Id": "17431", "Name": "Xã Diễn Kim", "Level": "Xã" },
          { "Id": "17434", "Name": "Xã Diễn Kỷ", "Level": "Xã" },
          { "Id": "17437", "Name": "Xã Diễn Xuân", "Level": "Xã" },
          { "Id": "17440", "Name": "Xã Diễn Thái", "Level": "Xã" },
          { "Id": "17443", "Name": "Xã Diễn Đồng", "Level": "Xã" },
          { "Id": "17446", "Name": "Xã Diễn Bích", "Level": "Xã" },
          { "Id": "17449", "Name": "Xã Diễn Hạnh", "Level": "Xã" },
          { "Id": "17452", "Name": "Xã Diễn Ngọc", "Level": "Xã" },
          { "Id": "17455", "Name": "Xã Diễn Quảng", "Level": "Xã" },
          { "Id": "17458", "Name": "Xã Diễn Nguyên", "Level": "Xã" },
          { "Id": "17461", "Name": "Xã Diễn Hoa", "Level": "Xã" },
          { "Id": "17464", "Name": "Xã Diễn Thành", "Level": "Xã" },
          { "Id": "17467", "Name": "Xã Diễn Phúc", "Level": "Xã" },
          { "Id": "17476", "Name": "Xã Diễn Cát", "Level": "Xã" },
          { "Id": "17479", "Name": "Xã Diễn Thịnh", "Level": "Xã" },
          { "Id": "17482", "Name": "Xã Diễn Tân", "Level": "Xã" },
          { "Id": "17485", "Name": "Xã Minh Châu", "Level": "Xã" },
          { "Id": "17488", "Name": "Xã Diễn Thọ", "Level": "Xã" },
          { "Id": "17491", "Name": "Xã Diễn Lợi", "Level": "Xã" },
          { "Id": "17494", "Name": "Xã Diễn Lộc", "Level": "Xã" },
          { "Id": "17497", "Name": "Xã Diễn Trung", "Level": "Xã" },
          { "Id": "17500", "Name": "Xã Diễn An", "Level": "Xã" },
          { "Id": "17503", "Name": "Xã Diễn Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "426",
        "Name": "Huyện Yên Thành",
        "Wards": [
          { "Id": "17506", "Name": "Thị trấn Yên Thành", "Level": "Thị trấn" },
          { "Id": "17509", "Name": "Xã Mã Thành", "Level": "Xã" },
          { "Id": "17510", "Name": "Xã Tiến Thành", "Level": "Xã" },
          { "Id": "17512", "Name": "Xã Lăng Thành", "Level": "Xã" },
          { "Id": "17515", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "17518", "Name": "Xã Đức Thành", "Level": "Xã" },
          { "Id": "17521", "Name": "Xã Kim Thành", "Level": "Xã" },
          { "Id": "17524", "Name": "Xã Hậu Thành", "Level": "Xã" },
          { "Id": "17525", "Name": "Xã Hùng Thành", "Level": "Xã" },
          { "Id": "17527", "Name": "Xã Đô Thành", "Level": "Xã" },
          { "Id": "17530", "Name": "Xã Thọ Thành", "Level": "Xã" },
          { "Id": "17533", "Name": "Xã Quang Thành", "Level": "Xã" },
          { "Id": "17536", "Name": "Xã Tây Thành", "Level": "Xã" },
          { "Id": "17539", "Name": "Xã Phúc Thành", "Level": "Xã" },
          { "Id": "17542", "Name": "Xã Hồng Thành", "Level": "Xã" },
          { "Id": "17545", "Name": "Xã Đồng Thành", "Level": "Xã" },
          { "Id": "17548", "Name": "Xã Phú Thành", "Level": "Xã" },
          { "Id": "17551", "Name": "Xã Hoa Thành", "Level": "Xã" },
          { "Id": "17554", "Name": "Xã Tăng Thành", "Level": "Xã" },
          { "Id": "17557", "Name": "Xã Văn Thành", "Level": "Xã" },
          { "Id": "17560", "Name": "Xã Thịnh Thành", "Level": "Xã" },
          { "Id": "17563", "Name": "Xã Hợp Thành", "Level": "Xã" },
          { "Id": "17566", "Name": "Xã Xuân Thành", "Level": "Xã" },
          { "Id": "17569", "Name": "Xã Bắc Thành", "Level": "Xã" },
          { "Id": "17572", "Name": "Xã Nhân Thành", "Level": "Xã" },
          { "Id": "17575", "Name": "Xã Trung Thành", "Level": "Xã" },
          { "Id": "17578", "Name": "Xã Long Thành", "Level": "Xã" },
          { "Id": "17581", "Name": "Xã Minh Thành", "Level": "Xã" },
          { "Id": "17584", "Name": "Xã Nam Thành", "Level": "Xã" },
          { "Id": "17587", "Name": "Xã Vĩnh Thành", "Level": "Xã" },
          { "Id": "17590", "Name": "Xã Lý Thành", "Level": "Xã" },
          { "Id": "17593", "Name": "Xã Khánh Thành", "Level": "Xã" },
          { "Id": "17596", "Name": "Xã Viên Thành", "Level": "Xã" },
          { "Id": "17599", "Name": "Xã Đại Thành", "Level": "Xã" },
          { "Id": "17602", "Name": "Xã Liên Thành", "Level": "Xã" },
          { "Id": "17605", "Name": "Xã Bảo Thành", "Level": "Xã" },
          { "Id": "17608", "Name": "Xã Mỹ Thành", "Level": "Xã" },
          { "Id": "17611", "Name": "Xã Công Thành", "Level": "Xã" },
          { "Id": "17614", "Name": "Xã Sơn Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "427",
        "Name": "Huyện Đô Lương",
        "Wards": [
          { "Id": "17617", "Name": "Thị trấn Đô Lương", "Level": "Thị trấn" },
          { "Id": "17619", "Name": "Xã Giang Sơn Đông", "Level": "Xã" },
          { "Id": "17620", "Name": "Xã Giang Sơn Tây", "Level": "Xã" },
          { "Id": "17623", "Name": "Xã Lam Sơn", "Level": "Xã" },
          { "Id": "17626", "Name": "Xã Bồi Sơn", "Level": "Xã" },
          { "Id": "17629", "Name": "Xã Hồng Sơn", "Level": "Xã" },
          { "Id": "17632", "Name": "Xã Bài Sơn", "Level": "Xã" },
          { "Id": "17635", "Name": "Xã Ngọc Sơn", "Level": "Xã" },
          { "Id": "17638", "Name": "Xã Bắc Sơn", "Level": "Xã" },
          { "Id": "17641", "Name": "Xã Tràng Sơn", "Level": "Xã" },
          { "Id": "17644", "Name": "Xã Thượng Sơn", "Level": "Xã" },
          { "Id": "17647", "Name": "Xã Hòa Sơn", "Level": "Xã" },
          { "Id": "17650", "Name": "Xã Đặng Sơn", "Level": "Xã" },
          { "Id": "17653", "Name": "Xã Đông Sơn", "Level": "Xã" },
          { "Id": "17656", "Name": "Xã Nam Sơn", "Level": "Xã" },
          { "Id": "17659", "Name": "Xã Lưu Sơn", "Level": "Xã" },
          { "Id": "17662", "Name": "Xã Yên Sơn", "Level": "Xã" },
          { "Id": "17665", "Name": "Xã Văn Sơn", "Level": "Xã" },
          { "Id": "17668", "Name": "Xã Đà Sơn", "Level": "Xã" },
          { "Id": "17671", "Name": "Xã Lạc Sơn", "Level": "Xã" },
          { "Id": "17674", "Name": "Xã Tân Sơn", "Level": "Xã" },
          { "Id": "17677", "Name": "Xã Thái Sơn", "Level": "Xã" },
          { "Id": "17680", "Name": "Xã Quang Sơn", "Level": "Xã" },
          { "Id": "17683", "Name": "Xã Thịnh Sơn", "Level": "Xã" },
          { "Id": "17686", "Name": "Xã Trung Sơn", "Level": "Xã" },
          { "Id": "17689", "Name": "Xã Xuân Sơn", "Level": "Xã" },
          { "Id": "17692", "Name": "Xã Minh Sơn", "Level": "Xã" },
          { "Id": "17695", "Name": "Xã Thuận Sơn", "Level": "Xã" },
          { "Id": "17698", "Name": "Xã Nhân Sơn", "Level": "Xã" },
          { "Id": "17701", "Name": "Xã Hiến Sơn", "Level": "Xã" },
          { "Id": "17704", "Name": "Xã Mỹ Sơn", "Level": "Xã" },
          { "Id": "17707", "Name": "Xã Trù Sơn", "Level": "Xã" },
          { "Id": "17710", "Name": "Xã Đại Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "428",
        "Name": "Huyện Thanh Chương",
        "Wards": [
          {
            "Id": "17713",
            "Name": "Thị trấn Thanh Chương",
            "Level": "Thị trấn"
          },
          { "Id": "17716", "Name": "Xã Cát Văn", "Level": "Xã" },
          { "Id": "17719", "Name": "Xã Thanh Nho", "Level": "Xã" },
          { "Id": "17722", "Name": "Xã Hạnh Lâm", "Level": "Xã" },
          { "Id": "17723", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "17725", "Name": "Xã Thanh Hòa", "Level": "Xã" },
          { "Id": "17728", "Name": "Xã Phong Thịnh", "Level": "Xã" },
          { "Id": "17731", "Name": "Xã Thanh Phong", "Level": "Xã" },
          { "Id": "17734", "Name": "Xã Thanh Mỹ", "Level": "Xã" },
          { "Id": "17737", "Name": "Xã Thanh Tiên", "Level": "Xã" },
          { "Id": "17743", "Name": "Xã Thanh Liên", "Level": "Xã" },
          { "Id": "17749", "Name": "Xã Đại Đồng", "Level": "Xã" },
          { "Id": "17752", "Name": "Xã Thanh Đồng", "Level": "Xã" },
          { "Id": "17755", "Name": "Xã Thanh Ngọc", "Level": "Xã" },
          { "Id": "17758", "Name": "Xã Thanh Hương", "Level": "Xã" },
          { "Id": "17759", "Name": "Xã Ngọc Lâm", "Level": "Xã" },
          { "Id": "17761", "Name": "Xã Thanh Lĩnh", "Level": "Xã" },
          { "Id": "17764", "Name": "Xã Đồng Văn", "Level": "Xã" },
          { "Id": "17767", "Name": "Xã Ngọc Sơn", "Level": "Xã" },
          { "Id": "17770", "Name": "Xã Thanh Thịnh", "Level": "Xã" },
          { "Id": "17773", "Name": "Xã Thanh An", "Level": "Xã" },
          { "Id": "17776", "Name": "Xã Thanh Chi", "Level": "Xã" },
          { "Id": "17779", "Name": "Xã Xuân Tường", "Level": "Xã" },
          { "Id": "17782", "Name": "Xã Thanh Dương", "Level": "Xã" },
          { "Id": "17785", "Name": "Xã Thanh Lương", "Level": "Xã" },
          { "Id": "17788", "Name": "Xã Thanh Khê", "Level": "Xã" },
          { "Id": "17791", "Name": "Xã Võ Liệt", "Level": "Xã" },
          { "Id": "17794", "Name": "Xã Thanh Long", "Level": "Xã" },
          { "Id": "17797", "Name": "Xã Thanh Thủy", "Level": "Xã" },
          { "Id": "17800", "Name": "Xã Thanh Khai", "Level": "Xã" },
          { "Id": "17803", "Name": "Xã Thanh Yên", "Level": "Xã" },
          { "Id": "17806", "Name": "Xã Thanh Hà", "Level": "Xã" },
          { "Id": "17809", "Name": "Xã Thanh Giang", "Level": "Xã" },
          { "Id": "17812", "Name": "Xã Thanh Tùng", "Level": "Xã" },
          { "Id": "17815", "Name": "Xã Thanh Lâm", "Level": "Xã" },
          { "Id": "17818", "Name": "Xã Thanh Mai", "Level": "Xã" },
          { "Id": "17821", "Name": "Xã Thanh Xuân", "Level": "Xã" },
          { "Id": "17824", "Name": "Xã Thanh Đức", "Level": "Xã" }
        ]
      },
      {
        "Id": "429",
        "Name": "Huyện Nghi Lộc",
        "Wards": [
          { "Id": "17827", "Name": "Thị trấn Quán Hành", "Level": "Thị trấn" },
          { "Id": "17830", "Name": "Xã Nghi Văn", "Level": "Xã" },
          { "Id": "17833", "Name": "Xã Nghi Yên", "Level": "Xã" },
          { "Id": "17836", "Name": "Xã Nghi Tiến", "Level": "Xã" },
          { "Id": "17839", "Name": "Xã Nghi Hưng", "Level": "Xã" },
          { "Id": "17842", "Name": "Xã Nghi Đồng", "Level": "Xã" },
          { "Id": "17845", "Name": "Xã Nghi Thiết", "Level": "Xã" },
          { "Id": "17848", "Name": "Xã Nghi Lâm", "Level": "Xã" },
          { "Id": "17851", "Name": "Xã Nghi Quang", "Level": "Xã" },
          { "Id": "17854", "Name": "Xã Nghi Kiều", "Level": "Xã" },
          { "Id": "17857", "Name": "Xã Nghi Mỹ", "Level": "Xã" },
          { "Id": "17860", "Name": "Xã Nghi Phương", "Level": "Xã" },
          { "Id": "17863", "Name": "Xã Nghi Thuận", "Level": "Xã" },
          { "Id": "17866", "Name": "Xã Nghi Long", "Level": "Xã" },
          { "Id": "17869", "Name": "Xã Nghi Xá", "Level": "Xã" },
          { "Id": "17875", "Name": "Xã Nghi Hoa", "Level": "Xã" },
          { "Id": "17878", "Name": "Xã Khánh Hợp", "Level": "Xã" },
          { "Id": "17881", "Name": "Xã Nghi Thịnh", "Level": "Xã" },
          { "Id": "17884", "Name": "Xã Nghi Công Bắc", "Level": "Xã" },
          { "Id": "17887", "Name": "Xã Nghi Công Nam", "Level": "Xã" },
          { "Id": "17890", "Name": "Xã Nghi Thạch", "Level": "Xã" },
          { "Id": "17893", "Name": "Xã Nghi Trung", "Level": "Xã" },
          { "Id": "17896", "Name": "Xã Nghi Trường", "Level": "Xã" },
          { "Id": "17899", "Name": "Xã Nghi Diên", "Level": "Xã" },
          { "Id": "17902", "Name": "Xã Nghi Phong", "Level": "Xã" },
          { "Id": "17905", "Name": "Xã Nghi Xuân", "Level": "Xã" },
          { "Id": "17911", "Name": "Xã Nghi Vạn", "Level": "Xã" },
          { "Id": "17917", "Name": "Xã Phúc Thọ", "Level": "Xã" },
          { "Id": "17926", "Name": "Xã Nghi Thái", "Level": "Xã" }
        ]
      },
      {
        "Id": "430",
        "Name": "Huyện Nam Đàn",
        "Wards": [
          { "Id": "17932", "Name": "Xã Nam Hưng", "Level": "Xã" },
          { "Id": "17935", "Name": "Xã Nam Nghĩa", "Level": "Xã" },
          { "Id": "17938", "Name": "Xã Nam Thanh", "Level": "Xã" },
          { "Id": "17941", "Name": "Xã Nam Anh", "Level": "Xã" },
          { "Id": "17944", "Name": "Xã Nam Xuân", "Level": "Xã" },
          { "Id": "17947", "Name": "Xã Nam Thái", "Level": "Xã" },
          { "Id": "17950", "Name": "Thị trấn Nam Đàn", "Level": "Thị trấn" },
          { "Id": "17953", "Name": "Xã Nam Lĩnh", "Level": "Xã" },
          { "Id": "17956", "Name": "Xã Nam Giang", "Level": "Xã" },
          { "Id": "17959", "Name": "Xã Xuân Hòa", "Level": "Xã" },
          { "Id": "17962", "Name": "Xã Hùng Tiến", "Level": "Xã" },
          { "Id": "17968", "Name": "Xã Thượng Tân Lộc", "Level": "Xã" },
          { "Id": "17971", "Name": "Xã Kim Liên", "Level": "Xã" },
          { "Id": "17977", "Name": "Xã Hồng Long", "Level": "Xã" },
          { "Id": "17980", "Name": "Xã Xuân Lâm", "Level": "Xã" },
          { "Id": "17983", "Name": "Xã Nam Cát", "Level": "Xã" },
          { "Id": "17986", "Name": "Xã Khánh Sơn", "Level": "Xã" },
          { "Id": "17989", "Name": "Xã Trung Phúc Cường", "Level": "Xã" },
          { "Id": "17998", "Name": "Xã Nam Kim", "Level": "Xã" }
        ]
      },
      {
        "Id": "431",
        "Name": "Huyện Hưng Nguyên",
        "Wards": [
          {
            "Id": "18001",
            "Name": "Thị trấn Hưng Nguyên",
            "Level": "Thị trấn"
          },
          { "Id": "18004", "Name": "Xã Hưng Trung", "Level": "Xã" },
          { "Id": "18007", "Name": "Xã Hưng Yên", "Level": "Xã" },
          { "Id": "18008", "Name": "Xã Hưng Yên Bắc", "Level": "Xã" },
          { "Id": "18010", "Name": "Xã Hưng Tây", "Level": "Xã" },
          { "Id": "18016", "Name": "Xã Hưng Đạo", "Level": "Xã" },
          { "Id": "18019", "Name": "Xã Hưng Mỹ", "Level": "Xã" },
          { "Id": "18022", "Name": "Xã Hưng Thịnh", "Level": "Xã" },
          { "Id": "18025", "Name": "Xã Hưng Lĩnh", "Level": "Xã" },
          { "Id": "18028", "Name": "Xã Hưng Thông", "Level": "Xã" },
          { "Id": "18031", "Name": "Xã Hưng Tân", "Level": "Xã" },
          { "Id": "18034", "Name": "Xã Hưng Lợi", "Level": "Xã" },
          { "Id": "18037", "Name": "Xã Hưng Nghĩa", "Level": "Xã" },
          { "Id": "18040", "Name": "Xã Hưng Phúc", "Level": "Xã" },
          { "Id": "18043", "Name": "Xã Long Xá", "Level": "Xã" },
          { "Id": "18052", "Name": "Xã Châu Nhân", "Level": "Xã" },
          { "Id": "18055", "Name": "Xã Xuân Lam", "Level": "Xã" },
          { "Id": "18064", "Name": "Xã Hưng Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "432",
        "Name": "Thị xã Hoàng Mai",
        "Wards": [
          { "Id": "17104", "Name": "Xã Quỳnh Vinh", "Level": "Xã" },
          { "Id": "17107", "Name": "Xã Quỳnh Lộc", "Level": "Xã" },
          { "Id": "17110", "Name": "Phường Quỳnh Thiện", "Level": "Phường" },
          { "Id": "17113", "Name": "Xã Quỳnh Lập", "Level": "Xã" },
          { "Id": "17116", "Name": "Xã Quỳnh Trang", "Level": "Xã" },
          { "Id": "17125", "Name": "Phường Mai Hùng", "Level": "Phường" },
          { "Id": "17128", "Name": "Phường Quỳnh Dị", "Level": "Phường" },
          { "Id": "17131", "Name": "Phường Quỳnh Xuân", "Level": "Phường" },
          { "Id": "17134", "Name": "Phường Quỳnh Phương", "Level": "Phường" },
          { "Id": "17137", "Name": "Xã Quỳnh Liên", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "42",
    "Name": "Tỉnh Hà Tĩnh",
    "Districts": [
      {
        "Id": "436",
        "Name": "Thành phố Hà Tĩnh",
        "Wards": [
          { "Id": "18070", "Name": "Phường Trần Phú", "Level": "Phường" },
          { "Id": "18073", "Name": "Phường Nam Hà", "Level": "Phường" },
          { "Id": "18076", "Name": "Phường Bắc Hà", "Level": "Phường" },
          { "Id": "18077", "Name": "Phường Nguyễn Du", "Level": "Phường" },
          { "Id": "18079", "Name": "Phường Tân Giang", "Level": "Phường" },
          { "Id": "18082", "Name": "Phường Đại Nài", "Level": "Phường" },
          { "Id": "18085", "Name": "Phường Hà Huy Tập", "Level": "Phường" },
          { "Id": "18088", "Name": "Xã Thạch Trung", "Level": "Xã" },
          { "Id": "18091", "Name": "Phường Thạch Quý", "Level": "Phường" },
          { "Id": "18094", "Name": "Phường Thạch Linh", "Level": "Phường" },
          { "Id": "18097", "Name": "Phường Văn Yên", "Level": "Phường" },
          { "Id": "18100", "Name": "Xã Thạch Hạ", "Level": "Xã" },
          { "Id": "18103", "Name": "Xã Đồng Môn", "Level": "Xã" },
          { "Id": "18109", "Name": "Xã Thạch Hưng", "Level": "Xã" },
          { "Id": "18112", "Name": "Xã Thạch Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "437",
        "Name": "Thị xã Hồng Lĩnh",
        "Wards": [
          { "Id": "18115", "Name": "Phường Bắc Hồng", "Level": "Phường" },
          { "Id": "18118", "Name": "Phường Nam Hồng", "Level": "Phường" },
          { "Id": "18121", "Name": "Phường Trung Lương", "Level": "Phường" },
          { "Id": "18124", "Name": "Phường Đức Thuận", "Level": "Phường" },
          { "Id": "18127", "Name": "Phường Đậu Liêu", "Level": "Phường" },
          { "Id": "18130", "Name": "Xã Thuận Lộc", "Level": "Xã" }
        ]
      },
      {
        "Id": "439",
        "Name": "Huyện Hương Sơn",
        "Wards": [
          { "Id": "18133", "Name": "Thị trấn Phố Châu", "Level": "Thị trấn" },
          { "Id": "18136", "Name": "Thị trấn  Tây Sơn", "Level": "Thị trấn" },
          { "Id": "18139", "Name": "Xã Sơn Hồng", "Level": "Xã" },
          { "Id": "18142", "Name": "Xã Sơn Tiến", "Level": "Xã" },
          { "Id": "18145", "Name": "Xã Sơn Lâm", "Level": "Xã" },
          { "Id": "18148", "Name": "Xã Sơn Lễ", "Level": "Xã" },
          { "Id": "18157", "Name": "Xã Sơn Giang", "Level": "Xã" },
          { "Id": "18160", "Name": "Xã Sơn Lĩnh", "Level": "Xã" },
          { "Id": "18163", "Name": "Xã An Hòa Thịnh", "Level": "Xã" },
          { "Id": "18172", "Name": "Xã Sơn Tây", "Level": "Xã" },
          { "Id": "18175", "Name": "Xã Sơn Ninh", "Level": "Xã" },
          { "Id": "18178", "Name": "Xã Sơn Châu", "Level": "Xã" },
          { "Id": "18181", "Name": "Xã Tân Mỹ Hà", "Level": "Xã" },
          { "Id": "18184", "Name": "Xã Quang Diệm", "Level": "Xã" },
          { "Id": "18187", "Name": "Xã Sơn Trung", "Level": "Xã" },
          { "Id": "18190", "Name": "Xã Sơn Bằng", "Level": "Xã" },
          { "Id": "18193", "Name": "Xã Sơn Bình", "Level": "Xã" },
          { "Id": "18196", "Name": "Xã Sơn Kim 1", "Level": "Xã" },
          { "Id": "18199", "Name": "Xã Sơn Kim 2", "Level": "Xã" },
          { "Id": "18202", "Name": "Xã Sơn Trà", "Level": "Xã" },
          { "Id": "18205", "Name": "Xã Sơn Long", "Level": "Xã" },
          { "Id": "18211", "Name": "Xã Kim Hoa", "Level": "Xã" },
          { "Id": "18214", "Name": "Xã Sơn Hàm", "Level": "Xã" },
          { "Id": "18217", "Name": "Xã Sơn Phú", "Level": "Xã" },
          { "Id": "18223", "Name": "Xã Sơn Trường", "Level": "Xã" }
        ]
      },
      {
        "Id": "440",
        "Name": "Huyện Đức Thọ",
        "Wards": [
          { "Id": "18229", "Name": "Thị trấn Đức Thọ", "Level": "Thị trấn" },
          { "Id": "18235", "Name": "Xã Quang Vĩnh", "Level": "Xã" },
          { "Id": "18241", "Name": "Xã Tùng Châu", "Level": "Xã" },
          { "Id": "18244", "Name": "Xã Trường Sơn", "Level": "Xã" },
          { "Id": "18247", "Name": "Xã Liên Minh", "Level": "Xã" },
          { "Id": "18253", "Name": "Xã Yên Hồ", "Level": "Xã" },
          { "Id": "18259", "Name": "Xã Tùng Ảnh", "Level": "Xã" },
          { "Id": "18262", "Name": "Xã Bùi La Nhân", "Level": "Xã" },
          { "Id": "18274", "Name": "Xã Thanh Bình Thịnh", "Level": "Xã" },
          { "Id": "18277", "Name": "Xã Lâm Trung Thủy", "Level": "Xã" },
          { "Id": "18280", "Name": "Xã Hòa Lạc", "Level": "Xã" },
          { "Id": "18283", "Name": "Xã Tân Dân", "Level": "Xã" },
          { "Id": "18298", "Name": "Xã An Dũng", "Level": "Xã" },
          { "Id": "18304", "Name": "Xã Đức Đồng", "Level": "Xã" },
          { "Id": "18307", "Name": "Xã Đức Lạng", "Level": "Xã" },
          { "Id": "18310", "Name": "Xã Tân Hương", "Level": "Xã" }
        ]
      },
      {
        "Id": "441",
        "Name": "Huyện Vũ Quang",
        "Wards": [
          { "Id": "18313", "Name": "Thị trấn Vũ Quang", "Level": "Thị trấn" },
          { "Id": "18316", "Name": "Xã Ân Phú", "Level": "Xã" },
          { "Id": "18319", "Name": "Xã Đức Giang", "Level": "Xã" },
          { "Id": "18322", "Name": "Xã Đức Lĩnh", "Level": "Xã" },
          { "Id": "18325", "Name": "Xã Thọ Điền", "Level": "Xã" },
          { "Id": "18328", "Name": "Xã Đức Hương", "Level": "Xã" },
          { "Id": "18331", "Name": "Xã Đức Bồng", "Level": "Xã" },
          { "Id": "18334", "Name": "Xã Đức Liên", "Level": "Xã" },
          { "Id": "18340", "Name": "Xã Hương Minh", "Level": "Xã" },
          { "Id": "18343", "Name": "Xã Quang Thọ", "Level": "Xã" }
        ]
      },
      {
        "Id": "442",
        "Name": "Huyện Nghi Xuân",
        "Wards": [
          { "Id": "18352", "Name": "Thị trấn Xuân An", "Level": "Thị trấn" },
          { "Id": "18355", "Name": "Xã Xuân Hội", "Level": "Xã" },
          { "Id": "18358", "Name": "Xã Đan Trường", "Level": "Xã" },
          { "Id": "18364", "Name": "Xã Xuân Phổ", "Level": "Xã" },
          { "Id": "18367", "Name": "Xã Xuân Hải", "Level": "Xã" },
          { "Id": "18370", "Name": "Xã Xuân Giang", "Level": "Xã" },
          { "Id": "18373", "Name": "Thị trấn Tiên Điền", "Level": "Thị trấn" },
          { "Id": "18376", "Name": "Xã Xuân Yên", "Level": "Xã" },
          { "Id": "18379", "Name": "Xã Xuân Mỹ", "Level": "Xã" },
          { "Id": "18382", "Name": "Xã Xuân Thành", "Level": "Xã" },
          { "Id": "18385", "Name": "Xã Xuân Viên", "Level": "Xã" },
          { "Id": "18388", "Name": "Xã Xuân Hồng", "Level": "Xã" },
          { "Id": "18391", "Name": "Xã Cỗ Đạm", "Level": "Xã" },
          { "Id": "18394", "Name": "Xã Xuân Liên", "Level": "Xã" },
          { "Id": "18397", "Name": "Xã Xuân Lĩnh", "Level": "Xã" },
          { "Id": "18400", "Name": "Xã Xuân Lam", "Level": "Xã" },
          { "Id": "18403", "Name": "Xã Cương Gián", "Level": "Xã" }
        ]
      },
      {
        "Id": "443",
        "Name": "Huyện Can Lộc",
        "Wards": [
          { "Id": "18406", "Name": "Thị trấn Nghèn", "Level": "Thị trấn" },
          { "Id": "18415", "Name": "Xã Thiên Lộc", "Level": "Xã" },
          { "Id": "18418", "Name": "Xã Thuần Thiện", "Level": "Xã" },
          { "Id": "18427", "Name": "Xã Vượng Lộc", "Level": "Xã" },
          { "Id": "18433", "Name": "Xã Thanh Lộc", "Level": "Xã" },
          { "Id": "18436", "Name": "Xã Kim Song Trường", "Level": "Xã" },
          { "Id": "18439", "Name": "Xã Thường Nga", "Level": "Xã" },
          { "Id": "18445", "Name": "Xã Tùng Lộc", "Level": "Xã" },
          { "Id": "18454", "Name": "Xã Phú Lộc", "Level": "Xã" },
          { "Id": "18463", "Name": "Xã Gia Hanh", "Level": "Xã" },
          { "Id": "18466", "Name": "Xã Khánh Vĩnh Yên", "Level": "Xã" },
          { "Id": "18472", "Name": "Xã Trung Lộc", "Level": "Xã" },
          { "Id": "18475", "Name": "Xã Xuân Lộc", "Level": "Xã" },
          { "Id": "18478", "Name": "Xã Thượng Lộc", "Level": "Xã" },
          { "Id": "18481", "Name": "Xã Quang Lộc", "Level": "Xã" },
          { "Id": "18484", "Name": "Thị trấn Đồng Lộc", "Level": "Thị trấn" },
          { "Id": "18487", "Name": "Xã Mỹ Lộc", "Level": "Xã" },
          { "Id": "18490", "Name": "Xã Sơn Lộc", "Level": "Xã" }
        ]
      },
      {
        "Id": "444",
        "Name": "Huyện Hương Khê",
        "Wards": [
          { "Id": "18496", "Name": "Thị trấn Hương Khê", "Level": "Thị trấn" },
          { "Id": "18499", "Name": "Xã Điền Mỹ", "Level": "Xã" },
          { "Id": "18502", "Name": "Xã Hà Linh", "Level": "Xã" },
          { "Id": "18505", "Name": "Xã Hương Thủy", "Level": "Xã" },
          { "Id": "18508", "Name": "Xã Hòa Hải", "Level": "Xã" },
          { "Id": "18514", "Name": "Xã Phúc Đồng", "Level": "Xã" },
          { "Id": "18517", "Name": "Xã Hương Giang", "Level": "Xã" },
          { "Id": "18520", "Name": "Xã Lộc Yên", "Level": "Xã" },
          { "Id": "18523", "Name": "Xã Hương Bình", "Level": "Xã" },
          { "Id": "18526", "Name": "Xã Hương Long", "Level": "Xã" },
          { "Id": "18529", "Name": "Xã Phú Gia", "Level": "Xã" },
          { "Id": "18532", "Name": "Xã Gia Phố", "Level": "Xã" },
          { "Id": "18535", "Name": "Xã Phú Phong", "Level": "Xã" },
          { "Id": "18538", "Name": "Xã Hương Đô", "Level": "Xã" },
          { "Id": "18541", "Name": "Xã Hương Vĩnh", "Level": "Xã" },
          { "Id": "18544", "Name": "Xã Hương Xuân", "Level": "Xã" },
          { "Id": "18547", "Name": "Xã Phúc Trạch", "Level": "Xã" },
          { "Id": "18550", "Name": "Xã Hương Trà", "Level": "Xã" },
          { "Id": "18553", "Name": "Xã Hương Trạch", "Level": "Xã" },
          { "Id": "18556", "Name": "Xã Hương Lâm", "Level": "Xã" },
          { "Id": "18559", "Name": "Xã Hương Liên", "Level": "Xã" }
        ]
      },
      {
        "Id": "445",
        "Name": "Huyện Thạch Hà",
        "Wards": [
          { "Id": "18562", "Name": "Thị trấn Thạch Hà", "Level": "Thị trấn" },
          { "Id": "18565", "Name": "Xã Ngọc Sơn", "Level": "Xã" },
          { "Id": "18571", "Name": "Xã Thạch Hải", "Level": "Xã" },
          { "Id": "18586", "Name": "Xã Thạch Kênh", "Level": "Xã" },
          { "Id": "18589", "Name": "Xã Thạch Sơn", "Level": "Xã" },
          { "Id": "18592", "Name": "Xã Thạch Liên", "Level": "Xã" },
          { "Id": "18595", "Name": "Xã Đỉnh Bàn", "Level": "Xã" },
          { "Id": "18601", "Name": "Xã Việt Tiến", "Level": "Xã" },
          { "Id": "18604", "Name": "Xã Thạch Khê", "Level": "Xã" },
          { "Id": "18607", "Name": "Xã Thạch Long", "Level": "Xã" },
          { "Id": "18619", "Name": "Xã Thạch Trị", "Level": "Xã" },
          { "Id": "18622", "Name": "Xã Thạch Lạc", "Level": "Xã" },
          { "Id": "18625", "Name": "Xã Thạch Ngọc", "Level": "Xã" },
          { "Id": "18628", "Name": "Xã Tượng Sơn", "Level": "Xã" },
          { "Id": "18631", "Name": "Xã Thạch Văn", "Level": "Xã" },
          { "Id": "18634", "Name": "Xã Lưu Vĩnh Sơn", "Level": "Xã" },
          { "Id": "18637", "Name": "Xã Thạch Thắng", "Level": "Xã" },
          { "Id": "18643", "Name": "Xã Thạch Đài", "Level": "Xã" },
          { "Id": "18649", "Name": "Xã Thạch Hội", "Level": "Xã" },
          { "Id": "18652", "Name": "Xã Tân Lâm Hương", "Level": "Xã" },
          { "Id": "18658", "Name": "Xã Thạch Xuân", "Level": "Xã" },
          { "Id": "18667", "Name": "Xã Nam Điền", "Level": "Xã" }
        ]
      },
      {
        "Id": "446",
        "Name": "Huyện Cẩm Xuyên",
        "Wards": [
          { "Id": "18673", "Name": "Thị trấn Cẩm Xuyên", "Level": "Thị trấn" },
          { "Id": "18676", "Name": "Thị trấn Thiên Cầm", "Level": "Thị trấn" },
          { "Id": "18679", "Name": "Xã Yên Hòa", "Level": "Xã" },
          { "Id": "18682", "Name": "Xã Cẩm Dương", "Level": "Xã" },
          { "Id": "18685", "Name": "Xã Cẩm Bình", "Level": "Xã" },
          { "Id": "18691", "Name": "Xã Cẩm Vĩnh", "Level": "Xã" },
          { "Id": "18694", "Name": "Xã Cẩm Thành", "Level": "Xã" },
          { "Id": "18697", "Name": "Xã Cẩm Quang", "Level": "Xã" },
          { "Id": "18706", "Name": "Xã Cẩm Thạch", "Level": "Xã" },
          { "Id": "18709", "Name": "Xã Cẩm Nhượng", "Level": "Xã" },
          { "Id": "18712", "Name": "Xã Nam Phúc Thăng", "Level": "Xã" },
          { "Id": "18715", "Name": "Xã Cẩm Duệ", "Level": "Xã" },
          { "Id": "18721", "Name": "Xã Cẩm Lĩnh", "Level": "Xã" },
          { "Id": "18724", "Name": "Xã Cẩm Quan", "Level": "Xã" },
          { "Id": "18727", "Name": "Xã Cẩm Hà", "Level": "Xã" },
          { "Id": "18730", "Name": "Xã Cẩm Lộc", "Level": "Xã" },
          { "Id": "18733", "Name": "Xã Cẩm Hưng", "Level": "Xã" },
          { "Id": "18736", "Name": "Xã Cẩm Thịnh", "Level": "Xã" },
          { "Id": "18739", "Name": "Xã Cẩm Mỹ", "Level": "Xã" },
          { "Id": "18742", "Name": "Xã Cẩm Trung", "Level": "Xã" },
          { "Id": "18745", "Name": "Xã Cẩm Sơn", "Level": "Xã" },
          { "Id": "18748", "Name": "Xã Cẩm Lạc", "Level": "Xã" },
          { "Id": "18751", "Name": "Xã Cẩm Minh", "Level": "Xã" }
        ]
      },
      {
        "Id": "447",
        "Name": "Huyện Kỳ Anh",
        "Wards": [
          { "Id": "18757", "Name": "Xã Kỳ Xuân", "Level": "Xã" },
          { "Id": "18760", "Name": "Xã Kỳ Bắc", "Level": "Xã" },
          { "Id": "18763", "Name": "Xã Kỳ Phú", "Level": "Xã" },
          { "Id": "18766", "Name": "Xã Kỳ Phong", "Level": "Xã" },
          { "Id": "18769", "Name": "Xã Kỳ Tiến", "Level": "Xã" },
          { "Id": "18772", "Name": "Xã Kỳ Giang", "Level": "Xã" },
          { "Id": "18775", "Name": "Xã Kỳ Đồng", "Level": "Xã" },
          { "Id": "18778", "Name": "Xã Kỳ Khang", "Level": "Xã" },
          { "Id": "18784", "Name": "Xã Kỳ Văn", "Level": "Xã" },
          { "Id": "18787", "Name": "Xã Kỳ Trung", "Level": "Xã" },
          { "Id": "18790", "Name": "Xã Kỳ Thọ", "Level": "Xã" },
          { "Id": "18793", "Name": "Xã Kỳ Tây", "Level": "Xã" },
          { "Id": "18799", "Name": "Xã Kỳ Thượng", "Level": "Xã" },
          { "Id": "18802", "Name": "Xã Kỳ Hải", "Level": "Xã" },
          { "Id": "18805", "Name": "Xã Kỳ Thư", "Level": "Xã" },
          { "Id": "18811", "Name": "Xã Kỳ Châu", "Level": "Xã" },
          { "Id": "18814", "Name": "Xã Kỳ Tân", "Level": "Xã" },
          { "Id": "18838", "Name": "Xã Lâm Hợp", "Level": "Xã" },
          { "Id": "18844", "Name": "Xã Kỳ Sơn", "Level": "Xã" },
          { "Id": "18850", "Name": "Xã Kỳ Lạc", "Level": "Xã" }
        ]
      },
      {
        "Id": "448",
        "Name": "Huyện Lộc Hà",
        "Wards": [
          { "Id": "18409", "Name": "Xã Tân Lộc", "Level": "Xã" },
          { "Id": "18412", "Name": "Xã Hồng Lộc", "Level": "Xã" },
          { "Id": "18421", "Name": "Xã Thịnh Lộc", "Level": "Xã" },
          { "Id": "18430", "Name": "Xã Bình An", "Level": "Xã" },
          { "Id": "18457", "Name": "Xã Ích Hậu", "Level": "Xã" },
          { "Id": "18493", "Name": "Xã Phù Lưu", "Level": "Xã" },
          { "Id": "18568", "Name": "Thị trấn Lộc Hà", "Level": "Thị trấn" },
          { "Id": "18577", "Name": "Xã Thạch Mỹ", "Level": "Xã" },
          { "Id": "18580", "Name": "Xã Thạch Kim", "Level": "Xã" },
          { "Id": "18583", "Name": "Xã Thạch Châu", "Level": "Xã" },
          { "Id": "18598", "Name": "Xã Hộ Độ", "Level": "Xã" },
          { "Id": "18670", "Name": "Xã Mai Phụ", "Level": "Xã" }
        ]
      },
      {
        "Id": "449",
        "Name": "Thị xã Kỳ Anh",
        "Wards": [
          { "Id": "18754", "Name": "Phường Hưng Trí", "Level": "Phường" },
          { "Id": "18781", "Name": "Xã Kỳ Ninh", "Level": "Xã" },
          { "Id": "18796", "Name": "Xã Kỳ Lợi", "Level": "Xã" },
          { "Id": "18808", "Name": "Xã Kỳ Hà", "Level": "Xã" },
          { "Id": "18820", "Name": "Phường Kỳ Trinh", "Level": "Phường" },
          { "Id": "18823", "Name": "Phường Kỳ Thịnh", "Level": "Phường" },
          { "Id": "18829", "Name": "Xã Kỳ Hoa", "Level": "Xã" },
          { "Id": "18832", "Name": "Phường Kỳ Phương", "Level": "Phường" },
          { "Id": "18835", "Name": "Phường Kỳ Long", "Level": "Phường" },
          { "Id": "18841", "Name": "Phường Kỳ Liên", "Level": "Phường" },
          { "Id": "18847", "Name": "Xã Kỳ Nam", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "44",
    "Name": "Tỉnh Quảng Bình",
    "Districts": [
      {
        "Id": "450",
        "Name": "Thành Phố Đồng Hới",
        "Wards": [
          { "Id": "18853", "Name": "Phường Hải Thành", "Level": "Phường" },
          { "Id": "18856", "Name": "Phường Đồng Phú", "Level": "Phường" },
          { "Id": "18859", "Name": "Phường Bắc Lý", "Level": "Phường" },
          { "Id": "18865", "Name": "Phường Nam Lý", "Level": "Phường" },
          { "Id": "18868", "Name": "Phường Đồng Hải", "Level": "Phường" },
          { "Id": "18871", "Name": "Phường Đồng Sơn", "Level": "Phường" },
          { "Id": "18874", "Name": "Phường Phú Hải", "Level": "Phường" },
          { "Id": "18877", "Name": "Phường Bắc Nghĩa", "Level": "Phường" },
          { "Id": "18880", "Name": "Phường Đức Ninh Đông", "Level": "Phường" },
          { "Id": "18883", "Name": "Xã Quang Phú", "Level": "Xã" },
          { "Id": "18886", "Name": "Xã Lộc Ninh", "Level": "Xã" },
          { "Id": "18889", "Name": "Xã Bảo Ninh", "Level": "Xã" },
          { "Id": "18892", "Name": "Xã Nghĩa Ninh", "Level": "Xã" },
          { "Id": "18895", "Name": "Xã Thuận Đức", "Level": "Xã" },
          { "Id": "18898", "Name": "Xã Đức Ninh", "Level": "Xã" }
        ]
      },
      {
        "Id": "452",
        "Name": "Huyện Minh Hóa",
        "Wards": [
          { "Id": "18901", "Name": "Thị trấn Quy Đạt", "Level": "Thị trấn" },
          { "Id": "18904", "Name": "Xã Dân Hóa", "Level": "Xã" },
          { "Id": "18907", "Name": "Xã Trọng Hóa", "Level": "Xã" },
          { "Id": "18910", "Name": "Xã Hóa Phúc", "Level": "Xã" },
          { "Id": "18913", "Name": "Xã Hồng Hóa", "Level": "Xã" },
          { "Id": "18916", "Name": "Xã Hóa Thanh", "Level": "Xã" },
          { "Id": "18919", "Name": "Xã Hóa Tiến", "Level": "Xã" },
          { "Id": "18922", "Name": "Xã Hóa Hợp", "Level": "Xã" },
          { "Id": "18925", "Name": "Xã Xuân Hóa", "Level": "Xã" },
          { "Id": "18928", "Name": "Xã Yên Hóa", "Level": "Xã" },
          { "Id": "18931", "Name": "Xã Minh Hóa", "Level": "Xã" },
          { "Id": "18934", "Name": "Xã Tân Hóa", "Level": "Xã" },
          { "Id": "18937", "Name": "Xã Hóa Sơn", "Level": "Xã" },
          { "Id": "18943", "Name": "Xã Trung Hóa", "Level": "Xã" },
          { "Id": "18946", "Name": "Xã Thượng Hóa", "Level": "Xã" }
        ]
      },
      {
        "Id": "453",
        "Name": "Huyện Tuyên Hóa",
        "Wards": [
          { "Id": "18949", "Name": "Thị trấn Đồng Lê", "Level": "Thị trấn" },
          { "Id": "18952", "Name": "Xã Hương Hóa", "Level": "Xã" },
          { "Id": "18955", "Name": "Xã Kim Hóa", "Level": "Xã" },
          { "Id": "18958", "Name": "Xã Thanh Hóa", "Level": "Xã" },
          { "Id": "18961", "Name": "Xã Thanh Thạch", "Level": "Xã" },
          { "Id": "18964", "Name": "Xã Thuận Hóa", "Level": "Xã" },
          { "Id": "18967", "Name": "Xã Lâm Hóa", "Level": "Xã" },
          { "Id": "18970", "Name": "Xã Lê Hóa", "Level": "Xã" },
          { "Id": "18973", "Name": "Xã Sơn Hóa", "Level": "Xã" },
          { "Id": "18976", "Name": "Xã Đồng Hóa", "Level": "Xã" },
          { "Id": "18979", "Name": "Xã Ngư Hóa", "Level": "Xã" },
          { "Id": "18985", "Name": "Xã Thạch Hóa", "Level": "Xã" },
          { "Id": "18988", "Name": "Xã Đức Hóa", "Level": "Xã" },
          { "Id": "18991", "Name": "Xã Phong Hóa", "Level": "Xã" },
          { "Id": "18994", "Name": "Xã Mai Hóa", "Level": "Xã" },
          { "Id": "18997", "Name": "Xã Tiến Hóa", "Level": "Xã" },
          { "Id": "19000", "Name": "Xã Châu Hóa", "Level": "Xã" },
          { "Id": "19003", "Name": "Xã Cao Quảng", "Level": "Xã" },
          { "Id": "19006", "Name": "Xã Văn Hóa", "Level": "Xã" }
        ]
      },
      {
        "Id": "454",
        "Name": "Huyện Quảng Trạch",
        "Wards": [
          { "Id": "19012", "Name": "Xã Quảng Hợp", "Level": "Xã" },
          { "Id": "19015", "Name": "Xã Quảng Kim", "Level": "Xã" },
          { "Id": "19018", "Name": "Xã Quảng Đông", "Level": "Xã" },
          { "Id": "19021", "Name": "Xã Quảng Phú", "Level": "Xã" },
          { "Id": "19024", "Name": "Xã Quảng Châu", "Level": "Xã" },
          { "Id": "19027", "Name": "Xã Quảng Thạch", "Level": "Xã" },
          { "Id": "19030", "Name": "Xã Quảng Lưu", "Level": "Xã" },
          { "Id": "19033", "Name": "Xã Quảng Tùng", "Level": "Xã" },
          { "Id": "19036", "Name": "Xã Cảnh Dương", "Level": "Xã" },
          { "Id": "19039", "Name": "Xã Quảng Tiến", "Level": "Xã" },
          { "Id": "19042", "Name": "Xã Quảng Hưng", "Level": "Xã" },
          { "Id": "19045", "Name": "Xã Quảng Xuân", "Level": "Xã" },
          { "Id": "19048", "Name": "Xã Cảnh Hóa", "Level": "Xã" },
          { "Id": "19051", "Name": "Xã Liên Trường", "Level": "Xã" },
          { "Id": "19057", "Name": "Xã Quảng Phương", "Level": "Xã" },
          { "Id": "19063", "Name": "Xã Phù Hóa", "Level": "Xã" },
          { "Id": "19072", "Name": "Xã Quảng Thanh", "Level": "Xã" }
        ]
      },
      {
        "Id": "455",
        "Name": "Huyện Bố Trạch",
        "Wards": [
          { "Id": "19111", "Name": "Thị trấn Hoàn Lão", "Level": "Thị trấn" },
          {
            "Id": "19114",
            "Name": "Thị trấn NT Việt Trung",
            "Level": "Thị trấn"
          },
          { "Id": "19117", "Name": "Xã Xuân Trạch", "Level": "Xã" },
          { "Id": "19120", "Name": "Xã Mỹ Trạch", "Level": "Xã" },
          { "Id": "19123", "Name": "Xã Hạ Trạch", "Level": "Xã" },
          { "Id": "19126", "Name": "Xã Bắc Trạch", "Level": "Xã" },
          { "Id": "19129", "Name": "Xã Lâm Trạch", "Level": "Xã" },
          { "Id": "19132", "Name": "Xã Thanh Trạch", "Level": "Xã" },
          { "Id": "19135", "Name": "Xã Liên Trạch", "Level": "Xã" },
          { "Id": "19138", "Name": "Xã Phúc Trạch", "Level": "Xã" },
          { "Id": "19141", "Name": "Xã Cự Nẫm", "Level": "Xã" },
          { "Id": "19144", "Name": "Xã Hải Phú", "Level": "Xã" },
          { "Id": "19147", "Name": "Xã Thượng Trạch", "Level": "Xã" },
          { "Id": "19150", "Name": "Xã Sơn Lộc", "Level": "Xã" },
          { "Id": "19156", "Name": "Xã Hưng Trạch", "Level": "Xã" },
          { "Id": "19159", "Name": "Xã Đồng Trạch", "Level": "Xã" },
          { "Id": "19162", "Name": "Xã Đức Trạch", "Level": "Xã" },
          { "Id": "19165", "Name": "Thị trấn Phong Nha", "Level": "Thị trấn" },
          { "Id": "19168", "Name": "Xã Vạn Trạch", "Level": "Xã" },
          { "Id": "19174", "Name": "Xã Phú Định", "Level": "Xã" },
          { "Id": "19177", "Name": "Xã Trung Trạch", "Level": "Xã" },
          { "Id": "19180", "Name": "Xã Tây Trạch", "Level": "Xã" },
          { "Id": "19183", "Name": "Xã Hòa Trạch", "Level": "Xã" },
          { "Id": "19186", "Name": "Xã Đại Trạch", "Level": "Xã" },
          { "Id": "19189", "Name": "Xã Nhân Trạch", "Level": "Xã" },
          { "Id": "19192", "Name": "Xã Tân Trạch", "Level": "Xã" },
          { "Id": "19195", "Name": "Xã Nam Trạch", "Level": "Xã" },
          { "Id": "19198", "Name": "Xã Lý Trạch", "Level": "Xã" }
        ]
      },
      {
        "Id": "456",
        "Name": "Huyện Quảng Ninh",
        "Wards": [
          { "Id": "19201", "Name": "Thị trấn Quán Hàu", "Level": "Thị trấn" },
          { "Id": "19204", "Name": "Xã Trường Sơn", "Level": "Xã" },
          { "Id": "19207", "Name": "Xã Lương Ninh", "Level": "Xã" },
          { "Id": "19210", "Name": "Xã Vĩnh Ninh", "Level": "Xã" },
          { "Id": "19213", "Name": "Xã Võ Ninh", "Level": "Xã" },
          { "Id": "19216", "Name": "Xã Hải Ninh", "Level": "Xã" },
          { "Id": "19219", "Name": "Xã Hàm Ninh", "Level": "Xã" },
          { "Id": "19222", "Name": "Xã Duy Ninh", "Level": "Xã" },
          { "Id": "19225", "Name": "Xã Gia Ninh", "Level": "Xã" },
          { "Id": "19228", "Name": "Xã Trường Xuân", "Level": "Xã" },
          { "Id": "19231", "Name": "Xã Hiền Ninh", "Level": "Xã" },
          { "Id": "19234", "Name": "Xã Tân Ninh", "Level": "Xã" },
          { "Id": "19237", "Name": "Xã Xuân Ninh", "Level": "Xã" },
          { "Id": "19240", "Name": "Xã An Ninh", "Level": "Xã" },
          { "Id": "19243", "Name": "Xã Vạn Ninh", "Level": "Xã" }
        ]
      },
      {
        "Id": "457",
        "Name": "Huyện Lệ Thủy",
        "Wards": [
          { "Id": "19246", "Name": "Thị trấn NT Lệ Ninh", "Level": "Thị trấn" },
          { "Id": "19249", "Name": "Thị trấn Kiến Giang", "Level": "Thị trấn" },
          { "Id": "19252", "Name": "Xã Hồng Thủy", "Level": "Xã" },
          { "Id": "19255", "Name": "Xã Ngư Thủy Bắc", "Level": "Xã" },
          { "Id": "19258", "Name": "Xã Hoa Thủy", "Level": "Xã" },
          { "Id": "19261", "Name": "Xã Thanh Thủy", "Level": "Xã" },
          { "Id": "19264", "Name": "Xã An Thủy", "Level": "Xã" },
          { "Id": "19267", "Name": "Xã Phong Thủy", "Level": "Xã" },
          { "Id": "19270", "Name": "Xã Cam Thủy", "Level": "Xã" },
          { "Id": "19273", "Name": "Xã Ngân Thủy", "Level": "Xã" },
          { "Id": "19276", "Name": "Xã Sơn Thủy", "Level": "Xã" },
          { "Id": "19279", "Name": "Xã Lộc Thủy", "Level": "Xã" },
          { "Id": "19285", "Name": "Xã Liên Thủy", "Level": "Xã" },
          { "Id": "19288", "Name": "Xã Hưng Thủy", "Level": "Xã" },
          { "Id": "19291", "Name": "Xã Dương Thủy", "Level": "Xã" },
          { "Id": "19294", "Name": "Xã Tân Thủy", "Level": "Xã" },
          { "Id": "19297", "Name": "Xã Phú Thủy", "Level": "Xã" },
          { "Id": "19300", "Name": "Xã Xuân Thủy", "Level": "Xã" },
          { "Id": "19303", "Name": "Xã Mỹ Thủy", "Level": "Xã" },
          { "Id": "19306", "Name": "Xã Ngư Thủy ", "Level": "Xã" },
          { "Id": "19309", "Name": "Xã Mai Thủy", "Level": "Xã" },
          { "Id": "19312", "Name": "Xã Sen Thủy", "Level": "Xã" },
          { "Id": "19315", "Name": "Xã Thái Thủy", "Level": "Xã" },
          { "Id": "19318", "Name": "Xã Kim Thủy", "Level": "Xã" },
          { "Id": "19321", "Name": "Xã Trường Thủy", "Level": "Xã" },
          { "Id": "19327", "Name": "Xã Lâm Thủy", "Level": "Xã" }
        ]
      },
      {
        "Id": "458",
        "Name": "Thị xã Ba Đồn",
        "Wards": [
          { "Id": "19009", "Name": "Phường Ba Đồn", "Level": "Phường" },
          { "Id": "19060", "Name": "Phường Quảng Long", "Level": "Phường" },
          { "Id": "19066", "Name": "Phường Quảng Thọ", "Level": "Phường" },
          { "Id": "19069", "Name": "Xã Quảng Tiên", "Level": "Xã" },
          { "Id": "19075", "Name": "Xã Quảng Trung", "Level": "Xã" },
          { "Id": "19078", "Name": "Phường Quảng Phong", "Level": "Phường" },
          { "Id": "19081", "Name": "Phường Quảng Thuận", "Level": "Phường" },
          { "Id": "19084", "Name": "Xã Quảng Tân", "Level": "Xã" },
          { "Id": "19087", "Name": "Xã Quảng Hải", "Level": "Xã" },
          { "Id": "19090", "Name": "Xã Quảng Sơn", "Level": "Xã" },
          { "Id": "19093", "Name": "Xã Quảng Lộc", "Level": "Xã" },
          { "Id": "19096", "Name": "Xã Quảng Thủy", "Level": "Xã" },
          { "Id": "19099", "Name": "Xã Quảng Văn", "Level": "Xã" },
          { "Id": "19102", "Name": "Phường Quảng Phúc", "Level": "Phường" },
          { "Id": "19105", "Name": "Xã Quảng Hòa", "Level": "Xã" },
          { "Id": "19108", "Name": "Xã Quảng Minh", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "45",
    "Name": "Tỉnh Quảng Trị",
    "Districts": [
      {
        "Id": "461",
        "Name": "Thành phố Đông Hà",
        "Wards": [
          { "Id": "19330", "Name": "Phường Đông Giang", "Level": "Phường" },
          { "Id": "19333", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "19336", "Name": "Phường Đông Lễ", "Level": "Phường" },
          { "Id": "19339", "Name": "Phường Đông Thanh", "Level": "Phường" },
          { "Id": "19342", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "19345", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "19348", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "19351", "Name": "Phường Đông Lương", "Level": "Phường" },
          { "Id": "19354", "Name": "Phường 3", "Level": "Phường" }
        ]
      },
      {
        "Id": "462",
        "Name": "Thị xã Quảng Trị",
        "Wards": [
          { "Id": "19357", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "19358", "Name": "Phường An Đôn", "Level": "Phường" },
          { "Id": "19360", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "19361", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "19705", "Name": "Xã Hải Lệ", "Level": "Xã" }
        ]
      },
      {
        "Id": "464",
        "Name": "Huyện Vĩnh Linh",
        "Wards": [
          { "Id": "19363", "Name": "Thị trấn Hồ Xá", "Level": "Thị trấn" },
          { "Id": "19366", "Name": "Thị trấn Bến Quan", "Level": "Thị trấn" },
          { "Id": "19369", "Name": "Xã Vĩnh Thái", "Level": "Xã" },
          { "Id": "19372", "Name": "Xã Vĩnh Tú", "Level": "Xã" },
          { "Id": "19375", "Name": "Xã Vĩnh Chấp", "Level": "Xã" },
          { "Id": "19378", "Name": "Xã Trung Nam", "Level": "Xã" },
          { "Id": "19384", "Name": "Xã Kim Thạch", "Level": "Xã" },
          { "Id": "19387", "Name": "Xã Vĩnh Long", "Level": "Xã" },
          { "Id": "19393", "Name": "Xã Vĩnh Khê", "Level": "Xã" },
          { "Id": "19396", "Name": "Xã Vĩnh Hòa", "Level": "Xã" },
          { "Id": "19402", "Name": "Xã Vĩnh Thủy", "Level": "Xã" },
          { "Id": "19405", "Name": "Xã Vĩnh Lâm", "Level": "Xã" },
          { "Id": "19408", "Name": "Xã Hiền Thành", "Level": "Xã" },
          { "Id": "19414", "Name": "Thị trấn Cửa Tùng", "Level": "Thị trấn" },
          { "Id": "19417", "Name": "Xã Vĩnh Hà", "Level": "Xã" },
          { "Id": "19420", "Name": "Xã Vĩnh Sơn", "Level": "Xã" },
          { "Id": "19423", "Name": "Xã Vĩnh Giang", "Level": "Xã" },
          { "Id": "19426", "Name": "Xã Vĩnh Ô", "Level": "Xã" }
        ]
      },
      {
        "Id": "465",
        "Name": "Huyện Hướng Hóa",
        "Wards": [
          { "Id": "19429", "Name": "Thị trấn Khe Sanh", "Level": "Thị trấn" },
          { "Id": "19432", "Name": "Thị trấn Lao Bảo", "Level": "Thị trấn" },
          { "Id": "19435", "Name": "Xã Hướng Lập", "Level": "Xã" },
          { "Id": "19438", "Name": "Xã Hướng Việt", "Level": "Xã" },
          { "Id": "19441", "Name": "Xã Hướng Phùng", "Level": "Xã" },
          { "Id": "19444", "Name": "Xã Hướng Sơn", "Level": "Xã" },
          { "Id": "19447", "Name": "Xã Hướng Linh", "Level": "Xã" },
          { "Id": "19450", "Name": "Xã Tân Hợp", "Level": "Xã" },
          { "Id": "19453", "Name": "Xã Hướng Tân", "Level": "Xã" },
          { "Id": "19456", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "19459", "Name": "Xã Tân Long", "Level": "Xã" },
          { "Id": "19462", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "19465", "Name": "Xã Tân Liên", "Level": "Xã" },
          { "Id": "19468", "Name": "Xã Húc", "Level": "Xã" },
          { "Id": "19471", "Name": "Xã Thuận", "Level": "Xã" },
          { "Id": "19474", "Name": "Xã Hướng Lộc", "Level": "Xã" },
          { "Id": "19477", "Name": "Xã Ba Tầng", "Level": "Xã" },
          { "Id": "19480", "Name": "Xã Thanh", "Level": "Xã" },
          { "Id": "19483", "Name": "Xã  A Dơi", "Level": "Xã" },
          { "Id": "19489", "Name": "Xã Lìa", "Level": "Xã" },
          { "Id": "19492", "Name": "Xã Xy", "Level": "Xã" }
        ]
      },
      {
        "Id": "466",
        "Name": "Huyện Gio Linh",
        "Wards": [
          { "Id": "19495", "Name": "Thị trấn Gio Linh", "Level": "Thị trấn" },
          { "Id": "19496", "Name": "Thị trấn Cửa Việt", "Level": "Thị trấn" },
          { "Id": "19498", "Name": "Xã Trung Giang", "Level": "Xã" },
          { "Id": "19501", "Name": "Xã Trung Hải", "Level": "Xã" },
          { "Id": "19504", "Name": "Xã Trung Sơn", "Level": "Xã" },
          { "Id": "19507", "Name": "Xã Phong Bình", "Level": "Xã" },
          { "Id": "19510", "Name": "Xã Gio Mỹ", "Level": "Xã" },
          { "Id": "19519", "Name": "Xã Gio Hải", "Level": "Xã" },
          { "Id": "19522", "Name": "Xã Gio An", "Level": "Xã" },
          { "Id": "19525", "Name": "Xã Gio Châu", "Level": "Xã" },
          { "Id": "19531", "Name": "Xã Gio Việt", "Level": "Xã" },
          { "Id": "19534", "Name": "Xã Linh Trường", "Level": "Xã" },
          { "Id": "19537", "Name": "Xã Gio Sơn", "Level": "Xã" },
          { "Id": "19543", "Name": "Xã Gio Mai", "Level": "Xã" },
          { "Id": "19546", "Name": "Xã Hải Thái", "Level": "Xã" },
          { "Id": "19549", "Name": "Xã Linh Hải", "Level": "Xã" },
          { "Id": "19552", "Name": "Xã Gio Quang", "Level": "Xã" }
        ]
      },
      {
        "Id": "467",
        "Name": "Huyện Đa Krông",
        "Wards": [
          {
            "Id": "19555",
            "Name": "Thị trấn Krông Klang",
            "Level": "Thị trấn"
          },
          { "Id": "19558", "Name": "Xã Mò Ó", "Level": "Xã" },
          { "Id": "19561", "Name": "Xã Hướng Hiệp", "Level": "Xã" },
          { "Id": "19564", "Name": "Xã Đa Krông", "Level": "Xã" },
          { "Id": "19567", "Name": "Xã Triệu Nguyên", "Level": "Xã" },
          { "Id": "19570", "Name": "Xã Ba Lòng", "Level": "Xã" },
          { "Id": "19576", "Name": "Xã Ba Nang", "Level": "Xã" },
          { "Id": "19579", "Name": "Xã Tà Long", "Level": "Xã" },
          { "Id": "19582", "Name": "Xã Húc Nghì", "Level": "Xã" },
          { "Id": "19585", "Name": "Xã A Vao", "Level": "Xã" },
          { "Id": "19588", "Name": "Xã Tà Rụt", "Level": "Xã" },
          { "Id": "19591", "Name": "Xã A Bung", "Level": "Xã" },
          { "Id": "19594", "Name": "Xã A Ngo", "Level": "Xã" }
        ]
      },
      {
        "Id": "468",
        "Name": "Huyện Cam Lộ",
        "Wards": [
          { "Id": "19597", "Name": "Thị trấn Cam Lộ", "Level": "Thị trấn" },
          { "Id": "19600", "Name": "Xã Cam Tuyền", "Level": "Xã" },
          { "Id": "19603", "Name": "Xã Thanh An", "Level": "Xã" },
          { "Id": "19606", "Name": "Xã Cam Thủy", "Level": "Xã" },
          { "Id": "19612", "Name": "Xã Cam Thành", "Level": "Xã" },
          { "Id": "19615", "Name": "Xã Cam Hiếu", "Level": "Xã" },
          { "Id": "19618", "Name": "Xã Cam Chính", "Level": "Xã" },
          { "Id": "19621", "Name": "Xã Cam Nghĩa", "Level": "Xã" }
        ]
      },
      {
        "Id": "469",
        "Name": "Huyện Triệu Phong",
        "Wards": [
          { "Id": "19624", "Name": "Thị Trấn Ái Tử", "Level": "Thị trấn" },
          { "Id": "19627", "Name": "Xã Triệu An", "Level": "Xã" },
          { "Id": "19630", "Name": "Xã Triệu Vân", "Level": "Xã" },
          { "Id": "19633", "Name": "Xã Triệu Phước", "Level": "Xã" },
          { "Id": "19636", "Name": "Xã Triệu Độ", "Level": "Xã" },
          { "Id": "19639", "Name": "Xã Triệu Trạch", "Level": "Xã" },
          { "Id": "19642", "Name": "Xã Triệu Thuận", "Level": "Xã" },
          { "Id": "19645", "Name": "Xã Triệu Đại", "Level": "Xã" },
          { "Id": "19648", "Name": "Xã Triệu Hòa", "Level": "Xã" },
          { "Id": "19651", "Name": "Xã Triệu Lăng", "Level": "Xã" },
          { "Id": "19654", "Name": "Xã Triệu Sơn", "Level": "Xã" },
          { "Id": "19657", "Name": "Xã Triệu Long", "Level": "Xã" },
          { "Id": "19660", "Name": "Xã Triệu Tài", "Level": "Xã" },
          { "Id": "19666", "Name": "Xã Triệu Trung", "Level": "Xã" },
          { "Id": "19669", "Name": "Xã Triệu Ái", "Level": "Xã" },
          { "Id": "19672", "Name": "Xã Triệu Thượng", "Level": "Xã" },
          { "Id": "19675", "Name": "Xã Triệu Giang", "Level": "Xã" },
          { "Id": "19678", "Name": "Xã Triệu Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "470",
        "Name": "Huyện Hải Lăng",
        "Wards": [
          { "Id": "19681", "Name": "Thị trấn Diên Sanh", "Level": "Thị trấn" },
          { "Id": "19684", "Name": "Xã Hải An", "Level": "Xã" },
          { "Id": "19687", "Name": "Xã Hải Ba", "Level": "Xã" },
          { "Id": "19693", "Name": "Xã Hải Quy", "Level": "Xã" },
          { "Id": "19696", "Name": "Xã Hải Quế", "Level": "Xã" },
          { "Id": "19699", "Name": "Xã Hải Hưng", "Level": "Xã" },
          { "Id": "19702", "Name": "Xã Hải Phú", "Level": "Xã" },
          { "Id": "19708", "Name": "Xã Hải Thượng", "Level": "Xã" },
          { "Id": "19711", "Name": "Xã Hải Dương", "Level": "Xã" },
          { "Id": "19714", "Name": "Xã Hải Định", "Level": "Xã" },
          { "Id": "19717", "Name": "Xã Hải Lâm", "Level": "Xã" },
          { "Id": "19726", "Name": "Xã Hải Phong", "Level": "Xã" },
          { "Id": "19729", "Name": "Xã Hải Trường", "Level": "Xã" },
          { "Id": "19735", "Name": "Xã Hải Sơn", "Level": "Xã" },
          { "Id": "19738", "Name": "Xã Hải Chánh", "Level": "Xã" },
          { "Id": "19741", "Name": "Xã Hải Khê", "Level": "Xã" }
        ]
      },
      { "Id": "471", "Name": "Huyện Cồn Cỏ", "Wards": [{ "Level": "Huyện" }] }
    ]
  },
  {
    "Id": "46",
    "Name": "Tỉnh Thừa Thiên Huế",
    "Districts": [
      {
        "Id": "474",
        "Name": "Thành phố Huế",
        "Wards": [
          { "Id": "19744", "Name": "Phường Phú Thuận", "Level": "Phường" },
          { "Id": "19747", "Name": "Phường Phú Bình", "Level": "Phường" },
          { "Id": "19750", "Name": "Phường Tây Lộc", "Level": "Phường" },
          { "Id": "19753", "Name": "Phường Thuận Lộc", "Level": "Phường" },
          { "Id": "19756", "Name": "Phường Phú Hiệp", "Level": "Phường" },
          { "Id": "19759", "Name": "Phường Phú Hậu", "Level": "Phường" },
          { "Id": "19762", "Name": "Phường Thuận Hòa", "Level": "Phường" },
          { "Id": "19765", "Name": "Phường Thuận Thành", "Level": "Phường" },
          { "Id": "19768", "Name": "Phường Phú Hòa", "Level": "Phường" },
          { "Id": "19771", "Name": "Phường Phú Cát", "Level": "Phường" },
          { "Id": "19774", "Name": "Phường Kim Long", "Level": "Phường" },
          { "Id": "19777", "Name": "Phường Vĩ Dạ", "Level": "Phường" },
          { "Id": "19780", "Name": "Phường Phường Đúc", "Level": "Phường" },
          { "Id": "19783", "Name": "Phường Vĩnh Ninh", "Level": "Phường" },
          { "Id": "19786", "Name": "Phường Phú Hội", "Level": "Phường" },
          { "Id": "19789", "Name": "Phường Phú Nhuận", "Level": "Phường" },
          { "Id": "19792", "Name": "Phường Xuân Phú", "Level": "Phường" },
          { "Id": "19795", "Name": "Phường Trường An", "Level": "Phường" },
          { "Id": "19798", "Name": "Phường Phước Vĩnh", "Level": "Phường" },
          { "Id": "19801", "Name": "Phường An Cựu", "Level": "Phường" },
          { "Id": "19803", "Name": "Phường An Hòa", "Level": "Phường" },
          { "Id": "19804", "Name": "Phường Hương Sơ", "Level": "Phường" },
          { "Id": "19807", "Name": "Phường Thuỷ Biều", "Level": "Phường" },
          { "Id": "19810", "Name": "Phường Hương Long", "Level": "Phường" },
          { "Id": "19813", "Name": "Phường Thuỷ Xuân", "Level": "Phường" },
          { "Id": "19815", "Name": "Phường An Đông", "Level": "Phường" },
          { "Id": "19816", "Name": "Phường An Tây", "Level": "Phường" }
        ]
      },
      {
        "Id": "476",
        "Name": "Huyện Phong Điền",
        "Wards": [
          { "Id": "19819", "Name": "Thị trấn Phong Điền", "Level": "Thị trấn" },
          { "Id": "19822", "Name": "Xã Điền Hương", "Level": "Xã" },
          { "Id": "19825", "Name": "Xã Điền Môn", "Level": "Xã" },
          { "Id": "19828", "Name": "Xã Điền Lộc", "Level": "Xã" },
          { "Id": "19831", "Name": "Xã Phong Bình", "Level": "Xã" },
          { "Id": "19834", "Name": "Xã Điền Hòa", "Level": "Xã" },
          { "Id": "19837", "Name": "Xã Phong Chương", "Level": "Xã" },
          { "Id": "19840", "Name": "Xã Phong Hải", "Level": "Xã" },
          { "Id": "19843", "Name": "Xã Điền Hải", "Level": "Xã" },
          { "Id": "19846", "Name": "Xã Phong Hòa", "Level": "Xã" },
          { "Id": "19849", "Name": "Xã Phong Thu", "Level": "Xã" },
          { "Id": "19852", "Name": "Xã Phong Hiền", "Level": "Xã" },
          { "Id": "19855", "Name": "Xã Phong Mỹ", "Level": "Xã" },
          { "Id": "19858", "Name": "Xã Phong An", "Level": "Xã" },
          { "Id": "19861", "Name": "Xã Phong Xuân", "Level": "Xã" },
          { "Id": "19864", "Name": "Xã Phong Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "477",
        "Name": "Huyện Quảng Điền",
        "Wards": [
          { "Id": "19867", "Name": "Thị trấn Sịa", "Level": "Thị trấn" },
          { "Id": "19870", "Name": "Xã Quảng Thái", "Level": "Xã" },
          { "Id": "19873", "Name": "Xã Quảng Ngạn", "Level": "Xã" },
          { "Id": "19876", "Name": "Xã Quảng Lợi", "Level": "Xã" },
          { "Id": "19879", "Name": "Xã Quảng Công", "Level": "Xã" },
          { "Id": "19882", "Name": "Xã Quảng Phước", "Level": "Xã" },
          { "Id": "19885", "Name": "Xã Quảng Vinh", "Level": "Xã" },
          { "Id": "19888", "Name": "Xã Quảng An", "Level": "Xã" },
          { "Id": "19891", "Name": "Xã Quảng Thành", "Level": "Xã" },
          { "Id": "19894", "Name": "Xã Quảng Thọ", "Level": "Xã" },
          { "Id": "19897", "Name": "Xã Quảng Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "478",
        "Name": "Huyện Phú Vang",
        "Wards": [
          { "Id": "19900", "Name": "Thị trấn Thuận An", "Level": "Thị trấn" },
          { "Id": "19903", "Name": "Xã Phú Thuận", "Level": "Xã" },
          { "Id": "19906", "Name": "Xã Phú Dương", "Level": "Xã" },
          { "Id": "19909", "Name": "Xã Phú Mậu", "Level": "Xã" },
          { "Id": "19912", "Name": "Xã Phú An", "Level": "Xã" },
          { "Id": "19915", "Name": "Xã Phú Hải", "Level": "Xã" },
          { "Id": "19918", "Name": "Xã Phú Xuân", "Level": "Xã" },
          { "Id": "19921", "Name": "Xã Phú Diên", "Level": "Xã" },
          { "Id": "19924", "Name": "Xã Phú Thanh", "Level": "Xã" },
          { "Id": "19927", "Name": "Xã Phú Mỹ", "Level": "Xã" },
          { "Id": "19930", "Name": "Xã Phú Thượng", "Level": "Xã" },
          { "Id": "19933", "Name": "Xã Phú Hồ", "Level": "Xã" },
          { "Id": "19936", "Name": "Xã Vinh Xuân", "Level": "Xã" },
          { "Id": "19939", "Name": "Xã Phú Lương", "Level": "Xã" },
          { "Id": "19942", "Name": "Thị trấn Phú Đa", "Level": "Thị trấn" },
          { "Id": "19945", "Name": "Xã Vinh Thanh", "Level": "Xã" },
          { "Id": "19948", "Name": "Xã Vinh An", "Level": "Xã" },
          { "Id": "19954", "Name": "Xã Phú Gia", "Level": "Xã" },
          { "Id": "19957", "Name": "Xã Vinh Hà", "Level": "Xã" }
        ]
      },
      {
        "Id": "479",
        "Name": "Thị xã Hương Thủy",
        "Wards": [
          { "Id": "19960", "Name": "Phường Phú Bài", "Level": "Phường" },
          { "Id": "19963", "Name": "Xã Thủy Vân", "Level": "Xã" },
          { "Id": "19966", "Name": "Xã Thủy Thanh", "Level": "Xã" },
          { "Id": "19969", "Name": "Phường Thủy Dương", "Level": "Phường" },
          { "Id": "19972", "Name": "Phường Thủy Phương", "Level": "Phường" },
          { "Id": "19975", "Name": "Phường Thủy Châu", "Level": "Phường" },
          { "Id": "19978", "Name": "Phường Thủy Lương", "Level": "Phường" },
          { "Id": "19981", "Name": "Xã Thủy Bằng", "Level": "Xã" },
          { "Id": "19984", "Name": "Xã Thủy Tân", "Level": "Xã" },
          { "Id": "19987", "Name": "Xã Thủy Phù", "Level": "Xã" },
          { "Id": "19990", "Name": "Xã Phú Sơn", "Level": "Xã" },
          { "Id": "19993", "Name": "Xã Dương Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "480",
        "Name": "Thị xã Hương Trà",
        "Wards": [
          { "Id": "19996", "Name": "Phường Tứ Hạ", "Level": "Phường" },
          { "Id": "19999", "Name": "Xã Hải Dương", "Level": "Xã" },
          { "Id": "20002", "Name": "Xã Hương Phong", "Level": "Xã" },
          { "Id": "20005", "Name": "Xã Hương Toàn", "Level": "Xã" },
          { "Id": "20008", "Name": "Phường Hương Vân", "Level": "Phường" },
          { "Id": "20011", "Name": "Phường Hương Văn", "Level": "Phường" },
          { "Id": "20014", "Name": "Xã Hương Vinh", "Level": "Xã" },
          { "Id": "20017", "Name": "Phường Hương Xuân", "Level": "Phường" },
          { "Id": "20020", "Name": "Phường Hương Chữ", "Level": "Phường" },
          { "Id": "20023", "Name": "Phường Hương An", "Level": "Phường" },
          { "Id": "20026", "Name": "Xã Hương Bình", "Level": "Xã" },
          { "Id": "20029", "Name": "Phường Hương Hồ", "Level": "Phường" },
          { "Id": "20032", "Name": "Xã Hương Thọ", "Level": "Xã" },
          { "Id": "20035", "Name": "Xã Bình Tiến", "Level": "Xã" },
          { "Id": "20041", "Name": "Xã Bình Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "481",
        "Name": "Huyện A Lưới",
        "Wards": [
          { "Id": "20044", "Name": "Thị trấn A Lưới", "Level": "Thị trấn" },
          { "Id": "20047", "Name": "Xã Hồng Vân", "Level": "Xã" },
          { "Id": "20050", "Name": "Xã Hồng Hạ", "Level": "Xã" },
          { "Id": "20053", "Name": "Xã Hồng Kim", "Level": "Xã" },
          { "Id": "20056", "Name": "Xã Trung Sơn", "Level": "Xã" },
          { "Id": "20059", "Name": "Xã Hương Nguyên", "Level": "Xã" },
          { "Id": "20065", "Name": "Xã Hồng Bắc", "Level": "Xã" },
          { "Id": "20068", "Name": "Xã A Ngo", "Level": "Xã" },
          { "Id": "20071", "Name": "Xã Sơn Thủy", "Level": "Xã" },
          { "Id": "20074", "Name": "Xã Phú Vinh", "Level": "Xã" },
          { "Id": "20080", "Name": "Xã Hương Phong", "Level": "Xã" },
          { "Id": "20083", "Name": "Xã Quảng Nhâm", "Level": "Xã" },
          { "Id": "20086", "Name": "Xã Hồng Thượng", "Level": "Xã" },
          { "Id": "20089", "Name": "Xã Hồng Thái", "Level": "Xã" },
          { "Id": "20095", "Name": "Xã A Roằng", "Level": "Xã" },
          { "Id": "20098", "Name": "Xã Đông Sơn", "Level": "Xã" },
          { "Id": "20101", "Name": "Xã Lâm Đớt", "Level": "Xã" },
          { "Id": "20104", "Name": "Xã Hồng Thủy", "Level": "Xã" }
        ]
      },
      {
        "Id": "482",
        "Name": "Huyện Phú Lộc",
        "Wards": [
          { "Id": "20107", "Name": "Thị trấn Phú Lộc", "Level": "Thị trấn" },
          { "Id": "20110", "Name": "Thị trấn Lăng Cô", "Level": "Thị trấn" },
          { "Id": "20113", "Name": "Xã Vinh Mỹ", "Level": "Xã" },
          { "Id": "20116", "Name": "Xã Vinh Hưng", "Level": "Xã" },
          { "Id": "20122", "Name": "Xã Giang Hải", "Level": "Xã" },
          { "Id": "20125", "Name": "Xã Vinh Hiền", "Level": "Xã" },
          { "Id": "20128", "Name": "Xã Lộc Bổn", "Level": "Xã" },
          { "Id": "20131", "Name": "Xã Lộc Sơn", "Level": "Xã" },
          { "Id": "20134", "Name": "Xã Lộc Bình", "Level": "Xã" },
          { "Id": "20137", "Name": "Xã Lộc Vĩnh", "Level": "Xã" },
          { "Id": "20140", "Name": "Xã Lộc An", "Level": "Xã" },
          { "Id": "20143", "Name": "Xã Lộc Điền", "Level": "Xã" },
          { "Id": "20146", "Name": "Xã Lộc Thủy", "Level": "Xã" },
          { "Id": "20149", "Name": "Xã Lộc Trì", "Level": "Xã" },
          { "Id": "20152", "Name": "Xã Lộc Tiến", "Level": "Xã" },
          { "Id": "20155", "Name": "Xã Lộc Hòa", "Level": "Xã" },
          { "Id": "20158", "Name": "Xã Xuân Lộc", "Level": "Xã" }
        ]
      },
      {
        "Id": "483",
        "Name": "Huyện Nam Đông",
        "Wards": [
          { "Id": "20161", "Name": "Thị trấn Khe Tre", "Level": "Thị trấn" },
          { "Id": "20164", "Name": "Xã Hương Phú", "Level": "Xã" },
          { "Id": "20167", "Name": "Xã Hương Sơn", "Level": "Xã" },
          { "Id": "20170", "Name": "Xã Hương Lộc", "Level": "Xã" },
          { "Id": "20173", "Name": "Xã Thượng Quảng", "Level": "Xã" },
          { "Id": "20179", "Name": "Xã Hương Xuân", "Level": "Xã" },
          { "Id": "20182", "Name": "Xã Hương Hữu", "Level": "Xã" },
          { "Id": "20185", "Name": "Xã Thượng Lộ", "Level": "Xã" },
          { "Id": "20188", "Name": "Xã Thượng Long", "Level": "Xã" },
          { "Id": "20191", "Name": "Xã Thượng Nhật", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "48",
    "Name": "Thành phố Đà Nẵng",
    "Districts": [
      {
        "Id": "490",
        "Name": "Quận Liên Chiểu",
        "Wards": [
          { "Id": "20194", "Name": "Phường Hòa Hiệp Bắc", "Level": "Phường" },
          { "Id": "20195", "Name": "Phường Hòa Hiệp Nam", "Level": "Phường" },
          { "Id": "20197", "Name": "Phường Hòa Khánh Bắc", "Level": "Phường" },
          { "Id": "20198", "Name": "Phường Hòa Khánh Nam", "Level": "Phường" },
          { "Id": "20200", "Name": "Phường Hòa Minh", "Level": "Phường" }
        ]
      },
      {
        "Id": "491",
        "Name": "Quận Thanh Khê",
        "Wards": [
          { "Id": "20203", "Name": "Phường Tam Thuận", "Level": "Phường" },
          { "Id": "20206", "Name": "Phường Thanh Khê Tây", "Level": "Phường" },
          { "Id": "20207", "Name": "Phường Thanh Khê Đông", "Level": "Phường" },
          { "Id": "20209", "Name": "Phường Xuân Hà", "Level": "Phường" },
          { "Id": "20212", "Name": "Phường Tân Chính", "Level": "Phường" },
          { "Id": "20215", "Name": "Phường Chính Gián", "Level": "Phường" },
          { "Id": "20218", "Name": "Phường Vĩnh Trung", "Level": "Phường" },
          { "Id": "20221", "Name": "Phường Thạc Gián", "Level": "Phường" },
          { "Id": "20224", "Name": "Phường An Khê", "Level": "Phường" },
          { "Id": "20225", "Name": "Phường Hòa Khê", "Level": "Phường" }
        ]
      },
      {
        "Id": "492",
        "Name": "Quận Hải Châu",
        "Wards": [
          { "Id": "20227", "Name": "Phường Thanh Bình", "Level": "Phường" },
          { "Id": "20230", "Name": "Phường Thuận Phước", "Level": "Phường" },
          { "Id": "20233", "Name": "Phường Thạch Thang", "Level": "Phường" },
          { "Id": "20236", "Name": "Phường Hải Châu  I", "Level": "Phường" },
          { "Id": "20239", "Name": "Phường Hải Châu II", "Level": "Phường" },
          { "Id": "20242", "Name": "Phường Phước Ninh", "Level": "Phường" },
          { "Id": "20245", "Name": "Phường Hòa Thuận Tây", "Level": "Phường" },
          { "Id": "20246", "Name": "Phường Hòa Thuận Đông", "Level": "Phường" },
          { "Id": "20248", "Name": "Phường Nam Dương", "Level": "Phường" },
          { "Id": "20251", "Name": "Phường Bình Hiên", "Level": "Phường" },
          { "Id": "20254", "Name": "Phường Bình Thuận", "Level": "Phường" },
          { "Id": "20257", "Name": "Phường Hòa Cường Bắc", "Level": "Phường" },
          { "Id": "20258", "Name": "Phường Hòa Cường Nam", "Level": "Phường" }
        ]
      },
      {
        "Id": "493",
        "Name": "Quận Sơn Trà",
        "Wards": [
          { "Id": "20263", "Name": "Phường Thọ Quang", "Level": "Phường" },
          { "Id": "20266", "Name": "Phường Nại Hiên Đông", "Level": "Phường" },
          { "Id": "20269", "Name": "Phường Mân Thái", "Level": "Phường" },
          { "Id": "20272", "Name": "Phường An Hải Bắc", "Level": "Phường" },
          { "Id": "20275", "Name": "Phường Phước Mỹ", "Level": "Phường" },
          { "Id": "20278", "Name": "Phường An Hải Tây", "Level": "Phường" },
          { "Id": "20281", "Name": "Phường An Hải Đông", "Level": "Phường" }
        ]
      },
      {
        "Id": "494",
        "Name": "Quận Ngũ Hành Sơn",
        "Wards": [
          { "Id": "20284", "Name": "Phường Mỹ An", "Level": "Phường" },
          { "Id": "20285", "Name": "Phường Khuê Mỹ", "Level": "Phường" },
          { "Id": "20287", "Name": "Phường Hoà Quý", "Level": "Phường" },
          { "Id": "20290", "Name": "Phường Hoà Hải", "Level": "Phường" }
        ]
      },
      {
        "Id": "495",
        "Name": "Quận Cẩm Lệ",
        "Wards": [
          { "Id": "20260", "Name": "Phường Khuê Trung", "Level": "Phường" },
          { "Id": "20305", "Name": "Phường Hòa Phát", "Level": "Phường" },
          { "Id": "20306", "Name": "Phường Hòa An", "Level": "Phường" },
          { "Id": "20311", "Name": "Phường Hòa Thọ Tây", "Level": "Phường" },
          { "Id": "20312", "Name": "Phường Hòa Thọ Đông", "Level": "Phường" },
          { "Id": "20314", "Name": "Phường Hòa Xuân", "Level": "Phường" }
        ]
      },
      {
        "Id": "497",
        "Name": "Huyện Hòa Vang",
        "Wards": [
          { "Id": "20293", "Name": "Xã Hòa Bắc", "Level": "Xã" },
          { "Id": "20296", "Name": "Xã Hòa Liên", "Level": "Xã" },
          { "Id": "20299", "Name": "Xã Hòa Ninh", "Level": "Xã" },
          { "Id": "20302", "Name": "Xã Hòa Sơn", "Level": "Xã" },
          { "Id": "20308", "Name": "Xã Hòa Nhơn", "Level": "Xã" },
          { "Id": "20317", "Name": "Xã Hòa Phú", "Level": "Xã" },
          { "Id": "20320", "Name": "Xã Hòa Phong", "Level": "Xã" },
          { "Id": "20323", "Name": "Xã Hòa Châu", "Level": "Xã" },
          { "Id": "20326", "Name": "Xã Hòa Tiến", "Level": "Xã" },
          { "Id": "20329", "Name": "Xã Hòa Phước", "Level": "Xã" },
          { "Id": "20332", "Name": "Xã Hòa Khương", "Level": "Xã" }
        ]
      },
      { "Id": "498", "Name": "Huyện Hoàng Sa", "Wards": [{ "Level": "Huyện" }] }
    ]
  },
  {
    "Id": "49",
    "Name": "Tỉnh Quảng Nam",
    "Districts": [
      {
        "Id": "502",
        "Name": "Thành phố Tam Kỳ",
        "Wards": [
          { "Id": "20335", "Name": "Phường Tân Thạnh", "Level": "Phường" },
          { "Id": "20338", "Name": "Phường Phước Hòa", "Level": "Phường" },
          { "Id": "20341", "Name": "Phường An Mỹ", "Level": "Phường" },
          { "Id": "20344", "Name": "Phường Hòa Hương", "Level": "Phường" },
          { "Id": "20347", "Name": "Phường An Xuân", "Level": "Phường" },
          { "Id": "20350", "Name": "Phường An Sơn", "Level": "Phường" },
          { "Id": "20353", "Name": "Phường Trường Xuân", "Level": "Phường" },
          { "Id": "20356", "Name": "Phường An Phú", "Level": "Phường" },
          { "Id": "20359", "Name": "Xã Tam Thanh", "Level": "Xã" },
          { "Id": "20362", "Name": "Xã Tam Thăng", "Level": "Xã" },
          { "Id": "20371", "Name": "Xã Tam Phú", "Level": "Xã" },
          { "Id": "20375", "Name": "Phường Hoà Thuận", "Level": "Phường" },
          { "Id": "20389", "Name": "Xã Tam Ngọc", "Level": "Xã" }
        ]
      },
      {
        "Id": "503",
        "Name": "Thành phố Hội An",
        "Wards": [
          { "Id": "20398", "Name": "Phường Minh An", "Level": "Phường" },
          { "Id": "20401", "Name": "Phường Tân An", "Level": "Phường" },
          { "Id": "20404", "Name": "Phường Cẩm Phô", "Level": "Phường" },
          { "Id": "20407", "Name": "Phường Thanh Hà", "Level": "Phường" },
          { "Id": "20410", "Name": "Phường Sơn Phong", "Level": "Phường" },
          { "Id": "20413", "Name": "Phường Cẩm Châu", "Level": "Phường" },
          { "Id": "20416", "Name": "Phường Cửa Đại", "Level": "Phường" },
          { "Id": "20419", "Name": "Phường Cẩm An", "Level": "Phường" },
          { "Id": "20422", "Name": "Xã Cẩm Hà", "Level": "Xã" },
          { "Id": "20425", "Name": "Xã Cẩm Kim", "Level": "Xã" },
          { "Id": "20428", "Name": "Phường Cẩm Nam", "Level": "Phường" },
          { "Id": "20431", "Name": "Xã Cẩm Thanh", "Level": "Xã" },
          { "Id": "20434", "Name": "Xã Tân Hiệp", "Level": "Xã" }
        ]
      },
      {
        "Id": "504",
        "Name": "Huyện Tây Giang",
        "Wards": [
          { "Id": "20437", "Name": "Xã Ch'ơm", "Level": "Xã" },
          { "Id": "20440", "Name": "Xã Ga Ri", "Level": "Xã" },
          { "Id": "20443", "Name": "Xã A Xan", "Level": "Xã" },
          { "Id": "20446", "Name": "Xã Tr'Hy", "Level": "Xã" },
          { "Id": "20449", "Name": "Xã Lăng", "Level": "Xã" },
          { "Id": "20452", "Name": "Xã A Nông", "Level": "Xã" },
          { "Id": "20455", "Name": "Xã A Tiêng", "Level": "Xã" },
          { "Id": "20458", "Name": "Xã Bha Lê", "Level": "Xã" },
          { "Id": "20461", "Name": "Xã A Vương", "Level": "Xã" },
          { "Id": "20464", "Name": "Xã Dang", "Level": "Xã" }
        ]
      },
      {
        "Id": "505",
        "Name": "Huyện Đông Giang",
        "Wards": [
          { "Id": "20467", "Name": "Thị trấn P Rao", "Level": "Thị trấn" },
          { "Id": "20470", "Name": "Xã Tà Lu", "Level": "Xã" },
          { "Id": "20473", "Name": "Xã Sông Kôn", "Level": "Xã" },
          { "Id": "20476", "Name": "Xã Jơ Ngây", "Level": "Xã" },
          { "Id": "20479", "Name": "Xã A Ting", "Level": "Xã" },
          { "Id": "20482", "Name": "Xã  Tư", "Level": "Xã" },
          { "Id": "20485", "Name": "Xã Ba", "Level": "Xã" },
          { "Id": "20488", "Name": "Xã A Rooi", "Level": "Xã" },
          { "Id": "20491", "Name": "Xã Za Hung", "Level": "Xã" },
          { "Id": "20494", "Name": "Xã Mà Cooi", "Level": "Xã" },
          { "Id": "20497", "Name": "Xã Ka Dăng", "Level": "Xã" }
        ]
      },
      {
        "Id": "506",
        "Name": "Huyện Đại Lộc",
        "Wards": [
          { "Id": "20500", "Name": "Thị Trấn Ái Nghĩa", "Level": "Thị trấn" },
          { "Id": "20503", "Name": "Xã Đại Sơn", "Level": "Xã" },
          { "Id": "20506", "Name": "Xã Đại Lãnh", "Level": "Xã" },
          { "Id": "20509", "Name": "Xã Đại Hưng", "Level": "Xã" },
          { "Id": "20512", "Name": "Xã Đại Hồng", "Level": "Xã" },
          { "Id": "20515", "Name": "Xã Đại Đồng", "Level": "Xã" },
          { "Id": "20518", "Name": "Xã Đại Quang", "Level": "Xã" },
          { "Id": "20521", "Name": "Xã Đại Nghĩa", "Level": "Xã" },
          { "Id": "20524", "Name": "Xã Đại Hiệp", "Level": "Xã" },
          { "Id": "20527", "Name": "Xã Đại Thạnh", "Level": "Xã" },
          { "Id": "20530", "Name": "Xã Đại Chánh", "Level": "Xã" },
          { "Id": "20533", "Name": "Xã Đại Tân", "Level": "Xã" },
          { "Id": "20536", "Name": "Xã Đại Phong", "Level": "Xã" },
          { "Id": "20539", "Name": "Xã Đại Minh", "Level": "Xã" },
          { "Id": "20542", "Name": "Xã Đại Thắng", "Level": "Xã" },
          { "Id": "20545", "Name": "Xã Đại Cường", "Level": "Xã" },
          { "Id": "20547", "Name": "Xã Đại An", "Level": "Xã" },
          { "Id": "20548", "Name": "Xã Đại Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "507",
        "Name": "Thị xã Điện Bàn",
        "Wards": [
          { "Id": "20551", "Name": "Phường Vĩnh Điện", "Level": "Phường" },
          { "Id": "20554", "Name": "Xã Điện Tiến", "Level": "Xã" },
          { "Id": "20557", "Name": "Xã Điện Hòa", "Level": "Xã" },
          { "Id": "20560", "Name": "Xã Điện Thắng Bắc", "Level": "Xã" },
          { "Id": "20561", "Name": "Xã Điện Thắng Trung", "Level": "Xã" },
          { "Id": "20562", "Name": "Xã Điện Thắng Nam", "Level": "Xã" },
          { "Id": "20563", "Name": "Phường Điện Ngọc", "Level": "Phường" },
          { "Id": "20566", "Name": "Xã Điện Hồng", "Level": "Xã" },
          { "Id": "20569", "Name": "Xã Điện Thọ", "Level": "Xã" },
          { "Id": "20572", "Name": "Xã Điện Phước", "Level": "Xã" },
          { "Id": "20575", "Name": "Phường Điện An", "Level": "Phường" },
          { "Id": "20578", "Name": "Phường Điện Nam Bắc", "Level": "Phường" },
          { "Id": "20579", "Name": "Phường Điện Nam Trung", "Level": "Phường" },
          { "Id": "20580", "Name": "Phường Điện Nam Đông", "Level": "Phường" },
          { "Id": "20581", "Name": "Phường Điện Dương", "Level": "Phường" },
          { "Id": "20584", "Name": "Xã Điện Quang", "Level": "Xã" },
          { "Id": "20587", "Name": "Xã Điện Trung", "Level": "Xã" },
          { "Id": "20590", "Name": "Xã Điện Phong", "Level": "Xã" },
          { "Id": "20593", "Name": "Xã Điện Minh", "Level": "Xã" },
          { "Id": "20596", "Name": "Xã Điện Phương", "Level": "Xã" }
        ]
      },
      {
        "Id": "508",
        "Name": "Huyện Duy Xuyên",
        "Wards": [
          { "Id": "20599", "Name": "Thị trấn Nam Phước", "Level": "Thị trấn" },
          { "Id": "20602", "Name": "Xã Duy Thu", "Level": "Xã" },
          { "Id": "20605", "Name": "Xã Duy Phú", "Level": "Xã" },
          { "Id": "20608", "Name": "Xã Duy Tân", "Level": "Xã" },
          { "Id": "20611", "Name": "Xã Duy Hòa", "Level": "Xã" },
          { "Id": "20614", "Name": "Xã Duy Châu", "Level": "Xã" },
          { "Id": "20617", "Name": "Xã Duy Trinh", "Level": "Xã" },
          { "Id": "20620", "Name": "Xã Duy Sơn", "Level": "Xã" },
          { "Id": "20623", "Name": "Xã Duy Trung", "Level": "Xã" },
          { "Id": "20626", "Name": "Xã Duy Phước", "Level": "Xã" },
          { "Id": "20629", "Name": "Xã Duy Thành", "Level": "Xã" },
          { "Id": "20632", "Name": "Xã Duy Vinh", "Level": "Xã" },
          { "Id": "20635", "Name": "Xã Duy Nghĩa", "Level": "Xã" },
          { "Id": "20638", "Name": "Xã Duy Hải", "Level": "Xã" }
        ]
      },
      {
        "Id": "509",
        "Name": "Huyện Quế Sơn",
        "Wards": [
          { "Id": "20641", "Name": "Thị trấn Đông Phú", "Level": "Thị trấn" },
          { "Id": "20644", "Name": "Xã Quế Xuân 1", "Level": "Xã" },
          { "Id": "20647", "Name": "Xã Quế Xuân 2", "Level": "Xã" },
          { "Id": "20650", "Name": "Xã Quế Phú", "Level": "Xã" },
          { "Id": "20651", "Name": "Thị trấn Hương An", "Level": "Thị trấn" },
          { "Id": "20659", "Name": "Xã Quế Hiệp", "Level": "Xã" },
          { "Id": "20662", "Name": "Xã Quế Thuận", "Level": "Xã" },
          { "Id": "20665", "Name": "Xã Quế Mỹ", "Level": "Xã" },
          { "Id": "20677", "Name": "Xã Quế Long", "Level": "Xã" },
          { "Id": "20680", "Name": "Xã Quế Châu", "Level": "Xã" },
          { "Id": "20683", "Name": "Xã Quế Phong", "Level": "Xã" },
          { "Id": "20686", "Name": "Xã Quế An", "Level": "Xã" },
          { "Id": "20689", "Name": "Xã Quế Minh", "Level": "Xã" }
        ]
      },
      {
        "Id": "510",
        "Name": "Huyện Nam Giang",
        "Wards": [
          { "Id": "20695", "Name": "Thị trấn Thạnh Mỹ", "Level": "Thị trấn" },
          { "Id": "20698", "Name": "Xã Laêê", "Level": "Xã" },
          { "Id": "20699", "Name": "Xã Chơ Chun", "Level": "Xã" },
          { "Id": "20701", "Name": "Xã Zuôich", "Level": "Xã" },
          { "Id": "20702", "Name": "Xã Tà Pơơ", "Level": "Xã" },
          { "Id": "20704", "Name": "Xã La Dêê", "Level": "Xã" },
          { "Id": "20705", "Name": "Xã Đắc Tôi", "Level": "Xã" },
          { "Id": "20707", "Name": "Xã Chà Vàl", "Level": "Xã" },
          { "Id": "20710", "Name": "Xã Tà Bhinh", "Level": "Xã" },
          { "Id": "20713", "Name": "Xã Cà Dy", "Level": "Xã" },
          { "Id": "20716", "Name": "Xã Đắc Pre", "Level": "Xã" },
          { "Id": "20719", "Name": "Xã Đắc Pring", "Level": "Xã" }
        ]
      },
      {
        "Id": "511",
        "Name": "Huyện Phước Sơn",
        "Wards": [
          { "Id": "20722", "Name": "Thị trấn Khâm Đức", "Level": "Thị trấn" },
          { "Id": "20725", "Name": "Xã Phước Xuân", "Level": "Xã" },
          { "Id": "20728", "Name": "Xã Phước Hiệp", "Level": "Xã" },
          { "Id": "20729", "Name": "Xã Phước Hoà", "Level": "Xã" },
          { "Id": "20731", "Name": "Xã Phước Đức", "Level": "Xã" },
          { "Id": "20734", "Name": "Xã Phước Năng", "Level": "Xã" },
          { "Id": "20737", "Name": "Xã Phước Mỹ", "Level": "Xã" },
          { "Id": "20740", "Name": "Xã Phước Chánh", "Level": "Xã" },
          { "Id": "20743", "Name": "Xã Phước Công", "Level": "Xã" },
          { "Id": "20746", "Name": "Xã Phước Kim", "Level": "Xã" },
          { "Id": "20749", "Name": "Xã Phước Lộc", "Level": "Xã" },
          { "Id": "20752", "Name": "Xã Phước Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "512",
        "Name": "Huyện Hiệp Đức",
        "Wards": [
          { "Id": "20758", "Name": "Xã Hiệp Hòa", "Level": "Xã" },
          { "Id": "20761", "Name": "Xã Hiệp Thuận", "Level": "Xã" },
          { "Id": "20764", "Name": "Xã Quế Thọ", "Level": "Xã" },
          { "Id": "20767", "Name": "Xã Bình Lâm", "Level": "Xã" },
          { "Id": "20770", "Name": "Xã Sông Trà", "Level": "Xã" },
          { "Id": "20773", "Name": "Xã Phước Trà", "Level": "Xã" },
          { "Id": "20776", "Name": "Xã Phước Gia", "Level": "Xã" },
          { "Id": "20779", "Name": "Thị trấn Tân Bình", "Level": "Thị trấn" },
          { "Id": "20782", "Name": "Xã Quế Lưu", "Level": "Xã" },
          { "Id": "20785", "Name": "Xã Thăng Phước", "Level": "Xã" },
          { "Id": "20788", "Name": "Xã Bình Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "513",
        "Name": "Huyện Thăng Bình",
        "Wards": [
          { "Id": "20791", "Name": "Thị trấn Hà Lam", "Level": "Thị trấn" },
          { "Id": "20794", "Name": "Xã Bình Dương", "Level": "Xã" },
          { "Id": "20797", "Name": "Xã Bình Giang", "Level": "Xã" },
          { "Id": "20800", "Name": "Xã Bình Nguyên", "Level": "Xã" },
          { "Id": "20803", "Name": "Xã Bình Phục", "Level": "Xã" },
          { "Id": "20806", "Name": "Xã Bình Triều", "Level": "Xã" },
          { "Id": "20809", "Name": "Xã Bình Đào", "Level": "Xã" },
          { "Id": "20812", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "20815", "Name": "Xã Bình Lãnh", "Level": "Xã" },
          { "Id": "20818", "Name": "Xã Bình Trị", "Level": "Xã" },
          { "Id": "20821", "Name": "Xã Bình Định Bắc", "Level": "Xã" },
          { "Id": "20822", "Name": "Xã Bình Định Nam", "Level": "Xã" },
          { "Id": "20824", "Name": "Xã Bình Quý", "Level": "Xã" },
          { "Id": "20827", "Name": "Xã Bình Phú", "Level": "Xã" },
          { "Id": "20830", "Name": "Xã Bình Chánh", "Level": "Xã" },
          { "Id": "20833", "Name": "Xã Bình Tú", "Level": "Xã" },
          { "Id": "20836", "Name": "Xã Bình Sa", "Level": "Xã" },
          { "Id": "20839", "Name": "Xã Bình Hải", "Level": "Xã" },
          { "Id": "20842", "Name": "Xã Bình Quế", "Level": "Xã" },
          { "Id": "20845", "Name": "Xã Bình An", "Level": "Xã" },
          { "Id": "20848", "Name": "Xã Bình Trung", "Level": "Xã" },
          { "Id": "20851", "Name": "Xã Bình Nam", "Level": "Xã" }
        ]
      },
      {
        "Id": "514",
        "Name": "Huyện Tiên Phước",
        "Wards": [
          { "Id": "20854", "Name": "Thị trấn Tiên Kỳ", "Level": "Thị trấn" },
          { "Id": "20857", "Name": "Xã Tiên Sơn", "Level": "Xã" },
          { "Id": "20860", "Name": "Xã Tiên Hà", "Level": "Xã" },
          { "Id": "20863", "Name": "Xã Tiên Cẩm", "Level": "Xã" },
          { "Id": "20866", "Name": "Xã Tiên Châu", "Level": "Xã" },
          { "Id": "20869", "Name": "Xã Tiên Lãnh", "Level": "Xã" },
          { "Id": "20872", "Name": "Xã Tiên Ngọc", "Level": "Xã" },
          { "Id": "20875", "Name": "Xã Tiên Hiệp", "Level": "Xã" },
          { "Id": "20878", "Name": "Xã Tiên Cảnh", "Level": "Xã" },
          { "Id": "20881", "Name": "Xã Tiên Mỹ", "Level": "Xã" },
          { "Id": "20884", "Name": "Xã Tiên Phong", "Level": "Xã" },
          { "Id": "20887", "Name": "Xã Tiên Thọ", "Level": "Xã" },
          { "Id": "20890", "Name": "Xã Tiên An", "Level": "Xã" },
          { "Id": "20893", "Name": "Xã Tiên Lộc", "Level": "Xã" },
          { "Id": "20896", "Name": "Xã Tiên Lập", "Level": "Xã" }
        ]
      },
      {
        "Id": "515",
        "Name": "Huyện Bắc Trà My",
        "Wards": [
          { "Id": "20899", "Name": "Thị trấn Trà My", "Level": "Thị trấn" },
          { "Id": "20900", "Name": "Xã Trà Sơn", "Level": "Xã" },
          { "Id": "20902", "Name": "Xã Trà Kót", "Level": "Xã" },
          { "Id": "20905", "Name": "Xã Trà Nú", "Level": "Xã" },
          { "Id": "20908", "Name": "Xã Trà Đông", "Level": "Xã" },
          { "Id": "20911", "Name": "Xã Trà Dương", "Level": "Xã" },
          { "Id": "20914", "Name": "Xã Trà Giang", "Level": "Xã" },
          { "Id": "20917", "Name": "Xã Trà Bui", "Level": "Xã" },
          { "Id": "20920", "Name": "Xã Trà Đốc", "Level": "Xã" },
          { "Id": "20923", "Name": "Xã Trà Tân", "Level": "Xã" },
          { "Id": "20926", "Name": "Xã Trà Giác", "Level": "Xã" },
          { "Id": "20929", "Name": "Xã Trà Giáp", "Level": "Xã" },
          { "Id": "20932", "Name": "Xã Trà Ka", "Level": "Xã" }
        ]
      },
      {
        "Id": "516",
        "Name": "Huyện Nam Trà My",
        "Wards": [
          { "Id": "20935", "Name": "Xã Trà Leng", "Level": "Xã" },
          { "Id": "20938", "Name": "Xã Trà Dơn", "Level": "Xã" },
          { "Id": "20941", "Name": "Xã Trà Tập", "Level": "Xã" },
          { "Id": "20944", "Name": "Xã Trà Mai", "Level": "Xã" },
          { "Id": "20947", "Name": "Xã Trà Cang", "Level": "Xã" },
          { "Id": "20950", "Name": "Xã Trà Linh", "Level": "Xã" },
          { "Id": "20953", "Name": "Xã Trà Nam", "Level": "Xã" },
          { "Id": "20956", "Name": "Xã Trà Don", "Level": "Xã" },
          { "Id": "20959", "Name": "Xã Trà Vân", "Level": "Xã" },
          { "Id": "20962", "Name": "Xã Trà Vinh", "Level": "Xã" }
        ]
      },
      {
        "Id": "517",
        "Name": "Huyện Núi Thành",
        "Wards": [
          { "Id": "20965", "Name": "Thị trấn Núi Thành", "Level": "Thị trấn" },
          { "Id": "20968", "Name": "Xã Tam Xuân I", "Level": "Xã" },
          { "Id": "20971", "Name": "Xã Tam Xuân II", "Level": "Xã" },
          { "Id": "20974", "Name": "Xã Tam Tiến", "Level": "Xã" },
          { "Id": "20977", "Name": "Xã Tam Sơn", "Level": "Xã" },
          { "Id": "20980", "Name": "Xã Tam Thạnh", "Level": "Xã" },
          { "Id": "20983", "Name": "Xã Tam Anh Bắc", "Level": "Xã" },
          { "Id": "20984", "Name": "Xã Tam Anh Nam", "Level": "Xã" },
          { "Id": "20986", "Name": "Xã Tam Hòa", "Level": "Xã" },
          { "Id": "20989", "Name": "Xã Tam Hiệp", "Level": "Xã" },
          { "Id": "20992", "Name": "Xã Tam Hải", "Level": "Xã" },
          { "Id": "20995", "Name": "Xã Tam Giang", "Level": "Xã" },
          { "Id": "20998", "Name": "Xã Tam Quang", "Level": "Xã" },
          { "Id": "21001", "Name": "Xã Tam Nghĩa", "Level": "Xã" },
          { "Id": "21004", "Name": "Xã Tam Mỹ Tây", "Level": "Xã" },
          { "Id": "21005", "Name": "Xã Tam Mỹ Đông", "Level": "Xã" },
          { "Id": "21007", "Name": "Xã Tam Trà", "Level": "Xã" }
        ]
      },
      {
        "Id": "518",
        "Name": "Huyện Phú Ninh",
        "Wards": [
          { "Id": "20364", "Name": "Thị trấn Phú Thịnh", "Level": "Thị trấn" },
          { "Id": "20365", "Name": "Xã Tam Thành", "Level": "Xã" },
          { "Id": "20368", "Name": "Xã Tam An", "Level": "Xã" },
          { "Id": "20374", "Name": "Xã Tam Đàn", "Level": "Xã" },
          { "Id": "20377", "Name": "Xã Tam Lộc", "Level": "Xã" },
          { "Id": "20380", "Name": "Xã Tam Phước", "Level": "Xã" },
          { "Id": "20383", "Name": "Xã Tam Vinh", "Level": "Xã" },
          { "Id": "20386", "Name": "Xã Tam Thái", "Level": "Xã" },
          { "Id": "20387", "Name": "Xã Tam Đại", "Level": "Xã" },
          { "Id": "20392", "Name": "Xã Tam Dân", "Level": "Xã" },
          { "Id": "20395", "Name": "Xã Tam Lãnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "519",
        "Name": "Huyện Nông Sơn",
        "Wards": [
          { "Id": "20656", "Name": "Xã Quế Trung", "Level": "Xã" },
          { "Id": "20668", "Name": "Xã Ninh Phước", "Level": "Xã" },
          { "Id": "20669", "Name": "Xã Phước Ninh", "Level": "Xã" },
          { "Id": "20671", "Name": "Xã Quế Lộc", "Level": "Xã" },
          { "Id": "20672", "Name": "Xã Sơn Viên", "Level": "Xã" },
          { "Id": "20692", "Name": "Xã Quế Lâm", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "51",
    "Name": "Tỉnh Quảng Ngãi",
    "Districts": [
      {
        "Id": "522",
        "Name": "Thành phố Quảng Ngãi",
        "Wards": [
          { "Id": "21010", "Name": "Phường Lê Hồng Phong", "Level": "Phường" },
          { "Id": "21013", "Name": "Phường Trần Phú", "Level": "Phường" },
          { "Id": "21016", "Name": "Phường Quảng Phú", "Level": "Phường" },
          { "Id": "21019", "Name": "Phường Nghĩa Chánh", "Level": "Phường" },
          { "Id": "21022", "Name": "Phường Trần Hưng Đạo", "Level": "Phường" },
          { "Id": "21025", "Name": "Phường Nguyễn Nghiêm", "Level": "Phường" },
          { "Id": "21028", "Name": "Phường Nghĩa Lộ", "Level": "Phường" },
          { "Id": "21031", "Name": "Phường Chánh Lộ", "Level": "Phường" },
          { "Id": "21034", "Name": "Xã Nghĩa Dũng", "Level": "Xã" },
          { "Id": "21037", "Name": "Xã Nghĩa Dõng", "Level": "Xã" },
          {
            "Id": "21172",
            "Name": "Phường Trương Quang Trọng",
            "Level": "Phường"
          },
          { "Id": "21187", "Name": "Xã Tịnh Hòa", "Level": "Xã" },
          { "Id": "21190", "Name": "Xã Tịnh Kỳ", "Level": "Xã" },
          { "Id": "21199", "Name": "Xã Tịnh Thiện", "Level": "Xã" },
          { "Id": "21202", "Name": "Xã Tịnh Ấn Đông", "Level": "Xã" },
          { "Id": "21208", "Name": "Xã Tịnh Châu", "Level": "Xã" },
          { "Id": "21211", "Name": "Xã Tịnh Khê", "Level": "Xã" },
          { "Id": "21214", "Name": "Xã Tịnh Long", "Level": "Xã" },
          { "Id": "21223", "Name": "Xã Tịnh Ấn Tây", "Level": "Xã" },
          { "Id": "21232", "Name": "Xã Tịnh An", "Level": "Xã" },
          { "Id": "21253", "Name": "Xã Nghĩa Phú", "Level": "Xã" },
          { "Id": "21256", "Name": "Xã Nghĩa Hà", "Level": "Xã" },
          { "Id": "21262", "Name": "Xã Nghĩa An", "Level": "Xã" }
        ]
      },
      {
        "Id": "524",
        "Name": "Huyện Bình Sơn",
        "Wards": [
          { "Id": "21040", "Name": "Thị Trấn Châu Ổ", "Level": "Thị trấn" },
          { "Id": "21043", "Name": "Xã Bình Thuận", "Level": "Xã" },
          { "Id": "21046", "Name": "Xã Bình Thạnh", "Level": "Xã" },
          { "Id": "21049", "Name": "Xã Bình Đông", "Level": "Xã" },
          { "Id": "21052", "Name": "Xã Bình Chánh", "Level": "Xã" },
          { "Id": "21055", "Name": "Xã Bình Nguyên", "Level": "Xã" },
          { "Id": "21058", "Name": "Xã Bình Khương", "Level": "Xã" },
          { "Id": "21061", "Name": "Xã Bình Trị", "Level": "Xã" },
          { "Id": "21064", "Name": "Xã Bình An", "Level": "Xã" },
          { "Id": "21067", "Name": "Xã Bình Hải", "Level": "Xã" },
          { "Id": "21070", "Name": "Xã Bình Dương", "Level": "Xã" },
          { "Id": "21073", "Name": "Xã Bình Phước", "Level": "Xã" },
          { "Id": "21079", "Name": "Xã Bình Hòa", "Level": "Xã" },
          { "Id": "21082", "Name": "Xã Bình Trung", "Level": "Xã" },
          { "Id": "21085", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "21088", "Name": "Xã Bình Long", "Level": "Xã" },
          { "Id": "21091", "Name": "Xã Bình Thanh ", "Level": "Xã" },
          { "Id": "21100", "Name": "Xã Bình Chương", "Level": "Xã" },
          { "Id": "21103", "Name": "Xã Bình Hiệp", "Level": "Xã" },
          { "Id": "21106", "Name": "Xã Bình Mỹ", "Level": "Xã" },
          { "Id": "21109", "Name": "Xã Bình Tân Phú", "Level": "Xã" },
          { "Id": "21112", "Name": "Xã Bình Châu", "Level": "Xã" }
        ]
      },
      {
        "Id": "525",
        "Name": "Huyện Trà Bồng",
        "Wards": [
          { "Id": "21115", "Name": "Thị trấn Trà Xuân", "Level": "Thị trấn" },
          { "Id": "21118", "Name": "Xã Trà Giang", "Level": "Xã" },
          { "Id": "21121", "Name": "Xã Trà Thủy", "Level": "Xã" },
          { "Id": "21124", "Name": "Xã Trà Hiệp", "Level": "Xã" },
          { "Id": "21127", "Name": "Xã Trà Bình", "Level": "Xã" },
          { "Id": "21130", "Name": "Xã Trà Phú", "Level": "Xã" },
          { "Id": "21133", "Name": "Xã Trà Lâm", "Level": "Xã" },
          { "Id": "21136", "Name": "Xã Trà Tân", "Level": "Xã" },
          { "Id": "21139", "Name": "Xã Trà Sơn", "Level": "Xã" },
          { "Id": "21142", "Name": "Xã Trà Bùi", "Level": "Xã" },
          { "Id": "21145", "Name": "Xã Trà Thanh", "Level": "Xã" },
          { "Id": "21148", "Name": "Xã Sơn Trà", "Level": "Xã" },
          { "Id": "21154", "Name": "Xã Trà Phong", "Level": "Xã" },
          { "Id": "21157", "Name": "Xã Hương Trà", "Level": "Xã" },
          { "Id": "21163", "Name": "Xã Trà Xinh", "Level": "Xã" },
          { "Id": "21166", "Name": "Xã Trà Tây", "Level": "Xã" }
        ]
      },
      {
        "Id": "527",
        "Name": "Huyện Sơn Tịnh",
        "Wards": [
          { "Id": "21175", "Name": "Xã Tịnh Thọ", "Level": "Xã" },
          { "Id": "21178", "Name": "Xã Tịnh Trà", "Level": "Xã" },
          { "Id": "21181", "Name": "Xã Tịnh Phong", "Level": "Xã" },
          { "Id": "21184", "Name": "Xã Tịnh Hiệp", "Level": "Xã" },
          { "Id": "21193", "Name": "Xã Tịnh Bình", "Level": "Xã" },
          { "Id": "21196", "Name": "Xã Tịnh Đông", "Level": "Xã" },
          { "Id": "21205", "Name": "Xã Tịnh Bắc", "Level": "Xã" },
          { "Id": "21217", "Name": "Xã Tịnh Sơn", "Level": "Xã" },
          { "Id": "21220", "Name": "Xã Tịnh Hà", "Level": "Xã" },
          { "Id": "21226", "Name": "Xã Tịnh Giang", "Level": "Xã" },
          { "Id": "21229", "Name": "Xã Tịnh Minh", "Level": "Xã" }
        ]
      },
      {
        "Id": "528",
        "Name": "Huyện Tư Nghĩa",
        "Wards": [
          { "Id": "21235", "Name": "Thị trấn La Hà", "Level": "Thị trấn" },
          { "Id": "21238", "Name": "Thị trấn Sông Vệ", "Level": "Thị trấn" },
          { "Id": "21241", "Name": "Xã Nghĩa Lâm", "Level": "Xã" },
          { "Id": "21244", "Name": "Xã Nghĩa Thắng", "Level": "Xã" },
          { "Id": "21247", "Name": "Xã Nghĩa Thuận", "Level": "Xã" },
          { "Id": "21250", "Name": "Xã Nghĩa Kỳ", "Level": "Xã" },
          { "Id": "21259", "Name": "Xã Nghĩa Sơn", "Level": "Xã" },
          { "Id": "21268", "Name": "Xã Nghĩa Hòa", "Level": "Xã" },
          { "Id": "21271", "Name": "Xã Nghĩa Điền", "Level": "Xã" },
          { "Id": "21274", "Name": "Xã Nghĩa Thương", "Level": "Xã" },
          { "Id": "21277", "Name": "Xã Nghĩa Trung", "Level": "Xã" },
          { "Id": "21280", "Name": "Xã Nghĩa Hiệp", "Level": "Xã" },
          { "Id": "21283", "Name": "Xã Nghĩa Phương", "Level": "Xã" },
          { "Id": "21286", "Name": "Xã Nghĩa Mỹ", "Level": "Xã" }
        ]
      },
      {
        "Id": "529",
        "Name": "Huyện Sơn Hà",
        "Wards": [
          { "Id": "21289", "Name": "Thị trấn Di Lăng", "Level": "Thị trấn" },
          { "Id": "21292", "Name": "Xã Sơn Hạ", "Level": "Xã" },
          { "Id": "21295", "Name": "Xã Sơn Thành", "Level": "Xã" },
          { "Id": "21298", "Name": "Xã Sơn Nham", "Level": "Xã" },
          { "Id": "21301", "Name": "Xã Sơn Bao", "Level": "Xã" },
          { "Id": "21304", "Name": "Xã Sơn Linh", "Level": "Xã" },
          { "Id": "21307", "Name": "Xã Sơn Giang", "Level": "Xã" },
          { "Id": "21310", "Name": "Xã Sơn Trung", "Level": "Xã" },
          { "Id": "21313", "Name": "Xã Sơn Thượng", "Level": "Xã" },
          { "Id": "21316", "Name": "Xã Sơn Cao", "Level": "Xã" },
          { "Id": "21319", "Name": "Xã Sơn Hải", "Level": "Xã" },
          { "Id": "21322", "Name": "Xã Sơn Thủy", "Level": "Xã" },
          { "Id": "21325", "Name": "Xã Sơn Kỳ", "Level": "Xã" },
          { "Id": "21328", "Name": "Xã Sơn Ba", "Level": "Xã" }
        ]
      },
      {
        "Id": "530",
        "Name": "Huyện Sơn Tây",
        "Wards": [
          { "Id": "21331", "Name": "Xã Sơn Bua", "Level": "Xã" },
          { "Id": "21334", "Name": "Xã Sơn Mùa", "Level": "Xã" },
          { "Id": "21335", "Name": "Xã Sơn Liên", "Level": "Xã" },
          { "Id": "21337", "Name": "Xã Sơn Tân", "Level": "Xã" },
          { "Id": "21338", "Name": "Xã Sơn Màu", "Level": "Xã" },
          { "Id": "21340", "Name": "Xã Sơn Dung", "Level": "Xã" },
          { "Id": "21341", "Name": "Xã Sơn Long", "Level": "Xã" },
          { "Id": "21343", "Name": "Xã Sơn Tinh", "Level": "Xã" },
          { "Id": "21346", "Name": "Xã Sơn Lập", "Level": "Xã" }
        ]
      },
      {
        "Id": "531",
        "Name": "Huyện Minh Long",
        "Wards": [
          { "Id": "21349", "Name": "Xã Long Sơn", "Level": "Xã" },
          { "Id": "21352", "Name": "Xã Long Mai", "Level": "Xã" },
          { "Id": "21355", "Name": "Xã Thanh An", "Level": "Xã" },
          { "Id": "21358", "Name": "Xã Long Môn", "Level": "Xã" },
          { "Id": "21361", "Name": "Xã Long Hiệp", "Level": "Xã" }
        ]
      },
      {
        "Id": "532",
        "Name": "Huyện Nghĩa Hành",
        "Wards": [
          { "Id": "21364", "Name": "Thị trấn Chợ Chùa", "Level": "Thị trấn" },
          { "Id": "21367", "Name": "Xã Hành Thuận", "Level": "Xã" },
          { "Id": "21370", "Name": "Xã Hành Dũng", "Level": "Xã" },
          { "Id": "21373", "Name": "Xã Hành Trung", "Level": "Xã" },
          { "Id": "21376", "Name": "Xã Hành Nhân", "Level": "Xã" },
          { "Id": "21379", "Name": "Xã Hành Đức", "Level": "Xã" },
          { "Id": "21382", "Name": "Xã Hành Minh", "Level": "Xã" },
          { "Id": "21385", "Name": "Xã Hành Phước", "Level": "Xã" },
          { "Id": "21388", "Name": "Xã Hành Thiện", "Level": "Xã" },
          { "Id": "21391", "Name": "Xã Hành Thịnh", "Level": "Xã" },
          { "Id": "21394", "Name": "Xã Hành Tín Tây", "Level": "Xã" },
          { "Id": "21397", "Name": "Xã Hành Tín  Đông", "Level": "Xã" }
        ]
      },
      {
        "Id": "533",
        "Name": "Huyện Mộ Đức",
        "Wards": [
          { "Id": "21400", "Name": "Thị trấn Mộ Đức", "Level": "Thị trấn" },
          { "Id": "21403", "Name": "Xã Đức Lợi", "Level": "Xã" },
          { "Id": "21406", "Name": "Xã Đức Thắng", "Level": "Xã" },
          { "Id": "21409", "Name": "Xã Đức Nhuận", "Level": "Xã" },
          { "Id": "21412", "Name": "Xã Đức Chánh", "Level": "Xã" },
          { "Id": "21415", "Name": "Xã Đức Hiệp", "Level": "Xã" },
          { "Id": "21418", "Name": "Xã Đức Minh", "Level": "Xã" },
          { "Id": "21421", "Name": "Xã Đức Thạnh", "Level": "Xã" },
          { "Id": "21424", "Name": "Xã Đức Hòa", "Level": "Xã" },
          { "Id": "21427", "Name": "Xã Đức Tân", "Level": "Xã" },
          { "Id": "21430", "Name": "Xã Đức Phú", "Level": "Xã" },
          { "Id": "21433", "Name": "Xã Đức Phong", "Level": "Xã" },
          { "Id": "21436", "Name": "Xã Đức Lân", "Level": "Xã" }
        ]
      },
      {
        "Id": "534",
        "Name": "Thị xã Đức Phổ",
        "Wards": [
          { "Id": "21439", "Name": "Phường Nguyễn Nghiêm", "Level": "Phường" },
          { "Id": "21442", "Name": "Xã Phổ An", "Level": "Xã" },
          { "Id": "21445", "Name": "Xã Phổ Phong", "Level": "Xã" },
          { "Id": "21448", "Name": "Xã Phổ Thuận", "Level": "Xã" },
          { "Id": "21451", "Name": "Phường Phổ Văn", "Level": "Phường" },
          { "Id": "21454", "Name": "Phường Phổ Quang", "Level": "Phường" },
          { "Id": "21457", "Name": "Xã Phổ Nhơn", "Level": "Xã" },
          { "Id": "21460", "Name": "Phường Phổ Ninh", "Level": "Phường" },
          { "Id": "21463", "Name": "Phường Phổ Minh", "Level": "Phường" },
          { "Id": "21466", "Name": "Phường Phổ Vinh", "Level": "Phường" },
          { "Id": "21469", "Name": "Phường Phổ Hòa", "Level": "Phường" },
          { "Id": "21472", "Name": "Xã Phổ Cường", "Level": "Xã" },
          { "Id": "21475", "Name": "Xã Phổ Khánh", "Level": "Xã" },
          { "Id": "21478", "Name": "Phường Phổ Thạnh", "Level": "Phường" },
          { "Id": "21481", "Name": "Xã Phổ Châu", "Level": "Xã" }
        ]
      },
      {
        "Id": "535",
        "Name": "Huyện Ba Tơ",
        "Wards": [
          { "Id": "21484", "Name": "Thị trấn Ba Tơ", "Level": "Thị trấn" },
          { "Id": "21487", "Name": "Xã Ba Điền", "Level": "Xã" },
          { "Id": "21490", "Name": "Xã Ba Vinh", "Level": "Xã" },
          { "Id": "21493", "Name": "Xã Ba Thành", "Level": "Xã" },
          { "Id": "21496", "Name": "Xã Ba Động", "Level": "Xã" },
          { "Id": "21499", "Name": "Xã Ba Dinh", "Level": "Xã" },
          { "Id": "21500", "Name": "Xã Ba Giang", "Level": "Xã" },
          { "Id": "21502", "Name": "Xã Ba Liên", "Level": "Xã" },
          { "Id": "21505", "Name": "Xã Ba Ngạc", "Level": "Xã" },
          { "Id": "21508", "Name": "Xã Ba Khâm", "Level": "Xã" },
          { "Id": "21511", "Name": "Xã Ba Cung", "Level": "Xã" },
          { "Id": "21517", "Name": "Xã Ba Tiêu", "Level": "Xã" },
          { "Id": "21520", "Name": "Xã Ba Trang", "Level": "Xã" },
          { "Id": "21523", "Name": "Xã Ba Tô", "Level": "Xã" },
          { "Id": "21526", "Name": "Xã Ba Bích", "Level": "Xã" },
          { "Id": "21529", "Name": "Xã Ba Vì", "Level": "Xã" },
          { "Id": "21532", "Name": "Xã Ba Lế", "Level": "Xã" },
          { "Id": "21535", "Name": "Xã Ba Nam", "Level": "Xã" },
          { "Id": "21538", "Name": "Xã Ba Xa", "Level": "Xã" }
        ]
      },
      { "Id": "536", "Name": "Huyện Lý Sơn", "Wards": [{ "Level": "Huyện" }] }
    ]
  },
  {
    "Id": "52",
    "Name": "Tỉnh Bình Định",
    "Districts": [
      {
        "Id": "540",
        "Name": "Thành phố Quy Nhơn",
        "Wards": [
          { "Id": "21550", "Name": "Phường Nhơn Bình", "Level": "Phường" },
          { "Id": "21553", "Name": "Phường Nhơn Phú", "Level": "Phường" },
          { "Id": "21556", "Name": "Phường Đống Đa", "Level": "Phường" },
          {
            "Id": "21559",
            "Name": "Phường Trần Quang Diệu",
            "Level": "Phường"
          },
          { "Id": "21562", "Name": "Phường Hải Cảng", "Level": "Phường" },
          { "Id": "21565", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "21568", "Name": "Phường Thị Nại", "Level": "Phường" },
          { "Id": "21571", "Name": "Phường Lê Hồng Phong", "Level": "Phường" },
          { "Id": "21574", "Name": "Phường Trần Hưng Đạo", "Level": "Phường" },
          { "Id": "21577", "Name": "Phường Ngô Mây", "Level": "Phường" },
          { "Id": "21580", "Name": "Phường Lý Thường Kiệt", "Level": "Phường" },
          { "Id": "21583", "Name": "Phường Lê Lợi", "Level": "Phường" },
          { "Id": "21586", "Name": "Phường Trần Phú", "Level": "Phường" },
          { "Id": "21589", "Name": "Phường Bùi Thị Xuân", "Level": "Phường" },
          { "Id": "21592", "Name": "Phường Nguyễn Văn Cừ", "Level": "Phường" },
          { "Id": "21595", "Name": "Phường Ghềnh Ráng", "Level": "Phường" },
          { "Id": "21598", "Name": "Xã Nhơn Lý", "Level": "Xã" },
          { "Id": "21601", "Name": "Xã Nhơn Hội", "Level": "Xã" },
          { "Id": "21604", "Name": "Xã Nhơn Hải", "Level": "Xã" },
          { "Id": "21607", "Name": "Xã Nhơn Châu", "Level": "Xã" },
          { "Id": "21991", "Name": "Xã Phước Mỹ", "Level": "Xã" }
        ]
      },
      {
        "Id": "542",
        "Name": "Huyện An Lão",
        "Wards": [
          { "Id": "21609", "Name": "Thị trấn An Lão", "Level": "Thị trấn" },
          { "Id": "21610", "Name": "Xã An Hưng", "Level": "Xã" },
          { "Id": "21613", "Name": "Xã An Trung", "Level": "Xã" },
          { "Id": "21616", "Name": "Xã An Dũng", "Level": "Xã" },
          { "Id": "21619", "Name": "Xã An Vinh", "Level": "Xã" },
          { "Id": "21622", "Name": "Xã An Toàn", "Level": "Xã" },
          { "Id": "21625", "Name": "Xã An Tân", "Level": "Xã" },
          { "Id": "21628", "Name": "Xã An Hòa", "Level": "Xã" },
          { "Id": "21631", "Name": "Xã An Quang", "Level": "Xã" },
          { "Id": "21634", "Name": "Xã An Nghĩa", "Level": "Xã" }
        ]
      },
      {
        "Id": "543",
        "Name": "Thị xã Hoài Nhơn",
        "Wards": [
          { "Id": "21637", "Name": "Phường Tam Quan", "Level": "Phường" },
          { "Id": "21640", "Name": "Phường Bồng Sơn", "Level": "Phường" },
          { "Id": "21643", "Name": "Xã Hoài Sơn", "Level": "Xã" },
          { "Id": "21646", "Name": "Xã Hoài Châu Bắc", "Level": "Xã" },
          { "Id": "21649", "Name": "Xã Hoài Châu", "Level": "Xã" },
          { "Id": "21652", "Name": "Xã Hoài Phú", "Level": "Xã" },
          { "Id": "21655", "Name": "Phường Tam Quan Bắc", "Level": "Phường" },
          { "Id": "21658", "Name": "Phường Tam Quan Nam", "Level": "Phường" },
          { "Id": "21661", "Name": "Phường Hoài Hảo", "Level": "Phường" },
          { "Id": "21664", "Name": "Phường Hoài Thanh Tây", "Level": "Phường" },
          { "Id": "21667", "Name": "Phường Hoài Thanh", "Level": "Phường" },
          { "Id": "21670", "Name": "Phường Hoài Hương", "Level": "Phường" },
          { "Id": "21673", "Name": "Phường Hoài Tân", "Level": "Phường" },
          { "Id": "21676", "Name": "Xã Hoài Hải", "Level": "Xã" },
          { "Id": "21679", "Name": "Phường Hoài Xuân", "Level": "Phường" },
          { "Id": "21682", "Name": "Xã Hoài Mỹ", "Level": "Xã" },
          { "Id": "21685", "Name": "Phường Hoài Đức", "Level": "Phường" }
        ]
      },
      {
        "Id": "544",
        "Name": "Huyện Hoài Ân",
        "Wards": [
          {
            "Id": "21688",
            "Name": "Thị trấn Tăng Bạt Hổ",
            "Level": "Thị trấn"
          },
          { "Id": "21690", "Name": "Xã Ân Hảo Tây", "Level": "Xã" },
          { "Id": "21691", "Name": "Xã Ân Hảo Đông", "Level": "Xã" },
          { "Id": "21694", "Name": "Xã Ân Sơn", "Level": "Xã" },
          { "Id": "21697", "Name": "Xã Ân Mỹ", "Level": "Xã" },
          { "Id": "21700", "Name": "Xã Đak Mang", "Level": "Xã" },
          { "Id": "21703", "Name": "Xã Ân Tín", "Level": "Xã" },
          { "Id": "21706", "Name": "Xã Ân Thạnh", "Level": "Xã" },
          { "Id": "21709", "Name": "Xã Ân Phong", "Level": "Xã" },
          { "Id": "21712", "Name": "Xã Ân Đức", "Level": "Xã" },
          { "Id": "21715", "Name": "Xã Ân Hữu", "Level": "Xã" },
          { "Id": "21718", "Name": "Xã Bok Tới", "Level": "Xã" },
          { "Id": "21721", "Name": "Xã Ân Tường Tây", "Level": "Xã" },
          { "Id": "21724", "Name": "Xã Ân Tường Đông", "Level": "Xã" },
          { "Id": "21727", "Name": "Xã Ân Nghĩa", "Level": "Xã" }
        ]
      },
      {
        "Id": "545",
        "Name": "Huyện Phù Mỹ",
        "Wards": [
          { "Id": "21730", "Name": "Thị trấn Phù Mỹ", "Level": "Thị trấn" },
          { "Id": "21733", "Name": "Thị trấn Bình Dương", "Level": "Thị trấn" },
          { "Id": "21736", "Name": "Xã Mỹ Đức", "Level": "Xã" },
          { "Id": "21739", "Name": "Xã Mỹ Châu", "Level": "Xã" },
          { "Id": "21742", "Name": "Xã Mỹ Thắng", "Level": "Xã" },
          { "Id": "21745", "Name": "Xã Mỹ Lộc", "Level": "Xã" },
          { "Id": "21748", "Name": "Xã Mỹ Lợi", "Level": "Xã" },
          { "Id": "21751", "Name": "Xã Mỹ An", "Level": "Xã" },
          { "Id": "21754", "Name": "Xã Mỹ Phong", "Level": "Xã" },
          { "Id": "21757", "Name": "Xã Mỹ Trinh", "Level": "Xã" },
          { "Id": "21760", "Name": "Xã Mỹ Thọ", "Level": "Xã" },
          { "Id": "21763", "Name": "Xã Mỹ Hòa", "Level": "Xã" },
          { "Id": "21766", "Name": "Xã Mỹ Thành", "Level": "Xã" },
          { "Id": "21769", "Name": "Xã Mỹ Chánh", "Level": "Xã" },
          { "Id": "21772", "Name": "Xã Mỹ Quang", "Level": "Xã" },
          { "Id": "21775", "Name": "Xã Mỹ Hiệp", "Level": "Xã" },
          { "Id": "21778", "Name": "Xã Mỹ Tài", "Level": "Xã" },
          { "Id": "21781", "Name": "Xã Mỹ Cát", "Level": "Xã" },
          { "Id": "21784", "Name": "Xã Mỹ Chánh Tây", "Level": "Xã" }
        ]
      },
      {
        "Id": "546",
        "Name": "Huyện Vĩnh Thạnh",
        "Wards": [
          { "Id": "21786", "Name": "Thị trấn Vĩnh Thạnh", "Level": "Thị trấn" },
          { "Id": "21787", "Name": "Xã Vĩnh Sơn", "Level": "Xã" },
          { "Id": "21790", "Name": "Xã Vĩnh Kim", "Level": "Xã" },
          { "Id": "21796", "Name": "Xã Vĩnh Hiệp", "Level": "Xã" },
          { "Id": "21799", "Name": "Xã Vĩnh Hảo", "Level": "Xã" },
          { "Id": "21801", "Name": "Xã Vĩnh Hòa", "Level": "Xã" },
          { "Id": "21802", "Name": "Xã Vĩnh Thịnh", "Level": "Xã" },
          { "Id": "21804", "Name": "Xã Vĩnh Thuận", "Level": "Xã" },
          { "Id": "21805", "Name": "Xã Vĩnh Quang", "Level": "Xã" }
        ]
      },
      {
        "Id": "547",
        "Name": "Huyện Tây Sơn",
        "Wards": [
          { "Id": "21808", "Name": "Thị trấn Phú Phong", "Level": "Thị trấn" },
          { "Id": "21811", "Name": "Xã Bình Tân", "Level": "Xã" },
          { "Id": "21814", "Name": "Xã Tây Thuận", "Level": "Xã" },
          { "Id": "21817", "Name": "Xã Bình Thuận", "Level": "Xã" },
          { "Id": "21820", "Name": "Xã Tây Giang", "Level": "Xã" },
          { "Id": "21823", "Name": "Xã Bình Thành", "Level": "Xã" },
          { "Id": "21826", "Name": "Xã Tây An", "Level": "Xã" },
          { "Id": "21829", "Name": "Xã Bình Hòa", "Level": "Xã" },
          { "Id": "21832", "Name": "Xã Tây Bình", "Level": "Xã" },
          { "Id": "21835", "Name": "Xã Bình Tường", "Level": "Xã" },
          { "Id": "21838", "Name": "Xã Tây Vinh", "Level": "Xã" },
          { "Id": "21841", "Name": "Xã Vĩnh An", "Level": "Xã" },
          { "Id": "21844", "Name": "Xã Tây Xuân", "Level": "Xã" },
          { "Id": "21847", "Name": "Xã Bình Nghi", "Level": "Xã" },
          { "Id": "21850", "Name": "Xã Tây Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "548",
        "Name": "Huyện Phù Cát",
        "Wards": [
          { "Id": "21853", "Name": "Thị trấn Ngô Mây", "Level": "Thị trấn" },
          { "Id": "21856", "Name": "Xã Cát Sơn", "Level": "Xã" },
          { "Id": "21859", "Name": "Xã Cát Minh", "Level": "Xã" },
          { "Id": "21862", "Name": "Xã Cát Khánh", "Level": "Xã" },
          { "Id": "21865", "Name": "Xã Cát Tài", "Level": "Xã" },
          { "Id": "21868", "Name": "Xã Cát Lâm", "Level": "Xã" },
          { "Id": "21871", "Name": "Xã Cát Hanh", "Level": "Xã" },
          { "Id": "21874", "Name": "Xã Cát Thành", "Level": "Xã" },
          { "Id": "21877", "Name": "Xã Cát Trinh", "Level": "Xã" },
          { "Id": "21880", "Name": "Xã Cát Hải", "Level": "Xã" },
          { "Id": "21883", "Name": "Xã Cát Hiệp", "Level": "Xã" },
          { "Id": "21886", "Name": "Xã Cát Nhơn", "Level": "Xã" },
          { "Id": "21889", "Name": "Xã Cát Hưng", "Level": "Xã" },
          { "Id": "21892", "Name": "Xã Cát Tường", "Level": "Xã" },
          { "Id": "21895", "Name": "Xã Cát Tân", "Level": "Xã" },
          { "Id": "21898", "Name": "Xã Cát Tiến", "Level": "Xã" },
          { "Id": "21901", "Name": "Xã Cát Thắng", "Level": "Xã" },
          { "Id": "21904", "Name": "Xã Cát Chánh", "Level": "Xã" }
        ]
      },
      {
        "Id": "549",
        "Name": "Thị xã An Nhơn",
        "Wards": [
          { "Id": "21907", "Name": "Phường Bình Định", "Level": "Phường" },
          { "Id": "21910", "Name": "Phường Đập Đá", "Level": "Phường" },
          { "Id": "21913", "Name": "Xã Nhơn Mỹ", "Level": "Xã" },
          { "Id": "21916", "Name": "Phường Nhơn Thành", "Level": "Phường" },
          { "Id": "21919", "Name": "Xã Nhơn Hạnh", "Level": "Xã" },
          { "Id": "21922", "Name": "Xã Nhơn Hậu", "Level": "Xã" },
          { "Id": "21925", "Name": "Xã Nhơn Phong", "Level": "Xã" },
          { "Id": "21928", "Name": "Xã Nhơn An", "Level": "Xã" },
          { "Id": "21931", "Name": "Xã Nhơn Phúc", "Level": "Xã" },
          { "Id": "21934", "Name": "Phường Nhơn Hưng", "Level": "Phường" },
          { "Id": "21937", "Name": "Xã Nhơn Khánh", "Level": "Xã" },
          { "Id": "21940", "Name": "Xã Nhơn Lộc", "Level": "Xã" },
          { "Id": "21943", "Name": "Phường Nhơn Hoà", "Level": "Phường" },
          { "Id": "21946", "Name": "Xã Nhơn Tân", "Level": "Xã" },
          { "Id": "21949", "Name": "Xã Nhơn Thọ", "Level": "Xã" }
        ]
      },
      {
        "Id": "550",
        "Name": "Huyện Tuy Phước",
        "Wards": [
          { "Id": "21952", "Name": "Thị trấn Tuy Phước", "Level": "Thị trấn" },
          { "Id": "21955", "Name": "Thị trấn Diêu Trì", "Level": "Thị trấn" },
          { "Id": "21958", "Name": "Xã Phước Thắng", "Level": "Xã" },
          { "Id": "21961", "Name": "Xã Phước Hưng", "Level": "Xã" },
          { "Id": "21964", "Name": "Xã Phước Quang", "Level": "Xã" },
          { "Id": "21967", "Name": "Xã Phước Hòa", "Level": "Xã" },
          { "Id": "21970", "Name": "Xã Phước Sơn", "Level": "Xã" },
          { "Id": "21973", "Name": "Xã Phước Hiệp", "Level": "Xã" },
          { "Id": "21976", "Name": "Xã Phước Lộc", "Level": "Xã" },
          { "Id": "21979", "Name": "Xã Phước Nghĩa", "Level": "Xã" },
          { "Id": "21982", "Name": "Xã Phước Thuận", "Level": "Xã" },
          { "Id": "21985", "Name": "Xã Phước An", "Level": "Xã" },
          { "Id": "21988", "Name": "Xã Phước Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "551",
        "Name": "Huyện Vân Canh",
        "Wards": [
          { "Id": "21994", "Name": "Thị trấn Vân Canh", "Level": "Thị trấn" },
          { "Id": "21997", "Name": "Xã Canh Liên", "Level": "Xã" },
          { "Id": "22000", "Name": "Xã Canh Hiệp", "Level": "Xã" },
          { "Id": "22003", "Name": "Xã Canh Vinh", "Level": "Xã" },
          { "Id": "22006", "Name": "Xã Canh Hiển", "Level": "Xã" },
          { "Id": "22009", "Name": "Xã Canh Thuận", "Level": "Xã" },
          { "Id": "22012", "Name": "Xã Canh Hòa", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "54",
    "Name": "Tỉnh Phú Yên",
    "Districts": [
      {
        "Id": "555",
        "Name": "Thành phố Tuy Hoà",
        "Wards": [
          { "Id": "22015", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "22018", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "22021", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "22024", "Name": "Phường 9", "Level": "Phường" },
          { "Id": "22027", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "22030", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "22033", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "22036", "Name": "Phường 7", "Level": "Phường" },
          { "Id": "22039", "Name": "Phường 6", "Level": "Phường" },
          { "Id": "22040", "Name": "Phường Phú Thạnh", "Level": "Phường" },
          { "Id": "22041", "Name": "Phường Phú Đông", "Level": "Phường" },
          { "Id": "22042", "Name": "Xã Hòa Kiến", "Level": "Xã" },
          { "Id": "22045", "Name": "Xã Bình Kiến", "Level": "Xã" },
          { "Id": "22048", "Name": "Xã Bình Ngọc", "Level": "Xã" },
          { "Id": "22162", "Name": "Xã An Phú", "Level": "Xã" },
          { "Id": "22240", "Name": "Phường Phú Lâm", "Level": "Phường" }
        ]
      },
      {
        "Id": "557",
        "Name": "Thị xã Sông Cầu",
        "Wards": [
          { "Id": "22051", "Name": "Phường Xuân Phú", "Level": "Phường" },
          { "Id": "22052", "Name": "Xã Xuân Lâm", "Level": "Xã" },
          { "Id": "22053", "Name": "Phường Xuân Thành", "Level": "Phường" },
          { "Id": "22054", "Name": "Xã Xuân Hải", "Level": "Xã" },
          { "Id": "22057", "Name": "Xã Xuân Lộc", "Level": "Xã" },
          { "Id": "22060", "Name": "Xã Xuân Bình", "Level": "Xã" },
          { "Id": "22066", "Name": "Xã Xuân Cảnh", "Level": "Xã" },
          { "Id": "22069", "Name": "Xã Xuân Thịnh", "Level": "Xã" },
          { "Id": "22072", "Name": "Xã Xuân Phương", "Level": "Xã" },
          { "Id": "22073", "Name": "Phường Xuân Yên", "Level": "Phường" },
          { "Id": "22075", "Name": "Xã Xuân Thọ 1", "Level": "Xã" },
          { "Id": "22076", "Name": "Phường Xuân Đài", "Level": "Phường" },
          { "Id": "22078", "Name": "Xã Xuân Thọ 2", "Level": "Xã" }
        ]
      },
      {
        "Id": "558",
        "Name": "Huyện Đồng Xuân",
        "Wards": [
          { "Id": "22081", "Name": "Thị trấn La Hai", "Level": "Thị trấn" },
          { "Id": "22084", "Name": "Xã Đa Lộc", "Level": "Xã" },
          { "Id": "22087", "Name": "Xã Phú Mỡ", "Level": "Xã" },
          { "Id": "22090", "Name": "Xã Xuân Lãnh", "Level": "Xã" },
          { "Id": "22093", "Name": "Xã Xuân Long", "Level": "Xã" },
          { "Id": "22096", "Name": "Xã Xuân Quang 1", "Level": "Xã" },
          { "Id": "22099", "Name": "Xã Xuân Sơn Bắc", "Level": "Xã" },
          { "Id": "22102", "Name": "Xã Xuân Quang 2", "Level": "Xã" },
          { "Id": "22105", "Name": "Xã Xuân Sơn Nam", "Level": "Xã" },
          { "Id": "22108", "Name": "Xã Xuân Quang 3", "Level": "Xã" },
          { "Id": "22111", "Name": "Xã Xuân Phước", "Level": "Xã" }
        ]
      },
      {
        "Id": "559",
        "Name": "Huyện Tuy An",
        "Wards": [
          { "Id": "22114", "Name": "Thị trấn Chí Thạnh", "Level": "Thị trấn" },
          { "Id": "22117", "Name": "Xã An Dân", "Level": "Xã" },
          { "Id": "22120", "Name": "Xã An Ninh Tây", "Level": "Xã" },
          { "Id": "22123", "Name": "Xã An Ninh Đông", "Level": "Xã" },
          { "Id": "22126", "Name": "Xã An Thạch", "Level": "Xã" },
          { "Id": "22129", "Name": "Xã An Định", "Level": "Xã" },
          { "Id": "22132", "Name": "Xã An Nghiệp", "Level": "Xã" },
          { "Id": "22138", "Name": "Xã An Cư", "Level": "Xã" },
          { "Id": "22141", "Name": "Xã An Xuân", "Level": "Xã" },
          { "Id": "22144", "Name": "Xã An Lĩnh", "Level": "Xã" },
          { "Id": "22147", "Name": "Xã An Hòa Hải", "Level": "Xã" },
          { "Id": "22150", "Name": "Xã An Hiệp", "Level": "Xã" },
          { "Id": "22153", "Name": "Xã An Mỹ", "Level": "Xã" },
          { "Id": "22156", "Name": "Xã An Chấn", "Level": "Xã" },
          { "Id": "22159", "Name": "Xã An Thọ", "Level": "Xã" }
        ]
      },
      {
        "Id": "560",
        "Name": "Huyện Sơn Hòa",
        "Wards": [
          { "Id": "22165", "Name": "Thị trấn Củng Sơn", "Level": "Thị trấn" },
          { "Id": "22168", "Name": "Xã Phước Tân", "Level": "Xã" },
          { "Id": "22171", "Name": "Xã Sơn Hội", "Level": "Xã" },
          { "Id": "22174", "Name": "Xã Sơn Định", "Level": "Xã" },
          { "Id": "22177", "Name": "Xã Sơn Long", "Level": "Xã" },
          { "Id": "22180", "Name": "Xã Cà Lúi", "Level": "Xã" },
          { "Id": "22183", "Name": "Xã Sơn Phước", "Level": "Xã" },
          { "Id": "22186", "Name": "Xã Sơn Xuân", "Level": "Xã" },
          { "Id": "22189", "Name": "Xã Sơn Nguyên", "Level": "Xã" },
          { "Id": "22192", "Name": "Xã Eachà Rang", "Level": "Xã" },
          { "Id": "22195", "Name": "Xã Krông Pa", "Level": "Xã" },
          { "Id": "22198", "Name": "Xã Suối Bạc", "Level": "Xã" },
          { "Id": "22201", "Name": "Xã Sơn Hà", "Level": "Xã" },
          { "Id": "22204", "Name": "Xã Suối Trai", "Level": "Xã" }
        ]
      },
      {
        "Id": "561",
        "Name": "Huyện Sông Hinh",
        "Wards": [
          { "Id": "22207", "Name": "Thị trấn Hai Riêng", "Level": "Thị trấn" },
          { "Id": "22210", "Name": "Xã Ea Lâm", "Level": "Xã" },
          { "Id": "22213", "Name": "Xã Đức Bình Tây", "Level": "Xã" },
          { "Id": "22216", "Name": "Xã Ea Bá", "Level": "Xã" },
          { "Id": "22219", "Name": "Xã Sơn Giang", "Level": "Xã" },
          { "Id": "22222", "Name": "Xã Đức Bình Đông", "Level": "Xã" },
          { "Id": "22225", "Name": "Xã EaBar", "Level": "Xã" },
          { "Id": "22228", "Name": "Xã EaBia", "Level": "Xã" },
          { "Id": "22231", "Name": "Xã EaTrol", "Level": "Xã" },
          { "Id": "22234", "Name": "Xã Sông Hinh", "Level": "Xã" },
          { "Id": "22237", "Name": "Xã Ealy", "Level": "Xã" }
        ]
      },
      {
        "Id": "562",
        "Name": "Huyện Tây Hoà",
        "Wards": [
          { "Id": "22249", "Name": "Xã Sơn Thành Tây", "Level": "Xã" },
          { "Id": "22250", "Name": "Xã Sơn Thành Đông", "Level": "Xã" },
          { "Id": "22252", "Name": "Xã Hòa Bình 1", "Level": "Xã" },
          { "Id": "22255", "Name": "Thị trấn Phú Thứ", "Level": "Thị trấn" },
          { "Id": "22264", "Name": "Xã Hòa Phong", "Level": "Xã" },
          { "Id": "22270", "Name": "Xã Hòa Phú", "Level": "Xã" },
          { "Id": "22273", "Name": "Xã Hòa Tân Tây", "Level": "Xã" },
          { "Id": "22276", "Name": "Xã Hòa Đồng", "Level": "Xã" },
          { "Id": "22285", "Name": "Xã Hòa Mỹ Đông", "Level": "Xã" },
          { "Id": "22288", "Name": "Xã Hòa Mỹ Tây", "Level": "Xã" },
          { "Id": "22294", "Name": "Xã Hòa Thịnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "563",
        "Name": "Huyện Phú Hoà",
        "Wards": [
          { "Id": "22303", "Name": "Xã Hòa Quang Bắc", "Level": "Xã" },
          { "Id": "22306", "Name": "Xã Hòa Quang Nam", "Level": "Xã" },
          { "Id": "22309", "Name": "Xã Hòa Hội", "Level": "Xã" },
          { "Id": "22312", "Name": "Xã Hòa Trị", "Level": "Xã" },
          { "Id": "22315", "Name": "Xã Hòa An", "Level": "Xã" },
          { "Id": "22318", "Name": "Xã Hòa Định Đông", "Level": "Xã" },
          { "Id": "22319", "Name": "Thị Trấn Phú Hoà", "Level": "Thị trấn" },
          { "Id": "22321", "Name": "Xã Hòa Định Tây", "Level": "Xã" },
          { "Id": "22324", "Name": "Xã Hòa Thắng", "Level": "Xã" }
        ]
      },
      {
        "Id": "564",
        "Name": "Thị xã Đông Hòa",
        "Wards": [
          { "Id": "22243", "Name": "Xã Hòa Thành", "Level": "Xã" },
          { "Id": "22246", "Name": "Phường Hòa Hiệp Bắc", "Level": "Phường" },
          { "Id": "22258", "Name": "Phường Hoà Vinh", "Level": "Phường" },
          { "Id": "22261", "Name": "Phường Hoà Hiệp Trung", "Level": "Phường" },
          { "Id": "22267", "Name": "Xã Hòa Tân Đông", "Level": "Xã" },
          { "Id": "22279", "Name": "Phường Hòa Xuân Tây", "Level": "Phường" },
          { "Id": "22282", "Name": "Phường Hòa Hiệp Nam", "Level": "Phường" },
          { "Id": "22291", "Name": "Xã Hòa Xuân Đông", "Level": "Xã" },
          { "Id": "22297", "Name": "Xã Hòa Tâm", "Level": "Xã" },
          { "Id": "22300", "Name": "Xã Hòa Xuân Nam", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "56",
    "Name": "Tỉnh Khánh Hòa",
    "Districts": [
      {
        "Id": "568",
        "Name": "Thành phố Nha Trang",
        "Wards": [
          { "Id": "22327", "Name": "Phường Vĩnh Hòa", "Level": "Phường" },
          { "Id": "22330", "Name": "Phường Vĩnh Hải", "Level": "Phường" },
          { "Id": "22333", "Name": "Phường Vĩnh Phước", "Level": "Phường" },
          { "Id": "22336", "Name": "Phường Ngọc Hiệp", "Level": "Phường" },
          { "Id": "22339", "Name": "Phường Vĩnh Thọ", "Level": "Phường" },
          { "Id": "22342", "Name": "Phường Xương Huân", "Level": "Phường" },
          { "Id": "22345", "Name": "Phường Vạn Thắng", "Level": "Phường" },
          { "Id": "22348", "Name": "Phường Vạn Thạnh", "Level": "Phường" },
          { "Id": "22351", "Name": "Phường Phương Sài", "Level": "Phường" },
          { "Id": "22354", "Name": "Phường Phương Sơn", "Level": "Phường" },
          { "Id": "22357", "Name": "Phường Phước Hải", "Level": "Phường" },
          { "Id": "22360", "Name": "Phường Phước Tân", "Level": "Phường" },
          { "Id": "22363", "Name": "Phường Lộc Thọ", "Level": "Phường" },
          { "Id": "22366", "Name": "Phường Phước Tiến", "Level": "Phường" },
          { "Id": "22369", "Name": "Phường Tân Lập", "Level": "Phường" },
          { "Id": "22372", "Name": "Phường Phước Hòa", "Level": "Phường" },
          { "Id": "22375", "Name": "Phường Vĩnh Nguyên", "Level": "Phường" },
          { "Id": "22378", "Name": "Phường Phước Long", "Level": "Phường" },
          { "Id": "22381", "Name": "Phường Vĩnh Trường", "Level": "Phường" },
          { "Id": "22384", "Name": "Xã Vĩnh Lương", "Level": "Xã" },
          { "Id": "22387", "Name": "Xã Vĩnh Phương", "Level": "Xã" },
          { "Id": "22390", "Name": "Xã Vĩnh Ngọc", "Level": "Xã" },
          { "Id": "22393", "Name": "Xã Vĩnh Thạnh", "Level": "Xã" },
          { "Id": "22396", "Name": "Xã Vĩnh Trung", "Level": "Xã" },
          { "Id": "22399", "Name": "Xã Vĩnh Hiệp", "Level": "Xã" },
          { "Id": "22402", "Name": "Xã Vĩnh Thái", "Level": "Xã" },
          { "Id": "22405", "Name": "Xã Phước Đồng", "Level": "Xã" }
        ]
      },
      {
        "Id": "569",
        "Name": "Thành phố Cam Ranh",
        "Wards": [
          { "Id": "22408", "Name": "Phường Cam Nghĩa", "Level": "Phường" },
          { "Id": "22411", "Name": "Phường Cam Phúc Bắc", "Level": "Phường" },
          { "Id": "22414", "Name": "Phường Cam Phúc Nam", "Level": "Phường" },
          { "Id": "22417", "Name": "Phường Cam Lộc", "Level": "Phường" },
          { "Id": "22420", "Name": "Phường Cam Phú", "Level": "Phường" },
          { "Id": "22423", "Name": "Phường Ba Ngòi", "Level": "Phường" },
          { "Id": "22426", "Name": "Phường Cam Thuận", "Level": "Phường" },
          { "Id": "22429", "Name": "Phường Cam Lợi", "Level": "Phường" },
          { "Id": "22432", "Name": "Phường Cam Linh", "Level": "Phường" },
          { "Id": "22468", "Name": "Xã Cam Thành Nam", "Level": "Xã" },
          { "Id": "22474", "Name": "Xã Cam Phước Đông", "Level": "Xã" },
          { "Id": "22477", "Name": "Xã Cam Thịnh Tây", "Level": "Xã" },
          { "Id": "22480", "Name": "Xã Cam Thịnh Đông", "Level": "Xã" },
          { "Id": "22483", "Name": "Xã Cam Lập", "Level": "Xã" },
          { "Id": "22486", "Name": "Xã Cam Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "570",
        "Name": "Huyện Cam Lâm",
        "Wards": [
          { "Id": "22435", "Name": "Xã Cam Tân", "Level": "Xã" },
          { "Id": "22438", "Name": "Xã Cam Hòa", "Level": "Xã" },
          { "Id": "22441", "Name": "Xã Cam Hải Đông", "Level": "Xã" },
          { "Id": "22444", "Name": "Xã Cam Hải Tây", "Level": "Xã" },
          { "Id": "22447", "Name": "Xã Sơn Tân", "Level": "Xã" },
          { "Id": "22450", "Name": "Xã Cam Hiệp Bắc", "Level": "Xã" },
          { "Id": "22453", "Name": "Thị trấn Cam Đức", "Level": "Thị trấn" },
          { "Id": "22456", "Name": "Xã Cam Hiệp Nam", "Level": "Xã" },
          { "Id": "22459", "Name": "Xã Cam Phước Tây", "Level": "Xã" },
          { "Id": "22462", "Name": "Xã Cam Thành Bắc", "Level": "Xã" },
          { "Id": "22465", "Name": "Xã Cam An Bắc", "Level": "Xã" },
          { "Id": "22471", "Name": "Xã Cam An Nam", "Level": "Xã" },
          { "Id": "22708", "Name": "Xã Suối Cát", "Level": "Xã" },
          { "Id": "22711", "Name": "Xã Suối Tân", "Level": "Xã" }
        ]
      },
      {
        "Id": "571",
        "Name": "Huyện Vạn Ninh",
        "Wards": [
          { "Id": "22489", "Name": "Thị trấn Vạn Giã", "Level": "Thị trấn" },
          { "Id": "22492", "Name": "Xã Đại Lãnh", "Level": "Xã" },
          { "Id": "22495", "Name": "Xã Vạn Phước", "Level": "Xã" },
          { "Id": "22498", "Name": "Xã Vạn Long", "Level": "Xã" },
          { "Id": "22501", "Name": "Xã Vạn Bình", "Level": "Xã" },
          { "Id": "22504", "Name": "Xã Vạn Thọ", "Level": "Xã" },
          { "Id": "22507", "Name": "Xã Vạn Khánh", "Level": "Xã" },
          { "Id": "22510", "Name": "Xã Vạn Phú", "Level": "Xã" },
          { "Id": "22513", "Name": "Xã Vạn Lương", "Level": "Xã" },
          { "Id": "22516", "Name": "Xã Vạn Thắng", "Level": "Xã" },
          { "Id": "22519", "Name": "Xã Vạn Thạnh", "Level": "Xã" },
          { "Id": "22522", "Name": "Xã Xuân Sơn", "Level": "Xã" },
          { "Id": "22525", "Name": "Xã Vạn Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "572",
        "Name": "Thị xã Ninh Hòa",
        "Wards": [
          { "Id": "22528", "Name": "Phường Ninh Hiệp", "Level": "Phường" },
          { "Id": "22531", "Name": "Xã Ninh Sơn", "Level": "Xã" },
          { "Id": "22534", "Name": "Xã Ninh Tây", "Level": "Xã" },
          { "Id": "22537", "Name": "Xã Ninh Thượng", "Level": "Xã" },
          { "Id": "22540", "Name": "Xã Ninh An", "Level": "Xã" },
          { "Id": "22543", "Name": "Phường Ninh Hải", "Level": "Phường" },
          { "Id": "22546", "Name": "Xã Ninh Thọ", "Level": "Xã" },
          { "Id": "22549", "Name": "Xã Ninh Trung", "Level": "Xã" },
          { "Id": "22552", "Name": "Xã Ninh Sim", "Level": "Xã" },
          { "Id": "22555", "Name": "Xã Ninh Xuân", "Level": "Xã" },
          { "Id": "22558", "Name": "Xã Ninh Thân", "Level": "Xã" },
          { "Id": "22561", "Name": "Phường Ninh Diêm", "Level": "Phường" },
          { "Id": "22564", "Name": "Xã Ninh Đông", "Level": "Xã" },
          { "Id": "22567", "Name": "Phường Ninh Thủy", "Level": "Phường" },
          { "Id": "22570", "Name": "Phường Ninh Đa", "Level": "Phường" },
          { "Id": "22573", "Name": "Xã Ninh Phụng", "Level": "Xã" },
          { "Id": "22576", "Name": "Xã Ninh Bình", "Level": "Xã" },
          { "Id": "22579", "Name": "Xã Ninh Phước", "Level": "Xã" },
          { "Id": "22582", "Name": "Xã Ninh Phú", "Level": "Xã" },
          { "Id": "22585", "Name": "Xã Ninh Tân", "Level": "Xã" },
          { "Id": "22588", "Name": "Xã Ninh Quang", "Level": "Xã" },
          { "Id": "22591", "Name": "Phường Ninh Giang", "Level": "Phường" },
          { "Id": "22594", "Name": "Phường Ninh Hà", "Level": "Phường" },
          { "Id": "22597", "Name": "Xã Ninh Hưng", "Level": "Xã" },
          { "Id": "22600", "Name": "Xã Ninh Lộc", "Level": "Xã" },
          { "Id": "22603", "Name": "Xã Ninh Ích", "Level": "Xã" },
          { "Id": "22606", "Name": "Xã Ninh Vân", "Level": "Xã" }
        ]
      },
      {
        "Id": "573",
        "Name": "Huyện Khánh Vĩnh",
        "Wards": [
          { "Id": "22609", "Name": "Thị trấn Khánh Vĩnh", "Level": "Thị trấn" },
          { "Id": "22612", "Name": "Xã Khánh Hiệp", "Level": "Xã" },
          { "Id": "22615", "Name": "Xã Khánh Bình", "Level": "Xã" },
          { "Id": "22618", "Name": "Xã Khánh Trung", "Level": "Xã" },
          { "Id": "22621", "Name": "Xã Khánh Đông", "Level": "Xã" },
          { "Id": "22624", "Name": "Xã Khánh Thượng", "Level": "Xã" },
          { "Id": "22627", "Name": "Xã Khánh Nam", "Level": "Xã" },
          { "Id": "22630", "Name": "Xã Sông Cầu", "Level": "Xã" },
          { "Id": "22633", "Name": "Xã Giang Ly", "Level": "Xã" },
          { "Id": "22636", "Name": "Xã Cầu Bà", "Level": "Xã" },
          { "Id": "22639", "Name": "Xã Liên Sang", "Level": "Xã" },
          { "Id": "22642", "Name": "Xã Khánh Thành", "Level": "Xã" },
          { "Id": "22645", "Name": "Xã Khánh Phú", "Level": "Xã" },
          { "Id": "22648", "Name": "Xã Sơn Thái", "Level": "Xã" }
        ]
      },
      {
        "Id": "574",
        "Name": "Huyện Diên Khánh",
        "Wards": [
          { "Id": "22651", "Name": "Thị trấn Diên Khánh", "Level": "Thị trấn" },
          { "Id": "22654", "Name": "Xã Diên Lâm", "Level": "Xã" },
          { "Id": "22657", "Name": "Xã Diên Điền", "Level": "Xã" },
          { "Id": "22660", "Name": "Xã Diên Xuân", "Level": "Xã" },
          { "Id": "22663", "Name": "Xã Diên Sơn", "Level": "Xã" },
          { "Id": "22666", "Name": "Xã Diên Đồng", "Level": "Xã" },
          { "Id": "22669", "Name": "Xã Diên Phú", "Level": "Xã" },
          { "Id": "22672", "Name": "Xã Diên Thọ", "Level": "Xã" },
          { "Id": "22675", "Name": "Xã Diên Phước", "Level": "Xã" },
          { "Id": "22678", "Name": "Xã Diên Lạc", "Level": "Xã" },
          { "Id": "22681", "Name": "Xã Diên Tân", "Level": "Xã" },
          { "Id": "22684", "Name": "Xã Diên Hòa", "Level": "Xã" },
          { "Id": "22687", "Name": "Xã Diên Thạnh", "Level": "Xã" },
          { "Id": "22690", "Name": "Xã Diên Toàn", "Level": "Xã" },
          { "Id": "22693", "Name": "Xã Diên An", "Level": "Xã" },
          { "Id": "22696", "Name": "Xã Bình Lộc", "Level": "Xã" },
          { "Id": "22702", "Name": "Xã Suối Hiệp", "Level": "Xã" },
          { "Id": "22705", "Name": "Xã Suối Tiên", "Level": "Xã" }
        ]
      },
      {
        "Id": "575",
        "Name": "Huyện Khánh Sơn",
        "Wards": [
          { "Id": "22714", "Name": "Thị trấn Tô Hạp", "Level": "Thị trấn" },
          { "Id": "22717", "Name": "Xã Thành Sơn", "Level": "Xã" },
          { "Id": "22720", "Name": "Xã Sơn Lâm", "Level": "Xã" },
          { "Id": "22723", "Name": "Xã Sơn Hiệp", "Level": "Xã" },
          { "Id": "22726", "Name": "Xã Sơn Bình", "Level": "Xã" },
          { "Id": "22729", "Name": "Xã Sơn Trung", "Level": "Xã" },
          { "Id": "22732", "Name": "Xã Ba Cụm Bắc", "Level": "Xã" },
          { "Id": "22735", "Name": "Xã Ba Cụm Nam", "Level": "Xã" }
        ]
      },
      {
        "Id": "576",
        "Name": "Huyện Trường Sa",
        "Wards": [
          { "Id": "22736", "Name": "Thị trấn Trường Sa", "Level": "Thị trấn" },
          { "Id": "22737", "Name": "Xã Song Tử Tây", "Level": "Xã" },
          { "Id": "22739", "Name": "Xã Sinh Tồn", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "58",
    "Name": "Tỉnh Ninh Thuận",
    "Districts": [
      {
        "Id": "582",
        "Name": "Thành phố Phan Rang-Tháp Chàm",
        "Wards": [
          { "Id": "22738", "Name": "Phường Đô Vinh", "Level": "Phường" },
          { "Id": "22741", "Name": "Phường Phước Mỹ", "Level": "Phường" },
          { "Id": "22744", "Name": "Phường Bảo An", "Level": "Phường" },
          { "Id": "22747", "Name": "Phường Phủ Hà", "Level": "Phường" },
          { "Id": "22750", "Name": "Phường Thanh Sơn", "Level": "Phường" },
          { "Id": "22753", "Name": "Phường Mỹ Hương", "Level": "Phường" },
          { "Id": "22756", "Name": "Phường Tấn Tài", "Level": "Phường" },
          { "Id": "22759", "Name": "Phường Kinh Dinh", "Level": "Phường" },
          { "Id": "22762", "Name": "Phường Đạo Long", "Level": "Phường" },
          { "Id": "22765", "Name": "Phường Đài Sơn", "Level": "Phường" },
          { "Id": "22768", "Name": "Phường Đông Hải", "Level": "Phường" },
          { "Id": "22771", "Name": "Phường Mỹ Đông", "Level": "Phường" },
          { "Id": "22774", "Name": "Xã Thành Hải", "Level": "Xã" },
          { "Id": "22777", "Name": "Phường Văn Hải", "Level": "Phường" },
          { "Id": "22779", "Name": "Phường Mỹ Bình", "Level": "Phường" },
          { "Id": "22780", "Name": "Phường Mỹ Hải", "Level": "Phường" }
        ]
      },
      {
        "Id": "584",
        "Name": "Huyện Bác Ái",
        "Wards": [
          { "Id": "22783", "Name": "Xã Phước Bình", "Level": "Xã" },
          { "Id": "22786", "Name": "Xã Phước Hòa", "Level": "Xã" },
          { "Id": "22789", "Name": "Xã Phước Tân", "Level": "Xã" },
          { "Id": "22792", "Name": "Xã Phước Tiến", "Level": "Xã" },
          { "Id": "22795", "Name": "Xã Phước Thắng", "Level": "Xã" },
          { "Id": "22798", "Name": "Xã Phước Thành", "Level": "Xã" },
          { "Id": "22801", "Name": "Xã Phước Đại", "Level": "Xã" },
          { "Id": "22804", "Name": "Xã Phước Chính", "Level": "Xã" },
          { "Id": "22807", "Name": "Xã Phước Trung", "Level": "Xã" }
        ]
      },
      {
        "Id": "585",
        "Name": "Huyện Ninh Sơn",
        "Wards": [
          { "Id": "22810", "Name": "Thị trấn Tân Sơn", "Level": "Thị trấn" },
          { "Id": "22813", "Name": "Xã Lâm Sơn", "Level": "Xã" },
          { "Id": "22816", "Name": "Xã Lương Sơn", "Level": "Xã" },
          { "Id": "22819", "Name": "Xã Quảng Sơn", "Level": "Xã" },
          { "Id": "22822", "Name": "Xã Mỹ Sơn", "Level": "Xã" },
          { "Id": "22825", "Name": "Xã Hòa Sơn", "Level": "Xã" },
          { "Id": "22828", "Name": "Xã Ma Nới", "Level": "Xã" },
          { "Id": "22831", "Name": "Xã Nhơn Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "586",
        "Name": "Huyện Ninh Hải",
        "Wards": [
          { "Id": "22834", "Name": "Thị trấn Khánh Hải", "Level": "Thị trấn" },
          { "Id": "22846", "Name": "Xã Vĩnh Hải", "Level": "Xã" },
          { "Id": "22852", "Name": "Xã Phương Hải", "Level": "Xã" },
          { "Id": "22855", "Name": "Xã Tân Hải", "Level": "Xã" },
          { "Id": "22858", "Name": "Xã Xuân Hải", "Level": "Xã" },
          { "Id": "22861", "Name": "Xã Hộ Hải", "Level": "Xã" },
          { "Id": "22864", "Name": "Xã Tri Hải", "Level": "Xã" },
          { "Id": "22867", "Name": "Xã Nhơn Hải", "Level": "Xã" },
          { "Id": "22868", "Name": "Xã Thanh Hải", "Level": "Xã" }
        ]
      },
      {
        "Id": "587",
        "Name": "Huyện Ninh Phước",
        "Wards": [
          { "Id": "22870", "Name": "Thị trấn Phước Dân", "Level": "Thị trấn" },
          { "Id": "22873", "Name": "Xã Phước Sơn", "Level": "Xã" },
          { "Id": "22876", "Name": "Xã Phước Thái", "Level": "Xã" },
          { "Id": "22879", "Name": "Xã Phước Hậu", "Level": "Xã" },
          { "Id": "22882", "Name": "Xã Phước Thuận", "Level": "Xã" },
          { "Id": "22888", "Name": "Xã An Hải", "Level": "Xã" },
          { "Id": "22891", "Name": "Xã Phước Hữu", "Level": "Xã" },
          { "Id": "22894", "Name": "Xã Phước Hải", "Level": "Xã" },
          { "Id": "22912", "Name": "Xã Phước Vinh", "Level": "Xã" }
        ]
      },
      {
        "Id": "588",
        "Name": "Huyện Thuận Bắc",
        "Wards": [
          { "Id": "22837", "Name": "Xã Phước Chiến", "Level": "Xã" },
          { "Id": "22840", "Name": "Xã Công Hải", "Level": "Xã" },
          { "Id": "22843", "Name": "Xã Phước Kháng", "Level": "Xã" },
          { "Id": "22849", "Name": "Xã Lợi Hải", "Level": "Xã" },
          { "Id": "22853", "Name": "Xã Bắc Sơn", "Level": "Xã" },
          { "Id": "22856", "Name": "Xã Bắc Phong", "Level": "Xã" }
        ]
      },
      {
        "Id": "589",
        "Name": "Huyện Thuận Nam",
        "Wards": [
          { "Id": "22885", "Name": "Xã Phước Hà", "Level": "Xã" },
          { "Id": "22897", "Name": "Xã Phước Nam", "Level": "Xã" },
          { "Id": "22898", "Name": "Xã Phước Ninh", "Level": "Xã" },
          { "Id": "22900", "Name": "Xã Nhị Hà", "Level": "Xã" },
          { "Id": "22903", "Name": "Xã Phước Dinh", "Level": "Xã" },
          { "Id": "22906", "Name": "Xã Phước Minh", "Level": "Xã" },
          { "Id": "22909", "Name": "Xã Phước Diêm", "Level": "Xã" },
          { "Id": "22910", "Name": "Xã Cà Ná", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "60",
    "Name": "Tỉnh Bình Thuận",
    "Districts": [
      {
        "Id": "593",
        "Name": "Thành phố Phan Thiết",
        "Wards": [
          { "Id": "22915", "Name": "Phường Mũi Né", "Level": "Phường" },
          { "Id": "22918", "Name": "Phường Hàm Tiến", "Level": "Phường" },
          { "Id": "22921", "Name": "Phường Phú Hài", "Level": "Phường" },
          { "Id": "22924", "Name": "Phường Phú Thủy", "Level": "Phường" },
          { "Id": "22927", "Name": "Phường Phú Tài", "Level": "Phường" },
          { "Id": "22930", "Name": "Phường Phú Trinh", "Level": "Phường" },
          { "Id": "22933", "Name": "Phường Xuân An", "Level": "Phường" },
          { "Id": "22936", "Name": "Phường Thanh Hải", "Level": "Phường" },
          { "Id": "22939", "Name": "Phường Bình Hưng", "Level": "Phường" },
          { "Id": "22942", "Name": "Phường Đức Nghĩa", "Level": "Phường" },
          { "Id": "22945", "Name": "Phường Lạc Đạo", "Level": "Phường" },
          { "Id": "22948", "Name": "Phường Đức Thắng", "Level": "Phường" },
          { "Id": "22951", "Name": "Phường Hưng Long", "Level": "Phường" },
          { "Id": "22954", "Name": "Phường Đức Long", "Level": "Phường" },
          { "Id": "22957", "Name": "Xã Thiện Nghiệp", "Level": "Xã" },
          { "Id": "22960", "Name": "Xã Phong Nẫm", "Level": "Xã" },
          { "Id": "22963", "Name": "Xã Tiến Lợi", "Level": "Xã" },
          { "Id": "22966", "Name": "Xã Tiến Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "594",
        "Name": "Thị xã La Gi",
        "Wards": [
          { "Id": "23231", "Name": "Phường Phước Hội", "Level": "Phường" },
          { "Id": "23232", "Name": "Phường Phước Lộc", "Level": "Phường" },
          { "Id": "23234", "Name": "Phường Tân Thiện", "Level": "Phường" },
          { "Id": "23235", "Name": "Phường Tân An", "Level": "Phường" },
          { "Id": "23237", "Name": "Phường Bình Tân", "Level": "Phường" },
          { "Id": "23245", "Name": "Xã Tân Hải", "Level": "Xã" },
          { "Id": "23246", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "23248", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "23268", "Name": "Xã Tân Phước", "Level": "Xã" }
        ]
      },
      {
        "Id": "595",
        "Name": "Huyện Tuy Phong",
        "Wards": [
          { "Id": "22969", "Name": "Thị trấn Liên Hương", "Level": "Thị trấn" },
          {
            "Id": "22972",
            "Name": "Thị trấn Phan Rí Cửa",
            "Level": "Thị trấn"
          },
          { "Id": "22975", "Name": "Xã Phan Dũng", "Level": "Xã" },
          { "Id": "22978", "Name": "Xã Phong Phú", "Level": "Xã" },
          { "Id": "22981", "Name": "Xã Vĩnh Hảo", "Level": "Xã" },
          { "Id": "22984", "Name": "Xã Vĩnh Tân", "Level": "Xã" },
          { "Id": "22987", "Name": "Xã Phú Lạc", "Level": "Xã" },
          { "Id": "22990", "Name": "Xã Phước Thể", "Level": "Xã" },
          { "Id": "22993", "Name": "Xã Hòa Minh", "Level": "Xã" },
          { "Id": "22996", "Name": "Xã Chí Công", "Level": "Xã" },
          { "Id": "22999", "Name": "Xã Bình Thạnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "596",
        "Name": "Huyện Bắc Bình",
        "Wards": [
          { "Id": "23005", "Name": "Thị trấn Chợ Lầu", "Level": "Thị trấn" },
          { "Id": "23008", "Name": "Xã Phan Sơn", "Level": "Xã" },
          { "Id": "23011", "Name": "Xã Phan Lâm", "Level": "Xã" },
          { "Id": "23014", "Name": "Xã Bình An", "Level": "Xã" },
          { "Id": "23017", "Name": "Xã Phan Điền", "Level": "Xã" },
          { "Id": "23020", "Name": "Xã Hải Ninh", "Level": "Xã" },
          { "Id": "23023", "Name": "Xã Sông Lũy", "Level": "Xã" },
          { "Id": "23026", "Name": "Xã Phan Tiến", "Level": "Xã" },
          { "Id": "23029", "Name": "Xã Sông Bình", "Level": "Xã" },
          { "Id": "23032", "Name": "Thị trấn Lương Sơn", "Level": "Thị trấn" },
          { "Id": "23035", "Name": "Xã Phan Hòa", "Level": "Xã" },
          { "Id": "23038", "Name": "Xã Phan Thanh", "Level": "Xã" },
          { "Id": "23041", "Name": "Xã Hồng Thái", "Level": "Xã" },
          { "Id": "23044", "Name": "Xã Phan Hiệp", "Level": "Xã" },
          { "Id": "23047", "Name": "Xã Bình Tân", "Level": "Xã" },
          { "Id": "23050", "Name": "Xã Phan Rí Thành", "Level": "Xã" },
          { "Id": "23053", "Name": "Xã Hòa Thắng", "Level": "Xã" },
          { "Id": "23056", "Name": "Xã Hồng Phong", "Level": "Xã" }
        ]
      },
      {
        "Id": "597",
        "Name": "Huyện Hàm Thuận Bắc",
        "Wards": [
          { "Id": "23059", "Name": "Thị trấn Ma Lâm", "Level": "Thị trấn" },
          { "Id": "23062", "Name": "Thị trấn Phú Long", "Level": "Thị trấn" },
          { "Id": "23065", "Name": "Xã La Dạ", "Level": "Xã" },
          { "Id": "23068", "Name": "Xã Đông Tiến", "Level": "Xã" },
          { "Id": "23071", "Name": "Xã Thuận Hòa", "Level": "Xã" },
          { "Id": "23074", "Name": "Xã Đông Giang", "Level": "Xã" },
          { "Id": "23077", "Name": "Xã Hàm Phú", "Level": "Xã" },
          { "Id": "23080", "Name": "Xã Hồng Liêm", "Level": "Xã" },
          { "Id": "23083", "Name": "Xã Thuận Minh", "Level": "Xã" },
          { "Id": "23086", "Name": "Xã Hồng Sơn", "Level": "Xã" },
          { "Id": "23089", "Name": "Xã Hàm Trí", "Level": "Xã" },
          { "Id": "23092", "Name": "Xã Hàm Đức", "Level": "Xã" },
          { "Id": "23095", "Name": "Xã Hàm Liêm", "Level": "Xã" },
          { "Id": "23098", "Name": "Xã Hàm Chính", "Level": "Xã" },
          { "Id": "23101", "Name": "Xã Hàm Hiệp", "Level": "Xã" },
          { "Id": "23104", "Name": "Xã Hàm Thắng", "Level": "Xã" },
          { "Id": "23107", "Name": "Xã Đa Mi", "Level": "Xã" }
        ]
      },
      {
        "Id": "598",
        "Name": "Huyện Hàm Thuận Nam",
        "Wards": [
          { "Id": "23110", "Name": "Thị trấn Thuận Nam", "Level": "Thị trấn" },
          { "Id": "23113", "Name": "Xã Mỹ Thạnh", "Level": "Xã" },
          { "Id": "23116", "Name": "Xã Hàm Cần", "Level": "Xã" },
          { "Id": "23119", "Name": "Xã Mương Mán", "Level": "Xã" },
          { "Id": "23122", "Name": "Xã Hàm Thạnh", "Level": "Xã" },
          { "Id": "23125", "Name": "Xã Hàm Kiệm", "Level": "Xã" },
          { "Id": "23128", "Name": "Xã Hàm Cường", "Level": "Xã" },
          { "Id": "23131", "Name": "Xã Hàm Mỹ", "Level": "Xã" },
          { "Id": "23134", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "23137", "Name": "Xã Hàm Minh", "Level": "Xã" },
          { "Id": "23140", "Name": "Xã Thuận Quí", "Level": "Xã" },
          { "Id": "23143", "Name": "Xã Tân Thuận", "Level": "Xã" },
          { "Id": "23146", "Name": "Xã Tân Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "599",
        "Name": "Huyện Tánh Linh",
        "Wards": [
          { "Id": "23149", "Name": "Thị trấn Lạc Tánh", "Level": "Thị trấn" },
          { "Id": "23152", "Name": "Xã Bắc Ruộng", "Level": "Xã" },
          { "Id": "23158", "Name": "Xã Nghị Đức", "Level": "Xã" },
          { "Id": "23161", "Name": "Xã La Ngâu", "Level": "Xã" },
          { "Id": "23164", "Name": "Xã Huy Khiêm", "Level": "Xã" },
          { "Id": "23167", "Name": "Xã Măng Tố", "Level": "Xã" },
          { "Id": "23170", "Name": "Xã Đức Phú", "Level": "Xã" },
          { "Id": "23173", "Name": "Xã Đồng Kho", "Level": "Xã" },
          { "Id": "23176", "Name": "Xã Gia An", "Level": "Xã" },
          { "Id": "23179", "Name": "Xã Đức Bình", "Level": "Xã" },
          { "Id": "23182", "Name": "Xã Gia Huynh", "Level": "Xã" },
          { "Id": "23185", "Name": "Xã Đức Thuận", "Level": "Xã" },
          { "Id": "23188", "Name": "Xã Suối Kiết", "Level": "Xã" }
        ]
      },
      {
        "Id": "600",
        "Name": "Huyện Đức Linh",
        "Wards": [
          { "Id": "23191", "Name": "Thị trấn Võ Xu", "Level": "Thị trấn" },
          { "Id": "23194", "Name": "Thị trấn Đức Tài", "Level": "Thị trấn" },
          { "Id": "23197", "Name": "Xã Đa Kai", "Level": "Xã" },
          { "Id": "23200", "Name": "Xã Sùng Nhơn", "Level": "Xã" },
          { "Id": "23203", "Name": "Xã Mê Pu", "Level": "Xã" },
          { "Id": "23206", "Name": "Xã Nam Chính", "Level": "Xã" },
          { "Id": "23212", "Name": "Xã Đức Hạnh", "Level": "Xã" },
          { "Id": "23215", "Name": "Xã Đức Tín", "Level": "Xã" },
          { "Id": "23218", "Name": "Xã Vũ Hoà", "Level": "Xã" },
          { "Id": "23221", "Name": "Xã Tân Hà", "Level": "Xã" },
          { "Id": "23224", "Name": "Xã Đông Hà", "Level": "Xã" },
          { "Id": "23227", "Name": "Xã Trà Tân", "Level": "Xã" }
        ]
      },
      {
        "Id": "601",
        "Name": "Huyện Hàm Tân",
        "Wards": [
          { "Id": "23230", "Name": "Thị trấn Tân Minh", "Level": "Thị trấn" },
          { "Id": "23236", "Name": "Thị trấn Tân Nghĩa", "Level": "Thị trấn" },
          { "Id": "23239", "Name": "Xã Sông Phan", "Level": "Xã" },
          { "Id": "23242", "Name": "Xã Tân Phúc", "Level": "Xã" },
          { "Id": "23251", "Name": "Xã Tân Đức", "Level": "Xã" },
          { "Id": "23254", "Name": "Xã Tân Thắng", "Level": "Xã" },
          { "Id": "23255", "Name": "Xã Thắng Hải", "Level": "Xã" },
          { "Id": "23257", "Name": "Xã Tân Hà", "Level": "Xã" },
          { "Id": "23260", "Name": "Xã Tân Xuân", "Level": "Xã" },
          { "Id": "23266", "Name": "Xã Sơn Mỹ", "Level": "Xã" }
        ]
      },
      {
        "Id": "602",
        "Name": "Huyện Phú Quí",
        "Wards": [
          { "Id": "23272", "Name": "Xã Ngũ Phụng", "Level": "Xã" },
          { "Id": "23275", "Name": "Xã Long Hải", "Level": "Xã" },
          { "Id": "23278", "Name": "Xã Tam Thanh", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "62",
    "Name": "Tỉnh Kon Tum",
    "Districts": [
      {
        "Id": "608",
        "Name": "Thành phố Kon Tum",
        "Wards": [
          { "Id": "23281", "Name": "Phường Quang Trung", "Level": "Phường" },
          { "Id": "23284", "Name": "Phường Duy Tân", "Level": "Phường" },
          { "Id": "23287", "Name": "Phường Quyết Thắng", "Level": "Phường" },
          { "Id": "23290", "Name": "Phường Trường Chinh", "Level": "Phường" },
          { "Id": "23293", "Name": "Phường Thắng Lợi", "Level": "Phường" },
          { "Id": "23296", "Name": "Phường Ngô Mây", "Level": "Phường" },
          { "Id": "23299", "Name": "Phường Thống Nhất", "Level": "Phường" },
          { "Id": "23302", "Name": "Phường Lê Lợi", "Level": "Phường" },
          { "Id": "23305", "Name": "Phường Nguyễn Trãi", "Level": "Phường" },
          { "Id": "23308", "Name": "Phường Trần Hưng Đạo", "Level": "Phường" },
          { "Id": "23311", "Name": "Xã Đắk Cấm", "Level": "Xã" },
          { "Id": "23314", "Name": "Xã Kroong", "Level": "Xã" },
          { "Id": "23317", "Name": "Xã Ngọk Bay", "Level": "Xã" },
          { "Id": "23320", "Name": "Xã Vinh Quang", "Level": "Xã" },
          { "Id": "23323", "Name": "Xã Đắk Blà", "Level": "Xã" },
          { "Id": "23326", "Name": "Xã Ia Chim", "Level": "Xã" },
          { "Id": "23327", "Name": "Xã Đăk Năng", "Level": "Xã" },
          { "Id": "23329", "Name": "Xã Đoàn Kết", "Level": "Xã" },
          { "Id": "23332", "Name": "Xã Chư Hreng", "Level": "Xã" },
          { "Id": "23335", "Name": "Xã Đắk Rơ Wa", "Level": "Xã" },
          { "Id": "23338", "Name": "Xã Hòa Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "610",
        "Name": "Huyện Đắk Glei",
        "Wards": [
          { "Id": "23341", "Name": "Thị trấn Đắk Glei", "Level": "Thị trấn" },
          { "Id": "23344", "Name": "Xã Đắk Blô", "Level": "Xã" },
          { "Id": "23347", "Name": "Xã Đắk Man", "Level": "Xã" },
          { "Id": "23350", "Name": "Xã Đắk Nhoong", "Level": "Xã" },
          { "Id": "23353", "Name": "Xã Đắk Pék", "Level": "Xã" },
          { "Id": "23356", "Name": "Xã Đắk Choong", "Level": "Xã" },
          { "Id": "23359", "Name": "Xã Xốp", "Level": "Xã" },
          { "Id": "23362", "Name": "Xã Mường Hoong", "Level": "Xã" },
          { "Id": "23365", "Name": "Xã Ngọc Linh", "Level": "Xã" },
          { "Id": "23368", "Name": "Xã Đắk Long", "Level": "Xã" },
          { "Id": "23371", "Name": "Xã Đắk KRoong", "Level": "Xã" },
          { "Id": "23374", "Name": "Xã Đắk Môn", "Level": "Xã" }
        ]
      },
      {
        "Id": "611",
        "Name": "Huyện Ngọc Hồi",
        "Wards": [
          { "Id": "23377", "Name": "Thị trấn Plei Kần", "Level": "Thị trấn" },
          { "Id": "23380", "Name": "Xã Đắk Ang", "Level": "Xã" },
          { "Id": "23383", "Name": "Xã Đắk Dục", "Level": "Xã" },
          { "Id": "23386", "Name": "Xã Đắk Nông", "Level": "Xã" },
          { "Id": "23389", "Name": "Xã Đắk Xú", "Level": "Xã" },
          { "Id": "23392", "Name": "Xã Đắk Kan", "Level": "Xã" },
          { "Id": "23395", "Name": "Xã Bờ Y", "Level": "Xã" },
          { "Id": "23398", "Name": "Xã Sa Loong", "Level": "Xã" }
        ]
      },
      {
        "Id": "612",
        "Name": "Huyện Đắk Tô",
        "Wards": [
          { "Id": "23401", "Name": "Thị trấn Đắk Tô", "Level": "Thị trấn" },
          { "Id": "23427", "Name": "Xã Đắk Rơ Nga", "Level": "Xã" },
          { "Id": "23428", "Name": "Xã Ngọk Tụ", "Level": "Xã" },
          { "Id": "23430", "Name": "Xã Đắk Trăm", "Level": "Xã" },
          { "Id": "23431", "Name": "Xã Văn Lem", "Level": "Xã" },
          { "Id": "23434", "Name": "Xã Kon Đào", "Level": "Xã" },
          { "Id": "23437", "Name": "Xã Tân Cảnh", "Level": "Xã" },
          { "Id": "23440", "Name": "Xã Diên Bình", "Level": "Xã" },
          { "Id": "23443", "Name": "Xã Pô Kô", "Level": "Xã" }
        ]
      },
      {
        "Id": "613",
        "Name": "Huyện Kon Plông",
        "Wards": [
          { "Id": "23452", "Name": "Xã Đắk Nên", "Level": "Xã" },
          { "Id": "23455", "Name": "Xã Đắk Ring", "Level": "Xã" },
          { "Id": "23458", "Name": "Xã Măng Buk", "Level": "Xã" },
          { "Id": "23461", "Name": "Xã Đắk Tăng", "Level": "Xã" },
          { "Id": "23464", "Name": "Xã Ngok Tem", "Level": "Xã" },
          { "Id": "23467", "Name": "Xã Pờ Ê", "Level": "Xã" },
          { "Id": "23470", "Name": "Xã Măng Cành", "Level": "Xã" },
          { "Id": "23473", "Name": "Thị trấn Măng Đen", "Level": "Thị trấn" },
          { "Id": "23476", "Name": "Xã Hiếu", "Level": "Xã" }
        ]
      },
      {
        "Id": "614",
        "Name": "Huyện Kon Rẫy",
        "Wards": [
          { "Id": "23479", "Name": "Thị trấn Đắk Rve", "Level": "Thị trấn" },
          { "Id": "23482", "Name": "Xã Đắk Kôi", "Level": "Xã" },
          { "Id": "23485", "Name": "Xã Đắk Tơ Lung", "Level": "Xã" },
          { "Id": "23488", "Name": "Xã Đắk Ruồng", "Level": "Xã" },
          { "Id": "23491", "Name": "Xã Đắk Pne", "Level": "Xã" },
          { "Id": "23494", "Name": "Xã Đắk Tờ Re", "Level": "Xã" },
          { "Id": "23497", "Name": "Xã Tân Lập", "Level": "Xã" }
        ]
      },
      {
        "Id": "615",
        "Name": "Huyện Đắk Hà",
        "Wards": [
          { "Id": "23500", "Name": "Thị trấn Đắk Hà", "Level": "Thị trấn" },
          { "Id": "23503", "Name": "Xã Đắk PXi", "Level": "Xã" },
          { "Id": "23504", "Name": "Xã Đăk Long", "Level": "Xã" },
          { "Id": "23506", "Name": "Xã Đắk HRing", "Level": "Xã" },
          { "Id": "23509", "Name": "Xã Đắk Ui", "Level": "Xã" },
          { "Id": "23510", "Name": "Xã Đăk Ngọk", "Level": "Xã" },
          { "Id": "23512", "Name": "Xã Đắk Mar", "Level": "Xã" },
          { "Id": "23515", "Name": "Xã Ngok Wang", "Level": "Xã" },
          { "Id": "23518", "Name": "Xã Ngok Réo", "Level": "Xã" },
          { "Id": "23521", "Name": "Xã Hà Mòn", "Level": "Xã" },
          { "Id": "23524", "Name": "Xã Đắk La", "Level": "Xã" }
        ]
      },
      {
        "Id": "616",
        "Name": "Huyện Sa Thầy",
        "Wards": [
          { "Id": "23527", "Name": "Thị trấn Sa Thầy", "Level": "Thị trấn" },
          { "Id": "23530", "Name": "Xã Rơ Kơi", "Level": "Xã" },
          { "Id": "23533", "Name": "Xã Sa Nhơn", "Level": "Xã" },
          { "Id": "23534", "Name": "Xã Hơ Moong", "Level": "Xã" },
          { "Id": "23536", "Name": "Xã Mô Rai", "Level": "Xã" },
          { "Id": "23539", "Name": "Xã Sa Sơn", "Level": "Xã" },
          { "Id": "23542", "Name": "Xã Sa Nghĩa", "Level": "Xã" },
          { "Id": "23545", "Name": "Xã Sa Bình", "Level": "Xã" },
          { "Id": "23548", "Name": "Xã Ya Xiêr", "Level": "Xã" },
          { "Id": "23551", "Name": "Xã Ya Tăng", "Level": "Xã" },
          { "Id": "23554", "Name": "Xã Ya ly", "Level": "Xã" }
        ]
      },
      {
        "Id": "617",
        "Name": "Huyện Tu Mơ Rông",
        "Wards": [
          { "Id": "23404", "Name": "Xã Ngọc Lây", "Level": "Xã" },
          { "Id": "23407", "Name": "Xã Đắk Na", "Level": "Xã" },
          { "Id": "23410", "Name": "Xã Măng Ri", "Level": "Xã" },
          { "Id": "23413", "Name": "Xã Ngọc Yêu", "Level": "Xã" },
          { "Id": "23416", "Name": "Xã Đắk Sao", "Level": "Xã" },
          { "Id": "23417", "Name": "Xã Đắk Rơ Ông", "Level": "Xã" },
          { "Id": "23419", "Name": "Xã Đắk Tờ Kan", "Level": "Xã" },
          { "Id": "23422", "Name": "Xã Tu Mơ Rông", "Level": "Xã" },
          { "Id": "23425", "Name": "Xã Đắk Hà", "Level": "Xã" },
          { "Id": "23446", "Name": "Xã Tê Xăng", "Level": "Xã" },
          { "Id": "23449", "Name": "Xã Văn Xuôi", "Level": "Xã" }
        ]
      },
      {
        "Id": "618",
        "Name": "Huyện Ia H' Drai",
        "Wards": [
          { "Id": "23535", "Name": "Xã Ia Đal", "Level": "Xã" },
          { "Id": "23537", "Name": "Xã Ia Dom", "Level": "Xã" },
          { "Id": "23538", "Name": "Xã Ia Tơi", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "64",
    "Name": "Tỉnh Gia Lai",
    "Districts": [
      {
        "Id": "622",
        "Name": "Thành phố Pleiku",
        "Wards": [
          { "Id": "23557", "Name": "Phường Yên Đỗ", "Level": "Phường" },
          { "Id": "23560", "Name": "Phường Diên Hồng", "Level": "Phường" },
          { "Id": "23563", "Name": "Phường Ia Kring", "Level": "Phường" },
          { "Id": "23566", "Name": "Phường Hội Thương", "Level": "Phường" },
          { "Id": "23569", "Name": "Phường Hội Phú", "Level": "Phường" },
          { "Id": "23570", "Name": "Phường Phù Đổng", "Level": "Phường" },
          { "Id": "23572", "Name": "Phường Hoa Lư", "Level": "Phường" },
          { "Id": "23575", "Name": "Phường Tây Sơn", "Level": "Phường" },
          { "Id": "23578", "Name": "Phường Thống Nhất", "Level": "Phường" },
          { "Id": "23579", "Name": "Phường Đống Đa", "Level": "Phường" },
          { "Id": "23581", "Name": "Phường Trà Bá", "Level": "Phường" },
          { "Id": "23582", "Name": "Phường Thắng Lợi", "Level": "Phường" },
          { "Id": "23584", "Name": "Phường Yên Thế", "Level": "Phường" },
          { "Id": "23586", "Name": "Phường Chi Lăng", "Level": "Phường" },
          { "Id": "23590", "Name": "Xã Biển Hồ", "Level": "Xã" },
          { "Id": "23593", "Name": "Xã Tân Sơn", "Level": "Xã" },
          { "Id": "23596", "Name": "Xã Trà Đa", "Level": "Xã" },
          { "Id": "23599", "Name": "Xã Chư Á", "Level": "Xã" },
          { "Id": "23602", "Name": "Xã An Phú", "Level": "Xã" },
          { "Id": "23605", "Name": "Xã Diên Phú", "Level": "Xã" },
          { "Id": "23608", "Name": "Xã Ia Kênh", "Level": "Xã" },
          { "Id": "23611", "Name": "Xã Gào", "Level": "Xã" }
        ]
      },
      {
        "Id": "623",
        "Name": "Thị xã An Khê",
        "Wards": [
          { "Id": "23614", "Name": "Phường An Bình", "Level": "Phường" },
          { "Id": "23617", "Name": "Phường Tây Sơn", "Level": "Phường" },
          { "Id": "23620", "Name": "Phường An Phú", "Level": "Phường" },
          { "Id": "23623", "Name": "Phường An Tân", "Level": "Phường" },
          { "Id": "23626", "Name": "Xã Tú An", "Level": "Xã" },
          { "Id": "23627", "Name": "Xã Xuân An", "Level": "Xã" },
          { "Id": "23629", "Name": "Xã Cửu An", "Level": "Xã" },
          { "Id": "23630", "Name": "Phường An Phước", "Level": "Phường" },
          { "Id": "23632", "Name": "Xã Song An", "Level": "Xã" },
          { "Id": "23633", "Name": "Phường Ngô Mây", "Level": "Phường" },
          { "Id": "23635", "Name": "Xã Thành An", "Level": "Xã" }
        ]
      },
      {
        "Id": "624",
        "Name": "Thị xã Ayun Pa",
        "Wards": [
          { "Id": "24041", "Name": "Phường Cheo Reo", "Level": "Phường" },
          { "Id": "24042", "Name": "Phường Hòa Bình", "Level": "Phường" },
          { "Id": "24044", "Name": "Phường Đoàn Kết", "Level": "Phường" },
          { "Id": "24045", "Name": "Phường Sông Bờ", "Level": "Phường" },
          { "Id": "24064", "Name": "Xã Ia RBol", "Level": "Xã" },
          { "Id": "24065", "Name": "Xã Chư Băh", "Level": "Xã" },
          { "Id": "24070", "Name": "Xã Ia RTô", "Level": "Xã" },
          { "Id": "24073", "Name": "Xã Ia Sao", "Level": "Xã" }
        ]
      },
      {
        "Id": "625",
        "Name": "Huyện KBang",
        "Wards": [
          { "Id": "23638", "Name": "Thị trấn KBang", "Level": "Thị trấn" },
          { "Id": "23641", "Name": "Xã Kon Pne", "Level": "Xã" },
          { "Id": "23644", "Name": "Xã Đăk Roong", "Level": "Xã" },
          { "Id": "23647", "Name": "Xã Sơn Lang", "Level": "Xã" },
          { "Id": "23650", "Name": "Xã KRong", "Level": "Xã" },
          { "Id": "23653", "Name": "Xã Sơ Pai", "Level": "Xã" },
          { "Id": "23656", "Name": "Xã Lơ Ku", "Level": "Xã" },
          { "Id": "23659", "Name": "Xã Đông", "Level": "Xã" },
          { "Id": "23660", "Name": "Xã Đak SMar", "Level": "Xã" },
          { "Id": "23662", "Name": "Xã Nghĩa An", "Level": "Xã" },
          { "Id": "23665", "Name": "Xã Tơ Tung", "Level": "Xã" },
          { "Id": "23668", "Name": "Xã Kông Lơng Khơng", "Level": "Xã" },
          { "Id": "23671", "Name": "Xã Kông Pla", "Level": "Xã" },
          { "Id": "23674", "Name": "Xã Đăk HLơ", "Level": "Xã" }
        ]
      },
      {
        "Id": "626",
        "Name": "Huyện Đăk Đoa",
        "Wards": [
          { "Id": "23677", "Name": "Thị trấn Đăk Đoa", "Level": "Thị trấn" },
          { "Id": "23680", "Name": "Xã Hà Đông", "Level": "Xã" },
          { "Id": "23683", "Name": "Xã Đăk Sơmei", "Level": "Xã" },
          { "Id": "23684", "Name": "Xã Đăk Krong", "Level": "Xã" },
          { "Id": "23686", "Name": "Xã Hải Yang", "Level": "Xã" },
          { "Id": "23689", "Name": "Xã Kon Gang", "Level": "Xã" },
          { "Id": "23692", "Name": "Xã Hà Bầu", "Level": "Xã" },
          { "Id": "23695", "Name": "Xã Nam Yang", "Level": "Xã" },
          { "Id": "23698", "Name": "Xã K' Dang", "Level": "Xã" },
          { "Id": "23701", "Name": "Xã H' Neng", "Level": "Xã" },
          { "Id": "23704", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "23707", "Name": "Xã Glar", "Level": "Xã" },
          { "Id": "23710", "Name": "Xã A Dơk", "Level": "Xã" },
          { "Id": "23713", "Name": "Xã Trang", "Level": "Xã" },
          { "Id": "23714", "Name": "Xã HNol", "Level": "Xã" },
          { "Id": "23716", "Name": "Xã Ia Pết", "Level": "Xã" },
          { "Id": "23719", "Name": "Xã Ia Băng", "Level": "Xã" }
        ]
      },
      {
        "Id": "627",
        "Name": "Huyện Chư Păh",
        "Wards": [
          { "Id": "23722", "Name": "Thị trấn Phú Hòa", "Level": "Thị trấn" },
          { "Id": "23725", "Name": "Xã Hà Tây", "Level": "Xã" },
          { "Id": "23728", "Name": "Xã Ia Khươl", "Level": "Xã" },
          { "Id": "23731", "Name": "Xã Ia Phí", "Level": "Xã" },
          { "Id": "23734", "Name": "Thị trấn Ia Ly", "Level": "Thị trấn" },
          { "Id": "23737", "Name": "Xã Ia Mơ Nông", "Level": "Xã" },
          { "Id": "23738", "Name": "Xã Ia Kreng", "Level": "Xã" },
          { "Id": "23740", "Name": "Xã Đăk Tơ Ver", "Level": "Xã" },
          { "Id": "23743", "Name": "Xã Hòa Phú", "Level": "Xã" },
          { "Id": "23746", "Name": "Xã Chư Đăng Ya", "Level": "Xã" },
          { "Id": "23749", "Name": "Xã Ia Ka", "Level": "Xã" },
          { "Id": "23752", "Name": "Xã Ia Nhin", "Level": "Xã" },
          { "Id": "23755", "Name": "Xã Nghĩa Hòa", "Level": "Xã" },
          { "Id": "23761", "Name": "Xã Nghĩa Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "628",
        "Name": "Huyện Ia Grai",
        "Wards": [
          { "Id": "23764", "Name": "Thị trấn Ia Kha", "Level": "Thị trấn" },
          { "Id": "23767", "Name": "Xã Ia Sao", "Level": "Xã" },
          { "Id": "23768", "Name": "Xã Ia Yok", "Level": "Xã" },
          { "Id": "23770", "Name": "Xã Ia Hrung", "Level": "Xã" },
          { "Id": "23771", "Name": "Xã Ia Bă", "Level": "Xã" },
          { "Id": "23773", "Name": "Xã Ia Khai", "Level": "Xã" },
          { "Id": "23776", "Name": "Xã Ia KRai", "Level": "Xã" },
          { "Id": "23778", "Name": "Xã Ia Grăng", "Level": "Xã" },
          { "Id": "23779", "Name": "Xã Ia Tô", "Level": "Xã" },
          { "Id": "23782", "Name": "Xã Ia O", "Level": "Xã" },
          { "Id": "23785", "Name": "Xã Ia Dêr", "Level": "Xã" },
          { "Id": "23788", "Name": "Xã Ia Chia", "Level": "Xã" },
          { "Id": "23791", "Name": "Xã Ia Pếch", "Level": "Xã" }
        ]
      },
      {
        "Id": "629",
        "Name": "Huyện Mang Yang",
        "Wards": [
          { "Id": "23794", "Name": "Thị trấn Kon Dơng", "Level": "Thị trấn" },
          { "Id": "23797", "Name": "Xã Ayun", "Level": "Xã" },
          { "Id": "23798", "Name": "Xã Đak Jơ Ta", "Level": "Xã" },
          { "Id": "23799", "Name": "Xã Đak Ta Ley", "Level": "Xã" },
          { "Id": "23800", "Name": "Xã Hra", "Level": "Xã" },
          { "Id": "23803", "Name": "Xã Đăk Yă", "Level": "Xã" },
          { "Id": "23806", "Name": "Xã Đăk Djrăng", "Level": "Xã" },
          { "Id": "23809", "Name": "Xã Lơ Pang", "Level": "Xã" },
          { "Id": "23812", "Name": "Xã Kon Thụp", "Level": "Xã" },
          { "Id": "23815", "Name": "Xã Đê Ar", "Level": "Xã" },
          { "Id": "23818", "Name": "Xã Kon Chiêng", "Level": "Xã" },
          { "Id": "23821", "Name": "Xã Đăk Trôi", "Level": "Xã" }
        ]
      },
      {
        "Id": "630",
        "Name": "Huyện Kông Chro",
        "Wards": [
          { "Id": "23824", "Name": "Thị trấn Kông Chro", "Level": "Thị trấn" },
          { "Id": "23827", "Name": "Xã Chư Krêy", "Level": "Xã" },
          { "Id": "23830", "Name": "Xã An Trung", "Level": "Xã" },
          { "Id": "23833", "Name": "Xã Kông Yang", "Level": "Xã" },
          { "Id": "23836", "Name": "Xã Đăk Tơ Pang", "Level": "Xã" },
          { "Id": "23839", "Name": "Xã SRó", "Level": "Xã" },
          { "Id": "23840", "Name": "Xã Đắk Kơ Ning", "Level": "Xã" },
          { "Id": "23842", "Name": "Xã Đăk Song", "Level": "Xã" },
          { "Id": "23843", "Name": "Xã Đăk Pling", "Level": "Xã" },
          { "Id": "23845", "Name": "Xã Yang Trung", "Level": "Xã" },
          { "Id": "23846", "Name": "Xã Đăk Pơ Pho", "Level": "Xã" },
          { "Id": "23848", "Name": "Xã Ya Ma", "Level": "Xã" },
          { "Id": "23851", "Name": "Xã Chơ Long", "Level": "Xã" },
          { "Id": "23854", "Name": "Xã Yang Nam", "Level": "Xã" }
        ]
      },
      {
        "Id": "631",
        "Name": "Huyện Đức Cơ",
        "Wards": [
          { "Id": "23857", "Name": "Thị trấn Chư Ty", "Level": "Thị trấn" },
          { "Id": "23860", "Name": "Xã Ia Dơk", "Level": "Xã" },
          { "Id": "23863", "Name": "Xã Ia Krêl", "Level": "Xã" },
          { "Id": "23866", "Name": "Xã Ia Din", "Level": "Xã" },
          { "Id": "23869", "Name": "Xã Ia Kla", "Level": "Xã" },
          { "Id": "23872", "Name": "Xã Ia Dom", "Level": "Xã" },
          { "Id": "23875", "Name": "Xã Ia Lang", "Level": "Xã" },
          { "Id": "23878", "Name": "Xã Ia Kriêng", "Level": "Xã" },
          { "Id": "23881", "Name": "Xã Ia Pnôn", "Level": "Xã" },
          { "Id": "23884", "Name": "Xã Ia Nan", "Level": "Xã" }
        ]
      },
      {
        "Id": "632",
        "Name": "Huyện Chư Prông",
        "Wards": [
          { "Id": "23887", "Name": "Thị trấn Chư Prông", "Level": "Thị trấn" },
          { "Id": "23888", "Name": "Xã Ia Kly", "Level": "Xã" },
          { "Id": "23890", "Name": "Xã Bình Giáo", "Level": "Xã" },
          { "Id": "23893", "Name": "Xã Ia Drăng", "Level": "Xã" },
          { "Id": "23896", "Name": "Xã Thăng Hưng", "Level": "Xã" },
          { "Id": "23899", "Name": "Xã Bàu Cạn", "Level": "Xã" },
          { "Id": "23902", "Name": "Xã Ia Phìn", "Level": "Xã" },
          { "Id": "23905", "Name": "Xã Ia Băng", "Level": "Xã" },
          { "Id": "23908", "Name": "Xã Ia Tôr", "Level": "Xã" },
          { "Id": "23911", "Name": "Xã Ia Boòng", "Level": "Xã" },
          { "Id": "23914", "Name": "Xã Ia O", "Level": "Xã" },
          { "Id": "23917", "Name": "Xã Ia Púch", "Level": "Xã" },
          { "Id": "23920", "Name": "Xã Ia Me", "Level": "Xã" },
          { "Id": "23923", "Name": "Xã Ia Vê", "Level": "Xã" },
          { "Id": "23924", "Name": "Xã Ia Bang", "Level": "Xã" },
          { "Id": "23926", "Name": "Xã Ia Pia", "Level": "Xã" },
          { "Id": "23929", "Name": "Xã Ia Ga", "Level": "Xã" },
          { "Id": "23932", "Name": "Xã Ia Lâu", "Level": "Xã" },
          { "Id": "23935", "Name": "Xã Ia Piơr", "Level": "Xã" },
          { "Id": "23938", "Name": "Xã Ia Mơ", "Level": "Xã" }
        ]
      },
      {
        "Id": "633",
        "Name": "Huyện Chư Sê",
        "Wards": [
          { "Id": "23941", "Name": "Thị trấn Chư Sê", "Level": "Thị trấn" },
          { "Id": "23944", "Name": "Xã Ia Tiêm", "Level": "Xã" },
          { "Id": "23945", "Name": "Xã Chư Pơng", "Level": "Xã" },
          { "Id": "23946", "Name": "Xã Bar Măih", "Level": "Xã" },
          { "Id": "23947", "Name": "Xã Bờ Ngoong", "Level": "Xã" },
          { "Id": "23950", "Name": "Xã Ia Glai", "Level": "Xã" },
          { "Id": "23953", "Name": "Xã AL Bá", "Level": "Xã" },
          { "Id": "23954", "Name": "Xã Kông HTok", "Level": "Xã" },
          { "Id": "23956", "Name": "Xã AYun", "Level": "Xã" },
          { "Id": "23959", "Name": "Xã Ia HLốp", "Level": "Xã" },
          { "Id": "23962", "Name": "Xã Ia Blang", "Level": "Xã" },
          { "Id": "23965", "Name": "Xã Dun", "Level": "Xã" },
          { "Id": "23966", "Name": "Xã Ia Pal", "Level": "Xã" },
          { "Id": "23968", "Name": "Xã H Bông", "Level": "Xã" },
          { "Id": "23977", "Name": "Xã Ia Ko", "Level": "Xã" }
        ]
      },
      {
        "Id": "634",
        "Name": "Huyện Đăk Pơ",
        "Wards": [
          { "Id": "23989", "Name": "Xã Hà Tam", "Level": "Xã" },
          { "Id": "23992", "Name": "Xã An Thành", "Level": "Xã" },
          { "Id": "23995", "Name": "Thị trấn Đak Pơ", "Level": "Thị trấn" },
          { "Id": "23998", "Name": "Xã Yang Bắc", "Level": "Xã" },
          { "Id": "24001", "Name": "Xã Cư An", "Level": "Xã" },
          { "Id": "24004", "Name": "Xã Tân An", "Level": "Xã" },
          { "Id": "24007", "Name": "Xã Phú An", "Level": "Xã" },
          { "Id": "24010", "Name": "Xã Ya Hội", "Level": "Xã" }
        ]
      },
      {
        "Id": "635",
        "Name": "Huyện Ia Pa",
        "Wards": [
          { "Id": "24013", "Name": "Xã Pờ Tó", "Level": "Xã" },
          { "Id": "24016", "Name": "Xã Chư Răng", "Level": "Xã" },
          { "Id": "24019", "Name": "Xã Ia KDăm", "Level": "Xã" },
          { "Id": "24022", "Name": "Xã Kim Tân", "Level": "Xã" },
          { "Id": "24025", "Name": "Xã Chư Mố", "Level": "Xã" },
          { "Id": "24028", "Name": "Xã Ia Tul", "Level": "Xã" },
          { "Id": "24031", "Name": "Xã Ia Ma Rơn", "Level": "Xã" },
          { "Id": "24034", "Name": "Xã Ia Broăi", "Level": "Xã" },
          { "Id": "24037", "Name": "Xã Ia Trok", "Level": "Xã" }
        ]
      },
      {
        "Id": "637",
        "Name": "Huyện Krông Pa",
        "Wards": [
          { "Id": "24076", "Name": "Thị trấn Phú Túc", "Level": "Thị trấn" },
          { "Id": "24079", "Name": "Xã Ia RSai", "Level": "Xã" },
          { "Id": "24082", "Name": "Xã Ia RSươm", "Level": "Xã" },
          { "Id": "24085", "Name": "Xã Chư Gu", "Level": "Xã" },
          { "Id": "24088", "Name": "Xã Đất Bằng", "Level": "Xã" },
          { "Id": "24091", "Name": "Xã Ia Mláh", "Level": "Xã" },
          { "Id": "24094", "Name": "Xã Chư Drăng", "Level": "Xã" },
          { "Id": "24097", "Name": "Xã Phú Cần", "Level": "Xã" },
          { "Id": "24100", "Name": "Xã Ia HDreh", "Level": "Xã" },
          { "Id": "24103", "Name": "Xã Ia RMok", "Level": "Xã" },
          { "Id": "24106", "Name": "Xã Chư Ngọc", "Level": "Xã" },
          { "Id": "24109", "Name": "Xã Uar", "Level": "Xã" },
          { "Id": "24112", "Name": "Xã Chư Rcăm", "Level": "Xã" },
          { "Id": "24115", "Name": "Xã Krông Năng", "Level": "Xã" }
        ]
      },
      {
        "Id": "638",
        "Name": "Huyện Phú Thiện",
        "Wards": [
          { "Id": "24043", "Name": "Thị trấn Phú Thiện", "Level": "Thị trấn" },
          { "Id": "24046", "Name": "Xã Chư A Thai", "Level": "Xã" },
          { "Id": "24048", "Name": "Xã Ayun Hạ", "Level": "Xã" },
          { "Id": "24049", "Name": "Xã Ia Ake", "Level": "Xã" },
          { "Id": "24052", "Name": "Xã Ia Sol", "Level": "Xã" },
          { "Id": "24055", "Name": "Xã Ia Piar", "Level": "Xã" },
          { "Id": "24058", "Name": "Xã Ia Peng", "Level": "Xã" },
          { "Id": "24060", "Name": "Xã Chrôh Pơnan", "Level": "Xã" },
          { "Id": "24061", "Name": "Xã Ia Hiao", "Level": "Xã" },
          { "Id": "24067", "Name": "Xã Ia Yeng", "Level": "Xã" }
        ]
      },
      {
        "Id": "639",
        "Name": "Huyện Chư Pưh",
        "Wards": [
          { "Id": "23942", "Name": "Thị trấn Nhơn Hoà", "Level": "Thị trấn" },
          { "Id": "23971", "Name": "Xã Ia Hrú", "Level": "Xã" },
          { "Id": "23972", "Name": "Xã Ia Rong", "Level": "Xã" },
          { "Id": "23974", "Name": "Xã Ia Dreng", "Level": "Xã" },
          { "Id": "23978", "Name": "Xã Ia Hla", "Level": "Xã" },
          { "Id": "23980", "Name": "Xã Chư Don", "Level": "Xã" },
          { "Id": "23983", "Name": "Xã Ia Phang", "Level": "Xã" },
          { "Id": "23986", "Name": "Xã Ia Le", "Level": "Xã" },
          { "Id": "23987", "Name": "Xã Ia BLứ", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "66",
    "Name": "Tỉnh Đắk Lắk",
    "Districts": [
      {
        "Id": "643",
        "Name": "Thành phố Buôn Ma Thuột",
        "Wards": [
          { "Id": "24118", "Name": "Phường Tân Lập", "Level": "Phường" },
          { "Id": "24121", "Name": "Phường Tân Hòa", "Level": "Phường" },
          { "Id": "24124", "Name": "Phường Tân An", "Level": "Phường" },
          { "Id": "24127", "Name": "Phường Thống Nhất", "Level": "Phường" },
          { "Id": "24130", "Name": "Phường Thành Nhất", "Level": "Phường" },
          { "Id": "24133", "Name": "Phường Thắng Lợi", "Level": "Phường" },
          { "Id": "24136", "Name": "Phường Tân Lợi", "Level": "Phường" },
          { "Id": "24139", "Name": "Phường Thành Công", "Level": "Phường" },
          { "Id": "24142", "Name": "Phường Tân Thành", "Level": "Phường" },
          { "Id": "24145", "Name": "Phường Tân Tiến", "Level": "Phường" },
          { "Id": "24148", "Name": "Phường Tự An", "Level": "Phường" },
          { "Id": "24151", "Name": "Phường Ea Tam", "Level": "Phường" },
          { "Id": "24154", "Name": "Phường Khánh Xuân", "Level": "Phường" },
          { "Id": "24157", "Name": "Xã Hòa Thuận", "Level": "Xã" },
          { "Id": "24160", "Name": "Xã Cư ÊBur", "Level": "Xã" },
          { "Id": "24163", "Name": "Xã Ea Tu", "Level": "Xã" },
          { "Id": "24166", "Name": "Xã Hòa Thắng", "Level": "Xã" },
          { "Id": "24169", "Name": "Xã Ea Kao", "Level": "Xã" },
          { "Id": "24172", "Name": "Xã Hòa Phú", "Level": "Xã" },
          { "Id": "24175", "Name": "Xã Hòa Khánh", "Level": "Xã" },
          { "Id": "24178", "Name": "Xã Hòa Xuân", "Level": "Xã" }
        ]
      },
      {
        "Id": "644",
        "Name": "Thị Xã Buôn Hồ",
        "Wards": [
          { "Id": "24305", "Name": "Phường An Lạc", "Level": "Phường" },
          { "Id": "24308", "Name": "Phường An Bình", "Level": "Phường" },
          { "Id": "24311", "Name": "Phường Thiện An", "Level": "Phường" },
          { "Id": "24318", "Name": "Phường Đạt Hiếu", "Level": "Phường" },
          { "Id": "24322", "Name": "Phường Đoàn Kết", "Level": "Phường" },
          { "Id": "24325", "Name": "Xã Ea Blang", "Level": "Xã" },
          { "Id": "24328", "Name": "Xã Ea Drông", "Level": "Xã" },
          { "Id": "24331", "Name": "Phường Thống Nhất", "Level": "Phường" },
          { "Id": "24332", "Name": "Phường Bình Tân", "Level": "Phường" },
          { "Id": "24334", "Name": "Xã Ea Siên", "Level": "Xã" },
          { "Id": "24337", "Name": "Xã Bình Thuận", "Level": "Xã" },
          { "Id": "24340", "Name": "Xã Cư Bao", "Level": "Xã" }
        ]
      },
      {
        "Id": "645",
        "Name": "Huyện Ea H'leo",
        "Wards": [
          { "Id": "24181", "Name": "Thị trấn Ea Drăng", "Level": "Thị trấn" },
          { "Id": "24184", "Name": "Xã Ea H'leo", "Level": "Xã" },
          { "Id": "24187", "Name": "Xã Ea Sol", "Level": "Xã" },
          { "Id": "24190", "Name": "Xã Ea Ral", "Level": "Xã" },
          { "Id": "24193", "Name": "Xã Ea Wy", "Level": "Xã" },
          { "Id": "24194", "Name": "Xã Cư A Mung", "Level": "Xã" },
          { "Id": "24196", "Name": "Xã Cư Mốt", "Level": "Xã" },
          { "Id": "24199", "Name": "Xã Ea Hiao", "Level": "Xã" },
          { "Id": "24202", "Name": "Xã Ea Khal", "Level": "Xã" },
          { "Id": "24205", "Name": "Xã Dliê Yang", "Level": "Xã" },
          { "Id": "24207", "Name": "Xã Ea Tir", "Level": "Xã" },
          { "Id": "24208", "Name": "Xã Ea Nam", "Level": "Xã" }
        ]
      },
      {
        "Id": "646",
        "Name": "Huyện Ea Súp",
        "Wards": [
          { "Id": "24211", "Name": "Thị trấn Ea Súp", "Level": "Thị trấn" },
          { "Id": "24214", "Name": "Xã Ia Lốp", "Level": "Xã" },
          { "Id": "24215", "Name": "Xã Ia JLơi", "Level": "Xã" },
          { "Id": "24217", "Name": "Xã Ea Rốk", "Level": "Xã" },
          { "Id": "24220", "Name": "Xã Ya Tờ Mốt", "Level": "Xã" },
          { "Id": "24221", "Name": "Xã Ia RVê", "Level": "Xã" },
          { "Id": "24223", "Name": "Xã Ea Lê", "Level": "Xã" },
          { "Id": "24226", "Name": "Xã Cư KBang", "Level": "Xã" },
          { "Id": "24229", "Name": "Xã Ea Bung", "Level": "Xã" },
          { "Id": "24232", "Name": "Xã Cư M'Lan", "Level": "Xã" }
        ]
      },
      {
        "Id": "647",
        "Name": "Huyện Buôn Đôn",
        "Wards": [
          { "Id": "24235", "Name": "Xã Krông Na", "Level": "Xã" },
          { "Id": "24238", "Name": "Xã Ea Huar", "Level": "Xã" },
          { "Id": "24241", "Name": "Xã Ea Wer", "Level": "Xã" },
          { "Id": "24244", "Name": "Xã Tân Hoà", "Level": "Xã" },
          { "Id": "24247", "Name": "Xã Cuôr KNia", "Level": "Xã" },
          { "Id": "24250", "Name": "Xã Ea Bar", "Level": "Xã" },
          { "Id": "24253", "Name": "Xã Ea Nuôl", "Level": "Xã" }
        ]
      },
      {
        "Id": "648",
        "Name": "Huyện Cư M'gar",
        "Wards": [
          { "Id": "24256", "Name": "Thị trấn Ea Pốk", "Level": "Thị trấn" },
          { "Id": "24259", "Name": "Thị trấn Quảng Phú", "Level": "Thị trấn" },
          { "Id": "24262", "Name": "Xã Quảng Tiến", "Level": "Xã" },
          { "Id": "24264", "Name": "Xã Ea Kuêh", "Level": "Xã" },
          { "Id": "24265", "Name": "Xã Ea Kiết", "Level": "Xã" },
          { "Id": "24268", "Name": "Xã Ea Tar", "Level": "Xã" },
          { "Id": "24271", "Name": "Xã Cư Dliê M'nông", "Level": "Xã" },
          { "Id": "24274", "Name": "Xã Ea H'đinh", "Level": "Xã" },
          { "Id": "24277", "Name": "Xã Ea Tul", "Level": "Xã" },
          { "Id": "24280", "Name": "Xã Ea KPam", "Level": "Xã" },
          { "Id": "24283", "Name": "Xã Ea M'DRóh", "Level": "Xã" },
          { "Id": "24286", "Name": "Xã Quảng Hiệp", "Level": "Xã" },
          { "Id": "24289", "Name": "Xã Cư M'gar", "Level": "Xã" },
          { "Id": "24292", "Name": "Xã Ea D'Rơng", "Level": "Xã" },
          { "Id": "24295", "Name": "Xã Ea M'nang", "Level": "Xã" },
          { "Id": "24298", "Name": "Xã Cư Suê", "Level": "Xã" },
          { "Id": "24301", "Name": "Xã Cuor Đăng", "Level": "Xã" }
        ]
      },
      {
        "Id": "649",
        "Name": "Huyện Krông Búk",
        "Wards": [
          { "Id": "24307", "Name": "Xã Cư Né", "Level": "Xã" },
          { "Id": "24310", "Name": "Xã Chư KBô", "Level": "Xã" },
          { "Id": "24313", "Name": "Xã Cư Pơng", "Level": "Xã" },
          { "Id": "24314", "Name": "Xã Ea Sin", "Level": "Xã" },
          { "Id": "24316", "Name": "Xã Pơng Drang", "Level": "Xã" },
          { "Id": "24317", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "24319", "Name": "Xã Ea Ngai", "Level": "Xã" }
        ]
      },
      {
        "Id": "650",
        "Name": "Huyện Krông Năng",
        "Wards": [
          { "Id": "24343", "Name": "Thị trấn Krông Năng", "Level": "Thị trấn" },
          { "Id": "24346", "Name": "Xã ĐLiê Ya", "Level": "Xã" },
          { "Id": "24349", "Name": "Xã Ea Tóh", "Level": "Xã" },
          { "Id": "24352", "Name": "Xã Ea Tam", "Level": "Xã" },
          { "Id": "24355", "Name": "Xã Phú Lộc", "Level": "Xã" },
          { "Id": "24358", "Name": "Xã Tam Giang", "Level": "Xã" },
          { "Id": "24359", "Name": "Xã Ea Puk", "Level": "Xã" },
          { "Id": "24360", "Name": "Xã Ea Dăh", "Level": "Xã" },
          { "Id": "24361", "Name": "Xã Ea Hồ", "Level": "Xã" },
          { "Id": "24364", "Name": "Xã Phú Xuân", "Level": "Xã" },
          { "Id": "24367", "Name": "Xã Cư Klông", "Level": "Xã" },
          { "Id": "24370", "Name": "Xã Ea Tân", "Level": "Xã" }
        ]
      },
      {
        "Id": "651",
        "Name": "Huyện Ea Kar",
        "Wards": [
          { "Id": "24373", "Name": "Thị trấn Ea Kar", "Level": "Thị trấn" },
          { "Id": "24376", "Name": "Thị trấn Ea Knốp", "Level": "Thị trấn" },
          { "Id": "24379", "Name": "Xã Ea Sô", "Level": "Xã" },
          { "Id": "24380", "Name": "Xã Ea Sar", "Level": "Xã" },
          { "Id": "24382", "Name": "Xã Xuân Phú", "Level": "Xã" },
          { "Id": "24385", "Name": "Xã Cư Huê", "Level": "Xã" },
          { "Id": "24388", "Name": "Xã Ea Tih", "Level": "Xã" },
          { "Id": "24391", "Name": "Xã Ea Đar", "Level": "Xã" },
          { "Id": "24394", "Name": "Xã Ea Kmút", "Level": "Xã" },
          { "Id": "24397", "Name": "Xã Cư Ni", "Level": "Xã" },
          { "Id": "24400", "Name": "Xã Ea Păl", "Level": "Xã" },
          { "Id": "24401", "Name": "Xã Cư Prông", "Level": "Xã" },
          { "Id": "24403", "Name": "Xã Ea Ô", "Level": "Xã" },
          { "Id": "24404", "Name": "Xã Cư ELang", "Level": "Xã" },
          { "Id": "24406", "Name": "Xã Cư Bông", "Level": "Xã" },
          { "Id": "24409", "Name": "Xã Cư Jang", "Level": "Xã" }
        ]
      },
      {
        "Id": "652",
        "Name": "Huyện M'Đrắk",
        "Wards": [
          { "Id": "24412", "Name": "Thị trấn M'Đrắk", "Level": "Thị trấn" },
          { "Id": "24415", "Name": "Xã Cư Prao", "Level": "Xã" },
          { "Id": "24418", "Name": "Xã Ea Pil", "Level": "Xã" },
          { "Id": "24421", "Name": "Xã Ea Lai", "Level": "Xã" },
          { "Id": "24424", "Name": "Xã Ea H'MLay", "Level": "Xã" },
          { "Id": "24427", "Name": "Xã Krông Jing", "Level": "Xã" },
          { "Id": "24430", "Name": "Xã Ea M' Doal", "Level": "Xã" },
          { "Id": "24433", "Name": "Xã Ea Riêng", "Level": "Xã" },
          { "Id": "24436", "Name": "Xã Cư M'ta", "Level": "Xã" },
          { "Id": "24439", "Name": "Xã Cư K Róa", "Level": "Xã" },
          { "Id": "24442", "Name": "Xã Krông Á", "Level": "Xã" },
          { "Id": "24444", "Name": "Xã Cư San", "Level": "Xã" },
          { "Id": "24445", "Name": "Xã Ea Trang", "Level": "Xã" }
        ]
      },
      {
        "Id": "653",
        "Name": "Huyện Krông Bông",
        "Wards": [
          { "Id": "24448", "Name": "Thị trấn Krông Kmar", "Level": "Thị trấn" },
          { "Id": "24451", "Name": "Xã Dang Kang", "Level": "Xã" },
          { "Id": "24454", "Name": "Xã Cư KTy", "Level": "Xã" },
          { "Id": "24457", "Name": "Xã Hòa Thành", "Level": "Xã" },
          { "Id": "24460", "Name": "Xã Hòa Tân", "Level": "Xã" },
          { "Id": "24463", "Name": "Xã Hòa Phong", "Level": "Xã" },
          { "Id": "24466", "Name": "Xã Hòa Lễ", "Level": "Xã" },
          { "Id": "24469", "Name": "Xã Yang Reh", "Level": "Xã" },
          { "Id": "24472", "Name": "Xã Ea Trul", "Level": "Xã" },
          { "Id": "24475", "Name": "Xã Khuê Ngọc Điền", "Level": "Xã" },
          { "Id": "24478", "Name": "Xã Cư Pui", "Level": "Xã" },
          { "Id": "24481", "Name": "Xã Hòa Sơn", "Level": "Xã" },
          { "Id": "24484", "Name": "Xã Cư Drăm", "Level": "Xã" },
          { "Id": "24487", "Name": "Xã Yang Mao", "Level": "Xã" }
        ]
      },
      {
        "Id": "654",
        "Name": "Huyện Krông Pắc",
        "Wards": [
          { "Id": "24490", "Name": "Thị trấn Phước An", "Level": "Thị trấn" },
          { "Id": "24493", "Name": "Xã KRông Búk", "Level": "Xã" },
          { "Id": "24496", "Name": "Xã Ea Kly", "Level": "Xã" },
          { "Id": "24499", "Name": "Xã Ea Kênh", "Level": "Xã" },
          { "Id": "24502", "Name": "Xã Ea Phê", "Level": "Xã" },
          { "Id": "24505", "Name": "Xã Ea KNuec", "Level": "Xã" },
          { "Id": "24508", "Name": "Xã Ea Yông", "Level": "Xã" },
          { "Id": "24511", "Name": "Xã Hòa An", "Level": "Xã" },
          { "Id": "24514", "Name": "Xã Ea Kuăng", "Level": "Xã" },
          { "Id": "24517", "Name": "Xã Hòa Đông", "Level": "Xã" },
          { "Id": "24520", "Name": "Xã Ea Hiu", "Level": "Xã" },
          { "Id": "24523", "Name": "Xã Hòa Tiến", "Level": "Xã" },
          { "Id": "24526", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "24529", "Name": "Xã Vụ Bổn", "Level": "Xã" },
          { "Id": "24532", "Name": "Xã Ea Uy", "Level": "Xã" },
          { "Id": "24535", "Name": "Xã Ea Yiêng", "Level": "Xã" }
        ]
      },
      {
        "Id": "655",
        "Name": "Huyện Krông A Na",
        "Wards": [
          { "Id": "24538", "Name": "Thị trấn Buôn Trấp", "Level": "Thị trấn" },
          { "Id": "24556", "Name": "Xã Dray Sáp", "Level": "Xã" },
          { "Id": "24559", "Name": "Xã Ea Na", "Level": "Xã" },
          { "Id": "24565", "Name": "Xã Ea Bông", "Level": "Xã" },
          { "Id": "24568", "Name": "Xã Băng A Drênh", "Level": "Xã" },
          { "Id": "24571", "Name": "Xã Dur KMăl", "Level": "Xã" },
          { "Id": "24574", "Name": "Xã Bình Hòa", "Level": "Xã" },
          { "Id": "24577", "Name": "Xã Quảng Điền", "Level": "Xã" }
        ]
      },
      {
        "Id": "656",
        "Name": "Huyện Lắk",
        "Wards": [
          { "Id": "24580", "Name": "Thị trấn Liên Sơn", "Level": "Thị trấn" },
          { "Id": "24583", "Name": "Xã Yang Tao", "Level": "Xã" },
          { "Id": "24586", "Name": "Xã Bông Krang", "Level": "Xã" },
          { "Id": "24589", "Name": "Xã Đắk Liêng", "Level": "Xã" },
          { "Id": "24592", "Name": "Xã Buôn Triết", "Level": "Xã" },
          { "Id": "24595", "Name": "Xã Buôn Tría", "Level": "Xã" },
          { "Id": "24598", "Name": "Xã Đắk Phơi", "Level": "Xã" },
          { "Id": "24601", "Name": "Xã Đắk Nuê", "Level": "Xã" },
          { "Id": "24604", "Name": "Xã Krông Nô", "Level": "Xã" },
          { "Id": "24607", "Name": "Xã Nam Ka", "Level": "Xã" },
          { "Id": "24610", "Name": "Xã Ea R'Bin", "Level": "Xã" }
        ]
      },
      {
        "Id": "657",
        "Name": "Huyện Cư Kuin",
        "Wards": [
          { "Id": "24540", "Name": "Xã Ea Ning", "Level": "Xã" },
          { "Id": "24541", "Name": "Xã Cư Ê Wi", "Level": "Xã" },
          { "Id": "24544", "Name": "Xã Ea Ktur", "Level": "Xã" },
          { "Id": "24547", "Name": "Xã Ea Tiêu", "Level": "Xã" },
          { "Id": "24550", "Name": "Xã Ea BHốk", "Level": "Xã" },
          { "Id": "24553", "Name": "Xã Ea Hu", "Level": "Xã" },
          { "Id": "24561", "Name": "Xã Dray Bhăng", "Level": "Xã" },
          { "Id": "24562", "Name": "Xã Hòa Hiệp", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "67",
    "Name": "Tỉnh Đắk Nông",
    "Districts": [
      {
        "Id": "660",
        "Name": "Thành phố Gia Nghĩa",
        "Wards": [
          { "Id": "24611", "Name": "Phường Nghĩa Đức", "Level": "Phường" },
          { "Id": "24612", "Name": "Phường Nghĩa Thành", "Level": "Phường" },
          { "Id": "24614", "Name": "Phường Nghĩa Phú", "Level": "Phường" },
          { "Id": "24615", "Name": "Phường Nghĩa Tân", "Level": "Phường" },
          { "Id": "24617", "Name": "Phường Nghĩa Trung", "Level": "Phường" },
          { "Id": "24618", "Name": "Xã Đăk R'Moan", "Level": "Xã" },
          { "Id": "24619", "Name": "Phường Quảng Thành", "Level": "Phường" },
          { "Id": "24628", "Name": "Xã Đắk Nia", "Level": "Xã" }
        ]
      },
      {
        "Id": "661",
        "Name": "Huyện Đăk Glong",
        "Wards": [
          { "Id": "24616", "Name": "Xã Quảng Sơn", "Level": "Xã" },
          { "Id": "24620", "Name": "Xã Quảng Hoà", "Level": "Xã" },
          { "Id": "24622", "Name": "Xã Đắk Ha", "Level": "Xã" },
          { "Id": "24625", "Name": "Xã Đắk R'Măng", "Level": "Xã" },
          { "Id": "24631", "Name": "Xã Quảng Khê", "Level": "Xã" },
          { "Id": "24634", "Name": "Xã Đắk Plao", "Level": "Xã" },
          { "Id": "24637", "Name": "Xã Đắk Som", "Level": "Xã" }
        ]
      },
      {
        "Id": "662",
        "Name": "Huyện Cư Jút",
        "Wards": [
          { "Id": "24640", "Name": "Thị trấn Ea T'Ling", "Level": "Thị trấn" },
          { "Id": "24643", "Name": "Xã Đắk Wil", "Level": "Xã" },
          { "Id": "24646", "Name": "Xã Ea Pô", "Level": "Xã" },
          { "Id": "24649", "Name": "Xã Nam Dong", "Level": "Xã" },
          { "Id": "24652", "Name": "Xã Đắk DRông", "Level": "Xã" },
          { "Id": "24655", "Name": "Xã Tâm Thắng", "Level": "Xã" },
          { "Id": "24658", "Name": "Xã Cư Knia", "Level": "Xã" },
          { "Id": "24661", "Name": "Xã Trúc Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "663",
        "Name": "Huyện Đắk Mil",
        "Wards": [
          { "Id": "24664", "Name": "Thị trấn Đắk Mil", "Level": "Thị trấn" },
          { "Id": "24667", "Name": "Xã  Đắk Lao", "Level": "Xã" },
          { "Id": "24670", "Name": "Xã Đắk R'La", "Level": "Xã" },
          { "Id": "24673", "Name": "Xã Đắk Gằn", "Level": "Xã" },
          { "Id": "24676", "Name": "Xã Đức Mạnh", "Level": "Xã" },
          { "Id": "24677", "Name": "Xã Đắk N'Drót", "Level": "Xã" },
          { "Id": "24678", "Name": "Xã Long Sơn", "Level": "Xã" },
          { "Id": "24679", "Name": "Xã Đắk Sắk", "Level": "Xã" },
          { "Id": "24682", "Name": "Xã Thuận An", "Level": "Xã" },
          { "Id": "24685", "Name": "Xã Đức Minh", "Level": "Xã" }
        ]
      },
      {
        "Id": "664",
        "Name": "Huyện Krông Nô",
        "Wards": [
          { "Id": "24688", "Name": "Thị trấn Đắk Mâm", "Level": "Thị trấn" },
          { "Id": "24691", "Name": "Xã Đắk Sôr", "Level": "Xã" },
          { "Id": "24692", "Name": "Xã Nam Xuân", "Level": "Xã" },
          { "Id": "24694", "Name": "Xã Buôn Choah", "Level": "Xã" },
          { "Id": "24697", "Name": "Xã Nam Đà", "Level": "Xã" },
          { "Id": "24699", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "24700", "Name": "Xã Đắk Drô", "Level": "Xã" },
          { "Id": "24703", "Name": "Xã Nâm Nung", "Level": "Xã" },
          { "Id": "24706", "Name": "Xã Đức Xuyên", "Level": "Xã" },
          { "Id": "24709", "Name": "Xã Đắk Nang", "Level": "Xã" },
          { "Id": "24712", "Name": "Xã Quảng Phú", "Level": "Xã" },
          { "Id": "24715", "Name": "Xã Nâm N'Đir", "Level": "Xã" }
        ]
      },
      {
        "Id": "665",
        "Name": "Huyện Đắk Song",
        "Wards": [
          { "Id": "24717", "Name": "Thị trấn Đức An", "Level": "Thị trấn" },
          { "Id": "24718", "Name": "Xã Đắk Môl", "Level": "Xã" },
          { "Id": "24719", "Name": "Xã Đắk Hòa", "Level": "Xã" },
          { "Id": "24721", "Name": "Xã Nam Bình", "Level": "Xã" },
          { "Id": "24722", "Name": "Xã Thuận Hà", "Level": "Xã" },
          { "Id": "24724", "Name": "Xã Thuận Hạnh", "Level": "Xã" },
          { "Id": "24727", "Name": "Xã Đắk N'Dung", "Level": "Xã" },
          { "Id": "24728", "Name": "Xã Nâm N'Jang", "Level": "Xã" },
          { "Id": "24730", "Name": "Xã Trường Xuân", "Level": "Xã" }
        ]
      },
      {
        "Id": "666",
        "Name": "Huyện Đắk R'Lấp",
        "Wards": [
          { "Id": "24733", "Name": "Thị trấn Kiến Đức", "Level": "Thị trấn" },
          { "Id": "24745", "Name": "Xã Quảng Tín", "Level": "Xã" },
          { "Id": "24750", "Name": "Xã Đắk Wer", "Level": "Xã" },
          { "Id": "24751", "Name": "Xã Nhân Cơ", "Level": "Xã" },
          { "Id": "24754", "Name": "Xã Kiến Thành", "Level": "Xã" },
          { "Id": "24756", "Name": "Xã Nghĩa Thắng", "Level": "Xã" },
          { "Id": "24757", "Name": "Xã Đạo Nghĩa", "Level": "Xã" },
          { "Id": "24760", "Name": "Xã Đắk Sin", "Level": "Xã" },
          { "Id": "24761", "Name": "Xã Hưng Bình", "Level": "Xã" },
          { "Id": "24763", "Name": "Xã Đắk Ru", "Level": "Xã" },
          { "Id": "24766", "Name": "Xã Nhân Đạo", "Level": "Xã" }
        ]
      },
      {
        "Id": "667",
        "Name": "Huyện Tuy Đức",
        "Wards": [
          { "Id": "24736", "Name": "Xã Quảng Trực", "Level": "Xã" },
          { "Id": "24739", "Name": "Xã Đắk Búk So", "Level": "Xã" },
          { "Id": "24740", "Name": "Xã Quảng Tâm", "Level": "Xã" },
          { "Id": "24742", "Name": "Xã Đắk R'Tíh", "Level": "Xã" },
          { "Id": "24746", "Name": "Xã Đắk Ngo", "Level": "Xã" },
          { "Id": "24748", "Name": "Xã Quảng Tân", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "68",
    "Name": "Tỉnh Lâm Đồng",
    "Districts": [
      {
        "Id": "672",
        "Name": "Thành phố Đà Lạt",
        "Wards": [
          { "Id": "24769", "Name": "Phường 7", "Level": "Phường" },
          { "Id": "24772", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "24775", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "24778", "Name": "Phường 9", "Level": "Phường" },
          { "Id": "24781", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "24784", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "24787", "Name": "Phường 6", "Level": "Phường" },
          { "Id": "24790", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "24793", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "24796", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "24799", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "24802", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "24805", "Name": "Xã Xuân Thọ", "Level": "Xã" },
          { "Id": "24808", "Name": "Xã Tà Nung", "Level": "Xã" },
          { "Id": "24810", "Name": "Xã Trạm Hành", "Level": "Xã" },
          { "Id": "24811", "Name": "Xã Xuân Trường", "Level": "Xã" }
        ]
      },
      {
        "Id": "673",
        "Name": "Thành phố Bảo Lộc",
        "Wards": [
          { "Id": "24814", "Name": "Phường Lộc Phát", "Level": "Phường" },
          { "Id": "24817", "Name": "Phường Lộc Tiến", "Level": "Phường" },
          { "Id": "24820", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "24823", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "24826", "Name": "Phường B'lao", "Level": "Phường" },
          { "Id": "24829", "Name": "Phường Lộc Sơn", "Level": "Phường" },
          { "Id": "24832", "Name": "Xã Đạm Bri", "Level": "Xã" },
          { "Id": "24835", "Name": "Xã Lộc Thanh", "Level": "Xã" },
          { "Id": "24838", "Name": "Xã Lộc Nga", "Level": "Xã" },
          { "Id": "24841", "Name": "Xã Lộc Châu", "Level": "Xã" },
          { "Id": "24844", "Name": "Xã Đại Lào", "Level": "Xã" }
        ]
      },
      {
        "Id": "674",
        "Name": "Huyện Đam Rông",
        "Wards": [
          { "Id": "24853", "Name": "Xã Đạ Tông", "Level": "Xã" },
          { "Id": "24856", "Name": "Xã Đạ Long", "Level": "Xã" },
          { "Id": "24859", "Name": "Xã Đạ M' Rong", "Level": "Xã" },
          { "Id": "24874", "Name": "Xã Liêng Srônh", "Level": "Xã" },
          { "Id": "24875", "Name": "Xã Đạ Rsal", "Level": "Xã" },
          { "Id": "24877", "Name": "Xã Rô Men", "Level": "Xã" },
          { "Id": "24886", "Name": "Xã Phi Liêng", "Level": "Xã" },
          { "Id": "24889", "Name": "Xã Đạ K' Nàng", "Level": "Xã" }
        ]
      },
      {
        "Id": "675",
        "Name": "Huyện Lạc Dương",
        "Wards": [
          { "Id": "24846", "Name": "Thị trấn Lạc Dương", "Level": "Thị trấn" },
          { "Id": "24847", "Name": "Xã Đạ Chais", "Level": "Xã" },
          { "Id": "24848", "Name": "Xã Đạ Nhim", "Level": "Xã" },
          { "Id": "24850", "Name": "Xã Đưng KNớ", "Level": "Xã" },
          { "Id": "24862", "Name": "Xã Lát", "Level": "Xã" },
          { "Id": "24865", "Name": "Xã Đạ Sar", "Level": "Xã" }
        ]
      },
      {
        "Id": "676",
        "Name": "Huyện Lâm Hà",
        "Wards": [
          { "Id": "24868", "Name": "Thị trấn Nam Ban", "Level": "Thị trấn" },
          { "Id": "24871", "Name": "Thị trấn Đinh Văn", "Level": "Thị trấn" },
          { "Id": "24880", "Name": "Xã Phú Sơn", "Level": "Xã" },
          { "Id": "24883", "Name": "Xã Phi Tô", "Level": "Xã" },
          { "Id": "24892", "Name": "Xã Mê Linh", "Level": "Xã" },
          { "Id": "24895", "Name": "Xã Đạ Đờn", "Level": "Xã" },
          { "Id": "24898", "Name": "Xã Phúc Thọ", "Level": "Xã" },
          { "Id": "24901", "Name": "Xã Đông Thanh", "Level": "Xã" },
          { "Id": "24904", "Name": "Xã Gia Lâm", "Level": "Xã" },
          { "Id": "24907", "Name": "Xã Tân Thanh", "Level": "Xã" },
          { "Id": "24910", "Name": "Xã Tân Văn", "Level": "Xã" },
          { "Id": "24913", "Name": "Xã Hoài Đức", "Level": "Xã" },
          { "Id": "24916", "Name": "Xã Tân Hà", "Level": "Xã" },
          { "Id": "24919", "Name": "Xã Liên Hà", "Level": "Xã" },
          { "Id": "24922", "Name": "Xã Đan Phượng", "Level": "Xã" },
          { "Id": "24925", "Name": "Xã Nam Hà", "Level": "Xã" }
        ]
      },
      {
        "Id": "677",
        "Name": "Huyện Đơn Dương",
        "Wards": [
          { "Id": "24928", "Name": "Thị trấn D'Ran", "Level": "Thị trấn" },
          { "Id": "24931", "Name": "Thị trấn Thạnh Mỹ", "Level": "Thị trấn" },
          { "Id": "24934", "Name": "Xã Lạc Xuân", "Level": "Xã" },
          { "Id": "24937", "Name": "Xã Đạ Ròn", "Level": "Xã" },
          { "Id": "24940", "Name": "Xã Lạc Lâm", "Level": "Xã" },
          { "Id": "24943", "Name": "Xã Ka Đô", "Level": "Xã" },
          { "Id": "24946", "Name": "Xã Quảng Lập", "Level": "Xã" },
          { "Id": "24949", "Name": "Xã Ka Đơn", "Level": "Xã" },
          { "Id": "24952", "Name": "Xã Tu Tra", "Level": "Xã" },
          { "Id": "24955", "Name": "Xã Pró", "Level": "Xã" }
        ]
      },
      {
        "Id": "678",
        "Name": "Huyện Đức Trọng",
        "Wards": [
          { "Id": "24958", "Name": "Thị trấn Liên Nghĩa", "Level": "Thị trấn" },
          { "Id": "24961", "Name": "Xã Hiệp An", "Level": "Xã" },
          { "Id": "24964", "Name": "Xã Liên Hiệp", "Level": "Xã" },
          { "Id": "24967", "Name": "Xã Hiệp Thạnh", "Level": "Xã" },
          { "Id": "24970", "Name": "Xã Bình Thạnh", "Level": "Xã" },
          { "Id": "24973", "Name": "Xã N'Thol Hạ", "Level": "Xã" },
          { "Id": "24976", "Name": "Xã Tân Hội", "Level": "Xã" },
          { "Id": "24979", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "24982", "Name": "Xã Phú Hội", "Level": "Xã" },
          { "Id": "24985", "Name": "Xã Ninh Gia", "Level": "Xã" },
          { "Id": "24988", "Name": "Xã Tà Năng", "Level": "Xã" },
          { "Id": "24989", "Name": "Xã Đa Quyn", "Level": "Xã" },
          { "Id": "24991", "Name": "Xã Tà Hine", "Level": "Xã" },
          { "Id": "24994", "Name": "Xã Đà Loan", "Level": "Xã" },
          { "Id": "24997", "Name": "Xã Ninh Loan", "Level": "Xã" }
        ]
      },
      {
        "Id": "679",
        "Name": "Huyện Di Linh",
        "Wards": [
          { "Id": "25000", "Name": "Thị trấn Di Linh", "Level": "Thị trấn" },
          { "Id": "25003", "Name": "Xã Đinh Trang Thượng", "Level": "Xã" },
          { "Id": "25006", "Name": "Xã Tân Thượng", "Level": "Xã" },
          { "Id": "25007", "Name": "Xã Tân Lâm", "Level": "Xã" },
          { "Id": "25009", "Name": "Xã Tân Châu", "Level": "Xã" },
          { "Id": "25012", "Name": "Xã Tân Nghĩa", "Level": "Xã" },
          { "Id": "25015", "Name": "Xã Gia Hiệp", "Level": "Xã" },
          { "Id": "25018", "Name": "Xã Đinh Lạc", "Level": "Xã" },
          { "Id": "25021", "Name": "Xã Tam Bố", "Level": "Xã" },
          { "Id": "25024", "Name": "Xã Đinh Trang Hòa", "Level": "Xã" },
          { "Id": "25027", "Name": "Xã Liên Đầm", "Level": "Xã" },
          { "Id": "25030", "Name": "Xã Gung Ré", "Level": "Xã" },
          { "Id": "25033", "Name": "Xã Bảo Thuận", "Level": "Xã" },
          { "Id": "25036", "Name": "Xã Hòa Ninh", "Level": "Xã" },
          { "Id": "25039", "Name": "Xã Hòa Trung", "Level": "Xã" },
          { "Id": "25042", "Name": "Xã Hòa Nam", "Level": "Xã" },
          { "Id": "25045", "Name": "Xã Hòa Bắc", "Level": "Xã" },
          { "Id": "25048", "Name": "Xã Sơn Điền", "Level": "Xã" },
          { "Id": "25051", "Name": "Xã Gia Bắc", "Level": "Xã" }
        ]
      },
      {
        "Id": "680",
        "Name": "Huyện Bảo Lâm",
        "Wards": [
          { "Id": "25054", "Name": "Thị trấn Lộc Thắng", "Level": "Thị trấn" },
          { "Id": "25057", "Name": "Xã Lộc Bảo", "Level": "Xã" },
          { "Id": "25060", "Name": "Xã Lộc Lâm", "Level": "Xã" },
          { "Id": "25063", "Name": "Xã Lộc Phú", "Level": "Xã" },
          { "Id": "25066", "Name": "Xã Lộc Bắc", "Level": "Xã" },
          { "Id": "25069", "Name": "Xã B' Lá", "Level": "Xã" },
          { "Id": "25072", "Name": "Xã Lộc Ngãi", "Level": "Xã" },
          { "Id": "25075", "Name": "Xã Lộc Quảng", "Level": "Xã" },
          { "Id": "25078", "Name": "Xã Lộc Tân", "Level": "Xã" },
          { "Id": "25081", "Name": "Xã Lộc Đức", "Level": "Xã" },
          { "Id": "25084", "Name": "Xã Lộc An", "Level": "Xã" },
          { "Id": "25087", "Name": "Xã Tân Lạc", "Level": "Xã" },
          { "Id": "25090", "Name": "Xã Lộc Thành", "Level": "Xã" },
          { "Id": "25093", "Name": "Xã Lộc Nam", "Level": "Xã" }
        ]
      },
      {
        "Id": "681",
        "Name": "Huyện Đạ Huoai",
        "Wards": [
          { "Id": "25096", "Name": "Thị trấn Đạ M'ri", "Level": "Thị trấn" },
          { "Id": "25099", "Name": "Thị trấn Ma Đa Guôi", "Level": "Thị trấn" },
          { "Id": "25105", "Name": "Xã Hà Lâm", "Level": "Xã" },
          { "Id": "25108", "Name": "Xã Đạ Tồn", "Level": "Xã" },
          { "Id": "25111", "Name": "Xã Đạ Oai", "Level": "Xã" },
          { "Id": "25114", "Name": "Xã Đạ Ploa", "Level": "Xã" },
          { "Id": "25117", "Name": "Xã Ma Đa Guôi", "Level": "Xã" },
          { "Id": "25120", "Name": "Xã Đoàn Kết", "Level": "Xã" },
          { "Id": "25123", "Name": "Xã Phước Lộc", "Level": "Xã" }
        ]
      },
      {
        "Id": "682",
        "Name": "Huyện Đạ Tẻh",
        "Wards": [
          { "Id": "25126", "Name": "Thị trấn Đạ Tẻh", "Level": "Thị trấn" },
          { "Id": "25129", "Name": "Xã An Nhơn", "Level": "Xã" },
          { "Id": "25132", "Name": "Xã Quốc Oai", "Level": "Xã" },
          { "Id": "25135", "Name": "Xã Mỹ Đức", "Level": "Xã" },
          { "Id": "25138", "Name": "Xã Quảng Trị", "Level": "Xã" },
          { "Id": "25141", "Name": "Xã Đạ Lây", "Level": "Xã" },
          { "Id": "25147", "Name": "Xã Triệu Hải", "Level": "Xã" },
          { "Id": "25153", "Name": "Xã Đạ Kho", "Level": "Xã" },
          { "Id": "25156", "Name": "Xã Đạ Pal", "Level": "Xã" }
        ]
      },
      {
        "Id": "683",
        "Name": "Huyện Cát Tiên",
        "Wards": [
          { "Id": "25159", "Name": "Thị trấn Cát Tiên", "Level": "Thị trấn" },
          { "Id": "25162", "Name": "Xã Tiên Hoàng", "Level": "Xã" },
          { "Id": "25165", "Name": "Xã Phước Cát 2", "Level": "Xã" },
          { "Id": "25168", "Name": "Xã Gia Viễn", "Level": "Xã" },
          { "Id": "25171", "Name": "Xã Nam Ninh", "Level": "Xã" },
          { "Id": "25180", "Name": "Thị trấn Phước Cát ", "Level": "Thị trấn" },
          { "Id": "25183", "Name": "Xã Đức Phổ", "Level": "Xã" },
          { "Id": "25189", "Name": "Xã Quảng Ngãi", "Level": "Xã" },
          { "Id": "25192", "Name": "Xã Đồng Nai Thượng", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "70",
    "Name": "Tỉnh Bình Phước",
    "Districts": [
      {
        "Id": "688",
        "Name": "Thị xã Phước Long",
        "Wards": [
          { "Id": "25216", "Name": "Phường Thác Mơ", "Level": "Phường" },
          { "Id": "25217", "Name": "Phường Long Thủy", "Level": "Phường" },
          { "Id": "25219", "Name": "Phường Phước Bình", "Level": "Phường" },
          { "Id": "25220", "Name": "Phường Long Phước", "Level": "Phường" },
          { "Id": "25237", "Name": "Phường Sơn Giang", "Level": "Phường" },
          { "Id": "25245", "Name": "Xã Long Giang", "Level": "Xã" },
          { "Id": "25249", "Name": "Xã Phước Tín", "Level": "Xã" }
        ]
      },
      {
        "Id": "689",
        "Name": "Thành phố Đồng Xoài",
        "Wards": [
          { "Id": "25195", "Name": "Phường Tân Phú", "Level": "Phường" },
          { "Id": "25198", "Name": "Phường Tân Đồng", "Level": "Phường" },
          { "Id": "25201", "Name": "Phường Tân Bình", "Level": "Phường" },
          { "Id": "25204", "Name": "Phường Tân Xuân", "Level": "Phường" },
          { "Id": "25205", "Name": "Phường Tân Thiện", "Level": "Phường" },
          { "Id": "25207", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "25210", "Name": "Phường Tiến Thành", "Level": "Phường" },
          { "Id": "25213", "Name": "Xã Tiến Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "690",
        "Name": "Thị xã Bình Long",
        "Wards": [
          { "Id": "25320", "Name": "Phường Hưng Chiến", "Level": "Phường" },
          { "Id": "25324", "Name": "Phường An Lộc", "Level": "Phường" },
          { "Id": "25325", "Name": "Phường Phú Thịnh", "Level": "Phường" },
          { "Id": "25326", "Name": "Phường Phú Đức", "Level": "Phường" },
          { "Id": "25333", "Name": "Xã Thanh Lương", "Level": "Xã" },
          { "Id": "25336", "Name": "Xã Thanh Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "691",
        "Name": "Huyện Bù Gia Mập",
        "Wards": [
          { "Id": "25222", "Name": "Xã Bù Gia Mập", "Level": "Xã" },
          { "Id": "25225", "Name": "Xã Đak Ơ", "Level": "Xã" },
          { "Id": "25228", "Name": "Xã Đức Hạnh", "Level": "Xã" },
          { "Id": "25229", "Name": "Xã Phú Văn", "Level": "Xã" },
          { "Id": "25231", "Name": "Xã Đa Kia", "Level": "Xã" },
          { "Id": "25232", "Name": "Xã Phước Minh", "Level": "Xã" },
          { "Id": "25234", "Name": "Xã Bình Thắng", "Level": "Xã" },
          { "Id": "25267", "Name": "Xã Phú Nghĩa", "Level": "Xã" }
        ]
      },
      {
        "Id": "692",
        "Name": "Huyện Lộc Ninh",
        "Wards": [
          { "Id": "25270", "Name": "Thị trấn Lộc Ninh", "Level": "Thị trấn" },
          { "Id": "25273", "Name": "Xã Lộc Hòa", "Level": "Xã" },
          { "Id": "25276", "Name": "Xã Lộc An", "Level": "Xã" },
          { "Id": "25279", "Name": "Xã Lộc Tấn", "Level": "Xã" },
          { "Id": "25280", "Name": "Xã Lộc Thạnh", "Level": "Xã" },
          { "Id": "25282", "Name": "Xã Lộc Hiệp", "Level": "Xã" },
          { "Id": "25285", "Name": "Xã Lộc Thiện", "Level": "Xã" },
          { "Id": "25288", "Name": "Xã Lộc Thuận", "Level": "Xã" },
          { "Id": "25291", "Name": "Xã Lộc Quang", "Level": "Xã" },
          { "Id": "25292", "Name": "Xã Lộc Phú", "Level": "Xã" },
          { "Id": "25294", "Name": "Xã Lộc Thành", "Level": "Xã" },
          { "Id": "25297", "Name": "Xã Lộc Thái", "Level": "Xã" },
          { "Id": "25300", "Name": "Xã Lộc Điền", "Level": "Xã" },
          { "Id": "25303", "Name": "Xã Lộc Hưng", "Level": "Xã" },
          { "Id": "25305", "Name": "Xã Lộc Thịnh", "Level": "Xã" },
          { "Id": "25306", "Name": "Xã Lộc Khánh", "Level": "Xã" }
        ]
      },
      {
        "Id": "693",
        "Name": "Huyện Bù Đốp",
        "Wards": [
          { "Id": "25308", "Name": "Thị trấn Thanh Bình", "Level": "Thị trấn" },
          { "Id": "25309", "Name": "Xã Hưng Phước", "Level": "Xã" },
          { "Id": "25310", "Name": "Xã Phước Thiện", "Level": "Xã" },
          { "Id": "25312", "Name": "Xã Thiện Hưng", "Level": "Xã" },
          { "Id": "25315", "Name": "Xã Thanh Hòa", "Level": "Xã" },
          { "Id": "25318", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "25321", "Name": "Xã Tân Tiến", "Level": "Xã" }
        ]
      },
      {
        "Id": "694",
        "Name": "Huyện Hớn Quản",
        "Wards": [
          { "Id": "25327", "Name": "Xã Thanh An", "Level": "Xã" },
          { "Id": "25330", "Name": "Xã An Khương", "Level": "Xã" },
          { "Id": "25339", "Name": "Xã An Phú", "Level": "Xã" },
          { "Id": "25342", "Name": "Xã Tân Lợi", "Level": "Xã" },
          { "Id": "25345", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "25348", "Name": "Xã Minh Đức", "Level": "Xã" },
          { "Id": "25349", "Name": "Xã Minh Tâm", "Level": "Xã" },
          { "Id": "25351", "Name": "Xã Phước An", "Level": "Xã" },
          { "Id": "25354", "Name": "Xã Thanh Bình", "Level": "Xã" },
          { "Id": "25357", "Name": "Thị trấn Tân Khai", "Level": "Thị trấn" },
          { "Id": "25360", "Name": "Xã Đồng Nơ", "Level": "Xã" },
          { "Id": "25361", "Name": "Xã Tân Hiệp", "Level": "Xã" },
          { "Id": "25438", "Name": "Xã Tân Quan", "Level": "Xã" }
        ]
      },
      {
        "Id": "695",
        "Name": "Huyện Đồng Phú",
        "Wards": [
          { "Id": "25363", "Name": "Thị trấn Tân Phú", "Level": "Thị trấn" },
          { "Id": "25366", "Name": "Xã Thuận Lợi", "Level": "Xã" },
          { "Id": "25369", "Name": "Xã Đồng Tâm", "Level": "Xã" },
          { "Id": "25372", "Name": "Xã Tân Phước", "Level": "Xã" },
          { "Id": "25375", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "25378", "Name": "Xã Tân Lợi", "Level": "Xã" },
          { "Id": "25381", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "25384", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "25387", "Name": "Xã Thuận Phú", "Level": "Xã" },
          { "Id": "25390", "Name": "Xã Đồng Tiến", "Level": "Xã" },
          { "Id": "25393", "Name": "Xã Tân Tiến", "Level": "Xã" }
        ]
      },
      {
        "Id": "696",
        "Name": "Huyện Bù Đăng",
        "Wards": [
          { "Id": "25396", "Name": "Thị trấn Đức Phong", "Level": "Thị trấn" },
          { "Id": "25398", "Name": "Xã Đường 10", "Level": "Xã" },
          { "Id": "25399", "Name": "Xã Đak Nhau", "Level": "Xã" },
          { "Id": "25400", "Name": "Xã Phú Sơn", "Level": "Xã" },
          { "Id": "25402", "Name": "Xã Thọ Sơn", "Level": "Xã" },
          { "Id": "25404", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "25405", "Name": "Xã Bom Bo", "Level": "Xã" },
          { "Id": "25408", "Name": "Xã Minh Hưng", "Level": "Xã" },
          { "Id": "25411", "Name": "Xã Đoàn Kết", "Level": "Xã" },
          { "Id": "25414", "Name": "Xã Đồng Nai", "Level": "Xã" },
          { "Id": "25417", "Name": "Xã Đức Liễu", "Level": "Xã" },
          { "Id": "25420", "Name": "Xã Thống Nhất", "Level": "Xã" },
          { "Id": "25423", "Name": "Xã Nghĩa Trung", "Level": "Xã" },
          { "Id": "25424", "Name": "Xã Nghĩa Bình", "Level": "Xã" },
          { "Id": "25426", "Name": "Xã Đăng Hà", "Level": "Xã" },
          { "Id": "25429", "Name": "Xã Phước Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "697",
        "Name": "Huyện Chơn Thành",
        "Wards": [
          { "Id": "25432", "Name": "Thị trấn Chơn Thành", "Level": "Thị trấn" },
          { "Id": "25433", "Name": "Xã Thành Tâm", "Level": "Xã" },
          { "Id": "25435", "Name": "Xã Minh Lập", "Level": "Xã" },
          { "Id": "25439", "Name": "Xã Quang Minh", "Level": "Xã" },
          { "Id": "25441", "Name": "Xã Minh Hưng", "Level": "Xã" },
          { "Id": "25444", "Name": "Xã Minh Long", "Level": "Xã" },
          { "Id": "25447", "Name": "Xã Minh Thành", "Level": "Xã" },
          { "Id": "25450", "Name": "Xã Nha Bích", "Level": "Xã" },
          { "Id": "25453", "Name": "Xã Minh Thắng", "Level": "Xã" }
        ]
      },
      {
        "Id": "698",
        "Name": "Huyện Phú Riềng",
        "Wards": [
          { "Id": "25240", "Name": "Xã Long Bình", "Level": "Xã" },
          { "Id": "25243", "Name": "Xã Bình Tân", "Level": "Xã" },
          { "Id": "25244", "Name": "Xã Bình Sơn", "Level": "Xã" },
          { "Id": "25246", "Name": "Xã Long Hưng", "Level": "Xã" },
          { "Id": "25250", "Name": "Xã Phước Tân", "Level": "Xã" },
          { "Id": "25252", "Name": "Xã Bù Nho", "Level": "Xã" },
          { "Id": "25255", "Name": "Xã Long Hà", "Level": "Xã" },
          { "Id": "25258", "Name": "Xã Long Tân", "Level": "Xã" },
          { "Id": "25261", "Name": "Xã Phú Trung", "Level": "Xã" },
          { "Id": "25264", "Name": "Xã Phú Riềng", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "72",
    "Name": "Tỉnh Tây Ninh",
    "Districts": [
      {
        "Id": "703",
        "Name": "Thành phố Tây Ninh",
        "Wards": [
          { "Id": "25456", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "25459", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "25462", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "25465", "Name": "Phường Hiệp Ninh", "Level": "Phường" },
          { "Id": "25468", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "25471", "Name": "Xã Thạnh Tân", "Level": "Xã" },
          { "Id": "25474", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "25477", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "25480", "Name": "Phường Ninh Sơn", "Level": "Phường" },
          { "Id": "25483", "Name": "Phường Ninh Thạnh", "Level": "Phường" }
        ]
      },
      {
        "Id": "705",
        "Name": "Huyện Tân Biên",
        "Wards": [
          { "Id": "25486", "Name": "Thị trấn Tân Biên", "Level": "Thị trấn" },
          { "Id": "25489", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "25492", "Name": "Xã Thạnh Bắc", "Level": "Xã" },
          { "Id": "25495", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "25498", "Name": "Xã Thạnh Bình", "Level": "Xã" },
          { "Id": "25501", "Name": "Xã Thạnh Tây", "Level": "Xã" },
          { "Id": "25504", "Name": "Xã Hòa Hiệp", "Level": "Xã" },
          { "Id": "25507", "Name": "Xã Tân Phong", "Level": "Xã" },
          { "Id": "25510", "Name": "Xã Mỏ Công", "Level": "Xã" },
          { "Id": "25513", "Name": "Xã Trà Vong", "Level": "Xã" }
        ]
      },
      {
        "Id": "706",
        "Name": "Huyện Tân Châu",
        "Wards": [
          { "Id": "25516", "Name": "Thị trấn Tân Châu", "Level": "Thị trấn" },
          { "Id": "25519", "Name": "Xã Tân Hà", "Level": "Xã" },
          { "Id": "25522", "Name": "Xã Tân Đông", "Level": "Xã" },
          { "Id": "25525", "Name": "Xã Tân Hội", "Level": "Xã" },
          { "Id": "25528", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "25531", "Name": "Xã Suối Ngô", "Level": "Xã" },
          { "Id": "25534", "Name": "Xã Suối Dây", "Level": "Xã" },
          { "Id": "25537", "Name": "Xã Tân Hiệp", "Level": "Xã" },
          { "Id": "25540", "Name": "Xã Thạnh Đông", "Level": "Xã" },
          { "Id": "25543", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "25546", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "25549", "Name": "Xã Tân Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "707",
        "Name": "Huyện Dương Minh Châu",
        "Wards": [
          {
            "Id": "25552",
            "Name": "Thị trấn Dương Minh Châu",
            "Level": "Thị trấn"
          },
          { "Id": "25555", "Name": "Xã Suối Đá", "Level": "Xã" },
          { "Id": "25558", "Name": "Xã Phan", "Level": "Xã" },
          { "Id": "25561", "Name": "Xã Phước Ninh", "Level": "Xã" },
          { "Id": "25564", "Name": "Xã Phước Minh", "Level": "Xã" },
          { "Id": "25567", "Name": "Xã Bàu Năng", "Level": "Xã" },
          { "Id": "25570", "Name": "Xã Chà Là", "Level": "Xã" },
          { "Id": "25573", "Name": "Xã Cầu Khởi", "Level": "Xã" },
          { "Id": "25576", "Name": "Xã Bến Củi", "Level": "Xã" },
          { "Id": "25579", "Name": "Xã Lộc Ninh", "Level": "Xã" },
          { "Id": "25582", "Name": "Xã Truông Mít", "Level": "Xã" }
        ]
      },
      {
        "Id": "708",
        "Name": "Huyện Châu Thành",
        "Wards": [
          { "Id": "25585", "Name": "Thị trấn Châu Thành", "Level": "Thị trấn" },
          { "Id": "25588", "Name": "Xã Hảo Đước", "Level": "Xã" },
          { "Id": "25591", "Name": "Xã Phước Vinh", "Level": "Xã" },
          { "Id": "25594", "Name": "Xã Đồng Khởi", "Level": "Xã" },
          { "Id": "25597", "Name": "Xã Thái Bình", "Level": "Xã" },
          { "Id": "25600", "Name": "Xã An Cơ", "Level": "Xã" },
          { "Id": "25603", "Name": "Xã Biên Giới", "Level": "Xã" },
          { "Id": "25606", "Name": "Xã Hòa Thạnh", "Level": "Xã" },
          { "Id": "25609", "Name": "Xã Trí Bình", "Level": "Xã" },
          { "Id": "25612", "Name": "Xã Hòa Hội", "Level": "Xã" },
          { "Id": "25615", "Name": "Xã An Bình", "Level": "Xã" },
          { "Id": "25618", "Name": "Xã Thanh Điền", "Level": "Xã" },
          { "Id": "25621", "Name": "Xã Thành Long", "Level": "Xã" },
          { "Id": "25624", "Name": "Xã Ninh Điền", "Level": "Xã" },
          { "Id": "25627", "Name": "Xã Long Vĩnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "709",
        "Name": "Thị xã Hòa Thành",
        "Wards": [
          { "Id": "25630", "Name": "Phường Long Hoa", "Level": "Phường" },
          { "Id": "25633", "Name": "Phường Hiệp Tân", "Level": "Phường" },
          { "Id": "25636", "Name": "Phường Long Thành Bắc", "Level": "Phường" },
          { "Id": "25639", "Name": "Xã Trường Hòa", "Level": "Xã" },
          { "Id": "25642", "Name": "Xã Trường Đông", "Level": "Xã" },
          {
            "Id": "25645",
            "Name": "Phường Long Thành Trung",
            "Level": "Phường"
          },
          { "Id": "25648", "Name": "Xã Trường Tây", "Level": "Xã" },
          { "Id": "25651", "Name": "Xã Long Thành Nam", "Level": "Xã" }
        ]
      },
      {
        "Id": "710",
        "Name": "Huyện Gò Dầu",
        "Wards": [
          { "Id": "25654", "Name": "Thị trấn Gò Dầu", "Level": "Thị trấn" },
          { "Id": "25657", "Name": "Xã Thạnh Đức", "Level": "Xã" },
          { "Id": "25660", "Name": "Xã Cẩm Giang", "Level": "Xã" },
          { "Id": "25663", "Name": "Xã Hiệp Thạnh", "Level": "Xã" },
          { "Id": "25666", "Name": "Xã Bàu Đồn", "Level": "Xã" },
          { "Id": "25669", "Name": "Xã Phước Thạnh", "Level": "Xã" },
          { "Id": "25672", "Name": "Xã Phước Đông", "Level": "Xã" },
          { "Id": "25675", "Name": "Xã Phước Trạch", "Level": "Xã" },
          { "Id": "25678", "Name": "Xã Thanh Phước", "Level": "Xã" }
        ]
      },
      {
        "Id": "711",
        "Name": "Huyện Bến Cầu",
        "Wards": [
          { "Id": "25681", "Name": "Thị trấn Bến Cầu", "Level": "Thị trấn" },
          { "Id": "25684", "Name": "Xã Long Chữ", "Level": "Xã" },
          { "Id": "25687", "Name": "Xã Long Phước", "Level": "Xã" },
          { "Id": "25690", "Name": "Xã Long Giang", "Level": "Xã" },
          { "Id": "25693", "Name": "Xã Tiên Thuận", "Level": "Xã" },
          { "Id": "25696", "Name": "Xã Long Khánh", "Level": "Xã" },
          { "Id": "25699", "Name": "Xã Lợi Thuận", "Level": "Xã" },
          { "Id": "25702", "Name": "Xã Long Thuận", "Level": "Xã" },
          { "Id": "25705", "Name": "Xã An Thạnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "712",
        "Name": "Thị xã Trảng Bàng",
        "Wards": [
          { "Id": "25708", "Name": "Phường Trảng Bàng", "Level": "Phường" },
          { "Id": "25711", "Name": "Xã Đôn Thuận", "Level": "Xã" },
          { "Id": "25714", "Name": "Xã Hưng Thuận", "Level": "Xã" },
          { "Id": "25717", "Name": "Phường Lộc Hưng", "Level": "Phường" },
          { "Id": "25720", "Name": "Phường Gia Lộc", "Level": "Phường" },
          { "Id": "25723", "Name": "Phường Gia Bình", "Level": "Phường" },
          { "Id": "25729", "Name": "Xã Phước Bình", "Level": "Xã" },
          { "Id": "25732", "Name": "Phường An Tịnh", "Level": "Phường" },
          { "Id": "25735", "Name": "Phường An Hòa", "Level": "Phường" },
          { "Id": "25738", "Name": "Xã Phước Chỉ", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "74",
    "Name": "Tỉnh Bình Dương",
    "Districts": [
      {
        "Id": "718",
        "Name": "Thành phố Thủ Dầu Một",
        "Wards": [
          { "Id": "25741", "Name": "Phường Hiệp Thành", "Level": "Phường" },
          { "Id": "25744", "Name": "Phường Phú Lợi", "Level": "Phường" },
          { "Id": "25747", "Name": "Phường Phú Cường", "Level": "Phường" },
          { "Id": "25750", "Name": "Phường Phú Hòa", "Level": "Phường" },
          { "Id": "25753", "Name": "Phường Phú Thọ", "Level": "Phường" },
          { "Id": "25756", "Name": "Phường Chánh Nghĩa", "Level": "Phường" },
          { "Id": "25759", "Name": "Phường Định Hoà", "Level": "Phường" },
          { "Id": "25760", "Name": "Phường Hoà Phú", "Level": "Phường" },
          { "Id": "25762", "Name": "Phường Phú Mỹ", "Level": "Phường" },
          { "Id": "25763", "Name": "Phường Phú Tân", "Level": "Phường" },
          { "Id": "25765", "Name": "Phường Tân An", "Level": "Phường" },
          { "Id": "25768", "Name": "Phường Hiệp An", "Level": "Phường" },
          {
            "Id": "25771",
            "Name": "Phường Tương Bình Hiệp",
            "Level": "Phường"
          },
          { "Id": "25774", "Name": "Phường Chánh Mỹ", "Level": "Phường" }
        ]
      },
      {
        "Id": "719",
        "Name": "Huyện Bàu Bàng",
        "Wards": [
          { "Id": "25816", "Name": "Xã Trừ Văn Thố", "Level": "Xã" },
          { "Id": "25819", "Name": "Xã Cây Trường II", "Level": "Xã" },
          { "Id": "25822", "Name": "Thị trấn Lai Uyên", "Level": "Thị trấn" },
          { "Id": "25825", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "25828", "Name": "Xã Long Nguyên", "Level": "Xã" },
          { "Id": "25831", "Name": "Xã Hưng Hòa", "Level": "Xã" },
          { "Id": "25834", "Name": "Xã Lai Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "720",
        "Name": "Huyện Dầu Tiếng",
        "Wards": [
          { "Id": "25777", "Name": "Thị trấn Dầu Tiếng", "Level": "Thị trấn" },
          { "Id": "25780", "Name": "Xã Minh Hoà", "Level": "Xã" },
          { "Id": "25783", "Name": "Xã Minh Thạnh", "Level": "Xã" },
          { "Id": "25786", "Name": "Xã Minh Tân", "Level": "Xã" },
          { "Id": "25789", "Name": "Xã Định An", "Level": "Xã" },
          { "Id": "25792", "Name": "Xã Long Hoà", "Level": "Xã" },
          { "Id": "25795", "Name": "Xã Định Thành", "Level": "Xã" },
          { "Id": "25798", "Name": "Xã Định Hiệp", "Level": "Xã" },
          { "Id": "25801", "Name": "Xã An Lập", "Level": "Xã" },
          { "Id": "25804", "Name": "Xã Long Tân", "Level": "Xã" },
          { "Id": "25807", "Name": "Xã Thanh An", "Level": "Xã" },
          { "Id": "25810", "Name": "Xã Thanh Tuyền", "Level": "Xã" }
        ]
      },
      {
        "Id": "721",
        "Name": "Thị xã Bến Cát",
        "Wards": [
          { "Id": "25813", "Name": "Phường Mỹ Phước", "Level": "Phường" },
          { "Id": "25837", "Name": "Phường Chánh Phú Hòa", "Level": "Phường" },
          { "Id": "25840", "Name": "Xã An Điền", "Level": "Xã" },
          { "Id": "25843", "Name": "Xã An Tây", "Level": "Xã" },
          { "Id": "25846", "Name": "Phường Thới Hòa", "Level": "Phường" },
          { "Id": "25849", "Name": "Phường Hòa Lợi", "Level": "Phường" },
          { "Id": "25852", "Name": "Phường Tân Định", "Level": "Phường" },
          { "Id": "25855", "Name": "Xã Phú An", "Level": "Xã" }
        ]
      },
      {
        "Id": "722",
        "Name": "Huyện Phú Giáo",
        "Wards": [
          { "Id": "25858", "Name": "Thị trấn Phước Vĩnh", "Level": "Thị trấn" },
          { "Id": "25861", "Name": "Xã An Linh", "Level": "Xã" },
          { "Id": "25864", "Name": "Xã Phước Sang", "Level": "Xã" },
          { "Id": "25865", "Name": "Xã An Thái", "Level": "Xã" },
          { "Id": "25867", "Name": "Xã An Long", "Level": "Xã" },
          { "Id": "25870", "Name": "Xã An Bình", "Level": "Xã" },
          { "Id": "25873", "Name": "Xã Tân Hiệp", "Level": "Xã" },
          { "Id": "25876", "Name": "Xã Tam Lập", "Level": "Xã" },
          { "Id": "25879", "Name": "Xã Tân Long", "Level": "Xã" },
          { "Id": "25882", "Name": "Xã Vĩnh Hoà", "Level": "Xã" },
          { "Id": "25885", "Name": "Xã Phước Hoà", "Level": "Xã" }
        ]
      },
      {
        "Id": "723",
        "Name": "Thị xã Tân Uyên",
        "Wards": [
          { "Id": "25888", "Name": "Phường Uyên Hưng", "Level": "Phường" },
          {
            "Id": "25891",
            "Name": "Phường Tân Phước Khánh",
            "Level": "Phường"
          },
          { "Id": "25912", "Name": "Phường Vĩnh Tân", "Level": "Phường" },
          { "Id": "25915", "Name": "Phường Hội Nghĩa", "Level": "Phường" },
          { "Id": "25920", "Name": "Phường Tân Hiệp", "Level": "Phường" },
          { "Id": "25921", "Name": "Phường Khánh Bình", "Level": "Phường" },
          { "Id": "25924", "Name": "Phường Phú Chánh", "Level": "Phường" },
          { "Id": "25930", "Name": "Xã Bạch Đằng", "Level": "Xã" },
          { "Id": "25933", "Name": "Phường Tân Vĩnh Hiệp", "Level": "Phường" },
          { "Id": "25936", "Name": "Phường Thạnh Phước", "Level": "Phường" },
          { "Id": "25937", "Name": "Xã Thạnh Hội", "Level": "Xã" },
          { "Id": "25939", "Name": "Phường Thái Hòa", "Level": "Phường" }
        ]
      },
      {
        "Id": "724",
        "Name": "Thành phố Dĩ An",
        "Wards": [
          { "Id": "25942", "Name": "Phường Dĩ An", "Level": "Phường" },
          { "Id": "25945", "Name": "Phường Tân Bình", "Level": "Phường" },
          { "Id": "25948", "Name": "Phường Tân Đông Hiệp", "Level": "Phường" },
          { "Id": "25951", "Name": "Phường Bình An", "Level": "Phường" },
          { "Id": "25954", "Name": "Phường Bình Thắng", "Level": "Phường" },
          { "Id": "25957", "Name": "Phường Đông Hòa", "Level": "Phường" },
          { "Id": "25960", "Name": "Phường An Bình", "Level": "Phường" }
        ]
      },
      {
        "Id": "725",
        "Name": "Thành phố Thuận An",
        "Wards": [
          { "Id": "25963", "Name": "Phường An Thạnh", "Level": "Phường" },
          { "Id": "25966", "Name": "Phường Lái Thiêu", "Level": "Phường" },
          { "Id": "25969", "Name": "Phường Bình Chuẩn", "Level": "Phường" },
          { "Id": "25972", "Name": "Phường Thuận Giao", "Level": "Phường" },
          { "Id": "25975", "Name": "Phường An Phú", "Level": "Phường" },
          { "Id": "25978", "Name": "Phường Hưng Định", "Level": "Phường" },
          { "Id": "25981", "Name": "Xã An Sơn", "Level": "Xã" },
          { "Id": "25984", "Name": "Phường Bình Nhâm", "Level": "Phường" },
          { "Id": "25987", "Name": "Phường Bình Hòa", "Level": "Phường" },
          { "Id": "25990", "Name": "Phường Vĩnh Phú", "Level": "Phường" }
        ]
      },
      {
        "Id": "726",
        "Name": "Huyện Bắc Tân Uyên",
        "Wards": [
          { "Id": "25894", "Name": "Xã Tân Định", "Level": "Xã" },
          { "Id": "25897", "Name": "Xã Bình Mỹ", "Level": "Xã" },
          { "Id": "25900", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "25903", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "25906", "Name": "Thị trấn Tân Thành", "Level": "Thị trấn" },
          { "Id": "25907", "Name": "Xã Đất Cuốc", "Level": "Xã" },
          { "Id": "25908", "Name": "Xã Hiếu Liêm", "Level": "Xã" },
          { "Id": "25909", "Name": "Xã Lạc An", "Level": "Xã" },
          { "Id": "25918", "Name": "Xã Tân Mỹ", "Level": "Xã" },
          { "Id": "25927", "Name": "Xã Thường Tân", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "75",
    "Name": "Tỉnh Đồng Nai",
    "Districts": [
      {
        "Id": "731",
        "Name": "Thành phố Biên Hòa",
        "Wards": [
          { "Id": "25993", "Name": "Phường Trảng Dài", "Level": "Phường" },
          { "Id": "25996", "Name": "Phường Tân Phong", "Level": "Phường" },
          { "Id": "25999", "Name": "Phường Tân Biên", "Level": "Phường" },
          { "Id": "26002", "Name": "Phường Hố Nai", "Level": "Phường" },
          { "Id": "26005", "Name": "Phường Tân Hòa", "Level": "Phường" },
          { "Id": "26008", "Name": "Phường Tân Hiệp", "Level": "Phường" },
          { "Id": "26011", "Name": "Phường Bửu Long", "Level": "Phường" },
          { "Id": "26014", "Name": "Phường Tân Tiến", "Level": "Phường" },
          { "Id": "26017", "Name": "Phường Tam Hiệp", "Level": "Phường" },
          { "Id": "26020", "Name": "Phường Long Bình", "Level": "Phường" },
          { "Id": "26023", "Name": "Phường Quang Vinh", "Level": "Phường" },
          { "Id": "26026", "Name": "Phường Tân Mai", "Level": "Phường" },
          { "Id": "26029", "Name": "Phường Thống Nhất", "Level": "Phường" },
          { "Id": "26032", "Name": "Phường Trung Dũng", "Level": "Phường" },
          { "Id": "26035", "Name": "Phường Tam Hòa", "Level": "Phường" },
          { "Id": "26038", "Name": "Phường Hòa Bình", "Level": "Phường" },
          { "Id": "26041", "Name": "Phường Quyết Thắng", "Level": "Phường" },
          { "Id": "26044", "Name": "Phường Thanh Bình", "Level": "Phường" },
          { "Id": "26047", "Name": "Phường Bình Đa", "Level": "Phường" },
          { "Id": "26050", "Name": "Phường An Bình", "Level": "Phường" },
          { "Id": "26053", "Name": "Phường Bửu Hòa", "Level": "Phường" },
          { "Id": "26056", "Name": "Phường Long Bình Tân", "Level": "Phường" },
          { "Id": "26059", "Name": "Phường Tân Vạn", "Level": "Phường" },
          { "Id": "26062", "Name": "Phường Tân Hạnh", "Level": "Phường" },
          { "Id": "26065", "Name": "Phường Hiệp Hòa", "Level": "Phường" },
          { "Id": "26068", "Name": "Phường Hóa An", "Level": "Phường" },
          { "Id": "26371", "Name": "Phường An Hòa", "Level": "Phường" },
          { "Id": "26374", "Name": "Phường Tam Phước", "Level": "Phường" },
          { "Id": "26377", "Name": "Phường Phước Tân", "Level": "Phường" },
          { "Id": "26380", "Name": "Xã Long Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "732",
        "Name": "Thành phố Long Khánh",
        "Wards": [
          { "Id": "26071", "Name": "Phường Xuân Trung", "Level": "Phường" },
          { "Id": "26074", "Name": "Phường Xuân Thanh", "Level": "Phường" },
          { "Id": "26077", "Name": "Phường Xuân Bình", "Level": "Phường" },
          { "Id": "26080", "Name": "Phường Xuân An", "Level": "Phường" },
          { "Id": "26083", "Name": "Phường Xuân Hoà", "Level": "Phường" },
          { "Id": "26086", "Name": "Phường Phú Bình", "Level": "Phường" },
          { "Id": "26089", "Name": "Xã Bình Lộc", "Level": "Xã" },
          { "Id": "26092", "Name": "Xã Bảo Quang", "Level": "Xã" },
          { "Id": "26095", "Name": "Phường Suối Tre", "Level": "Phường" },
          { "Id": "26098", "Name": "Phường Bảo Vinh", "Level": "Phường" },
          { "Id": "26101", "Name": "Phường Xuân Lập", "Level": "Phường" },
          { "Id": "26104", "Name": "Phường Bàu Sen", "Level": "Phường" },
          { "Id": "26107", "Name": "Xã Bàu Trâm", "Level": "Xã" },
          { "Id": "26110", "Name": "Phường Xuân Tân", "Level": "Phường" },
          { "Id": "26113", "Name": "Xã Hàng Gòn", "Level": "Xã" }
        ]
      },
      {
        "Id": "734",
        "Name": "Huyện Tân Phú",
        "Wards": [
          { "Id": "26116", "Name": "Thị trấn Tân Phú", "Level": "Thị trấn" },
          { "Id": "26119", "Name": "Xã Dak Lua", "Level": "Xã" },
          { "Id": "26122", "Name": "Xã Nam Cát Tiên", "Level": "Xã" },
          { "Id": "26125", "Name": "Xã Phú An", "Level": "Xã" },
          { "Id": "26128", "Name": "Xã Núi Tượng", "Level": "Xã" },
          { "Id": "26131", "Name": "Xã Tà Lài", "Level": "Xã" },
          { "Id": "26134", "Name": "Xã Phú Lập", "Level": "Xã" },
          { "Id": "26137", "Name": "Xã Phú Sơn", "Level": "Xã" },
          { "Id": "26140", "Name": "Xã Phú Thịnh", "Level": "Xã" },
          { "Id": "26143", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "26146", "Name": "Xã Phú Trung", "Level": "Xã" },
          { "Id": "26149", "Name": "Xã Phú Xuân", "Level": "Xã" },
          { "Id": "26152", "Name": "Xã Phú Lộc", "Level": "Xã" },
          { "Id": "26155", "Name": "Xã Phú Lâm", "Level": "Xã" },
          { "Id": "26158", "Name": "Xã Phú Bình", "Level": "Xã" },
          { "Id": "26161", "Name": "Xã Phú Thanh", "Level": "Xã" },
          { "Id": "26164", "Name": "Xã Trà Cổ", "Level": "Xã" },
          { "Id": "26167", "Name": "Xã Phú Điền", "Level": "Xã" }
        ]
      },
      {
        "Id": "735",
        "Name": "Huyện Vĩnh Cửu",
        "Wards": [
          { "Id": "26170", "Name": "Thị trấn Vĩnh An", "Level": "Thị trấn" },
          { "Id": "26173", "Name": "Xã Phú Lý", "Level": "Xã" },
          { "Id": "26176", "Name": "Xã Trị An", "Level": "Xã" },
          { "Id": "26179", "Name": "Xã Tân An", "Level": "Xã" },
          { "Id": "26182", "Name": "Xã Vĩnh Tân", "Level": "Xã" },
          { "Id": "26185", "Name": "Xã Bình Lợi", "Level": "Xã" },
          { "Id": "26188", "Name": "Xã Thạnh Phú", "Level": "Xã" },
          { "Id": "26191", "Name": "Xã Thiện Tân", "Level": "Xã" },
          { "Id": "26194", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "26197", "Name": "Xã Bình Hòa", "Level": "Xã" },
          { "Id": "26200", "Name": "Xã Mã Đà", "Level": "Xã" },
          { "Id": "26203", "Name": "Xã Hiếu Liêm", "Level": "Xã" }
        ]
      },
      {
        "Id": "736",
        "Name": "Huyện Định Quán",
        "Wards": [
          { "Id": "26206", "Name": "Thị trấn Định Quán", "Level": "Thị trấn" },
          { "Id": "26209", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "26212", "Name": "Xã Phú Tân", "Level": "Xã" },
          { "Id": "26215", "Name": "Xã Phú Vinh", "Level": "Xã" },
          { "Id": "26218", "Name": "Xã Phú Lợi", "Level": "Xã" },
          { "Id": "26221", "Name": "Xã Phú Hòa", "Level": "Xã" },
          { "Id": "26224", "Name": "Xã Ngọc Định", "Level": "Xã" },
          { "Id": "26227", "Name": "Xã La Ngà", "Level": "Xã" },
          { "Id": "26230", "Name": "Xã Gia Canh", "Level": "Xã" },
          { "Id": "26233", "Name": "Xã Phú Ngọc", "Level": "Xã" },
          { "Id": "26236", "Name": "Xã Phú Cường", "Level": "Xã" },
          { "Id": "26239", "Name": "Xã Túc Trưng", "Level": "Xã" },
          { "Id": "26242", "Name": "Xã Phú Túc", "Level": "Xã" },
          { "Id": "26245", "Name": "Xã Suối Nho", "Level": "Xã" }
        ]
      },
      {
        "Id": "737",
        "Name": "Huyện Trảng Bom",
        "Wards": [
          { "Id": "26248", "Name": "Thị trấn Trảng Bom", "Level": "Thị trấn" },
          { "Id": "26251", "Name": "Xã Thanh Bình", "Level": "Xã" },
          { "Id": "26254", "Name": "Xã Cây Gáo", "Level": "Xã" },
          { "Id": "26257", "Name": "Xã Bàu Hàm", "Level": "Xã" },
          { "Id": "26260", "Name": "Xã Sông Thao", "Level": "Xã" },
          { "Id": "26263", "Name": "Xã Sông Trầu", "Level": "Xã" },
          { "Id": "26266", "Name": "Xã Đông Hoà", "Level": "Xã" },
          { "Id": "26269", "Name": "Xã Bắc Sơn", "Level": "Xã" },
          { "Id": "26272", "Name": "Xã Hố Nai 3", "Level": "Xã" },
          { "Id": "26275", "Name": "Xã Tây Hoà", "Level": "Xã" },
          { "Id": "26278", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "26281", "Name": "Xã Trung Hoà", "Level": "Xã" },
          { "Id": "26284", "Name": "Xã Đồi 61", "Level": "Xã" },
          { "Id": "26287", "Name": "Xã Hưng Thịnh", "Level": "Xã" },
          { "Id": "26290", "Name": "Xã Quảng Tiến", "Level": "Xã" },
          { "Id": "26293", "Name": "Xã Giang Điền", "Level": "Xã" },
          { "Id": "26296", "Name": "Xã An Viễn", "Level": "Xã" }
        ]
      },
      {
        "Id": "738",
        "Name": "Huyện Thống Nhất",
        "Wards": [
          { "Id": "26299", "Name": "Xã Gia Tân 1", "Level": "Xã" },
          { "Id": "26302", "Name": "Xã Gia Tân 2", "Level": "Xã" },
          { "Id": "26305", "Name": "Xã Gia Tân 3", "Level": "Xã" },
          { "Id": "26308", "Name": "Xã Gia Kiệm", "Level": "Xã" },
          { "Id": "26311", "Name": "Xã Quang Trung", "Level": "Xã" },
          { "Id": "26314", "Name": "Xã Bàu Hàm 2", "Level": "Xã" },
          { "Id": "26317", "Name": "Xã Hưng Lộc", "Level": "Xã" },
          { "Id": "26320", "Name": "Xã Lộ 25", "Level": "Xã" },
          { "Id": "26323", "Name": "Xã Xuân Thiện", "Level": "Xã" },
          { "Id": "26326", "Name": "Thị trấn Dầu Giây", "Level": "Thị trấn" }
        ]
      },
      {
        "Id": "739",
        "Name": "Huyện Cẩm Mỹ",
        "Wards": [
          { "Id": "26329", "Name": "Xã Sông Nhạn", "Level": "Xã" },
          { "Id": "26332", "Name": "Xã Xuân Quế", "Level": "Xã" },
          { "Id": "26335", "Name": "Xã Nhân Nghĩa", "Level": "Xã" },
          { "Id": "26338", "Name": "Xã Xuân Đường", "Level": "Xã" },
          { "Id": "26341", "Name": "Xã Long Giao", "Level": "Xã" },
          { "Id": "26344", "Name": "Xã Xuân Mỹ", "Level": "Xã" },
          { "Id": "26347", "Name": "Xã Thừa Đức", "Level": "Xã" },
          { "Id": "26350", "Name": "Xã Bảo Bình", "Level": "Xã" },
          { "Id": "26353", "Name": "Xã Xuân Bảo", "Level": "Xã" },
          { "Id": "26356", "Name": "Xã Xuân Tây", "Level": "Xã" },
          { "Id": "26359", "Name": "Xã Xuân Đông", "Level": "Xã" },
          { "Id": "26362", "Name": "Xã Sông Ray", "Level": "Xã" },
          { "Id": "26365", "Name": "Xã Lâm San", "Level": "Xã" }
        ]
      },
      {
        "Id": "740",
        "Name": "Huyện Long Thành",
        "Wards": [
          { "Id": "26368", "Name": "Thị trấn Long Thành", "Level": "Thị trấn" },
          { "Id": "26383", "Name": "Xã An Phước", "Level": "Xã" },
          { "Id": "26386", "Name": "Xã Bình An", "Level": "Xã" },
          { "Id": "26389", "Name": "Xã Long Đức", "Level": "Xã" },
          { "Id": "26392", "Name": "Xã Lộc An", "Level": "Xã" },
          { "Id": "26395", "Name": "Xã Bình Sơn", "Level": "Xã" },
          { "Id": "26398", "Name": "Xã Tam An", "Level": "Xã" },
          { "Id": "26401", "Name": "Xã Cẩm Đường", "Level": "Xã" },
          { "Id": "26404", "Name": "Xã Long An", "Level": "Xã" },
          { "Id": "26410", "Name": "Xã Bàu Cạn", "Level": "Xã" },
          { "Id": "26413", "Name": "Xã Long Phước", "Level": "Xã" },
          { "Id": "26416", "Name": "Xã Phước Bình", "Level": "Xã" },
          { "Id": "26419", "Name": "Xã Tân Hiệp", "Level": "Xã" },
          { "Id": "26422", "Name": "Xã Phước Thái", "Level": "Xã" }
        ]
      },
      {
        "Id": "741",
        "Name": "Huyện Xuân Lộc",
        "Wards": [
          { "Id": "26425", "Name": "Thị trấn Gia Ray", "Level": "Thị trấn" },
          { "Id": "26428", "Name": "Xã Xuân Bắc", "Level": "Xã" },
          { "Id": "26431", "Name": "Xã Suối Cao", "Level": "Xã" },
          { "Id": "26434", "Name": "Xã Xuân Thành", "Level": "Xã" },
          { "Id": "26437", "Name": "Xã Xuân Thọ", "Level": "Xã" },
          { "Id": "26440", "Name": "Xã Xuân Trường", "Level": "Xã" },
          { "Id": "26443", "Name": "Xã Xuân Hòa", "Level": "Xã" },
          { "Id": "26446", "Name": "Xã Xuân Hưng", "Level": "Xã" },
          { "Id": "26449", "Name": "Xã Xuân Tâm", "Level": "Xã" },
          { "Id": "26452", "Name": "Xã Suối Cát", "Level": "Xã" },
          { "Id": "26455", "Name": "Xã Xuân Hiệp", "Level": "Xã" },
          { "Id": "26458", "Name": "Xã Xuân Phú", "Level": "Xã" },
          { "Id": "26461", "Name": "Xã Xuân Định", "Level": "Xã" },
          { "Id": "26464", "Name": "Xã Bảo Hoà", "Level": "Xã" },
          { "Id": "26467", "Name": "Xã Lang Minh", "Level": "Xã" }
        ]
      },
      {
        "Id": "742",
        "Name": "Huyện Nhơn Trạch",
        "Wards": [
          { "Id": "26470", "Name": "Xã Phước Thiền", "Level": "Xã" },
          { "Id": "26473", "Name": "Xã Long Tân", "Level": "Xã" },
          { "Id": "26476", "Name": "Xã Đại Phước", "Level": "Xã" },
          { "Id": "26479", "Name": "Thị trấn Hiệp Phước", "Level": "Thị trấn" },
          { "Id": "26482", "Name": "Xã Phú Hữu", "Level": "Xã" },
          { "Id": "26485", "Name": "Xã Phú Hội", "Level": "Xã" },
          { "Id": "26488", "Name": "Xã Phú Thạnh", "Level": "Xã" },
          { "Id": "26491", "Name": "Xã Phú Đông", "Level": "Xã" },
          { "Id": "26494", "Name": "Xã Long Thọ", "Level": "Xã" },
          { "Id": "26497", "Name": "Xã Vĩnh Thanh", "Level": "Xã" },
          { "Id": "26500", "Name": "Xã Phước Khánh", "Level": "Xã" },
          { "Id": "26503", "Name": "Xã Phước An", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "77",
    "Name": "Tỉnh Bà Rịa - Vũng Tàu",
    "Districts": [
      {
        "Id": "747",
        "Name": "Thành phố Vũng Tàu",
        "Wards": [
          { "Id": "26506", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "26508", "Name": "Phường Thắng Tam", "Level": "Phường" },
          { "Id": "26509", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "26512", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "26515", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "26518", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "26521", "Name": "Phường Thắng Nhì", "Level": "Phường" },
          { "Id": "26524", "Name": "Phường 7", "Level": "Phường" },
          { "Id": "26526", "Name": "Phường Nguyễn An Ninh", "Level": "Phường" },
          { "Id": "26527", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "26530", "Name": "Phường 9", "Level": "Phường" },
          { "Id": "26533", "Name": "Phường Thắng Nhất", "Level": "Phường" },
          { "Id": "26535", "Name": "Phường Rạch Dừa", "Level": "Phường" },
          { "Id": "26536", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "26539", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "26542", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "26545", "Name": "Xã Long Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "748",
        "Name": "Thành phố Bà Rịa",
        "Wards": [
          { "Id": "26548", "Name": "Phường Phước Hưng", "Level": "Phường" },
          { "Id": "26551", "Name": "Phường Phước Hiệp", "Level": "Phường" },
          { "Id": "26554", "Name": "Phường Phước Nguyên", "Level": "Phường" },
          { "Id": "26557", "Name": "Phường Long Toàn", "Level": "Phường" },
          { "Id": "26558", "Name": "Phường Long Tâm", "Level": "Phường" },
          { "Id": "26560", "Name": "Phường Phước Trung", "Level": "Phường" },
          { "Id": "26563", "Name": "Phường Long Hương", "Level": "Phường" },
          { "Id": "26566", "Name": "Phường Kim Dinh", "Level": "Phường" },
          { "Id": "26567", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "26569", "Name": "Xã Long Phước", "Level": "Xã" },
          { "Id": "26572", "Name": "Xã Hoà Long", "Level": "Xã" }
        ]
      },
      {
        "Id": "750",
        "Name": "Huyện Châu Đức",
        "Wards": [
          { "Id": "26574", "Name": "Xã Bàu Chinh", "Level": "Xã" },
          { "Id": "26575", "Name": "Thị trấn Ngãi Giao", "Level": "Thị trấn" },
          { "Id": "26578", "Name": "Xã Bình Ba", "Level": "Xã" },
          { "Id": "26581", "Name": "Xã Suối Nghệ", "Level": "Xã" },
          { "Id": "26584", "Name": "Xã Xuân Sơn", "Level": "Xã" },
          { "Id": "26587", "Name": "Xã Sơn Bình", "Level": "Xã" },
          { "Id": "26590", "Name": "Xã Bình Giã", "Level": "Xã" },
          { "Id": "26593", "Name": "Xã Bình Trung", "Level": "Xã" },
          { "Id": "26596", "Name": "Xã Xà Bang", "Level": "Xã" },
          { "Id": "26599", "Name": "Xã Cù Bị", "Level": "Xã" },
          { "Id": "26602", "Name": "Xã Láng Lớn", "Level": "Xã" },
          { "Id": "26605", "Name": "Xã Quảng Thành", "Level": "Xã" },
          { "Id": "26608", "Name": "Xã Kim Long", "Level": "Xã" },
          { "Id": "26611", "Name": "Xã Suối Rao", "Level": "Xã" },
          { "Id": "26614", "Name": "Xã Đá Bạc", "Level": "Xã" },
          { "Id": "26617", "Name": "Xã Nghĩa Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "751",
        "Name": "Huyện Xuyên Mộc",
        "Wards": [
          { "Id": "26620", "Name": "Thị trấn Phước Bửu", "Level": "Thị trấn" },
          { "Id": "26623", "Name": "Xã Phước Thuận", "Level": "Xã" },
          { "Id": "26626", "Name": "Xã Phước Tân", "Level": "Xã" },
          { "Id": "26629", "Name": "Xã Xuyên Mộc", "Level": "Xã" },
          { "Id": "26632", "Name": "Xã Bông Trang", "Level": "Xã" },
          { "Id": "26635", "Name": "Xã Tân Lâm", "Level": "Xã" },
          { "Id": "26638", "Name": "Xã Bàu Lâm", "Level": "Xã" },
          { "Id": "26641", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "26644", "Name": "Xã Hòa Hưng", "Level": "Xã" },
          { "Id": "26647", "Name": "Xã Hòa Hiệp", "Level": "Xã" },
          { "Id": "26650", "Name": "Xã Hòa Hội", "Level": "Xã" },
          { "Id": "26653", "Name": "Xã Bưng Riềng", "Level": "Xã" },
          { "Id": "26656", "Name": "Xã Bình Châu", "Level": "Xã" }
        ]
      },
      {
        "Id": "752",
        "Name": "Huyện Long Điền",
        "Wards": [
          { "Id": "26659", "Name": "Thị trấn Long Điền", "Level": "Thị trấn" },
          { "Id": "26662", "Name": "Thị trấn Long Hải", "Level": "Thị trấn" },
          { "Id": "26665", "Name": "Xã An Ngãi", "Level": "Xã" },
          { "Id": "26668", "Name": "Xã Tam Phước", "Level": "Xã" },
          { "Id": "26671", "Name": "Xã An Nhứt", "Level": "Xã" },
          { "Id": "26674", "Name": "Xã Phước Tỉnh", "Level": "Xã" },
          { "Id": "26677", "Name": "Xã Phước Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "753",
        "Name": "Huyện Đất Đỏ",
        "Wards": [
          { "Id": "26680", "Name": "Thị trấn Đất Đỏ", "Level": "Thị trấn" },
          { "Id": "26683", "Name": "Xã Phước Long Thọ", "Level": "Xã" },
          { "Id": "26686", "Name": "Xã Phước Hội", "Level": "Xã" },
          { "Id": "26689", "Name": "Xã Long Mỹ", "Level": "Xã" },
          { "Id": "26692", "Name": "Thị trấn Phước Hải", "Level": "Thị trấn" },
          { "Id": "26695", "Name": "Xã Long Tân", "Level": "Xã" },
          { "Id": "26698", "Name": "Xã Láng Dài", "Level": "Xã" },
          { "Id": "26701", "Name": "Xã Lộc An", "Level": "Xã" }
        ]
      },
      {
        "Id": "754",
        "Name": "Thị xã Phú Mỹ",
        "Wards": [
          { "Id": "26704", "Name": "Phường Phú Mỹ", "Level": "Phường" },
          { "Id": "26707", "Name": "Xã Tân Hoà", "Level": "Xã" },
          { "Id": "26710", "Name": "Xã Tân Hải", "Level": "Xã" },
          { "Id": "26713", "Name": "Phường Phước Hoà", "Level": "Phường" },
          { "Id": "26716", "Name": "Phường Tân Phước", "Level": "Phường" },
          { "Id": "26719", "Name": "Phường Mỹ Xuân", "Level": "Phường" },
          { "Id": "26722", "Name": "Xã Sông Xoài", "Level": "Xã" },
          { "Id": "26725", "Name": "Phường Hắc Dịch", "Level": "Phường" },
          { "Id": "26728", "Name": "Xã Châu Pha", "Level": "Xã" },
          { "Id": "26731", "Name": "Xã Tóc Tiên", "Level": "Xã" }
        ]
      },
      { "Id": "755", "Name": "Huyện Côn Đảo", "Wards": [{ "Level": "Huyện" }] }
    ]
  },
  {
    "Id": "79",
    "Name": "Thành phố Hồ Chí Minh",
    "Districts": [
      {
        "Id": "760",
        "Name": "Quận 1",
        "Wards": [
          { "Id": "26734", "Name": "Phường Tân Định", "Level": "Phường" },
          { "Id": "26737", "Name": "Phường Đa Kao", "Level": "Phường" },
          { "Id": "26740", "Name": "Phường Bến Nghé", "Level": "Phường" },
          { "Id": "26743", "Name": "Phường Bến Thành", "Level": "Phường" },
          {
            "Id": "26746",
            "Name": "Phường Nguyễn Thái Bình",
            "Level": "Phường"
          },
          { "Id": "26749", "Name": "Phường Phạm Ngũ Lão", "Level": "Phường" },
          { "Id": "26752", "Name": "Phường Cầu Ông Lãnh", "Level": "Phường" },
          { "Id": "26755", "Name": "Phường Cô Giang", "Level": "Phường" },
          {
            "Id": "26758",
            "Name": "Phường Nguyễn Cư Trinh",
            "Level": "Phường"
          },
          { "Id": "26761", "Name": "Phường Cầu Kho", "Level": "Phường" }
        ]
      },
      {
        "Id": "761",
        "Name": "Quận 12",
        "Wards": [
          { "Id": "26764", "Name": "Phường Thạnh Xuân", "Level": "Phường" },
          { "Id": "26767", "Name": "Phường Thạnh Lộc", "Level": "Phường" },
          { "Id": "26770", "Name": "Phường Hiệp Thành", "Level": "Phường" },
          { "Id": "26773", "Name": "Phường Thới An", "Level": "Phường" },
          { "Id": "26776", "Name": "Phường Tân Chánh Hiệp", "Level": "Phường" },
          { "Id": "26779", "Name": "Phường An Phú Đông", "Level": "Phường" },
          { "Id": "26782", "Name": "Phường Tân Thới Hiệp", "Level": "Phường" },
          { "Id": "26785", "Name": "Phường Trung Mỹ Tây", "Level": "Phường" },
          { "Id": "26787", "Name": "Phường Tân Hưng Thuận", "Level": "Phường" },
          {
            "Id": "26788",
            "Name": "Phường Đông Hưng Thuận",
            "Level": "Phường"
          },
          { "Id": "26791", "Name": "Phường Tân Thới Nhất", "Level": "Phường" }
        ]
      },
      {
        "Id": "762",
        "Name": "Quận Thủ Đức",
        "Wards": [
          { "Id": "26794", "Name": "Phường Linh Xuân", "Level": "Phường" },
          { "Id": "26797", "Name": "Phường Bình Chiểu", "Level": "Phường" },
          { "Id": "26800", "Name": "Phường Linh Trung", "Level": "Phường" },
          { "Id": "26803", "Name": "Phường Tam Bình", "Level": "Phường" },
          { "Id": "26806", "Name": "Phường Tam Phú", "Level": "Phường" },
          {
            "Id": "26809",
            "Name": "Phường Hiệp Bình Phước",
            "Level": "Phường"
          },
          {
            "Id": "26812",
            "Name": "Phường Hiệp Bình Chánh",
            "Level": "Phường"
          },
          { "Id": "26815", "Name": "Phường Linh Chiểu", "Level": "Phường" },
          { "Id": "26818", "Name": "Phường Linh Tây", "Level": "Phường" },
          { "Id": "26821", "Name": "Phường Linh Đông", "Level": "Phường" },
          { "Id": "26824", "Name": "Phường Bình Thọ", "Level": "Phường" },
          { "Id": "26827", "Name": "Phường Trường Thọ", "Level": "Phường" }
        ]
      },
      {
        "Id": "763",
        "Name": "Quận 9",
        "Wards": [
          { "Id": "26830", "Name": "Phường Long Bình", "Level": "Phường" },
          { "Id": "26833", "Name": "Phường Long Thạnh Mỹ", "Level": "Phường" },
          { "Id": "26836", "Name": "Phường Tân Phú", "Level": "Phường" },
          { "Id": "26839", "Name": "Phường Hiệp Phú", "Level": "Phường" },
          {
            "Id": "26842",
            "Name": "Phường Tăng Nhơn Phú A",
            "Level": "Phường"
          },
          {
            "Id": "26845",
            "Name": "Phường Tăng Nhơn Phú B",
            "Level": "Phường"
          },
          { "Id": "26848", "Name": "Phường Phước Long B", "Level": "Phường" },
          { "Id": "26851", "Name": "Phường Phước Long A", "Level": "Phường" },
          { "Id": "26854", "Name": "Phường Trường Thạnh", "Level": "Phường" },
          { "Id": "26857", "Name": "Phường Long Phước", "Level": "Phường" },
          { "Id": "26860", "Name": "Phường Long Trường", "Level": "Phường" },
          { "Id": "26863", "Name": "Phường Phước Bình", "Level": "Phường" },
          { "Id": "26866", "Name": "Phường Phú Hữu", "Level": "Phường" }
        ]
      },
      {
        "Id": "764",
        "Name": "Quận Gò Vấp",
        "Wards": [
          { "Id": "26869", "Name": "Phường 15", "Level": "Phường" },
          { "Id": "26872", "Name": "Phường 13", "Level": "Phường" },
          { "Id": "26875", "Name": "Phường 17", "Level": "Phường" },
          { "Id": "26876", "Name": "Phường 6", "Level": "Phường" },
          { "Id": "26878", "Name": "Phường 16", "Level": "Phường" },
          { "Id": "26881", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "26882", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "26884", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "26887", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "26890", "Name": "Phường 07", "Level": "Phường" },
          { "Id": "26893", "Name": "Phường 04", "Level": "Phường" },
          { "Id": "26896", "Name": "Phường 01", "Level": "Phường" },
          { "Id": "26897", "Name": "Phường 9", "Level": "Phường" },
          { "Id": "26898", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "26899", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "26902", "Name": "Phường 03", "Level": "Phường" }
        ]
      },
      {
        "Id": "765",
        "Name": "Quận Bình Thạnh",
        "Wards": [
          { "Id": "26905", "Name": "Phường 13", "Level": "Phường" },
          { "Id": "26908", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "26911", "Name": "Phường 27", "Level": "Phường" },
          { "Id": "26914", "Name": "Phường 26", "Level": "Phường" },
          { "Id": "26917", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "26920", "Name": "Phường 25", "Level": "Phường" },
          { "Id": "26923", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "26926", "Name": "Phường 07", "Level": "Phường" },
          { "Id": "26929", "Name": "Phường 24", "Level": "Phường" },
          { "Id": "26932", "Name": "Phường 06", "Level": "Phường" },
          { "Id": "26935", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "26938", "Name": "Phường 15", "Level": "Phường" },
          { "Id": "26941", "Name": "Phường 02", "Level": "Phường" },
          { "Id": "26944", "Name": "Phường 01", "Level": "Phường" },
          { "Id": "26947", "Name": "Phường 03", "Level": "Phường" },
          { "Id": "26950", "Name": "Phường 17", "Level": "Phường" },
          { "Id": "26953", "Name": "Phường 21", "Level": "Phường" },
          { "Id": "26956", "Name": "Phường 22", "Level": "Phường" },
          { "Id": "26959", "Name": "Phường 19", "Level": "Phường" },
          { "Id": "26962", "Name": "Phường 28", "Level": "Phường" }
        ]
      },
      {
        "Id": "766",
        "Name": "Quận Tân Bình",
        "Wards": [
          { "Id": "26965", "Name": "Phường 02", "Level": "Phường" },
          { "Id": "26968", "Name": "Phường 04", "Level": "Phường" },
          { "Id": "26971", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "26974", "Name": "Phường 13", "Level": "Phường" },
          { "Id": "26977", "Name": "Phường 01", "Level": "Phường" },
          { "Id": "26980", "Name": "Phường 03", "Level": "Phường" },
          { "Id": "26983", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "26986", "Name": "Phường 07", "Level": "Phường" },
          { "Id": "26989", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "26992", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "26995", "Name": "Phường 06", "Level": "Phường" },
          { "Id": "26998", "Name": "Phường 08", "Level": "Phường" },
          { "Id": "27001", "Name": "Phường 09", "Level": "Phường" },
          { "Id": "27004", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "27007", "Name": "Phường 15", "Level": "Phường" }
        ]
      },
      {
        "Id": "767",
        "Name": "Quận Tân Phú",
        "Wards": [
          { "Id": "27010", "Name": "Phường Tân Sơn Nhì", "Level": "Phường" },
          { "Id": "27013", "Name": "Phường Tây Thạnh", "Level": "Phường" },
          { "Id": "27016", "Name": "Phường Sơn Kỳ", "Level": "Phường" },
          { "Id": "27019", "Name": "Phường Tân Quý", "Level": "Phường" },
          { "Id": "27022", "Name": "Phường Tân Thành", "Level": "Phường" },
          { "Id": "27025", "Name": "Phường Phú Thọ Hòa", "Level": "Phường" },
          { "Id": "27028", "Name": "Phường Phú Thạnh", "Level": "Phường" },
          { "Id": "27031", "Name": "Phường Phú Trung", "Level": "Phường" },
          { "Id": "27034", "Name": "Phường Hòa Thạnh", "Level": "Phường" },
          { "Id": "27037", "Name": "Phường Hiệp Tân", "Level": "Phường" },
          { "Id": "27040", "Name": "Phường Tân Thới Hòa", "Level": "Phường" }
        ]
      },
      {
        "Id": "768",
        "Name": "Quận Phú Nhuận",
        "Wards": [
          { "Id": "27043", "Name": "Phường 04", "Level": "Phường" },
          { "Id": "27046", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "27049", "Name": "Phường 09", "Level": "Phường" },
          { "Id": "27052", "Name": "Phường 07", "Level": "Phường" },
          { "Id": "27055", "Name": "Phường 03", "Level": "Phường" },
          { "Id": "27058", "Name": "Phường 01", "Level": "Phường" },
          { "Id": "27061", "Name": "Phường 02", "Level": "Phường" },
          { "Id": "27064", "Name": "Phường 08", "Level": "Phường" },
          { "Id": "27067", "Name": "Phường 15", "Level": "Phường" },
          { "Id": "27070", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "27073", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "27076", "Name": "Phường 17", "Level": "Phường" },
          { "Id": "27079", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "27082", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "27085", "Name": "Phường 13", "Level": "Phường" }
        ]
      },
      {
        "Id": "769",
        "Name": "Quận 2",
        "Wards": [
          { "Id": "27088", "Name": "Phường Thảo Điền", "Level": "Phường" },
          { "Id": "27091", "Name": "Phường An Phú", "Level": "Phường" },
          { "Id": "27094", "Name": "Phường Bình An", "Level": "Phường" },
          {
            "Id": "27097",
            "Name": "Phường Bình Trưng Đông",
            "Level": "Phường"
          },
          { "Id": "27100", "Name": "Phường Bình Trưng Tây", "Level": "Phường" },
          { "Id": "27103", "Name": "Phường Bình Khánh", "Level": "Phường" },
          { "Id": "27106", "Name": "Phường An Khánh", "Level": "Phường" },
          { "Id": "27109", "Name": "Phường Cát Lái", "Level": "Phường" },
          { "Id": "27112", "Name": "Phường Thạnh Mỹ Lợi", "Level": "Phường" },
          { "Id": "27115", "Name": "Phường An Lợi Đông", "Level": "Phường" },
          { "Id": "27118", "Name": "Phường Thủ Thiêm", "Level": "Phường" }
        ]
      },
      {
        "Id": "770",
        "Name": "Quận 3",
        "Wards": [
          { "Id": "27121", "Name": "Phường 08", "Level": "Phường" },
          { "Id": "27124", "Name": "Phường 07", "Level": "Phường" },
          { "Id": "27127", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "27130", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "27133", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "27136", "Name": "Phường 13", "Level": "Phường" },
          { "Id": "27139", "Name": "Phường 06", "Level": "Phường" },
          { "Id": "27142", "Name": "Phường 09", "Level": "Phường" },
          { "Id": "27145", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "27148", "Name": "Phường 04", "Level": "Phường" },
          { "Id": "27151", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "27154", "Name": "Phường 03", "Level": "Phường" },
          { "Id": "27157", "Name": "Phường 02", "Level": "Phường" },
          { "Id": "27160", "Name": "Phường 01", "Level": "Phường" }
        ]
      },
      {
        "Id": "771",
        "Name": "Quận 10",
        "Wards": [
          { "Id": "27163", "Name": "Phường 15", "Level": "Phường" },
          { "Id": "27166", "Name": "Phường 13", "Level": "Phường" },
          { "Id": "27169", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "27172", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "27175", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "27178", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "27181", "Name": "Phường 09", "Level": "Phường" },
          { "Id": "27184", "Name": "Phường 01", "Level": "Phường" },
          { "Id": "27187", "Name": "Phường 08", "Level": "Phường" },
          { "Id": "27190", "Name": "Phường 02", "Level": "Phường" },
          { "Id": "27193", "Name": "Phường 04", "Level": "Phường" },
          { "Id": "27196", "Name": "Phường 07", "Level": "Phường" },
          { "Id": "27199", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "27202", "Name": "Phường 06", "Level": "Phường" },
          { "Id": "27205", "Name": "Phường 03", "Level": "Phường" }
        ]
      },
      {
        "Id": "772",
        "Name": "Quận 11",
        "Wards": [
          { "Id": "27208", "Name": "Phường 15", "Level": "Phường" },
          { "Id": "27211", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "27214", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "27217", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "27220", "Name": "Phường 03", "Level": "Phường" },
          { "Id": "27223", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "27226", "Name": "Phường 13", "Level": "Phường" },
          { "Id": "27229", "Name": "Phường 08", "Level": "Phường" },
          { "Id": "27232", "Name": "Phường 09", "Level": "Phường" },
          { "Id": "27235", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "27238", "Name": "Phường 07", "Level": "Phường" },
          { "Id": "27241", "Name": "Phường 06", "Level": "Phường" },
          { "Id": "27244", "Name": "Phường 04", "Level": "Phường" },
          { "Id": "27247", "Name": "Phường 01", "Level": "Phường" },
          { "Id": "27250", "Name": "Phường 02", "Level": "Phường" },
          { "Id": "27253", "Name": "Phường 16", "Level": "Phường" }
        ]
      },
      {
        "Id": "773",
        "Name": "Quận 4",
        "Wards": [
          { "Id": "27256", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "27259", "Name": "Phường 13", "Level": "Phường" },
          { "Id": "27262", "Name": "Phường 09", "Level": "Phường" },
          { "Id": "27265", "Name": "Phường 06", "Level": "Phường" },
          { "Id": "27268", "Name": "Phường 08", "Level": "Phường" },
          { "Id": "27271", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "27274", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "27277", "Name": "Phường 18", "Level": "Phường" },
          { "Id": "27280", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "27283", "Name": "Phường 04", "Level": "Phường" },
          { "Id": "27286", "Name": "Phường 03", "Level": "Phường" },
          { "Id": "27289", "Name": "Phường 16", "Level": "Phường" },
          { "Id": "27292", "Name": "Phường 02", "Level": "Phường" },
          { "Id": "27295", "Name": "Phường 15", "Level": "Phường" },
          { "Id": "27298", "Name": "Phường 01", "Level": "Phường" }
        ]
      },
      {
        "Id": "774",
        "Name": "Quận 5",
        "Wards": [
          { "Id": "27301", "Name": "Phường 04", "Level": "Phường" },
          { "Id": "27304", "Name": "Phường 09", "Level": "Phường" },
          { "Id": "27307", "Name": "Phường 03", "Level": "Phường" },
          { "Id": "27310", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "27313", "Name": "Phường 02", "Level": "Phường" },
          { "Id": "27316", "Name": "Phường 08", "Level": "Phường" },
          { "Id": "27319", "Name": "Phường 15", "Level": "Phường" },
          { "Id": "27322", "Name": "Phường 07", "Level": "Phường" },
          { "Id": "27325", "Name": "Phường 01", "Level": "Phường" },
          { "Id": "27328", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "27331", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "27334", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "27337", "Name": "Phường 06", "Level": "Phường" },
          { "Id": "27340", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "27343", "Name": "Phường 13", "Level": "Phường" }
        ]
      },
      {
        "Id": "775",
        "Name": "Quận 6",
        "Wards": [
          { "Id": "27346", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "27349", "Name": "Phường 13", "Level": "Phường" },
          { "Id": "27352", "Name": "Phường 09", "Level": "Phường" },
          { "Id": "27355", "Name": "Phường 06", "Level": "Phường" },
          { "Id": "27358", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "27361", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "27364", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "27367", "Name": "Phường 02", "Level": "Phường" },
          { "Id": "27370", "Name": "Phường 01", "Level": "Phường" },
          { "Id": "27373", "Name": "Phường 04", "Level": "Phường" },
          { "Id": "27376", "Name": "Phường 08", "Level": "Phường" },
          { "Id": "27379", "Name": "Phường 03", "Level": "Phường" },
          { "Id": "27382", "Name": "Phường 07", "Level": "Phường" },
          { "Id": "27385", "Name": "Phường 10", "Level": "Phường" }
        ]
      },
      {
        "Id": "776",
        "Name": "Quận 8",
        "Wards": [
          { "Id": "27388", "Name": "Phường 08", "Level": "Phường" },
          { "Id": "27391", "Name": "Phường 02", "Level": "Phường" },
          { "Id": "27394", "Name": "Phường 01", "Level": "Phường" },
          { "Id": "27397", "Name": "Phường 03", "Level": "Phường" },
          { "Id": "27400", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "27403", "Name": "Phường 09", "Level": "Phường" },
          { "Id": "27406", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "27409", "Name": "Phường 04", "Level": "Phường" },
          { "Id": "27412", "Name": "Phường 13", "Level": "Phường" },
          { "Id": "27415", "Name": "Phường 12", "Level": "Phường" },
          { "Id": "27418", "Name": "Phường 05", "Level": "Phường" },
          { "Id": "27421", "Name": "Phường 14", "Level": "Phường" },
          { "Id": "27424", "Name": "Phường 06", "Level": "Phường" },
          { "Id": "27427", "Name": "Phường 15", "Level": "Phường" },
          { "Id": "27430", "Name": "Phường 16", "Level": "Phường" },
          { "Id": "27433", "Name": "Phường 07", "Level": "Phường" }
        ]
      },
      {
        "Id": "777",
        "Name": "Quận Bình Tân",
        "Wards": [
          { "Id": "27436", "Name": "Phường Bình Hưng Hòa", "Level": "Phường" },
          {
            "Id": "27439",
            "Name": "Phường Bình Hưng Hoà A",
            "Level": "Phường"
          },
          {
            "Id": "27442",
            "Name": "Phường Bình Hưng Hoà B",
            "Level": "Phường"
          },
          { "Id": "27445", "Name": "Phường Bình Trị Đông", "Level": "Phường" },
          {
            "Id": "27448",
            "Name": "Phường Bình Trị Đông A",
            "Level": "Phường"
          },
          {
            "Id": "27451",
            "Name": "Phường Bình Trị Đông B",
            "Level": "Phường"
          },
          { "Id": "27454", "Name": "Phường Tân Tạo", "Level": "Phường" },
          { "Id": "27457", "Name": "Phường Tân Tạo A", "Level": "Phường" },
          { "Id": "27460", "Name": "Phường  An Lạc", "Level": "Phường" },
          { "Id": "27463", "Name": "Phường An Lạc A", "Level": "Phường" }
        ]
      },
      {
        "Id": "778",
        "Name": "Quận 7",
        "Wards": [
          { "Id": "27466", "Name": "Phường Tân Thuận Đông", "Level": "Phường" },
          { "Id": "27469", "Name": "Phường Tân Thuận Tây", "Level": "Phường" },
          { "Id": "27472", "Name": "Phường Tân Kiểng", "Level": "Phường" },
          { "Id": "27475", "Name": "Phường Tân Hưng", "Level": "Phường" },
          { "Id": "27478", "Name": "Phường Bình Thuận", "Level": "Phường" },
          { "Id": "27481", "Name": "Phường Tân Quy", "Level": "Phường" },
          { "Id": "27484", "Name": "Phường Phú Thuận", "Level": "Phường" },
          { "Id": "27487", "Name": "Phường Tân Phú", "Level": "Phường" },
          { "Id": "27490", "Name": "Phường Tân Phong", "Level": "Phường" },
          { "Id": "27493", "Name": "Phường Phú Mỹ", "Level": "Phường" }
        ]
      },
      {
        "Id": "783",
        "Name": "Huyện Củ Chi",
        "Wards": [
          { "Id": "27496", "Name": "Thị trấn Củ Chi", "Level": "Thị trấn" },
          { "Id": "27499", "Name": "Xã Phú Mỹ Hưng", "Level": "Xã" },
          { "Id": "27502", "Name": "Xã An Phú", "Level": "Xã" },
          { "Id": "27505", "Name": "Xã Trung Lập Thượng", "Level": "Xã" },
          { "Id": "27508", "Name": "Xã An Nhơn Tây", "Level": "Xã" },
          { "Id": "27511", "Name": "Xã Nhuận Đức", "Level": "Xã" },
          { "Id": "27514", "Name": "Xã Phạm Văn Cội", "Level": "Xã" },
          { "Id": "27517", "Name": "Xã Phú Hòa Đông", "Level": "Xã" },
          { "Id": "27520", "Name": "Xã Trung Lập Hạ", "Level": "Xã" },
          { "Id": "27523", "Name": "Xã Trung An", "Level": "Xã" },
          { "Id": "27526", "Name": "Xã Phước Thạnh", "Level": "Xã" },
          { "Id": "27529", "Name": "Xã Phước Hiệp", "Level": "Xã" },
          { "Id": "27532", "Name": "Xã Tân An Hội", "Level": "Xã" },
          { "Id": "27535", "Name": "Xã Phước Vĩnh An", "Level": "Xã" },
          { "Id": "27538", "Name": "Xã Thái Mỹ", "Level": "Xã" },
          { "Id": "27541", "Name": "Xã Tân Thạnh Tây", "Level": "Xã" },
          { "Id": "27544", "Name": "Xã Hòa Phú", "Level": "Xã" },
          { "Id": "27547", "Name": "Xã Tân Thạnh Đông", "Level": "Xã" },
          { "Id": "27550", "Name": "Xã Bình Mỹ", "Level": "Xã" },
          { "Id": "27553", "Name": "Xã Tân Phú Trung", "Level": "Xã" },
          { "Id": "27556", "Name": "Xã Tân Thông Hội", "Level": "Xã" }
        ]
      },
      {
        "Id": "784",
        "Name": "Huyện Hóc Môn",
        "Wards": [
          { "Id": "27559", "Name": "Thị trấn Hóc Môn", "Level": "Thị trấn" },
          { "Id": "27562", "Name": "Xã Tân Hiệp", "Level": "Xã" },
          { "Id": "27565", "Name": "Xã Nhị Bình", "Level": "Xã" },
          { "Id": "27568", "Name": "Xã Đông Thạnh", "Level": "Xã" },
          { "Id": "27571", "Name": "Xã Tân Thới Nhì", "Level": "Xã" },
          { "Id": "27574", "Name": "Xã Thới Tam Thôn", "Level": "Xã" },
          { "Id": "27577", "Name": "Xã Xuân Thới Sơn", "Level": "Xã" },
          { "Id": "27580", "Name": "Xã Tân Xuân", "Level": "Xã" },
          { "Id": "27583", "Name": "Xã Xuân Thới Đông", "Level": "Xã" },
          { "Id": "27586", "Name": "Xã Trung Chánh", "Level": "Xã" },
          { "Id": "27589", "Name": "Xã Xuân Thới Thượng", "Level": "Xã" },
          { "Id": "27592", "Name": "Xã Bà Điểm", "Level": "Xã" }
        ]
      },
      {
        "Id": "785",
        "Name": "Huyện Bình Chánh",
        "Wards": [
          { "Id": "27595", "Name": "Thị trấn Tân Túc", "Level": "Thị trấn" },
          { "Id": "27598", "Name": "Xã Phạm Văn Hai", "Level": "Xã" },
          { "Id": "27601", "Name": "Xã Vĩnh Lộc A", "Level": "Xã" },
          { "Id": "27604", "Name": "Xã Vĩnh Lộc B", "Level": "Xã" },
          { "Id": "27607", "Name": "Xã Bình Lợi", "Level": "Xã" },
          { "Id": "27610", "Name": "Xã Lê Minh Xuân", "Level": "Xã" },
          { "Id": "27613", "Name": "Xã Tân Nhựt", "Level": "Xã" },
          { "Id": "27616", "Name": "Xã Tân Kiên", "Level": "Xã" },
          { "Id": "27619", "Name": "Xã Bình Hưng", "Level": "Xã" },
          { "Id": "27622", "Name": "Xã Phong Phú", "Level": "Xã" },
          { "Id": "27625", "Name": "Xã An Phú Tây", "Level": "Xã" },
          { "Id": "27628", "Name": "Xã Hưng Long", "Level": "Xã" },
          { "Id": "27631", "Name": "Xã Đa Phước", "Level": "Xã" },
          { "Id": "27634", "Name": "Xã Tân Quý Tây", "Level": "Xã" },
          { "Id": "27637", "Name": "Xã Bình Chánh", "Level": "Xã" },
          { "Id": "27640", "Name": "Xã Quy Đức", "Level": "Xã" }
        ]
      },
      {
        "Id": "786",
        "Name": "Huyện Nhà Bè",
        "Wards": [
          { "Id": "27643", "Name": "Thị trấn Nhà Bè", "Level": "Thị trấn" },
          { "Id": "27646", "Name": "Xã Phước Kiển", "Level": "Xã" },
          { "Id": "27649", "Name": "Xã Phước Lộc", "Level": "Xã" },
          { "Id": "27652", "Name": "Xã Nhơn Đức", "Level": "Xã" },
          { "Id": "27655", "Name": "Xã Phú Xuân", "Level": "Xã" },
          { "Id": "27658", "Name": "Xã Long Thới", "Level": "Xã" },
          { "Id": "27661", "Name": "Xã Hiệp Phước", "Level": "Xã" }
        ]
      },
      {
        "Id": "787",
        "Name": "Huyện Cần Giờ",
        "Wards": [
          { "Id": "27664", "Name": "Thị trấn Cần Thạnh", "Level": "Thị trấn" },
          { "Id": "27667", "Name": "Xã Bình Khánh", "Level": "Xã" },
          { "Id": "27670", "Name": "Xã Tam Thôn Hiệp", "Level": "Xã" },
          { "Id": "27673", "Name": "Xã An Thới Đông", "Level": "Xã" },
          { "Id": "27676", "Name": "Xã Thạnh An", "Level": "Xã" },
          { "Id": "27679", "Name": "Xã Long Hòa", "Level": "Xã" },
          { "Id": "27682", "Name": "Xã Lý Nhơn", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "80",
    "Name": "Tỉnh Long An",
    "Districts": [
      {
        "Id": "794",
        "Name": "Thành phố Tân An",
        "Wards": [
          { "Id": "27685", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "27688", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "27691", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "27692", "Name": "Phường Tân Khánh", "Level": "Phường" },
          { "Id": "27694", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "27697", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "27698", "Name": "Phường 7", "Level": "Phường" },
          { "Id": "27700", "Name": "Phường 6", "Level": "Phường" },
          { "Id": "27703", "Name": "Xã Hướng Thọ Phú", "Level": "Xã" },
          { "Id": "27706", "Name": "Xã Nhơn Thạnh Trung", "Level": "Xã" },
          { "Id": "27709", "Name": "Xã Lợi Bình Nhơn", "Level": "Xã" },
          { "Id": "27712", "Name": "Xã Bình Tâm", "Level": "Xã" },
          { "Id": "27715", "Name": "Phường Khánh Hậu", "Level": "Phường" },
          { "Id": "27718", "Name": "Xã An Vĩnh Ngãi", "Level": "Xã" }
        ]
      },
      {
        "Id": "795",
        "Name": "Thị xã Kiến Tường",
        "Wards": [
          { "Id": "27787", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "27788", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "27790", "Name": "Xã Thạnh Trị", "Level": "Xã" },
          { "Id": "27793", "Name": "Xã Bình Hiệp", "Level": "Xã" },
          { "Id": "27799", "Name": "Xã Bình Tân", "Level": "Xã" },
          { "Id": "27805", "Name": "Xã Tuyên Thạnh", "Level": "Xã" },
          { "Id": "27806", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "27817", "Name": "Xã Thạnh Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "796",
        "Name": "Huyện Tân Hưng",
        "Wards": [
          { "Id": "27721", "Name": "Thị trấn Tân Hưng", "Level": "Thị trấn" },
          { "Id": "27724", "Name": "Xã Hưng Hà", "Level": "Xã" },
          { "Id": "27727", "Name": "Xã Hưng Điền B", "Level": "Xã" },
          { "Id": "27730", "Name": "Xã Hưng Điền", "Level": "Xã" },
          { "Id": "27733", "Name": "Xã Thạnh Hưng", "Level": "Xã" },
          { "Id": "27736", "Name": "Xã Hưng Thạnh", "Level": "Xã" },
          { "Id": "27739", "Name": "Xã Vĩnh Thạnh", "Level": "Xã" },
          { "Id": "27742", "Name": "Xã Vĩnh Châu B", "Level": "Xã" },
          { "Id": "27745", "Name": "Xã Vĩnh Lợi", "Level": "Xã" },
          { "Id": "27748", "Name": "Xã Vĩnh Đại", "Level": "Xã" },
          { "Id": "27751", "Name": "Xã Vĩnh Châu A", "Level": "Xã" },
          { "Id": "27754", "Name": "Xã Vĩnh Bửu", "Level": "Xã" }
        ]
      },
      {
        "Id": "797",
        "Name": "Huyện Vĩnh Hưng",
        "Wards": [
          { "Id": "27757", "Name": "Thị trấn Vĩnh Hưng", "Level": "Thị trấn" },
          { "Id": "27760", "Name": "Xã Hưng Điền A", "Level": "Xã" },
          { "Id": "27763", "Name": "Xã Khánh Hưng", "Level": "Xã" },
          { "Id": "27766", "Name": "Xã Thái Trị", "Level": "Xã" },
          { "Id": "27769", "Name": "Xã Vĩnh Trị", "Level": "Xã" },
          { "Id": "27772", "Name": "Xã Thái Bình Trung", "Level": "Xã" },
          { "Id": "27775", "Name": "Xã Vĩnh Bình", "Level": "Xã" },
          { "Id": "27778", "Name": "Xã Vĩnh Thuận", "Level": "Xã" },
          { "Id": "27781", "Name": "Xã Tuyên Bình", "Level": "Xã" },
          { "Id": "27784", "Name": "Xã Tuyên Bình Tây", "Level": "Xã" }
        ]
      },
      {
        "Id": "798",
        "Name": "Huyện Mộc Hóa",
        "Wards": [
          { "Id": "27796", "Name": "Xã Bình Hòa Tây", "Level": "Xã" },
          { "Id": "27802", "Name": "Xã Bình Thạnh", "Level": "Xã" },
          { "Id": "27808", "Name": "Xã Bình Hòa Trung", "Level": "Xã" },
          { "Id": "27811", "Name": "Xã Bình Hòa Đông", "Level": "Xã" },
          {
            "Id": "27814",
            "Name": "Thị trấn Bình Phong Thạnh",
            "Level": "Thị trấn"
          },
          { "Id": "27820", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "27823", "Name": "Xã Tân Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "799",
        "Name": "Huyện Tân Thạnh",
        "Wards": [
          { "Id": "27826", "Name": "Thị trấn Tân Thạnh", "Level": "Thị trấn" },
          { "Id": "27829", "Name": "Xã Bắc Hòa", "Level": "Xã" },
          { "Id": "27832", "Name": "Xã Hậu Thạnh Tây", "Level": "Xã" },
          { "Id": "27835", "Name": "Xã Nhơn Hòa Lập", "Level": "Xã" },
          { "Id": "27838", "Name": "Xã Tân Lập", "Level": "Xã" },
          { "Id": "27841", "Name": "Xã Hậu Thạnh Đông", "Level": "Xã" },
          { "Id": "27844", "Name": "Xã Nhơn Hoà", "Level": "Xã" },
          { "Id": "27847", "Name": "Xã Kiến Bình", "Level": "Xã" },
          { "Id": "27850", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "27853", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "27856", "Name": "Xã Tân Ninh", "Level": "Xã" },
          { "Id": "27859", "Name": "Xã Nhơn Ninh", "Level": "Xã" },
          { "Id": "27862", "Name": "Xã Tân Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "800",
        "Name": "Huyện Thạnh Hóa",
        "Wards": [
          { "Id": "27865", "Name": "Thị trấn Thạnh Hóa", "Level": "Thị trấn" },
          { "Id": "27868", "Name": "Xã Tân Hiệp", "Level": "Xã" },
          { "Id": "27871", "Name": "Xã Thuận Bình", "Level": "Xã" },
          { "Id": "27874", "Name": "Xã Thạnh Phước", "Level": "Xã" },
          { "Id": "27877", "Name": "Xã Thạnh Phú", "Level": "Xã" },
          { "Id": "27880", "Name": "Xã Thuận Nghĩa Hòa", "Level": "Xã" },
          { "Id": "27883", "Name": "Xã Thủy Đông", "Level": "Xã" },
          { "Id": "27886", "Name": "Xã Thủy Tây", "Level": "Xã" },
          { "Id": "27889", "Name": "Xã Tân Tây", "Level": "Xã" },
          { "Id": "27892", "Name": "Xã Tân Đông", "Level": "Xã" },
          { "Id": "27895", "Name": "Xã Thạnh An", "Level": "Xã" }
        ]
      },
      {
        "Id": "801",
        "Name": "Huyện Đức Huệ",
        "Wards": [
          { "Id": "27898", "Name": "Thị trấn Đông Thành", "Level": "Thị trấn" },
          { "Id": "27901", "Name": "Xã Mỹ Quý Đông", "Level": "Xã" },
          { "Id": "27904", "Name": "Xã Mỹ Thạnh Bắc", "Level": "Xã" },
          { "Id": "27907", "Name": "Xã Mỹ Quý Tây", "Level": "Xã" },
          { "Id": "27910", "Name": "Xã Mỹ Thạnh Tây", "Level": "Xã" },
          { "Id": "27913", "Name": "Xã Mỹ Thạnh Đông", "Level": "Xã" },
          { "Id": "27916", "Name": "Xã Bình Thành", "Level": "Xã" },
          { "Id": "27919", "Name": "Xã Bình Hòa Bắc", "Level": "Xã" },
          { "Id": "27922", "Name": "Xã Bình Hòa Hưng", "Level": "Xã" },
          { "Id": "27925", "Name": "Xã Bình Hòa Nam", "Level": "Xã" },
          { "Id": "27928", "Name": "Xã Mỹ Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "802",
        "Name": "Huyện Đức Hòa",
        "Wards": [
          { "Id": "27931", "Name": "Thị trấn Hậu Nghĩa", "Level": "Thị trấn" },
          { "Id": "27934", "Name": "Thị trấn Hiệp Hòa", "Level": "Thị trấn" },
          { "Id": "27937", "Name": "Thị trấn Đức Hòa", "Level": "Thị trấn" },
          { "Id": "27940", "Name": "Xã Lộc Giang", "Level": "Xã" },
          { "Id": "27943", "Name": "Xã An Ninh Đông", "Level": "Xã" },
          { "Id": "27946", "Name": "Xã An Ninh Tây", "Level": "Xã" },
          { "Id": "27949", "Name": "Xã Tân Mỹ", "Level": "Xã" },
          { "Id": "27952", "Name": "Xã Hiệp Hòa", "Level": "Xã" },
          { "Id": "27955", "Name": "Xã Đức Lập Thượng", "Level": "Xã" },
          { "Id": "27958", "Name": "Xã Đức Lập Hạ", "Level": "Xã" },
          { "Id": "27961", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "27964", "Name": "Xã Mỹ Hạnh Bắc", "Level": "Xã" },
          { "Id": "27967", "Name": "Xã Đức Hòa Thượng", "Level": "Xã" },
          { "Id": "27970", "Name": "Xã Hòa Khánh Tây", "Level": "Xã" },
          { "Id": "27973", "Name": "Xã Hòa Khánh Đông", "Level": "Xã" },
          { "Id": "27976", "Name": "Xã Mỹ Hạnh Nam", "Level": "Xã" },
          { "Id": "27979", "Name": "Xã Hòa Khánh Nam", "Level": "Xã" },
          { "Id": "27982", "Name": "Xã Đức Hòa Đông", "Level": "Xã" },
          { "Id": "27985", "Name": "Xã Đức Hòa Hạ", "Level": "Xã" },
          { "Id": "27988", "Name": "Xã Hựu Thạnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "803",
        "Name": "Huyện Bến Lức",
        "Wards": [
          { "Id": "27991", "Name": "Thị trấn Bến Lức", "Level": "Thị trấn" },
          { "Id": "27994", "Name": "Xã Thạnh Lợi", "Level": "Xã" },
          { "Id": "27997", "Name": "Xã Lương Bình", "Level": "Xã" },
          { "Id": "28000", "Name": "Xã Thạnh Hòa", "Level": "Xã" },
          { "Id": "28003", "Name": "Xã Lương Hòa", "Level": "Xã" },
          { "Id": "28006", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "28009", "Name": "Xã Tân Bửu", "Level": "Xã" },
          { "Id": "28012", "Name": "Xã An Thạnh", "Level": "Xã" },
          { "Id": "28015", "Name": "Xã Bình Đức", "Level": "Xã" },
          { "Id": "28018", "Name": "Xã Mỹ Yên", "Level": "Xã" },
          { "Id": "28021", "Name": "Xã Thanh Phú", "Level": "Xã" },
          { "Id": "28024", "Name": "Xã Long Hiệp", "Level": "Xã" },
          { "Id": "28027", "Name": "Xã Thạnh Đức", "Level": "Xã" },
          { "Id": "28030", "Name": "Xã Phước Lợi", "Level": "Xã" },
          { "Id": "28033", "Name": "Xã Nhựt Chánh", "Level": "Xã" }
        ]
      },
      {
        "Id": "804",
        "Name": "Huyện Thủ Thừa",
        "Wards": [
          { "Id": "28036", "Name": "Thị trấn Thủ Thừa", "Level": "Thị trấn" },
          { "Id": "28039", "Name": "Xã Long Thạnh", "Level": "Xã" },
          { "Id": "28042", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "28045", "Name": "Xã Long Thuận", "Level": "Xã" },
          { "Id": "28048", "Name": "Xã Mỹ Lạc", "Level": "Xã" },
          { "Id": "28051", "Name": "Xã Mỹ Thạnh", "Level": "Xã" },
          { "Id": "28054", "Name": "Xã Bình An", "Level": "Xã" },
          { "Id": "28057", "Name": "Xã Nhị Thành", "Level": "Xã" },
          { "Id": "28060", "Name": "Xã Mỹ An", "Level": "Xã" },
          { "Id": "28063", "Name": "Xã Bình Thạnh", "Level": "Xã" },
          { "Id": "28066", "Name": "Xã Mỹ Phú", "Level": "Xã" },
          { "Id": "28072", "Name": "Xã Tân Long", "Level": "Xã" }
        ]
      },
      {
        "Id": "805",
        "Name": "Huyện Tân Trụ",
        "Wards": [
          { "Id": "28075", "Name": "Thị trấn Tân Trụ", "Level": "Thị trấn" },
          { "Id": "28078", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "28084", "Name": "Xã Quê Mỹ Thạnh", "Level": "Xã" },
          { "Id": "28087", "Name": "Xã Lạc Tấn", "Level": "Xã" },
          { "Id": "28090", "Name": "Xã Bình Trinh Đông", "Level": "Xã" },
          { "Id": "28093", "Name": "Xã Tân Phước Tây", "Level": "Xã" },
          { "Id": "28096", "Name": "Xã Bình Lãng", "Level": "Xã" },
          { "Id": "28099", "Name": "Xã Bình Tịnh", "Level": "Xã" },
          { "Id": "28102", "Name": "Xã Đức Tân", "Level": "Xã" },
          { "Id": "28105", "Name": "Xã Nhựt Ninh", "Level": "Xã" }
        ]
      },
      {
        "Id": "806",
        "Name": "Huyện Cần Đước",
        "Wards": [
          { "Id": "28108", "Name": "Thị trấn Cần Đước", "Level": "Thị trấn" },
          { "Id": "28111", "Name": "Xã Long Trạch", "Level": "Xã" },
          { "Id": "28114", "Name": "Xã Long Khê", "Level": "Xã" },
          { "Id": "28117", "Name": "Xã Long Định", "Level": "Xã" },
          { "Id": "28120", "Name": "Xã Phước Vân", "Level": "Xã" },
          { "Id": "28123", "Name": "Xã Long Hòa", "Level": "Xã" },
          { "Id": "28126", "Name": "Xã Long Cang", "Level": "Xã" },
          { "Id": "28129", "Name": "Xã Long Sơn", "Level": "Xã" },
          { "Id": "28132", "Name": "Xã Tân Trạch", "Level": "Xã" },
          { "Id": "28135", "Name": "Xã Mỹ Lệ", "Level": "Xã" },
          { "Id": "28138", "Name": "Xã Tân Lân", "Level": "Xã" },
          { "Id": "28141", "Name": "Xã Phước Tuy", "Level": "Xã" },
          { "Id": "28144", "Name": "Xã Long Hựu Đông", "Level": "Xã" },
          { "Id": "28147", "Name": "Xã Tân Ân", "Level": "Xã" },
          { "Id": "28150", "Name": "Xã Phước Đông", "Level": "Xã" },
          { "Id": "28153", "Name": "Xã Long Hựu Tây", "Level": "Xã" },
          { "Id": "28156", "Name": "Xã Tân Chánh", "Level": "Xã" }
        ]
      },
      {
        "Id": "807",
        "Name": "Huyện Cần Giuộc",
        "Wards": [
          { "Id": "28159", "Name": "Thị trấn Cần Giuộc", "Level": "Thị trấn" },
          { "Id": "28162", "Name": "Xã Phước Lý", "Level": "Xã" },
          { "Id": "28165", "Name": "Xã Long Thượng", "Level": "Xã" },
          { "Id": "28168", "Name": "Xã Long Hậu", "Level": "Xã" },
          { "Id": "28174", "Name": "Xã Phước Hậu", "Level": "Xã" },
          { "Id": "28177", "Name": "Xã Mỹ Lộc", "Level": "Xã" },
          { "Id": "28180", "Name": "Xã Phước Lại", "Level": "Xã" },
          { "Id": "28183", "Name": "Xã Phước Lâm", "Level": "Xã" },
          { "Id": "28189", "Name": "Xã Thuận Thành", "Level": "Xã" },
          { "Id": "28192", "Name": "Xã Phước Vĩnh Tây", "Level": "Xã" },
          { "Id": "28195", "Name": "Xã Phước Vĩnh Đông", "Level": "Xã" },
          { "Id": "28198", "Name": "Xã Long An", "Level": "Xã" },
          { "Id": "28201", "Name": "Xã Long Phụng", "Level": "Xã" },
          { "Id": "28204", "Name": "Xã Đông Thạnh", "Level": "Xã" },
          { "Id": "28207", "Name": "Xã Tân Tập", "Level": "Xã" }
        ]
      },
      {
        "Id": "808",
        "Name": "Huyện Châu Thành",
        "Wards": [
          { "Id": "28210", "Name": "Thị trấn Tầm Vu", "Level": "Thị trấn" },
          { "Id": "28213", "Name": "Xã Bình Quới", "Level": "Xã" },
          { "Id": "28216", "Name": "Xã Hòa Phú", "Level": "Xã" },
          { "Id": "28219", "Name": "Xã Phú Ngãi Trị", "Level": "Xã" },
          { "Id": "28222", "Name": "Xã Vĩnh Công", "Level": "Xã" },
          { "Id": "28225", "Name": "Xã Thuận Mỹ", "Level": "Xã" },
          { "Id": "28228", "Name": "Xã Hiệp Thạnh", "Level": "Xã" },
          { "Id": "28231", "Name": "Xã Phước Tân Hưng", "Level": "Xã" },
          { "Id": "28234", "Name": "Xã Thanh Phú Long", "Level": "Xã" },
          { "Id": "28237", "Name": "Xã Dương Xuân Hội", "Level": "Xã" },
          { "Id": "28240", "Name": "Xã An Lục Long", "Level": "Xã" },
          { "Id": "28243", "Name": "Xã Long Trì", "Level": "Xã" },
          { "Id": "28246", "Name": "Xã Thanh Vĩnh Đông", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "82",
    "Name": "Tỉnh Tiền Giang",
    "Districts": [
      {
        "Id": "815",
        "Name": "Thành phố Mỹ Tho",
        "Wards": [
          { "Id": "28249", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "28252", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "28255", "Name": "Phường 7", "Level": "Phường" },
          { "Id": "28258", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "28261", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "28264", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "28267", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "28270", "Name": "Phường 6", "Level": "Phường" },
          { "Id": "28273", "Name": "Phường 9", "Level": "Phường" },
          { "Id": "28276", "Name": "Phường 10", "Level": "Phường" },
          { "Id": "28279", "Name": "Phường Tân Long", "Level": "Phường" },
          { "Id": "28282", "Name": "Xã Đạo Thạnh", "Level": "Xã" },
          { "Id": "28285", "Name": "Xã Trung An", "Level": "Xã" },
          { "Id": "28288", "Name": "Xã Mỹ Phong", "Level": "Xã" },
          { "Id": "28291", "Name": "Xã Tân Mỹ Chánh", "Level": "Xã" },
          { "Id": "28567", "Name": "Xã Phước Thạnh", "Level": "Xã" },
          { "Id": "28591", "Name": "Xã Thới Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "816",
        "Name": "Thị xã Gò Công",
        "Wards": [
          { "Id": "28294", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "28297", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "28300", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "28303", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "28306", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "28309", "Name": "Xã Long Hưng", "Level": "Xã" },
          { "Id": "28312", "Name": "Xã Long Thuận", "Level": "Xã" },
          { "Id": "28315", "Name": "Xã Long Chánh", "Level": "Xã" },
          { "Id": "28318", "Name": "Xã Long Hòa", "Level": "Xã" },
          { "Id": "28708", "Name": "Xã Bình Đông", "Level": "Xã" },
          { "Id": "28717", "Name": "Xã Bình Xuân", "Level": "Xã" },
          { "Id": "28729", "Name": "Xã Tân Trung", "Level": "Xã" }
        ]
      },
      {
        "Id": "817",
        "Name": "Thị xã Cai Lậy",
        "Wards": [
          { "Id": "28435", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "28436", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "28437", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "28439", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "28440", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "28447", "Name": "Xã Mỹ Phước Tây", "Level": "Xã" },
          { "Id": "28450", "Name": "Xã Mỹ Hạnh Đông", "Level": "Xã" },
          { "Id": "28453", "Name": "Xã Mỹ Hạnh Trung", "Level": "Xã" },
          { "Id": "28459", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "28462", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "28468", "Name": "Xã Tân Hội", "Level": "Xã" },
          { "Id": "28474", "Name": "Phường Nhị Mỹ", "Level": "Phường" },
          { "Id": "28477", "Name": "Xã Nhị Quý", "Level": "Xã" },
          { "Id": "28480", "Name": "Xã Thanh Hòa", "Level": "Xã" },
          { "Id": "28483", "Name": "Xã Phú Quý", "Level": "Xã" },
          { "Id": "28486", "Name": "Xã Long Khánh", "Level": "Xã" }
        ]
      },
      {
        "Id": "818",
        "Name": "Huyện Tân Phước",
        "Wards": [
          { "Id": "28321", "Name": "Thị trấn Mỹ Phước", "Level": "Thị trấn" },
          { "Id": "28324", "Name": "Xã Tân Hòa Đông", "Level": "Xã" },
          { "Id": "28327", "Name": "Xã Thạnh Tân", "Level": "Xã" },
          { "Id": "28330", "Name": "Xã Thạnh Mỹ", "Level": "Xã" },
          { "Id": "28333", "Name": "Xã Thạnh Hoà", "Level": "Xã" },
          { "Id": "28336", "Name": "Xã Phú Mỹ", "Level": "Xã" },
          { "Id": "28339", "Name": "Xã Tân Hòa Thành", "Level": "Xã" },
          { "Id": "28342", "Name": "Xã Hưng Thạnh", "Level": "Xã" },
          { "Id": "28345", "Name": "Xã Tân Lập 1", "Level": "Xã" },
          { "Id": "28348", "Name": "Xã Tân Hòa Tây", "Level": "Xã" },
          { "Id": "28354", "Name": "Xã Tân Lập 2", "Level": "Xã" },
          { "Id": "28357", "Name": "Xã Phước Lập", "Level": "Xã" }
        ]
      },
      {
        "Id": "819",
        "Name": "Huyện Cái Bè",
        "Wards": [
          { "Id": "28360", "Name": "Thị trấn Cái Bè", "Level": "Thị trấn" },
          { "Id": "28363", "Name": "Xã Hậu Mỹ Bắc B", "Level": "Xã" },
          { "Id": "28366", "Name": "Xã Hậu Mỹ Bắc A", "Level": "Xã" },
          { "Id": "28369", "Name": "Xã Mỹ Trung", "Level": "Xã" },
          { "Id": "28372", "Name": "Xã Hậu Mỹ Trinh", "Level": "Xã" },
          { "Id": "28375", "Name": "Xã Hậu Mỹ Phú", "Level": "Xã" },
          { "Id": "28378", "Name": "Xã Mỹ Tân", "Level": "Xã" },
          { "Id": "28381", "Name": "Xã Mỹ Lợi B", "Level": "Xã" },
          { "Id": "28384", "Name": "Xã Thiện Trung", "Level": "Xã" },
          { "Id": "28387", "Name": "Xã Mỹ Hội", "Level": "Xã" },
          { "Id": "28390", "Name": "Xã An Cư", "Level": "Xã" },
          { "Id": "28393", "Name": "Xã Hậu Thành", "Level": "Xã" },
          { "Id": "28396", "Name": "Xã Mỹ Lợi A", "Level": "Xã" },
          { "Id": "28399", "Name": "Xã Hòa Khánh", "Level": "Xã" },
          { "Id": "28402", "Name": "Xã Thiện Trí", "Level": "Xã" },
          { "Id": "28405", "Name": "Xã Mỹ Đức Đông", "Level": "Xã" },
          { "Id": "28408", "Name": "Xã Mỹ Đức Tây", "Level": "Xã" },
          { "Id": "28411", "Name": "Xã Đông Hòa Hiệp", "Level": "Xã" },
          { "Id": "28414", "Name": "Xã An Thái Đông", "Level": "Xã" },
          { "Id": "28417", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "28420", "Name": "Xã Mỹ Lương", "Level": "Xã" },
          { "Id": "28423", "Name": "Xã Tân Thanh", "Level": "Xã" },
          { "Id": "28426", "Name": "Xã An Thái Trung", "Level": "Xã" },
          { "Id": "28429", "Name": "Xã An Hữu", "Level": "Xã" },
          { "Id": "28432", "Name": "Xã Hòa Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "820",
        "Name": "Huyện Cai Lậy",
        "Wards": [
          { "Id": "28438", "Name": "Xã Thạnh Lộc", "Level": "Xã" },
          { "Id": "28441", "Name": "Xã Mỹ Thành Bắc", "Level": "Xã" },
          { "Id": "28444", "Name": "Xã Phú Cường", "Level": "Xã" },
          { "Id": "28456", "Name": "Xã Mỹ Thành Nam", "Level": "Xã" },
          { "Id": "28465", "Name": "Xã Phú Nhuận", "Level": "Xã" },
          { "Id": "28471", "Name": "Xã Bình Phú", "Level": "Xã" },
          { "Id": "28489", "Name": "Xã Cẩm Sơn", "Level": "Xã" },
          { "Id": "28492", "Name": "Xã Phú An", "Level": "Xã" },
          { "Id": "28495", "Name": "Xã Mỹ Long", "Level": "Xã" },
          { "Id": "28498", "Name": "Xã Long Tiên", "Level": "Xã" },
          { "Id": "28501", "Name": "Xã Hiệp Đức", "Level": "Xã" },
          { "Id": "28504", "Name": "Xã Long Trung", "Level": "Xã" },
          { "Id": "28507", "Name": "Xã Hội Xuân", "Level": "Xã" },
          { "Id": "28510", "Name": "Xã Tân Phong", "Level": "Xã" },
          { "Id": "28513", "Name": "Xã Tam Bình", "Level": "Xã" },
          { "Id": "28516", "Name": "Xã Ngũ Hiệp", "Level": "Xã" }
        ]
      },
      {
        "Id": "821",
        "Name": "Huyện Châu Thành",
        "Wards": [
          { "Id": "28519", "Name": "Thị trấn Tân Hiệp", "Level": "Thị trấn" },
          { "Id": "28522", "Name": "Xã Tân Hội Đông", "Level": "Xã" },
          { "Id": "28525", "Name": "Xã Tân Hương", "Level": "Xã" },
          { "Id": "28528", "Name": "Xã Tân Lý Đông", "Level": "Xã" },
          { "Id": "28531", "Name": "Xã Tân Lý Tây", "Level": "Xã" },
          { "Id": "28534", "Name": "Xã Thân Cửu Nghĩa", "Level": "Xã" },
          { "Id": "28537", "Name": "Xã Tam Hiệp", "Level": "Xã" },
          { "Id": "28540", "Name": "Xã Điềm Hy", "Level": "Xã" },
          { "Id": "28543", "Name": "Xã Nhị Bình", "Level": "Xã" },
          { "Id": "28546", "Name": "Xã Dưỡng Điềm", "Level": "Xã" },
          { "Id": "28549", "Name": "Xã Đông Hòa", "Level": "Xã" },
          { "Id": "28552", "Name": "Xã Long Định", "Level": "Xã" },
          { "Id": "28555", "Name": "Xã Hữu Đạo", "Level": "Xã" },
          { "Id": "28558", "Name": "Xã Long An", "Level": "Xã" },
          { "Id": "28561", "Name": "Xã Long Hưng", "Level": "Xã" },
          { "Id": "28564", "Name": "Xã Bình Trưng", "Level": "Xã" },
          { "Id": "28570", "Name": "Xã Thạnh Phú", "Level": "Xã" },
          { "Id": "28573", "Name": "Xã Bàn Long", "Level": "Xã" },
          { "Id": "28576", "Name": "Xã Vĩnh Kim", "Level": "Xã" },
          { "Id": "28579", "Name": "Xã Bình Đức", "Level": "Xã" },
          { "Id": "28582", "Name": "Xã Song Thuận", "Level": "Xã" },
          { "Id": "28585", "Name": "Xã Kim Sơn", "Level": "Xã" },
          { "Id": "28588", "Name": "Xã Phú Phong", "Level": "Xã" }
        ]
      },
      {
        "Id": "822",
        "Name": "Huyện Chợ Gạo",
        "Wards": [
          { "Id": "28594", "Name": "Thị trấn Chợ Gạo", "Level": "Thị trấn" },
          { "Id": "28597", "Name": "Xã Trung Hòa", "Level": "Xã" },
          { "Id": "28600", "Name": "Xã Hòa Tịnh", "Level": "Xã" },
          { "Id": "28603", "Name": "Xã Mỹ Tịnh An", "Level": "Xã" },
          { "Id": "28606", "Name": "Xã Tân Bình Thạnh", "Level": "Xã" },
          { "Id": "28609", "Name": "Xã Phú Kiết", "Level": "Xã" },
          { "Id": "28612", "Name": "Xã Lương Hòa Lạc", "Level": "Xã" },
          { "Id": "28615", "Name": "Xã Thanh Bình", "Level": "Xã" },
          { "Id": "28618", "Name": "Xã Quơn Long", "Level": "Xã" },
          { "Id": "28621", "Name": "Xã Bình Phục Nhứt", "Level": "Xã" },
          { "Id": "28624", "Name": "Xã Đăng Hưng Phước", "Level": "Xã" },
          { "Id": "28627", "Name": "Xã Tân Thuận Bình", "Level": "Xã" },
          { "Id": "28630", "Name": "Xã Song Bình", "Level": "Xã" },
          { "Id": "28633", "Name": "Xã Bình Phan", "Level": "Xã" },
          { "Id": "28636", "Name": "Xã Long Bình Điền", "Level": "Xã" },
          { "Id": "28639", "Name": "Xã An Thạnh Thủy", "Level": "Xã" },
          { "Id": "28642", "Name": "Xã Xuân Đông", "Level": "Xã" },
          { "Id": "28645", "Name": "Xã Hòa Định", "Level": "Xã" },
          { "Id": "28648", "Name": "Xã Bình Ninh", "Level": "Xã" }
        ]
      },
      {
        "Id": "823",
        "Name": "Huyện Gò Công Tây",
        "Wards": [
          { "Id": "28651", "Name": "Thị trấn Vĩnh Bình", "Level": "Thị trấn" },
          { "Id": "28654", "Name": "Xã Đồng Sơn", "Level": "Xã" },
          { "Id": "28657", "Name": "Xã Bình Phú", "Level": "Xã" },
          { "Id": "28660", "Name": "Xã Đồng Thạnh", "Level": "Xã" },
          { "Id": "28663", "Name": "Xã Thành Công", "Level": "Xã" },
          { "Id": "28666", "Name": "Xã Bình Nhì", "Level": "Xã" },
          { "Id": "28669", "Name": "Xã Yên Luông", "Level": "Xã" },
          { "Id": "28672", "Name": "Xã Thạnh Trị", "Level": "Xã" },
          { "Id": "28675", "Name": "Xã Thạnh Nhựt", "Level": "Xã" },
          { "Id": "28678", "Name": "Xã Long Vĩnh", "Level": "Xã" },
          { "Id": "28681", "Name": "Xã Bình Tân", "Level": "Xã" },
          { "Id": "28684", "Name": "Xã Vĩnh Hựu", "Level": "Xã" },
          { "Id": "28687", "Name": "Xã Long Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "824",
        "Name": "Huyện Gò Công Đông",
        "Wards": [
          { "Id": "28702", "Name": "Thị trấn Tân Hòa", "Level": "Thị trấn" },
          { "Id": "28705", "Name": "Xã Tăng Hoà", "Level": "Xã" },
          { "Id": "28711", "Name": "Xã Tân Phước", "Level": "Xã" },
          { "Id": "28714", "Name": "Xã Gia Thuận", "Level": "Xã" },
          { "Id": "28720", "Name": "Thị trấn Vàm Láng", "Level": "Thị trấn" },
          { "Id": "28723", "Name": "Xã Tân Tây", "Level": "Xã" },
          { "Id": "28726", "Name": "Xã Kiểng Phước", "Level": "Xã" },
          { "Id": "28732", "Name": "Xã Tân Đông", "Level": "Xã" },
          { "Id": "28735", "Name": "Xã Bình Ân", "Level": "Xã" },
          { "Id": "28738", "Name": "Xã Tân Điền", "Level": "Xã" },
          { "Id": "28741", "Name": "Xã Bình Nghị", "Level": "Xã" },
          { "Id": "28744", "Name": "Xã Phước Trung", "Level": "Xã" },
          { "Id": "28747", "Name": "Xã Tân Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "825",
        "Name": "Huyện Tân Phú Đông",
        "Wards": [
          { "Id": "28690", "Name": "Xã Tân Thới", "Level": "Xã" },
          { "Id": "28693", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "28696", "Name": "Xã Phú Thạnh", "Level": "Xã" },
          { "Id": "28699", "Name": "Xã Tân Thạnh", "Level": "Xã" },
          { "Id": "28750", "Name": "Xã Phú Đông", "Level": "Xã" },
          { "Id": "28753", "Name": "Xã Phú Tân", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "83",
    "Name": "Tỉnh Bến Tre",
    "Districts": [
      {
        "Id": "829",
        "Name": "Thành phố Bến Tre",
        "Wards": [
          { "Id": "28756", "Name": "Phường Phú Khương", "Level": "Phường" },
          { "Id": "28757", "Name": "Phường Phú Tân", "Level": "Phường" },
          { "Id": "28759", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "28762", "Name": "Phường 6", "Level": "Phường" },
          { "Id": "28765", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "28768", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "28777", "Name": "Phường An Hội", "Level": "Phường" },
          { "Id": "28780", "Name": "Phường 7", "Level": "Phường" },
          { "Id": "28783", "Name": "Xã Sơn Đông", "Level": "Xã" },
          { "Id": "28786", "Name": "Xã Phú Hưng", "Level": "Xã" },
          { "Id": "28789", "Name": "Xã Bình Phú", "Level": "Xã" },
          { "Id": "28792", "Name": "Xã Mỹ Thạnh An", "Level": "Xã" },
          { "Id": "28795", "Name": "Xã Nhơn Thạnh", "Level": "Xã" },
          { "Id": "28798", "Name": "Xã Phú Nhuận", "Level": "Xã" }
        ]
      },
      {
        "Id": "831",
        "Name": "Huyện Châu Thành",
        "Wards": [
          { "Id": "28801", "Name": "Thị trấn Châu Thành", "Level": "Thị trấn" },
          { "Id": "28804", "Name": "Xã Tân Thạch", "Level": "Xã" },
          { "Id": "28807", "Name": "Xã Qưới Sơn", "Level": "Xã" },
          { "Id": "28810", "Name": "Xã An Khánh", "Level": "Xã" },
          { "Id": "28813", "Name": "Xã Giao Long", "Level": "Xã" },
          { "Id": "28819", "Name": "Xã Phú Túc", "Level": "Xã" },
          { "Id": "28822", "Name": "Xã Phú Đức", "Level": "Xã" },
          { "Id": "28825", "Name": "Xã Phú An Hòa", "Level": "Xã" },
          { "Id": "28828", "Name": "Xã An Phước", "Level": "Xã" },
          { "Id": "28831", "Name": "Xã Tam Phước", "Level": "Xã" },
          { "Id": "28834", "Name": "Xã Thành Triệu", "Level": "Xã" },
          { "Id": "28837", "Name": "Xã Tường Đa", "Level": "Xã" },
          { "Id": "28840", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "28843", "Name": "Xã Quới Thành", "Level": "Xã" },
          { "Id": "28846", "Name": "Xã Phước Thạnh", "Level": "Xã" },
          { "Id": "28849", "Name": "Xã An Hóa", "Level": "Xã" },
          { "Id": "28852", "Name": "Xã Tiên Long", "Level": "Xã" },
          { "Id": "28855", "Name": "Xã An Hiệp", "Level": "Xã" },
          { "Id": "28858", "Name": "Xã Hữu Định", "Level": "Xã" },
          { "Id": "28861", "Name": "Xã Tiên Thủy", "Level": "Xã" },
          { "Id": "28864", "Name": "Xã Sơn Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "832",
        "Name": "Huyện Chợ Lách",
        "Wards": [
          { "Id": "28870", "Name": "Thị trấn Chợ Lách", "Level": "Thị trấn" },
          { "Id": "28873", "Name": "Xã Phú Phụng", "Level": "Xã" },
          { "Id": "28876", "Name": "Xã Sơn Định", "Level": "Xã" },
          { "Id": "28879", "Name": "Xã Vĩnh Bình", "Level": "Xã" },
          { "Id": "28882", "Name": "Xã Hòa Nghĩa", "Level": "Xã" },
          { "Id": "28885", "Name": "Xã Long Thới", "Level": "Xã" },
          { "Id": "28888", "Name": "Xã Phú Sơn", "Level": "Xã" },
          { "Id": "28891", "Name": "Xã Tân Thiềng", "Level": "Xã" },
          { "Id": "28894", "Name": "Xã Vĩnh Thành", "Level": "Xã" },
          { "Id": "28897", "Name": "Xã Vĩnh Hòa", "Level": "Xã" },
          { "Id": "28900", "Name": "Xã Hưng Khánh Trung B", "Level": "Xã" }
        ]
      },
      {
        "Id": "833",
        "Name": "Huyện Mỏ Cày Nam",
        "Wards": [
          { "Id": "28903", "Name": "Thị trấn Mỏ Cày", "Level": "Thị trấn" },
          { "Id": "28930", "Name": "Xã Định Thủy", "Level": "Xã" },
          { "Id": "28939", "Name": "Xã Đa Phước Hội", "Level": "Xã" },
          { "Id": "28940", "Name": "Xã Tân Hội", "Level": "Xã" },
          { "Id": "28942", "Name": "Xã Phước Hiệp", "Level": "Xã" },
          { "Id": "28945", "Name": "Xã Bình Khánh ", "Level": "Xã" },
          { "Id": "28951", "Name": "Xã An Thạnh", "Level": "Xã" },
          { "Id": "28957", "Name": "Xã An Định", "Level": "Xã" },
          { "Id": "28960", "Name": "Xã Thành Thới B", "Level": "Xã" },
          { "Id": "28963", "Name": "Xã Tân Trung", "Level": "Xã" },
          { "Id": "28966", "Name": "Xã An Thới", "Level": "Xã" },
          { "Id": "28969", "Name": "Xã Thành Thới A", "Level": "Xã" },
          { "Id": "28972", "Name": "Xã Minh Đức", "Level": "Xã" },
          { "Id": "28975", "Name": "Xã Ngãi Đăng", "Level": "Xã" },
          { "Id": "28978", "Name": "Xã Cẩm Sơn", "Level": "Xã" },
          { "Id": "28981", "Name": "Xã Hương Mỹ", "Level": "Xã" }
        ]
      },
      {
        "Id": "834",
        "Name": "Huyện Giồng Trôm",
        "Wards": [
          { "Id": "28984", "Name": "Thị trấn Giồng Trôm", "Level": "Thị trấn" },
          { "Id": "28987", "Name": "Xã Phong Nẫm", "Level": "Xã" },
          { "Id": "28993", "Name": "Xã Mỹ Thạnh", "Level": "Xã" },
          { "Id": "28996", "Name": "Xã Châu Hòa", "Level": "Xã" },
          { "Id": "28999", "Name": "Xã Lương Hòa", "Level": "Xã" },
          { "Id": "29002", "Name": "Xã Lương Quới", "Level": "Xã" },
          { "Id": "29005", "Name": "Xã Lương Phú", "Level": "Xã" },
          { "Id": "29008", "Name": "Xã Châu Bình", "Level": "Xã" },
          { "Id": "29011", "Name": "Xã Thuận Điền", "Level": "Xã" },
          { "Id": "29014", "Name": "Xã Sơn Phú", "Level": "Xã" },
          { "Id": "29017", "Name": "Xã Bình Hoà", "Level": "Xã" },
          { "Id": "29020", "Name": "Xã Phước Long", "Level": "Xã" },
          { "Id": "29023", "Name": "Xã Hưng Phong", "Level": "Xã" },
          { "Id": "29026", "Name": "Xã Long Mỹ", "Level": "Xã" },
          { "Id": "29029", "Name": "Xã Tân Hào", "Level": "Xã" },
          { "Id": "29032", "Name": "Xã Bình Thành", "Level": "Xã" },
          { "Id": "29035", "Name": "Xã Tân Thanh", "Level": "Xã" },
          { "Id": "29038", "Name": "Xã Tân Lợi Thạnh", "Level": "Xã" },
          { "Id": "29041", "Name": "Xã Thạnh Phú Đông", "Level": "Xã" },
          { "Id": "29044", "Name": "Xã Hưng Nhượng", "Level": "Xã" },
          { "Id": "29047", "Name": "Xã Hưng Lễ", "Level": "Xã" }
        ]
      },
      {
        "Id": "835",
        "Name": "Huyện Bình Đại",
        "Wards": [
          { "Id": "29050", "Name": "Thị trấn Bình Đại", "Level": "Thị trấn" },
          { "Id": "29053", "Name": "Xã Tam Hiệp", "Level": "Xã" },
          { "Id": "29056", "Name": "Xã Long Định", "Level": "Xã" },
          { "Id": "29059", "Name": "Xã Long Hòa", "Level": "Xã" },
          { "Id": "29062", "Name": "Xã Phú Thuận", "Level": "Xã" },
          { "Id": "29065", "Name": "Xã Vang Quới Tây", "Level": "Xã" },
          { "Id": "29068", "Name": "Xã Vang Quới Đông", "Level": "Xã" },
          { "Id": "29071", "Name": "Xã Châu Hưng", "Level": "Xã" },
          { "Id": "29074", "Name": "Xã Phú Vang", "Level": "Xã" },
          { "Id": "29077", "Name": "Xã Lộc Thuận", "Level": "Xã" },
          { "Id": "29080", "Name": "Xã Định Trung", "Level": "Xã" },
          { "Id": "29083", "Name": "Xã Thới Lai", "Level": "Xã" },
          { "Id": "29086", "Name": "Xã Bình Thới", "Level": "Xã" },
          { "Id": "29089", "Name": "Xã Phú Long", "Level": "Xã" },
          { "Id": "29092", "Name": "Xã Bình Thắng", "Level": "Xã" },
          { "Id": "29095", "Name": "Xã Thạnh Trị", "Level": "Xã" },
          { "Id": "29098", "Name": "Xã Đại Hòa Lộc", "Level": "Xã" },
          { "Id": "29101", "Name": "Xã Thừa Đức", "Level": "Xã" },
          { "Id": "29104", "Name": "Xã Thạnh Phước", "Level": "Xã" },
          { "Id": "29107", "Name": "Xã Thới Thuận", "Level": "Xã" }
        ]
      },
      {
        "Id": "836",
        "Name": "Huyện Ba Tri",
        "Wards": [
          { "Id": "29110", "Name": "Thị trấn Ba Tri", "Level": "Thị trấn" },
          { "Id": "29113", "Name": "Xã Tân Mỹ", "Level": "Xã" },
          { "Id": "29116", "Name": "Xã Mỹ Hòa", "Level": "Xã" },
          { "Id": "29119", "Name": "Xã Tân Xuân", "Level": "Xã" },
          { "Id": "29122", "Name": "Xã Mỹ Chánh", "Level": "Xã" },
          { "Id": "29125", "Name": "Xã Bảo Thạnh", "Level": "Xã" },
          { "Id": "29128", "Name": "Xã An Phú Trung", "Level": "Xã" },
          { "Id": "29131", "Name": "Xã Mỹ Thạnh", "Level": "Xã" },
          { "Id": "29134", "Name": "Xã Mỹ Nhơn", "Level": "Xã" },
          { "Id": "29137", "Name": "Xã Phước Ngãi", "Level": "Xã" },
          { "Id": "29143", "Name": "Xã An Ngãi Trung", "Level": "Xã" },
          { "Id": "29146", "Name": "Xã Phú Lễ", "Level": "Xã" },
          { "Id": "29149", "Name": "Xã An Bình Tây", "Level": "Xã" },
          { "Id": "29152", "Name": "Xã Bảo Thuận", "Level": "Xã" },
          { "Id": "29155", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "29158", "Name": "Xã An Ngãi Tây", "Level": "Xã" },
          { "Id": "29161", "Name": "Xã An Hiệp", "Level": "Xã" },
          { "Id": "29164", "Name": "Xã Vĩnh Hòa", "Level": "Xã" },
          { "Id": "29167", "Name": "Xã Tân Thủy", "Level": "Xã" },
          { "Id": "29170", "Name": "Xã Vĩnh An", "Level": "Xã" },
          { "Id": "29173", "Name": "Xã An Đức", "Level": "Xã" },
          { "Id": "29176", "Name": "Xã An Hòa Tây", "Level": "Xã" },
          { "Id": "29179", "Name": "Xã An Thủy", "Level": "Xã" }
        ]
      },
      {
        "Id": "837",
        "Name": "Huyện Thạnh Phú",
        "Wards": [
          { "Id": "29182", "Name": "Thị trấn Thạnh Phú", "Level": "Thị trấn" },
          { "Id": "29185", "Name": "Xã Phú Khánh", "Level": "Xã" },
          { "Id": "29188", "Name": "Xã Đại Điền", "Level": "Xã" },
          { "Id": "29191", "Name": "Xã Quới Điền", "Level": "Xã" },
          { "Id": "29194", "Name": "Xã Tân Phong", "Level": "Xã" },
          { "Id": "29197", "Name": "Xã Mỹ Hưng", "Level": "Xã" },
          { "Id": "29200", "Name": "Xã An Thạnh", "Level": "Xã" },
          { "Id": "29203", "Name": "Xã Thới Thạnh", "Level": "Xã" },
          { "Id": "29206", "Name": "Xã Hòa Lợi", "Level": "Xã" },
          { "Id": "29209", "Name": "Xã An Điền", "Level": "Xã" },
          { "Id": "29212", "Name": "Xã Bình Thạnh", "Level": "Xã" },
          { "Id": "29215", "Name": "Xã An Thuận", "Level": "Xã" },
          { "Id": "29218", "Name": "Xã An Quy", "Level": "Xã" },
          { "Id": "29221", "Name": "Xã Thạnh Hải", "Level": "Xã" },
          { "Id": "29224", "Name": "Xã An Nhơn", "Level": "Xã" },
          { "Id": "29227", "Name": "Xã Giao Thạnh", "Level": "Xã" },
          { "Id": "29230", "Name": "Xã Thạnh Phong", "Level": "Xã" },
          { "Id": "29233", "Name": "Xã Mỹ An", "Level": "Xã" }
        ]
      },
      {
        "Id": "838",
        "Name": "Huyện Mỏ Cày Bắc",
        "Wards": [
          { "Id": "28889", "Name": "Xã Phú Mỹ", "Level": "Xã" },
          { "Id": "28901", "Name": "Xã Hưng Khánh Trung A", "Level": "Xã" },
          { "Id": "28906", "Name": "Xã Thanh Tân", "Level": "Xã" },
          { "Id": "28909", "Name": "Xã Thạnh Ngãi", "Level": "Xã" },
          { "Id": "28912", "Name": "Xã Tân Phú Tây", "Level": "Xã" },
          { "Id": "28915", "Name": "Xã Phước Mỹ Trung", "Level": "Xã" },
          { "Id": "28918", "Name": "Xã Tân Thành Bình", "Level": "Xã" },
          { "Id": "28921", "Name": "Xã Thành An", "Level": "Xã" },
          { "Id": "28924", "Name": "Xã Hòa Lộc", "Level": "Xã" },
          { "Id": "28927", "Name": "Xã Tân Thanh Tây", "Level": "Xã" },
          { "Id": "28933", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "28936", "Name": "Xã Nhuận Phú Tân", "Level": "Xã" },
          { "Id": "28948", "Name": "Xã Khánh Thạnh Tân", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "84",
    "Name": "Tỉnh Trà Vinh",
    "Districts": [
      {
        "Id": "842",
        "Name": "Thành phố Trà Vinh",
        "Wards": [
          { "Id": "29236", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "29239", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "29242", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "29245", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "29248", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "29251", "Name": "Phường 6", "Level": "Phường" },
          { "Id": "29254", "Name": "Phường 7", "Level": "Phường" },
          { "Id": "29257", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "29260", "Name": "Phường 9", "Level": "Phường" },
          { "Id": "29263", "Name": "Xã Long Đức", "Level": "Xã" }
        ]
      },
      {
        "Id": "844",
        "Name": "Huyện Càng Long",
        "Wards": [
          { "Id": "29266", "Name": "Thị trấn Càng Long", "Level": "Thị trấn" },
          { "Id": "29269", "Name": "Xã Mỹ Cẩm", "Level": "Xã" },
          { "Id": "29272", "Name": "Xã An Trường A", "Level": "Xã" },
          { "Id": "29275", "Name": "Xã An Trường", "Level": "Xã" },
          { "Id": "29278", "Name": "Xã Huyền Hội", "Level": "Xã" },
          { "Id": "29281", "Name": "Xã Tân An", "Level": "Xã" },
          { "Id": "29284", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "29287", "Name": "Xã Bình Phú", "Level": "Xã" },
          { "Id": "29290", "Name": "Xã Phương Thạnh", "Level": "Xã" },
          { "Id": "29293", "Name": "Xã Đại Phúc", "Level": "Xã" },
          { "Id": "29296", "Name": "Xã Đại Phước", "Level": "Xã" },
          { "Id": "29299", "Name": "Xã Nhị Long Phú", "Level": "Xã" },
          { "Id": "29302", "Name": "Xã Nhị Long", "Level": "Xã" },
          { "Id": "29305", "Name": "Xã Đức Mỹ", "Level": "Xã" }
        ]
      },
      {
        "Id": "845",
        "Name": "Huyện Cầu Kè",
        "Wards": [
          { "Id": "29308", "Name": "Thị trấn Cầu Kè", "Level": "Thị trấn" },
          { "Id": "29311", "Name": "Xã Hòa Ân", "Level": "Xã" },
          { "Id": "29314", "Name": "Xã Châu Điền", "Level": "Xã" },
          { "Id": "29317", "Name": "Xã An Phú Tân", "Level": "Xã" },
          { "Id": "29320", "Name": "Xã Hoà Tân", "Level": "Xã" },
          { "Id": "29323", "Name": "Xã Ninh Thới", "Level": "Xã" },
          { "Id": "29326", "Name": "Xã Phong Phú", "Level": "Xã" },
          { "Id": "29329", "Name": "Xã Phong Thạnh", "Level": "Xã" },
          { "Id": "29332", "Name": "Xã Tam Ngãi", "Level": "Xã" },
          { "Id": "29335", "Name": "Xã Thông Hòa", "Level": "Xã" },
          { "Id": "29338", "Name": "Xã Thạnh Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "846",
        "Name": "Huyện Tiểu Cần",
        "Wards": [
          { "Id": "29341", "Name": "Thị trấn Tiểu Cần", "Level": "Thị trấn" },
          { "Id": "29344", "Name": "Thị trấn Cầu Quan", "Level": "Thị trấn" },
          { "Id": "29347", "Name": "Xã Phú Cần", "Level": "Xã" },
          { "Id": "29350", "Name": "Xã Hiếu Tử", "Level": "Xã" },
          { "Id": "29353", "Name": "Xã Hiếu Trung", "Level": "Xã" },
          { "Id": "29356", "Name": "Xã Long Thới", "Level": "Xã" },
          { "Id": "29359", "Name": "Xã Hùng Hòa", "Level": "Xã" },
          { "Id": "29362", "Name": "Xã Tân Hùng", "Level": "Xã" },
          { "Id": "29365", "Name": "Xã Tập Ngãi", "Level": "Xã" },
          { "Id": "29368", "Name": "Xã Ngãi Hùng", "Level": "Xã" },
          { "Id": "29371", "Name": "Xã Tân Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "847",
        "Name": "Huyện Châu Thành",
        "Wards": [
          { "Id": "29374", "Name": "Thị trấn Châu Thành", "Level": "Thị trấn" },
          { "Id": "29377", "Name": "Xã Đa Lộc", "Level": "Xã" },
          { "Id": "29380", "Name": "Xã Mỹ Chánh", "Level": "Xã" },
          { "Id": "29383", "Name": "Xã Thanh Mỹ", "Level": "Xã" },
          { "Id": "29386", "Name": "Xã Lương Hoà A", "Level": "Xã" },
          { "Id": "29389", "Name": "Xã Lương Hòa", "Level": "Xã" },
          { "Id": "29392", "Name": "Xã Song Lộc", "Level": "Xã" },
          { "Id": "29395", "Name": "Xã Nguyệt Hóa", "Level": "Xã" },
          { "Id": "29398", "Name": "Xã Hòa Thuận", "Level": "Xã" },
          { "Id": "29401", "Name": "Xã Hòa Lợi", "Level": "Xã" },
          { "Id": "29404", "Name": "Xã Phước Hảo", "Level": "Xã" },
          { "Id": "29407", "Name": "Xã Hưng Mỹ", "Level": "Xã" },
          { "Id": "29410", "Name": "Xã Hòa Minh", "Level": "Xã" },
          { "Id": "29413", "Name": "Xã Long Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "848",
        "Name": "Huyện Cầu Ngang",
        "Wards": [
          { "Id": "29416", "Name": "Thị trấn Cầu Ngang", "Level": "Thị trấn" },
          { "Id": "29419", "Name": "Thị trấn Mỹ Long", "Level": "Thị trấn" },
          { "Id": "29422", "Name": "Xã Mỹ Long Bắc", "Level": "Xã" },
          { "Id": "29425", "Name": "Xã Mỹ Long Nam", "Level": "Xã" },
          { "Id": "29428", "Name": "Xã Mỹ Hòa", "Level": "Xã" },
          { "Id": "29431", "Name": "Xã Vĩnh Kim", "Level": "Xã" },
          { "Id": "29434", "Name": "Xã Kim Hòa", "Level": "Xã" },
          { "Id": "29437", "Name": "Xã Hiệp Hòa", "Level": "Xã" },
          { "Id": "29440", "Name": "Xã Thuận Hòa", "Level": "Xã" },
          { "Id": "29443", "Name": "Xã Long Sơn", "Level": "Xã" },
          { "Id": "29446", "Name": "Xã Nhị Trường", "Level": "Xã" },
          { "Id": "29449", "Name": "Xã Trường Thọ", "Level": "Xã" },
          { "Id": "29452", "Name": "Xã Hiệp Mỹ Đông", "Level": "Xã" },
          { "Id": "29455", "Name": "Xã Hiệp Mỹ Tây", "Level": "Xã" },
          { "Id": "29458", "Name": "Xã Thạnh Hòa Sơn", "Level": "Xã" }
        ]
      },
      {
        "Id": "849",
        "Name": "Huyện Trà Cú",
        "Wards": [
          { "Id": "29461", "Name": "Thị trấn Trà Cú", "Level": "Thị trấn" },
          { "Id": "29462", "Name": "Thị trấn Định An", "Level": "Thị trấn" },
          { "Id": "29464", "Name": "Xã Phước Hưng", "Level": "Xã" },
          { "Id": "29467", "Name": "Xã Tập Sơn", "Level": "Xã" },
          { "Id": "29470", "Name": "Xã Tân Sơn", "Level": "Xã" },
          { "Id": "29473", "Name": "Xã An Quảng Hữu", "Level": "Xã" },
          { "Id": "29476", "Name": "Xã Lưu Nghiệp Anh", "Level": "Xã" },
          { "Id": "29479", "Name": "Xã Ngãi Xuyên", "Level": "Xã" },
          { "Id": "29482", "Name": "Xã Kim Sơn", "Level": "Xã" },
          { "Id": "29485", "Name": "Xã Thanh Sơn", "Level": "Xã" },
          { "Id": "29488", "Name": "Xã Hàm Giang", "Level": "Xã" },
          { "Id": "29489", "Name": "Xã Hàm Tân", "Level": "Xã" },
          { "Id": "29491", "Name": "Xã Đại An", "Level": "Xã" },
          { "Id": "29494", "Name": "Xã Định An", "Level": "Xã" },
          { "Id": "29503", "Name": "Xã Ngọc Biên", "Level": "Xã" },
          { "Id": "29506", "Name": "Xã Long Hiệp", "Level": "Xã" },
          { "Id": "29509", "Name": "Xã Tân Hiệp", "Level": "Xã" }
        ]
      },
      {
        "Id": "850",
        "Name": "Huyện Duyên Hải",
        "Wards": [
          { "Id": "29497", "Name": "Xã Đôn Xuân", "Level": "Xã" },
          { "Id": "29500", "Name": "Xã Đôn Châu", "Level": "Xã" },
          { "Id": "29513", "Name": "Thị trấn Long Thành", "Level": "Thị trấn" },
          { "Id": "29521", "Name": "Xã Long Khánh", "Level": "Xã" },
          { "Id": "29530", "Name": "Xã Ngũ Lạc", "Level": "Xã" },
          { "Id": "29533", "Name": "Xã Long Vĩnh", "Level": "Xã" },
          { "Id": "29536", "Name": "Xã Đông Hải", "Level": "Xã" }
        ]
      },
      {
        "Id": "851",
        "Name": "Thị xã Duyên Hải",
        "Wards": [
          { "Id": "29512", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "29515", "Name": "Xã Long Toàn", "Level": "Xã" },
          { "Id": "29516", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "29518", "Name": "Xã Long Hữu", "Level": "Xã" },
          { "Id": "29524", "Name": "Xã Dân Thành", "Level": "Xã" },
          { "Id": "29527", "Name": "Xã Trường Long Hòa", "Level": "Xã" },
          { "Id": "29539", "Name": "Xã Hiệp Thạnh", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "86",
    "Name": "Tỉnh Vĩnh Long",
    "Districts": [
      {
        "Id": "855",
        "Name": "Thành phố Vĩnh Long",
        "Wards": [
          { "Id": "29542", "Name": "Phường 9", "Level": "Phường" },
          { "Id": "29545", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "29548", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "29551", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "29554", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "29557", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "29560", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "29563", "Name": "Phường Tân Ngãi", "Level": "Phường" },
          { "Id": "29566", "Name": "Phường Tân Hòa", "Level": "Phường" },
          { "Id": "29569", "Name": "Phường Tân Hội", "Level": "Phường" },
          { "Id": "29572", "Name": "Phường Trường An", "Level": "Phường" }
        ]
      },
      {
        "Id": "857",
        "Name": "Huyện Long Hồ",
        "Wards": [
          { "Id": "29575", "Name": "Thị trấn Long Hồ", "Level": "Thị trấn" },
          { "Id": "29578", "Name": "Xã Đồng Phú", "Level": "Xã" },
          { "Id": "29581", "Name": "Xã Bình Hòa Phước", "Level": "Xã" },
          { "Id": "29584", "Name": "Xã Hòa Ninh", "Level": "Xã" },
          { "Id": "29587", "Name": "Xã An Bình", "Level": "Xã" },
          { "Id": "29590", "Name": "Xã Thanh Đức", "Level": "Xã" },
          { "Id": "29593", "Name": "Xã Tân Hạnh", "Level": "Xã" },
          { "Id": "29596", "Name": "Xã Phước Hậu", "Level": "Xã" },
          { "Id": "29599", "Name": "Xã Long Phước", "Level": "Xã" },
          { "Id": "29602", "Name": "Xã Phú Đức", "Level": "Xã" },
          { "Id": "29605", "Name": "Xã Lộc Hòa", "Level": "Xã" },
          { "Id": "29608", "Name": "Xã Long An", "Level": "Xã" },
          { "Id": "29611", "Name": "Xã Phú Quới", "Level": "Xã" },
          { "Id": "29614", "Name": "Xã Thạnh Quới", "Level": "Xã" },
          { "Id": "29617", "Name": "Xã Hòa Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "858",
        "Name": "Huyện Mang Thít",
        "Wards": [
          { "Id": "29623", "Name": "Xã Mỹ An", "Level": "Xã" },
          { "Id": "29626", "Name": "Xã Mỹ Phước", "Level": "Xã" },
          { "Id": "29629", "Name": "Xã An Phước", "Level": "Xã" },
          { "Id": "29632", "Name": "Xã Nhơn Phú", "Level": "Xã" },
          { "Id": "29635", "Name": "Xã Long Mỹ", "Level": "Xã" },
          { "Id": "29638", "Name": "Xã Hòa Tịnh", "Level": "Xã" },
          { "Id": "29641", "Name": "Thị trấn Cái Nhum", "Level": "Thị trấn" },
          { "Id": "29644", "Name": "Xã Bình Phước", "Level": "Xã" },
          { "Id": "29647", "Name": "Xã Chánh An", "Level": "Xã" },
          { "Id": "29650", "Name": "Xã Tân An Hội", "Level": "Xã" },
          { "Id": "29653", "Name": "Xã Tân Long", "Level": "Xã" },
          { "Id": "29656", "Name": "Xã Tân Long Hội", "Level": "Xã" }
        ]
      },
      {
        "Id": "859",
        "Name": "Huyện  Vũng Liêm",
        "Wards": [
          { "Id": "29659", "Name": "Thị trấn Vũng Liêm", "Level": "Thị trấn" },
          { "Id": "29662", "Name": "Xã Tân Quới Trung", "Level": "Xã" },
          { "Id": "29665", "Name": "Xã Quới Thiện", "Level": "Xã" },
          { "Id": "29668", "Name": "Xã Quới An", "Level": "Xã" },
          { "Id": "29671", "Name": "Xã Trung Chánh", "Level": "Xã" },
          { "Id": "29674", "Name": "Xã Tân An Luông", "Level": "Xã" },
          { "Id": "29677", "Name": "Xã Thanh Bình", "Level": "Xã" },
          { "Id": "29680", "Name": "Xã Trung Thành Tây", "Level": "Xã" },
          { "Id": "29683", "Name": "Xã Trung Hiệp", "Level": "Xã" },
          { "Id": "29686", "Name": "Xã Hiếu Phụng", "Level": "Xã" },
          { "Id": "29689", "Name": "Xã Trung Thành Đông", "Level": "Xã" },
          { "Id": "29692", "Name": "Xã Trung Thành", "Level": "Xã" },
          { "Id": "29695", "Name": "Xã Trung Hiếu", "Level": "Xã" },
          { "Id": "29698", "Name": "Xã Trung Ngãi", "Level": "Xã" },
          { "Id": "29701", "Name": "Xã Hiếu Thuận", "Level": "Xã" },
          { "Id": "29704", "Name": "Xã Trung Nghĩa", "Level": "Xã" },
          { "Id": "29707", "Name": "Xã Trung An", "Level": "Xã" },
          { "Id": "29710", "Name": "Xã Hiếu Nhơn", "Level": "Xã" },
          { "Id": "29713", "Name": "Xã Hiếu Thành", "Level": "Xã" },
          { "Id": "29716", "Name": "Xã Hiếu Nghĩa", "Level": "Xã" }
        ]
      },
      {
        "Id": "860",
        "Name": "Huyện Tam Bình",
        "Wards": [
          { "Id": "29719", "Name": "Thị trấn Tam Bình", "Level": "Thị trấn" },
          { "Id": "29722", "Name": "Xã Tân Lộc", "Level": "Xã" },
          { "Id": "29725", "Name": "Xã Phú Thịnh", "Level": "Xã" },
          { "Id": "29728", "Name": "Xã Hậu Lộc", "Level": "Xã" },
          { "Id": "29731", "Name": "Xã Hòa Thạnh", "Level": "Xã" },
          { "Id": "29734", "Name": "Xã Hoà Lộc", "Level": "Xã" },
          { "Id": "29737", "Name": "Xã Phú Lộc", "Level": "Xã" },
          { "Id": "29740", "Name": "Xã Song Phú", "Level": "Xã" },
          { "Id": "29743", "Name": "Xã Hòa Hiệp", "Level": "Xã" },
          { "Id": "29746", "Name": "Xã Mỹ Lộc", "Level": "Xã" },
          { "Id": "29749", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "29752", "Name": "Xã Long Phú", "Level": "Xã" },
          { "Id": "29755", "Name": "Xã Mỹ Thạnh Trung", "Level": "Xã" },
          { "Id": "29758", "Name": "Xã Tường Lộc", "Level": "Xã" },
          { "Id": "29761", "Name": "Xã Loan Mỹ", "Level": "Xã" },
          { "Id": "29764", "Name": "Xã Ngãi Tứ", "Level": "Xã" },
          { "Id": "29767", "Name": "Xã Bình Ninh", "Level": "Xã" }
        ]
      },
      {
        "Id": "861",
        "Name": "Thị xã Bình Minh",
        "Wards": [
          { "Id": "29770", "Name": "Phường Cái Vồn", "Level": "Phường" },
          { "Id": "29771", "Name": "Phường Thành Phước", "Level": "Phường" },
          { "Id": "29806", "Name": "Xã Thuận An", "Level": "Xã" },
          { "Id": "29809", "Name": "Xã Đông Thạnh", "Level": "Xã" },
          { "Id": "29812", "Name": "Xã Đông Bình", "Level": "Xã" },
          { "Id": "29813", "Name": "Phường Đông Thuận", "Level": "Phường" },
          { "Id": "29815", "Name": "Xã Mỹ Hòa", "Level": "Xã" },
          { "Id": "29818", "Name": "Xã Đông Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "862",
        "Name": "Huyện Trà Ôn",
        "Wards": [
          { "Id": "29821", "Name": "Thị trấn Trà Ôn", "Level": "Thị trấn" },
          { "Id": "29824", "Name": "Xã Xuân Hiệp", "Level": "Xã" },
          { "Id": "29827", "Name": "Xã Nhơn Bình", "Level": "Xã" },
          { "Id": "29830", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "29833", "Name": "Xã Thới Hòa", "Level": "Xã" },
          { "Id": "29836", "Name": "Xã Trà Côn", "Level": "Xã" },
          { "Id": "29839", "Name": "Xã Tân Mỹ", "Level": "Xã" },
          { "Id": "29842", "Name": "Xã Hựu Thành", "Level": "Xã" },
          { "Id": "29845", "Name": "Xã Vĩnh Xuân", "Level": "Xã" },
          { "Id": "29848", "Name": "Xã Thuận Thới", "Level": "Xã" },
          { "Id": "29851", "Name": "Xã Phú Thành", "Level": "Xã" },
          { "Id": "29854", "Name": "Xã Thiện Mỹ", "Level": "Xã" },
          { "Id": "29857", "Name": "Xã Lục Sỹ Thành", "Level": "Xã" },
          { "Id": "29860", "Name": "Xã Tích Thiện", "Level": "Xã" }
        ]
      },
      {
        "Id": "863",
        "Name": "Huyện Bình Tân",
        "Wards": [
          { "Id": "29773", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "29776", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "29779", "Name": "Xã Thành Trung", "Level": "Xã" },
          { "Id": "29782", "Name": "Xã Tân An Thạnh", "Level": "Xã" },
          { "Id": "29785", "Name": "Xã Tân Lược", "Level": "Xã" },
          { "Id": "29788", "Name": "Xã Nguyễn Văn Thảnh", "Level": "Xã" },
          { "Id": "29791", "Name": "Xã Thành Lợi", "Level": "Xã" },
          { "Id": "29794", "Name": "Xã Mỹ Thuận", "Level": "Xã" },
          { "Id": "29797", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "29800", "Name": "Thị trấn Tân Quới", "Level": "Thị trấn" }
        ]
      }
    ]
  },
  {
    "Id": "87",
    "Name": "Tỉnh Đồng Tháp",
    "Districts": [
      {
        "Id": "866",
        "Name": "Thành phố Cao Lãnh",
        "Wards": [
          { "Id": "29863", "Name": "Phường 11", "Level": "Phường" },
          { "Id": "29866", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "29869", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "29872", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "29875", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "29878", "Name": "Phường 6", "Level": "Phường" },
          { "Id": "29881", "Name": "Xã Mỹ Ngãi", "Level": "Xã" },
          { "Id": "29884", "Name": "Xã Mỹ Tân", "Level": "Xã" },
          { "Id": "29887", "Name": "Xã Mỹ Trà", "Level": "Xã" },
          { "Id": "29888", "Name": "Phường Mỹ Phú", "Level": "Phường" },
          { "Id": "29890", "Name": "Xã Tân Thuận Tây", "Level": "Xã" },
          { "Id": "29892", "Name": "Phường Hoà Thuận", "Level": "Phường" },
          { "Id": "29893", "Name": "Xã Hòa An", "Level": "Xã" },
          { "Id": "29896", "Name": "Xã Tân Thuận Đông", "Level": "Xã" },
          { "Id": "29899", "Name": "Xã Tịnh Thới", "Level": "Xã" }
        ]
      },
      {
        "Id": "867",
        "Name": "Thành phố Sa Đéc",
        "Wards": [
          { "Id": "29902", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "29905", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "29908", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "29911", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "29914", "Name": "Xã Tân Khánh Đông", "Level": "Xã" },
          { "Id": "29917", "Name": "Phường Tân Quy Đông", "Level": "Phường" },
          { "Id": "29919", "Name": "Phường An Hoà", "Level": "Phường" },
          { "Id": "29920", "Name": "Xã Tân Quy Tây", "Level": "Xã" },
          { "Id": "29923", "Name": "Xã Tân Phú Đông", "Level": "Xã" }
        ]
      },
      {
        "Id": "868",
        "Name": "Thành phố Hồng Ngự",
        "Wards": [
          { "Id": "29954", "Name": "Phường An Lộc", "Level": "Phường" },
          { "Id": "29955", "Name": "Phường An Thạnh", "Level": "Phường" },
          { "Id": "29959", "Name": "Xã Bình Thạnh", "Level": "Xã" },
          { "Id": "29965", "Name": "Xã Tân Hội", "Level": "Xã" },
          { "Id": "29978", "Name": "Phường An Lạc", "Level": "Phường" },
          { "Id": "29986", "Name": "Phường An Bình B", "Level": "Phường" },
          { "Id": "29989", "Name": "Phường An Bình A", "Level": "Phường" }
        ]
      },
      {
        "Id": "869",
        "Name": "Huyện Tân Hồng",
        "Wards": [
          { "Id": "29926", "Name": "Thị trấn Sa Rài", "Level": "Thị trấn" },
          { "Id": "29929", "Name": "Xã Tân Hộ Cơ", "Level": "Xã" },
          { "Id": "29932", "Name": "Xã Thông Bình", "Level": "Xã" },
          { "Id": "29935", "Name": "Xã Bình Phú", "Level": "Xã" },
          { "Id": "29938", "Name": "Xã Tân Thành A", "Level": "Xã" },
          { "Id": "29941", "Name": "Xã Tân Thành B", "Level": "Xã" },
          { "Id": "29944", "Name": "Xã Tân Phước", "Level": "Xã" },
          { "Id": "29947", "Name": "Xã Tân Công Chí", "Level": "Xã" },
          { "Id": "29950", "Name": "Xã An Phước", "Level": "Xã" }
        ]
      },
      {
        "Id": "870",
        "Name": "Huyện Hồng Ngự",
        "Wards": [
          { "Id": "29956", "Name": "Xã Thường Phước 1", "Level": "Xã" },
          { "Id": "29962", "Name": "Xã Thường Thới Hậu A", "Level": "Xã" },
          {
            "Id": "29971",
            "Name": "Thị trấn Thường Thới Tiền",
            "Level": "Thị trấn"
          },
          { "Id": "29974", "Name": "Xã Thường Phước 2", "Level": "Xã" },
          { "Id": "29977", "Name": "Xã Thường Lạc", "Level": "Xã" },
          { "Id": "29980", "Name": "Xã Long Khánh A", "Level": "Xã" },
          { "Id": "29983", "Name": "Xã Long Khánh B", "Level": "Xã" },
          { "Id": "29992", "Name": "Xã Long Thuận", "Level": "Xã" },
          { "Id": "29995", "Name": "Xã Phú Thuận B", "Level": "Xã" },
          { "Id": "29998", "Name": "Xã Phú Thuận A", "Level": "Xã" }
        ]
      },
      {
        "Id": "871",
        "Name": "Huyện Tam Nông",
        "Wards": [
          { "Id": "30001", "Name": "Thị trấn Tràm Chim", "Level": "Thị trấn" },
          { "Id": "30004", "Name": "Xã Hoà Bình", "Level": "Xã" },
          { "Id": "30007", "Name": "Xã Tân Công Sính", "Level": "Xã" },
          { "Id": "30010", "Name": "Xã Phú Hiệp", "Level": "Xã" },
          { "Id": "30013", "Name": "Xã Phú Đức", "Level": "Xã" },
          { "Id": "30016", "Name": "Xã Phú Thành B", "Level": "Xã" },
          { "Id": "30019", "Name": "Xã An Hòa", "Level": "Xã" },
          { "Id": "30022", "Name": "Xã An Long", "Level": "Xã" },
          { "Id": "30025", "Name": "Xã Phú Cường", "Level": "Xã" },
          { "Id": "30028", "Name": "Xã Phú Ninh", "Level": "Xã" },
          { "Id": "30031", "Name": "Xã Phú Thọ", "Level": "Xã" },
          { "Id": "30034", "Name": "Xã Phú Thành A", "Level": "Xã" }
        ]
      },
      {
        "Id": "872",
        "Name": "Huyện Tháp Mười",
        "Wards": [
          { "Id": "30037", "Name": "Thị trấn Mỹ An", "Level": "Thị trấn" },
          { "Id": "30040", "Name": "Xã Thạnh Lợi", "Level": "Xã" },
          { "Id": "30043", "Name": "Xã Hưng Thạnh", "Level": "Xã" },
          { "Id": "30046", "Name": "Xã Trường Xuân", "Level": "Xã" },
          { "Id": "30049", "Name": "Xã Tân Kiều", "Level": "Xã" },
          { "Id": "30052", "Name": "Xã Mỹ Hòa", "Level": "Xã" },
          { "Id": "30055", "Name": "Xã Mỹ Quý", "Level": "Xã" },
          { "Id": "30058", "Name": "Xã Mỹ Đông", "Level": "Xã" },
          { "Id": "30061", "Name": "Xã Đốc Binh Kiều", "Level": "Xã" },
          { "Id": "30064", "Name": "Xã Mỹ An", "Level": "Xã" },
          { "Id": "30067", "Name": "Xã Phú Điền", "Level": "Xã" },
          { "Id": "30070", "Name": "Xã Láng Biển", "Level": "Xã" },
          { "Id": "30073", "Name": "Xã Thanh Mỹ", "Level": "Xã" }
        ]
      },
      {
        "Id": "873",
        "Name": "Huyện Cao Lãnh",
        "Wards": [
          { "Id": "30076", "Name": "Thị trấn Mỹ Thọ", "Level": "Thị trấn" },
          { "Id": "30079", "Name": "Xã Gáo Giồng", "Level": "Xã" },
          { "Id": "30082", "Name": "Xã Phương Thịnh", "Level": "Xã" },
          { "Id": "30085", "Name": "Xã Ba Sao", "Level": "Xã" },
          { "Id": "30088", "Name": "Xã Phong Mỹ", "Level": "Xã" },
          { "Id": "30091", "Name": "Xã Tân Nghĩa", "Level": "Xã" },
          { "Id": "30094", "Name": "Xã Phương Trà", "Level": "Xã" },
          { "Id": "30097", "Name": "Xã Nhị Mỹ", "Level": "Xã" },
          { "Id": "30100", "Name": "Xã Mỹ Thọ", "Level": "Xã" },
          { "Id": "30103", "Name": "Xã Tân Hội Trung", "Level": "Xã" },
          { "Id": "30106", "Name": "Xã An Bình", "Level": "Xã" },
          { "Id": "30109", "Name": "Xã Mỹ Hội", "Level": "Xã" },
          { "Id": "30112", "Name": "Xã Mỹ Hiệp", "Level": "Xã" },
          { "Id": "30115", "Name": "Xã Mỹ Long", "Level": "Xã" },
          { "Id": "30118", "Name": "Xã Bình Hàng Trung", "Level": "Xã" },
          { "Id": "30121", "Name": "Xã Mỹ Xương", "Level": "Xã" },
          { "Id": "30124", "Name": "Xã Bình Hàng Tây", "Level": "Xã" },
          { "Id": "30127", "Name": "Xã Bình Thạnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "874",
        "Name": "Huyện Thanh Bình",
        "Wards": [
          { "Id": "30130", "Name": "Thị trấn Thanh Bình", "Level": "Thị trấn" },
          { "Id": "30133", "Name": "Xã Tân Quới", "Level": "Xã" },
          { "Id": "30136", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "30139", "Name": "Xã An Phong", "Level": "Xã" },
          { "Id": "30142", "Name": "Xã Phú Lợi", "Level": "Xã" },
          { "Id": "30145", "Name": "Xã Tân Mỹ", "Level": "Xã" },
          { "Id": "30148", "Name": "Xã Bình Tấn", "Level": "Xã" },
          { "Id": "30151", "Name": "Xã Tân Huề", "Level": "Xã" },
          { "Id": "30154", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "30157", "Name": "Xã Tân Thạnh", "Level": "Xã" },
          { "Id": "30160", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "30163", "Name": "Xã Bình Thành", "Level": "Xã" },
          { "Id": "30166", "Name": "Xã Tân Long", "Level": "Xã" }
        ]
      },
      {
        "Id": "875",
        "Name": "Huyện Lấp Vò",
        "Wards": [
          { "Id": "30169", "Name": "Thị trấn Lấp Vò", "Level": "Thị trấn" },
          { "Id": "30172", "Name": "Xã Mỹ An Hưng A", "Level": "Xã" },
          { "Id": "30175", "Name": "Xã Tân Mỹ", "Level": "Xã" },
          { "Id": "30178", "Name": "Xã Mỹ An Hưng B", "Level": "Xã" },
          { "Id": "30181", "Name": "Xã Tân  Khánh Trung", "Level": "Xã" },
          { "Id": "30184", "Name": "Xã Long Hưng A", "Level": "Xã" },
          { "Id": "30187", "Name": "Xã Vĩnh Thạnh", "Level": "Xã" },
          { "Id": "30190", "Name": "Xã Long Hưng B", "Level": "Xã" },
          { "Id": "30193", "Name": "Xã Bình Thành", "Level": "Xã" },
          { "Id": "30196", "Name": "Xã Định An", "Level": "Xã" },
          { "Id": "30199", "Name": "Xã Định Yên", "Level": "Xã" },
          { "Id": "30202", "Name": "Xã Hội An Đông", "Level": "Xã" },
          { "Id": "30205", "Name": "Xã Bình Thạnh Trung", "Level": "Xã" }
        ]
      },
      {
        "Id": "876",
        "Name": "Huyện Lai Vung",
        "Wards": [
          { "Id": "30208", "Name": "Thị trấn Lai Vung", "Level": "Thị trấn" },
          { "Id": "30211", "Name": "Xã Tân Dương", "Level": "Xã" },
          { "Id": "30214", "Name": "Xã Hòa Thành", "Level": "Xã" },
          { "Id": "30217", "Name": "Xã Long Hậu", "Level": "Xã" },
          { "Id": "30220", "Name": "Xã Tân Phước", "Level": "Xã" },
          { "Id": "30223", "Name": "Xã Hòa Long", "Level": "Xã" },
          { "Id": "30226", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "30229", "Name": "Xã Long Thắng", "Level": "Xã" },
          { "Id": "30232", "Name": "Xã Vĩnh Thới", "Level": "Xã" },
          { "Id": "30235", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "30238", "Name": "Xã Định Hòa", "Level": "Xã" },
          { "Id": "30241", "Name": "Xã Phong Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "877",
        "Name": "Huyện Châu Thành",
        "Wards": [
          { "Id": "30244", "Name": "Thị trấn Cái Tàu Hạ", "Level": "Thị trấn" },
          { "Id": "30247", "Name": "Xã An Hiệp", "Level": "Xã" },
          { "Id": "30250", "Name": "Xã An Nhơn", "Level": "Xã" },
          { "Id": "30253", "Name": "Xã Tân Nhuận Đông", "Level": "Xã" },
          { "Id": "30256", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "30259", "Name": "Xã Tân Phú Trung", "Level": "Xã" },
          { "Id": "30262", "Name": "Xã Phú Long", "Level": "Xã" },
          { "Id": "30265", "Name": "Xã An Phú Thuận", "Level": "Xã" },
          { "Id": "30268", "Name": "Xã Phú Hựu", "Level": "Xã" },
          { "Id": "30271", "Name": "Xã An Khánh", "Level": "Xã" },
          { "Id": "30274", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "30277", "Name": "Xã Hòa Tân", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "89",
    "Name": "Tỉnh An Giang",
    "Districts": [
      {
        "Id": "883",
        "Name": "Thành phố Long Xuyên",
        "Wards": [
          { "Id": "30280", "Name": "Phường Mỹ Bình", "Level": "Phường" },
          { "Id": "30283", "Name": "Phường Mỹ Long", "Level": "Phường" },
          { "Id": "30285", "Name": "Phường Đông Xuyên", "Level": "Phường" },
          { "Id": "30286", "Name": "Phường Mỹ Xuyên", "Level": "Phường" },
          { "Id": "30289", "Name": "Phường Bình Đức", "Level": "Phường" },
          { "Id": "30292", "Name": "Phường Bình Khánh", "Level": "Phường" },
          { "Id": "30295", "Name": "Phường Mỹ Phước", "Level": "Phường" },
          { "Id": "30298", "Name": "Phường Mỹ Quý", "Level": "Phường" },
          { "Id": "30301", "Name": "Phường Mỹ Thới", "Level": "Phường" },
          { "Id": "30304", "Name": "Phường Mỹ Thạnh", "Level": "Phường" },
          { "Id": "30307", "Name": "Phường Mỹ Hòa", "Level": "Phường" },
          { "Id": "30310", "Name": "Xã Mỹ Khánh", "Level": "Xã" },
          { "Id": "30313", "Name": "Xã Mỹ Hoà Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "884",
        "Name": "Thành phố Châu Đốc",
        "Wards": [
          { "Id": "30316", "Name": "Phường Châu Phú B", "Level": "Phường" },
          { "Id": "30319", "Name": "Phường Châu Phú A", "Level": "Phường" },
          { "Id": "30322", "Name": "Phường Vĩnh Mỹ", "Level": "Phường" },
          { "Id": "30325", "Name": "Phường Núi Sam", "Level": "Phường" },
          { "Id": "30328", "Name": "Phường Vĩnh Ngươn", "Level": "Phường" },
          { "Id": "30331", "Name": "Xã Vĩnh Tế", "Level": "Xã" },
          { "Id": "30334", "Name": "Xã Vĩnh Châu", "Level": "Xã" }
        ]
      },
      {
        "Id": "886",
        "Name": "Huyện An Phú",
        "Wards": [
          { "Id": "30337", "Name": "Thị trấn An Phú", "Level": "Thị trấn" },
          { "Id": "30340", "Name": "Xã Khánh An", "Level": "Xã" },
          { "Id": "30341", "Name": "Thị Trấn Long Bình", "Level": "Thị trấn" },
          { "Id": "30343", "Name": "Xã Khánh Bình", "Level": "Xã" },
          { "Id": "30346", "Name": "Xã Quốc Thái", "Level": "Xã" },
          { "Id": "30349", "Name": "Xã Nhơn Hội", "Level": "Xã" },
          { "Id": "30352", "Name": "Xã Phú Hữu", "Level": "Xã" },
          { "Id": "30355", "Name": "Xã Phú Hội", "Level": "Xã" },
          { "Id": "30358", "Name": "Xã Phước Hưng", "Level": "Xã" },
          { "Id": "30361", "Name": "Xã Vĩnh Lộc", "Level": "Xã" },
          { "Id": "30364", "Name": "Xã Vĩnh Hậu", "Level": "Xã" },
          { "Id": "30367", "Name": "Xã Vĩnh Trường", "Level": "Xã" },
          { "Id": "30370", "Name": "Xã Vĩnh Hội Đông", "Level": "Xã" },
          { "Id": "30373", "Name": "Xã Đa Phước", "Level": "Xã" }
        ]
      },
      {
        "Id": "887",
        "Name": "Thị xã Tân Châu",
        "Wards": [
          { "Id": "30376", "Name": "Phường Long Thạnh", "Level": "Phường" },
          { "Id": "30377", "Name": "Phường Long Hưng", "Level": "Phường" },
          { "Id": "30378", "Name": "Phường Long Châu", "Level": "Phường" },
          { "Id": "30379", "Name": "Xã Phú Lộc", "Level": "Xã" },
          { "Id": "30382", "Name": "Xã Vĩnh Xương", "Level": "Xã" },
          { "Id": "30385", "Name": "Xã Vĩnh Hòa", "Level": "Xã" },
          { "Id": "30387", "Name": "Xã Tân Thạnh", "Level": "Xã" },
          { "Id": "30388", "Name": "Xã Tân An", "Level": "Xã" },
          { "Id": "30391", "Name": "Xã Long An", "Level": "Xã" },
          { "Id": "30394", "Name": "Phường Long Phú", "Level": "Phường" },
          { "Id": "30397", "Name": "Xã Châu Phong", "Level": "Xã" },
          { "Id": "30400", "Name": "Xã Phú Vĩnh", "Level": "Xã" },
          { "Id": "30403", "Name": "Xã Lê Chánh", "Level": "Xã" },
          { "Id": "30412", "Name": "Phường Long Sơn", "Level": "Phường" }
        ]
      },
      {
        "Id": "888",
        "Name": "Huyện Phú Tân",
        "Wards": [
          { "Id": "30406", "Name": "Thị trấn Phú Mỹ", "Level": "Thị trấn" },
          { "Id": "30409", "Name": "Thị trấn Chợ Vàm", "Level": "Thị trấn" },
          { "Id": "30415", "Name": "Xã Long Hoà", "Level": "Xã" },
          { "Id": "30418", "Name": "Xã Phú Long", "Level": "Xã" },
          { "Id": "30421", "Name": "Xã Phú Lâm", "Level": "Xã" },
          { "Id": "30424", "Name": "Xã Phú Hiệp", "Level": "Xã" },
          { "Id": "30427", "Name": "Xã Phú Thạnh", "Level": "Xã" },
          { "Id": "30430", "Name": "Xã Hoà Lạc", "Level": "Xã" },
          { "Id": "30433", "Name": "Xã Phú Thành", "Level": "Xã" },
          { "Id": "30436", "Name": "Xã Phú An", "Level": "Xã" },
          { "Id": "30439", "Name": "Xã Phú Xuân", "Level": "Xã" },
          { "Id": "30442", "Name": "Xã Hiệp Xương", "Level": "Xã" },
          { "Id": "30445", "Name": "Xã Phú Bình", "Level": "Xã" },
          { "Id": "30448", "Name": "Xã Phú Thọ", "Level": "Xã" },
          { "Id": "30451", "Name": "Xã Phú Hưng", "Level": "Xã" },
          { "Id": "30454", "Name": "Xã Bình Thạnh Đông", "Level": "Xã" },
          { "Id": "30457", "Name": "Xã Tân Hòa", "Level": "Xã" },
          { "Id": "30460", "Name": "Xã Tân Trung", "Level": "Xã" }
        ]
      },
      {
        "Id": "889",
        "Name": "Huyện Châu Phú",
        "Wards": [
          { "Id": "30463", "Name": "Thị trấn Cái Dầu", "Level": "Thị trấn" },
          { "Id": "30466", "Name": "Xã Khánh Hòa", "Level": "Xã" },
          { "Id": "30469", "Name": "Xã Mỹ Đức", "Level": "Xã" },
          { "Id": "30472", "Name": "Xã Mỹ Phú", "Level": "Xã" },
          { "Id": "30475", "Name": "Xã Ô Long Vỹ", "Level": "Xã" },
          { "Id": "30478", "Name": "Xã Vĩnh Thạnh Trung", "Level": "Xã" },
          { "Id": "30481", "Name": "Xã Thạnh Mỹ Tây", "Level": "Xã" },
          { "Id": "30484", "Name": "Xã Bình Long", "Level": "Xã" },
          { "Id": "30487", "Name": "Xã Bình Mỹ", "Level": "Xã" },
          { "Id": "30490", "Name": "Xã Bình Thủy", "Level": "Xã" },
          { "Id": "30493", "Name": "Xã Đào Hữu Cảnh", "Level": "Xã" },
          { "Id": "30496", "Name": "Xã Bình Phú", "Level": "Xã" },
          { "Id": "30499", "Name": "Xã Bình Chánh", "Level": "Xã" }
        ]
      },
      {
        "Id": "890",
        "Name": "Huyện Tịnh Biên",
        "Wards": [
          { "Id": "30502", "Name": "Thị trấn Nhà Bàng", "Level": "Thị trấn" },
          { "Id": "30505", "Name": "Thị trấn Chi Lăng", "Level": "Thị trấn" },
          { "Id": "30508", "Name": "Xã Núi Voi", "Level": "Xã" },
          { "Id": "30511", "Name": "Xã Nhơn Hưng", "Level": "Xã" },
          { "Id": "30514", "Name": "Xã An Phú", "Level": "Xã" },
          { "Id": "30517", "Name": "Xã Thới Sơn", "Level": "Xã" },
          { "Id": "30520", "Name": "Thị trấn Tịnh Biên", "Level": "Thị trấn" },
          { "Id": "30523", "Name": "Xã Văn Giáo", "Level": "Xã" },
          { "Id": "30526", "Name": "Xã An Cư", "Level": "Xã" },
          { "Id": "30529", "Name": "Xã An Nông", "Level": "Xã" },
          { "Id": "30532", "Name": "Xã Vĩnh Trung", "Level": "Xã" },
          { "Id": "30535", "Name": "Xã Tân Lợi", "Level": "Xã" },
          { "Id": "30538", "Name": "Xã An Hảo", "Level": "Xã" },
          { "Id": "30541", "Name": "Xã Tân Lập", "Level": "Xã" }
        ]
      },
      {
        "Id": "891",
        "Name": "Huyện Tri Tôn",
        "Wards": [
          { "Id": "30544", "Name": "Thị trấn Tri Tôn", "Level": "Thị trấn" },
          { "Id": "30547", "Name": "Thị trấn Ba Chúc", "Level": "Thị trấn" },
          { "Id": "30550", "Name": "Xã Lạc Quới", "Level": "Xã" },
          { "Id": "30553", "Name": "Xã Lê Trì", "Level": "Xã" },
          { "Id": "30556", "Name": "Xã Vĩnh Gia", "Level": "Xã" },
          { "Id": "30559", "Name": "Xã Vĩnh Phước", "Level": "Xã" },
          { "Id": "30562", "Name": "Xã Châu Lăng", "Level": "Xã" },
          { "Id": "30565", "Name": "Xã Lương Phi", "Level": "Xã" },
          { "Id": "30568", "Name": "Xã Lương An Trà", "Level": "Xã" },
          { "Id": "30571", "Name": "Xã Tà Đảnh", "Level": "Xã" },
          { "Id": "30574", "Name": "Xã Núi Tô", "Level": "Xã" },
          { "Id": "30577", "Name": "Xã An Tức", "Level": "Xã" },
          { "Id": "30580", "Name": "Xã Cô Tô", "Level": "Xã" },
          { "Id": "30583", "Name": "Xã Tân Tuyến", "Level": "Xã" },
          { "Id": "30586", "Name": "Xã Ô Lâm", "Level": "Xã" }
        ]
      },
      {
        "Id": "892",
        "Name": "Huyện Châu Thành",
        "Wards": [
          { "Id": "30589", "Name": "Thị trấn An Châu", "Level": "Thị trấn" },
          { "Id": "30592", "Name": "Xã An Hòa", "Level": "Xã" },
          { "Id": "30595", "Name": "Xã Cần Đăng", "Level": "Xã" },
          { "Id": "30598", "Name": "Xã Vĩnh Hanh", "Level": "Xã" },
          { "Id": "30601", "Name": "Xã Bình Thạnh", "Level": "Xã" },
          { "Id": "30604", "Name": "Xã Vĩnh Bình", "Level": "Xã" },
          { "Id": "30607", "Name": "Xã Bình Hòa", "Level": "Xã" },
          { "Id": "30610", "Name": "Xã Vĩnh An", "Level": "Xã" },
          { "Id": "30613", "Name": "Xã Hòa Bình Thạnh", "Level": "Xã" },
          { "Id": "30616", "Name": "Xã Vĩnh Lợi", "Level": "Xã" },
          { "Id": "30619", "Name": "Xã Vĩnh Nhuận", "Level": "Xã" },
          { "Id": "30622", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "30625", "Name": "Xã Vĩnh Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "893",
        "Name": "Huyện Chợ Mới",
        "Wards": [
          { "Id": "30628", "Name": "Thị trấn Chợ Mới", "Level": "Thị trấn" },
          { "Id": "30631", "Name": "Thị trấn Mỹ Luông", "Level": "Thị trấn" },
          { "Id": "30634", "Name": "Xã Kiến An", "Level": "Xã" },
          { "Id": "30637", "Name": "Xã Mỹ Hội Đông", "Level": "Xã" },
          { "Id": "30640", "Name": "Xã Long Điền A", "Level": "Xã" },
          { "Id": "30643", "Name": "Xã Tấn Mỹ", "Level": "Xã" },
          { "Id": "30646", "Name": "Xã Long Điền B", "Level": "Xã" },
          { "Id": "30649", "Name": "Xã Kiến Thành", "Level": "Xã" },
          { "Id": "30652", "Name": "Xã Mỹ Hiệp", "Level": "Xã" },
          { "Id": "30655", "Name": "Xã Mỹ An", "Level": "Xã" },
          { "Id": "30658", "Name": "Xã Nhơn Mỹ", "Level": "Xã" },
          { "Id": "30661", "Name": "Xã Long Giang", "Level": "Xã" },
          { "Id": "30664", "Name": "Xã Long Kiến", "Level": "Xã" },
          { "Id": "30667", "Name": "Xã Bình Phước Xuân", "Level": "Xã" },
          { "Id": "30670", "Name": "Xã An Thạnh Trung", "Level": "Xã" },
          { "Id": "30673", "Name": "Xã Hội An", "Level": "Xã" },
          { "Id": "30676", "Name": "Xã Hòa Bình", "Level": "Xã" },
          { "Id": "30679", "Name": "Xã Hòa An", "Level": "Xã" }
        ]
      },
      {
        "Id": "894",
        "Name": "Huyện Thoại Sơn",
        "Wards": [
          { "Id": "30682", "Name": "Thị trấn Núi Sập", "Level": "Thị trấn" },
          { "Id": "30685", "Name": "Thị trấn Phú Hoà", "Level": "Thị trấn" },
          { "Id": "30688", "Name": "Thị Trấn Óc Eo", "Level": "Thị trấn" },
          { "Id": "30691", "Name": "Xã Tây Phú", "Level": "Xã" },
          { "Id": "30692", "Name": "Xã An Bình", "Level": "Xã" },
          { "Id": "30694", "Name": "Xã Vĩnh Phú", "Level": "Xã" },
          { "Id": "30697", "Name": "Xã Vĩnh Trạch", "Level": "Xã" },
          { "Id": "30700", "Name": "Xã Phú Thuận", "Level": "Xã" },
          { "Id": "30703", "Name": "Xã Vĩnh Chánh", "Level": "Xã" },
          { "Id": "30706", "Name": "Xã Định Mỹ", "Level": "Xã" },
          { "Id": "30709", "Name": "Xã Định Thành", "Level": "Xã" },
          { "Id": "30712", "Name": "Xã Mỹ Phú Đông", "Level": "Xã" },
          { "Id": "30715", "Name": "Xã Vọng Đông", "Level": "Xã" },
          { "Id": "30718", "Name": "Xã Vĩnh Khánh", "Level": "Xã" },
          { "Id": "30721", "Name": "Xã Thoại Giang", "Level": "Xã" },
          { "Id": "30724", "Name": "Xã Bình Thành", "Level": "Xã" },
          { "Id": "30727", "Name": "Xã Vọng Thê", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "91",
    "Name": "Tỉnh Kiên Giang",
    "Districts": [
      {
        "Id": "899",
        "Name": "Thành phố Rạch Giá",
        "Wards": [
          { "Id": "30730", "Name": "Phường Vĩnh Thanh Vân", "Level": "Phường" },
          { "Id": "30733", "Name": "Phường Vĩnh Thanh", "Level": "Phường" },
          { "Id": "30736", "Name": "Phường Vĩnh Quang", "Level": "Phường" },
          { "Id": "30739", "Name": "Phường Vĩnh Hiệp", "Level": "Phường" },
          { "Id": "30742", "Name": "Phường Vĩnh Bảo", "Level": "Phường" },
          { "Id": "30745", "Name": "Phường Vĩnh Lạc", "Level": "Phường" },
          { "Id": "30748", "Name": "Phường An Hòa", "Level": "Phường" },
          { "Id": "30751", "Name": "Phường An Bình", "Level": "Phường" },
          { "Id": "30754", "Name": "Phường Rạch Sỏi", "Level": "Phường" },
          { "Id": "30757", "Name": "Phường Vĩnh Lợi", "Level": "Phường" },
          { "Id": "30760", "Name": "Phường Vĩnh Thông", "Level": "Phường" },
          { "Id": "30763", "Name": "Xã Phi Thông", "Level": "Xã" }
        ]
      },
      {
        "Id": "900",
        "Name": "Thành phố Hà Tiên",
        "Wards": [
          { "Id": "30766", "Name": "Phường Tô Châu", "Level": "Phường" },
          { "Id": "30769", "Name": "Phường Đông Hồ", "Level": "Phường" },
          { "Id": "30772", "Name": "Phường Bình San", "Level": "Phường" },
          { "Id": "30775", "Name": "Phường Pháo Đài", "Level": "Phường" },
          { "Id": "30778", "Name": "Phường Mỹ Đức", "Level": "Phường" },
          { "Id": "30781", "Name": "Xã Tiên Hải", "Level": "Xã" },
          { "Id": "30784", "Name": "Xã Thuận Yên", "Level": "Xã" }
        ]
      },
      {
        "Id": "902",
        "Name": "Huyện Kiên Lương",
        "Wards": [
          { "Id": "30787", "Name": "Thị trấn Kiên Lương", "Level": "Thị trấn" },
          { "Id": "30790", "Name": "Xã Kiên Bình", "Level": "Xã" },
          { "Id": "30802", "Name": "Xã Hòa Điền", "Level": "Xã" },
          { "Id": "30805", "Name": "Xã Dương Hòa", "Level": "Xã" },
          { "Id": "30808", "Name": "Xã Bình An", "Level": "Xã" },
          { "Id": "30809", "Name": "Xã Bình Trị", "Level": "Xã" },
          { "Id": "30811", "Name": "Xã Sơn Hải", "Level": "Xã" },
          { "Id": "30814", "Name": "Xã Hòn Nghệ", "Level": "Xã" }
        ]
      },
      {
        "Id": "903",
        "Name": "Huyện Hòn Đất",
        "Wards": [
          { "Id": "30817", "Name": "Thị trấn Hòn Đất", "Level": "Thị trấn" },
          { "Id": "30820", "Name": "Thị trấn Sóc Sơn", "Level": "Thị trấn" },
          { "Id": "30823", "Name": "Xã Bình Sơn", "Level": "Xã" },
          { "Id": "30826", "Name": "Xã Bình Giang", "Level": "Xã" },
          { "Id": "30828", "Name": "Xã Mỹ Thái", "Level": "Xã" },
          { "Id": "30829", "Name": "Xã Nam Thái Sơn", "Level": "Xã" },
          { "Id": "30832", "Name": "Xã Mỹ Hiệp Sơn", "Level": "Xã" },
          { "Id": "30835", "Name": "Xã Sơn Kiên", "Level": "Xã" },
          { "Id": "30836", "Name": "Xã Sơn Bình", "Level": "Xã" },
          { "Id": "30838", "Name": "Xã Mỹ Thuận", "Level": "Xã" },
          { "Id": "30840", "Name": "Xã Lình Huỳnh", "Level": "Xã" },
          { "Id": "30841", "Name": "Xã Thổ Sơn", "Level": "Xã" },
          { "Id": "30844", "Name": "Xã Mỹ Lâm", "Level": "Xã" },
          { "Id": "30847", "Name": "Xã Mỹ Phước", "Level": "Xã" }
        ]
      },
      {
        "Id": "904",
        "Name": "Huyện Tân Hiệp",
        "Wards": [
          { "Id": "30850", "Name": "Thị trấn Tân Hiệp", "Level": "Thị trấn" },
          { "Id": "30853", "Name": "Xã Tân Hội", "Level": "Xã" },
          { "Id": "30856", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "30859", "Name": "Xã Tân Hiệp B", "Level": "Xã" },
          { "Id": "30860", "Name": "Xã Tân Hoà", "Level": "Xã" },
          { "Id": "30862", "Name": "Xã Thạnh Đông B", "Level": "Xã" },
          { "Id": "30865", "Name": "Xã Thạnh Đông", "Level": "Xã" },
          { "Id": "30868", "Name": "Xã Tân Hiệp A", "Level": "Xã" },
          { "Id": "30871", "Name": "Xã Tân An", "Level": "Xã" },
          { "Id": "30874", "Name": "Xã Thạnh Đông A", "Level": "Xã" },
          { "Id": "30877", "Name": "Xã Thạnh Trị", "Level": "Xã" }
        ]
      },
      {
        "Id": "905",
        "Name": "Huyện Châu Thành",
        "Wards": [
          { "Id": "30880", "Name": "Thị trấn Minh Lương", "Level": "Thị trấn" },
          { "Id": "30883", "Name": "Xã Mong Thọ A", "Level": "Xã" },
          { "Id": "30886", "Name": "Xã Mong Thọ B", "Level": "Xã" },
          { "Id": "30887", "Name": "Xã Mong Thọ", "Level": "Xã" },
          { "Id": "30889", "Name": "Xã Giục Tượng", "Level": "Xã" },
          { "Id": "30892", "Name": "Xã Vĩnh Hòa Hiệp", "Level": "Xã" },
          { "Id": "30893", "Name": "Xã Vĩnh Hoà Phú", "Level": "Xã" },
          { "Id": "30895", "Name": "Xã Minh Hòa", "Level": "Xã" },
          { "Id": "30898", "Name": "Xã Bình An", "Level": "Xã" },
          { "Id": "30901", "Name": "Xã Thạnh Lộc", "Level": "Xã" }
        ]
      },
      {
        "Id": "906",
        "Name": "Huyện Giồng Riềng",
        "Wards": [
          {
            "Id": "30904",
            "Name": "Thị Trấn Giồng Riềng",
            "Level": "Thị trấn"
          },
          { "Id": "30907", "Name": "Xã Thạnh Hưng", "Level": "Xã" },
          { "Id": "30910", "Name": "Xã Thạnh Phước", "Level": "Xã" },
          { "Id": "30913", "Name": "Xã Thạnh Lộc", "Level": "Xã" },
          { "Id": "30916", "Name": "Xã Thạnh Hòa", "Level": "Xã" },
          { "Id": "30917", "Name": "Xã Thạnh Bình", "Level": "Xã" },
          { "Id": "30919", "Name": "Xã Bàn Thạch", "Level": "Xã" },
          { "Id": "30922", "Name": "Xã Bàn Tân Định", "Level": "Xã" },
          { "Id": "30925", "Name": "Xã Ngọc Thành", "Level": "Xã" },
          { "Id": "30928", "Name": "Xã Ngọc Chúc", "Level": "Xã" },
          { "Id": "30931", "Name": "Xã Ngọc Thuận", "Level": "Xã" },
          { "Id": "30934", "Name": "Xã Hòa Hưng", "Level": "Xã" },
          { "Id": "30937", "Name": "Xã Hoà Lợi", "Level": "Xã" },
          { "Id": "30940", "Name": "Xã Hoà An", "Level": "Xã" },
          { "Id": "30943", "Name": "Xã Long Thạnh", "Level": "Xã" },
          { "Id": "30946", "Name": "Xã Vĩnh Thạnh", "Level": "Xã" },
          { "Id": "30947", "Name": "Xã Vĩnh Phú", "Level": "Xã" },
          { "Id": "30949", "Name": "Xã  Hòa Thuận", "Level": "Xã" },
          { "Id": "30950", "Name": "Xã Ngọc Hoà", "Level": "Xã" }
        ]
      },
      {
        "Id": "907",
        "Name": "Huyện Gò Quao",
        "Wards": [
          { "Id": "30952", "Name": "Thị trấn Gò Quao", "Level": "Thị trấn" },
          { "Id": "30955", "Name": "Xã Vĩnh Hòa Hưng Bắc", "Level": "Xã" },
          { "Id": "30958", "Name": "Xã Định Hòa", "Level": "Xã" },
          { "Id": "30961", "Name": "Xã Thới Quản", "Level": "Xã" },
          { "Id": "30964", "Name": "Xã Định An", "Level": "Xã" },
          { "Id": "30967", "Name": "Xã Thủy Liễu", "Level": "Xã" },
          { "Id": "30970", "Name": "Xã Vĩnh Hòa Hưng Nam", "Level": "Xã" },
          { "Id": "30973", "Name": "Xã Vĩnh Phước A", "Level": "Xã" },
          { "Id": "30976", "Name": "Xã Vĩnh Phước B", "Level": "Xã" },
          { "Id": "30979", "Name": "Xã Vĩnh Tuy", "Level": "Xã" },
          { "Id": "30982", "Name": "Xã Vĩnh Thắng", "Level": "Xã" }
        ]
      },
      {
        "Id": "908",
        "Name": "Huyện An Biên",
        "Wards": [
          { "Id": "30985", "Name": "Thị trấn Thứ Ba", "Level": "Thị trấn" },
          { "Id": "30988", "Name": "Xã Tây Yên", "Level": "Xã" },
          { "Id": "30991", "Name": "Xã Tây Yên A", "Level": "Xã" },
          { "Id": "30994", "Name": "Xã Nam Yên", "Level": "Xã" },
          { "Id": "30997", "Name": "Xã Hưng Yên", "Level": "Xã" },
          { "Id": "31000", "Name": "Xã Nam Thái", "Level": "Xã" },
          { "Id": "31003", "Name": "Xã Nam Thái A", "Level": "Xã" },
          { "Id": "31006", "Name": "Xã Đông Thái", "Level": "Xã" },
          { "Id": "31009", "Name": "Xã Đông Yên", "Level": "Xã" }
        ]
      },
      {
        "Id": "909",
        "Name": "Huyện An Minh",
        "Wards": [
          {
            "Id": "31018",
            "Name": "Thị trấn Thứ Mười Một",
            "Level": "Thị trấn"
          },
          { "Id": "31021", "Name": "Xã Thuận Hoà", "Level": "Xã" },
          { "Id": "31024", "Name": "Xã Đông Hòa", "Level": "Xã" },
          { "Id": "31030", "Name": "Xã Đông Thạnh", "Level": "Xã" },
          { "Id": "31031", "Name": "Xã Tân Thạnh", "Level": "Xã" },
          { "Id": "31033", "Name": "Xã Đông Hưng", "Level": "Xã" },
          { "Id": "31036", "Name": "Xã Đông Hưng A", "Level": "Xã" },
          { "Id": "31039", "Name": "Xã Đông Hưng B", "Level": "Xã" },
          { "Id": "31042", "Name": "Xã Vân Khánh", "Level": "Xã" },
          { "Id": "31045", "Name": "Xã Vân Khánh Đông", "Level": "Xã" },
          { "Id": "31048", "Name": "Xã Vân Khánh Tây", "Level": "Xã" }
        ]
      },
      {
        "Id": "910",
        "Name": "Huyện Vĩnh Thuận",
        "Wards": [
          { "Id": "31051", "Name": "Thị trấn Vĩnh Thuận", "Level": "Thị trấn" },
          { "Id": "31060", "Name": "Xã Vĩnh Bình Bắc", "Level": "Xã" },
          { "Id": "31063", "Name": "Xã Vĩnh Bình Nam", "Level": "Xã" },
          { "Id": "31064", "Name": "Xã Bình Minh", "Level": "Xã" },
          { "Id": "31069", "Name": "Xã Vĩnh Thuận", "Level": "Xã" },
          { "Id": "31072", "Name": "Xã Tân Thuận", "Level": "Xã" },
          { "Id": "31074", "Name": "Xã Phong Đông", "Level": "Xã" },
          { "Id": "31075", "Name": "Xã Vĩnh Phong", "Level": "Xã" }
        ]
      },
      {
        "Id": "911",
        "Name": "Thành phố Phú Quốc",
        "Wards": [
          { "Id": "31078", "Name": "Phường Dương Đông", "Level": "Phường" },
          { "Id": "31081", "Name": "Phường An Thới", "Level": "Phường" },
          { "Id": "31084", "Name": "Xã Cửa Cạn", "Level": "Xã" },
          { "Id": "31087", "Name": "Xã Gành Dầu", "Level": "Xã" },
          { "Id": "31090", "Name": "Xã Cửa Dương", "Level": "Xã" },
          { "Id": "31093", "Name": "Xã Hàm Ninh", "Level": "Xã" },
          { "Id": "31096", "Name": "Xã Dương Tơ", "Level": "Xã" },
          { "Id": "31102", "Name": "Xã Bãi Thơm", "Level": "Xã" },
          { "Id": "31105", "Name": "Xã Thổ Châu", "Level": "Xã" }
        ]
      },
      {
        "Id": "912",
        "Name": "Huyện Kiên Hải",
        "Wards": [
          { "Id": "31108", "Name": "Xã Hòn Tre", "Level": "Xã" },
          { "Id": "31111", "Name": "Xã Lại Sơn", "Level": "Xã" },
          { "Id": "31114", "Name": "Xã An Sơn", "Level": "Xã" },
          { "Id": "31115", "Name": "Xã Nam Du", "Level": "Xã" }
        ]
      },
      {
        "Id": "913",
        "Name": "Huyện U Minh Thượng",
        "Wards": [
          { "Id": "31012", "Name": "Xã Thạnh Yên", "Level": "Xã" },
          { "Id": "31015", "Name": "Xã Thạnh Yên A", "Level": "Xã" },
          { "Id": "31027", "Name": "Xã An Minh Bắc", "Level": "Xã" },
          { "Id": "31054", "Name": "Xã Vĩnh Hòa", "Level": "Xã" },
          { "Id": "31057", "Name": "Xã Hoà Chánh", "Level": "Xã" },
          { "Id": "31066", "Name": "Xã Minh Thuận", "Level": "Xã" }
        ]
      },
      {
        "Id": "914",
        "Name": "Huyện Giang Thành",
        "Wards": [
          { "Id": "30791", "Name": "Xã Vĩnh Phú", "Level": "Xã" },
          { "Id": "30793", "Name": "Xã Vĩnh Điều", "Level": "Xã" },
          { "Id": "30796", "Name": "Xã Tân Khánh Hòa", "Level": "Xã" },
          { "Id": "30797", "Name": "Xã Phú Lợi", "Level": "Xã" },
          { "Id": "30799", "Name": "Xã Phú Mỹ", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "92",
    "Name": "Thành phố Cần Thơ",
    "Districts": [
      {
        "Id": "916",
        "Name": "Quận Ninh Kiều",
        "Wards": [
          { "Id": "31117", "Name": "Phường Cái Khế", "Level": "Phường" },
          { "Id": "31120", "Name": "Phường An Hòa", "Level": "Phường" },
          { "Id": "31123", "Name": "Phường Thới Bình", "Level": "Phường" },
          { "Id": "31126", "Name": "Phường An Nghiệp", "Level": "Phường" },
          { "Id": "31129", "Name": "Phường An Cư", "Level": "Phường" },
          { "Id": "31135", "Name": "Phường Tân An", "Level": "Phường" },
          { "Id": "31141", "Name": "Phường An Phú", "Level": "Phường" },
          { "Id": "31144", "Name": "Phường Xuân Khánh", "Level": "Phường" },
          { "Id": "31147", "Name": "Phường Hưng Lợi", "Level": "Phường" },
          { "Id": "31149", "Name": "Phường An Khánh", "Level": "Phường" },
          { "Id": "31150", "Name": "Phường An Bình", "Level": "Phường" }
        ]
      },
      {
        "Id": "917",
        "Name": "Quận Ô Môn",
        "Wards": [
          { "Id": "31153", "Name": "Phường Châu Văn Liêm", "Level": "Phường" },
          { "Id": "31154", "Name": "Phường Thới Hòa", "Level": "Phường" },
          { "Id": "31156", "Name": "Phường Thới Long", "Level": "Phường" },
          { "Id": "31157", "Name": "Phường Long Hưng", "Level": "Phường" },
          { "Id": "31159", "Name": "Phường Thới An", "Level": "Phường" },
          { "Id": "31162", "Name": "Phường Phước Thới", "Level": "Phường" },
          { "Id": "31165", "Name": "Phường Trường Lạc", "Level": "Phường" }
        ]
      },
      {
        "Id": "918",
        "Name": "Quận Bình Thuỷ",
        "Wards": [
          { "Id": "31168", "Name": "Phường Bình Thủy", "Level": "Phường" },
          { "Id": "31169", "Name": "Phường Trà An", "Level": "Phường" },
          { "Id": "31171", "Name": "Phường Trà Nóc", "Level": "Phường" },
          { "Id": "31174", "Name": "Phường Thới An Đông", "Level": "Phường" },
          { "Id": "31177", "Name": "Phường An Thới", "Level": "Phường" },
          { "Id": "31178", "Name": "Phường Bùi Hữu Nghĩa", "Level": "Phường" },
          { "Id": "31180", "Name": "Phường Long Hòa", "Level": "Phường" },
          { "Id": "31183", "Name": "Phường Long Tuyền", "Level": "Phường" }
        ]
      },
      {
        "Id": "919",
        "Name": "Quận Cái Răng",
        "Wards": [
          { "Id": "31186", "Name": "Phường Lê Bình", "Level": "Phường" },
          { "Id": "31189", "Name": "Phường Hưng Phú", "Level": "Phường" },
          { "Id": "31192", "Name": "Phường Hưng Thạnh", "Level": "Phường" },
          { "Id": "31195", "Name": "Phường Ba Láng", "Level": "Phường" },
          { "Id": "31198", "Name": "Phường Thường Thạnh", "Level": "Phường" },
          { "Id": "31201", "Name": "Phường Phú Thứ", "Level": "Phường" },
          { "Id": "31204", "Name": "Phường Tân Phú", "Level": "Phường" }
        ]
      },
      {
        "Id": "923",
        "Name": "Quận Thốt Nốt",
        "Wards": [
          { "Id": "31207", "Name": "Phường Thốt Nốt", "Level": "Phường" },
          { "Id": "31210", "Name": "Phường Thới Thuận", "Level": "Phường" },
          { "Id": "31212", "Name": "Phường Thuận An", "Level": "Phường" },
          { "Id": "31213", "Name": "Phường Tân Lộc", "Level": "Phường" },
          { "Id": "31216", "Name": "Phường Trung Nhứt", "Level": "Phường" },
          { "Id": "31217", "Name": "Phường Thạnh Hoà", "Level": "Phường" },
          { "Id": "31219", "Name": "Phường Trung Kiên", "Level": "Phường" },
          { "Id": "31227", "Name": "Phường Tân Hưng", "Level": "Phường" },
          { "Id": "31228", "Name": "Phường Thuận Hưng", "Level": "Phường" }
        ]
      },
      {
        "Id": "924",
        "Name": "Huyện Vĩnh Thạnh",
        "Wards": [
          { "Id": "31211", "Name": "Xã Vĩnh Bình", "Level": "Xã" },
          { "Id": "31231", "Name": "Thị trấn Thanh An", "Level": "Thị trấn" },
          { "Id": "31232", "Name": "Thị trấn Vĩnh Thạnh", "Level": "Thị trấn" },
          { "Id": "31234", "Name": "Xã Thạnh Mỹ", "Level": "Xã" },
          { "Id": "31237", "Name": "Xã Vĩnh Trinh", "Level": "Xã" },
          { "Id": "31240", "Name": "Xã Thạnh An", "Level": "Xã" },
          { "Id": "31241", "Name": "Xã Thạnh Tiến", "Level": "Xã" },
          { "Id": "31243", "Name": "Xã Thạnh Thắng", "Level": "Xã" },
          { "Id": "31244", "Name": "Xã Thạnh Lợi", "Level": "Xã" },
          { "Id": "31246", "Name": "Xã Thạnh Qưới", "Level": "Xã" },
          { "Id": "31252", "Name": "Xã Thạnh Lộc", "Level": "Xã" }
        ]
      },
      {
        "Id": "925",
        "Name": "Huyện Cờ Đỏ",
        "Wards": [
          { "Id": "31222", "Name": "Xã Trung An", "Level": "Xã" },
          { "Id": "31225", "Name": "Xã Trung Thạnh", "Level": "Xã" },
          { "Id": "31249", "Name": "Xã Thạnh Phú", "Level": "Xã" },
          { "Id": "31255", "Name": "Xã Trung Hưng", "Level": "Xã" },
          { "Id": "31261", "Name": "Thị trấn Cờ Đỏ", "Level": "Thị trấn" },
          { "Id": "31264", "Name": "Xã Thới Hưng", "Level": "Xã" },
          { "Id": "31273", "Name": "Xã Đông Hiệp", "Level": "Xã" },
          { "Id": "31274", "Name": "Xã Đông Thắng", "Level": "Xã" },
          { "Id": "31276", "Name": "Xã Thới Đông", "Level": "Xã" },
          { "Id": "31277", "Name": "Xã Thới Xuân", "Level": "Xã" }
        ]
      },
      {
        "Id": "926",
        "Name": "Huyện Phong Điền",
        "Wards": [
          { "Id": "31299", "Name": "Thị trấn Phong Điền", "Level": "Thị trấn" },
          { "Id": "31300", "Name": "Xã Nhơn Ái", "Level": "Xã" },
          { "Id": "31303", "Name": "Xã Giai Xuân", "Level": "Xã" },
          { "Id": "31306", "Name": "Xã Tân Thới", "Level": "Xã" },
          { "Id": "31309", "Name": "Xã Trường Long", "Level": "Xã" },
          { "Id": "31312", "Name": "Xã Mỹ Khánh", "Level": "Xã" },
          { "Id": "31315", "Name": "Xã Nhơn Nghĩa", "Level": "Xã" }
        ]
      },
      {
        "Id": "927",
        "Name": "Huyện Thới Lai",
        "Wards": [
          { "Id": "31258", "Name": "Thị trấn Thới Lai", "Level": "Thị trấn" },
          { "Id": "31267", "Name": "Xã Thới Thạnh", "Level": "Xã" },
          { "Id": "31268", "Name": "Xã Tân Thạnh", "Level": "Xã" },
          { "Id": "31270", "Name": "Xã Xuân Thắng", "Level": "Xã" },
          { "Id": "31279", "Name": "Xã Đông Bình", "Level": "Xã" },
          { "Id": "31282", "Name": "Xã Đông Thuận", "Level": "Xã" },
          { "Id": "31285", "Name": "Xã Thới Tân", "Level": "Xã" },
          { "Id": "31286", "Name": "Xã Trường Thắng", "Level": "Xã" },
          { "Id": "31288", "Name": "Xã Định Môn", "Level": "Xã" },
          { "Id": "31291", "Name": "Xã Trường Thành", "Level": "Xã" },
          { "Id": "31294", "Name": "Xã Trường Xuân", "Level": "Xã" },
          { "Id": "31297", "Name": "Xã Trường Xuân A", "Level": "Xã" },
          { "Id": "31298", "Name": "Xã Trường Xuân B", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "93",
    "Name": "Tỉnh Hậu Giang",
    "Districts": [
      {
        "Id": "930",
        "Name": "Thành phố Vị Thanh",
        "Wards": [
          { "Id": "31318", "Name": "Phường I", "Level": "Phường" },
          { "Id": "31321", "Name": "Phường III", "Level": "Phường" },
          { "Id": "31324", "Name": "Phường IV", "Level": "Phường" },
          { "Id": "31327", "Name": "Phường V", "Level": "Phường" },
          { "Id": "31330", "Name": "Phường VII", "Level": "Phường" },
          { "Id": "31333", "Name": "Xã Vị Tân", "Level": "Xã" },
          { "Id": "31336", "Name": "Xã Hoả Lựu", "Level": "Xã" },
          { "Id": "31338", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "31339", "Name": "Xã Hoả Tiến", "Level": "Xã" }
        ]
      },
      {
        "Id": "931",
        "Name": "Thành phố Ngã Bảy",
        "Wards": [
          { "Id": "31340", "Name": "Phường Ngã Bảy", "Level": "Phường" },
          { "Id": "31341", "Name": "Phường Lái Hiếu", "Level": "Phường" },
          { "Id": "31343", "Name": "Phường Hiệp Thành", "Level": "Phường" },
          { "Id": "31344", "Name": "Phường Hiệp Lợi", "Level": "Phường" },
          { "Id": "31411", "Name": "Xã Đại Thành", "Level": "Xã" },
          { "Id": "31414", "Name": "Xã Tân Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "932",
        "Name": "Huyện Châu Thành A",
        "Wards": [
          { "Id": "31342", "Name": "Thị trấn Một Ngàn", "Level": "Thị trấn" },
          { "Id": "31345", "Name": "Xã Tân Hoà", "Level": "Xã" },
          { "Id": "31346", "Name": "Thị trấn Bảy Ngàn", "Level": "Thị trấn" },
          { "Id": "31348", "Name": "Xã Trường Long Tây", "Level": "Xã" },
          { "Id": "31351", "Name": "Xã Trường Long A", "Level": "Xã" },
          { "Id": "31357", "Name": "Xã Nhơn Nghĩa A", "Level": "Xã" },
          { "Id": "31359", "Name": "Thị trấn Rạch Gòi", "Level": "Thị trấn" },
          { "Id": "31360", "Name": "Xã Thạnh Xuân", "Level": "Xã" },
          { "Id": "31362", "Name": "Thị trấn Cái Tắc", "Level": "Thị trấn" },
          { "Id": "31363", "Name": "Xã Tân Phú Thạnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "933",
        "Name": "Huyện Châu Thành",
        "Wards": [
          { "Id": "31366", "Name": "Thị Trấn Ngã Sáu", "Level": "Thị trấn" },
          { "Id": "31369", "Name": "Xã Đông Thạnh", "Level": "Xã" },
          { "Id": "31375", "Name": "Xã Đông Phú", "Level": "Xã" },
          { "Id": "31378", "Name": "Xã Phú Hữu", "Level": "Xã" },
          { "Id": "31379", "Name": "Xã Phú Tân", "Level": "Xã" },
          { "Id": "31381", "Name": "Thị trấn Mái Dầm", "Level": "Thị trấn" },
          { "Id": "31384", "Name": "Xã Đông Phước", "Level": "Xã" },
          { "Id": "31387", "Name": "Xã Đông Phước A", "Level": "Xã" }
        ]
      },
      {
        "Id": "934",
        "Name": "Huyện Phụng Hiệp",
        "Wards": [
          { "Id": "31393", "Name": "Thị trấn Kinh Cùng", "Level": "Thị trấn" },
          { "Id": "31396", "Name": "Thị trấn Cây Dương", "Level": "Thị trấn" },
          { "Id": "31399", "Name": "Xã Tân Bình", "Level": "Xã" },
          { "Id": "31402", "Name": "Xã Bình Thành", "Level": "Xã" },
          { "Id": "31405", "Name": "Xã Thạnh Hòa", "Level": "Xã" },
          { "Id": "31408", "Name": "Xã Long Thạnh", "Level": "Xã" },
          { "Id": "31417", "Name": "Xã Phụng Hiệp", "Level": "Xã" },
          { "Id": "31420", "Name": "Xã Hòa Mỹ", "Level": "Xã" },
          { "Id": "31423", "Name": "Xã Hòa An", "Level": "Xã" },
          { "Id": "31426", "Name": "Xã Phương Bình", "Level": "Xã" },
          { "Id": "31429", "Name": "Xã Hiệp Hưng", "Level": "Xã" },
          { "Id": "31432", "Name": "Xã Tân Phước Hưng", "Level": "Xã" },
          { "Id": "31433", "Name": "Thị trấn Búng Tàu", "Level": "Thị trấn" },
          { "Id": "31435", "Name": "Xã Phương Phú", "Level": "Xã" },
          { "Id": "31438", "Name": "Xã Tân Long", "Level": "Xã" }
        ]
      },
      {
        "Id": "935",
        "Name": "Huyện Vị Thuỷ",
        "Wards": [
          { "Id": "31441", "Name": "Thị trấn Nàng Mau", "Level": "Thị trấn" },
          { "Id": "31444", "Name": "Xã Vị Trung", "Level": "Xã" },
          { "Id": "31447", "Name": "Xã Vị Thuỷ", "Level": "Xã" },
          { "Id": "31450", "Name": "Xã Vị Thắng", "Level": "Xã" },
          { "Id": "31453", "Name": "Xã Vĩnh Thuận Tây", "Level": "Xã" },
          { "Id": "31456", "Name": "Xã Vĩnh Trung", "Level": "Xã" },
          { "Id": "31459", "Name": "Xã Vĩnh Tường", "Level": "Xã" },
          { "Id": "31462", "Name": "Xã Vị Đông", "Level": "Xã" },
          { "Id": "31465", "Name": "Xã Vị Thanh", "Level": "Xã" },
          { "Id": "31468", "Name": "Xã Vị Bình", "Level": "Xã" }
        ]
      },
      {
        "Id": "936",
        "Name": "Huyện Long Mỹ",
        "Wards": [
          { "Id": "31483", "Name": "Xã Thuận Hưng", "Level": "Xã" },
          { "Id": "31484", "Name": "Xã Thuận Hòa", "Level": "Xã" },
          { "Id": "31486", "Name": "Xã Vĩnh Thuận Đông", "Level": "Xã" },
          { "Id": "31489", "Name": "Thị trấn Vĩnh Viễn", "Level": "Thị trấn" },
          { "Id": "31490", "Name": "Xã Vĩnh Viễn A", "Level": "Xã" },
          { "Id": "31492", "Name": "Xã Lương Tâm", "Level": "Xã" },
          { "Id": "31493", "Name": "Xã Lương Nghĩa", "Level": "Xã" },
          { "Id": "31495", "Name": "Xã Xà Phiên", "Level": "Xã" }
        ]
      },
      {
        "Id": "937",
        "Name": "Thị xã Long Mỹ",
        "Wards": [
          { "Id": "31471", "Name": "Phường Thuận An", "Level": "Phường" },
          { "Id": "31472", "Name": "Phường Trà Lồng", "Level": "Phường" },
          { "Id": "31473", "Name": "Phường Bình Thạnh", "Level": "Phường" },
          { "Id": "31474", "Name": "Xã Long Bình", "Level": "Xã" },
          { "Id": "31475", "Name": "Phường Vĩnh Tường", "Level": "Phường" },
          { "Id": "31477", "Name": "Xã Long Trị", "Level": "Xã" },
          { "Id": "31478", "Name": "Xã Long Trị A", "Level": "Xã" },
          { "Id": "31480", "Name": "Xã Long Phú", "Level": "Xã" },
          { "Id": "31481", "Name": "Xã Tân Phú", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "94",
    "Name": "Tỉnh Sóc Trăng",
    "Districts": [
      {
        "Id": "941",
        "Name": "Thành phố Sóc Trăng",
        "Wards": [
          { "Id": "31498", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "31501", "Name": "Phường 7", "Level": "Phường" },
          { "Id": "31504", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "31507", "Name": "Phường 6", "Level": "Phường" },
          { "Id": "31510", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "31513", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "31516", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "31519", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "31522", "Name": "Phường 9", "Level": "Phường" },
          { "Id": "31525", "Name": "Phường 10", "Level": "Phường" }
        ]
      },
      {
        "Id": "942",
        "Name": "Huyện Châu Thành",
        "Wards": [
          { "Id": "31569", "Name": "Thị trấn Châu Thành", "Level": "Thị trấn" },
          { "Id": "31570", "Name": "Xã Hồ Đắc Kiện", "Level": "Xã" },
          { "Id": "31573", "Name": "Xã Phú Tâm", "Level": "Xã" },
          { "Id": "31576", "Name": "Xã Thuận Hòa", "Level": "Xã" },
          { "Id": "31582", "Name": "Xã Phú Tân", "Level": "Xã" },
          { "Id": "31585", "Name": "Xã Thiện Mỹ", "Level": "Xã" },
          { "Id": "31594", "Name": "Xã An Hiệp", "Level": "Xã" },
          { "Id": "31600", "Name": "Xã An Ninh", "Level": "Xã" }
        ]
      },
      {
        "Id": "943",
        "Name": "Huyện Kế Sách",
        "Wards": [
          { "Id": "31528", "Name": "Thị trấn Kế Sách", "Level": "Thị trấn" },
          {
            "Id": "31531",
            "Name": "Thị trấn An Lạc Thôn",
            "Level": "Thị trấn"
          },
          { "Id": "31534", "Name": "Xã Xuân Hòa", "Level": "Xã" },
          { "Id": "31537", "Name": "Xã Phong Nẫm", "Level": "Xã" },
          { "Id": "31540", "Name": "Xã An Lạc Tây", "Level": "Xã" },
          { "Id": "31543", "Name": "Xã Trinh Phú", "Level": "Xã" },
          { "Id": "31546", "Name": "Xã Ba Trinh", "Level": "Xã" },
          { "Id": "31549", "Name": "Xã Thới An Hội", "Level": "Xã" },
          { "Id": "31552", "Name": "Xã Nhơn Mỹ", "Level": "Xã" },
          { "Id": "31555", "Name": "Xã Kế Thành", "Level": "Xã" },
          { "Id": "31558", "Name": "Xã Kế An", "Level": "Xã" },
          { "Id": "31561", "Name": "Xã Đại Hải", "Level": "Xã" },
          { "Id": "31564", "Name": "Xã An Mỹ", "Level": "Xã" }
        ]
      },
      {
        "Id": "944",
        "Name": "Huyện Mỹ Tú",
        "Wards": [
          {
            "Id": "31567",
            "Name": "Thị trấn Huỳnh Hữu Nghĩa",
            "Level": "Thị trấn"
          },
          { "Id": "31579", "Name": "Xã Long Hưng", "Level": "Xã" },
          { "Id": "31588", "Name": "Xã Hưng Phú", "Level": "Xã" },
          { "Id": "31591", "Name": "Xã Mỹ Hương", "Level": "Xã" },
          { "Id": "31597", "Name": "Xã Mỹ Tú", "Level": "Xã" },
          { "Id": "31603", "Name": "Xã Mỹ Phước", "Level": "Xã" },
          { "Id": "31606", "Name": "Xã Thuận Hưng", "Level": "Xã" },
          { "Id": "31609", "Name": "Xã Mỹ Thuận", "Level": "Xã" },
          { "Id": "31612", "Name": "Xã Phú Mỹ", "Level": "Xã" }
        ]
      },
      {
        "Id": "945",
        "Name": "Huyện Cù Lao Dung",
        "Wards": [
          {
            "Id": "31615",
            "Name": "Thị trấn Cù Lao Dung",
            "Level": "Thị trấn"
          },
          { "Id": "31618", "Name": "Xã An Thạnh 1", "Level": "Xã" },
          { "Id": "31621", "Name": "Xã An Thạnh Tây", "Level": "Xã" },
          { "Id": "31624", "Name": "Xã An Thạnh Đông", "Level": "Xã" },
          { "Id": "31627", "Name": "Xã Đại Ân 1", "Level": "Xã" },
          { "Id": "31630", "Name": "Xã An Thạnh 2", "Level": "Xã" },
          { "Id": "31633", "Name": "Xã An Thạnh 3", "Level": "Xã" },
          { "Id": "31636", "Name": "Xã An Thạnh Nam", "Level": "Xã" }
        ]
      },
      {
        "Id": "946",
        "Name": "Huyện Long Phú",
        "Wards": [
          { "Id": "31639", "Name": "Thị trấn Long Phú", "Level": "Thị trấn" },
          { "Id": "31642", "Name": "Xã Song Phụng", "Level": "Xã" },
          { "Id": "31645", "Name": "Thị trấn Đại Ngãi", "Level": "Thị trấn" },
          { "Id": "31648", "Name": "Xã Hậu Thạnh", "Level": "Xã" },
          { "Id": "31651", "Name": "Xã Long Đức", "Level": "Xã" },
          { "Id": "31654", "Name": "Xã Trường Khánh", "Level": "Xã" },
          { "Id": "31657", "Name": "Xã Phú Hữu", "Level": "Xã" },
          { "Id": "31660", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "31663", "Name": "Xã Châu Khánh", "Level": "Xã" },
          { "Id": "31666", "Name": "Xã Tân Thạnh", "Level": "Xã" },
          { "Id": "31669", "Name": "Xã Long Phú", "Level": "Xã" }
        ]
      },
      {
        "Id": "947",
        "Name": "Huyện Mỹ Xuyên",
        "Wards": [
          { "Id": "31684", "Name": "Thị trấn Mỹ Xuyên", "Level": "Thị trấn" },
          { "Id": "31690", "Name": "Xã Đại Tâm", "Level": "Xã" },
          { "Id": "31693", "Name": "Xã Tham Đôn", "Level": "Xã" },
          { "Id": "31708", "Name": "Xã Thạnh Phú", "Level": "Xã" },
          { "Id": "31711", "Name": "Xã Ngọc Đông", "Level": "Xã" },
          { "Id": "31714", "Name": "Xã Thạnh Quới", "Level": "Xã" },
          { "Id": "31717", "Name": "Xã Hòa Tú 1", "Level": "Xã" },
          { "Id": "31720", "Name": "Xã Gia Hòa 1", "Level": "Xã" },
          { "Id": "31723", "Name": "Xã Ngọc Tố", "Level": "Xã" },
          { "Id": "31726", "Name": "Xã Gia Hòa 2", "Level": "Xã" },
          { "Id": "31729", "Name": "Xã Hòa Tú II", "Level": "Xã" }
        ]
      },
      {
        "Id": "948",
        "Name": "Thị xã Ngã Năm",
        "Wards": [
          { "Id": "31732", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "31735", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "31738", "Name": "Xã Vĩnh Quới", "Level": "Xã" },
          { "Id": "31741", "Name": "Xã Tân Long", "Level": "Xã" },
          { "Id": "31744", "Name": "Xã Long Bình", "Level": "Xã" },
          { "Id": "31747", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "31750", "Name": "Xã Mỹ Bình", "Level": "Xã" },
          { "Id": "31753", "Name": "Xã Mỹ Quới", "Level": "Xã" }
        ]
      },
      {
        "Id": "949",
        "Name": "Huyện Thạnh Trị",
        "Wards": [
          { "Id": "31756", "Name": "Thị trấn Phú Lộc", "Level": "Thị trấn" },
          { "Id": "31757", "Name": "Thị trấn Hưng Lợi", "Level": "Thị trấn" },
          { "Id": "31759", "Name": "Xã Lâm Tân", "Level": "Xã" },
          { "Id": "31762", "Name": "Xã Thạnh Tân", "Level": "Xã" },
          { "Id": "31765", "Name": "Xã Lâm Kiết", "Level": "Xã" },
          { "Id": "31768", "Name": "Xã Tuân Tức", "Level": "Xã" },
          { "Id": "31771", "Name": "Xã Vĩnh Thành", "Level": "Xã" },
          { "Id": "31774", "Name": "Xã Thạnh Trị", "Level": "Xã" },
          { "Id": "31777", "Name": "Xã Vĩnh Lợi", "Level": "Xã" },
          { "Id": "31780", "Name": "Xã Châu Hưng", "Level": "Xã" }
        ]
      },
      {
        "Id": "950",
        "Name": "Thị xã Vĩnh Châu",
        "Wards": [
          { "Id": "31783", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "31786", "Name": "Xã Hòa Đông", "Level": "Xã" },
          { "Id": "31789", "Name": "Phường Khánh Hòa", "Level": "Phường" },
          { "Id": "31792", "Name": "Xã Vĩnh Hiệp", "Level": "Xã" },
          { "Id": "31795", "Name": "Xã Vĩnh Hải", "Level": "Xã" },
          { "Id": "31798", "Name": "Xã Lạc Hòa", "Level": "Xã" },
          { "Id": "31801", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "31804", "Name": "Phường Vĩnh Phước", "Level": "Phường" },
          { "Id": "31807", "Name": "Xã Vĩnh Tân", "Level": "Xã" },
          { "Id": "31810", "Name": "Xã Lai Hòa", "Level": "Xã" }
        ]
      },
      {
        "Id": "951",
        "Name": "Huyện Trần Đề",
        "Wards": [
          { "Id": "31672", "Name": "Xã Đại Ân  2", "Level": "Xã" },
          { "Id": "31673", "Name": "Thị trấn Trần Đề", "Level": "Thị trấn" },
          { "Id": "31675", "Name": "Xã Liêu Tú", "Level": "Xã" },
          { "Id": "31678", "Name": "Xã Lịch Hội Thượng", "Level": "Xã" },
          {
            "Id": "31679",
            "Name": "Thị trấn Lịch Hội Thượng",
            "Level": "Thị trấn"
          },
          { "Id": "31681", "Name": "Xã Trung Bình", "Level": "Xã" },
          { "Id": "31687", "Name": "Xã Tài Văn", "Level": "Xã" },
          { "Id": "31696", "Name": "Xã Viên An", "Level": "Xã" },
          { "Id": "31699", "Name": "Xã Thạnh Thới An", "Level": "Xã" },
          { "Id": "31702", "Name": "Xã Thạnh Thới Thuận", "Level": "Xã" },
          { "Id": "31705", "Name": "Xã Viên Bình", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "95",
    "Name": "Tỉnh Bạc Liêu",
    "Districts": [
      {
        "Id": "954",
        "Name": "Thành phố Bạc Liêu",
        "Wards": [
          { "Id": "31813", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "31816", "Name": "Phường 3", "Level": "Phường" },
          { "Id": "31819", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "31822", "Name": "Phường 7", "Level": "Phường" },
          { "Id": "31825", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "31828", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "31831", "Name": "Phường Nhà Mát", "Level": "Phường" },
          { "Id": "31834", "Name": "Xã Vĩnh Trạch", "Level": "Xã" },
          { "Id": "31837", "Name": "Xã Vĩnh Trạch Đông", "Level": "Xã" },
          { "Id": "31840", "Name": "Xã Hiệp Thành", "Level": "Xã" }
        ]
      },
      {
        "Id": "956",
        "Name": "Huyện Hồng Dân",
        "Wards": [
          { "Id": "31843", "Name": "Thị trấn Ngan Dừa", "Level": "Thị trấn" },
          { "Id": "31846", "Name": "Xã Ninh Quới", "Level": "Xã" },
          { "Id": "31849", "Name": "Xã Ninh Quới A", "Level": "Xã" },
          { "Id": "31852", "Name": "Xã Ninh Hòa", "Level": "Xã" },
          { "Id": "31855", "Name": "Xã Lộc Ninh", "Level": "Xã" },
          { "Id": "31858", "Name": "Xã Vĩnh Lộc", "Level": "Xã" },
          { "Id": "31861", "Name": "Xã Vĩnh Lộc A", "Level": "Xã" },
          { "Id": "31863", "Name": "Xã Ninh Thạnh Lợi A", "Level": "Xã" },
          { "Id": "31864", "Name": "Xã Ninh Thạnh Lợi", "Level": "Xã" }
        ]
      },
      {
        "Id": "957",
        "Name": "Huyện Phước Long",
        "Wards": [
          { "Id": "31867", "Name": "Thị trấn Phước Long", "Level": "Thị trấn" },
          { "Id": "31870", "Name": "Xã Vĩnh Phú Đông", "Level": "Xã" },
          { "Id": "31873", "Name": "Xã Vĩnh Phú Tây", "Level": "Xã" },
          { "Id": "31876", "Name": "Xã Phước Long", "Level": "Xã" },
          { "Id": "31879", "Name": "Xã Hưng Phú", "Level": "Xã" },
          { "Id": "31882", "Name": "Xã Vĩnh Thanh", "Level": "Xã" },
          { "Id": "31885", "Name": "Xã Phong Thạnh Tây A", "Level": "Xã" },
          { "Id": "31888", "Name": "Xã Phong Thạnh Tây B", "Level": "Xã" }
        ]
      },
      {
        "Id": "958",
        "Name": "Huyện Vĩnh Lợi",
        "Wards": [
          { "Id": "31894", "Name": "Xã Vĩnh Hưng", "Level": "Xã" },
          { "Id": "31897", "Name": "Xã Vĩnh Hưng A", "Level": "Xã" },
          { "Id": "31900", "Name": "Thị trấn Châu Hưng", "Level": "Thị trấn" },
          { "Id": "31903", "Name": "Xã Châu Hưng A", "Level": "Xã" },
          { "Id": "31906", "Name": "Xã Hưng Thành", "Level": "Xã" },
          { "Id": "31909", "Name": "Xã Hưng Hội", "Level": "Xã" },
          { "Id": "31912", "Name": "Xã Châu Thới", "Level": "Xã" },
          { "Id": "31921", "Name": "Xã Long Thạnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "959",
        "Name": "Thị xã Giá Rai",
        "Wards": [
          { "Id": "31942", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "31945", "Name": "Phường Hộ Phòng", "Level": "Phường" },
          { "Id": "31948", "Name": "Xã Phong Thạnh Đông", "Level": "Xã" },
          { "Id": "31951", "Name": "Phường Láng Tròn", "Level": "Phường" },
          { "Id": "31954", "Name": "Xã Phong Tân", "Level": "Xã" },
          { "Id": "31957", "Name": "Xã Tân Phong", "Level": "Xã" },
          { "Id": "31960", "Name": "Xã Phong Thạnh", "Level": "Xã" },
          { "Id": "31963", "Name": "Xã Phong Thạnh A", "Level": "Xã" },
          { "Id": "31966", "Name": "Xã Phong Thạnh Tây", "Level": "Xã" },
          { "Id": "31969", "Name": "Xã Tân Thạnh", "Level": "Xã" }
        ]
      },
      {
        "Id": "960",
        "Name": "Huyện Đông Hải",
        "Wards": [
          { "Id": "31972", "Name": "Thị trấn Gành Hào", "Level": "Thị trấn" },
          { "Id": "31975", "Name": "Xã Long Điền Đông", "Level": "Xã" },
          { "Id": "31978", "Name": "Xã Long Điền Đông A", "Level": "Xã" },
          { "Id": "31981", "Name": "Xã Long Điền", "Level": "Xã" },
          { "Id": "31984", "Name": "Xã Long Điền Tây", "Level": "Xã" },
          { "Id": "31985", "Name": "Xã Điền Hải", "Level": "Xã" },
          { "Id": "31987", "Name": "Xã An Trạch", "Level": "Xã" },
          { "Id": "31988", "Name": "Xã An Trạch A", "Level": "Xã" },
          { "Id": "31990", "Name": "Xã An Phúc", "Level": "Xã" },
          { "Id": "31993", "Name": "Xã Định Thành", "Level": "Xã" },
          { "Id": "31996", "Name": "Xã Định Thành A", "Level": "Xã" }
        ]
      },
      {
        "Id": "961",
        "Name": "Huyện Hoà Bình",
        "Wards": [
          { "Id": "31891", "Name": "Thị trấn Hòa Bình", "Level": "Thị trấn" },
          { "Id": "31915", "Name": "Xã Minh Diệu", "Level": "Xã" },
          { "Id": "31918", "Name": "Xã Vĩnh Bình", "Level": "Xã" },
          { "Id": "31924", "Name": "Xã Vĩnh Mỹ B", "Level": "Xã" },
          { "Id": "31927", "Name": "Xã Vĩnh Hậu", "Level": "Xã" },
          { "Id": "31930", "Name": "Xã Vĩnh Hậu A", "Level": "Xã" },
          { "Id": "31933", "Name": "Xã Vĩnh Mỹ A", "Level": "Xã" },
          { "Id": "31936", "Name": "Xã Vĩnh Thịnh", "Level": "Xã" }
        ]
      }
    ]
  },
  {
    "Id": "96",
    "Name": "Tỉnh Cà Mau",
    "Districts": [
      {
        "Id": "964",
        "Name": "Thành phố Cà Mau",
        "Wards": [
          { "Id": "31999", "Name": "Phường 9", "Level": "Phường" },
          { "Id": "32002", "Name": "Phường 4", "Level": "Phường" },
          { "Id": "32005", "Name": "Phường 1", "Level": "Phường" },
          { "Id": "32008", "Name": "Phường 5", "Level": "Phường" },
          { "Id": "32011", "Name": "Phường 2", "Level": "Phường" },
          { "Id": "32014", "Name": "Phường 8", "Level": "Phường" },
          { "Id": "32017", "Name": "Phường 6", "Level": "Phường" },
          { "Id": "32020", "Name": "Phường 7", "Level": "Phường" },
          { "Id": "32022", "Name": "Phường Tân Xuyên", "Level": "Phường" },
          { "Id": "32023", "Name": "Xã An Xuyên", "Level": "Xã" },
          { "Id": "32025", "Name": "Phường Tân Thành", "Level": "Phường" },
          { "Id": "32026", "Name": "Xã Tân Thành", "Level": "Xã" },
          { "Id": "32029", "Name": "Xã Tắc Vân", "Level": "Xã" },
          { "Id": "32032", "Name": "Xã Lý Văn Lâm", "Level": "Xã" },
          { "Id": "32035", "Name": "Xã Định Bình", "Level": "Xã" },
          { "Id": "32038", "Name": "Xã Hòa Thành", "Level": "Xã" },
          { "Id": "32041", "Name": "Xã Hòa Tân", "Level": "Xã" }
        ]
      },
      {
        "Id": "966",
        "Name": "Huyện U Minh",
        "Wards": [
          { "Id": "32044", "Name": "Thị trấn U Minh", "Level": "Thị trấn" },
          { "Id": "32047", "Name": "Xã Khánh Hòa", "Level": "Xã" },
          { "Id": "32048", "Name": "Xã Khánh Thuận", "Level": "Xã" },
          { "Id": "32050", "Name": "Xã Khánh Tiến", "Level": "Xã" },
          { "Id": "32053", "Name": "Xã Nguyễn Phích", "Level": "Xã" },
          { "Id": "32056", "Name": "Xã Khánh Lâm", "Level": "Xã" },
          { "Id": "32059", "Name": "Xã Khánh An", "Level": "Xã" },
          { "Id": "32062", "Name": "Xã Khánh Hội", "Level": "Xã" }
        ]
      },
      {
        "Id": "967",
        "Name": "Huyện Thới Bình",
        "Wards": [
          { "Id": "32065", "Name": "Thị trấn Thới Bình", "Level": "Thị trấn" },
          { "Id": "32068", "Name": "Xã Biển Bạch", "Level": "Xã" },
          { "Id": "32069", "Name": "Xã Tân Bằng", "Level": "Xã" },
          { "Id": "32071", "Name": "Xã Trí Phải", "Level": "Xã" },
          { "Id": "32072", "Name": "Xã Trí Lực", "Level": "Xã" },
          { "Id": "32074", "Name": "Xã Biển Bạch Đông", "Level": "Xã" },
          { "Id": "32077", "Name": "Xã Thới Bình", "Level": "Xã" },
          { "Id": "32080", "Name": "Xã Tân Phú", "Level": "Xã" },
          { "Id": "32083", "Name": "Xã Tân Lộc Bắc", "Level": "Xã" },
          { "Id": "32086", "Name": "Xã Tân Lộc", "Level": "Xã" },
          { "Id": "32089", "Name": "Xã Tân Lộc Đông", "Level": "Xã" },
          { "Id": "32092", "Name": "Xã Hồ Thị Kỷ", "Level": "Xã" }
        ]
      },
      {
        "Id": "968",
        "Name": "Huyện Trần Văn Thời",
        "Wards": [
          {
            "Id": "32095",
            "Name": "Thị trấn Trần Văn Thời",
            "Level": "Thị trấn"
          },
          { "Id": "32098", "Name": "Thị trấn Sông Đốc", "Level": "Thị trấn" },
          { "Id": "32101", "Name": "Xã Khánh Bình Tây Bắc", "Level": "Xã" },
          { "Id": "32104", "Name": "Xã Khánh Bình Tây", "Level": "Xã" },
          { "Id": "32107", "Name": "Xã Trần Hợi", "Level": "Xã" },
          { "Id": "32108", "Name": "Xã Khánh Lộc", "Level": "Xã" },
          { "Id": "32110", "Name": "Xã Khánh Bình", "Level": "Xã" },
          { "Id": "32113", "Name": "Xã Khánh Hưng", "Level": "Xã" },
          { "Id": "32116", "Name": "Xã Khánh Bình Đông", "Level": "Xã" },
          { "Id": "32119", "Name": "Xã Khánh Hải", "Level": "Xã" },
          { "Id": "32122", "Name": "Xã Lợi An", "Level": "Xã" },
          { "Id": "32124", "Name": "Xã Phong Điền", "Level": "Xã" },
          { "Id": "32125", "Name": "Xã Phong Lạc", "Level": "Xã" }
        ]
      },
      {
        "Id": "969",
        "Name": "Huyện Cái Nước",
        "Wards": [
          { "Id": "32128", "Name": "Thị trấn Cái Nước", "Level": "Thị trấn" },
          { "Id": "32130", "Name": "Xã Thạnh Phú", "Level": "Xã" },
          { "Id": "32131", "Name": "Xã Lương Thế Trân", "Level": "Xã" },
          { "Id": "32134", "Name": "Xã Phú Hưng", "Level": "Xã" },
          { "Id": "32137", "Name": "Xã Tân Hưng", "Level": "Xã" },
          { "Id": "32140", "Name": "Xã Hưng Mỹ", "Level": "Xã" },
          { "Id": "32141", "Name": "Xã Hoà Mỹ", "Level": "Xã" },
          { "Id": "32142", "Name": "Xã Đông Hưng", "Level": "Xã" },
          { "Id": "32143", "Name": "Xã Đông Thới", "Level": "Xã" },
          { "Id": "32146", "Name": "Xã Tân Hưng Đông", "Level": "Xã" },
          { "Id": "32149", "Name": "Xã Trần Thới", "Level": "Xã" }
        ]
      },
      {
        "Id": "970",
        "Name": "Huyện Đầm Dơi",
        "Wards": [
          { "Id": "32152", "Name": "Thị trấn Đầm Dơi", "Level": "Thị trấn" },
          { "Id": "32155", "Name": "Xã Tạ An Khương", "Level": "Xã" },
          { "Id": "32158", "Name": "Xã Tạ An Khương  Đông", "Level": "Xã" },
          { "Id": "32161", "Name": "Xã Trần Phán", "Level": "Xã" },
          { "Id": "32162", "Name": "Xã Tân Trung", "Level": "Xã" },
          { "Id": "32164", "Name": "Xã Tân Đức", "Level": "Xã" },
          { "Id": "32167", "Name": "Xã Tân Thuận", "Level": "Xã" },
          { "Id": "32170", "Name": "Xã Tạ An Khương  Nam", "Level": "Xã" },
          { "Id": "32173", "Name": "Xã Tân Duyệt", "Level": "Xã" },
          { "Id": "32174", "Name": "Xã Tân Dân", "Level": "Xã" },
          { "Id": "32176", "Name": "Xã Tân Tiến", "Level": "Xã" },
          { "Id": "32179", "Name": "Xã Quách Phẩm Bắc", "Level": "Xã" },
          { "Id": "32182", "Name": "Xã Quách Phẩm", "Level": "Xã" },
          { "Id": "32185", "Name": "Xã Thanh Tùng", "Level": "Xã" },
          { "Id": "32186", "Name": "Xã Ngọc Chánh", "Level": "Xã" },
          { "Id": "32188", "Name": "Xã Nguyễn Huân", "Level": "Xã" }
        ]
      },
      {
        "Id": "971",
        "Name": "Huyện Năm Căn",
        "Wards": [
          { "Id": "32191", "Name": "Thị Trấn Năm Căn", "Level": "Thị trấn" },
          { "Id": "32194", "Name": "Xã Hàm Rồng", "Level": "Xã" },
          { "Id": "32197", "Name": "Xã Hiệp Tùng", "Level": "Xã" },
          { "Id": "32200", "Name": "Xã Đất Mới", "Level": "Xã" },
          { "Id": "32201", "Name": "Xã Lâm Hải", "Level": "Xã" },
          { "Id": "32203", "Name": "Xã Hàng Vịnh", "Level": "Xã" },
          { "Id": "32206", "Name": "Xã Tam Giang", "Level": "Xã" },
          { "Id": "32209", "Name": "Xã Tam Giang Đông", "Level": "Xã" }
        ]
      },
      {
        "Id": "972",
        "Name": "Huyện Phú Tân",
        "Wards": [
          {
            "Id": "32212",
            "Name": "Thị trấn Cái Đôi Vàm",
            "Level": "Thị trấn"
          },
          { "Id": "32214", "Name": "Xã Phú Thuận", "Level": "Xã" },
          { "Id": "32215", "Name": "Xã Phú Mỹ", "Level": "Xã" },
          { "Id": "32218", "Name": "Xã Phú Tân", "Level": "Xã" },
          { "Id": "32221", "Name": "Xã Tân Hải", "Level": "Xã" },
          { "Id": "32224", "Name": "Xã Việt Thắng", "Level": "Xã" },
          { "Id": "32227", "Name": "Xã Tân Hưng Tây", "Level": "Xã" },
          { "Id": "32228", "Name": "Xã Rạch Chèo", "Level": "Xã" },
          { "Id": "32230", "Name": "Xã Nguyễn Việt Khái", "Level": "Xã" }
        ]
      },
      {
        "Id": "973",
        "Name": "Huyện Ngọc Hiển",
        "Wards": [
          { "Id": "32233", "Name": "Xã Tam Giang Tây", "Level": "Xã" },
          { "Id": "32236", "Name": "Xã Tân Ân Tây", "Level": "Xã" },
          { "Id": "32239", "Name": "Xã Viên An Đông", "Level": "Xã" },
          { "Id": "32242", "Name": "Xã Viên An", "Level": "Xã" },
          { "Id": "32244", "Name": "Thị trấn Rạch Gốc", "Level": "Thị trấn" },
          { "Id": "32245", "Name": "Xã Tân Ân", "Level": "Xã" },
          { "Id": "32248", "Name": "Xã Đất Mũi", "Level": "Xã" }
        ]
      }
    ]
  }
]
export default locationsData;