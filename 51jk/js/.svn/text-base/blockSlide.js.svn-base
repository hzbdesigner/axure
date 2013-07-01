/**
 * @author feiwen
 */
(function($){
	$.fn.blockSlide = function(settings){    
        settings = jQuery.extend({
        	speed : "normal",
			num : 4,
			timer : 1000,
			flowSpeed:400
    	}, settings);
		return this.each(function() {
			$.fn.blockSlide.scllor( $( this ), settings );
    	});
    };
	$.fn.blockSlide.scllor=function($this, settings){
		var index=0;
		var ul = $( "#controls" );
		var imgScllor = $( "#banners>a" );
		var timerID;
		var li = ul.children();
		
		$(li).hover(function(){
			if(MyTime){
				clearInterval(MyTime);
			}
			index  =  $(li).index(this);
			MyTime = setTimeout(function(){
				$(imgScllor).stop();
				ShowjQueryFlash(index);
			} , 400);

		}, function(){
			clearInterval(MyTime);
			MyTime = setInterval(function(){
				ShowjQueryFlash(index);
			
				index++;
				if(index==settings.num)
					index=0;
			} , settings.timer);
		});
		
	 	$(imgScllor).hover(function(){
			if(MyTime){
				clearInterval(MyTime);
			}
	 	},function(){
			MyTime = setInterval(function(){
				ShowjQueryFlash(index);
			
				index++;
				if(index==settings.num)
					index=0;
			} , settings.timer);
	 	});
		
		var MyTime = setInterval(function(){
			ShowjQueryFlash(index);
			//alert(index);
			index++;
			if(index==settings.num)
				index=0;
		} , settings.timer);
		var ShowjQueryFlash=function (i) {
			$(imgScllor).eq(i).animate({opacity: 1},settings.speed).css({"z-index": "5"}).siblings().animate({opacity: 0},settings.speed).css({"z-index": "0"});
			$(li).eq(i).addClass("current").siblings().removeClass("current");
		
		}
	}
})(jQuery);