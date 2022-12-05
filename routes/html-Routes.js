const path = require('path'); 

module.exports = (app) => {
//this returns the root file 
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html')); 
})

//this should return the notes.html file when a user reaches that page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
}