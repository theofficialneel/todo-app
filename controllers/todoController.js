let data = [{item: "Hello world"}];
let bodyParser = require("body-parser");
let urlParser = bodyParser.urlencoded({extended: false});

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
