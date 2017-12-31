$(document).ready(function () {

	$('.button-collapse').sideNav();
	$('.parallax').parallax();

	$("#panel-0").slideUp("fast", addAnimationClass("#panel-back-1", "panel-back-animated"));
	//$("#panel-back-1").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",$("#scrol-btn-1").addClass("animated"));






}); // end of document ready








function addAnimationClass(element, animation) {
	$(element).addClass(animation);
}
