const express = require('express');
const path = require('path');
const api = require('./server/routes/api');
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bank', { useNewUrlParser: true })

const app = express();

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
//     next()
// })

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/', api);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 3001;
const port = process.env.PORT || PORT;
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})
