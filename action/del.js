"use strict";
var query = require('./query');
var post = require('./post');
var database = require('../database');
var IndexPager = require('../views/IndexPager');

function getId(req,callback) {
    if(req.method=="GET") {
        var data = query(req);
        callback(data.id);
    } else {
        //promise
        post(req).then(function(data){
            callback(data.id);
        });
    }
}

module.exports = function (req, res) {




    getId(req,id=>{
        database.del(id);
        res.end(new IndexPager(database.list()).render());
    });

    //getId(req,function(id){
    //    database.del(id);
    //    res.end(new IndexPager().render());
    //})
};