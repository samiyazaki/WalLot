const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../../controllers/api/authController');

router.get('/ynab/auth', passport.authenticate('oauth2'));

router.get('/ynab/auth/callback',
  passport.authenticate('oauth2', { failureRedirect: '/login' }),
  authController.handleCallback);

module.exports = router;
