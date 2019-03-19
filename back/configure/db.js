const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/bookstore', { loggin: false });

module.exports = db;
