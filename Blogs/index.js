const express = require('express')
var exphbs = require('express-handlebars');

const path = require('path')
const app = express()
const port = 3000

var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// USING THE ROUTER FROM ROUTES.JS (URL, ROUTERPATH)
app.use('/', require(path.join(__dirname, 'routes/routes.js')))
app.use('/blogs', require(path.join(__dirname, 'routes/routes.js')))

// ROUTE FOR CONTACT
app.listen(port, () => {
    console.log(`Blog app listening on port http://localhost:${port}`)
})


