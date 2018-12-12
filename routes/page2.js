var express = require('express');
var router = express.Router();

/* GET page2 listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    res.render("page2", {});
});

module.exports = router;