'use strict';


$(document).ready(function(){
    $(".show_tea_mocha").mouseover(function(){
      $(".teatime_mocha").removeClass('hidden');
    });
    $(".show_tea_mocha").mouseout(function(){
      $(".teatime_mocha").addClass('hidden');
    });
  });
  

  $(document).ready(function(){
    $(".show_tea_chai").mouseover(function(){
      $(".teatime_chai").removeClass('hidden');
    });
    $(".show_tea_chai").mouseout(function(){
      $(".teatime_chai").addClass('hidden');
    });
  });

  $(document).ready(function(){
    $(".show_tea_matcha").mouseover(function(){
      $(".teatime_matcha").removeClass('hidden');
    });
    $(".show_tea_matcha").mouseout(function(){
      $(".teatime_matcha").addClass('hidden');
    });
  });
  
//

//logoの表示
$(window).on('load',function(){
	$("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

