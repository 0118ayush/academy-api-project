const express = require("express");
const db = require("./db/db");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;


//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const setID = () => {
  db.length();
};


// get all cars
app.get("/cars", (req, res) => {
  res.status(200).send({
    cars: db
  });
});

app.post("/cars", (req, res) => {
  var id = db.length()
  var make = req.body.make;
  var model = req.body.model;
  var colour = req.body.colour;
  var year = req.body.year;
  var id = {id: id, make: make, model: model, colour: colour, year: year};

  db.push(id);
  res.status(200).send();
});

// delete request
app.delete("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);

  db.map((car, index) => {
    if (car.id === id) {
      db.splice(index, 1);
      return res.status(200).send({
        success: "true",
        message: "Car deleted successfuly"
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});