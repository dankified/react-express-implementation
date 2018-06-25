//requiring express
const express = require('express');
const axios = require('axios');

//creating express app.
const app = express();

app.use(express.static(`${__dirname}/client/build`));

app.get('/api/questions', async (req, res) => {
	let {data} = await axios.get('https://opentdb.com/api.php?amount=10');
	res.send(data);
});

const port = process.env.PORT || 5000;

//We set app to listen to the variable 'port'.
app.listen(port, () => console.log(`App is listening on port ${port}`));