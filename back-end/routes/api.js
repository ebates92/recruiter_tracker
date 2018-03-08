const express = require('express');
const router = express.Router();
const Posting = require('../models/table/posting');
const Applicant = require('../models/table/applicant');
const PostingApplicant = require('../models/table/postingApplicant');
const User = require('../models/table/user');

// this fixes cross origin errors. CORS resource sharing.
router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
    }
)



// TURN OFF FOR FRONT END TESTING!!!!*************************

// CONNECT TO POSTGRES POSTING TABLE
router.route('/postings')
    .get((req, res) => {
        Posting.findAll({
            // where:{userId: 1}
            where:{userId: res.locals.id}
        }).then((postings) => {
            res.json(postings);
        })
    })

// CONNECT TO POSTGRES APPLICANTS TABLE
router.route('/applicants')
    .get((req,res) => {
        Applicant.findAll({
            // where:{userId: 1}
            where:{userId: res.locals.id}
        }).then((applicants) => res.json(applicants))
    })
// CONNECT TO POSTGRES POSTINGAPPLICANT TABLE
router.route('/postingapplicant')
    .get((req, res) => {
        PostingApplicant.findAll({
            // where:{userId: 1}
            where:{userId: res.locals.id}
        }).then((postingapplicant) => res.json(postingapplicant))
    })

// CONNECT TO POSTGRES USER TABLE
router.route('/user')
.get((req, res) => {
    User.findOne({
        // where:{id: 1}
        where:{id: res.locals.id}
    }).then((user) => res.json(user))
})


module.exports = router;
