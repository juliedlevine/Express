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

app.get('/fav_artists', function(req, res) {
    db.query('SELECT * FROM artist')
        .then(function(data) {
            pgp.end();
            return res.render('fav_artists.hbs', {artist: data});
        })
        .catch(function rejected(err) {
          console.log('error:', err.message);
          pgp.end();
        });
});

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
