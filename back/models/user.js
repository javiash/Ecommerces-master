const S= require('sequelize');
const crypto= require('crypto');

const db= require('../configure/db');
const Comments = require('./comments');
const Shopcart = require('./shopcart');
const Purchase = require('./purchase');

const Users= db.define('users', {
    userName:{
        type: S.STRING,
        allowNull: false, 
    },
    password:{
        type: S.STRING,
        allowNull: false,
    },
    salt:{
        type: S.STRING,
    },
    email:{
        type: S.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    address: {
        type: S.TEXT,
    },
    isAdmin:{
        type: S.BOOLEAN,
    },
})

Users.addHook('beforeCreate', (users) =>{
    users.salt = crypto.randomBytes(20).toString('hex');
    users.shopCartId = crypto.randomBytes(20).toString('hex');
    users.password= user.hashPassword(users.password)
})

Users.prototype.hashPassword= function(password){
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}

Users.prototype.verifyPassword= function(password){
    return this.password === this.hashPassword(password);
}

Users.hasMany(Purchase, {foreignKey: ''})
Purchase.hasOne(User, {foreignKey: 'id'})

Users.hasOne(Shopcart, {foreignKey: 'id'})

module.exports= User;