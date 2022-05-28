const config = require('config')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 5000

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))

async function start() {
    try {
        await mongoose
            .connect(config.get('mongoURI'), {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(console.log('connetion to mongodb success.'))

        app.listen(port, () => {
            console.log(`app has been started on port ${port}.`)
        })
    } catch (e) {
        console.log('error', e)
        process.exit(1)
    }
}

start()
