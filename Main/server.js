const express = require("express");
const path = require("path");

const waiting = require("./data/waiting");
const reservation = require("./data/reservation");

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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

  app.listen(PORT, function() {
    console.log("App listening on localhost:" + PORT);
  });

  // Displays 'waiting' JSON
app.get("/api/waiting", function(req, res) {
  return res.json(waiting);
});

  // Displays 'reservation' JSON
  app.get("/api/reservation", function(req, res) {
    return res.json(reservation);
  });
  