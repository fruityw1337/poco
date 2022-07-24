const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    token = req.headers.authorization.split(' ')[1]

    if (!token) {
      res.status(401).json({ message: 'not auth user' })
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'))
    req.user = decoded
    next()
  } catch (e) {
    res.status(500).json({ message: 'something went wrong on the server side' })
  }
}
