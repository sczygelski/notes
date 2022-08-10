const express = require('express')
const PORT = process.nextTick.PORT || 3001;
const app = express()
const { db } = require('./db/db')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.listen(3001, () => {
    console.log(`API server now on port ${PORT}`)
})