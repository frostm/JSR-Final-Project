var mainHeadline = document.querySelector('.main-content h1');



window.onload = function() {

// Connect to weather API

function connectToDarksky () {	

var darkskyRequest = new XMLHttpRequest();
	
darkskyRequest.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6442aa0485c1e820626c77adfa9364f6/41.8781,-87.6298');
darkskyRequest.send();

function errorHandler() {
  console.log('something went wrong');
}

function weatherContent () {
	var weatherData = JSON.parse(darkskyRequest.responseText);
	console.log(weatherData);

	mainHeadline.innerText = `Currently in Chicago it's ` + weatherData.currently.apparentTemperature + '°F';
}


darkskyRequest.onerror = errorHandler;
darkskyRequest.onload = weatherContent;

}
connectToDarksky();



function connectToSpotify () {

var client_id = '4b2c0e196691470592e7d96f7d4de59d'; // Your client id
var client_secret = '06c41e9a2db04dacadf10e6e7e6f7577'; // Your secret
var redirect_uri = ''; // Your redirect uri

var spotifyRequest = new XMLHttpRequest();
	
spotifyRequest.open('GET', 'https://api.spotify.com/v1/tracks/4b2c0e196691470592e7d96f7d4de59d/BQDgKXK2anzIZ2YAC69vcVIDS5q1-jb_3MdamIb4hZMAm88Ozq-Q-VlTuQcZF6AD1RB96yomRR1iDjCDfKBP7kWeNtoBoDt9jI9r1AsTvWA-sHckWbKvLfYOtblHDM2ZEKs4B-HO-i_QK_s');
spotifyRequest.send();

function errorHandler() {
  console.log('something went wrong');
}

function weatherContent () {
	var spotifyData = JSON.parse(spotifyRequest.responseText);
	console.log(spotifyData);
}


spotifyRequest.onerror = errorHandler;
spotifyRequest.onload = weatherContent;

}

connectToSpotify();



};

