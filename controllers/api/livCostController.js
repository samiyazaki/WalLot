// For Cost of Living And Prices API

var getEstimateDetails = function() {
    var apiUrl = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${user.city}&country_name=${user.country}`;
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

getEstimateDetails();


// function fetchLivCostAPI () {
//     var randomI = Math.floor(Math.random() * 5);

//     if (randomI === 0) {
//         var livCostKey = `eb20056e8dmshc15d6f3b5147c76p155411jsn203e72dd3ef7`;
//     } else if (randomI === 1) {
//         var livCostKey = `5075fa32f5msh2d37ef7bc1f9242p1fc222jsn8d4befb79511`;
//     } else if (randomI === 2) {
//         var livCostKey = `c1daaca95fmsh83f9d0d2ef037d3p1f2ffcjsne92a4e0eb668`;
//     } else if (randomI === 3) {
//         var livCostKey = `b8ed47b733mshc84c976ee485a62p135a7ajsn79ad6644b71b`;
//     } else {
//         var livCostKey = `2d35a3bacemshb41eff6b3608d3ap1dec53jsn9ff85df0766b`;
//     };

// }











