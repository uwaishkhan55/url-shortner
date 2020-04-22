const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const md5=require('md5');
const app = express()

const uri = "mongodb+srv://Uwaish55:Uwaish55@cluster0-k5soh.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/",require('./routes/apiController'));



app.listen(process.env.PORT || 5000);