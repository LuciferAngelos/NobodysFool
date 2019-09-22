window.addEventListener('DOMContentLoaded', function(){

	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-images'),
		sliderContent = document.querySelector('.slider-content'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot'),
		autoSlide = setInterval(function(){plusSlide(1)}, 3000);

		console.log(slides, dotsWrap, dots, sliderContent);

	showSlides(slideIndex);

	function showSlides(n){
	if(n > slides.length){
		slideIndex = 1;
	};
	if(n < 1){
		slideIndex = slides.length;
	};

	for(let i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	};

	for(let i = 0; i < dots.length; i++){
		dots[i].classList.remove('dot-active')
	};

	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('dot-active');

	};

	function plusSlide(n) {
		showSlides(slideIndex += n);
	};

	function currentSlide(n) {
		showSlides(slideIndex = n);
	};

	sliderContent.addEventListener('click', function(){
		plusSlide(1);
	});

	sliderContent.addEventListener('mouseover', function(){
		clearInterval(autoSlide);
	});

	sliderContent.addEventListener('mouseout', function(){
		autoSlide = setInterval(function(){plusSlide(1)}, 3000);
	});

	dotsWrap.addEventListener('click', function(event){
		for(let i = 0; i <= dots.length; i++){
			if(event.target.classList.contains('dot') && event.target == dots[i-1]){
				currentSlide(i)
			};
		};
	});

});