'use strict';

var fs = require('fs');
const filePath = __dirname + '/data.json';

var list;
try {
    list = JSON.parse(fs.readFileSync(filePath));
}catch(e){
    list = [];
}

module.exports = {
    add:function(article){
        list.push(article);
        this.store();
    },
    del:function(index){
        list.splice(index,1);
        this.store();
    },
    update:function(index,newArticle) {
        list.splice(index,1,newArticle);
        this.store();
    },
    list: function () {
        return list;
    },
    store:function(callback) {
        callback = callback || function(){};
        fs.writeFile(filePath,JSON.stringify(list),callback);
    }
};