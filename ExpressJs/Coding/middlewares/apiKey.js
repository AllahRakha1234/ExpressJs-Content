const ErrorHandler = require("../Error/ErrorHandler")

const apiKeyMiddleware = (req, res, next) => {
    const api_key = "1234567";
    const user_api_key = req.query.api_key;
    if (user_api_key && user_api_key === api_key) {
        next();
    }
    else {
        next(ErrorHandler.validationError("Api key is not Correct 🔑🔐🗝")) //THIS WILL PASS TO ERRORHANDMIDLWR
        // res.status(422).json({ message: "Api key is not Correct 🔑🔐🗝" })
    }
}

module.exports = apiKeyMiddleware;