const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('./client/src/assets/posts.json');
const tours = require('./client/src/assets/tour.json');
const band = require('./client/src/assets/band.json');
const music = require('./client/src/assets/music.json');
const history = require('./client/src/assets/history.json')


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
app.get('/music', (req, res) => {
  res.json(music);
});
app.get('/history', (req, res) => {
  res.json(history);
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);