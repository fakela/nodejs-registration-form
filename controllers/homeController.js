
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Registration = mongoose.model('Registration');


exports.home = (req, res) => {
    res.render('form', {title: "Event Registration"})
}

exports.submitfForm = (req, res) => {
        const errors = validationResult(req);
    
        if (errors.isEmpty()) {
          const registration = new Registration(req.body);
          registration.save()
          .then(() => { res.send('Thank you for your registration!'); })
          .catch(() => { res.send('Sorry! Something went wrong.'); });
         
        } else {
          res.render('form', {
            title: 'Registration form',
            errors: errors.array(),
            data: req.body,
          });
        }
      }


