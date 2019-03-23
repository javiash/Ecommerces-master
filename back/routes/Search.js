const express = require("express");
const router = require("express").Router();
const Books = require("../models/book");

module.exports = router;

router.get("/", (req, res) => {
  console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaa",req.body);
  Books.findAll().then(books => {
    res.send(books);
  });
});
