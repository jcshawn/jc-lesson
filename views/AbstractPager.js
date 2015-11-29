"use strict";

class AbstractPager{
    constructor(isLogined){
        this.isLogined = isLogined;
    }
    /*子类必须实现*/
    _render(){
        throw new Exception('子类必须实现');
    }
    render(){
        return `
                <!DOCTYPE html>
                <html>
                <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
                </head>
                <body class="container">
                <div>
                ${this.isLogined ? `` : `<a class="btn btn-success" href="/login">登录</a>`}
                ${this.isLogined ? `<a class="btn btn-default" href="/logout">退出</a><a class="btn btn-success" href="/add">添加</a>`:``}
                </div>
                ${this._render()}
                </body>
                </html>
            `;
    }
}

module.exports = AbstractPager;