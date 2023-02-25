const express = require('express');
const router = express.Router();
const { Finance } = require('../../models');
const withAuth = require('../../utils/auth');

// GET route to retrieve user's financial data
router.get('/data', withAuth, async (req, res) => {
  try {
    const financeData = await Finance.findAll({
      where: {
        user_id: req.session.user_id,
      },// logic to retrieve and return user's financial data
});

res.status(200).json(financeData);
} catch (err) {
  res.status(500).json(err);
}
});
// POST route to add new financial data
router.post('/data', withAuth, async (req, res) => {
  try {
    const newFinance = await Finance.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFinance);
  } catch (err) {
    res.status(400).json(err);
  } 
  // logic to add new financial data to the database
});

// PUT route to update financial data
router.put('/data/:id', (req, res) => {
  // logic to update financial data in the database
});

// DELETE route to delete financial data
router.delete('/data/:id', (req, res) => {
  // logic to delete financial data from the database
});

module.exports = router;
