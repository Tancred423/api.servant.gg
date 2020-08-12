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

// Getter
async function sendRandomLink(res, name) {
    fs.readFile(__dirname + `/public/links/${name}.txt`, function (err, data) {
        if (err) throw err;
        else {
            data += '';
            let lines = data.split(/[\r\n]+/);
            let imageUrl = lines[Math.floor(Math.random() * lines.length)];
            res.json({
                imageUrl: imageUrl
            });
        }
    });
}

// Interactions
app.get('/beg', (req, res) => {
    sendRandomLink(res, 'beg');
});

app.get('/birthday', (req, res) => {
    sendRandomLink(res, 'birthday');
});

app.get('/bite', (req, res) => {
    sendRandomLink(res, 'bite');
});

app.get('/bully', (req, res) => {
    sendRandomLink(res, 'bully');
});

app.get('/cheers', (req, res) => {
    sendRandomLink(res, 'cheers');
});

app.get('/cookie', (req, res) => {
    sendRandomLink(res, 'cookie');
});

app.get('/cop', (req, res) => {
    sendRandomLink(res, 'cop');
});

app.get('/dab', (req, res) => {
    sendRandomLink(res, 'dab');
});

app.get('/flex', (req, res) => {
    sendRandomLink(res, 'flex');
});

app.get('/highfive', (req, res) => {
    sendRandomLink(res, 'highfive');
});

app.get('/hug', (req, res) => {
    sendRandomLink(res, 'hug');
});

app.get('/kiss', (req, res) => {
    sendRandomLink(res, 'kiss');
});

app.get('/lick', (req, res) => {
    sendRandomLink(res, 'lick');
});

app.get('/pat', (req, res) => {
    sendRandomLink(res, 'pat');
});

app.get('/poke', (req, res) => {
    sendRandomLink(res, 'poke');
});

app.get('/slap', (req, res) => {
    sendRandomLink(res, 'slap');
});

app.get('/shame', (req, res) => {
    sendRandomLink(res, 'shame');
});

app.get('/wave', (req, res) => {
    sendRandomLink(res, 'wave');
});

app.get('/wink', (req, res) => {
    sendRandomLink(res, 'wink');
});

// Random
app.get('/bird', (req, res) => {
    sendRandomLink(res, 'bird');
});

app.get('/cat', (req, res) => {
    sendRandomLink(res, 'cat');
});

app.get('/dog', (req, res) => {
    sendRandomLink(res, 'dog');
});

app.get('/fennec', (req, res) => {
    sendRandomLink(res, 'fennec');
});

app.get('/fox', (req, res) => {
    sendRandomLink(res, 'fox');
});

app.get('/frog', (req, res) => {
    sendRandomLink(res, 'frog');
});

app.get('/koala', (req, res) => {
    sendRandomLink(res, 'koala');
});

app.get('/panda', (req, res) => {
    sendRandomLink(res, 'panda');
});

app.get('/pikachu', (req, res) => {
    sendRandomLink(res, 'pikachu');
});

app.get('/redpanda', (req, res) => {
    sendRandomLink(res, 'redpanda');
});

app.get('/sloth', (req, res) => {
    sendRandomLink(res, 'sloth');
});

app.get('/wolf', (req, res) => {
    sendRandomLink(res, 'wolf');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.status(404).render('404', { req });
});

app.listen(PORT, () => {
    console.log(`Websocket connected on port ${PORT}`);
});