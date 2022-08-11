const router = require('express').Router();
const db = require('../db/db.json')
const fs = require('fs')

router.get('/notes', (req, res) => {
    // let results = notes
 
    console.log(db)
    res.json(db)
})

router.post('/notes/', (req, res) => {
    console.log(req.body)
    res.json(db)
    fs.writeFile(db)
})



module.exports = router

