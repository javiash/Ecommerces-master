const S = require('sequelize');

const db = require('../configure/db');
const Books = require('./book')
;
const Shopcart = db.define('shopcart', {
  quantity: {
    type: S.STRING,
    alloNull: false
  }
});

Shopcart.belongsToMany(Books, { through: 'shopBooks' });

module.exports = Shopcart;
