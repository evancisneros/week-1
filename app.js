function fadeOutAndRemove ( $img ) {
	$img.css( 'opacity', 0 );
	setTimeout( function () {
		$img.remove();
	}, 1000 );
}

function isCentered ( element ) {
	var bcr = element.getBoundingClientRect();
	var mid = window.innerHeight / 2;

	return bcr.top < mid && bcr.bottom > mid;
}

var currentBackground = null;
var $body = $( 'body' );
var $sections = $( 'section' );
var $img;

function updateBackground () {
	for ( var i = 0; i < $sections.length; i += 1 ) {
		var section = $sections[i];

		if ( isCentered( section ) ) {
		var background = section.getAttribute('data-background');
		if (background != currentBackground) {
			currentBackground = background;
			if( $img ){
				$img.remove();
			}
		}

		$body.css("background-image")
		$body.append($img);
		}
	}
}

var $videos = $( 'video' );

function autoplayVideo () {
	for ( var i = 0; i < $videos.length; i += 1 ) {
		var video = $videos[i];
		if ( isCentered (video)){
			video.play();
		}

		/* code goes here */
	}
}

// whenever a video or audio clip starts playing, stop all the others
var $media = $videos.add( 'audio' );
$media.on( 'play', function () {
	for ( var i = 0; i < $media.length; i += 1 ) {
		if ( $media[i] !== this ) {
			$media[i].pause();
		}
	}
});

$( window ).on( 'scroll', function () {
	updateBackground();
	autoplayVideo();
});

updateBackground();
