/* eslint-disable no-param-reassign */
const S = require('sequelize');
const crypto = require('crypto');

const db = require('../configure/db');

const Users = db.define('users', {
  email: {
    type: S.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: S.STRING,
    allowNull: false,
  },
  salt: {
    type: S.STRING,
  },

  address: {
    type: S.TEXT,
  },
  isAdmin: {
    type: S.BOOLEAN,
  },
});

Users.addHook('beforeCreate', (users) => {
  users.salt = crypto.randomBytes(20).toString('hex');
  users.shopCartId = crypto.randomBytes(20).toString('hex');
  users.password = users.hashPassword(users.password);
});

Users.prototype.hashPassword = function hashPassword(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

Users.prototype.checkPassword = function checkPassword(password) {
  return this.password === this.hashPassword(password);
};

module.exports = Users;
