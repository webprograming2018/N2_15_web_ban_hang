$(function(){
$(window).scroll(function(){
		a = $(window).scrollTop();
		console.log(a);
			if(a>200)	
			{
			$('.w3-container').addClass('xyz');
			}
			

})

});