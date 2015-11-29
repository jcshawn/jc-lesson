"use strict";
var IndexAction = require('./index');

module.exports = function (req, res) {
    req.session.isLogined = false;
    IndexAction(req,res);
};