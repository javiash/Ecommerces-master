const express = require("express");
const Sequelize = require("sequelize");

const router = require("express").Router();
const Books = require("../models/book");


module.exports = router;

router.get('/:id',(req,res)=>{
      Books.findByPk(req.params.id).then(book=>{
        res.send(book)
      })
})