const path = require('path'); 
const fs = require('fs'); 
// Helper method for generating unique ids
const uuid = require('../helpers/uuid');
const db = require('../db/db.json')

module.exports = (app) => {
    //get request 
    app.get('/api/notes', (req,res)=>{
        res.sendFile(path.join(__dirname,'../db/db.json'));
    });

    //post review request
    app.post('/api/notes', (req,res)=>{
        let db = fs.readFileSync('../db/db.json');
        db = json.parse(db);
        res.json(db); 

        //body of the note 
        let createdNote = {
            title: req.body.title, 
            text: req.body.text,
            //this creates unique id for each note
            id: uuid(), 
        }

        db.push(createdNote);
        fs.writeFileSync('../db/db.json',JSON.stringify(db));
        res.json(db);
    });

    //delete request
    app.delete('./api/notes:id', (req, res)=>{
        //reading note from database 
        let db = JSON.parse(fs.readFileSync('../db/db.json'))

        let deleteNote = db.filter(item => item.id !== req.params.id);

        fs.writeFileSync('../db/db.json', JSON.stringify(deleteNote));
        res.json(deleteNote);
    })
};