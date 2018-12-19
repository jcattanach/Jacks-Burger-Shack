const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BurgerSchema = new Schema({
  email:  String,
  items: Array,
  date: { type: Date, default: Date.now },
  price: Number
});

const Burger = mongoose.model('Burger', BurgerSchema)

module.exports = Burger
