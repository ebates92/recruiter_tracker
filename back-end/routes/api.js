const express = require('express');
const router = express.Router();
const Posting = require('../models/table/posting');
const Applicant = require('../models/table/applicant');

router.get('/postings', (req, res) => {
    Posting.findAll({
        where:{userId: 1}
    }).then((postings) => res.json(postings))
})
.get('/applicants', (req, res) => {
    Applicant.findAll({
        where:{userId: 1}
    }).then((applicants) => res.json(applicants))
})
.post('/posting', (req, res) => {
    console.log(req.body);
    res.status(201).send();
})

module.exports = router;
