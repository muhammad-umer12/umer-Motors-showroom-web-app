const express = require('express');
const app = express();
const carsRoute = express.Router();
const fs = require('fs');
const multer= require('multer');
// Employee model
let Cars = require('../models/CARSFORSALE');


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '/uploads');
    },
    filename: (req, file, cb) => {
    cb(null, file.originalname);
    }
  });

  upload = multer({ storage : storage })


carsRoute.route('/carRegistration').post((req, res, next) => {
    console.log("request agai hai");
    console.log(req.body);

   // console.log(req);

   // console.log(req.file);
  /*  var im= fs.readFileSync(req.file.path);
    var encode_image = im.toString('base64');
    // Define a JSONobject for the image attributes for saving to database
    var cardetail = {
        
         contentType: req.file.mimetype,
         image:  new Buffer(encode_image, 'base64')


      }; */




     /*Cars.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } 
      else
       {
        console.log('data posted ');
        console.log("data : "+ data);
        res.json(data)

      }
    })  */
  });   



  module.exports = carsRoute;