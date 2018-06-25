const serverless = require('serverless-http');
const express = require('express');
const app = express();
const {
  graphql
} = require('graphql')

const schema = require('src/graphql/schema');

module.exports.query = (event, context, callback) => graphql(schema, event.queryStringParameters.query)
  .then(
    result => callback(null, {statusCode: 200, body: JSON.stringify(result)}),
    err => callback(err)
)
