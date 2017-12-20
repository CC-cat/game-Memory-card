$(function(){

    $(".deck li").on("click", function(){
        var index = $(this).index();
        var id = $(this).attr("class");

        if (id === "card") {

            var len = $(".open").length;

            switch(len)
            {
            case 0:
              $(".deck li").eq(index).addClass("open show");
              console.log("有"+(len+1)+"个相同的class='open show'了");
              index1 = index;
              // console.log("index1值为："+ index1);
              break;
            case 1:
              $(".deck li").eq(index).addClass("open show");
              console.log("有"+(len+1)+"个相同的class='open show'了");
              // 判断
              index2 = index;
              console.log("index1值为："+ index1);
              console.log("index2值为："+ index2);
              var objA = $(".deck li").eq(index1).children("i").attr("class");
              var objB = $(".deck li").eq(index2).children("i").attr("class");
              if(objA === objB){
                console.log("喵小姐提示您：这两个图案是一样的，恭喜你！");
                $(".deck li").removeClass("open show");
                $(".deck li").eq(index1).addClass("match");
                $(".deck li").eq(index2).addClass("match");
              } else {
                console.log("喵小姐提示您：哎呀！这两个图案长得不一样。");
                $(".deck li").eq(index1).addClass("opacity-hide");
                $(".deck li").eq(index2).addClass("opacity-hide");
                setTimeout(function(){
                    $(".deck li").removeClass("open show");
                    $(".deck li").removeClass("opacity-hide");
                },1000);
              };

              break;
            default:;
            }

        };

    });

    // 重新启动
    $(".restart").on("click", function(){
        $(".deck li").removeClass("open show match");
    });

});

// 判断
function judge(){

};


/*
在页面上显示卡片
使用下面提供的“洗牌”方法洗牌
遍历每个卡片并创建它的HTML
将每个卡片的HTML添加到页面中
*/

var cards = [
    "fa-diamond","fa-diamond",
    "fa-paper-plane-o","fa-paper-plane-o",
    "fa-anchor","fa-anchor",
    "fa-bolt","fa-bolt",
    "fa-cube","fa-cube",
    "fa-leaf","fa-leaf",
    "fa-bicycle","fa-bicycle",
    "fa-bomb","fa-bomb"
];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

/*
为卡片设置事件侦听器。如果单击某个卡：
显示卡的符号（把这个功能放在你从这个调用的另一个函数中）。
将该卡添加到“打开”卡的*列表中（将此功能放入您从该调用中调用的另一个函数）。
如果名单已经有另一张卡，看看这两张卡是否匹配。
如果卡匹配，锁定卡在打开的位置（把这个功能放到你从这个调用的另一个函数）
如果卡片不匹配，从列表中移除卡片并隐藏卡片的符号（把这个功能放到你从这一个调用的另一个函数）。
增加移动计数器并将其显示在页面上（将此功能放入您从该调用中调用的另一个函数）。
如果所有的卡都匹配，显示一个信息与最终得分（把这个功能在另一个函数，你从这个调用）。
*/


