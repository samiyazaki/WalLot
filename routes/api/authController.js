const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../../controllers/authController');

router.get('/auth/ynab', passport.authenticate('ynab'));

router.get('/auth/ynab/callback', passport.authenticate('ynab', { failureRedirect: '/login' }), 
authController.handleCallback);


module.exports = router;