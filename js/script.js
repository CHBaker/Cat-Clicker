$(document).ready( function() {
	$('#cat1 #name').text("Lil' Benny");
	$('#cat2 #name').text("Killa' Kyle");

	function Cat(elem, name, score, img) {
		this.elem = elem;
		this.name = name;
		this.score = score;
		this.img = img;
	};

	cat1 = new Cat('#cat1', "Lil' Benny", 0, "http://egotvonline.com/wp-content/uploads/2012/12/Cute-lion.jpg");
	cat2 = new Cat('#cat2', "Killa' Kyle", 0, "https://s-media-cache-ak0.pinimg.com/564x/f0/f3/a0/f0f3a07427d528232f5fdd3d2c1e46a5.jpg");
	cat3 = new Cat('#cat3', "Kalifa", 0, "http://orig06.deviantart.net/c29b/f/2011/063/4/0/cute_baby_hunter_by_woxys-d3awuft.jpg");
	cat4 = new Cat('#cat4', "Bobby B.", 0, "https://s-media-cache-ak0.pinimg.com/736x/fb/e5/05/fbe5050b6a52a05ffbe9cb7ffb012bae.jpg");
	cat5 = new Cat('#cat5', "Multigrain", 0, "http://www.cutestpaw.com/wp-content/uploads/2012/08/Snoopy-049.jpg");

	var list = [cat1, cat2, cat3, cat4, cat5];

	// function handler(name, img, score) {
	// 			$('#name').text(name);
	// 			$('#img').attr('src', img);
	// 			$('#count').text(score);
	// }

	// add a click function to display cat from catalog list
	for (var num = 0; num < list.length; num++) {
		var name = list[num].name;
		var img = list[num].img;
		var score = list[num].score;
		$('#catalog').append("<li>" + name + "</li>").click(
			function (name, img, score) {
				return function () {
					$('#name').text(name);
					$('#img').attr('src', img);
					$('#count').text(score);;
				};
		}(name, img, score));
	};


	// for (var num = 0; num < list.length; num++) {
	// 	var cat = list[num];
	// 	var count = 0;

	// 	$(cat).click( function(cat, count, num) {
	// 		return function() {
	// 			count ++;
	// 			$(cat + ' #count' + (num + 1)).text(count);
	// 			console.log(cat);
	// 		};
	// 	}(cat, count, num));

	// };
});


