const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const auth = require('http-auth');
const router = express.Router();
const { body } = require('express-validator');
const homeController = require('../controllers/homeController');
const Registration = mongoose.model('Registration');

const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
})


//ALTER THE ROUTE TO USE OUT NEW TEMLPLATE

router.get('/', homeController.home);


router.post(
  '/',
  [
    body('firstname')
      .isLength({ min: 1 })
      .withMessage('Please enter first name'),
      body('lastname')
      .isLength({ min: 1 })
      .withMessage('Please enter last name'),
    body('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
  ],

  (req, res) => {
    homeController.submitfForm(req, res);
  }
);

router.get('/registrations', auth.connect(basic), (req,res) => {
  Registration.find()
  .then((registrations) =>{
    res.render('index', {title: 'listing registration', registrations});
  })
.catch(() =>{res.send('Sorry! Something went wrong');})

}); 


module.exports = router;