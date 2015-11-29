var result = url.parse(request.url);
var pathname = result.pathname;
var query = result.query;
console.log(result);

// /add?title=hello
switch (pathname) {
    case '/':
        response.writeHead(200,{'Content-type':'text/plain'});
        response.end(database.getList().toString());
        break;
    case '/add':
        if(request.method == 'get') {
            //return 添加信息页面
        } else {
            database.add(article);
        }

        break;
    case '/del':
        database.del(0);
        break;
    case '/update':

        break;
    case '/store':
        break;
}