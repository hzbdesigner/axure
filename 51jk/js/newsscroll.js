$(function(){
    var scrtime;
    $(".index_news").hover(function(){
        clearInterval(scrtime);
    },function(){
        scrtime = setInterval(function(){
            $(".singlenews:last").prependTo($(".newslist"));
            $(".singlenews:first").css({height:"0",opacity:"0"}).animate({height:"56px",opacity:"1"},3000);
       },6000);
    }).trigger("mouseleave");
 });

