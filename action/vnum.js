"use strict";

var PW = require('png-word');
var RW = require('random-word');
var pngword = new PW(PW.GREEN);
var rw = RW('abcdefghigklmnopqrstuvwxyz1234567890');

module.exports = function (req, res) {
    let word = rw.random(4);
    req.session.vnum = word;
    res.writeHead(200,{'Content-type':'image/png'});
    pngword.createReadStream(word).pipe(res);
};