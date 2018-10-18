module.exports = function (app) {
    app.get("/todo",function (req,res) {
        res.send("Todo");
    });
    app.post("/todo",function (req,res) {

    });
    app.delete("/todo",function (req,res) {

    });
};
