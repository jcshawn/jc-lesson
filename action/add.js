"use strict";

var database = require('../database');
var AddPager = require('../views/AddPager');
var IndexAction = require("./index");
var LoginAction = require('./login');
var post = require('./post');

module.exports = function (req, res) {
    if(!(req.session.isLogined)) {
        LoginAction(req,res);
        return;
    }
    if(req.method == 'GET') {
        res.end(new AddPager({},req.session.isLogined).render());
    } else {
        post(req).then(function (data) {
            var errors = {};
            if(!(data.title && data.title.length>=5)) {
                errors.title = "title char length >= 5";
            }
            if(!(data.body && data.body.length>=10)) {
                errors.body = "body char length >= 10";
            }

            if(Object.keys(errors).length) {
                res.end(new AddPager(errors,req.session.isLogined).render());
            } else{
                database.add(data);
                IndexAction(req,res);
            }
        })
    }
};