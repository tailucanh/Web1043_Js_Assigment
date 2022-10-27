
var arr_img = [];


function loadImg(){
    for(let i = 0; i < 10; i++){
        arr_img[i] = new Image();
        arr_img[i].src = "Img/anh"+i+".jpg";
    }
    document.getElementById("countImg").innerHTML = (index+1)+"/"+ (arr_img.length);
}

var mytime ;
var index = 0;
function slideShow(){
    loadImg();
    index++;
 
    if(index == arr_img.length){
        index = 0;    
    }
    document.getElementById("showImg").src = arr_img[index].src;
    mytime = setTimeout("slideShow()",1000);
}


function stop() {
    clearTimeout(mytime);
}

function start() {
   slideShow();

}


index = 0;
function next(){  

    index++;
    if(index >= arr_img.length) {
        index = 0 ;
    }
    document.getElementById("countImg").innerHTML = index+1 + "/"+ arr_img.length;
    var anh =  document.getElementById("showImg");
    anh.src = arr_img[index].src;
    
  

}


function back(){
   
    index--;
   
    if(index < 0){
         index  = arr_img.length -1; 
    }   
     document.getElementById("showImg").src = arr_img[index].src;
    document.getElementById("countImg").innerHTML = (index+1) +"/"+ arr_img.length;




}

function first(){
    index = 0;
   document.getElementById("showImg").src = arr_img[index].src;
   document.getElementById("countImg").innerHTML =  (index+1) +"/"+ arr_img.length;
}

function final(){
    index = arr_img.length-1;
   document.getElementById("showImg").src = arr_img[index].src;
   document.getElementById("countImg").innerHTML =  (index+1) +"/"+ arr_img.length;
}



