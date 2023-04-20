/* eslint-disable no-console */
const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

// Connect to MongoDB
require('./app/db');

const app = express();

app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, () => console.log(`Backend running on port:${PORT}..`));
