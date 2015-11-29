"use strict";

var http = require('http');
var url = require('url');
var actionRepos = {};

var session = require('./session');

actionRepos['/add'] = require('./action/add');
actionRepos['/del'] = require('./action/del');
actionRepos['/update'] = require('./action/update');
actionRepos['/'] = require('./action/index');
actionRepos['/login'] = require('./action/login');
actionRepos['/logout'] = require('./action/logout');
actionRepos['/vnum'] = require('./action/vnum');

http.createServer(function(request,response){
    request.session = session(request,response);
    console.log(request.session);

    response.writeHead(200,{'Content-type':'text/html'});
    let pathname = url.parse(request.url).pathname;

    var action = actionRepos[pathname];
    if(action) {
        action(request,response);
    } else {
        response.writeHead(404);
        response.end();
    }
}).listen(3001);