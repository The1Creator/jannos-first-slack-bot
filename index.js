const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    const reply = {
        "status": "ok"
    };
    res.json(reply);
});

const listener = app.listen(process.env.PORT || '3000', function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
