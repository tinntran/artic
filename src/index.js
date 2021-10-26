require('dotenv').config()
const path = require('path')
const express = require('express')
const routers = require('./routers')

const db = require('./config/db')

db.connect()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))

routers(app)

app.listen(PORT, () => console.log(`app is listening on http://localhost:${PORT}/`))