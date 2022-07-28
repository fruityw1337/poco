const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Post = require('../models/Post')

const router = Router()

router.post('/create', auth, async (req, res) => {
  try {
    const { image, title, description, createdBy } = req.body

    const post = new Post({
      title,
      description,
      image,
      createdBy,
    })

    await post.save()

    res.status(201).json({ post })
  } catch (error) {
    return res.status(401).json({ message: 'not auth' })
  }
})

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({ limit: 10 })

    res.status(200).json(posts)
  } catch (error) {
    return res.status(401).json({ message: 'not auth' })
  }
})

module.exports = router
