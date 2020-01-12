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
app.get('/api/fetch-patient-list', (req, res) => {
	pool.query("SELECT id AS id, data->'name' AS patient FROM patient_database", (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

app.post('/api/fetch-data-by-id', (req, res) => {
  const id = req.body.id;
	pool.query('SELECT data AS patient FROM patient_database WHERE id=($1)',[id] , (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

app.post('/api/add-patient-data', (req, res) => {
  /*
  patient_data: json data with same structure as max_musterman
  */
  data = req.body.data
  pool.query('INSERT INTO patient_database (data) VALUES ($1)', [data], error => {
    if (error) {
      	throw error
    }
    res.status(201).json({ status: 'success', message: 'patient data added.' })
  })
});

app.post('/api/remove-data-by-id', (req, res) => {
  const id = req.body.id;
  pool.query('DELETE FROM patient_database WHERE id=($1)',[id] , (error, results) => {
    if (error) {
      throw error
    }
    //console.log(results)
    res.status(200).json({ status: 'success', message: 'patient data removed.', id: id})
  })
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