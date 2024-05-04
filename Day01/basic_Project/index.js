const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'I am root Route' });
})
mongoose.connect("mongodb+srv://mdnaim01910423877:YYBxwZMklrOVlemw@poll.po6jqrt.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => app.listen(4545, () => console.log("Server running on port 4545")))
    .catch(error => console.error("Error connecting to MongoDB Atlas:", error));