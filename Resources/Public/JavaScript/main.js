// quick search regex
var qsRegex;

// init Isotope
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.shuffle-item',
  //percentPosition: true,
  filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  },
  layoutMode: 'packery',
  packery: {
    // use outer width of grid-sizer for columnWidth
    //columnWidth: 150,
    gutter: 10
  }
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// filter with selects and checkboxes
var $checkboxes = $('.checkbox-group input');

$checkboxes.change( function() {
  // map input values to an array
  var inclusives = [];
  // inclusive filters from checkboxes
  $checkboxes.each( function( i, elem ) {
    // if checkbox, use value if checked
    if ( elem.checked ) {
      inclusives.push( elem.value );
    }
  });

  // combine inclusive filters
  var filterValue = inclusives.length ? inclusives.join(', ') : '*';
  $grid.isotope({ filter: filterValue })
});


// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}, 200 ) );

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}
