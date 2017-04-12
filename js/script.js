$(document).ready( function() {
	$('#cat1 #name').text("Lil' Benny");
	$('#cat2 #name').text("Killa' Kyle");

	var list = ['#cat1', '#cat2'];

	for (var num = 0; num < list.length; num++) {
		var cat = list[num];
		var count = 0

		$(cat).click( function(cat, count, num) {
			return function() {
				count ++;
				$(cat + ' #count' + (num + 1)).text(count);
				console.log(cat)
			};
		}(cat, count, num));

	};
});