const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

import {
  getAllCars,
  getSingleCar,
  createNewCar,
  deleteCar
} from "./requestLogics.js/requestLogic";

app.use(bodyParser.json());

// get all cars
app.get("/cars", (req, res) => {
  getAllCars(req, res);
});

// get single car
app.get("/cars/:id", (req, res) => {
  getSingleCar(req, res);
});

// create new car
app.post("/cars", (req, res) => {
  createNewCar(req, res);
});

// delete request
app.delete("/cars/:id", (req, res) => {
  deleteCar(req, res);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
