const router = require("express").Router();
const Books = require("../models/book");


module.exports = router;

router.get('/:id',(req,res)=>{
      Books.findByPk(req.params.id).then(book=>{
        res.send(book)
      })
})

router.post('/create', (req, res) => {
  console.log('ACA EN EL BACK CREANDO LIBRO', req.body);
  Books.create(req.body)
    .then((book) => {
      console.log("PELOPINCHO", book)
      res.send('TODO VIENTO');
    });
});
