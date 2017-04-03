var express = require('express');
var app = express();
var pgp = require('pg-promise')({
    promiseLib: Promise
});
var config = require('./config.js');
var db = pgp({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

var artistArray;

db.query('SELECT * FROM artist')
.then(function(result) {
    pgp.end();
    artistArray = result;
})
.catch(function rejected(err) {
  console.log('error:', err.message);
  pgp.end();
});

app.get('/fav_artists', function(req, res) {
    res.render('fav_artists.hbs', {
        artist: artistArray
    });
});

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
