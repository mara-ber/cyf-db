const express = require("express");
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cyf_hotels',
    password: 'postgres',
    port: 5432
});

app.get("/hotels", function (req, res) {
    pool.query('SELECT * FROM hotels', (error, result) => {
        res.json(result.rows);
    });
});

const listener = app.listen(3000, function () {
    console.log("Your app is listening on port 3000");
});