let express = require("express");
let app = express();

app.set("view engine","ejs");
app.use(express.static('./public'));

app.get("/",function (req,res) {
    res.send("This is home");
});

app.listen(3000);
console.log("Listening (port:3000)");
