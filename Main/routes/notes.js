const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const { deleteNote } = require('../helpers/delete')

notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.info(`${req.method} request recieved to add a note`);
    console.log(req.body)
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        }

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully ;)');
    } else {
        res.error('Error adding note');
    }
})

notes.delete('/:id', (req, res) => {
    console.info(`${req.method} request recieved to delete a note`);
    Noteid = req.params.id;
    readFromFile('./db/db.json').then((data) => {
        console.log(Noteid);
        let workingjson = JSON.parse(data);
        workingjson.forEach(element => {
            if (element.id === Noteid) {
                console.log(element)
            }
        });
    })
})

module.exports = notes;