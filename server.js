var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

// for CSS, images, fonts, scripts
app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/styles/fonts", express.static(__dirname + '/styles/fonts'));
app.use("/scripts", express.static(__dirname + '/scripts'));

// for HTML
app.get('/', function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
});
app.get('/questionnaire', function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/questionnaire.html`));
});



// for PORT
app.listen(process.env.PORT || 2000);
