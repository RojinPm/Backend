const express = require("express");

const { json } = require("express/lib/response");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/news", (req, res) => {
    // res.json(req.body);
    fs.writeFile(`${req.body.id}.txt`, req.body.htmlData, (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log("called");
    // res.json(
    //     "<!DOCTYPE html>" +
    //         "<html><head></head><body>" +
    //         req.body.htmlData +
    //         "</body></html>"
    // );

    console.log(req.body.id);
});
app.get("/get",(req,res) => {
    console.log(req.query.id);
    fs.readFile(`${req.query.id}.txt`,'utf-8', function(err,data) {
        if(!err) {
            res.json({"content": data})
        } else (
            res.json({"content":"invalid"})
        )
    })
})
app.get("/", (req, res) => {
    res.send("Server is running properly");
});

app.listen(5000, console.log("Server is running on the port"));
