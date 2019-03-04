jQuery(document).ready(function($){
    "use strict";

/*=====================================
    Page loader Out / Main page In
=====================================*/
 $('.page-loader').fadeToggle(1500);
	setTimeout(function () {
     	$('.main').addClass('scale');
    },0);
	setTimeout(function () {
     	$('.main').removeClass('scale');
    },3000);
       

});



