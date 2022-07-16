//Xử lí phần đăng nhập và đăng kí
//Hiện phần modal của class đăng nhập và đăng kí
//Xử lí phần đăng nhập và đăng kí
//Hiện phần modal của class đăng nhập và đăng kí

var flag = 0;
function checkLogin() {
    var adminID = "1";
    var adminPassword = "1";


    var username_login = document.getElementById("username").value;
    var password_login = document.getElementById("password").value;

    if (adminID == username_login && adminPassword == password_login) {
        return loginSuccess();
    }
    alert("Tài khoản hoặc mật khẩu không đúng");
}

function loginSuccess() {
    alert('Đăng nhập thành công');
    remove();
    $(".header__navbar-link").addClass('hidden')
    $(".header__navbar-text").addClass('hidden')
    $(".header__navbar-user-img").removeClass('hidden');
    $(".header__navbar-user-name").removeClass('hidden');
	$(".header__navbar-user-menu").removeClass('hidden');
	$(".header__navbar-user-img-active").addClass('hidden');
	$(".header__navbar-link__separator").addClass('hidden');
    flag = 1; 
}

function registerSuccess() {
    alert('Đăng kí thành công');
    remove();
    $(".modal").removeClass('hidden');
    $(".modal__overlay").removeClass('hidden');
    $(".modal__body").removeClass('hidden');
    $(".login-form").removeClass('hidden');
}

function remove() {
    $('.modal').addClass('hidden');
    $(".modal__overlay").addClass('hidden');
    $(".modal__body").addClass('hidden');
    $(".auth-form").addClass('hidden');
    $(".login-form").addClass('hidden');
}

function displayLoginForm() {
    $(".modal").removeClass('hidden');
    $(".modal__overlay").removeClass('hidden');
    $(".modal__body").removeClass('hidden');
    $(".login-form").removeClass('hidden');
}

function displayAuthForm() {
    $(".modal").removeClass('hidden');
    $(".modal__overlay").removeClass('hidden');
    $(".modal__body").removeClass('hidden');
    $(".auth-form").removeClass('hidden');
}

function clickSignup() {
    $(".login-form").addClass('hidden');
    $(".auth-form").removeClass('hidden');
}

function clickLogin() {
    $(".auth-form").addClass('hidden');
    $(".login-form").removeClass('hidden');
}
// banner
var slides = document.querySelectorAll('.changeSlide img');
var length = document.getElementsByClassName("slide")[0].clientWidth;
var changeSlide = document.getElementsByClassName("changeSlide")[0];
var img = changeSlide.getElementsByTagName("img");
var dots = document.querySelectorAll('.dot');
var max = length * img.length;
var currentSlide = 0;
max = max - length;
var change = 0;
function next(){
	// đổi slide 
	if(change < max) change = change + length;
	else
		change =0;
	changeSlide.style.marginLeft='-' + change + 'px';

	// đổi nút hiển thị slide
	if (currentSlide == slides.length - 1) {
    currentSlide = 0;
  	} else {
    currentSlide++;
  	}
	document.querySelector('.dot.current').classList.remove('current');
	dots[currentSlide].classList.add('current');
}
function back(){
	if(change == 0)
		change = max;
	else 
		change = change - length;
	changeSlide.style.marginLeft='-' + change +'px';
	
	if (currentSlide == 0) {
    currentSlide = slide.length - 1;
  	} else {
    currentSlide--;
  	}
	document.querySelector('.dot.current').classList.remove('current');
	dots[currentSlide].classList.add('current');
}
setInterval(function(){
	next();
}, 3000);





