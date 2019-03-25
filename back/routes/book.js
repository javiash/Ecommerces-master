const express = require('express');
const Sequelize = require('sequelize');

const router = require('express').Router();
const Books = require('../models/book');


module.exports = router;

router.get('/:id', (req, res) => {
  console.log('holaaaa soyyyy un id', req.params.id);
  Books.findByPk(req.params.id).then((book) => {
    res.json(book);
  });
});

router.post('/create', (req, res) => {
  console.log('ACA EN EL BACK CREANDO LIBRO', req.body);
  Books.create(req.body)
    .then((book) => {
      console.log("PELOPINCHO", book)
      res.send('TODO VIENTO');
    });
});
