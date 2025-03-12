// JavaScript Document
$(function() {

	$(".navbar-toggle").click(function () {
		$(".nav").show();
	});


       $(".web-nav ul li a").click(function(){
            $(this).parent().addClass( "bg_color" );
           $(this).parent().siblings().removeClass( "bg_color" );
       });


});



		