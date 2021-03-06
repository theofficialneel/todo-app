let express = require("express");
let todoController = require("./controllers/todoController");
let app = express();

app.set("view engine","ejs");
app.use(express.static('./public'));

app.get("/",function (req,res) {
    res.send("This is home");
});
todoController(app);

app.listen(3000);
console.log("Listening (port:3000)");
