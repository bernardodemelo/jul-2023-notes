// Express Tool that helps us to create Routes outside app.js
const router = require('express').Router();

// Requiring Models
const Book = require('../models/Book.model.js');
const Review = require('../models/Review.model.js');
const User = require('../models/User.model.js');

// GET route to display all the books in the Db
router.get('/books', async(req,res)=>{
    try{
        // get all books from our Database via .find() method
        let allBooksFromDB = await Book.find();

        res.render('books/books-list.hbs', {books: allBooksFromDB});

    }
    catch(error){
        console.log('Erro while getting books', error);
    }
});

/* CREATE BOOKS */
// GET route to display a form where the user is going to fill info about the book that is going to be created. 
router.get('/books/create',(req,res)=>{
    res.render('books/book-create.hbs');
});

// POST route to submit info about the created book
router.post('/books/create', async(req,res)=>{
    try{
    // Object destructuring with req.body
    // There's always a match between an input's name and a req.body property's name
    const {title, author, description, rating} = req.body;

    await Book.create({title, author, description,rating});
    res.redirect('/books');

    }
    catch(error){
        console.log(error);
    }
});

/* UPDATE BOOKS */

// GET route to display the form to update a specific Book
router.get('/books/:bookId/edit', async (req,res)=>{
    try{
    const {bookId} = req.params;
    let foundBook = await Book.findById(bookId);
    res.render('books/book-edit.hbs', {book: foundBook});
    }
    catch(error){
        console.log(error);
    }
});

// POST route to actually make updates on a specific book
router.post('/books/:bookId/edit', async(req,res)=>{
    try{
        // destructure the req.params object to get the bookId
        const {bookId} = req.params; 
        const {title, author, description, rating} = req.body;

        // update the same document with new content
        await Book.findByIdAndUpdate(bookId, {title, author,description, rating}, {new: true}); 

        // redirect to books list page
        res.redirect('/books');
    }
    catch(error){
        console.log(error);
    }
});

/* DELETE */
router.post('/books/:bookId/delete', async(req,res)=>{
    try{
        const {bookId} = req.params;
        await Book.findByIdAndDelete(bookId);
        res.redirect('/books');
    }
    catch(error){
        console.log(error);
    }
})

// GET route to display info about a specific book
router.get('/books/:bookId', async(req,res)=>{
    try{
    // ES6 Object Destructuring with bookId route param
    const {bookId} = req.params; 

    // Find Book via its Id inside the Db
    let foundBook = await Book.findById(bookId);

    const users = await User.find();

    await foundBook.populate('reviews author');
    await foundBook.populate({
        path: 'reviews', 
        populate: {
            path: 'author', 
            model: 'User'
        }
    });

    res.render('books/book-details.hbs', {book: foundBook, users});
    }
    catch(error){
        console.log(error);
    }
});

/* REVIEWS ACTIONS */
router.post('/review/create/:bookId', async(req,res)=>{
    try{
        const {bookId} = req.params;

        const {content, author} = req.body;

        const newReview = await Review.create({content, author});

        // update the Book with new review that was created
        const bookUpdate = await Book.findByIdAndUpdate(bookId, {$push: {reviews: newReview._id}});

        // add the review to the user
        const userUpdate = await User.findByIdAndUpdate(author, {$push: {reviews: newReview._id}});

        res.redirect(`/books/${bookId}`);

    }
    catch(error){
        console.log(error);
    }
});

router.post('/review/delete/:reviewId', async (req,res)=>{
    const {reviewId} = req.params; 
    try{
        const removedReview = await Review.findByIdAndRemove(reviewId);

        await User.findByIdAndUpdate(removedReview.author, {
            $pull: {reviews: removedReview._id}
        })

        res.redirect('/books');
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;