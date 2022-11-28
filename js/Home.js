const passenger = document.getElementById('passenger');
  const passenger_sup = document.getElementById('passenger_sup');
 
  passenger.onclick = function a(){
    if(passenger_sup.style.display==='none'){
      passenger_sup.style.display = 'block';
    }else{
      passenger_sup.style.display = 'none';
    }
    
  }
  const computer = document.getElementById('computer');
  const computer_sup = document.getElementById('computer_sup');
  computer.onclick = function(){
    if(computer_sup.style.display==='none'){
      computer_sup.style.display = 'block';
    }else{
      computer_sup.style.display = 'none';
    }
  }
  const service = document.getElementById('service');
  const service_sup = document.getElementById('service_sup');
  service.onclick = function(){
    if(service_sup.style.display==='none'){
      service_sup.style.display = 'block';
    }else{
      service_sup.style.display = 'none';
    }
  }
  // menutitle
  // const nav = document.getElementById('nav');
  // const content = document.getElementsByClassName('content');
  $(document).ready(function(){
    $('#nav').hover(function (){
    $('.content').toggleClass('expand');
  });
  });
  $(document).ready(function(){
    $('#nav').hover(function (){
    $('#content_background1').toggleClass('expand');
  });
  });
  $(document).ready(function(){
    $('#nav').hover(function (){
    $('#content_background2').toggleClass('expand');
  });
  });
  
// show header 
$(document).ready(function(){

$(function(){

    $(document).on( 'scroll', function(){

        if ($(window).scrollTop() > 20) {
            $('header').addClass('show');
        } else {
            $('header').removeClass('show');
        }
    });

    $('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

});
