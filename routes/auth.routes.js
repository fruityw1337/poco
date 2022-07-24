const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
const config = require('config')

const router = Router()

router.post(
  '/register',
  [
    check(
      'username',
      'min length of username 2 chars and max 20 chars'
    ).isLength({ min: 2, max: 20 }),
    check('password', 'min length of password 6 chars').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      // data validation
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'validation of data failed',
        })
      }

      const { username, email, password } = req.body

      // check the uniq username
      const candidate = await User.findOne({ username })

      if (candidate) {
        return res.status(400).json({ message: 'user already exists' })
      }

      // hash the pass
      let hashedPassword = await bcrypt.hash(password, 15)

      // create new user
      userModel = new User({ username, email, password: hashedPassword })
      await userModel.save()

      res.status(201).json({ message: 'user has been created' })
    } catch (e) {
      res.status(500).json({
        message: 'something went wrong on the server side',
      })
    }
  }
)

router.post(
  '/login',
  [
    check('username', 'invalid username').isLength({ min: 2, max: 20 }),
    check('password', 'invalid password').exists(),
  ],
  async (req, res) => {
    try {
      // data validation
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'validation of data failed',
        })
      }

      const { username, password } = req.body

      // check the user is exists
      const user = await User.findOne({ username })

      if (!user) {
        return res.status(400).json({ message: 'user not exists' })
      }

      // check hash password
      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'invalid credentials' })
      }

      // sign jwt
      const token = jwt.sign(
        { username: user.username },
        config.get('jwtSecret'),
        {
          expiresIn: '7d',
        }
      )

      return res.status(200).json({ token, username: user.username })
    } catch {
      res.status(500).json({
        message: 'something goes wrong on the backend',
      })
    }
  }
)

module.exports = router
