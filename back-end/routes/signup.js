const express = require('express');
const router = express.Router();
const _ = require('lodash');
const User = require('../models/table/user');
const bcrypt = require('bcryptjs');



router.post('/', (req, res, next) => {
    let {firstName, lastName, email, password} = _.pick(req.body, ['firstName', 'lastName', 'email', 'password']);
    if (!firstName || !password) {
      res.status(422).send("Please fill out all required fields");
    } else {
    //Check if email address is currently in use
      //Encrypt user password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            User.create({
            firstName,
            lastName,
            email,
            password: hash,
          })
          .then((user) => { 
              res.status(201).send({"userCreated":"True"});
          })
          .catch(err => {
              res.send(err);
          })
      })
    })
  }
  })

  module.exports = router;