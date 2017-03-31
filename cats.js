var express = require('express');
var app = express();

app.get('/cats', function(req, res) {
    res.render('cats.hbs', {
        title: 'CATS',
        sound: 'Meow'
    });
});

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
