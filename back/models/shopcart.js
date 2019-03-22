const S = require('sequelize');

const db = require('../configure/db');

const Shopcart = db.define('shopcart', {
  quantity: {
    type: S.STRING,
    alloNull: false,
  },
});

module.exports = Shopcart;
