$(document).ready(function(){

  //scroll top button fade in
  $(window).scroll(function(){
  	if($(this).scrollTop() > 100) {
  		$('.scrollup').fadeIn();
  	}else{
  		$('.scrollup').fadeOut();
  	}
  });
  //scroll top button action
  $('.scrollup').on('click', function(){
  	$('html, body').animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  });

});