var express = require('express');
var router = express.Router();

/* GET page4 listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    res.render("page4", {});
});

module.exports = router;