const notes = require('express').Router();
const uuid = require('../helpers/uuid');

const { readFromFile, readAndAppend } = require('../helpers/fsUtils')

notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    //insert read from File func
});

notes.post('/', (req, res) => {
    console.info(`${req.method} request recieved to add a note`);
    console.log(req.body)
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        }

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully ;)');
    } else {
        res.error('Error adding note');
    }
})

module.exports = notes;