const express = require('express');
const router = express.Router();
const User = require('./models/table/user');
const jwt = require('jsonwebtoken');
const config = require('./config/config.json');

module.exports = isAuthorized = (req, res, next) => {
    let decoded;
    let token;
    let userId;
    if (req.user) {
        userId = req.user.dataValues.id;
    } else {
        try {
            token = req.cookies['session'];
            if (token) {
                decoded = jwt.verify(token, config.secret);
                userId = decoded.id;
            }
        } catch (e) {
            next(e);
        }
    }
    // Decoded variable will contain the decoded payload if signature is valid
    User.findOne({
        where: {
            id: userId
        }
    })
    .then((user) => {
        console.log(user);
        res.locals.id = user.dataValues.id;
        next();
    })
    .catch((err) => {
        // res.redirect('/login');
        console.log(err)
  })
}