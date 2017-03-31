var express = require('express');
var app = express();

var animalArray = [
  { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'bunnies', favorite: true },
  { name: 'polar bears', favorite: true },
  { name: 'pandas', favorite: true },
  { name: 'tree frogs', favorite: false },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: false },
];

app.get('/fav_animals', function(req, res) {
    res.render('fav_animals.hbs', {
        animals: animalArray
    });
});

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
