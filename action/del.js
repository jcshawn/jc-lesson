"use strict";
var query = require('./query');
var post = require('./post');
var database = require('../database');
var IndexAction = require('./index');
var LoginAction = require('./login');

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

    if(!(req.session.isLogined)) {
        LoginAction(req,res);
        return;
    }


    getId(req,id=>{
        database.del(id);
        IndexAction(req,res);
    });

    //getId(req,function(id){
    //    database.del(id);
    //    res.end(new IndexPager().render());
    //})
};