const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;
/**
 * Thread - Read All
 */
router.get('/', isAuthenticated, function(req, res) {
    // we can pass in things in the query of a REST call!
    db.Thread.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Thread - Read One
 */
router.get('/:id', isAuthenticated, function(req, res) {
    db.Thread.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Thread - Create
 * Notice how we are also taking in the User Id! Important!
 * We need the isAuthenticated middleware in the route to have a user in the request
 */
router.post('/', isAuthenticated, function(req, res) {
    db.Thread.create({
        UserId: req.user.id,
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Thread - Update
 */
router.put('/:id', isAuthenticated, function(req, res) {
    db.Thread.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Thread - Delete
 */
router.delete('/:id', isAuthenticated, function(req, res) {
    db.Thread.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
