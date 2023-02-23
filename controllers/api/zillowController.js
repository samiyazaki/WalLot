//This is the controller for the Zillow API. If we can get a Zillow API key it will go into the .env file as zwsid

const axios = require('axios');
const zwsid = process.env.ZILLOW_API_KEY;

exports.getSearchResults = (req, res) => {
    const { address, citystatezip } = req.body;
    const url = `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${zwsid}&address=${address}&citystatezip=${citystatezip}`;
    axios.get(url)
        .then(response => {
        res.json(response.data);
        })
        .catch(error => {
        res.json(error);
        });
    };
