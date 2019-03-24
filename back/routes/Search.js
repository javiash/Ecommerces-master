const express = require("express");
const Sequelize = require("sequelize");

const router = require("express").Router();
const Books = require("../models/book");
const Op = Sequelize.Op;

module.exports = router;

router.get("/:name", (req, res) => {
  console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  Books.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.like]: '%'+req.params.name+'%' } },
        { author: { [Op.like]: '%'+req.params.author+'%' } }
      ]
    }
  }).then(books => {
    console.log(books.author);
    res.send(books);
  });
});


router.get('/:name/:id'),(req,res)=>{
console.log("holaaaa",req.params.id)
  Books.findByPk(3).then(book=>{
    res.json(book)
  })
}