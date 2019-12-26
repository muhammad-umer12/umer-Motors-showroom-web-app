const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Users = new Schema({
    Name: {
      type: String
   },
   Email: {
    type: String
 },
 Password: {
    type: String
 },
 phonenumber: {
    type: String
 }
  

   

   
}, {
   collection: 'users'
})






module.exports = mongoose.model('Users', Users)