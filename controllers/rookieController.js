const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

router.get('/', isAuthenticated, function (req, res) {
    // we can pass in things in the query of a REST call!
    db.Event.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.post('/', isAuthenticated, function(req, res) {
    db.Review.create({
        UserId: req.user.id,
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.put('/:id', isAuthenticated, function(req, res) {
    db.Review.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});
module.exports = router;