const S = require('sequelize');

const db = require('../configure/db');

const Category = db.define('category', {
  category: {
    type: S.STRING,
    alloNull: false,
    unique: true,
  },

});

module.exports = Category;
