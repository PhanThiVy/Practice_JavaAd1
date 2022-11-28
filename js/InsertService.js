var input = new Array();
input[0]=document.getElementById('id');
input[1]=document.getElementById('name');
input[2]=document.getElementById('unit');
input[3]=document.getElementById('price');
var containerError = new Array("idError","nameError","unitError","priceError");
function checkForm(){
  //kiểm tra dữ liệu rỗng
  var data = new Array();
  data[0]=document.getElementById('id').value;
  data[1]=document.getElementById('name').value;
  data[2]=document.getElementById('unit').value;
  data[3]=document.getElementById('price').value;
  
  var myError = new Array();
  myError[0] = "<span style='color:red,font-weight:bold'>Please fill out service id</span>";
  myError[1] = "<span style='color:red,font-weight:bold'>Please fill out service name</span>";
  myError[2] = "<span style='color:red,font-weight:bold'>Please fill out service unit</span>";
  myError[3] = "<span style='color:red,font-weight:bold'>Please fill out service price</span>";
  var check =0;
  var regexId=/^S[0-9]{3}/;
  // check rỗng
  for(i in data){
    const div = containerError[i];
      if(data[i]==""){
        document.getElementById(div).innerHTML=myError[i];
        $(input[i]).addClass('redBorder');
        check =1;
      }
    }
   //kiem tra id
   if(!(data[0].match(regexId)) && data[0]!=""){
    document.getElementById(containerError[0]).innerHTML="Service id must start with \"S\" and 3 digits!";
    check =1;
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