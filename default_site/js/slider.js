$(document).ready(function() {

var mpSlide = {};

	window.mpSlide = mpSlide;


	mpSlide.outer = $('#slider-container');
	mpSlide.inner = $('#slider-container > .inner');
	mpSlide.slides = $(mpSlide.inner).find('.slide');
	mpSlide.slidesLength = $(mpSlide.slides).length;
	mpSlide.slidesPos = [];
	mpSlide.currentIndex = 0;
	mpSlide.speed = 500;
	mpSlide.navi = $('#slider-navi > ul');
	mpSlide.autoPlay = true;
	mpSlide.interval = 5000;

	mpSlide.getPositions = function() {
		mpSlide.slidesPos = [];
		mpSlide.slides.each(function() {
			mpSlide.slidesPos.push($(this).position().left)
		});
		// console.log(mpSlide.slidesPos);
	}



	mpSlide.goNextSlide = function(index) {
		if(index == undefined) {
			mpSlide.currentIndex++;
		}

		if(mpSlide.currentIndex == mpSlide.slidesLength) {
			mpSlide.currentIndex = 0;
		}
		mpSlide.outer.stop().animate({'scrollLeft' : mpSlide.slidesPos[mpSlide.currentIndex]}, mpSlide.speed);
		mpSlide.updateNavi();
	}

	mpSlide.updateNavi = function(index) {
		if(index !== undefined) {
			mpSlide.navi.find('li').removeClass('active');
			mpSlide.navi.find('li').eq(index).addClass('active');
		} else {
		mpSlide.navi.find('li').removeClass('active');
		mpSlide.navi.find('li').eq(mpSlide.currentIndex).addClass('active');
		}
	}

	mpSlide.navi.on('click', 'li', function(e) {
		e.preventDefault();
		window.clearTimeout(mpSlide.autoPlayHandler);
		mpSlide.updateNavi();
		mpSlide.currentIndex = $(this).index();
		mpSlide.goNextSlide(mpSlide.currentIndex);
		// console.log(mpSlide.slidesPos[mpSlide.currentIndex]);
	});

	// dodaj do nawigacji tyle linków ile jest slide'ów
	for(var i = 0; i < mpSlide.slidesLength; i++) {
		mpSlide.navi.append($('<li><a href=""></a></li>'));
	}

	// wysrodkuj nawigacje slidera
	mpSlide.navi.css({marginLeft: "-"+($(mpSlide.navi).width()/2)+"px"});

	// aktywuj pierwszy slide i odpowiedni link w nawigacji
	$(mpSlide.slides[0]).addClass('active');
	mpSlide.navi.find('li').eq(0).addClass('active');

	mpSlide.wrapperWidth = $('#slider-wrapper').width();
	mpSlide.getPositions();

	mpSlide.autoPlayHandler = window.setInterval(mpSlide.goNextSlide, mpSlide.interval);
	
});