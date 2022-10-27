

var checkAll = document.querySelector("#checkAll");
var checkBoxes = document.querySelectorAll('.check');
var amounts = document.querySelectorAll('#amount');
var priceRanges = document.querySelector("#priceRange");
var rows = document.querySelectorAll('tbody  tr');
var sumPrice = document.querySelector("#sumPrice");


function roomOut(anh) {
    anh.style.transfrom = "scale(10)";
    anh.style.cursor = "";  
}
function roomIn(anh) {
    anh.style.transfrom = "scale(1)";
    anh.style.cursor = "";    
}




//! Hàm chọn tất cả
checkAll.onchange = function(){
    checkBoxes.forEach(checkBoxes => {
        if(checkAll.checked == true){
            checkBoxes.checked = true;
        }else {
            checkBoxes.checked = false;
        }
    });

    //?  enable ô số lượng
    amounts.forEach(input =>{
        input.disabled = !checkAll.checked ? true : false;
    
    })

}

//!  check từng dòng
for(var i = 0; i< checkBoxes.length;i++){
    checkBoxes[i].onchange = function(){
        for(var i = 0; i< amounts.length;i++){
            amounts[i].disabled = !checkBoxes[i].checked ? true :false;
        }

    }
}
//! lọc dữ liệu theo khảng giá

priceRanges.onchange = function(){
    rows.forEach(row =>{
        var cell = row.children[3].innerHTML;
        var splitcell = cell.split(" ")
    
        if(priceRanges.value == 0){
            row.style.display = Number(splitcell[0]) ? 'table-row' : 'none';

        }else if(priceRanges.value == 1){
            row.style.display = Number(splitcell[0]) < 2000 ? 'table-row' : 'none';
        }else if(priceRanges.value == 2){
            row.style.display = Number(splitcell[0]) < 5000 ? 'table-row' : 'none';
        }
        else if(priceRanges.value == 3){
            row.style.display = Number(splitcell[0]) > 10000 && Number(splitcell[0]) < 150000? 'table-row' : 'none';
        }
        else if(priceRanges.value == 4){
            row.style.display = Number(splitcell[0]) < 20000 ? 'table-row' : 'none';
        }
        else{
            row.style.display = Number(splitcell[0]) > 20000 ? 'table-row' : 'none';
        }
    })
}


//! Tính tiền cho từng sản phẩm theo số lượng
rows.forEach(row => {
    var inputAmount = row.children[4];
    var inputPrice = row.children[3].innerHTML;

    var splitinputPrice = inputPrice.split(" ");
    
    var showSumMoney = row.lastElementChild;
    
    inputAmount.onchange = function(count){
       
            var quantity = count.target.value;        
            showSumMoney.innerHTML = splitinputPrice[0] * quantity +" $";              
              //? tính tổng tiền
        var sum = 0;
        for(var i = 0; i < rows.length; i++){
            var inputSumPrice = rows[i].lastElementChild.innerHTML;
            var splitInputSumPrice = inputSumPrice.split(" ");
     
            sum = sum + Number(splitInputSumPrice[0]);
            sumPrice.innerHTML = sum +" $";
                    
        }       
       
    }  
    
})

































