require('dotenv').config()
const express = require('express')
const routers = require('./routers')
const db = require('./config/db')

db.connect()

const PORT = process.env.PORT
const app = express()

routers(app)

app.listen(PORT, () => console.log(`app is listening on http://localhost:${PORT}/`))