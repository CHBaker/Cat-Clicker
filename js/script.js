var Cat = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Marbles');
	this.imgSrc = ko.observable('images/marbles.jpg');

	// list of what level the cat is, and how many clicks to achieve
	this.levels = [
		{ level: 'Piss-Ant', click: 10 }, { level: 'Hopper', click: 20 },
		{ level: 'Jumper', click: 30}, { level: 'Round House Kicker',
		click: 40 }, { level: 'Fireball Thrower', click: 50 }, 
		{ level: 'Inferno of Death and Laziness', click: 60}
	];

	// list of each cat's nicknames
	this.nickNames = ko.observableArray([
		{ nick: 'Marbs'}, 
		{ nick: 'Mr. Marbles'},
		{ nick: 'Ass Hat'}
	]);

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

	this.currentCat = ko.observable( new Cat() );

	this.increment = function () {
		// self.currentCat().clickCount(...) 
		// accesses viewmodel instead of binding context
		this.clickCount(this.clickCount() + 1);
	};

};

ko.applyBindings(new ViewModel());
