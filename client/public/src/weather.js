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
}