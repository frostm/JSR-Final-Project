//spotify
var client_id = '4b2c0e196691470592e7d96f7d4de59d'; // Your client id
var client_secret = '06c41e9a2db04dacadf10e6e7e6f7577'; // Your secret

var mainHeadline = document.querySelector('.main-content h1');



window.onload = function() {

// Connect to weather API

function connectToDarksky () {	

var darkskyRequest = new XMLHttpRequest();
	weatherLocation = '41.8781,-87.6298';
	
darkskyRequest.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6442aa0485c1e820626c77adfa9364f6/' + weatherLocation );
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



// function connectToNapster () {

// 	var napsterRequest = new XMLHttpRequest();
	
// napsterRequest.open('GET', 'https://api.napster.com//v2.2/genres?apikey=Yjk4MjE0NTAtZmE5Yi00NzY5LTljNWUtNzA2ZDI5NzQyYjNl');
// napsterRequest.send();

// function errorHandler() {
//   console.log('something went wrong');
// }

// function napsterContent () {
// 	var musicData = JSON.parse(napsterRequest.responseText);
// 	console.log (musicData);

// }


// napsterRequest.onerror = errorHandler;
// napsterRequest.onload = napsterContent;

// }

// connectToNapster();




// };


function connectToSpotify () {

	var spotifyRequest = new XMLHttpRequest();
	
spotifyRequest.open('GET', 'https://api.spotify.com/v1/albums/0TnOYISbd1XYRBk9myaseg/tracks');
spotifyRequest.send();

function errorHandler() {
  console.log('something went wrong');
}

function napsterContent () {
	var musicData = JSON.parse(spotifyRequest.responseText);
	console.log (musicData);

}


spotifyRequest.onerror = errorHandler;
spotifyRequest.onload = napsterContent;

}

connectToSpotify();



};
