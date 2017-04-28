var ViewModel = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Marbles');
	this.imgSrc = ko.observable('images/marbles.jpg');
	this.levels = ko.observableArray();

	// list of what level the cat is, and how many clicks to achieve
	this.levels.push([
		{ level: 'Piss-Ant', click: 0 }, { level: 'Hopper', click: 10 },
		{ level: 'Jumper', click: 20}, { level: 'Round House Kicker',
		click: 30 }, { level: 'Fireball Thrower', click: 40 }, 
		{ level: 'Inferno of Death and Laziness', click: 50}
	]);

	// change level based on clicks
	this.level = ko.computed(function () {
		for (var i = 0; i < this.levels().length; i++) {
			// if clicks == the click in the level
			if (this.clickCount() == this.levels()[i].click) {
				return this.levels()[i].level;
			}
		}
	}, this);

	this.increment = function () {
		this.clickCount(this.clickCount() + 1);
	}

}

ko.applyBindings(new ViewModel());
