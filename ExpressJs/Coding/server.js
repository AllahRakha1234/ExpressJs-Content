const express = require("express");
const path = require("path")
const app = express();
const mainRouter = require("./routes/index")
const ErrorHandler = require("./Error/ErrorHandler")

//  ***** MIDDLEWARES SETTING *****
// const apiKeyMiddleware = require("./middlewares/apiKey")
// APPLYING THE MIDDLEWARE GLOABALLY ==> NOW IT WILL APPLY ON ALL THE REQUESTS
// app.use(apiKeyMiddleware);
// TO SET THE MIDDLEWARE WE USE APP.USE() => HERE WE SET STATIC MDLWARE
// app.use(express.static('public')); 

// SETTING FOR ACCEPTING JSON DATA
// app.use(express.json()); // TO ALLOW THE FILE TO ACCEPT JSON DATA
// app.use(express.urlencoded({extended:"false"})) // TO ALLOW THE ACTION METHOD POST METHOD IN FORM 

// SETTING PORT
const PORT = process.env.PORT || 3000

// USING THE ROUTES
app.use(mainRouter);

// GLOBAL (NORMAL) MIDDLEWARE FOR ERROR HANDLING GIVEN BY EXPRESS (IF ROUTE NOT MATCHED THEN IT WILL EXECUTE)
app.use((req, res, next) => {
    next(ErrorHandler.notFoundedError("This page does not exist!")); //THIS WILL PASS TO ERROR HAND MIDLWR
    // throw new Error("This Route Does Not Exist")
    // res.send("Page Not Found")
})

// ERROR HANDLING MIDDLEWARE GIVEN BY EXPRESS (ALL THE THROWN ERROR WILL BE CATCH HERE)
app.use((err, req, res, next) => {
    // CHECKING IF AN ERROR IS INSTANCE OF ERRORHANDLER OR NOT
    if (err instanceof ErrorHandler) {
        // console.log("err: ", err);
        res.json({
            error: {
                message: err.message,
                status: err.status
            }
        })
    }
    else {
        res.status(500).json({
            error: {
                message: err.message,
                status: err.status
            }
        })
    }
})

// RUNNING SERVER
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})