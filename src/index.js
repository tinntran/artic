require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => res.send('hello world'))

app.listen(PORT, () => console.log(`app is listening on http://localhost:${PORT}/`))