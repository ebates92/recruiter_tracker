const express = require('express');
const router = express.Router();
const Posting = require('../models/table/posting');
const Applicant = require('../models/table/applicant');

router.get('/', (req, res) => {
    //SEND JSON DATA HERE
    //res.locals.user.dataValues.id contains logged in user's Id
    console.log(res.locals.user.dataValues.id);
    res.end();
});

module.exports = router;