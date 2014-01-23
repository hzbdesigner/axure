 <script>
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        window.shareData = {  
			//分享图片http://218.207.182.80:8091/12580/more/shopNe
            "imgUrl": "http://218.207.182.80:8088/wx12580/images/weixin.png", 
			//朋友圈访问地址
            "timeLineLink": "http://218.207.182.80:8088/wx12580/index.html",
			//发送给好友访问地址
            "sendFriendLink": "http://218.207.182.80:8088/wx12580/index.html",
			//微博分享地址
            "weiboLink": "http://218.207.182.80:8088/wx12580/index.html",
			//朋友圈标题
            "tTitle": "2014骏马奔腾！跑马送祝福咯！",
 
 
			//朋友圈内容--貌似没用
            "tContent": "马蹄哒哒震乾坤，祝福声声节节升！策马奔腾，好礼送不停啦！",
			//发送给朋友标题
            "fTitle": "2014骏马奔腾！跑马送祝福咯！",
			//发送给朋友内容
            "fContent": "马蹄哒哒震乾坤，祝福声声节节升！策马奔腾，好礼送不停啦！",
			//微博内容
            "wContent": "马蹄哒哒震乾坤，祝福声声节节升！策马奔腾，好礼送不停啦！" 
			
        };
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', { 
                "img_url": window.shareData.imgUrl,
                "img_width": "640",
                "img_height": "640",
                "link": window.shareData.sendFriendLink,
                "desc": window.shareData.fContent,
                "title": window.shareData.fTitle
            }, function (res) {
                _report('send_msg', res.err_msg);
            })
        });

        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": window.shareData.imgUrl,
                "img_width": "640",
                "img_height": "640",
                "link": window.shareData.timeLineLink,
                "desc": window.shareData.tContent,
                "title": window.shareData.tTitle
            }, function (res) {
                _report('timeline', res.err_msg);
            });
        });

        // 分享到微博
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content": window.shareData.wContent,
                "url": window.shareData.weiboLink,
            }, function (res) {
                _report('weibo', res.err_msg);
            });
        });
        }, false)
</script>