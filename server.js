const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('./client/src/assets/posts.json')

const app = express();
app.use(bodyParser.json());

 app.use(cors({ origin: '*' }));

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);