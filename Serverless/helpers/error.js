
module.exports.generateError = (error) => {
    const errorBody = {
        status: {
            messages: [
                {
                errorname: error.name || "Error",
                type: error.type,
                description: error.message,
                responseCode: error.code || "0000",
                status: error.status
                }
            ]
        }
    }

    return {
        isBase64Encoded: false,
        statusCode: error.status || 400,
        body: JSON.stringify(errorBody)
    }
}