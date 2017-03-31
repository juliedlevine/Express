var express = require('express');
var app = express();


app.get('/dogs', function(req, res) {
    res.render('dogs.hbs', {
        title: 'DOGS',
        sound: 'Woof'
    });
});

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
