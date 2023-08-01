const notes = require('express').Router();
const uuid = require('../helpers/uuid');

const { readFromFile } = require('../helpers/fsUtils')

notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    //insert read from File func
});

notes.post('/', (req, res) => {
    console.info(`${req.method} request recieved to add a note`);
    
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        }
    }
})
// insert notes.post thingy here

module.exports = notes;