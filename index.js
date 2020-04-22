const express = require('express')
const mongoose = require('mongoose')
const app = express()
const {connnectDB}=require('./models/shortUrl')


connnectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/",require('./routes/apiController'));



app.listen(process.env.PORT || 5000);