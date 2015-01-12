$(function() {
	$('header').on('click', '.basket', function() {
		$('.basket-popup').addClass('visible');
	});
	$('.basket-popup').on('click', '.close', function() {
		$('.basket-popup').removeClass('visible');
	})
});

function makeUrlsArray(array) {
    var i = 0;
    while (i < 6) {
        array.push('img/brands-' + i + '.png');
        i++;
    }
    return array;
}

//my Slider
$(function() {

    //array of image urls
    var brands = [];
    makeUrlsArray(brands);

    function renderFrame(_id) {
        return $('<img/>', {'class': 'slider__item', 'src': 'img/brands-' + _id + '.png'})
    }

    var pos = 0,
        transition = false;

    function cyclePos(d) {
        return (pos + brands.length + d) % brands.length;
    }

    function slide(direction) {
        if (transition) return;
        transition = true;

        $slider.addClass('frame--shifted-' + direction);
        setTimeout(function() {
            $slider.removeClass('frame--shifted-' + direction);
            switch(direction) {
                case 'prev':
                    pos = cyclePos(-1);
                    $slider.children('.slider__item:last').remove();
                    $slider.prepend(renderFrame(cyclePos(-1)));
                    break;
                case 'next':
                    pos = cyclePos(1);
                    $slider.children('.slider__item:first').remove();
                    $slider.append(renderFrame(cyclePos(3)));
                    break;
            }
            transition = false;
        }, 600);
    }

    var $slider = $('.frame');
    $.each([brands.length - 1, 0, 1, 2, 3], function(i, counter) {
        $slider.append(renderFrame(counter));
    });




	$('.arrow').on('click', function() {
		//get arrow class
		var direction = $(this).attr('class');
		//check direction, change counter and add class to slider to move it
		if($(this).hasClass('arrow--prev')) {
			slide('prev');
		} else if($(this).hasClass('arrow--next')) {
			slide('next');
		}

	});
});
