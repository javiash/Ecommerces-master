const S = require('sequelize');

const db = require('../configure/db');
const Book = require('./book');

const Shopcart = db.define('shopcart', {
  quantity: {
    type: S.STRING,
    alloNull: false,
  },
});

Shopcart.belongsToMany(Book, { through: 'shopBooks' });

module.exports = Shopcart;
