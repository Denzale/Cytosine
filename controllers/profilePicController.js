const db = require('../models');
const router = require('express').Router();


//Image - Read All
router.get('/', (req, res) => {
    db.Image.findAll(req.query)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
});


//Image - Read One
router.get('/:id', (req, res) => {
    db.City.findByPk(req.params.id, { include: db.Image })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
});

//Image - Update
router.put('/:id', (req, res) => {
    db.Image.update(req.body, { where: { id: req.params.id } })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
});

//Image - Delete

router.delete('/:id', (req, res) => {
    db.Image.destroy({ where: { id: req.params.id } })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
});

module.exports = router;
