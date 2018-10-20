let data = [{item: "Hello world"}];
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let urlParser = bodyParser.urlencoded({extended: false});

mongoose.connect("mongodb://127.0.0.1/todo_db", {useNewUrlParser: true });
let todoSchema = new mongoose.Schema({
    item: String
});
let Todo = mongoose.model("Todocollection",todoSchema);

let item1 = Todo({
    item: "Hey"
}).save(function (err) {
    if(err)
        throw err;
    console.log("Saved to db");
});

module.exports = function (app) {
    app.get("/todo",function (req,res) {
        res.render("todo",{todo_data: data});
    });
    app.post("/todo", urlParser, function (req,res) {
        data.push(req.body);
        res.json(data);
    });
    app.delete("/todo/:item",function (req,res) {
        data = data.filter(function (x) {
            return (x.item.replace(" ","-") !== req.params.item);
        });
        res.json(data);
    });
};
