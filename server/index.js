const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// initialize app
const app = express();

// middleware
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;


//routes
app.use('/api/v1', require('./routes/index'));

app.get('/', (_req, res) => {
    res.status(200).send('Server is Running!</h1>');
});

//error handling middleware
app.use((err, _req, res, _next) => {
    return res.status(500).json(err);
});

mongoose.connect(process.env.URI).then(() => {
    console.log('Database Connected!');
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
});