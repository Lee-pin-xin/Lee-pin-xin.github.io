var s = skrollr.init();
$(".menu").on("click", function() {
  $(".navbar").toggleClass('active');
});
$(".buttom_li#1").on("click", function() {
  d=1;
  backdround_run(d);
});
$(".buttom_li#2").on("click", function() {
  d=2;
  backdround_run(d);
});$(".buttom_li#3").on("click", function() {
  d=3;
  backdround_run(d);
});$(".buttom_li#4").on("click", function() {
  d=4;
  backdround_run(d);
});

function myfunction(){
  var win_width = $(window).width();
  if (win_width>=970) {
   $(".navbar").addClass('nav_list');
   $(".navbar").removeClass('nav_menu'); 
   console.log('PC');
  }
  else{
    $(".navbar").addClass('nav_menu');
    $(".navbar").removeClass('nav_list');
    console.log('mobile');
  }
};

$(window).scroll(function(){
  var scroll_height=$(window).scrollTop();
  var win_width =$(window).width();

  if(scroll_height>=550&&win_width>=995){
    $(".navbar").addClass('nav_menu');
    $(".navbar").removeClass('nav_list');

  }
  else if(scroll_height<=550&&win_width>=995){
    $(".navbar").addClass('nav_list');
    $(".navbar").removeClass('nav_menu');
    $(".navbar").removeClass('active'); 
  }
  console.log(win_width);
  

});

$(window).on('resize', function(){
  

   var win = $(this); //this = window
   var win_width = win.width();
   
  //  console.log(scroll_height);

   if (win_width>=995) {
    $(".navbar").addClass('nav_list');
    $(".navbar").removeClass('nav_menu'); 
    console.log('PC');
   }
   else{
     $(".navbar").addClass('nav_menu');
     $(".navbar").removeClass('nav_list');
     console.log('mobile');
   }
});
var myVar = setInterval(myTimer ,5000);
var d=0;
function myTimer() {
  
    d++;
    backdround_run(d);
    if(d==5){
      d=1;
    }
    
    console.log(d);
};
var x=0;
function backdround_run(x){
    if(x==1){
      $(".joumbotron").css("background","url('http://i.imgur.com/llzZUGC.jpg')");
      $(".buttom_li#1").css("background-color","rgba(255,255,255,1)");
      $(".buttom_li#2").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#3").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#4").css("background-color","rgba(255,255,255,0)");
     
    }
    if(x==2){
      $(".joumbotron").css("background","url('http://i.imgur.com/q44SKvg.jpg')");
      $(".buttom_li#2").css("background-color","rgba(255,255,255,1)");
      $(".buttom_li#1").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#3").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#4").css("background-color","rgba(255,255,255,0)");
    }

    if(x==3){
      $(".joumbotron").css("background","url('http://i.imgur.com/S4tX7u6.jpg')");
      $(".buttom_li#3").css("background-color","rgba(255,255,255,1)");
      $(".buttom_li#2").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#1").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#4").css("background-color","rgba(255,255,255,0)");
    }
    if(x==4){
      $(".joumbotron").css("background","url('http://i.imgur.com/impWz9e.jpg')");
      $(".buttom_li#4").css("background-color","rgba(255,255,255,1)");
      $(".buttom_li#2").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#3").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#1").css("background-color","rgba(255,255,255,0)");
    }
    $(".joumbotron").css("background-size","cover");
}