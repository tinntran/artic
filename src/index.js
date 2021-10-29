require('dotenv').config()
const path = require('path')
const express = require('express')
const routers = require('./routers')
const methodOverride = require('method-override')

const db = require('./config/db')

db.connect()

const PORT = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'resources/views'))

routers(app)

app.listen(PORT, () => console.log(`app is listening on http://localhost:${PORT}/`))