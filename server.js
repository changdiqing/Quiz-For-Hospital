const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');  // what is this for?
const { pool } = require('./config');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// api calls
app.get('/api/getbooks', (request, response) => {
  pool.query('SELECT * FROM books', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' }); 
});

app.post('/api/addbook', (request, response) => {
  const { author, title } = request.body

  pool.query('INSERT INTO books (author, title) VALUES ($1, $2)', [author, title], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'Book added.' })
  })
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

if (process.env.NODE_ENV === 'production'){
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));

	// Handle React routing, return all requests to React app
	app.get('*', function(req, res){
		res.sendFile(path.join(__dirname,'client/build', 'index.html'));
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));