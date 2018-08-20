var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Nice to see you!', second: 'Here is Mr Zhong\'s kingdom.'});
});

module.exports = router;
