require("dotenv").config()//load variables from .env into procoess.env
const express = require('express');//backend framework
const drinks = require("../models/drinks")// import fruits data


const app = express(); 

//home route - redirects to drinks index

app.get("/", (req, res) => res.redirect("/drinks"))

//index route
app.get("/drinks/", (req, res) => {
    res.render(
        'drinks_index.ejs',
        {
            allDrinks:drinks
        }
    )
});

app.get("/drinks/:id", (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.index]
    });
})

app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`);
});