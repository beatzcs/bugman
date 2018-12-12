var express = require('express');
var router = express.Router();
var request = require('request');

/* GET page1 listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    // console.log(req);
    res.render("page1", {type: ""});
})
;

module.exports = router;