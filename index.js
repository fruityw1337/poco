const config = require('config')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/posts', require('./routes/posts.routes'))

async function start() {
  try {
    await mongoose
      .connect(config.get('mongoURI'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log('connetion to mongodb success.'))

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static('client/dist'))

      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
      })

      app.listen(PORT, '0.0.0.0', () => {
        console.log(`app has been started on on port ${PORT}.`)
      })
    } else {
      app.listen(PORT, () => {
        console.log(`app has been started on on port ${PORT}.`)
      })
    }
  } catch (e) {
    console.log('error', e)
    process.exit(1)
  }
}

start()
