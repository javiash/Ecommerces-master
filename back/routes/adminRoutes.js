const router = require('express').Router();

const User = require('../models/user.js');

router.get('/user/:email', (req, res) => {
  User.findOne({ where: { email: req.params.email } })
    .then((user) => {
      res.send(user);
    });
});

router.get('/user/convertAdmin/:email', (req, res) => {
    console.log("ENCUENTRO?")
  User.findOne({ where: { email: req.params.email } })
    .then((user) => {
      console.log('ENCONTRO EL USER?', user);
      user.isAdmin = true;
      user.save().
      then(e => console.log("EEHHHH",e));
      res.send(200);
    });
});


module.exports = router;
