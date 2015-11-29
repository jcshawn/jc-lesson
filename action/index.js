var database = require('../database');
var IndexPager = require('../views/IndexPager');


module.exports = function (req, res) {

    res.end(new IndexPager(database.list()).render());
};