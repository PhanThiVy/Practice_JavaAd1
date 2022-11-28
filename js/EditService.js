var input = new Array();
input[0]=document.getElementById('name');
input[1]=document.getElementById('unit');
input[2]=document.getElementById('price');
var containerError = new Array("nameError","unitError","priceError");
function checkForm(){
  //kiểm tra dữ liệu rỗng
  var data = new Array();
  data[0]=document.getElementById('name').value;
  data[1]=document.getElementById('unit').value;
  data[2]=document.getElementById('price').value;
  
  var myError = new Array();
  myError[0] = "<span style='color:red,font-weight:bold'>Please fill out service name</span>";
  myError[1] = "<span style='color:red,font-weight:bold'>Please fill out service unit</span>";
  myError[2] = "<span style='color:red,font-weight:bold'>Please fill out service price</span>";
  var check =0;
  // check rỗng
  for(i in data){
    const div = containerError[i];
      if(data[i]==""){
        document.getElementById(div).innerHTML=myError[i];
        $(input[i]).addClass('redBorder');
        check =1;
      }
    }
  
  if(check == 1){
      return false;
  }
  alert("insert successful!")
  return true;
}
function change(inputId){
  for(i in input){
    if(input[i]==document.getElementById(inputId)){
      $(input[i]).removeClass('redBorder');
      document.getElementById(containerError[i]).innerHTML="";
    }
  }
}