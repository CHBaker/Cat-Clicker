var ViewModel = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Marbles');
	this.imgSrc = ko.observable('images/marbles.jpg');
	this.levels = ko.observableArray();
	this.levels.push('Piss-Ant', 'Hopper', 'Jumper', 
		'Round House Kicker', 'Fireball Thrower', 
		'Inferno of Death and Laziness');
	this.levelTrack = ko.observable(0);

	this.level = ko.computed(function () {
		if (this.clickCount() < 10) {
			return this.levels()[0];
		} else {
			return this.levels()[1];
		}
	}, this);

	this.increment = function () {
		this.clickCount(this.clickCount() + 1);
	}

}

ko.applyBindings(new ViewModel());
