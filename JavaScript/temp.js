var Products=[
    {
        ten: '2',
        gia: '2',
        giam:'11',
        ma:'3'
       }
];
//in sản phấm mới ra màn hình
function show(){
    var html='';
    var i;
    for( i=0;i<Products.length;i++){
        html='thêm sản phẩm thành công';
        if(Products[i].ten.value=="") alert('vui lòng nhập tên sản phẩm');
    }
   
    alert(html)
    onProductDelete1(i);
}

var temp=-1;
//nhấp vào tạo sản phẩm
function onClickCreateProduct(){
    var tenElement=document.getElementById('tensp').value;
    var giaElement=document.getElementById('giasp').value;
    var maElement=document.getElementById('masp').value;
    var giamElement=document.getElementById('giamgiasp').value;

    var product={
        ten:tenElement,
        gia:giaElement,
        ma:maElement,
        giam:giamElement
    }
    
    if(temp==-1){
        Products.push(product)
        show();
    }
    else{
        Products[temp]=product;
        temp=-1;
        document.getElementById('addProduct123').innerHTML="thêm";
        show();
    } 
}
//nhấp vào để xóa
function onProductDelete(index){
    if(confirm("Bạn muốn xóa sản phẩm này?"))
    Products.splice(index,1);
    show();
}
function onProductDelete1(index){
    Products.splice(index,1);
    
}
onProductDelete1(0);
//nhấp vào để sửa
function onProductEdit(index){
    temp=index;
    var product=Products[index];
    document.getElementById('tensp').value=product.ten;
    document.getElementById('giasp').value=product.gia;
    document.getElementById('masp').value=product.ma;
    document.getElementById('giamgiasp').value=product.giam;
    document.getElementById('addProduct123').innerHTML="Save";  
}

function ImgFile(){
   var fileSelected=document.getElementById('onload').files;
        if(fileSelected.length>0){
            var fileToLoad= fileSelected[0];
            var fileReader=new FileReader();
            fileReader.onload=function(fileReaderEvent){
                var srcData=fileReaderEvent.target.result;
                var newImg=document.createElement('img');
                newImg.src=srcData;
                document.getElementById('displayImg').innerHTML=newImg.outerHTML;
            }
            fileReader.readAsDataURL(fileToLoad);
            var child=document.getElementById('temp');
            child.parentNode.removeChild(child);
        }
    
}
//HIỆN MODAL KẾ
$('div[id^="myModal"]').each(function(){
  
    var currentModal = $(this);
    
    //click next
    currentModal.find('.btn-next').click(function(){
      currentModal.modal('hide');
      currentModal.closest('div[id^="myModal"]').nextAll('div[id^="myModal"]').first().modal('show'); 
    });
  
  });
function edit(){
    document.getElementById('tensp').value='Casio MTP-1374L-1AVDF';
    document.getElementById('giasp').value='6199000đ';
    document.getElementById('masp').value='001';
}
function block(ten,sl,un)
{
   
        var x=confirm("Bạn muốn block tài khoản này !!!");
        if(x==true)
    {document.getElementById(ten).style.textDecoration="line-through";
    document.getElementById(sl).style.display="none";
    document.getElementById(un).style.display="block";}
}
function unblock(ten,sl,un)
{
    
    var z=confirm("Bạn muốn hủy block tài khoản này !!!");
        if(z==true)
    {document.getElementById(ten).style.textDecoration="none";
    document.getElementById(sl).style.display="block";
    document.getElementById(un).style.display="none";}
    
}
function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}
function search(){
    var s = document.getElementById("text").value;
    s=xoa_dau(s);
    s=s.toLowerCase();
   
    var b=["!","@","#","$","%","^","&","*","(",")","~","`","?","<",">","{","}","[","]",";",":","'","/","1"
           ,"2","3","4","5","6","7","8","9","0"];
    var c=["!","@","#","$","%","^","&","*","(",")","~","`","?","<",">","{","}","[","]",";",":","'","/"]
    {
    var arry=["sen da thai","sen da hong bach","sen da do la","sen da nau dat","sen da thia xanh","sen da vien hong"
             ,"sen da vien lua","sen da banh bao","sen da chuoi ngoc","sen da ham ca map"," sen da nau","sen da tu phuong"
            ,"sen da dua","sen da canh hoa hong","sen da la tim","xuong rong tai tho","xuong rong mong rong","xuong rong bui"
        ,"xuong rong banh sinh nhat","xuong rong thanh son","xuong rong trung chim","xuong rong vang"];
    var a=0;
    document.getElementById("mid").style.display='none'; 
    document.getElementById("search").style.display='block';
    document.getElementById("sendalon").style.display='none';
    document.getElementById("sendanho").style.display='none';
    document.getElementById("xuongrong").style.display='none';
    document.getElementById("chau").style.display='none';
    document.getElementById("chamsocsenda").style.display='none';
    document.getElementById("chamsocxuongrong").style.display='none';
    document.getElementById("thgiohang").style.display='none';
    document.getElementById("kq").style.display='block';
    document.getElementById("bottom").style.marginTop="4000px";
    for(var i=0;i<arry.length;i++)
    {
        document.getElementById(i+1).style.display='none';

    }
    for(var i=0;i<arry.length;i++)
    {
        if(0<=arry[i].indexOf(s) && arry[i].indexOf(s)<=arry[i].length)  
            { document.getElementById(i+1).style.display='block';  
             a++;}
    }
    document.getElementById("kq").innerHTML="KẾT QUẢ TÌM KIẾM :" +a;
    }
    for(var i=0;i<b.length;i++)
    {
        if(0<=s.indexOf(b[i]) )  
            { alert("thông tin tìm kiếm không hợp lệ"); 
            alert: '#DD6B55';
             break;}
    }
}
var b=0;
function giam()
{
    var a=document.getElementById("soluong").value;
    if(a>=0)
    {
        a--
        if(a<0)  document.getElementById("soluong").value="0";
        else
        document.getElementById("soluong").value=a;
    }
}
function tang()
{
    var a=document.getElementById("soluong").value;
    if(a>=0)
    {
        a++
        document.getElementById("soluong").value=a;
    }
}
function giamSL(tam)
{
    var a=document.getElementById(tam).value;
    if(a>=0)
    {
        a--
        if(a<0)  document.getElementById(tam).value="0";
        else
        document.getElementById(tam).value=a;
    }
}
function tangSL(tam)
{
    var a=document.getElementById(tam).value;
    if(a>=0)
    {
        a++
        document.getElementById(tam).value=a;
    }
}