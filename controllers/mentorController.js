const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;
/**
 * Mentor - Read All
 */
router.get('/', isAuthenticated, function(req, res) {
    // we can pass in things in the query of a REST call!
    db.Mentor.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Mentor - Read One
 */
router.get('/:id', isAuthenticated, function(req, res) {
    db.Mentor.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Mentor - Create
 * Notice how we are also taking in the User Id! Important!
 * We need the isAuthenticated middleware in the route to have a user in the request
 */
router.post('/', isAuthenticated, async function(req, res) {
    const Mentor = req.body;
    if(!Mentor.ThreadId){
        const thread = await db.Thread.create();
        Mentor.ThreadId = thread.id;
    }
    console.log(Mentor);
    db.Mentor.create({
        UserId: req.user.id,
        ...Mentor
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Mentor - Update
 */
router.put('/:id', isAuthenticated, function(req, res) {
    db.Mentor.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Mentor - Delete
 */
router.delete('/:id', isAuthenticated, function(req, res) {
    db.Mentor.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
