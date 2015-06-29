dreq.register("saludo",{
	paths: {
		"jquery":"jquery-2.1.4.min",
		"alert.hola":"alert.hola"
	},
	map: {
		'*': {
			'jquery': 'jquery-noconflict',
		},
		'jquery-noconflict': { 'jquery': 'jquery' }
	}
})

dreq.register("despedida",{
	paths: {
		"jquery":"jquery-1.11.3.min",
		"alert.chau":"alert.chau"
	},
	map: {
		'*': {
			'jquery': 'jquery-noconflict',
		},
		'jquery-noconflict': { 'jquery': 'jquery' }
	}
})

dreq.define("saludo","alert.hola",["jquery"], function ($) {
	var showAlert = function() {
		console.log("component: " + $.fn.jquery);
		alert("hola! soy el alert.hola");
	}

	return { 
		show: showAlert
 	}
});

dreq.define("despedida","alert.chau", ["jquery"], function ($) {
	var showAlert = function() {
		console.log("component: " + $.fn.jquery);
		alert("me despido! soy el alert.chau");
	}

	return { 
		show: showAlert
 	}
});

