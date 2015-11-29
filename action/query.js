"use strict";
var querystring = require('querystring');
var url = require('url');

module.exports = function query(req) {
    let query = url.parse(req.url).query;
    let json = querystring.parse(query);
    return json;
};