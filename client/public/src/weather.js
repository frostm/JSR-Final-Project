var mainHeadline = document.querySelector('.main-content h1');
var locationInput = document.getElementById('location-input');

let userInput = "";



// input to title case
String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};


window.onload = function() {

function handleClick() {
  userInput = locationInput.value;
  userInput.toTitleCase();
  console.log(userInput);


	function geoConnect () {

		const geoBaseURL = "https://api.opencagedata.com/geocode/v1/json?";
		const geoApiKey = "&key=81b73eb4c4844525be53747fe817b4fb";
		let geoLocation = "q=" + userInput;
		let geoLanguage = "&language=en&pretty=1";

		var geoRequest = new XMLHttpRequest();

		geoRequest.open('Get', geoBaseURL + geoLocation + geoApiKey + geoLanguage)
		geoRequest.send();

		function errorHandler() {
		  console.log('something went wrong');
		}

		function geoContent () {

			var geoData = JSON.parse(geoRequest.responseText);

			// define lat and long

			locationLatNum = geoData.results[0].geometry.lat,
			locationLngNum = geoData.results[0].geometry.lng;

			locationLat = locationLatNum.toString();
			locationLng = locationLngNum.toString();


			const baseURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
			const apiKey = "6442aa0485c1e820626c77adfa9364f6/";
			let	weatherLocation = locationLat + "," + locationLng;

			console.log(weatherLocation);

			
			//connect to DarkSky

			function connectToDarksky () {	

				var darkskyRequest = new XMLHttpRequest();

				darkskyRequest.open('GET', baseURL + apiKey + weatherLocation );
				darkskyRequest.send();

				function errorHandler() {
			  		console.log('something went wrong');
				}

				function weatherContent () {
					var weatherData = JSON.parse(darkskyRequest.responseText);
					console.log(weatherData);

					mainHeadline.innerText = `Currently in ` + userInput + ` it's ` + weatherData.currently.apparentTemperature + `°F`;
				}

				darkskyRequest.onerror = errorHandler;
				darkskyRequest.onload = weatherContent;
			}

			connectToDarksky();



		}


		geoRequest.onerror = errorHandler;
		geoRequest.onload = geoContent;


		}




	geoConnect();

	}

btn.addEventListener('click', handleClick);

}



