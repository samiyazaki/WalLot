const express =- require('express');
const router = express.Router();
const zillowController= require('../../controllers/zillowController');

router.get('/search', zillowController.getSearchResults);

module.exports = router;