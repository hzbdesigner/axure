$(function(){
    $(".nav li").hover(
    function(){
        //$(".nav_one",$(this)).slideDown("fast");
		$(".nav_one",$(this)).show();
		$(this).addClass("hover");
        },function(){
            //$(".nav_one",$(this)).slideUp("fast"); 
			$(".nav_one",$(this)).hide();
			$(this).removeClass("hover");
        }
    );
});
