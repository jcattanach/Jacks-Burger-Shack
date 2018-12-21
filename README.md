# Jack's Burger Shack

https://jacks-burger-shack.herokuapp.com/

This is my full-stack burger order project. This app uses React and Redux on the client side and Node.js, MongoDb (with MongooseJS), and Express on the server side, along with the Stripe payment API.

The purpose of this application is to allow the user/ customer to customize a burger order, for a fictional restaurant, and pay for the order using the Stripe API.

Here is a live preview on mobile
--------------------------------
![Preview-Gif](https://github.com/jcattanach/Jacks-Burger-Shack/blob/master/burger-shack-mobile%20(1).gif)


#### Front End
The front end of this project was built with React and Redux. It incorporates the Stripe API for payment.

#### Back End
The back end of this project was built with Node.js Express, and MongoDb (through mLab). 

#### Run on your machie locally
To run this project on your local machine you will need to...
1. Download or clone the files
2. Enter the client-side folder and run *npm intsall* your terminal
3. Do the same in the server-side folder
4. run *npm start* in both folders concurrently.

*The react project should run on your local host 3000, and the node server should run on local host 8080.*


*note you will not have access to the Stripe Api unless you create a Stripe account and change your keys in the Stripe.js(client-side) and index.js (server-side)*
