// nếu sửa lại nd sai trong input thì viền đỏ sẽ mất

  var input = new Array();
  input[0]=document.getElementById('id');
  input[1]=document.getElementById('name');
  input[2]=document.getElementById('address');
  input[3]=document.getElementById('phone');
  input[4]=document.getElementById('email');

  var containerError = new Array("idError","nameError","addressError","phoneError","emailError");
  
 
    
function checkForm(){
    //kiểm tra dữ liệu rỗng
    var data = new Array();
    data[0]=document.getElementById('id').value;
    data[1]=document.getElementById('name').value;
    data[2]=document.getElementById('address').value;
    data[3]=document.getElementById('phone').value;
    data[4]=document.getElementById('email').value;
    
    var myError = new Array();
    myError[0] = "<span style='color:red,font-weight:bold'>Please fill out passenger id</span>";
    myError[1] = "<span style='color:red,font-weight:bold'>Please fill out passenger name</span>";
    myError[2] = "<span style='color:red,font-weight:bold'>Please fill out passenger address</span>";
    myError[3] = "<span style='color:red,font-weight:bold'>Please fill out passenger phone</span>";
    myError[4] = "<span style='color:red,font-weight:bold'>Please fill out passenger email</span>";
    var check =0;
    var regexId=/^P[0-9]{3}/;
    // var regexEmail =/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$/;
    var regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
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
      document.getElementById(containerError[0]).innerHTML="Passenger id must start with \"P\" and 3 digits!";
      check =1;
  }
  //kiểm tra email
  if(!(data[4].match(regexEmail)) && data[4]!=""){
      document.getElementById(containerError[4]).innerHTML="Email must be in date format (abc@xyz.def...).!";
      check =1;
  }
  //kiểm tra sdt
  if(data[3].length!=10 && data[3]!=""){
      document.getElementById(containerError[3]).innerHTML="phone number must consist of 10 digits!";
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
  const showBtn = document.querySelector('#insert_passenger')
  const hideBtn = document.querySelector('#listPassenger')
  const div1 = document.querySelector('form')
  const list = document.querySelector('#myTable');
  showBtn.addEventListener('click', () => {
    div1.style.display = 'block'
    list.style.display = 'none'
  })
  hideBtn.addEventListener('click', () => {
      list.style.display = 'block'
    div1.style.display = 'none'
  })

  