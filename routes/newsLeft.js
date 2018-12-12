var express = require('express');
var router = express.Router();
var request = require('request');

/* GET page1 listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    // console.log(req);
    var type = req.query.type || "top";
    console.log("type: " + type);
    var url = "https://v.juhe.cn/toutiao/index?type=" + type + "&key=dc63cdb2b85e5bf657679444c2eaf828";
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //输出返回的内容
            console.log("----------------")
            if (JSON.parse(body).result != null && JSON.parse(body).result.data) {
                console.log(JSON.parse(body).result.data);
                res.render("newsLeft", {newsList: JSON.parse(body).result.data});
            } else {
                console.log("error_code: " + JSON.parse(body).error_code);
                console.log("reason: " + JSON.parse(body).reason);
                console.log("resultcode: " + JSON.parse(body).resultcode);
                res.render("newsLeft", {newsList: []});
            }
        }
    });
});

module.exports = router;