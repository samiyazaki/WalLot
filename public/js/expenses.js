var lat;
var long; 
var city;
var country;
var cDisplay = document.getElementById('city');
var containerExpenses = document.getElementById('expenses');
var spinner = document.getElementById('spinner');


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
    var apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=AIzaSyB4_7fjEDvsekRq80BXDK22oITSYxZJtz4';
    fetch(apiUrl, {
        method: 'GET',
    })
    .then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data){
                console.log(data);
                city = data.results[8].address_components[0].long_name;
                country = data.results[11].address_components[0].long_name;
                cDisplay.textContent = ' ' + city;
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
                var hBuy = data.prices[0].avg;
                var hRent = data.prices[27].avg;
                var eatingOut = data.prices[34].max;
                var iRates = data.prices[52].max;
                var grocery = (data.prices[8].avg + data.prices[10].avg + data.prices[11].avg + data.prices[13].avg + data.prices[14].avg + data.prices[15].avg + data.prices[16].avg + data.prices[17].avg) * 3;

var estimateContainer = document.createElement('div');
estimateContainer.classList = 'card';

var listEl = document.createElement('ul');
listEl.classList = 'list-group list-group-flush';

estimateContainer.appendChild(listEl);

var hBuy_El = document.createElement('li');
hBuy_El.classList = 'list-group-item';
hBuy_El.textContent = 'Buy in City Centre - ' + '$' + hBuy + '(PSM)';

listEl.appendChild(hBuy_El);

var hRent_El = document.createElement('li');
hRent_El.classList = 'list-group-item';
hRent_El.textContent = 'Rent in City Centre - ' + '$' + hRent + '/monthly';

listEl.appendChild(hRent_El);

var eatingOut_El = document.createElement('li');
eatingOut_El.classList = 'list-group-item';
eatingOut_El.textContent = 'Meal for 2 - ' + '$' + eatingOut;


listEl.appendChild(eatingOut_El);

var iRates_El = document.createElement('li');
iRates_El.classList = 'list-group-item';
iRates_El.textContent = 'Mortgage Interest Rates - ' + iRates + '%';

listEl.appendChild(iRates_El);

var grocery_El = document.createElement('li');
grocery_El.classList = 'list-group-item';
grocery_El.textContent = 'Grocery for 1 - ' + '$' + grocery + '/weekly';

listEl.appendChild(grocery_El);

containerExpenses.appendChild(estimateContainer);

console.log(data);
            });
        }
    });
  };


  const expenseFormHandler = async (event) => {
    event.preventDefault();
  
    const expenses = document.querySelector('#expense-input').value.trim();
  
    if (expenses) {
  
      const response = await fetch('/api/expense', {
        method: 'POST',
        body: JSON.stringify({ expenses }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
  
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
  .querySelector('#expense-form')
  .addEventListener('submit', expenseFormHandler);