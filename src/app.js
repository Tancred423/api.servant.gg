require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// General stuff
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.render('home', { req });
});

// Interactions
app.get('/beg', (req, res) => {
    fs.readFile(__dirname + "/public/links/beg.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/birthday', (req, res) => {
    fs.readFile(__dirname + "/public/links/birthday.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/bite', (req, res) => {
    fs.readFile(__dirname + "/public/links/bite.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/bully', (req, res) => {
    fs.readFile(__dirname + "/public/links/bully.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/cookie', (req, res) => {
    fs.readFile(__dirname + "/public/links/cookie.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/cop', (req, res) => {
    fs.readFile(__dirname + "/public/links/cop.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/dab', (req, res) => {
    fs.readFile(__dirname + "/public/links/dab.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/flex', (req, res) => {
    fs.readFile(__dirname + "/public/links/flex.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/highfive', (req, res) => {
    fs.readFile(__dirname + "/public/links/highfive.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/hug', (req, res) => {
    fs.readFile(__dirname + "/public/links/hug.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/kiss', (req, res) => {
    fs.readFile(__dirname + "/public/links/kiss.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/lick', (req, res) => {
    fs.readFile(__dirname + "/public/links/lick.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/pat', (req, res) => {
    fs.readFile(__dirname + "/public/links/pat.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/poke', (req, res) => {
    fs.readFile(__dirname + "/public/links/poke.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/slap', (req, res) => {
    fs.readFile(__dirname + "/public/links/slap.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/shame', (req, res) => {
    fs.readFile(__dirname + "/public/links/shame.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/wave', (req, res) => {
    fs.readFile(__dirname + "/public/links/wave.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/wink', (req, res) => {
    fs.readFile(__dirname + "/public/links/wink.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

// Random
app.get('/bird', (req, res) => {
    fs.readFile(__dirname + "/public/links/bird.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/cat', (req, res) => {
    fs.readFile(__dirname + "/public/links/cat.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/dog', (req, res) => {
    fs.readFile(__dirname + "/public/links/dog.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/fennec', (req, res) => {
    fs.readFile(__dirname + "/public/links/fennec.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/fox', (req, res) => {
    fs.readFile(__dirname + "/public/links/fox.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/koala', (req, res) => {
    fs.readFile(__dirname + "/public/links/koala.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/panda', (req, res) => {
    fs.readFile(__dirname + "/public/links/panda.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/pikachu', (req, res) => {
    fs.readFile(__dirname + "/public/links/pikachu.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/redpanda', (req, res) => {
    fs.readFile(__dirname + "/public/links/redpanda.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

app.get('/sloth', (req, res) => {
    fs.readFile(__dirname + "/public/links/sloth.txt", function (err, data) {
        if (err) throw err;
        data += '';
        var lines = data.split(/[\r\n]+/);

        res.json({
            image_url: lines[Math.floor(Math.random() * lines.length)]
        });
    })
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.status(404).render('404', { req });
});

app.listen(PORT, () => {
    console.log(`Websocket connected on port ${PORT}`);
});