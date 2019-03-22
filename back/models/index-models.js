const Book = require('./book');
const User = require('./user');
const Purchase = require('./purchase');
const Comment = require('./comments');
const Cart = require('./shopcart');
const Category = require('./category');

Cart.belongsTo(User, { as: 'owner' });

Comment.belongsTo(User, { as: 'from' });
Comment.belongsTo(Book, { as: 'ref' });

Purchase.belongsTo(User, { as: 'owner' });

const bookPurchase = {
  Book,
  Purchase,
};

Book.belongsToMany(Purchase, { through: 'book_purchase', foreignKey: 'bookId' });
Purchase.belongsToMany(Book, { through: 'book_purchase', foreignKey: 'purchaseId' });

const bookCategory = {
  Book,
  Category,
};

Book.belongsToMany(Category, { through: 'book_category', foreignKey: 'bookId' });
Category.belongsToMany(Book, { through: 'book_category', foreignKey: 'categoryId' });


module.exports = { bookPurchase, bookCategory };
