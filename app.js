const express = require("express")
const app = express()
require('dotenv').config()
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const { getContentFullData, getContentFullDataById } = require('./controllers/contentFul.control')
const ytbControl = require('./controllers/youtube.control')


app.set('port', process.env.PORT || 4000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'))
}) */

app.get('/ytb', ytbControl)
app.get('/contentful/:content_type&:limit&:locales', getContentFullData)
app.get('/getContentById/:id&:locales', getContentFullDataById)

//app.use(express.static(path.join(__dirname, '/build')))

app.listen(app.get('port'))