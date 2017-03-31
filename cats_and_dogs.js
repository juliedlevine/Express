var express = require('express');
var app = express();

app.get('/cats_and_dogs', function(req, res) {
    res.render('cats_and_dogs.hbs', {
        title: 'Cats and Dogs'
    });
});


app.use(express.static('public'));
app.set('view engine', 'hbs');
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
