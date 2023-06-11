
const express = require('express')
const router = express.Router()
const fs = require("fs");
const bodyParser = require("body-parser");

router.get("/chat", (req, res, next) => {
    let prevChat = fs.readFileSync('chat.txt','utf-8');
    
    if(prevChat==''){
        prevChat = "No chat Here"
    }
        res.send(`<html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <p>${prevChat}</p>
            <form
                onsubmit="
            let userName = document.querySelector('#unid');
            userName.value = localStorage.getItem('username')"
                action="/chat"
                method="POST"
            >
                <input type="text" name="chat" />
                <input type="hidden" name="username" id="unid" />
                <button type="submit">Send</button>
            </form>
        </body>
    </html>
    
    `);
        
    });
    
    router.post("/chat", (req, res, next) => {
        if (req.body.chat != undefined && req.body.username != undefined) fs.appendFileSync("chat.txt", `${req.body.username}: ${req.body.chat}   `);
        res.redirect('/chat')
    });
    

module.exports = router;
