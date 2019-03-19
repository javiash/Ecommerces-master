const S = require('sequelize');

const db = require('../configure/db');

const Comments = db.define('comment', {
  content: {
    type: S.STRING,
    alloNull: false,
  },
  rating: {
    type: S.INTEGER,
    alloNull: false,
  },

});


module.exports = Comments;
