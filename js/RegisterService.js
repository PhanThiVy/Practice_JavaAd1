var input = new Array();
input[0]=document.getElementById('passengerId');
input[1]=document.getElementById('serviceId');
input[2]=document.getElementById('date');
input[3]=document.getElementById('hours');
input[4]=document.getElementById('time');
var containerError = new Array("passengerIdError","serviceIdError","dateError","hoursError","timeError");
function checkForm(){
  //kiểm tra dữ liệu rỗng
  var data = new Array();
  data[0]=document.getElementById('passengerId').value;
  data[1]=document.getElementById('serviceId').value;
  data[2]=document.getElementById('date').value;
  data[3]=document.getElementById('hours').value;
  data[4]=document.getElementById('time').value;
  
  var myError = new Array();
  myError[0] = "<span style='color:red,font-weight:bold'>Please fill out passenger id</span>";
  myError[1] = "<span style='color:red,font-weight:bold'>Please fill out service id</span>";
  myError[2] = "<span style='color:red,font-weight:bold'>Please fill out date started using</span>";
  myError[3] = "<span style='color:red,font-weight:bold'>Please fill out hours started using</span>";
  myError[4] = "<span style='color:red,font-weight:bold'>Please fill out used time</span>";
  var check =0;
  // var regexPassengerId=/^P[0-9]{3}/;
  // var regexServiceId=/^S[0-9]{3}/;
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
$('#date').datepicker(
    {  
        showOn: 'button',
        showButtonPanel: true,    // option hiển thị nút "Today", "Done"
        dateFormat: 'dd/mm/yy',   
         buttonImage: 'images/calender.jpg'
    }
  );
function change(inputId){
  for(i in input){
    if(input[i]==document.getElementById(inputId)){
      $(input[i]).removeClass('redBorder');
      document.getElementById(containerError[i]).innerHTML="";
    }
  }
}
