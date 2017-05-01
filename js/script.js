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

	// could use self = this to access viewmodel instead of binding context

	this.currentCat = ko.observable( new Cat({
		clickCount: 0, 
		name: 'Marbles',
		imgSrc: 'images/marbles.jpg',
		nickNames: ['Marbs',
				   'Mr. Marbles',
				   'Lay-Z Boi']
	}) );

	this.increment = function () {
		// self.currentCat().clickCount(...) 
		// accesses viewmodel instead of binding context
		this.clickCount(this.clickCount() + 1);
	};

};

ko.applyBindings(new ViewModel());
