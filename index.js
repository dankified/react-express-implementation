const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/client/build/static`));

app.get('/', (req, res) => {
	res.end();
})


//We set port to be equals to the Heroku local variable process.env.PORT
//if the variable is not available (in development) port will default to 5000
const port = process.env.PORT || 5000;

//We set app to listen to the variable 'port'.
app.listen(port, () => console.log(`App is listening on port ${port}`));