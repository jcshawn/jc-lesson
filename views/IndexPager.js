"use strict";

var AbstractPager = require('./AbstractPager');

class IndexPager extends AbstractPager {
    constructor(articleList, isLogined) {
        super(isLogined);
        this.list = articleList;
    }
    _render(){
        let listDOMstring = this.list.map((article,index)=>`<li class="list-group-item"><h3>${article.title}</h3><p>${article.body}</p>
        <div><a href="/del?id=${index}">删除</a></div>
        <div><a href="/update?id=${index}">更新</a></div>
        </li>`).join(' ');

        return `
            <ul class="list-group">
              ${listDOMstring}
            </ul>
        `;
    }
}

module.exports = IndexPager;