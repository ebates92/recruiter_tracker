const express = require('express');
const router = express.Router();
const Target = require('../models/table/target');
const Contact = require('../models/table/contact');

router.get('/targets', (req, res) => {
    Target.findAll({
        where:{userId: 1}
    }).then((targets) => res.json(targets))
})
.get('/contacts', (req, res) => {
    Contact.findAll({
        where:{userId: 1}
    }).then((contacts) => res.json(contacts))
})
.post('/target', (req, res) => {
    console.log(req.body);
    res.status(201).send();
})

module.exports = router;
