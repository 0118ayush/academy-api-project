const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

const cs = require("./services/carService");
const imd = require("./databases/inMemory");

const inMemory = new imd();
const carService = new cs(inMemory);

app.use(bodyParser.json());

// get all cars
app.get("/cars", (req, res) => {
  const allCars = carService.getAllCars();
  res.send(allCars);
});

// get single car
app.get("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let singleCar = carService.getSingleCar(id);
  res.status(200).send(singleCar);
});

// create new car
app.post("/cars", (req, res) => {
  let madeNewCar = carService.createNewCar(req.body);
  res.status(200).send(madeNewCar);
});

// update car
app.put("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let updatedCar = carService.updateCar(id, req.body);
  res.status(201).send({ updatedCar });
});

// delete request
app.delete("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let deleteMessage = carService.deleteCar(id);
  res.status(200).send(deleteMessage);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
