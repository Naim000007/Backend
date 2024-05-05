require(`dotenv`).config('../.env')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { message } = require('statuses');
const app = express();

app.use(
    [
        morgan('dev'),
        cors(),
        express.json(),
    ]
)

app.get('/health', (_req, res) => {
    throw new Error('Error')
    res.status(200).send('OK');
})

app.use((req, _res, next) => {
    const error = new Error('Resource not found');
    error.status = 404;
    next(error);
})

app.use((error, _req, res, _next) => {
    if (error.status) {
        return res.status(error.status).json({
            message: error.message,
        })
    }
    res.status(500).json({ message: 'something went wrong' })
})

module.exports = app 