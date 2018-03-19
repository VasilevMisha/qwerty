$(document).ready(function(){


	let city = $('.weather-city'),
		description = $('.weather-description'),
		wind = $('.weather-wind'),
		temp = $('.weather-temp'),
		btn = $('.js-btn'),
		input = $('.js-input');

	$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=498817&APPID=42b48587e1a4e48a2e14c453899f9cc4', function(result) {
		setWeatherData(result);
	});

	function setWeatherData(result) {
		city.text(result.name); 
		wind.text(result.wind.speed); 
		temp.text(result.main.temp); 
		description.text(result.weather[0].description);
	}

	btn.click(function() {
		$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + input.val() + '&APPID=42b48587e1a4e48a2e14c453899f9cc4', function(result) {
		setWeatherData(result);
	});
	})
});