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
router.route('/posting')
    .post((req, res) => {
        Posting.create({
            positionTitle: req.body.positionTitle,
            jobDescription: req.body.jobDescription,
            salaryRange: req.body.salaryRange,
            qualifications: req.body.qualifications,
            hiringManager: req.body.hiringManager,
            additionalNotes: req.body.additionalNotes,
            isFilled: req.body.is,
            userId: 1,
        }).then((postings) => {
            console.log(postings)
            res.json(postings);
        })
    })

// CONNECT TO POSTGRES APPLICANTS TABLE
router.route('/applicant')
    .post((req,res) => {
        Applicant.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            linked_in: req.body.linked_in,
            resume_link: req.body.resume_link,
            recruiter_notes: req.body.recruiter_notes,
            userId: 1,
        }).then((applicants) => res.json(applicants))
    })

// CONNECT TO POSTGRES POSTINGAPPLICANT TABLE
router.route('/applicanttoposting')
    .post((req, res) => {
        PostingApplicant.create({
            applicantId: req.body.applicantId,
            postingId: req.body.postingId,
            userId: 1,
            applicantStage: req.body.applicantStage,
            isRejected: req.body.isRejected,
            hiringManager_notes: req.body.hiringManager_notes,
        }).then((postingapplicant) => res.json(postingapplicant))
    })


module.exports = router;
