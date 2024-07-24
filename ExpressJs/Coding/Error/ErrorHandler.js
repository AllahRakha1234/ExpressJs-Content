class ErrorHandler {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }

    static validationError(message = "Api Key Is Not Correct!") {
        return new ErrorHandler(422, message);
    }
    static notFoundedError(message = "Page Not Founded!") {
        return new ErrorHandler(404, message);
    }
}

module.exports = ErrorHandler;