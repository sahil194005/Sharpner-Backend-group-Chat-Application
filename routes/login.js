const express = require('express')
const router = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");

router.get("/login", (req, res, next) => {
	res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form  onsubmit="localStorage.setItem('username', document.getElementById('userName').value)"  action="/chat" method="get">
        <label for="userName">Username:</label>
                    <input id="userName" type="text" name="username" />
                    <button type="submit">Login</button>
        </form>
    </body>
    </html>`);
});


module.exports = router;