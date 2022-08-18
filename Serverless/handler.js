'use strict';

const { request } = require('./helpers/response')
const { generateError } = require('./helpers/error')
const host = process.env["url"];

module.exports.createjira = async (req) => {
  const url = `${host}/rest/servicedeskapi/request`
  const method = 'POST'
  const bodyData = req.body;
  try {
    const create = await request(url, method, bodyData)
    console.log(create)
    return Response(200, JSON.stringify(create))
  }
  catch (error) {
    generateError(error)
  }


};

module.exports.deletejira = async (req) => {
  let value = JSON.parse(req.body);
  const url = `${host}/rest/api/3/issue/${value.issueid}`
  const method = 'DELETE'
  try {
    const remove = await request(url, method)
    return Response(200, JSON.stringify(remove))
  }
  catch (error) {
    generateError(error)
  }

};

module.exports.getjira = async (req) => {
  const id = req.queryStringParameters.id;
  const url = `${host}/rest/api/3/issue/${id}`
  const method = 'GET'
  try {
    const fetch = await request(url, method)
    return Response(200, JSON.stringify(fetch))
  }
  catch (error) {
    generateError(error)
  }
};


module.exports.updatejira = async (req) => {
  let value = JSON.parse(req.body);
  const url = `${host}/rest/api/3/issue/${value.issueid}`
  const method = 'PUT'
  const bodyData = req.body;
  console.log(bodyData)
  try {
    const update = await request(url, method, bodyData)
    return Response(200, JSON.stringify(update))
  }
  catch (error) {
    generateError(error)
  }
}

module.exports.getstatus = async (req) => {
  const id = req.queryStringParameters.id;
  const url = `${host}/rest/api/3/issue/${id}/changelog`
  const method = 'GET'
  try {
    const status = await request(url, method)
    return Response(200, JSON.stringify(status))
  }
  catch (error) {
    generateError(error)
  }

}

module.exports.statusjira = async (req) => {
  let value = JSON.parse(req.body);
  const url = `${host}/rest/api/3/issue/${value.issueid}/transitions`
  const method = 'POST'
  const bodyData = value.trans;
  console.log("bodyData ", bodyData)
  try {
    const status = await request(url, method, bodyData)
    return Response(200, JSON.stringify(status))
  }
  catch (error) {
    generateError(error)
  }

}