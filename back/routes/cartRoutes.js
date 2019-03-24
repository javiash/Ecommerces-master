const router = require('express').Router();
const Cart = require('../models/shopcart');
const Book = require('../models/book')
const { bookPurchase, bookCategory } = require('../models/index-models');


router.post('/new', (req, res) => {
  Book.create({
    name: 'Gastón',
    author: 'Javi',
    year: 2019,
    editorial: 'Pepe',
    description: 'Es una historia',
    sold: 0,
    price: 21.5,
    stock: 458,
  })
})

router.get('/:id', (req, res) => {
  Cart.findAll({ where: { ownerId: req.params.id } })
    .then(cart => res.send(cart));
});


router.post('/:id', (req, res) => {
  Cart.findByPk(req.params.id);
});

router.get('/newcart', (req, res) => {
  Cart.create({
    quantity: req.body.quantity,
  })
  .then(cart => {
    cart.setOwner(req.body.owner)
    res.send('carrito')
  })
})

module.exports = router;
