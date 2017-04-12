$(document).ready( function() {
	$('#cat1 #name').text("Lil' Benny");
	$('#cat2 #name').text("Killa' Kyle");

	var $count1 = 0;
	var $count2 = 0;

	$('#cat1').click( function() {
			$count1 ++;
			$('#count1').text($count1);
	});

	$('#cat2').click( function() {
			$count2 ++;
			$('#count2').text($count2);
	});
});