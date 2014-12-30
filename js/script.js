$(function() {
	$('header').on('click', '.basket', function() {
		$('.basket-popup').addClass('visible');
	});
	$('.basket-popup').on('click', '.close', function() {
		$('.basket-popup').removeClass('visible');
	})
});

//my Slider

//array of images urls
var brands = ['img/brands-1.png', 'img/brands-2.png', 'img/brands-3.png', 'img/brands-4.png', 'img/brands-5.png', 'img/brands-6.png'];
//render image
function renderFrame(_id) {
	return $('<img/>', {'class': 'slider__item', 'src': 'img/brands-' + _id + '.png'})
}

$(function() {
	//get number of images in frame
	var counter = $('.frame img').length;
	//onclick increment this number
	$('.arrow').on('click', function() {
		var $first = $('.slider__item').first();
		counter++;
		//if this number is bigger then images array length
		if(counter >= brands.length+1) {
			//make it equal to 1
			counter = 1;
		}
		
		//move first image aside, it's hidden by parent element overflowing
		$first.animate({'margin-left': '-585px'}, 500, 'linear', function() {
			//then remove first image
			$first.remove();
			//render new image to the end of frame images
			$('.frame').append(renderFrame(counter));
		});
		
	})
});
