const express = require("express");
const router = express.Router();
const path = require("path");
const apiKeyMiddleware = require("../middlewares/apiKey")

// router.use(apiKeyMiddleware); // ROUTER LEVEL MIDDLEWARE ==> NOW APPLY ON ALL THE ROUTES

router.get("/", (req, res) => {
    // TO SEND A FILE IN RESPONSE 
    // path.resolve(__dirname) => GIVES CURRENT DIRECTORY PATH
    // => RESOLVE IS USE TO GIVE THE ABSOLUTE FILE PATH WHILE JOIN IS USE TO GIVE RELATEIVE PATH
    // path.resolve(__dirname + "index.html");
    const filePath = path.join(__dirname, "..", "index.html");
    res.sendFile(path.resolve(filePath));
})

router.get("/about", (req, res) => {
    const filepath = path.join(__dirname, "..", "about.html")
    console.log("filepath: ", filepath);
    res.sendFile(path.resolve(filepath));
})

router.get("/download", (req, res) => {
    const filepath = path.join(__dirname, "..", "about.html")
    res.download(path.resolve(filepath));
})

// IT WILL USE THE ROUTER OR GLOBAL LEVEL MIDDLEWARE
// router.get("/api/products", (req, res) => { 
// TO APPLY MULTIPLE MIDDLEWARE THE SYNTAX IS
// router.get("/api/products",[MIDDLEWARE 1, MIDDLEWARE 2, MIDDLEWARE 3 ], (req, res) => { 

// APPLYING MIDDLEWARE ON A SINGLE ROUTE (IT CAN APPLY ON ALL ROUTES OR ON THE WHOLE APPLICATION)
router.get("/api/products", apiKeyMiddleware, (req, res) => {
    res.json([
        {
            id: "1",
            name: "Chrome"
        },
        {
            id: "2",
            name: "Firefox"
        }
    ]);
})

// THIS IS THE DELETE ROUTER WHERE WE GET THE PRODUCTID FROM THE REQUEST. 
// HERE PARAMS IS USED TO ACCEPT THE DYNAMIC PARAMETERS
// (Params is used to access route parameters that are specified in the URL of the incoming HTTP request. Route parameters are placeholders in the URL path that can capture dynamic values, making your routes more flexible and allowing you to work with variable data.) ===> CHATGPT

// router.delete("/api/products/:productId/Id", (req, res) => {
//     products = products.filter((product) => product !== req.params.productId);
//     res.send("Ok")
// })

// REQUEST FOR THE ABOVE ROUTER WILL BE
// fetch("/api/products/:{productId}",{ // THIS productId WILL BE THE ID OF THE ITEM WHICH IS DELETED
//     method:'DELETE'
// }).then((res) => (res.json)).then((data)=>{
//     console.log(data);
// })


module.exports = router;