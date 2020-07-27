
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
  
} ,{
  timestamps: true,
  versionKey:false
})

const connnectDB=async ()=>{
  const uri = PLEASE_ENTER_YOUR_URI
mongoose.connect(uri, { useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
}
const ShortUrls=mongoose.model('ShortUrl', shortUrlSchema);
module.exports = {ShortUrls,connnectDB}
