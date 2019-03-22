const express = require("express");
const router = require("express").Router();
const Books = require("../models/book");

module.exports = router;

router.get("/:name", (req, res) => {
  console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaa",req.body);
  Books.findAll({where:{name:'%'+req.params.name+'%'}}).then(books => {
    res.send(books);
  });
});
