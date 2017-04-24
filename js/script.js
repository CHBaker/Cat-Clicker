var ViewModel = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Marbles');
	this.imgSrc = ko.observable('images/marbles.jpg');

	this.increment = function () {
		this.clickCount(this.clickCount() + 1);
	}

}

ko.applyBindings(new ViewModel());
