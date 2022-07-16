const express = require('express')

const { json } = require('express/lib/response');
const bodyParser = require('body-parser')
const cors = require('cors')

const app=express()

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors())


app.post('/create', (req,res) =>{


    // res.json(req.body);
    res.json('<!DOCTYPE html>'
    + '<html><head></head><body>' + req.body.htmlData + '</body></html>')
    
    
})


app.get('/',(req,res) =>{

   res.send("Server is running properly")

})

app.listen(8000, console.log("Server is running on the port"))