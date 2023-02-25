// Geolocation API

function geoFindMe() {

    const status = document.querySelector('#status');

    // <button id="find-me">Show my location</button><br />
    // <p id="status"></p> <<Used in HTML file for status messages

    // Gets the latitude/longitude of the user
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        geoCoords = [latitude,longitude];
        status.textContent = '';
        // console.log(geoCoords);
        
    }
   
    // Error messages in case API is not able to determine coords of user
    function error() {
        status.textContent = 'Unable to retrieve your location';
      }
    
      if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
      } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
      }
  };
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);
  