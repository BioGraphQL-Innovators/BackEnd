const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello'));

app.listen(8081, () => console.log('Running on port:8081'));
