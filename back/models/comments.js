const S= require('sequelize');
const Users = require ("./user")
const db= require('../configure/db');

const Comments= db.define('comment',{
    content: {
        type: S.STRING,
        alloNull: false,
    },
    rating: {
        type: S.INTEGER,
        alloNull: false,
    },
  
})

Comments.hasOne(Users, { foreignKey: 'Commentary'})

module.exports= Comments;