const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardsSchema = new Schema({
    product: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productNumber: {type: String, required: true},
    microprocessor: {type: String, required: true},
    memory: {type: String, required: true},
    display: {type: String, required: true},
    hardDrive: {type: String, required: true},
    power: {type: String, required: true},
    weight: {type: String, required: true},


}, {
    timestamps: true,
});

const Card = mongoose.model('Card', cardsSchema);

module.exports = Card;