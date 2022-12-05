//importing external module 
const express = require('express');
// app use express
const app = express();
//creating port 
const PORT = process.env.PORT || 3003;

//using static assets through express middleweare 
app.use(express.static('public'));
// Middleware for the parsing of JSON data
app.use(express.json());
// Middleware for parsing of URL encoded data
app.use(express.urlencoded({ extended: true }));

//routes to route files
require('./routes/api-routes')(app);

//app listener which starts with the server
app.listen(PORT, ()=>{
    console.log(`
    =============================================
   
    Server available at localhost${PORT}

    =============================================`);

});