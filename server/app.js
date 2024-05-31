const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_URL, // Replace with your React app's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Use the cors middleware
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', require('./src/v1/routes'));

module.exports = app;