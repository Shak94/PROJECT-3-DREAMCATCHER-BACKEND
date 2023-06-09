require("dotenv").config();
const express = require('express');
const { json } = require('express');
const app = express();
const { PORT, MONGODB_URI } = process.env || 4000;
const cors = require('cors');
const mongoose =require('mongoose')
const dreamsController = require('./controllers/dreams');
const nightmaresController = require('./controllers/nightmares');
const seedDataController = require('./controllers/seedData');



// MIDDLEWARE
app.use(cors());
app.use(json());
app.use('', dreamsController);
app.use('', nightmaresController);
app.use('', seedDataController);

// ROUTES
app.get('/', (req, res) => {
  res.json("home");
});

app.get('/*', (req, res) => {
  res.json('Wrong URL');
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
module.exports=app;