var input = new Array();
input[0]=document.getElementById('number');
input[1]=document.getElementById('state');
var containerError = new Array("numberError","stateError");
function checkForm(){
  //kiểm tra dữ liệu rỗng
  var data = new Array();
  data[0]=document.getElementById('number').value;
  data[1]=document.getElementById('state').value;
  
  var myError = new Array();
  myError[0] = "<span style='color:red,font-weight:bold'>Please fill out computer number</span>";
  myError[1] = "<span style='color:red,font-weight:bold'>Please fill out computer status</span>";
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
//   kiểm tra number
if((data[0]<1 || data[0]>1000)&& data[0]!=""){
  document.getElementById(containerError[0]).innerHTML="computer number must be from 1 to 1000!";
  check =1;
}
 
  //   kiểm tra state
  if(data[1]==""){
    document.getElementById(containerError[1]).innerHTML="Please choose state!";
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