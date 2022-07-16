var Products = [{
    ten: '2',
    gia: '2',
    giam: '11',
    ma: '3'
}];
//in sản phấm mới ra màn hình
function show() {
    var html = '';
    var i;
    for (i = 0; i < Products.length; i++) {
        html = 'Thêm sản phẩm thành công';
        if (Products[i].ten.value == "") alert('Vui lòng nhập tên sản phẩm');
    }

    alert(html)
    onProductDelete1(i);
}

var temp = -1;
//nhấp vào tạo sản phẩm
function onClickCreateProduct() {
    var tenElement = document.getElementById('tensp').value;
    var giaElement = document.getElementById('giasp').value;
    var maElement = document.getElementById('masp').value;
    var giamElement = document.getElementById('giamgiasp').value;

    var product = {
        ten: tenElement,
        gia: giaElement,
        ma: maElement,
        giam: giamElement
    }

    if (temp == -1) {
        Products.push(product)
        show();
    } else {
        Products[temp] = product;
        temp = -1;
        document.getElementById('addProduct123').innerHTML = "thêm";
        show();
    }
}
//nhấp vào để xóa
function onProductDelete(index) {
    if (confirm("Bạn muốn xóa sản phẩm này?"))
        Products.splice(index, 1);
    show();
}

function onProductDelete1(index) {
    Products.splice(index, 1);

}
onProductDelete1(0);
//nhấp vào để sửa
function onProductEdit(index) {
    temp = index;
    var product = Products[index];
    document.getElementById('tensp').value = product.ten;
    document.getElementById('giasp').value = product.gia;
    document.getElementById('masp').value = product.ma;
    document.getElementById('giamgiasp').value = product.giam;
    document.getElementById('addProduct123').innerHTML = "Save";
}

function ImgFile() {
    var fileSelected = document.getElementById('onload').files;
    if (fileSelected.length > 0) {
        var fileToLoad = fileSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileReaderEvent) {
            var srcData = fileReaderEvent.target.result;
            var newImg = document.createElement('img');
            newImg.src = srcData;
            document.getElementById('displayImg').innerHTML = newImg.outerHTML;
        }
        fileReader.readAsDataURL(fileToLoad);
        var child = document.getElementById('temp');
        child.parentNode.removeChild(child);
    }

}
//HIỆN MODAL KẾ
$('div[id^="myModal"]').each(function() {

    var currentModal = $(this);

    //click next
    currentModal.find('.btn-next').click(function() {
        currentModal.modal('hide');
        currentModal.closest('div[id^="myModal"]').nextAll('div[id^="myModal"]').first().modal('show');
    });

});

function edit() {
    document.getElementById('tensp').value = 'hihihi';
    document.getElementById('giasp').value = '6199000đ';
    document.getElementById('masp').value = '001';
}

function block(ten, sl, un) {

    var x = confirm("Bạn muốn khóa tài khoản này !!!");
if (x == true) {
        document.getElementById(ten).style.textDecoration = "line-through";
        document.getElementById(sl).style.display = "none";
        document.getElementById(un).style.display = "block";
    }
}

function unblock(ten, sl, un) {

    var z = confirm("Bạn muốn hủy khóa tài khoản này !!!");
    if (z == true) {
        document.getElementById(ten).style.textDecoration = "none";
        document.getElementById(sl).style.display = "block";
        document.getElementById(un).style.display = "none";
    }

}



var b = 0;

function giam() {
    var a = document.getElementById("soluong").value;
    if (a >= 0) {
        a--
        if (a < 0) document.getElementById("soluong").value = "0";
        else
            document.getElementById("soluong").value = a;
    }
}

function tang() {
    var a = document.getElementById("soluong").value;
    if (a >= 0) {
        a++
        document.getElementById("soluong").value = a;
    }
}

function giamSL(tam) {
    var a = document.getElementById(tam).value;
    if (a >= 0) {
        a--
        if (a < 0) document.getElementById(tam).value = "0";
        else
            document.getElementById(tam).value = a;
    }
}

function tangSL(tam) {
    var a = document.getElementById(tam).value;
    if (a >= 0) {
        a++
        document.getElementById(tam).value = a;
    }
}