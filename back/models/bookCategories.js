const S= require('sequelize');

const db= require('../configure/db');

const BookCategories= db.define('bookCategories',{
    bookId : {
        type:S.INTEGER,
        allowNull:false
    },
    categoryId: {
        type:S.INTEGER,
        allowNull:false
    }
})

module.exports= BookCategories;