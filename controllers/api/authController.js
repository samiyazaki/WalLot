const passport = require('passport');
const YnabStrategy = require('passport-ynab').Strategy;

passport.use(new YnabStrategy({ 
    clientID: process.env.YNAB_CLIENT_ID,
    clientSecret: process.env.YNAB_CLIENT_SECRET,
    callbackURL: process.env.YNAB_CALLBACK_URL,
    scope: 'read-only'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);
        done(null, profile);
    }));
    