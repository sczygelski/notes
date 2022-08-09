const express = require('express')
const PORT = process.nextTick.PORT || 3001;
const app = express()
const { db } = require('./db/db')



app.get('/api/db', (req, res) => {
    res.send('hello')
})

app.listen(3001, () => {
    console.log(`API server now on port ${PORT}`)
})