const express = require('express');
const app = express();
const carsRoute = express.Router();
const fs = require('fs');
const multer= require('multer');
const path = require('path')
// Employee model
let Cars = require('../models/CARSFORSALE');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'routes/uploads/');
  },
  filename: (req, file, cb) => {
  cb(null, file.originalname);
  }
});

  upload = multer({ storage : storage })

 // const upload = multer({dest : 'uploads/'});
carsRoute.route('/carRegistration').post( upload.single('img_file') ,(req, res, next) => {


    console.log("request agai hai");
    console.log(req.file);
    console.log(req.body);
    
   // console.log(req);

    console.log(req.file);
    var im= fs.readFileSync(req.file.path);
    var encode_image = im.toString('base64');
    // Define a JSONobject for the image attributes for saving to database
    var cardetail = {
         userId : req.body.userId,
         carname : req.body.carname,
         brandname : req.body.brandname,
         modelyear : req.body.modelyear,
         price     : req.body.price,
         color     : req.body.color,
         description : req.body.description,
         owner_name : req.body.owner_name,
         owner_phone : req.body.owner_phone,
        
         contentType: req.file.mimetype,
         img_name : req.file.filename,
         img_url: 'http://localhost:4000/carsforsale/getImg/'+req.file.filename,
         
         
      }; 


     Cars.create(cardetail, (error, data) => {
      if (error) {
        console.log("Database mai problm hoogai hai ")
        return res.status(504).json({error : error})
      } 
      else
       {
        console.log('data posted ');
        console.log("data : "+ data);
        res.json(data)

      }
    })  
  });   



       // Get All personal  usedCars
carsRoute.route('/getAllCars/:id').get((req, res) => {
  console.log(req.params.id)
  let a = req.params.id;
  Cars.find({ "userId" : a },(error, data) => {
    if (error) {
      console.log(error)
      return next(error)
    } else {
     // console.log(data);
      res.json(data)
    }
  })
})


// Get all cars
carsRoute.route('/getAllCars').get((req, res) => {
     console.log("all cars ki request agai hai")
  Cars.find((error, data) => {
    if (error) {
      console.log(error)
      return next(error)
    } else {
    //  console.log(data);
      res.json(data)
    }
  })
})

  // accept Bid

  carsRoute.route('/acceptbid').post((req,res) => {

    Cars.update({"_id":req.body.carId, "bid" : [ {"bidUserId" : req.body.bidder , "bidamount" : req.body.bidamount, "accept" : false} ]},
   {
      $set: { "bid" :  {"bidUserId" : req.body.bidder , "bidamount" : req.body.bidamount , "accept" : true}}
    },
    (error, data) => {
      if (error) {
        console.log(error)
        return next(error)
      } else {
          console.log("true function run")
        console.log(data);
        console.log(req.body.bidamount)
        res.json(data)
      }
    })

  })

    // Bids placing

    carsRoute.route('/addbid').post((req,res) => {
   //   console.log("bid API run")
    //  console.log(req.body);


      Cars.updateOne({"_id":req.body._id},
      {
        $push: { "bid" :  {"bidUserId" : req.body.userId, "bidamount" : req.body.bid , "accept" : false}}
      },
      (error, data) => {
        if (error) {
          console.log(error)
          return next(error)
        } else {
          console.log(data);
          res.json(data)
        }
      })


    })



       // Get car image
       carsRoute.route('/getImg/:id').get((req, res) => {
      
        const np = path.join(__dirname+'/uploads');
    
        res.sendFile(np + "/"+req.params.id);
  
      })


      carsRoute.route('/delete/:id').delete((req, res, next) => {
        Cars.findOneAndRemove(req.params.id, (error, data) => {
          if (error) {
            return next(error);
          } else {
            res.status(200).json({
              msg: data
            })
          }
        })
      })

  module.exports = carsRoute;