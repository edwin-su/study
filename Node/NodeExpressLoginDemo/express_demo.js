//express_demo.js 文件
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('assets'));

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
})

app.post('/login',urlencodedParser, function(req,res){
    var userName = req.body.userName;
    var password = req.body.password;
    if (!!userName && userName == 'edwin' && !!password && password == 'abc123_'){
        res.send("Login success");
    }else{
        res.send("login falil");
    }
})

var server = app.listen(8099, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})