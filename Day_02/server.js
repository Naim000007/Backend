const express = require('express');
const app = express();

const simpleLogger = (req, res, next) => {
    console.log(`Request URL: ${req.url} ${req.method} --- ${new Date().toISOString()}`);
    const name = req.query.name
    if (name === "Naim") {
        return res.json({ message: 'Hello Naim!' });// early response hole amra ek ta return statement dibo 
    }
    next();
}


app.get('/hello', simpleLogger, (req, res, next) => {
    // console.log(`Request URL: ${req.url} ${req.method} --- ${new Date().toISOString()}`);

    res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})