$(document).ready(function() {
	//圓圈內容
	// setTimeout(function(){
	// 	$(".loading").addClass('loadingAction');
	// },3000);
	setTimeout(function(){
		$(".loading").animate({top:'-200%'},1500,'easeInCirc');
	},2000);
	setTimeout(function(){
		$("body").css('position','relative');
	},3500);
	setTimeout(function(){
		$("body").css('overflow-y','auto');
	},4000);
	setTimeout(function(){
		$(".loading").css('display','none');
	},4000);
	// setTimeout(function(){
	// 	$(".nav").addClass('navAction');
	// },3500);
	setTimeout(function(){
		$(".nav").animate({top:'0'},800,'easeOutCubic');
	},4000);
	setTimeout(function(){
		$(".main").animate({top:'50%', opacity:'1'},1000,'easeOutCubic');
	},3000);
	setTimeout(function(){
		$(".mouse").animate({opacity:'1'},1000,'easeOutCubic');
	},6500);
	setTimeout(function(){
		$(".slicknav_menu").animate({top:'0'},1000,'easeOutCubic');
	},3500);
	$('.videoPlay').click(function(){
		$('<div class="videoHH"><div class="videoWrapper"><div class="videoContent"><div class="button"><span class="lines"></span></div><iframe src="//www.youtube.com/embed/HL8YMcgIsUU?autoplay=1" frameborder="0"></iframe></div></div></div>').prependTo('body');
		$('body').css('position','fixed');
	});

 setInterval( function() {
 var seconds = new Date().getSeconds();
 var sdegree = seconds * 6;
 var srotate = "rotate(" + sdegree + "deg)";

 $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

 }, 1000 );


 setInterval( function() {
 var hours = new Date().getHours();
 var mins = new Date().getMinutes();
 var hdegree = hours * 30 + (mins / 2);
 var hrotate = "rotate(" + hdegree + "deg)";

 $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});

 }, 1000 );


 setInterval( function() {
 var mins = new Date().getMinutes();
 var mdegree = mins * 6;
 var mrotate = "rotate(" + mdegree + "deg)";

 $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});

 }, 1000 );
	// $(".loading").fadeIn(6000, function(){
	// 	$(this).addClass('kvActive');
	// });
	//
	//圓圈在動態完後 開始彈跳迴圈
	// $(document).ready(function() {
	// $('.circleG').addClass('action').delay(7000)
	// 	function animateDivers(){
	// 		$('.action').delay(1000).animate({top:'55%'},500,'easeInQuart')
	// 								 .animate({top:'50%'},500,'easeOutQuart', animateDivers)
	// 			}
	// 	animateDivers();
	//
	// $('.scroll').delay(7500).animate({opacity:'1'})
	// $('.mouse').delay(8000).animate({opacity:'1'})
	// $('.mouse div').delay(8500).animate({opacity:'1'})
	// });

	//點擊滑到指定位置
	// $('.down').click(function(){
	// 	$('html, body').animate({
	// 		scrollTop: $(".h2").offset().top
	// 			}, 1000);
	// 		});
	// $('.nextToh3').click(function(){
	// 	$('html, body').animate({
	// 		scrollTop: $(".h3").offset().top
	// 			}, 1000);
	// 		});







	// $(".aaaa").delay( 800 ).fadeIn(100).animate({
	// //top: '0px',
	// //left: '0px',
	// //width: '100px',
	// //height: '100px'
	// }, 1000,'easeOutBounce'
	// );

	// 替换class达到淡入淡出的效果
	function fadeIn(e) {
	  e.className = "bg fadein";
	}

	function fadeOut(e) {
	  e.className = "bg fadeout";
	}
	//申明图片数组中当前的轮播图片
	cur_img = document.getElementById("imgs").children.length - 1;
	//图片轮播函数
	function turnImgs(imgs) {
	  var imgs = document.getElementById("imgs").children;
	  if (cur_img == 0) {
	    fadeOut(imgs[cur_img]);
	    cur_img = imgs.length - 1;
	    fadeIn(imgs[cur_img]);
	  } else {
	    fadeOut(imgs[cur_img]);
	    fadeIn(imgs[cur_img - 1]);
	    cur_img--;
	  }
	}
	//设置轮播间隔
	setInterval(turnImgs, 10000);
});

