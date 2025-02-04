export default {
  "vi": {
    "activerecord": {
      "attributes": {
        "user": {
          "email": "Email",
          "name": "Tên",
          "password": "Mật khẩu",
          "password_confirmation": "Xác nhận mật khẩu"
        }
      },
      "errors": {
        "messages": {
          "blank": "Vui lòng nhập đầy đủ thông tin",
          "invalid": "không hợp lệ"
        }
      },
      "models": {
        "user": "Người dùng"
      }
    },
    "alert": {
      "mailer": {
        "check_email": "Vui lòng kiểm tra email của bạn để kích hoạt tài khoản.",
        "invalid_activation": "Link kích hoạt không hợp lệ",
        "success_activation": "Tài khoản đã được kích hoạt!"
      },
      "upload": {
        "image_size": "Kích thước tối đa của file là 5MB. Vui lòng chọn file có kích thước nhỏ hơn!"
      },
      "users": {
        "account_not_activated": "Tài khoản của bản chưa được kích hoạt. Vui lòng kiểm tra email để kích hoạt tài khoản",
        "can_not_edit": "Bạn không thể chỉnh sửa tài khoản này",
        "destroy": {
          "confirm_delete": "Bạn có chắc chắn?",
          "fail_message": "Xóa thất bại!",
          "success_message": "Người dùng đã bị xóa!"
        },
        "not_found": "Người dùng không tồn tại",
        "password_reset": {
          "email_not_found": "Không tìm thấy email",
          "email_sent": "Email đã được gửi với hướng dẫn khôi phục mật khẩu",
          "expired_link": "Link khôi phục mật khẩu đã hết hạn",
          "password_reset": "Mật khẩu đã được khôi phục",
          "user_not_activated": "Tài khoản chưa được kích hoạt",
          "user_not_found": "Không tìm thấy người dùng"
        },
        "please_log_in": "Vui lòng đăng nhập",
        "update": {
          "success_message": "Hồ sơ đã được cập nhật"
        }
      }
    },
    "datetime": {
      "distance_in_words": {
        "about_x_hours": {
          "one": "khoảng 1 giờ",
          "other": "khoảng %{count} giờ"
        },
        "about_x_months": {
          "one": "khoảng 1 tháng",
          "other": "khoảng %{count} tháng"
        },
        "about_x_years": {
          "one": "khoảng 1 năm",
          "other": "khoảng %{count} năm"
        },
        "almost_x_years": {
          "one": "gần 1 năm",
          "other": "gần %{count} năm"
        },
        "less_than_x_minutes": {
          "one": "gần 1 phút",
          "other": "gần %{count} phút"
        },
        "less_than_x_seconds": {
          "one": "vài giây",
          "other": "vài giây"
        },
        "over_x_years": {
          "one": "hơn 1 năm",
          "other": "hơn %{count} năm"
        },
        "x_days": {
          "one": "1 ngày",
          "other": "%{count} ngày"
        },
        "x_minutes": {
          "one": "1 phút",
          "other": "%{count} phút"
        },
        "x_months": {
          "one": "1 tháng",
          "other": "%{count} tháng"
        },
        "x_seconds": {
          "one": "1 giây",
          "other": "%{count} giây"
        }
      }
    },
    "errors": {
      "messages": {
        "aspect_ratio_is_not": "phải có tỉ lệ ảnh %{aspect_ratio}",
        "aspect_ratio_not_landscape": "phải là ảnh ngang",
        "aspect_ratio_not_portrait": "phải là ảnh đứng",
        "aspect_ratio_not_square": "phải là ảnh hình vuông",
        "aspect_ratio_unknown": "tỉ lệ ảnh không xác định",
        "content_type_invalid": "tệp không hợp lệ",
        "dimension_height_equal_to": "chiều cao phải bằng %{length} pixel",
        "dimension_height_greater_than_or_equal_to": "chiều cao phải lớn hơn hoặc bằng %{length} pixel",
        "dimension_height_inclusion": "chiều cao không nằm trong %{min} và %{max} pixel",
        "dimension_height_less_than_or_equal_to": "chiều cao phải nhỏ hơn hoặc bằng %{length} pixel",
        "dimension_max_inclusion": "phải nhỏ hơn hoặc bằng %{width} x %{height} pixel",
        "dimension_min_inclusion": "phải lớn hơn hoặc bằng %{width} x %{height} pixel",
        "dimension_width_equal_to": "chiều rộng phải bằng %{length} pixel",
        "dimension_width_greater_than_or_equal_to": "chiều rộng phải lớn hơn hoặc bằng %{length} pixel",
        "dimension_width_inclusion": "chiều rộng không nằm trong %{min} và %{max} pixel",
        "dimension_width_less_than_or_equal_to": "chiều rộng phải nhỏ hơn hoặc bằng %{length} pixel",
        "file_size_out_of_range": "kích thước %{file_size} vượt giới hạn",
        "image_metadata_missing": "không phải là ảnh",
        "limit_out_of_range": "tổng số tệp vượt giới hạn"
      }
    },
    "faker": {
      "address": {
        "city": [
          "#{city_root}"
        ],
        "city_root": [
          "Bắc Giang",
          "Bắc Kạn",
          "Bắc Ninh",
          "Cao Bằng",
          "Điện Biên",
          "Hà Giang",
          "Hà Nam",
          "Hà Tây",
          "Hải Dương",
          "TP Hải Phòng",
          "Hòa Bình",
          "Hưng Yên",
          "Lai Châu",
          "Lào Cai",
          "Lạng Sơn",
          "Nam Định",
          "Ninh Bình",
          "Phú Thọ",
          "Quảng Ninh",
          "Sơn La",
          "Thái Bình",
          "Thái Nguyên",
          "Tuyên Quang",
          "Vĩnh Phúc",
          "Yên Bái",
          "TP Đà Nẵng",
          "Bình Định",
          "Đắk Lắk",
          "Đắk Nông",
          "Gia Lai",
          "Hà Tĩnh",
          "Khánh Hòa",
          "Kon Tum",
          "Nghệ An",
          "Phú Yên",
          "Quảng Bình",
          "Quảng Nam",
          "Quảng Ngãi",
          "Quảng Trị",
          "Thanh Hóa",
          "Thừa Thiên Huế",
          "TP TP. Hồ Chí Minh",
          "An Giang",
          "Bà Rịa Vũng Tàu",
          "Bạc Liêu",
          "Bến Tre",
          "Bình Dương",
          "Bình Phước",
          "Bình Thuận",
          "Cà Mau",
          "TP Cần Thơ",
          "Đồng Nai",
          "Đồng Tháp",
          "Hậu Giang",
          "Kiên Giang",
          "Lâm Đồng",
          "Long An",
          "Ninh Thuận",
          "Sóc Trăng",
          "Tây Ninh",
          "Tiền Giang",
          "Trà Vinh",
          "Vĩnh Long"
        ],
        "county": [
          "Avon",
          "Bedfordshire",
          "Berkshire",
          "Borders",
          "Buckinghamshire",
          "Cambridgeshire",
          "Central",
          "Cheshire",
          "Cleveland",
          "Clwyd",
          "Cornwall",
          "County Antrim",
          "County Armagh",
          "County Down",
          "County Fermanagh",
          "County Londonderry",
          "County Tyrone",
          "Cumbria",
          "Derbyshire",
          "Devon",
          "Dorset",
          "Dumfries and Galloway",
          "Durham",
          "Dyfed",
          "East Sussex",
          "Essex",
          "Fife",
          "Gloucestershire",
          "Grampian",
          "Greater Manchester",
          "Gwent",
          "Gwynedd County",
          "Hampshire",
          "Herefordshire",
          "Hertfordshire",
          "Highlands and Islands",
          "Humberside",
          "Isle of Wight",
          "Kent",
          "Lancashire",
          "Leicestershire",
          "Lincolnshire",
          "Lothian",
          "Merseyside",
          "Mid Glamorgan",
          "Norfolk",
          "North Yorkshire",
          "Northamptonshire",
          "Northumberland",
          "Nottinghamshire",
          "Oxfordshire",
          "Powys",
          "Rutland",
          "Shropshire",
          "Somerset",
          "South Glamorgan",
          "South Yorkshire",
          "Staffordshire",
          "Strathclyde",
          "Suffolk",
          "Surrey",
          "Tayside",
          "Tyne and Wear",
          "Việt Nam",
          "Warwickshire",
          "West Glamorgan",
          "West Midlands",
          "West Sussex",
          "West Yorkshire",
          "Wiltshire",
          "Worcestershire"
        ],
        "default_country": [
          "Việt Nam"
        ],
        "postcode": "/[A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}/"
      },
      "cell_phone": {
        "formats": [
          "012# ### ####",
          "0162 ### ####",
          "0163 ### ####",
          "0164 ### ####",
          "0165 ### ####",
          "0166 ### ####",
          "0167 ### ####",
          "0168 ### ####",
          "0169 ### ####",
          "0186 ### ####",
          "0188 ### ####",
          "0199 ### ####",
          "0866 ### ###",
          "0868 ### ###",
          "0869 ### ###",
          "088# ### ###",
          "09## ### ###"
        ]
      },
      "company": {
        "name": [
          "#{prefix} #{Name.last_name}"
        ],
        "prefix": [
          "Công ty",
          "Cty TNHH",
          "Cty",
          "Cửa hàng",
          "Trung tâm",
          "Chi nhánh"
        ]
      },
      "internet": {
        "domain_suffix": [
          "com",
          "net",
          "info",
          "vn",
          "com.vn"
        ]
      },
      "lorem": {
        "words": [
          "đã",
          "đang",
          "ừ",
          "ờ",
          "á",
          "không",
          "biết",
          "gì",
          "hết",
          "đâu",
          "nha",
          "thế",
          "thì",
          "là",
          "đánh",
          "đá",
          "đập",
          "phá",
          "viết",
          "vẽ",
          "tô",
          "thuê",
          "mướn",
          "mượn",
          "mua",
          "một",
          "hai",
          "ba",
          "bốn",
          "năm",
          "sáu",
          "bảy",
          "tám",
          "chín",
          "mười",
          "thôi",
          "việc",
          "nghỉ",
          "làm",
          "nhà",
          "cửa",
          "xe",
          "đạp",
          "ác",
          "độc",
          "khoảng",
          "khoan",
          "thuyền",
          "tàu",
          "bè",
          "lầu",
          "xanh",
          "đỏ",
          "tím",
          "vàng",
          "kim",
          "chỉ",
          "khâu",
          "may",
          "vá",
          "em",
          "anh",
          "yêu",
          "thương",
          "thích",
          "con",
          "cái",
          "bàn",
          "ghế",
          "tủ",
          "quần",
          "áo",
          "nón",
          "dép",
          "giày",
          "lỗi",
          "được",
          "ghét",
          "giết",
          "chết",
          "hết",
          "tôi",
          "bạn",
          "tui",
          "trời",
          "trăng",
          "mây",
          "gió",
          "máy",
          "hàng",
          "hóa",
          "leo",
          "núi",
          "bơi",
          "biển",
          "chìm",
          "xuồng",
          "nước",
          "ngọt",
          "ruộng",
          "đồng",
          "quê",
          "hương"
        ]
      },
      "name": {
        "first_name": [
          "Phạm",
          "Nguyễn",
          "Trần",
          "Lê",
          "Lý",
          "Hoàng",
          "Phan",
          "Vũ",
          "Tăng",
          "Đặng",
          "Bùi",
          "Đỗ",
          "Hồ",
          "Ngô",
          "Dương",
          "Đào",
          "Đoàn",
          "Vương",
          "Trịnh",
          "Đinh",
          "Lâm",
          "Phùng",
          "Mai",
          "Tô",
          "Trương",
          "Hà"
        ],
        "last_name": [
          "Nam",
          "Trung",
          "Thanh",
          "Thị",
          "Văn",
          "Dương",
          "Tăng",
          "Quốc",
          "Như",
          "Phạm",
          "Nguyễn",
          "Trần",
          "Lê",
          "Lý",
          "Hoàng",
          "Phan",
          "Vũ",
          "Tăng",
          "Đặng",
          "Bùi",
          "Đỗ",
          "Hồ",
          "Ngô",
          "Dương",
          "Đào",
          "Đoàn",
          "Vương",
          "Trịnh",
          "Đinh",
          "Lâm",
          "Phùng",
          "Mai",
          "Tô",
          "Trương",
          "Hà",
          "Vinh",
          "Nhung",
          "Hòa",
          "Tiến",
          "Tâm",
          "Bửu",
          "Loan",
          "Hiền",
          "Hải",
          "Vân",
          "Kha",
          "Minh",
          "Nhân",
          "Triệu",
          "Tuân",
          "Hữu",
          "Đức",
          "Phú",
          "Khoa",
          "Thắng",
          "Sơn",
          "Dung",
          "Tú",
          "Trinh",
          "Thảo",
          "Sa",
          "Kim",
          "Long",
          "Thi",
          "Cường",
          "Ngọc",
          "Sinh",
          "Khang",
          "Phong",
          "Thắm",
          "Thu",
          "Thủy",
          "Nhàn"
        ],
        "name": [
          "#{first_name} #{last_name}",
          "#{first_name} #{last_name} #{last_name}",
          "#{first_name} #{last_name} #{last_name} #{last_name}"
        ],
        "name_with_middle": [
          "#{first_name} #{last_name} #{last_name}"
        ]
      },
      "phone_number": {
        "formats": [
          "01#### #####",
          "01### ######",
          "01#1 ### ####",
          "011# ### ####",
          "02# #### ####",
          "03## ### ####",
          "055 #### ####",
          "056 #### ####",
          "0800 ### ####",
          "08## ### ####",
          "09## ### ####",
          "016977 ####",
          "01### #####",
          "0500 ######",
          "0800 ######"
        ]
      }
    },
    "footer": {
      "credits": {
        "author": "Michael Hartl",
        "railsTutorial": "Ruby on Rails Tutorial",
        "text": "Hướng dẫn %{railsTutorial} bởi %{author}."
      },
      "links": {
        "about": "Giới thiệu",
        "contact": "Liên hệ",
        "news": "Tin tức"
      }
    },
    "navigation": {
      "account": "Tài khoản",
      "english": "Tiếng Anh",
      "help": "Trợ giúp",
      "home": "Trang chủ",
      "log_out": "Đăng xuất",
      "login": "Đăng nhập",
      "profile": "Hồ sơ",
      "settings": "Cài đặt",
      "users": "Người dùng"
    },
    "title": {
      "about": "Giới thiệu",
      "app": "Sample App",
      "contact": "Liên hệ",
      "default": "Hướng dẫn Ruby on Rails Sample App",
      "help": "Trợ giúp",
      "home": "Trang chủ",
      "signup": "Đăng ký"
    },
    "views": {
      "about": {
        "description": "Hướng dẫn %{railsTutorial}, một phần của gia đình %{learnEnough}, là một %{bookLink} và %{screencastLink} để dạy phát triển web với %{rubyOnRails}. Đây là Sample App cho hướng dẫn này.",
        "links": {
          "book": "sách",
          "learnEnough": "Learn Enough",
          "railsTutorial": "Hướng dẫn Ruby on Rails",
          "rubyOnRails": "Ruby on Rails",
          "screencast": "chuỗi video hướng dẫn"
        },
        "title": "Giới thiệu"
      },
      "contact": {
        "description": "Liên hệ Hướng dẫn Ruby on Rails về Sample App tại %{contactPage}.",
        "links": {
          "contactPage": "trang liên hệ"
        },
        "title": "Liên hệ"
      },
      "edit": {
        "change_avatar": "Thay đổi ảnh đại diện",
        "save_changes": "Lưu thay đổi",
        "subtitle": "Cập nhật hồ sơ của bạn",
        "title": "Chỉnh sửa người dùng"
      },
      "flash": {
        "please_log_in": "Vui lòng đăng nhập"
      },
      "forgot_password": {
        "submit": "Gửi",
        "title": "Quên mật khẩu"
      },
      "help": {
        "description": "Nhận trợ giúp về Hướng dẫn Ruby on Rails tại %{railsHelpPage}. Để nhận trợ giúp về Sample App này, xem %{railsTutorialBook}.",
        "links": {
          "railsHelpPage": "Trang trợ giúp Rails Tutorial",
          "railsTutorialBook": "Hướng dẫn Ruby on Rails sách"
        },
        "title": "Trợ giúp"
      },
      "home": {
        "homePageDescription": "Đây là trang chủ của Sample App %{railsTutorial}.",
        "links": {
          "railsTutorial": "Hướng dẫn Ruby on Rails",
          "rubyOnRails": "Ruby on Rails",
          "signUp": "Đăng ký ngay!"
        },
        "title": "Trang chủ",
        "userMicroposts": "Bài viết của người dùng",
        "view_my_profile": "Xem hồ sơ của tôi",
        "welcome_message": "Chào mừng đến với Sample App"
      },
      "index": {
        "delete": "Xóa",
        "subtitle": "Danh sách tất cả người dùng",
        "title": "Tất cả người dùng"
      },
      "login": {
        "error_message": "Tài khoản hoặc mật khẩu không chính xác",
        "forgot_password": "Quên mật khẩu?",
        "login": "Đăng nhập",
        "new_user": "Bạn chưa có tài khoản?",
        "password": "Mật khẩu",
        "remember_me": "Ghi nhớ tôi trên thiết bị này",
        "sign_up": "Tạo người dùng mới!",
        "success_message": "Đăng nhập thành công!",
        "title": "Đăng nhập"
      },
      "microposts": {
        "confirm_delete": "Bạn có chắc chắn?",
        "delete": "Xóa",
        "fail_delete_message": "Xóa thất bại",
        "form_placeholder": "Viết bài mới...",
        "image_format": "Vui lòng tải lên một tập tin ảnh",
        "image_size": "Kích thước ảnh không được vượt quá 5MB",
        "invalid": "Bài viết không hợp lệ",
        "post": "Đăng bài",
        "posted_ago": "Đã đăng %{time} trước",
        "success_create_message": "Bài viết đã được tạo",
        "success_delete_message": "Bài viết đã được xóa"
      },
      "password_reset": {
        "password_confirmation": "Xác nhận mật khẩu",
        "submit": "Cập nhật mật khẩu",
        "title": "Khôi phục mật khẩu"
      },
      "signup": {
        "create_account": "Tạo tài khoản của tôi",
        "success_message": "Chào mừng đến với Sample App!",
        "title": "Đăng ký"
      },
      "user_mailer": {
        "account_activation": {
          "activate": "Kích hoạt tài khoản",
          "body": "Chào mừng bạn đến với Sample App! Hãy nhấn vào link bên dưới để kích hoạt tài khoản của bạn:",
          "greeting": "Xin chào %{username},",
          "subject": "Kích hoạt tài khoản"
        },
        "password_reset": {
          "expire": "Link này sẽ hết hạn trong 2h",
          "not_request": "Nếu bạn không yêu cầu đổi mật khẩu, hãy từ chối mail này và mật khẩu của bạn vẫn sẽ được giữ nguyên",
          "reset": "Khôi phục mật khẩu",
          "subject": "Khôi phục mật khẩu",
          "text": "Để khôi phục mật khẩu, hãy nhấn vào link bên dưới:"
        }
      }
    }
  }
}
