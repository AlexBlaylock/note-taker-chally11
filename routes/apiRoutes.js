const express = require('express');
// importing notes.js
const notes = require('./notes');

const router = express.Router();
// get
router.get('/notes', (req, res) => {
    res.json(notes.getNotes())
})
// post
router.post('/notes', (req, res) => {
    const { title, text} = req.body;
    const newNote = notes.createNote(title, text);
    res.status(201).json(newNote);
});

module.exports = router;