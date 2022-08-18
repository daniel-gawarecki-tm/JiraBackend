const fetch = require('node-fetch')
const { generateError } = require('../helpers/error')
const { Response } = require('../helpers/response')

module.exports.request = async(url, method, body = null) => {
    try {
        const jira = await fetch(url, {
            method: method,
            headers: {
                'Authorization': `Basic ${Buffer.from(process.env["username"] + ":" + process.env["token"]).toString('base64')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        })
        return Response(await jira.status, await jira.text())
    }
    catch (error){
        return generateError(error)
    }
}