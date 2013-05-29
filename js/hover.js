$(document).ready(function() {

	mpMenu = {};
	mpMenu.ul = $('#page-header #nav-full');
	mpMenu.links = mpMenu.ul.find('li');

	if(mpMenu.links.hasClass('active')) {
		mpMenu.links.not('.active').addClass('inactive');
	}

	$(mpMenu.links).on('mouseover',function(e){
		$(this).removeClass('inactive');
		$(mpMenu.links).not(this).addClass('inactive');
	});

	$(mpMenu.ul).on('mouseout',function(e){
		if($(mpMenu.links).hasClass('active')) {
			$(mpMenu.links).addClass('inactive');
			$(mpMenu.ul).find('.active').removeClass('inactive');
		} else {
			$(mpMenu.links).removeClass('inactive');
		}
	});

	// dla testów na pojedyńczej stronie, w gotowym skrypcie jest to niepotrzebne
	$(mpMenu.links).on('click', function(e) {
		e.preventDefault();
		$(mpMenu.links).removeClass('active');
		$(this).addClass('active');
		mpMenu.links.not('.active').addClass('inactive');
	});
	//
});