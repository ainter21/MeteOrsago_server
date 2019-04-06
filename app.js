const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


let app_counter = 0;
let access_counter = 0;

app.get('/newUser', (req,res) => {


    app_counter++;
    // console.log("app_counter : " + app_counter);
    res.status(200).end();
});

app.get('/appCounter', (req,res) => {

    res.json({
        "app_counter" : app_counter,
        "access_counter": access_counter
    });
});

app.get('/newAccess', (req, res) => {
    access_counter++;
    res.status(200).end();
});

setInterval(() => {

    
}, 60 * 1000 * 30);


app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});