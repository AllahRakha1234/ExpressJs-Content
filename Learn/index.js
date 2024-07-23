const express = require('express')
const path = require('path')
const app = express()
const port = 3000
// USERDIFINED MIDDLEWARE
// const myMiddleware = (req, res, next) => {
//     console.log('middleware')
// }
// MIDDLWARE (app.use) (USED FOR ALL ROUTES) (STATIC FILES)
app.use(express.static(path.join(__dirname, "public")))
// app.use(myMiddleware)

// APP.GET (USED FOR SPECIFIC ROUTES)
app.get('/hello/:name', (req, res) => {
    res.send("Hello World!" + " --- " + req.params.name)
})
// ROUTE FOR ABOUT
app.get('/about', (req, res) => {
    // res.send('about')
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(500)
    res.json({ a: 1 });
})
// ROUTE FOR CONTACT
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
}) 