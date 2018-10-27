let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let urlParser = bodyParser.urlencoded({extended: false});

mongoose.connect("mongodb://127.0.0.1/todo_db", {useNewUrlParser: true });
let todoSchema = new mongoose.Schema({
    item: String
});
let Todo = mongoose.model("Todocollection",todoSchema);

module.exports = function (app) {

    app.get("/todo",function (req,res) {
        Todo.find({},function (err,data) {
            if(err) throw err;
            res.render("todo",{todo_data: data});
        });
    });

    app.post("/todo", urlParser, function (req,res) {
        let addTodo = Todo(req.body).save(function (err,data) {
            if(err) throw err;
            res.json(data);
        });
    });

    app.delete("/todo/:item",function (req,res) {
        Todo.find({item: req.params.item.replace("-"," ")}).remove(function (err,data) {
            if(err) throw err;
            res.json(data);
        });
    });

};
