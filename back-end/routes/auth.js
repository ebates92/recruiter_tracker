const express = require('express');
const router = express.Router();
const User = require('../models/table/user');
const bcrypt = require('bcryptjs');
const config = require('../config/config.json');
const _ = require('lodash');
// const isAuthorized = require('../auth');
// const passport = require('../config/passport-setup');

const verifyPassword = (password, user) => {
  return bcrypt.compare(password, user.dataValues.password).then((res) => {
    if (res) return user;
    if (err) return err;
    return Error("Invalid password");
  })
}

const generateAuthToken = (user) => {
  let userId = user.dataValues.id;
  let userRecord = {id: userId};
  return userRecord;
}

//Sign-in with Google Oauth
// router.get('/google', passport.authenticate('google', {
//   scope: ['profile', 'email']
// }))
// .get('/google/redirect', passport.authenticate('google'), (req, res) => {
//   res.redirect('/home');
// })
// //Sign-in with email / password
// .post('/', (req, res) => {
//     res.sendStatus(201).send("WDAWDDWDAWD");
// })

// .post('/', (req, res, next) => {
//   let {email, password} = _.pick(req.body, ['email', 'password']);
//   userModel.findOne({
//     where: {email}
//   })
//   .then((user) => {
//     return verifyPassword(password, user);
//   })
//   .then((response) => {
//     return generateAuthToken(response);
//   })
//   .then((userRecord) => {
//     res.cookie('session', userRecord.token);
//     res.send({'url':'/dashboard'});
//   })
//   .catch((err) => {
//     res.status(400).send(err)
//    })
//   })

// Prevent CORS error
router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  })
.post('/', (req, res) => {
  res.send(req.body);
  const {email, password} = _.pick(req.body, ['email', 'password']);
  console.log("POST SUCCESS");
  console.log(email + " " + password);
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
    res.json({isAuth: true, userId: userRecord.id});
  })
  .catch((err) => {
    res.status(400).send(err)
   })
  })



module.exports = router;