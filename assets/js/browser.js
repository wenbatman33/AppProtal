$(document).ready(function() {
	var isIE = navigator.userAgent.search("MSIE") > -1;
	var isIE6 = navigator.userAgent.search("MSIE 6") > -1;
	var isIE7 = navigator.userAgent.search("MSIE 7") > -1;
	var isIE8 = navigator.userAgent.search("MSIE 8") > -1;
	var isIE9 = navigator.userAgent.search("MSIE 9") > -1;
	var isFirefox = navigator.userAgent.search("Firefox") > -1;
	var isOpera = navigator.userAgent.search("Opera") > -1;
	var isSafari = navigator.userAgent.search("Safari") > -1;
	 //Google瀏覽器是用這核心
	if (isIE6) {
		$('#loadCss').attr("href", "assets/css/ie6.css");
		$('.userAgent').html("<h1>這是ie6</h1>");
	}
	if (isIE7) {
		$('#loadCss').attr("href", "assets/css/ie7.css");
		// var txt="<h1>這是ie7</h1>";
		// txt+="<h2>這是ie7</h2>";
		// txt+="<h3>這是ie7</h3>";
		$('.mouse').html("<img src='assets/images/scroll.png'>");
		$('.appDLA').html("<img src='assets/images/dlApple.png'>");
		$('.appDLB').html("<img src='assets/images/dlAndroid.png'>");
		$('.appDLA1').html("<img src='assets/images/dlAppleWhite.png'>");
		$('.appDLB1').html("<img src='assets/images/dlAndroidWhite.png'>");
		$('.appDLA2').html("<img src='assets/images/dlAppleGreen.png'>");
		$('.appDLB2').html("<img src='assets/images/dlAndroidGreen.png'>");
		$('.appDLA3').html("<img src='assets/images/dlAppleDark.png'>");
		$('.appDLB3').html("<img src='assets/images/dlAndroidDark.png'>");
		$('.appDLA4').html("<img src='assets/images/dlAppleBlue.png'>");
		$('.appDLB4').html("<img src='assets/images/dlAndroidBlue.png'>");
		$('.socialFb').html("<img src='assets/images/social_fb.png'>");
		$('.socialYT').html("<img src='assets/images/social_YT.png'>");
		$('.socialBlog').html("<img src='assets/images/social_blog.png'>");
		$('.socialTV').html("<img src='assets/images/social_TV.png'>");
	}
	if (isIE8) {
		$('.mouse').html("<img src='assets/images/scroll.png'>");
		$('.appDLA').html("<img src='assets/images/dlApple.png'>");
		$('.appDLB').html("<img src='assets/images/dlAndroid.png'>");
		$('.appDLA1').html("<img src='assets/images/dlAppleWhite.png'>");
		$('.appDLB1').html("<img src='assets/images/dlAndroidWhite.png'>");
		$('.appDLA2').html("<img src='assets/images/dlAppleGreen.png'>");
		$('.appDLB2').html("<img src='assets/images/dlAndroidGreen.png'>");
		$('.appDLA3').html("<img src='assets/images/dlAppleDark.png'>");
		$('.appDLB3').html("<img src='assets/images/dlAndroidDark.png'>");
		$('.appDLA4').html("<img src='assets/images/dlAppleBlue.png'>");
		$('.appDLB4').html("<img src='assets/images/dlAndroidBlue.png'>");
		$('.socialFb').html("<img src='assets/images/social_fb.png'>");
		$('.socialYT').html("<img src='assets/images/social_YT.png'>");
		$('.socialBlog').html("<img src='assets/images/social_blog.png'>");
		$('.socialTV').html("<img src='assets/images/social_TV.png'>");
	}
	if (isIE9) {
		$('.mouse').html("<img src='assets/images/scroll.png'>");
		$('.appDLA').html("<img src='assets/images/dlApple.png'>");
		$('.appDLB').html("<img src='assets/images/dlAndroid.png'>");
		$('.appDLA1').html("<img src='assets/images/dlAppleWhite.png'>");
		$('.appDLB1').html("<img src='assets/images/dlAndroidWhite.png'>");
		$('.appDLA2').html("<img src='assets/images/dlAppleGreen.png'>");
		$('.appDLB2').html("<img src='assets/images/dlAndroidGreen.png'>");
		$('.appDLA3').html("<img src='assets/images/dlAppleDark.png'>");
		$('.appDLB3').html("<img src='assets/images/dlAndroidDark.png'>");
		$('.appDLA4').html("<img src='assets/images/dlAppleBlue.png'>");
		$('.appDLB4').html("<img src='assets/images/dlAndroidBlue.png'>");
		// $('.socialFb').html("<img src='assets/images/social_fb.png'>");
		// $('.socialYT').html("<img src='assets/images/social_YT.png'>");
		// $('.socialBlog').html("<img src='assets/images/social_blog.png'>");
		// $('.socialTV').html("<img src='assets/images/social_TV.png'>");
	}
	if (isFirefox) {}
	if (isOpera) {}
	if (isSafari) {}
});
