/* 
* @Author: liyu
* @Date:   2016-02-18 09:54:47
* @Last Modified by:   liyu
* @Last Modified time: 2016-02-19 00:02:15
*/

'use strict';
window.onload = function() {
  var elements = document.querySelectorAll(".skill-level");
  // console.log(elements[0]);
  // levelAnimate(elements[0]);
  for (var i = 0; i< elements.length; i++) {
    levelAnimate(elements[i]);
  }
}
function levelAnimate(element) {
  var value = element.getAttribute("data-level");
  var children = element.querySelector("div");
  function animate(x) {
    children.style.width = x + "%";
    if (x < value) {
      setTimeout(function(){
        animate(x+2);
      },16)
    }
  }
  animate(0);
}



window.onload = function(){
	var data,nanvar=$(".pro_ulist li").length,page=0;
	$(".rightb .rightb1:first").show();
	$(".pro_ulist li:first").css("background","rgb(36,146,108)");
	$(".pro_ulist li:first").css("color","rgba(0,0,0,0.6)");
	$(".pro_ulist li").click(function(){
		if($(this).index==page)
					{
						return;
					}
		$(this).css("color","rgba(0,0,0,0.6)").siblings().css("color","rgba(255,255,255,0.8)");
		$(this).css("background","rgb(36,146,108)").siblings().css("background","rgba(102,204,153,0.8)");
		page=$(this).index();
		$(".rightb .rightb1,.rightb2,.rightb3,.rightb4").eq(page).show().siblings().hide();
		
	});
	$(".pro_ulist li").hover(function(){
		if($(this).index==page)
					{
						return;
					}
		$(this).css("color","rgba(0,0,0,0.6)").siblings().css("color","rgba(255,255,255,0.8)");
		$(this).css("background","rgb(36,146,108)").siblings().css("background","rgba(102,204,153,0.8)");
		page=$(this).index();
		$(".rightb .rightb1,.rightb2,.rightb3,.rightb4").eq(page).show().siblings().hide();
		
	});
	data = setInterval(function(){
		
		var contPage = (page+1)%nanvar;
		$(".pro_ulist li").eq(contPage).click();
		
	},3000);
	$(".pro_ulist li").hover(function(){
		clearInterval(data);
	},function(){
		data = setInterval(function(){
		
		var contPage = (page+1)%nanvar;
		$(".pro_ulist li").eq(contPage).click();
		
	},3000);
	})
	$(".rightb").hover(function(){
		clearInterval(data);
	},function(){
		data = setInterval(function(){
		
		var contPage = (page+1)%nanvar;
		$(".pro_ulist li").eq(contPage).click();
		
	},3000);
	})
}	











