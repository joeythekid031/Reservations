const tableData = require("../Data/reservation");
const waitingData = require("../Data/waiting");
module.exports = function (app) {
    app.get("/api/tables", function(req, res) {
        res.json(tableData)
    
    })
    app.post("/api/tables", function(req,res){
        if (tableData.length >= 5) {
            waitingData.push(req.body)
        } else {
            tableData.push(req.body)
        }
    })
}