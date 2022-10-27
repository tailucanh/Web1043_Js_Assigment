

function loginForm() {
    //!Kiểm tra tên
    var fulllname = document.getElementById("fullName");
   
    if(fulllname.value == ""){

        document.getElementById("warningName").style.display = 'block';
        document.getElementById("warningName").innerHTML = "* Hãy nhập tên của bạn!"; 
        return false;
    }else{     
        document.getElementById("warningName").style.display = 'none';
      
    }
        //!Kiểm tra email
    var email = document.getElementById("emailForm");
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if(email.value == ""){
   
        document.getElementById("warningEmail").style.display = 'block';
        
        document.getElementById("warningEmail").innerHTML = "* Hãy nhập email của bạn!";
        return false;
    }else if(!pattern.test(email.value)){

    
        document.getElementById("warningEmail").style.display = 'block';

        document.getElementById("warningEmail").innerHTML = "* Hãy nhập email đúng định dạng!"
        return false;
    }else{
        document.getElementById("warningEmail").style.display = 'none';
       
    }
    //!Kiểm tra sdt
    var phone = document.getElementById("phoneNumber");
    if(phone.value == ""){
    
        document.getElementById("warningPhone").style.display = 'block';
        document.getElementById("warningPhone").innerHTML = "* Hãy nhập số điện thoại của bạn!";
        return false;
    }else if(isNaN(phone.value)){
  
    
        document.getElementById("warningPhone").style.display = 'block';
        document.getElementById("warningPhone").innerHTML = "* Hãy nhập số điện thoại là chữ số!";
        return false;
    }else if(phone.value.length < 10 || phone.value.length > 11){
   
        document.getElementById("warningPhone").style.display = 'block';
        document.getElementById("warningPhone").innerHTML = "* Hãy nhập số điện thoại đủ 10 số!";
        return false;
    }else{
       
        document.getElementById("warningPhone").style.display = 'none';
        

    }
 //! kiểm tra khoa học
  
    var checkoption = document.getElementById("price").value;
    if(checkoption == ""){
        document.getElementById("warningType").style.display = 'block';
        document.getElementById("warningType").innerHTML = "* Hãy chọn 1 khóa học của bạn !";
        return false;
    }else{
          document.getElementById("warningType").style.display = 'none';
    }
    //! Kiểm ra hình thức 
    var count = 0;
    var hinhthuc = document.getElementsByName("learn");
    for(var i = 0; i < hinhthuc.length; i++){
        if(hinhthuc[i].checked == true){
            count++;
        }
    }
    if(count == 0){
        document.getElementById("warningLearn").innerHTML = "* Hãy chọn 1 loại hình thức !";
        return false;
    }else{
        document.getElementById("warningLearn").style.display = "none";
    }

    alert("Đăng kí thành công!");
  
    
}

 //! gán giá tiền cho từng khóa học
function selectFrom(obj){ 
    var options = obj.children;
    var html = '';    
    
    for (var i = 0; i < options.length; i++){
        if (options[i].selected){
            html += options[i].getAttribute("data-price");
        }
    }
  
    document.getElementById("price").value = html+" vnđ";
}

