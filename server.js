// requiring express and path
const express = require('express');
const path = require('path');

//linking routes
const api = require('./routes/index')

//assiging express to the constant "app"
const app = express();
const PORT = process.env.PORT || 3001;

//using express.json to unpack json request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', api);

//get "/notes" request handling
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//get "*" request handling
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//app listening 
app.listen(PORT, () => 
    console.log(`Notetaking app listening at http://localhost:${PORT}`)
);