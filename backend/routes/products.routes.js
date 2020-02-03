const router = require('express').Router();
let Card = require('../models/productCard');
const faker = require('faker');

router.route('/').get((req, res) => {

    Card.find()
        .then(card => res.json(card))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const product = req.body.product;
    const img_photo = req.body.img_photo;
    const name = req.body.name;
    const price = req.body.price;
    const productNumber = req.body.productNumber;
    const microprocessor = req.body.microprocessor;
    const memory = req.body.memory;
    const display = req.body.display;
    const hardDrive = req.body.hardDrive;
    const power = req.body.power;
    const weight = req.body.weight;

    const newCard = new Card({
        product,
        img_photo,
        name,
        price,
        productNumber,
        microprocessor,
        memory,
        display,
        hardDrive,
        power,
        weight
    });

    newCard.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Card.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Card.findByIdAndDelete(req.params.id)
        .then(() => res.json('product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Card.findById(req.params.id)
        .then(card => {
            card.product = req.body.product;
            card.img_photo = req.body.img_photo;
            card.name = req.body.name;
            card.price = req.body.price;
            card.productNumber = req.body.productNumber;
            card.microprocessor = req.body.microprocessor;
            card.memory = req.body.memory;
            card.display = req.body.display;
            card.hardDrive = req.body.hardDrive;
            card.power = req.body.power;
            card.weight = req.body.weight;
            card.save()
                .then(() => res.json('Product updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;