module.exports = function (app){
    // Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  
}
