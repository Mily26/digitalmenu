const express = require('express')
const cors = require('cors')
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