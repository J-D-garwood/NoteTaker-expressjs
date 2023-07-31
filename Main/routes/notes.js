const notes = require('express').Router();

notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    res.send("poopypants")
    //insert read from File func
});

// insert notes.post thingy here

module.exports = notes;