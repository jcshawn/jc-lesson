"use strict";

class AbstractPager{
    constructor(){

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
                ${this._render()}
                </body>
                </html>
            `;
    }
}

module.exports = AbstractPager;