
$(document).ready(function() {
    resize_title_card(); //set title card height to window height
    hide_menu_items(); //hide navigation menu items on small screens
});

function resize_title_card() {
	$('#title').css('height', $(window).height());
}

function hide_menu_items() {
	if($(window).width() < 600) {
		$('#menu a:not(#icon)').hide();
	}
}
