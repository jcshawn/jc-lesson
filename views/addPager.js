"use strict";

var AbstractPager = require('./AbstractPager');

class AddPager extends AbstractPager {
    constructor(errors,isLogined) {
        super(isLogined);
        this.errors = errors;
    }
    _render(){
        let titleError = this.errors.title || '';
        let bodyError = this.errors.body || '';
        return `
            <form method="post">
              <div class="form-group">
                <label for="title">标题</label>
                <input type="text" class="form-control" id="title" name="title" placeholder="标题">
                <p class="btn-danger">${titleError}</p>
              </div>
              <div class="form-group">
                <label for="body">内容</label>
                <textarea class="form-control" id="body" name="body" placeholder="内容"></textarea>
                <p class="btn-danger">${bodyError}</p>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
        `;
    }
}

module.exports = AddPager;