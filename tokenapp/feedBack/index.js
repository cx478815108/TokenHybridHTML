var recommandLabel = document.getElementById("recommandLabel");
recommandLabel.setOnClick(()=>{
    token.pushWebPageWithURL({
        title: "即将唤起QQ",
        url:"http://shang.qq.com/wpa/qunwpa?idkey=cb0364aa55af9d0154c5da0a843d03992cb93f5bd1f733cf51c63679e0f0f18e"
    })
});

var recommandLabel2 = document.getElementById("recommandLabel2");
recommandLabel2.setOnClick(()=>{
    token.pushWebPageWithURL({
        title: "即将唤起QQ",
        url: "mqqwpa://im/chat?chat_type=wpa&uin=2577438164&version=1&src_type=web&web_src=iwut.wutnews.net"
    })
});