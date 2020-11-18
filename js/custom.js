(function($){
	     // init Isotope
var $grid = $('.ourallcourse').isotope({
  // options
});
// filter items on button click
$('.filter_menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
})(jQuery);