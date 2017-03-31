var express = require('express');
var app = express();

app.get('/hello/:name', function(req, res) {
    var name = req.params.name;
    var age = req.query.age;
    var year = 2017 - age;
    res.render('hello.hbs', {
        title: 'Hello Application',
        name: name,
        year: year
    });
});

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
