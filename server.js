const express = require('express'),
    path = require('path'),
    app = express(),
    port = 9999,
    React = require('react/addons');

require('node-jsx').install();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const Resume = React.createFactory(require('./app/components/Resume'));

app.get('/', function(req, res) {
    const resume = React.renderToString(Resume({}));

    res.render('index.ejs', {resume});
});

app.get('*', function(req, res) {
    res.send('404', { statusCode: 404 });
});

app.listen(port);
