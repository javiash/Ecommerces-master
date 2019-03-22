const S = require('sequelize');

const db = require('../configure/db');

const Shopcart = db.define('shopcart', {
  quantity: {
    type: S.INTEGER,
    alloNull: false,
  },
});

module.exports = Shopcart;
