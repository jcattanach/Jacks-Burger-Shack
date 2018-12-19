const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3001
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/burger');
const db = mongoose.connection;
const dotenv = require('dotenv');
dotenv.load();
const stripe = require('stripe')(process.env.SECRET_KEY)
const Burger = require('./schemas/BurgerSchema')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to MongoDb...')
});

app.post('/save-stripe-token', (req,res) => {
  const charge = stripe.charges.create({
           amount: req.body.amount,
           currency: 'USD',
           source: req.body.token
       })

       let email = req.body.email
       let cart = req.body.cart
       let price = (req.body.amount * .01).toFixed(2)

       var newBurger = new Burger()

       newBurger.email = email
       newBurger.items = cart
       newBurger.price = price

       newBurger.save(function(err,burger){
         if(err){
           res.send(JSON.stringify({message: 'error saving order', email : email}))
         }else{
           res.send(JSON.stringify({message: 'order is placed', email : email, cart: cart}))
         }
       })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
