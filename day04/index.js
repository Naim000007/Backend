const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/contact", require("./routes/ContactRoutes"));

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
