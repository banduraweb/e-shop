const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardsSchema = new Schema({
    product: { type: String, required: true },
    img_photo: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productNumber: {type: Number, required: true},
    microprocessor: {type: Number, required: true},
    memory: {type: Number, required: true},
    display: {type: Number, required: true},
    hardDrive: {type: Number, required: true},
    power: {type: Number, required: true},
    weight: {type: Number, required: true},
}, {
    timestamps: true,
});

const Card = mongoose.model('Card', cardsSchema);

module.exports = Card;