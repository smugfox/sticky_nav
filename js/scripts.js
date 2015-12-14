var main_nav = document.getElementsByClassName('main-nav');
var stuck = false;
var stick_point = getDistance();

function getDistance() {
	var top_distance = main_nav.offsetTop;
	return top_distance;
}

window.onscroll = function(e) {
	var distance = getDistance() - window.pageYOffset;
	var offset = window.pageYOffset;
	if( ( distance <= 0 ) && !stuck ) {
		main_nav.style.position = 'fixed';
		main_nav.style.top = '0px';
		stuck = true;
	} else if ( stuck && (offset <= stick_point) ) {
		main_nav.style.position = 'static';
		stuck = false;
	}
}
