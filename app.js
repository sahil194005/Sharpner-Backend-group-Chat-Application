const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();


const login = require('./routes/login')
const chat = require('./routes/chat')




app.use(bodyParser.urlencoded({ extended: true }));

app.use(login)
app.use(chat)

app.listen(3000, console.log("Server is listening on port 3000....."));


