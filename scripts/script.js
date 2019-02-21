
$(window).scroll(function () {
  if ($(window).scrollTop() >= $(window).height()) {
  $('#header')
    .css('background','#2948ff')
  $('.resume')
    .css('background','#262626');
  } else {
  $('#header')
    .css('background','transparent');
  $('.resume')
    .css('background','#2948ff');
  }
});



// $("a[href^='#']").click(function(e) {
// 	var position = $($(this).attr("href")).offset().top;
// 	$("body, html").animate({
// 		scrollTop: position
// 	}, 400, 'linear' );
// });