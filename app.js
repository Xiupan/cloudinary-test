const cloudinary = require('cloudinary');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer()
const formidable = require('express-formidable');
const keys = require('./keys.js')
const app = express()

app.use(bodyParser.json())
app.use(formidable());

cloudinary.config({
  cloud_name: 'ecotonetech',
  api_key: keys.cloudinaryApiKey,
  api_secret: keys.cloudinaryApiSecret
});

// simple example
// cloudinary.v2.uploader.upload('cat.jpeg', function(error, result) {
//   console.log(result)
// });

app.post('/api/upload', function(req, res){
  // req.files is any file coming from the route attached to the req
  // the 'image' field attached to the req is taken from the name of the field in the form submitted on the frontend
  let receivedFile = req.files.image.path
  cloudinary.v2.uploader.upload(receivedFile, function(error, result) {
    console.log(result)
  });
})

app.listen(5000)
console.log(`Node Server listening on port 5000.`);
