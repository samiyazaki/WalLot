const ynab = require('ynab');

const accessToken = process.env.YNAB_API_KEY;
const ynabAPI = new ynab.API(accessToken);

exports.getCategories = (req, res) => {
    ynabAPI.categories.getCategories(req.params.budget_id)
      .then(data => {
        res.json(data.data.category_groups);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send('Error retrieving YNAB data');
      });
  };
  