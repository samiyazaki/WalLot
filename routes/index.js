const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.render('index', { title: 'WalLot' });
});

router.get('/budget', (req, res) => {
  res.render('budget', { title: 'Budget' });
});

router.post('/budget', (req, res) => {
  // Handle budget form submission here
});

router.get('/goals', (req, res) => {
  res.render('goals', { title: 'Goals' });
});

router.post('/goals', (req, res) => {
  // Handle goals form submission here
});

router.get('/recommendations', (req, res) => {
  res.render('recommendations', { title: 'Recommendations' });
});

// Export the router
module.exports = router;
