const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');


passport.serializeUser((user, done) => { // serialize: How we save the user
  done(null, user.id);
});

passport.deserializeUser((id, done) => { // deserialize: How we look for the user
  User.findById(id)
    .then(user => done(null, user));
});


passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: '166580733119-fi5aod04fpu0qp9vtm8pdi1s99so6qqn.apps.googleusercontent.com',
    clientSecret: 'binbUJ0LnnAuvVRD5NT5ndPe',
  }, (accessToken, refreshToken, email, done) => {
    User.findOne({ where: { email: email.emails[0].value } })
      .then((user) => {
        if (user) {
          done(null, user);
        } else {
          User.create({
            email: email.emails[0].value,
            password: email.id,
          })
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
  }),
);

passport.use(new LocalStrategy({ usernameField: 'email' },
  ((email, password, done) => {
    User.findOne({ where: { email } })
      .then(
        (user) => {
          if (!user.checkPassword(password) || user === null) { return done(null, false, { message: 'Incorrect username or password.' }); }
          return done(null, user);
        },
      )
      .catch(done);
  })));
