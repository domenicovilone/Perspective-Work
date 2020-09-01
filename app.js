var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/views', { 
    extensions: ['html']
}));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/styles/fonts", express.static(__dirname + '/styles/fonts'));
app.use("/scripts", express.static(__dirname + '/scripts'));

app.get('/', function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
});
app.get('/book', function (req, res) {
    res.sendFile(path.join(`${__dirname}/views/book/worksonperspective.html`));
});
app.get('/book/#intro', function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/book/worksonperspective.html#intro`));
});
app.get('/book/#q-en', function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/book/worksonperspective.html#q-en`));
});
app.get('/book/#q-fr', function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/book/worksonperspective.html#q-fr`));
});

app.listen(process.env.PORT || 2000);
