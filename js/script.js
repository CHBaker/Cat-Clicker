var initialCats = [
	{
		name: "Lil' Benny", 
		clickCount: 0,
		imgSrc: "http://egotvonline.com/wp-content/uploads/2012/12/Cute-lion.jpg",
		nickNames: ['Ben', 'Ben there', 'B-Dawg']
	},
	{
		name: "Killa' Kyle", 
		clickCount: 0, 
		imgSrc: "https://s-media-cache-ak0.pinimg.com/564x/f0/f3/a0/f0f3a07427d528232f5fdd3d2c1e46a5.jpg",
		nickNames: ['Kylo Ren', 'oKAY', 'Kay']
	},
	{
		name: "Kalifa", 
		clickCount: 0, 
		imgSrc: "http://orig06.deviantart.net/c29b/f/2011/063/4/0/cute_baby_hunter_by_woxys-d3awuft.jpg",
		nickNames: ['Whiz', 'Kali', 'Kali fornia dreamin']
	},
	{
		name: "Bobby B.", 
		clickCount: 0, 
		imgSrc: "https://s-media-cache-ak0.pinimg.com/736x/fb/e5/05/fbe5050b6a52a05ffbe9cb7ffb012bae.jpg",
		nickNames: ['Bob', 'Boba', 'Bee Boi']
	},
	{
		name: "Multigrain", 
		clickCount: 0, 
		imgSrc: "http://www.cutestpaw.com/wp-content/uploads/2012/08/Snoopy-049.jpg",
		nickNames: ['Grain', 'Healthy Choice', 'Bread Boi']
	},
	{
		name: "Marbles", 
		clickCount: 0, 
		imgSrc: "images/marbles.jpg",
		nickNames: ['Marbs', 'Mr. Marbles', 'Lay-Z Boi']
	}
];


var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);

	// list of what level the cat is, and how many clicks to achieve
	this.levels = [
		{ level: 'Piss-Ant', click: 10 }, { level: 'Hopper', click: 20 },
		{ level: 'Jumper', click: 30}, { level: 'Round House Kicker',
		click: 40 }, { level: 'Fireball Thrower', click: 50 }, 
		{ level: 'Inferno of Death and Laziness', click: 60}
	];

	// list of each cat's nicknames
	this.nickNames = ko.observableArray(data.nickNames);

	// change level based on clicks
	this.level = ko.computed(function () {
		for (var i = 0; i < this.levels.length; i++) {
			// if clicks == the click in the level
			if (this.clickCount() <= this.levels[i].click) {
				return "Level :: " + this.levels[i].level;
			}
		}
	}, this);
};

var ViewModel = function () {

	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function (catItem) {
		self.catList.push( new Cat (catItem) );
	})

	this.currentCat = ko.observable( this.catList()[0] );

	// $data passed in as cat (cat object)
	this.changeCurrentCat = function (clickedCat) {
		self.currentCat(clickedCat);
	}

	// could use self = this to access viewmodel instead of binding context
	this.increment = function () {
		// self.currentCat().clickCount(...) 
		// accesses viewmodel instead of binding context
		this.clickCount(this.clickCount() + 1);
	};

};

ko.applyBindings(new ViewModel());
