"use strict";

var AbstractPager = require('./AbstractPager');

class EditPager extends AbstractPager {
    constructor(id,article,errors) {
        super();
        this.id = id;
        this.article = article;
        this.errors = errors;
    }
    _render(){
        let titleError = this.errors.title || '';
        let bodyError = this.errors.body || '';
        return `
            <form action="/update" method="post">
            <input type="hidden" name="id" value="${this.id}">
              <div class="form-group">
                <label for="title">标题</label>
                <input type="text" class="form-control" id="title" name="title" value="${this.article.title}" placeholder="标题">
                <p class="btn-danger">${titleError}</p>
              </div>
              <div class="form-group">
                <label for="body">内容</label>
                <textarea class="form-control" id="body" name="body" placeholder="内容">${this.article.body}</textarea>
                <p class="btn-danger">${bodyError}</p>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
        `;
    }
}

module.exports = EditPager;