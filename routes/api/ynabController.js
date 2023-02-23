const express = require('express');
const router = express.Router();
const ynabController = require('../../controllers/ynabController');

router.get('/ynab/budgets/:budget_id/categories', ynabController.getCategories);

module.exports = router;