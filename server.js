const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');  // what is this for?
const { pool } = require('./config');

const app = express();
const port = process.env.PORT || 5000;

var max_musterman={
  name: "max musterman",
  personalId: "max-musterman",
  quizAnswers:[
    {
      question: "How much you drink on average per day?",
      id: "drink_amount1",
      //videoUrl:'https://www.youtube.com/watch?v=3-iCDOYkfms',
      answers: [
          {
              type: "ca. 1 Liter",
              content: "ca. 1 Liter"
          },
          {
              type: "ca. 1.5-2 Liter",
              content: "ca. 1.5-2 Liter"
          },
          {
              type: "ca. 2-3 Liter",
              content: "ca. 2-3 Liter"
          }
      ]
    },
    {
      question: "How much you drink on average per day?",
      id: "drink_amount2",
      //videoUrl:'https://www.youtube.com/watch?v=3-iCDOYkfms',
      answers: [
          {
              type: "ca. 1 Liter",
              content: "ca. 1 Liter"
          },
          {
              type: "ca. 1.5-2 Liter",
              content: "ca. 1.5-2 Liter"
          },
          {
              type: "ca. 2-3 Liter",
              content: "ca. 2-3 Liter"
          }
      ]
    },
    {
      question: "How much you drink on average per day?",
      id: "drink_amount5",
      //videoUrl:'https://www.youtube.com/watch?v=3-iCDOYkfms',
      answers: [
          {
              type: "ca. 1 Liter",
              content: "ca. 1 Liter"
          },
          {
              type: "ca. 1.5-2 Liter",
              content: "ca. 1.5-2 Liter"
          },
          {
              type: "ca. 2-3 Liter",
              content: "ca. 2-3 Liter"
          }
      ]
    }
  ]
}

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

app.get('/api/fetch-patient-list', (req, res) => {
	pool.query("SELECT id AS id, data->'name' AS patient FROM patient_database", (error, results) => {
  //pool.query("SELECT * FROM patient_database", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })

  	//res.send({ express: 'Hello From Express' }); 
});

app.post('/api/fetch-data-by-id', (req, res) => {
  const id = req.body.id;
  console.log('#############');
  console.log(id);
	pool.query('SELECT data AS patient FROM patient_database WHERE id=($1)',[id] , (error, results) => {
  //pool.query("SELECT id AS id, data->'name' AS patient FROM patient_database", (error, results) => {
  //pool.query("SELECT * FROM patient_database", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
  	//res.send({ express: 'Hello From Express' }); 
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

app.post('/api/add-patient-data', (request, response) => {
  //const { author, title } = request.body
  data = JSON.stringify(max_musterman);
  pool.query('INSERT INTO patient_database (data) VALUES ($1)', [data], error => {
    if (error) {
    	console.log(error)
      	throw error
    }
    response.status(201).json({ status: 'success', message: 'patient data added.' })
    //response.send(
    //	`I received your POST request. This is what you sent me: ${test_json}`,
  	//);
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