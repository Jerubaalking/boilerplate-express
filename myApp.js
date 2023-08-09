let express = require('express');
let bodyParser = require('body-parser');
let app = express();
require('dotenv').config();
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
console.log('Hello world');
const midd = function (req, res, next) {
    console.log("I'm a middleware...");
    const method = req.method;
    const path = req.url;
    const ip = req.ip;
    console.log(method, path + ' - ' + ip)
    next();
}
app.get('/', midd, (req, res) => {
    const path = __dirname + '/views/index.html';
    res.sendFile(path);
});
app.get('/json', midd, (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        return res.json({ "message": "HELLO JSON" });
    }
    return res.json({ "message": "Hello json" });
})
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    return res.json({ "time": req.time });
})
app.get('/:word/echo', (req, res) => {
    res.json({ "echo": req.params.word });
})

app.get('/name', (req, res) => {
    const { first, last } = req.query;
    res.json({ "name": `${first} ${last}` });
})

app.post('/name', (req, res) => {
    const { first, last } = req.query;
    res.json({ "name": `${first} ${last}` });
})



































module.exports = app;
