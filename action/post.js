"use strict";
var querystring = require('querystring');

module.exports = function(req) {
    return new Promise(function (resolve, reject) {
        let result = '';
        let jsonObj;
        req.on('data', function (chunk) {
            result += chunk;
        });

        req.on('end', function () {
            jsonObj = querystring.parse(result);
            resolve(jsonObj);
        });
    })
};