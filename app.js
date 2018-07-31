var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/list", function(req, res){
    var query = req.query.search;
   // var url = "https://bittrex.com/api/v1.1/public/getmarkets";
    var url = "https://api.coinmarketcap.com/v2/ticker/?start=1&limit=100&sort=rank&structure=array";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("list", {data : data});
          //  res.send(data["data"]);
        }
    });
});


/*Specify what port you want this app to run on locally*/
app.listen(5000, function () {
    console.log("App has started");
});
