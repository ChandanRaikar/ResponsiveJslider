/* 
  ************FreeSlider(responsive)*************
	Author: Chandan Raikar	
	License: Free to use and modify
	Version: v1.1.1
	Note: All images used and code written has not been taken by any website or any reference, 
	images and any assets used in this plugin is owned by the author of this plugin. 
	And please don't forget to rate this plugin(this would make my life easier to develop more and free plugins).	 
	Website: http://www.devraikar.in
  ************************************
*/




/*Slider Configuration*/
var sliderHeight = "350px";
var sliderWidth = '100%';
var slider = document.getElementById('slideContainer');	
slider.style.height = sliderHeight;
slider.style.width = sliderWidth;






var slideinterval = 3000
var nextButton = document.getElementById('next_slide');
var previousButton = document.getElementById('previous_slide');
var currentSlide = 0;
var slideWidth = slider.offsetWidth;
var sliderbox = document.getElementById('slider');
var sliderLength = document.querySelectorAll('#slider section').length;


var next = function(){
	currentSlide++;
	if(currentSlide >= sliderLength){		
		currentSlide = 0;
		sliderbox.style.left = 0;
	} else {
		sliderbox.style.left = "-"+slideWidth * currentSlide +"px";
	}
}

var previous = function(){
	currentSlide = currentSlide - 1;
	if(currentSlide < 0){
		currentSlide = sliderLength - 1;
		sliderbox.style.left = "-"+currentSlide * slideWidth + "px";
	} else {
		sliderbox.style.left = "-"+slideWidth * currentSlide +"px";
	}	
}

var autoslide = function(){
	setInterval(function(){
		next();
	},slideinterval)
}

window.addEventListener('resize',function(){
	slideWidth = slider.offsetWidth;
	console.log('resized')
	currentSlide = 0;
	sliderbox.style.left = 0;
});

nextButton.addEventListener('click',function(){
	next();
})

previousButton.addEventListener('click',function(){
	previous();
})

window.onload = function(){
	autoslide();
	next();
	previous();
}