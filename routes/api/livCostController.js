const express =- require('express');
const router = express.Router();
const livCostController= require('../../controllers/livCostController');

router.get('/search', livCostController.getSearchResults);

module.exports = router;