
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
   var s = skrollr.init(
     {
      mobileCheck:function(){},
      mobileDeceleration:0.004,
     }
   ) 
   console.log('PC');
   backdround_run(1);
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
// max-width>995
  if(win_width>=995){
    if(scroll_height>=550){
      $(".navbar").addClass('nav_menu');
      $(".navbar").removeClass('nav_list');
      


    }
    else if(scroll_height<=550){
      $(".navbar").addClass('nav_list');
      $(".navbar").removeClass('nav_menu');
      $(".navbar").removeClass('active'); 
      
    }
  } 
  // max-width>995
  console.log(scroll_height);
  

});

$(window).on('resize', function(){
  

   var win = $(this); //this = window
   var win_width = win.width();
   
  
  
   if (win_width>=970) {
    $(".navbar").addClass('nav_list');
    $(".navbar").removeClass('nav_menu'); 
    var s = skrollr.init()
    console.log('PC');
   }
   else{
     $(".navbar").addClass('nav_menu');
     var s = "";
     $(".navbar").removeClass('nav_list');
     console.log('mobile');
  }
   

});
var myVar = setInterval(myTimer ,5000);
var d=1;
function myTimer() {
    backdround_run(d);
    d++;
    
    if(d==5){
      d=1;
    }
    
    // console.log(d);
};
var x=0;
function backdround_run(x){
    if(x==1){
      $(".joumbotron").css("background","url('https://i.ytimg.com/vi/eZBljy-rZ4g/maxresdefault.jpg')");
      $(".buttom_li#1").css("background-color","rgba(255,255,255,1)");
      $(".buttom_li#2").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#3").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#4").css("background-color","rgba(255,255,255,0)");
     
    }
    if(x==2){
      $(".joumbotron").css("background","url('http://timefortaiwan.tw/d_upload_tour100/touching/photos/A0/B0/C0/D11/E539/F98/cd8e5748-b240-49d7-bd66-c2ea7c961ad3.JPG')");
      $(".buttom_li#2").css("background-color","rgba(255,255,255,1)");
      $(".buttom_li#1").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#3").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#4").css("background-color","rgba(255,255,255,0)");
    }

    if(x==3){
      $(".joumbotron").css("background","url('http://i1.wp.com/inews.gtimg.com/newsapp_match/0/464436699/0')");
      $(".buttom_li#3").css("background-color","rgba(255,255,255,1)");
      $(".buttom_li#2").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#1").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#4").css("background-color","rgba(255,255,255,0)");
    }
    if(x==4){
      $(".joumbotron").css("background","url('http://i.imgur.com/q44SKvg.jpg')");
      $(".buttom_li#4").css("background-color","rgba(255,255,255,1)");
      $(".buttom_li#2").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#3").css("background-color","rgba(255,255,255,0)");
      $(".buttom_li#1").css("background-color","rgba(255,255,255,0)");
    }
    $(".joumbotron").css("background-size","cover");
}
