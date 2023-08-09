let express = require('express');
let app = express();
require('dotenv').config();
app.use('/public', express.static(__dirname + '/public'));
console.log('Hello world');
app.get('/', (req, res) => {
    const path = __dirname + '/views/index.html';
    res.sendFile(path);
});
app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        return res.json({ "message": "HELLO JSON" });
    }
    return res.json({ "message": "Hello json" });
})

const midd = function (req, res, next) {
    console.log("I'm a middleware...");
    const method = req.method;
    const path = req.url;
    const ip = req.ip;
    console.log(method, path + ' - ' + ip)
    next();
}


































module.exports = app;
