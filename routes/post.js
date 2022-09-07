const express = require('express')
const app = express()
const router = express.Router()
const Post = require('../models/post.model')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (err) {
        res.send("Err : " + err)
    }
})

module.exports = router