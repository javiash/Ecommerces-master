const S = require('sequelize');

const db = require('../configure/db');
const Category = require('./category');
const Comments = require('./comments');
const Purchase = require('./purchase');

const Book = db.define('books', {
  name: {
    type: S.STRING,
    alloNull: false,
  },
  author: {
    type: S.STRING,
    alloNull: false,
  },
  year: {
    type: S.STRING,
    alloNull: false,
  },
  editorial: {
    type: S.STRING,
    alloNull: false,
  },
  description: {
    type: S.TEXT,
    alloNull: false,
  },
  sold: {
    type: S.INTEGER,
    alloNull: false,
  },
  price: {
    type: S.DOUBLE,
    alloNull: false,
  },
  stock: {
    type: S.INTEGER,
    alloNull: false,
  },
});

//Book.belongsToMany(Category, { through: 'bookCategories' });
Book.belongsToMany(Purchase, { through: 'bookPurchase' });
Book.hasMany(Comments, { foreignKey: 'id' });

module.exports = Book;
