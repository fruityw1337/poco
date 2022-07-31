const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Post = require('../models/Post')
const User = require('../models/User')

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    let post = await Post.findById(req.params.id)
    console.log('post', post)

    const owner = await User.findById(post.createdBy)
    post.createdBy = owner.username

    res.status(200).json(post)
  } catch (error) {
    return res.status(401).json({ message: 'not auth' })
  }
})

router.get('/', async (req, res) => {
  try {
    let posts = await Post.find({ limit: 10 })

    for (let post of posts) {
      owner = await User.findById(post.createdBy)
      post.createdBy = owner.username
    }

    res.status(200).json(posts)
  } catch (error) {
    return res.status(401).json({ message: 'not auth' })
  }
})

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

module.exports = router
