const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3001
const dotenv = require('dotenv');
dotenv.load();
const stripe = require('stripe')(process.env.SECRET_KEY)

app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/save-stripe-token', (req,res) => {
  const charge = stripe.charges.create({
           amount: req.body.amount,
           currency: 'USD',
           source: req.body.token
       })
       let email = req.body.email
       let cart = req.body.cart
  res.send(JSON.stringify({message: 'order placed', email : email}))
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
