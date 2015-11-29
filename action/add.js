"use strict";

var database = require('../database');
var AddPager = require('../views/AddPager');
var IndexPager = require('../views/IndexPager');

var post = require('./post');

module.exports = function (req, res) {
    if(req.method == 'GET') {
        res.end(new AddPager('').render());
    } else {
        post(req).then(function (data) {
            var errors = {};
            if(!(data.title && data.title.length>=5)) {
                errors.title = "title char length >= 5";
            }
            if(!(data.body && data.body.length>=10)) {
                errors.body = "body char length >= 10";
            }

            console.log(data);
            if(Object.keys(errors).length) {
                res.end(new AddPager(errors).render());
            } else{
                database.add(data);
                res.end(new IndexPager(database.list()).render());
            }
        })
    }
};