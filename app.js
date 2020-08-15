var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

// for CSS, images, fonts, scripts
app.use(express.static(__dirname, { 
    extensions: ['html']
}));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/styles/fonts", express.static(__dirname + '/styles/fonts'));
app.use("/scripts", express.static(__dirname + '/scripts'));

// for HTML
// app.get('/', function (req, res) {
//   res.sendFile(path.join(`${__dirname}/views/index.html`));
// });
// app.get('/', function (req, res) {
//   res.sendFile(path.join(`${__dirname}/views/worksonperspective.html`));
// });
app.get('/', function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
});
app.get('/views/book/', function (req, res) {
    res.sendFile(path.join(`${__dirname}/views/worksonperspective`));
  });




// for PORT
app.listen(process.env.PORT || 2000);
