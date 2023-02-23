const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;

passport.use(new OAuth2Strategy({
  authorizationURL: 'https://app.youneedabudget.com/oauth/authorize',
  tokenURL: 'https://app.youneedabudget.com/oauth/token',
  clientID: process.env.YNAB_CLIENT_ID,
  clientSecret: process.env.YNAB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/callback',
  scope: 'read-only', 
}, (accessToken, refreshToken, profile, done) => {

}));
