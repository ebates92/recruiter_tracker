const express = require('express');
const router = express.Router();
const Posting = require('../models/table/posting');
const Applicant = require('../models/table/applicant');

router.get('/', (req, res) => res.send('test'));

module.exports = router;