var express = require("express");
var path = require("path");

var app = express();

var routes = require("./routes");

app.set("port",process.env.PORT || 3000);
app.set("views",path.join(__dirname,"views"));
app.set("veiw engine","ejs");

app.use(routes);

app.listen(app.get("port"),function(){
    console.log("server started on port" + app.get("port"));
});
