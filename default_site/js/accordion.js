$(document).ready(function() {

$('.single .answer').hide();
  $('.single h3').on('click',function(e){
      if($(this).hasClass('active')) {
        $(this).removeClass('active').siblings('.answer').slideUp();
      } else {
        $(this).addClass('active').siblings('.answer').slideDown();
      }
  });
	
});