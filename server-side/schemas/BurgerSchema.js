const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BurgerSchema = new Schema({
  email:  String,
  items: Array,
  date: { type: Date, default: Date.now },
  price: Number,
  itemsInOrder: Number,
  orderMade: Boolean,
  orderPickedUp: Boolean
});

const Burger = mongoose.model('Burger', BurgerSchema)

module.exports = Burger
