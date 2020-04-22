
const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  _id: {
    type: String,
    required: true,
  },
  hits: {
    type: Number,
    required: true,
    default: 0
  }
})
const connnectDB=async ()=>{
  const uri = "mongodb+srv://Uwaish55:Uwaish55@cluster0-k5soh.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
}
const ShortUrls=mongoose.model('ShortUrl', shortUrlSchema);
module.exports = {ShortUrls,connnectDB}