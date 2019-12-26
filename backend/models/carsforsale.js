const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let CARSFORSALE = new Schema({
    brandname: {
      type: String
   },
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
   img_file: {
      type: Buffer
   }
},
 {
   collection: 'carsforsale'
})






module.exports = mongoose.model('CARSFORSALE', CARSFORSALE)