const router = require('express').Router();
const Comment = require('../models/comments');
const User = require('../models/user');


router.post('/:id', (req, res) => {
    Comment.create({
        content: req.body.content,
        rating: req.body.rating
    })
        .then(comment => {
            comment.setRef(req.body.bookId)
            comment.setFrom(req.params.id)
            res.send('ok')
        })
})

router.get('/:book', (req, res) => {
    Comment.findAll({ where: {refId: req.params.book}, include: ['from' ] })
        .then(comments => {
            res.send(comments)
        })
})

module.exports = router;