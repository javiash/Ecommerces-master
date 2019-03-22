const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user');
const Comments = require('../models/comments')

passport.serializeUser((user, done) => { // serialize: How we save the user
  done(null, user.id);
});

passport.deserializeUser((id, done) => { // deserialize: How we look for the user
  User.findById(id)
    .then(user => done(null, user));
});


router.post('/login', passport.authenticate('local'), (req, res) => {
  const authenticated = req.isAuthenticated();
  if (authenticated) {
    res.send({
      id: req.user.id,
      email: req.user.email,
    });
  }
});

router.get('/me', (req, res) => {
  res.send(req.user);
});

router.post('/register', (req, res) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user) {
        res.send('no');
      } else {
        User.create({
          email: req.body.email,
          password: req.body.password,
        })
          .then((newUser) => {
            res.send(newUser);
          });
      }
    });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.get('/google', passport.authenticate('google', {
  scope: ['email'],
  accessType: 'offline',
  prompt: 'consent',
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});



router.post('/com', (req, res) => {
  Comments.create({
    content: 'hola',
    rating: 4,
  })
  .then(comment => {
    console.log(comment)
    comment.setFrom(1)
    comment.setRef(1)
    res.send('ok')
  })
})


module.exports = router;
