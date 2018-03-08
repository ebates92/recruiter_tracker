const express = require('express');
const router = express.Router();
const User = require('../models/table/user');
const bcrypt = require('bcryptjs');
const config = require('../config/config.json');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const passport = require('../config/passport-setup');
const bodyParser = require('body-parser');

const verifyPassword = (password, user) => {
  return bcrypt.compare(password, user.dataValues.password).then((res) => {
    if (res) return user;
    if (err) return err;
    return Error("Invalid password");
  })
}

const generateAuthToken = (user) => {
    const userId = user.dataValues.id;
    const access = 'auth';
    const token = jwt.sign({id: userId, access}, config.secret);
    const userRecord = {id: userId, token};
    return userRecord;
  }

//Sign-in with Google Oauth
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))
.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:3000/dashboard');
})
//Handle username / password authentication
.post('/', (req, res) => {
  const {email, password} = _.pick(req.body, ['email', 'password']);
  User.findOne({
    where: {email}
  })
  .then((user) => {
    return verifyPassword(password, user);
  })
  .then((response) => {
    return generateAuthToken(response);
  })
  .then((userRecord) => {
    res.cookie('session', userRecord.token);
    res.send({'url':'/dashboard'});
  })
  .catch((err) => {
    res.status(400).send(err)
   })
  })



module.exports = router;