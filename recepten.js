$(document).ready(function() {
	$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.ah.nl/allerhande/recepten-zoeken?Ntt=kaas') + '&callback=?', function(data){
		$('#main').load('data.contents #result-wrapper');
	});
});