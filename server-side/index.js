const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 8080
const mongoose = require('mongoose');
const mongodbURL = 'mongodb://appuser:nodepassword1@ds139934.mlab.com:39934/burger-app'
mongoose.connect(mongodbURL, { useNewUrlParser: true });
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
       newBurger.itemsInOrder = cart.length
       newBurger.orderMade = false
       newBurger.orderPickedUp = false

       newBurger.save(function(err,burger){
         if(err){
           res.send(JSON.stringify({message: 'order encountered an ERROR'}))
         }else{
           res.send(JSON.stringify({message: 'order is placed', email: email}))
         }
       })
})

app.get('/get-orders',(req,res)=>{
  Burger.find({},(error,posts) => {
    res.json(posts)
  })
})
app.get('/get-open-orders',(req,res)=>{
  Burger.find({orderMade: true},(error,posts) => {
    res.json(posts)
  })
})

app.put('/order-picked-up/:orderID',(req,res) => {

  let orderID = req.params.orderID

  Burger.findByIdAndUpdate(orderID,{orderPickedUp: true},{new: true},(error,updatedOrder) => {
    res.json(updatedOrder)
  })
})

app.put('/order-made/:orderID',(req,res) => {

  let orderID = req.params.orderID

  Burger.findByIdAndUpdate(orderID,{orderMade: true},{new: true},(error,updatedOrder) => {
    res.json(updatedOrder)
  })
})

app.get('*', (req,res)=>{
  res.send('!!')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
