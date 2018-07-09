const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('./client/src/assets/posts.json');
const tours = require('./client/src/assets/tour.json');
const band = require('./client/src/assets/band.json')

const app = express();
app.use(bodyParser.json());

 app.use(cors({ origin: '*' }));

app.get('/posts', (req, res) => {
	res.send(posts);
});
app.get('/tour', (req, res) => {
	res.send(tours);
});

app.get('/band', (req, res) => {
  res.json(band);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);