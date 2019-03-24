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
  console.log(req.body)
  if (req.body.length != 0) {
    req.body.map(book => {
      Cart.create({
        userId: req.params.id,
        quantity: book.quantity,
        bookId: book.id,
      })
    })
      .then(() => {
        res.send('ok')
      });
  }
});


router.post('/clean/:id', (req, res) => {
  Cart.destroy({ where: { userId: req.params.id } })
    .then(() => res.sendStatus(200))
})

router.post('/add/:id', (req, res) => {
  Cart.findAll({ where: { userId: req.params.id } })
    .then(oneCart => {
      if (oneCart.some(e => e.id === req.body.id)) {
        oneCart.map(singleBook => {
          if (singleBook.id === req.body.id) {
            Cart.update(
              { quantity: singleBook.quantity + req.body.quantity },
              { where: { id: singleBook.id } }
            )
              .then(() => res.send('update'))
          }
        })
      } else {
        Cart.create({
          userId: req.params.id,
          bookId: req.body.id,
          quantity: req.body.quantity
        })
          .then(() => res.send('add'))
      }
    })
})

module.exports = router;
