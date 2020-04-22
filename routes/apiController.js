const express = require("express");
const router = express.Router();
const ShortUrls = require("../models/shortUrl");
// get base URL

router.post("/short", (req, res) => {
  let shortUrl;
  if (!(req.body)) {
    res
      .json({ success: false, msg: "Data missing!", data: req.body });
  }
  // Create a shorturl object
  shortUrl = new ShortUrls({
    url: req.body.url,
  });
  createAndSaveShortUrl(shortUrl, res,req.body.ownId);
});
/**
 * @route GET api/urlID
 * @desc Redirect to actual url based on URL ID
 * @access public
 */
router.get("/:id", (req, res) => {
  const _id = req.params.id;
  console.log('url id', _id);
  
  ShortUrls.findOne({_id}, (err, urlObj) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, msg: "Internal Server Error!" });
      return;
    }
    if (!urlObj) {
      res.status(404).json({ success: false, msg: "URL does not exist!" });
      return;
    }
    const redirectTo = urlObj.url;
    // Update the hits counter of url
    ShortUrls.updateOne(
      {_id},
      { $inc: { hits: 1 } },
      (err, model) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(redirectTo);
        // Redirect to actual URL
        res.redirect(redirectTo);
      }
    );
  });
});



function createAndSaveShortUrl(shortUlrObj, res,ownId) {
  // Generate a random string to replace the url
  
  var randomStr;
  if(ownId===undefined) randomStr=generateRandomString();
  else randomStr=ownId;
  console.log(randomStr+"-------------------->>>>>>>>>>>>>>>>>>>")
  // Check if the random string already exist in DB
  ShortUrls.findOne({ _id: randomStr }, (err, url) => {
    if (err) {
      console.log(err);
    } else if (url == null) {
      console.log("url obj", url, randomStr);
      shortUlrObj._id = randomStr;
      // Not a duplicate
      shortUlrObj.save(err => {
        if (err) {
          res.json({ success: true, msg: err });
        }
        res.status(200).json({ success: true, randomStr });
      });
    } else if(!ownId) {
      // Generated random string already exist in the DB
      // Try once again
      createAndSaveShortUrl(shortUlrObj, res);
    }else{
         res.json({success:true,msg:"code is already exists in DB"})
    }
  });
}
function generateRandomString() {
  var length = 6,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

module.exports=router;