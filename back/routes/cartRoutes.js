const router = require('express').Router();
const Cart = require('../models/shopcart');

router.get('/:id', (req, res) => {
  Cart.findAll({ where: { id: req.params.id } })
    .then(cart => res.send(cart));
});


router.post('/:id', (req, res) => {
  Cart.findByPk(req.params.id);
});

module.exports = router;
