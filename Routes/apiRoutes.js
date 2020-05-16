const tableData = require("../Data/reservation");
const waitingData = require("../Data/waiting");
module.exports = function (app) {
    app.get("/api/tables", function(req, res) {
        res.json(tableData)
    })
}