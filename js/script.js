var main = function () {
	$("img").click(function() {
		var altsrc1 = $(this).attr('data-alt-src');
		// console.log(altsrc1);
		var altsrctemp1 = $(this).attr('src');
		$(this).attr('src', altsrc1);
		$(this).attr('data-alt-src', altsrctemp1);
	})
}



$(document).ready(main());