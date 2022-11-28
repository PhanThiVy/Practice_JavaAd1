if (typeof(Storage) !== "undefined") {
    // Lưu trữ
    localStorage.setItem("website", "html/InsertPassenger.html");
    // Lấy lại thông tin rồi hiển thị
    document.getElementById("result").innerHTML = localStorage.getItem("id");
    } else {
    document.getElementById("result").innerHTML = "Xin lỗi, trình duyệt web của bạn không hỗ trợ storage..."; 
    } 
    function getParameter(p) {
        var url = window.location.search.substring(1);
        var varUrl = url.split('&');
        for (var i = 0; i < varUrl.length; i++) {
           var parameter = varUrl[i].split('=');
           if (parameter[0] == p) {
              return parameter[1];
           }
        }
     }