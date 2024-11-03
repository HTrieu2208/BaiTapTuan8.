$(document).ready(function() {
    var i = 2;
    $("#btnDK").click(function() {
        $("#myModal").modal('show'); // Hiển thị modal
    });

    $("#txtMa").blur(kiemTraMa);
    $("#txtHT").blur(kiemTraHT);
    $("#txtDC").blur(kiemTraDC);

    $("#slGia").change(function() {
        $("#slGia option:selected").each(function() {
            $("#txtDV").val($(this).val());
        });
    });

    $(".chkDoDung").click(function() {
        var tienDD = 0;
        $(".chkDoDung:checked").each(function() {
            tienDD += parseFloat($(this).val());
        });
        $("#txtDD").val(tienDD);

        var tong = parseFloat($("#txtDD").val()) + parseFloat($("#txtDV").val());
        $("#txtTong").val(tong);
    });

    $("#btnSave").click(function() {
        if (kiemTraMa() && kiemTraHT() && kiemTraDC()) { // Kiểm tra tất cả các trường
            var ma = $("#txtMa").val();
            var ht = $("#txtHT").val();
            var dc = $("#txtDC").val();
            var dv = $("#txtDV").val();
            var dd = $("#txtDD").val();
            var tong = $("#txtTong").val();
            var them = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + ht + "</td><td>" + dc + "</td><td>" + dv + "</td><td>" + dd + "</td><td>" + tong + "</td></tr>";
            $("#tbDanhSach tbody").append(them); // Thêm hàng mới vào tbody
            $("#myModal").modal("hide");
        }
    });
});

function kiemTraMa() {
    var mauKT = /^[0-9]{8}$/; // Thay đổi từ {9} thành {8}
    if ($("#txtMa").val() == "") {
        $("#tbMa").html("Bắt buộc nhập!").addClass("text-danger");
        return false;
    } else if (!mauKT.test($("#txtMa").val())) {
        $("#tbMa").html("Nhập sai").addClass("text-danger");
        return false;
    }
    $("#tbMa").html("*").removeClass("text-danger");
    return true;
}

function kiemTraHT() {
    var hoTen = $("#txtHT").val().trim();
    var words = hoTen.split(" ");

    if (hoTen === "") {
        $("#tbTen").html("Bắt buộc nhập").addClass("text-danger");
        return false;
    }

    for (var i = 0; i < words.length; i++) {
        if (words[i].length === 0 || words[i][0] !== words[i][0].toUpperCase()) {
            $("#tbTen").html("Chữ cái đầu của mỗi từ phải viết hoa !!").addClass("text-danger");
            return false;
        }
    }

    $("#tbTen").html("*").removeClass("text-danger");
    return true;
}

function kiemTraDC() {
    var mauKT = /^[a-z0-9._]{3,15}@gmail.com$/;
    if ($("#txtDC").val() == "") {
        $("#tbDC").html("Bắt buộc nhập").addClass("text-danger");
        return false;
    } else if (!mauKT.test($("#txtDC").val())) {
        $("#tbDC").html("Nhập sai").addClass("text-danger");
        return false;
    }
    $("#tbDC").html("*").removeClass("text-danger");
    return true;
};