const express = require('express');
const router = express.Router();
const Posting = require('../models/table/posting');
const Applicant = require('../models/table/applicant');

router.get('/postings', (req, res) => {
    Posting.findAll({
        where:{userId: 1}
    }).then((postings) => res.json(postings))
})

module.exports = router;