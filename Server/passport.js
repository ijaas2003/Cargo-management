const GoogleStrategy = require("passport-google-oauth2").Strategy;
const Passport = require('passport');

Passport.use(
    new GoogleStrategy(
        {
            clientID:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET_ID,
            callbackURL:process.env.CLIENT_URL,
            scope:["profile","email"],
        },
        function(accessToken,refreshToken,profile,callback){
            callback(null,profile);
        }
    )
);
Passport.serializeUser((user,done) => {
    done(null,user);
})
Passport.deserializeUser((user,done) => {
    done(null,user);
})
