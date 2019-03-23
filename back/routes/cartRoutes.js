const router = require('express').Router();
const Cart = require('../models/shopcart');
const Book = require('../models/book')
const { bookPurchase, bookCategory } = require('../models/index-models');


router.get('/:id', (req, res) => {
  Cart.findOne({ where: { userId: req.params.id } })
    .then((cart) => {
      res.send(cart)
    }
    )
})

router.post('/new/:id', (req, res) => {
  if(req.body.length != 0){
  req.body.map(book => {
    Cart.create({
      userId: req.params.id,
      quantity: book.quantity,
      bookId: book.id,
    })
  })
  .then(() => {
    res.send('ok')
  });}
});


module.exports = router;
