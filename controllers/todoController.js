let data = [{item: "Hello world"}];
module.exports = function (app) {
    app.get("/todo",function (req,res) {
        res.render("todo",{todo_data: data});
    });
    app.post("/todo",function (req,res) {

    });
    app.delete("/todo",function (req,res) {

    });
};
