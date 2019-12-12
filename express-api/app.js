const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
import db from "./db/db";

import {
  getAllCars,
  getSingleCar,
  createNewCar,
  deleteCar
} from "./requestLogics.js/requestLogic";

app.use(bodyParser.json());

// get all cars
app.get("/cars", (req, res) => {
  const result = getAllCars();
  res.send(result);
});

// get single car
app.get("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let singleCar = getSingleCar(id);
  res.status(200).send(singleCar);
});

// create new car
app.post("/cars", (req, res) => {
  let newCar = {
    id: db.length + 1,
    make: req.body.make,
    model: req.body.make,
    colour: req.body.colour,
    year: req.body.year
  };
  var madeNewCar = createNewCar(newCar);
  res.status(200).send(madeNewCar);
});

// delete request
app.delete("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let deleteMessage = deleteCar(id);
  res.status(200).send(deleteMessage);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