////////
jQuery(document).ready(function($){
// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 300,
//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
offset_opacity = 1200,
//duration of the top scrolling animation (in ms)
scroll_top_duration = 700,
//grab the "back to top" link
$back_to_top = $('.cd-top');
//hide or show the "back to top" link
$(window).scroll(function(){
( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
if( $(this).scrollTop() > offset_opacity ) {
$back_to_top.addClass('cd-fade-out');
}
});
//smooth scroll to top
$back_to_top.on('click', function(event){
event.preventDefault();
$('body,html').animate({
scrollTop: 0 ,
}, scroll_top_duration
);
});
});

function send() {
    alert("Cám ơn bạn đã đánh giá ");
}
function saveSuccess() {
    alert("Đã lưu thành công");
}

// ---------------------------SEARCH-------------------------
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
    var s = document.getElementById("search").value;
    s=xoa_dau(s);
    s=s.toLowerCase()
   
    var b=["!","@","#","$","%","^","&","*","(",")","~","`","?","<",">","{","}","[","]",";",":","'","/"];
    {
    var arry=[
        "casio mtp-1374l-1avdf",
        "casio ltp-vt01gl-9budf",
        "fossil fs5404",
        "tissot t109.610.16.037.00",
        "orient feu07005wx",
        "g-shock ga-120-1adr",
        "seiko 5 sports srpd73k2",
        "citizen el3042-50p",
        "citizen ny0098-84e",
        "fossil fs5464",
        "orient fgw05001t0",
        "tissot t063.428.11.058.00",
        "casio a168wegb-1bdf",
        "casio ae-1200whd-1avdf",
        "casio f-91ws-2df",
        "casio mtp-vt01g-7budf",
        "casio mtp-vt01gl-2budf",
        "casio mts-100l-1avdf",
        "casio b650wc-5adf",
        "casio ca-53wf-1bdf",
        ];
    if(s==''){
        alert('Vui lòng nhập dữ liệu vào thanh tìm kiếm!');
        return 0;
    }
    var a=0; 
    document.getElementById("poster").style.display='none';
    document.getElementById("banner").style.display='none';
    document.getElementById('phantrang').style.display='none';
    for(var i=0;i<arry.length;i++)
    {
        document.getElementById(i+1).style.display='none';

    }
    var t=0;
    var temp=[];
    for(var i=0;i<arry.length;i++)
    {
        if(0<=arry[i].indexOf(s) && arry[i].indexOf(s)<=arry[i].length)  { 
           temp[t++]=(i+1);
        }
    }
    var dem=0;
    console.log(t);
    
    for(var i=0;i<temp.length;i++){
        var j=temp[i];
        document.getElementById(j).style.display='block';
        a++;
        if(a>8){
            document.getElementById(j).style.display="none";
        }
        
    }
    console.log(a);
    if(a>8){
        document.getElementById('phantrang1').style.display="block";
    }
    document.getElementById("title1").innerHTML='Kết quả tìm kiếm';
    $('.product-title span').css('top','-122%');
    }
    for(var i=0;i<b.length;i++)
    {
        if(0<=s.indexOf(b[i]) )  
            { alert("thông tin tìm kiếm không hợp lệ");
break;
            }
    }
}
function trang2(){
    document.getElementById("trang1").className ="pagination1-item";
    document.getElementById("trang2").className ="pagination1-item pagination1-item--active";
    var s = document.getElementById("search").value;
    s=xoa_dau(s);
    s=s.toLowerCase()
   
    var b=["!","@","#","$","%","^","&","*","(",")","~","`","?","<",">","{","}","[","]",";",":","'","/"];
    {
    var arry=[
        "casio mtp-1374l-1avdf",
        "casio ltp-vt01gl-9budf",
        "fossil fs5404",
        "tissot t109.610.16.037.00",
        "orient feu07005wx",
        "g-shock ga-120-1adr",
        "seiko 5 sports srpd73k2",
        "citizen el3042-50p",
        "citizen ny0098-84e",
        "fossil fs5464",
        "orient fgw05001t0",
        "tissot t063.428.11.058.00",
        "casio a168wegb-1bdf",
        "casio ae-1200whd-1avdf",
        "casio f-91ws-2df",
        "casio mtp-vt01g-7budf",
        "casio mtp-vt01gl-2budf",
        "casio mts-100l-1avdf",
        "casio b650wc-5adf",
        "casio ca-53wf-1bdf",
        ];
    var a=0; 
    document.getElementById("poster").style.display='none';
    document.getElementById("banner").style.display='none';
    document.getElementById('phantrang').style.display='none';
    var t=0;
    var temp=[];
    for(var i=0;i<arry.length;i++)
    {
        document.getElementById(i+1).style.display='none';

    }
    for(var i=0;i<arry.length;i++)
    {
        if(0<=arry[i].indexOf(s) && arry[i].indexOf(s)<=arry[i].length)  { 
           temp[t++]=(i+1);
        }
    }
    document.getElementById('phantrang1').style.display="block";
    console.log(temp)
    for(var i=0;i<temp.length;i++){
        var j=temp[i];
        document.getElementById(j).style.display='none';
        a++;
        if(a>8){
            document.getElementById(j).style.display="block";
        }
        if(a>16){
            document.getElementById(j).style.display="none";
        }
    }
    document.getElementById("title1").innerHTML='Kết quả tìm kiếm';
    $('.product-title span').css('top','-122%');
    }
    for(var i=0;i<b.length;i++)
    {
        if(0<=s.indexOf(b[i]) )  
            { alert("thông tin tìm kiếm không hợp lệ"); 
             break;}
    }
}
// -----------------lọc theo giá----------------
function priceSearch(){
    var x=document.getElementById('price').value;
    var y=document.getElementById('price1').value;
    if(x==''||y==''){
        document.getElementById("poster").style.display='none';
        document.getElementById("banner").style.display='none';
        return 0;
    }
    console.log(x);
    if(x<0||y<0){
        alert('nhập số tiền từ 0vnđ');
        return 0;
    }
    if(x>y){
        alert('Nhập vào giá trị đầu nhỏ hơn giá trị cuối!!!');
        return 0;
    }
    var arrprice=[
3999000,4700000,3299000,4700000,2899000,2899000,1700000,1800000,3299000,4800000,2999000,3799000,2499000,3650000,700000,1700000,1800000,3299000,3299000,3299000
    ];

    for(var i=0;i<arrprice.length;i++){
        document.getElementById(i+1).style.display='none';
    }
    document.getElementById('phantrang').style.display='none';
    document.getElementById("poster").style.display='none';
    document.getElementById("banner").style.display='none';
    var t=0;
    var temp=[];
    for(var i=0;i<arrprice.length;i++){
        if(arrprice[i]>=x&&arrprice[i]<=y){
            temp[t++]=(i+1);
        }else if(x=='' && arrprice[i]<=y){
            temp[t++]=(i+1);
        }
    }
    for(var i=0;i<temp.length;i++){
        var j=temp[i];
        document.getElementById(j).style.display='block';
        if(i>7){
            document.getElementById(j).style.display="none";
        }
        
    }
    if(t>7){
        document.getElementById('phantrang1').style.display="block";
    }
    document.getElementById("title1").innerHTML='Kết quả tìm kiếm';
    $('.product-title span').css('top','-122%');
    
    
}