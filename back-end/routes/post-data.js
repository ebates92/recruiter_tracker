const express = require('express');
const router = express.Router();
const Posting = require('../models/table/posting');
const Applicant = require('../models/table/applicant');
const PostingApplicant = require('../models/table/postingApplicant');

// this fixes cross origin errors. CORS resource sharing.
router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
    }
)

// CONNECT TO POSTGRES POSTING TABLE
router.route('/newposting')
    .post((req, res) => {
        Posting.findAll({
            where:{userId: 1}
        }).then((postings) => {
            console.log(postings)
            res.json(postings);
        })
    })

// CONNECT TO POSTGRES APPLICANTS TABLE
router.route('/newapplicant')
    .post((req,res) => {
        Applicant.findAll({
            where:{userId: 1}
        }).then((applicants) => res.json(applicants))
    })

// CONNECT TO POSTGRES POSTINGAPPLICANT TABLE
router.route('/addapplicanttoposting')
    .post((req, res) => {
        PostingApplicant.findAll({
            where:{userId: 1}
        }).then((postingapplicant) => res.json(postingapplicant))
    })


module.exports = router;
