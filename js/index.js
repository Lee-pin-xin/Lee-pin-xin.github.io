
$(".menu").on("click", function() {
  $(".navbar").toggleClass('active');
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
  else{
    $(".navbar").addClass('nav_list');
    $(".navbar").removeClass('nav_menu'); 
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
