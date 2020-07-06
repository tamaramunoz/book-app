const { Router } = require('express');
const router = Router();

const Book = require('../models/Books');

router.get('/', async(req, res) => {
    const books = await Book.find();
    res.json(books)
});

router.post('/', async(req, res) => {
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newBook = new Book({ title, author, isbn, imagePath});
    await newBook.save();
    res.json({message: 'Book Saved'});
});

router.delete('/:id', async(req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({message: 'Book Deleted'});
});

module.exports = router;