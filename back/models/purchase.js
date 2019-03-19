const S = require('sequelize');

const db = require('../configure/db');

const Purchase = db.define('purchase', {
  amount: {
    type: S.INTEGER,
    alloNull: false
  },
  status: {
    type: S.STRING,
    allowNull: false
  }
});

module.exports = Purchase;
