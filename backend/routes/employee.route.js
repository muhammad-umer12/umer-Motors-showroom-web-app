const express = require('express');
const app = express();
const employeeRoute = express.Router();
const jwt = require('jsonwebtoken');
// Employee model
let Employee = require('../models/Employee');
//let Users = require('../models/Users');

// Add Employee
employeeRoute.route('/admin/create').post((req, res, next) => {

  Employee.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log('data posted ');
      console.log("data : "+ data);
      res.json(data)
    }
  })
});


// Login authentication
employeeRoute.route('/admin/login').post((req, res, next) => {

  Employee.findOne(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
     // console.log('data posted ');
      if(data == null)
      {
       console.log(data);
       res.status(404)        // HTTP status 404: NotFound
       .send('Not found');

      }
      else
      {
        console.log("data : "+ data);

        const token = jwt.sign({username :data.email},'encryptionkey')
        console.log(token);
      res.json(token)
      }
     
    }
  })
});


// Get All Employees
employeeRoute.route('/').get((req, res) => {
  Employee.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
employeeRoute.route('/read/:id').get((req, res) => {
  Employee.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
employeeRoute.route('/update/:id').put((req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
employeeRoute.route('/delete/:id').delete((req, res, next) => {
  Employee.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})



module.exports = employeeRoute;