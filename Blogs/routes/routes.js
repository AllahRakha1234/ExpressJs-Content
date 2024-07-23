const express = require('express')
const router = express.Router()
const path = require('path')
const blogsData = require('../data/blogsData.js')
// const app = express()

// ROUTE FOR HOME
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../template/index.html'))
    res.render('home');
})

router.get('/blogs', (req, res) => {
    blogsData.forEach((blog) => {
        console.log("Title: " + blog['title'] + '\nContent: ' + blog['content']);
    })
    // res.sendFile(path.join(__dirname, '../template/blogs.html'))
    // res.render('blogs', {
    //     title: blogsData[0]['title'],
    //     content: blogsData[0]['content']
    // });
    // OR OTHER WAY TO PASS DATA
    res.render('blogs', {
        blog: blogsData
    });
})
// EXPORT ROUTER FOR USE IN INDEX.JS
module.exports = router
