let express = require('express');
let app = express();
app.use('/public', express.static(__dirname + '/public'));
console.log('Hello world');
app.get('/', (req, res) => {
    const path = __dirname + '/views/index.html';
    res.sendFile(path);
})




































module.exports = app;
