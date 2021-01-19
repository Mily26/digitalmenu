const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/carta',{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function() {
    // we're connected!
    console.log('connected to database')
  });
const app = express()
const port = 3001
const routes = require('./routes');

app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello world!')
});

app.use('/api', routes);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})