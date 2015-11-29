"use strict";
var IndexAction = require('./index');
var LoginPager = require('../views/LoginPager');
var post = require('./post');

module.exports = function (req, res) {
    if(req.method === "GET") {
        res.end(new LoginPager({},req.session.isLogin).render());
    } else {
        post(req).then(data=>{
            var loginname = data.loginname;
            var password = data.password;
            if(loginname && password && loginname==='jc' && password==='123456') {
                req.session.isLogined = true;
                IndexAction(req,res);
            } else {
                var errors = {};
                if(!(loginname && loginname === 'jc')) {
                    errors.loginname = '用户名有误,请重新输入';
                }
                if(!(password && password==='123456')) {
                    errors.password = '密码有误,请重新输入';
                }
                res.end(new LoginPager(errors,req.session.isLogined).render());
            }
        });
    }
};