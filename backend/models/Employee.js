const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt =  require('bcrypt')
// Define collection and schema
let Employee = new Schema({
   username: {
      type: String
   },
   email: {
      type: String
   },
   phone : {
      type : String
   },
   password: {
      type: String
   },
   
}, {
   collection: 'employees'
});



//Empployee.statics.hashPassword = function hashPassword(password){
  //    return bcrypt.hashSync(password,0);
//}

//Employee.method.isValid = function(hashedpassword){
  //    return bcrypt.compareSync(hashedpassword, this.password);
//}

module.exports = mongoose.model('Employee', Employee)