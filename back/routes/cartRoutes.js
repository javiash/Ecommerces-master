const router = require('express').Router();
const Cart = require('../models/shopcart');
const Book = require('../models/book')
const { bookPurchase, bookCategory } = require('../models/index-models');

router.post('/newbook', (req, res) => {
  bookCategory.Book.create({
    name: 'Game of Thrones',
    author: 'George R. R. Martin',
    year: '6 de agosto de 1996',
    editorial: 'Bantam Spectra',
    description: 'Se trata de la primera entrega de la serie de gran popularidad Canción de hielo y fuego. La novela se caracteriza por su estética medieval, la descripción de numerosos personajes bien detallados, la contraposición de puntos de vista de los múltiples protagonistas, su trama con giros inesperados y un uso sutil y moderado de los aspectos mágicos tan comunes en otras obras de fantasía heroica.',
    sold: 15400,
    price: 1500,
    stock: 200,
  })
})


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
