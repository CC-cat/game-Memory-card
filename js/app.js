/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
var time;
var moveStep;

$(function(){
   shuffle(array);

    time = true;
    moveStep = 0;

    $(".deck li").on("click", function(){
        console.log(time);
        if(time){
          timedCount();
          time = false;
          moveStep = 0;
        };

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

              moveStep++;
              $('.moves').html(moveStep);

              if (moveStep === 20 || moveStep === 40) {
                $(".stars li").eq(0).remove();
              };

              if(objA === objB){
                console.log("喵先生提示您：这两个图案是一样的，恭喜你！");
                $(".deck li").removeClass("open show");

                $(".deck li").eq(index1).addClass("match animated bounce");
                $(".deck li").eq(index2).addClass("match animated bounce");

                setTimeout(function(){
                  $(".deck li").removeClass("animated bounce");
                },1000);

              } else {
                console.log("喵先生提示您：哎呀！这两个图案长得不一样。");
                $(".deck li").removeClass("open show");

                $(".deck li").eq(index1).addClass("wrong animated wobble");
                $(".deck li").eq(index2).addClass("wrong animated wobble");

                setTimeout(function(){
                  $(".deck li").removeClass("wrong animated wobble");
                },1000);
              };

              // 通关
              var lenAll = $(".match").length;
              setTimeout(function(){
                if (lenAll === 16) {
                  console.log("喵先生提示您：恭喜你！你已经完成所有通过。");
                  clearTimeout(t);
                  $(".bomb-box").css("display","block");
                  $(".box").addClass("animated bounceIn");
                  boxVal();
                };
              },1000);


              break;
            default:;
            }

        };

    });


    // 重新启动
    $(".restart").on("click", function(){
      clearCount();
    });

    // 点击关闭弹框
    $(".btn-again").on("click", function(){
      $(".box").removeClass("animated bounceIn").addClass("animated bounceOut");
      setTimeout(function(){
        $(".bomb-box").css("display","none");
      },1000);

      clearCount();
    });

});

// 计时器
var c=1;
var t;
function timedCount() {
  $('.times').html(c + ' second');
  c = c + 1;
  t = setTimeout("timedCount()",1000);
};

// 清除计时器
function clearCount() {
  c = 1;

  // 复原
  $(".score-panel .stars").html('<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>');
  $('.times').html('0 second');
  $('.moves').html('0');
  $(".deck li").removeClass("open show match");

  time = true;
  clearTimeout(t);
  shuffle(array);

};


// 弹框赋值
function boxVal(){
  var a = $(".score-panel .stars").html();
  var b = $(".moves").html();
  var c = $(".times").html();

  $('.boxUl li[val="1"]').children(".stars").html(a);
  $('.boxUl li[val="2"]').html('Moves: ' + b);
  $('.boxUl li[val="3"]').html('Times: ' + c);
};

// 数组
var array = [
    "fa-diamond","fa-diamond",
    "fa-paper-plane-o","fa-paper-plane-o",
    "fa-anchor","fa-anchor",
    "fa-bolt","fa-bolt",
    "fa-cube","fa-cube",
    "fa-leaf","fa-leaf",
    "fa-bicycle","fa-bicycle",
    "fa-bomb","fa-bomb"
];

// 洗牌
function shuffle(array) {
  // currentIndex = 16;
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        //输出1～16之间的随机整数
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // 重新赋值
        $(".deck .card").eq(currentIndex).children("i").attr("class", "fa " + array[randomIndex]);

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
