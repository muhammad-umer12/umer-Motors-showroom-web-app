const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let CarforRent = new Schema({
    Bandname: {
      type: String
   },
   OnedayCharge: {
    type: Number
 },
 OwnerName: {
    type: String
 },
 CarNumber: {
    type: String
 },
   image: {
      type: Buffer
   },

   

   
}, {
   collection: 'rentcars'
})






module.exports = mongoose.model('CarforRent', CarforRent)