// $(document).ready( function() {
// 	$('#cat1 #name').text("Lil' Benny");
// 	$('#cat2 #name').text("Killa' Kyle");

// 	function Cat(elem, name, score, img) {
// 		this.elem = elem;
// 		this.name = name;
// 		this.score = score;
// 		this.img = img;
// 	};

// 	cat1 = new Cat('#cat1', "Lil' Benny", 0, "http://egotvonline.com/wp-content/uploads/2012/12/Cute-lion.jpg");
// 	cat2 = new Cat('#cat2', "Killa' Kyle", 0, "https://s-media-cache-ak0.pinimg.com/564x/f0/f3/a0/f0f3a07427d528232f5fdd3d2c1e46a5.jpg");
// 	cat3 = new Cat('#cat3', "Kalifa", 0, "http://orig06.deviantart.net/c29b/f/2011/063/4/0/cute_baby_hunter_by_woxys-d3awuft.jpg");
// 	cat4 = new Cat('#cat4', "Bobby B.", 0, "https://s-media-cache-ak0.pinimg.com/736x/fb/e5/05/fbe5050b6a52a05ffbe9cb7ffb012bae.jpg");
// 	cat5 = new Cat('#cat5', "Multigrain", 0, "http://www.cutestpaw.com/wp-content/uploads/2012/08/Snoopy-049.jpg");
// 	cat6 = new Cat('#cat6', "Marbles", 0, "images/marbles.jpg")

// 	var list = [cat1, cat2, cat3, cat4, cat5, cat6];

// 	var currentCat = null

// 	function profileHandler (name, img, num) {
// 				return function () {
// 					currentCat = list[num];
// 					$('#name').text(name);
// 					$('img').attr('src', img);
// 					$('#count').text("SCORE - " + list[num].score);
// 				};
// 	}(name, img, score, [num]);

// 	function scoreHandler (cat) {
// 		cat.score++;
// 		$('#count').text("SCORE - " + cat.score);
// 	};

// 	// add a click function to display cat from catalog list
// 	for (var num = 0; num < list.length; num++) {
// 		var name = list[num].name;
// 		var img = list[num].img;
// 		var score = list[num].score;
// 		$('#catalog').append(
// 			'<li id="' + [num] + '">' + "<button>" + 
// 			name + "</button>" + "</li>");
// 		$('#' + [num]).click(
// 			profileHandler (name, img, [num]));
// 	};

// 	$('img').click(function() {
// 		scoreHandler(currentCat);
// 	});

// });



// Same app, format, and methods from Udacity

$(function () {

	// model
	var model = {
		currentCat: null,
		cats: [
			{
				name: "Lil' Benny", 
				count: 0,
				img: "http://egotvonline.com/wp-content/uploads/2012/12/Cute-lion.jpg"
			},
			{
				name: "Killa' Kyle", 
				count: 0, 
				img: "https://s-media-cache-ak0.pinimg.com/564x/f0/f3/a0/f0f3a07427d528232f5fdd3d2c1e46a5.jpg"
			},
			{
				name: "Kalifa", 
				count: 0, 
				img: "http://orig06.deviantart.net/c29b/f/2011/063/4/0/cute_baby_hunter_by_woxys-d3awuft.jpg"
			},
			{
				name: "Bobby B.", 
				count: 0, 
				img: "https://s-media-cache-ak0.pinimg.com/736x/fb/e5/05/fbe5050b6a52a05ffbe9cb7ffb012bae.jpg"
			},
			{
				name: "Multigrain", 
				count: 0, 
				img: "http://www.cutestpaw.com/wp-content/uploads/2012/08/Snoopy-049.jpg"
			},
			{
				name: "Marbles", 
				count: 0, 
				img: "images/marbles.jpg"
			}
		]
	};

	// contoller
	var octopus = {

		init: function () {
			// current cat set to first in list
			model.currentCat = model.cats[0];
			catListView.init();
			catView.init();
		},

		getCurrentCat: function () {
			return model.currentCat;
		},

		// set selected cat to object
		setCurrentCat: function (cat) {
			model.currentCat = cat;
		},

		getCats: function () {
			return model.cats;
		},

		increment: function () {
			model.currentCat.count++;
			catView.render();
		}
	};

	// view

	var catView = {

		init: function () {
			// DOM pointers
			this.catElem = $('#profile');
			this.catNameElem = $('#name');
			this.catImageElem = $('#img');
			this.countElem = $('#count');

			// img click count
			this.catImageElem.click(function () {
				octopus.increment();
			});

			// update catView
			this.render();
		},

		render: function () {
			// update DOM with currentCat
			var currentCat = octopus.getCurrentCat();
			this.countElem.text(currentCat.count);
			this.catNameElem.text(currentCat.name);
			this.catImageElem.attr('src', currentCat.img);
		}
	};

	var catListView = {

		init: function () {
			this.catListElem = $('#catalog');

			this.render();
			console.log('rendering... ... ...');
		},

		render: function () {
			var cat, elem, i;
			var cats = octopus.getCats();
			this.catListElem.innerHTML = '';

			console.log('html cleared');

			for (i = 0; i < cats.length; i++) {
				var cat = cats[i];
				console.log('for loop starting');

				// make a new cat list set
				var elem = ('<li>' + '<button id="' + i + '">' + 
							cat.name + '</button>' + '</li>');

				console.log('creating elem');

				// on click set current cat to match the list name selected

				console.log('elem click bind');

				// append cats to list with click event
				$('#catalog').append(elem);

				console.log('elem appended');

				$('#' + i).click(function (cat) {
					return function () {
						octopus.setCurrentCat(cat);
						catView.render();
					};
				}(cat));
			};
		}

	};

	// Start the program
	octopus.init();

});

