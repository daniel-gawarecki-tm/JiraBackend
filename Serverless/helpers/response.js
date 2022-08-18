
module.exports.Response = (status, body) => {
    return {
        "statusCode": status,
        "headers": { 'Content-Type': 'application/json', 'Access-Control-Allowed-Origin': '*' },
        "body": JSON.stringify(body),
    }
}