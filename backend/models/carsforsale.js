const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let CARSFORSALE = new Schema({

      userId : {
         type : String
      },
    brandname: {
      type: String
   },
   carname : {
       type :String
   }
   ,
   modelyear: {
    type: String
 },
 price: {
    type: String
   },
   color: {
    type: String
   },
   description: {
    type : String
   },
   owner_name : {
      type : String
   },
   owner_phone : {
      type :String
   },


   
   contentType : {
      type : String
   },
   img_name:{
      type: String
   },
   img_url:{
      type: String
   },

   bid: 
      {
       
      }
   
},
 {
   collection: 'carsforsale'
})






module.exports = mongoose.model('CARSFORSALE', CARSFORSALE)