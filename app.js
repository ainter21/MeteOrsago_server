const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


let app_counter = 0;


app.get('/newUser', (req,res) => {


    app_counter++;
    console.log(app_counter);
    res.status(200).end();
});

app.get('/appCounter', (req,res) => {

    res.json({
        "app_counter" : app_counter
    });
})


app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});