const express = require('express')
const app = express()
const { db } = require('./db/db')



app.get('/api/db', (req, res) => {
    res.send('hello')
})

app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
})