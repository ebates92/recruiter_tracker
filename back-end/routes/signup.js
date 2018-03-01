const express = require('express');
const router = express.Router();
const _ = require('lodash');
const User = require('../models/table/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
  
  const generateAuthToken = (user) => {
      const userId = user.dataValues.id;
      const access = 'auth';
      const token = jwt.sign({id: userId, access}, config.secret);
      const userRecord = {id: userId, token};
      return userRecord;
    }


router.post('/', (req, res, next) => {
    console.log(req.body);
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
            return generateAuthToken(user);
          })
          .then((userRecord) => {
            res.cookie('session', userRecord.token);
            res.send();
          })
          .catch(err => {
              res.send(err);
          })
      })
    })
  }
  })

  module.exports = router;