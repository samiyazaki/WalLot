var lat;
var long; 
var city;
var country;


const successCallback = (position) => {
    console.log(position);
    lat = position.coords.latitude;
    long = position.coords.longitude;

    console.log(long);
    console.log(lat);

    setTimeout(getEstimateDetails(long, lat), 3000);

}

const errorCallback = (error) => {
    console.log(error);
};
  
navigator.geolocation.getCurrentPosition(successCallback, errorCallback)

var getEstimateDetails = function() {
    var apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=AIzaSyAbc9mGWoNSF4mX8TA1ypEtVhKOfpicZNE';
    fetch(apiUrl, {
        method: 'GET',
    })
    .then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data){
                console.log(data);
                city = data.results[8].address_components[0].long_name;
                country = data.results[11].address_components[0].long_name
                getpricesDetails(city,country)

            });
        }
    });
  };


  var getpricesDetails = function() {
    var apiUrl = 'https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=' + city + '&country_name=' + country;
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5075fa32f5msh2d37ef7bc1f9242p1fc222jsn8d4befb79511',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
    })
    .then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data){
                console.log(data);
            });
        }
    });
  };
