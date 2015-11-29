"use strict";
var EditPager = require('../views/EditPager');
var IndexPager = require('../views/IndexPager');
var query = require('./query');
var post = require('./post');
var database = require('../database');

var indexAction = require('./index');

module.exports = function (req, res) {
    if(req.method == "GET") {
        let data = query(req);
        if(!data.id) {

            indexAction(req,res);
            return;
        }

        let id = data.id;

        let article = database.list()[id];
        let errors = {};
        res.end(new EditPager(id,article,errors).render());
    } else { //post
        post(req).then(function(data){
            var errors = {};
            if(!(data.title && data.title.length>=5)) {
                errors.title = "title char length >= 5";
            }
            if(!(data.body && data.body.length>=10)) {
                errors.body = "body char length >= 10";
            }

            let id = data.id;
            let article = database.list()[id];

            console.log(data);
            if(Object.keys(errors).length) {

                res.end(new EditPager(id,article,errors).render());
            } else{
                let newArticle = {title:data.title,body:data.body};
                database.update(id,newArticle);
                indexAction(req,res);
            }
        });
    }

};