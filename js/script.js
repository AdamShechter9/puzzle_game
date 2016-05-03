function changeImage (imgN) {
	var $imageName = $(imgN);
	var altsrc1 = $imageName.attr('data-alt-src');
	var altsrctemp1 = $imageName.attr('src');
	$imageName.attr('src', altsrc1);
	$imageName.attr('data-alt-src', altsrctemp1);
}

function randomImg () {
	for (var i=1; i <= 15; i++) {
		var num1 = Math.floor ((Math.random() * 5) + 1);
		console.log("number = " + num1);
		var str1 = "#img" + num1.toString();	
		changeImage(str1);
	}
}

var main = function () 
{

	randomImg();

	$("img").click( function () {
		if ($(this).is("#img1")) {
			changeImage("#img1");
		}
		else if ($(this).is("#img2")) {
			changeImage("#img2");
		}
		else if ($(this).is("#img3")) {
			changeImage("#img3");
		}
		else if ($(this).is("#img4")) {
			changeImage("#img4");
		}
		else if ($(this).is("#img5")) {
			changeImage("#img5");
		};
		
	});



}


$(document).ready(main());