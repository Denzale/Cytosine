const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

router.get('/', isAuthenticated, function (req, res) {
    // we can pass in things in the query of a REST call!
    db.Event.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

