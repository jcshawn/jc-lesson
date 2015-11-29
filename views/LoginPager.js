"use strict";

var AbstractPager = require('./AbstractPager');

class LoginPager extends AbstractPager {
    constructor(errors, isLogined) {
        super(isLogined);
        this.errors = errors;
    }
    _render(){
        let nameError = this.errors.loginname || '';
        let passwordError = this.errors.password || '';
        let vnumError = this.errors.vnum || '';
        let time = Date.now();
        return `
            <form action="/login" method="post">
              <div class="form-group">
                <label for="loginname">用户名</label>
                <input type="text" class="form-control" id="loginname" name="loginname" placeholder="用户名">
                <p class="btn-danger">${nameError}</p>
              </div>
              <div class="form-group">
                <label for="password">密码</label>
                <input type="text" class="form-control" id="password" name="password" placeholder="密码">
                <p class="btn-danger">${passwordError}</p>
              </div>
              <div class="form-group">
                <label for="vnum">验证码<img src="/vnum?${time}" style="width:100px;height:40px;"></label>
                <input type="text" class="form-control" id="vnum" name="vnum" placeholder="验证码">
                <p class="btn-danger">${vnumError}</p>
              </div>
              <button type="submit" class="btn btn-default">登录</button>
            </form>
        `;
    }
}

module.exports = LoginPager;