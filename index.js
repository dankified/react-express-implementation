//requiring express
const express = require('express');
const axios = require('axios');

//creating express app.
const app = express();

//In order to obtain our private api key we first check if process.env.PORT exist.
//This variable does not exist if we are running on development else it does.
//Based on the if else statement key will be assigned the correct value.
// let key;
// if(process.env.PORT) {
// 	key = process.env.KEY;
// } else {
// 	// ./config.js does not exist in Heroku, so it is not accesible.
// 	key = require('./config.js');
// }

//Serves the contents of ${__dirname}/client/build as static assets to the browser (html, css, and js files); 
app.use(express.static(`${__dirname}/client/build`));

//example route
app.get('/api/questions', async (req, res) => {
	let {data} = await axios.get('https://opentdb.com/api.php?amount=10');
	res.send(data);
});


//We set port to be equals to the Heroku local variable process.env.PORT
//if the variable is not available (in development) port will default to 5000
const port = process.env.PORT || 5000;

//We set app to listen to the variable 'port'.
app.listen(port, () => console.log(`App is listening on port ${port}`));