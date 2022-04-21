const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'new-or-renew'
router.post('/new-or-renew', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var existinglicence = req.session.data['Do-you-currently-hold-a-UK-juggling-licence?']
  
    // Check whether the variable matches a condition
    if (existinglicence == "No - I need to apply for my first license"){
      // Send user to next page
      res.redirect('/juggling-balls')
    } else {
      // Send user to juggling balls question page
      res.redirect('/existing-licence')
    }
  
  })

// Run this code when a form is submitted to 'juggling-balls'
router.post('/juggling-balls-answer', function (req, res) {

       // Make a variable and give it the value from 'how-many-balls'
       var howmany = req.session.data['How-many-balls-can-you-juggle?']
  
       // Check whether the variable matches a condition
       if (howmany == "None - I cannot juggle"){
         // Send user to next page
         res.redirect('/ineligible')
       } else {
         // Send user to juggling trick question page
         res.redirect('/juggling-trick')
       }
     
     })

module.exports = router
