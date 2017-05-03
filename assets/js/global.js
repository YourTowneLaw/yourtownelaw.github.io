$(function() {

    var smoothScroll = function ( hash ){

    	var scrollTarget;
    	var navTarget;

    	if( hash ){

	    	scrollTarget = $( '[data-smoothscroll=' + hash.slice(1) + ']' );

	    	$( ".navbar-nav li" ).removeClass( "active" );

	    	navTarget = $( '#nav' + hash.slice(1) );

	        console.log( "hash.slice(1): ", hash.slice(1) );
	        console.log( "navTarget: ", navTarget );

	    	navTarget.addClass( "active" );

	        console.log( "scrollTarget: ", scrollTarget );

	        if ( scrollTarget.length ) {
	        	$(".navbar-collapse.in").collapse('hide');
	            $( 'html,body' ).animate({
	                scrollTop: scrollTarget.offset().top - 80
	            }, 1000 );
	            return false;
	        }

	    }

    };

    $( 'a[href*=#]:not([href=#]):not([data-toggle="collapse"])' ).click( function( e ) {

        // Make sure the target is on the same page and same domain
        if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {

        	e.preventDefault();
        	smoothScroll(this.hash);
            
        }
    });

    setTimeout( function(){
    	$('.badge_rating_description_short a').attr("href", "http://www.avvo.com/attorneys/32806-fl-nancy-campiglia-1288126.html");
	}, 3000);
    

});