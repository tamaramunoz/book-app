const { Router } = require('express');
const router = Router();

const Book = require('../models/Books');

router.get('/', async(req, res) => {
    const books = await Book.find();
    res.json(books)
});

router.post('/', async(req, res) => {
    console.log(req.body);
    res.send('received')
});

router.put('/', async(req, res) => {
    console.log(req.body);
    res.send('updated')
});

router.delete('/', async(req, res) => {
    console.log(req.body);
    res.send('deleted')
});

module.exports = router;