$(document).on("click", ".videoContent .button", function(){
   $(this).parents('div.videoHH').remove();
	 $('body').css('position','relative');
});
$(document).on("click", ".navbtnA", function(){
		$('html,body').animate({
				scrollTop: $(".epaperPlace").offset().top},
				'slow');
						$('.slicknav_btn').click();
});
$(document).on("click", ".navbtnB", function(){
		$('html,body').animate({
				scrollTop: $(".tutormobilePlace").offset().top},
				'slow');
						$('.slicknav_btn').click();
});
$(document).on("click", ".navbtnC", function(){
		$('html,body').animate({
				scrollTop: $(".tutorABCJrPlace").offset().top},
				'slow');
						$('.slicknav_btn').click();
});
$(document).on("click", ".navbtnD", function(){
		$('html,body').animate({
				scrollTop: $(".testTrainerPlace").offset().top},
				'slow');
						$('.slicknav_btn').click();
});
$(document).on("click", ".navbtnE", function(){
		$('html,body').animate({
				scrollTop: $(".archivesPlace").offset().top},
				'slow');
						$('.slicknav_btn').click();
});
$(document).on("click", ".navbtnAs", function(){
		$('html,body').animate({
				scrollTop: $(".epaperPlace").offset().top},
				'slow');
});
$(document).on("click", ".navbtnBs", function(){
		$('html,body').animate({
				scrollTop: $(".tutormobilePlace").offset().top},
				'slow');
});
$(document).on("click", ".navbtnCs", function(){
		$('html,body').animate({
				scrollTop: $(".tutorABCJrPlace").offset().top},
				'slow');
});
$(document).on("click", ".navbtnDs", function(){
		$('html,body').animate({
				scrollTop: $(".testTrainerPlace").offset().top},
				'slow');
});
$(document).on("click", ".navbtnEs", function(){
		$('html,body').animate({
				scrollTop: $(".archivesPlace").offset().top},
				'slow');
});
$(document).on("click", ".navbtnAb", function(){
		$('html,body').animate({
				scrollTop: $(".epaperPlace").offset().top},
				'slow');
});
$(document).on("click", ".navbtnBb", function(){
		$('html,body').animate({
				scrollTop: $(".tutormobilePlace").offset().top},
				'slow');
});
$(document).on("click", ".navbtnCb", function(){
		$('html,body').animate({
				scrollTop: $(".tutorABCJrPlace").offset().top},
				'slow');
});
$(document).on("click", ".navbtnDb", function(){
		$('html,body').animate({
				scrollTop: $(".testTrainerPlace").offset().top},
				'slow');
});
$(document).on("click", ".navbtnEb", function(){
		$('html,body').animate({
				scrollTop: $(".archivesPlace").offset().top},
				'slow');
});
$(window).scroll(function() {
    if ($(".nav").offset().top > 50) {
        $(".nav").addClass("navChange");
    } else {
        $(".nav").removeClass("navChange");
    }
});
// $(window).scroll(function() {
//     if ($(".feedback").offset().top >= 0) {
// 			console.log("oh ya3");
//         $(".feedbackImg").addClass("navChange");
//     } else {
//         $(".feedbackImg").removeClass("navChange");
//     }
// });
$(function(){
  var $elems = $('.animate');
  var winheight = $(window).height();
  var fullheight = $(document).height();

  $(window).scroll(function(){
    animate_elems();
  });

  function animate_elems() {
    wintop = $(window).scrollTop(); // calculate distance from top of window

    // loop through each item to check when it animates
    $elems.each(function(){
      $elm = $(this);

      if($elm.hasClass('animation')) { return true; } // if already animated skip to the next item

      topcoords = $elm.offset().top; // element's distance from top of page in pixels

      if(wintop > (topcoords - (winheight * 0.75))) {
        // animate when top of the window is 3/4 above the element
        $elm.addClass('animation');
      }
    });
  } // end animate_elems()
});
// $(window).scroll(function() {
// 	if ($(this).scrollTop() > 50){
// 			$('.nav').animate({
// 				backgroundColor:'#4285F4',
// 			});
// 			}
// 			 if ($(this).scrollTop() < 50){
// 					$('.nav').animate({
// 						backgroundColor:'#fff',
// 					});
// 					}
// });
