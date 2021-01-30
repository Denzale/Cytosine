const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;
const axios = require ('axios');

router.get('/image', async (req, res) =>{
    const omdbRes = await axios.get ('');
    res.json(omdbRes.data);
});

router.get('/', isAuthenticated, function(req, res) {
    db.Image.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


router.get('/:id', isAuthenticated, function(req, res) {
    db.Image.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.post('/', isAuthenticated, function(req, res) {
    db.Image.scope('withPassword')
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


router.put('/:id', isAuthenticated, function(req, res) {
    db.Image.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


router.delete('/:id', isAuthenticated, function(req, res) {
    db.Image.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
