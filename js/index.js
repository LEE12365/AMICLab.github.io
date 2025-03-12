// JavaScript Document
jQuery(document).ready(function($) {
	$('#full-width-slider').royalSlider({
	arrowsNav: true,
	loop: false,
	keyboardNavEnabled: true,
	controlsInside: false,
	imageScaleMode: 'fill',
	arrowsNavAutoHide: false,
	autoScaleSlider: true, 
	autoScaleSliderWidth: 1920,     
	autoScaleSliderHeight:590,
	controlNavigation: 'bullets',
	thumbsFitInViewport: false,
	navigateByClick: true,
	startSlideId: 0,
	autoPlay: {
	                enabled: true,
	                delay: 5000
	            },
	transitionType:'move',
	globalCaption: true,
	deeplinking: {
	enabled: true,
	change: false
	},
	imgWidth: 1920,
	imgHeight:590
		});
		
		
		
		$('#full-width-slider1').royalSlider({
			arrowsNav: true,
			loop:false,
			keyboardNavEnabled: true,
			controlsInside: false,
			imageScaleMode: 'fill',
			arrowsNavAutoHide: false,
			autoScaleSlider: true, 
			autoScaleSliderWidth: 930,     
			autoScaleSliderHeight:529,
			controlNavigation: 'bullets',
			thumbsFitInViewport:false,
			navigateByClick: true,
			startSlideId: 0,
			slidesSpacing:1,
			transitionSpeed:400,
			autoPlay: {
							enabled: true,
							delay:4000
						},
			transitionType:'move',
			globalCaption: true,
			deeplinking: {
			enabled: true,
			change:false
			},
			imgWidth: 930,
			imgHeight:529
			});


			$('.publications-box ul li').on('mouseenter',function(){
				var that = $(this);
				that.find('.content-pro').slideDown();
			}).on('mouseleave',function(){
				var that = $(this);
				that.find('.content-pro').slideUp();
			})
	
});