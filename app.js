const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const { banksRouter } = require('./routes')

const app = express()
const {DB_HOST, PORT = 4000 } = process.env
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/v1/banks', banksRouter)

app.use((_, res) => {
    res.status(404).json({ message: 'Not found' })
})

app.use((err, _, res, __) => {
    res.status(500).json({ message: err.message })
})

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running. Use our API on port: ${PORT}`)
        })
    })
    .catch(() => process.exit(1))


