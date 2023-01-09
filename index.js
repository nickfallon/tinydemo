
const express = require('express');

const app = express();

const port = process.env.PORT || "9000";

function get_balance(req, res) {

    let balance = 0;
    res.json({ balance });

}

app.get('/balance', get_balance);

app.listen(port, () => {
    console.log(`express running on port ${port}`);
});