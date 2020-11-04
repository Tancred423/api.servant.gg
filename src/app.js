global.devMode = false;

require('dotenv').config({ path: devMode ? 'D:/OneDrive/Documents/Programming/SERVANT GROUP/api.servant.gg/.env' : '/var/www/api.servant.gg/.env' });
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

////////////////////////////////////////////
// Express
////////////////////////////////////////////
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get('/', (req, res) => {
    res.render('home', { req });
});

// Getter
async function sendRandomLink(req, res, name) {
    console.log()
    fs.readdir(
        `${__dirname}/public/${name}`,
        { withFileTypes: true },
        (err, files) => {
            if (err) {
                console.error(err);
                res.json({
                    imageUrl: null
                });
            } else {
                let randomFileIndex = Math.floor(Math.random() * Math.floor(files.length));
                res.json({
                    imageUrl: `${req.protocol}://${req.headers.host}/${name}/${files[randomFileIndex].name}`
                });
            }
        }
    )

}

// Interactions
app.get('/beg', (req, res) => {
    sendRandomLink(req, res, 'beg');
});

app.get('/birthday', (req, res) => {
    sendRandomLink(req, res, 'birthday');
});

app.get('/bite', (req, res) => {
    sendRandomLink(req, res, 'bite');
});

app.get('/bully', (req, res) => {
    sendRandomLink(req, res, 'bully');
});

app.get('/cheers', (req, res) => {
    sendRandomLink(req, res, 'cheers');
});

app.get('/cookie', (req, res) => {
    sendRandomLink(req, res, 'cookie');
});

app.get('/cop', (req, res) => {
    sendRandomLink(req, res, 'cop');
});

app.get('/dab', (req, res) => {
    sendRandomLink(req, res, 'dab');
});

app.get('/flex', (req, res) => {
    sendRandomLink(req, res, 'flex');
});

app.get('/highfive', (req, res) => {
    sendRandomLink(req, res, 'highfive');
});

app.get('/hug', (req, res) => {
    sendRandomLink(req, res, 'hug');
});

app.get('/kiss', (req, res) => {
    sendRandomLink(req, res, 'kiss');
});

app.get('/lick', (req, res) => {
    sendRandomLink(req, res, 'lick');
});

app.get('/pat', (req, res) => {
    sendRandomLink(req, res, 'pat');
});

app.get('/poke', (req, res) => {
    sendRandomLink(req, res, 'poke');
});

app.get('/slap', (req, res) => {
    sendRandomLink(req, res, 'slap');
});

app.get('/shame', (req, res) => {
    sendRandomLink(req, res, 'shame');
});

app.get('/wave', (req, res) => {
    sendRandomLink(req, res, 'wave');
});

app.get('/wink', (req, res) => {
    sendRandomLink(req, res, 'wink');
});

// Random
app.get('/bird', (req, res) => {
    sendRandomLink(req, res, 'bird');
});

app.get('/cat', (req, res) => {
    sendRandomLink(req, res, 'cat');
});

app.get('/dog', (req, res) => {
    sendRandomLink(req, res, 'dog');
});

app.get('/fennec', (req, res) => {
    sendRandomLink(req, res, 'fennec');
});

app.get('/fox', (req, res) => {
    sendRandomLink(req, res, 'fox');
});

app.get('/frog', (req, res) => {
    sendRandomLink(req, res, 'frog');
});

app.get('/koala', (req, res) => {
    sendRandomLink(req, res, 'koala');
});

app.get('/panda', (req, res) => {
    sendRandomLink(req, res, 'panda');
});

app.get('/pikachu', (req, res) => {
    sendRandomLink(req, res, 'pikachu');
});

app.get('/redpanda', (req, res) => {
    sendRandomLink(req, res, 'redpanda');
});

app.get('/sloth', (req, res) => {
    sendRandomLink(req, res, 'sloth');
});

app.get('/wolf', (req, res) => {
    sendRandomLink(req, res, 'wolf');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.status(404).render('404', { req });
});

app.listen(PORT, () => {
    console.log(`Websocket connected on port ${PORT}`);
});