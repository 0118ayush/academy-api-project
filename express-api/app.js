const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const db = require("./db/db");

const cs = require("./services/carService");
const im = require("./databases/inMemory");

app.use(bodyParser.json());

const inMemory = new im();
const carService = new cs(inMemory);

newCar = function setID() {
  for (const num of db) {
    console.log(num.id);
    let nextid = num.id + 1;
    console.log(nextid);
    if (nextid - num != 1) {
      console.log(nextid);
      return nextid - num;
    }
  }
};

// get all cars
app.get("/cars", (req, res) => {
  const result = carService.getAllCars();
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
  //let newID = inMemory.getNewID();
  let madeNewCar = carService.createNewCar(req.body);
  res.status(200).send(madeNewCar);
});

// update car
app.put("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);

  let make = req.body.make;
  let model = req.body.model;
  let colour = req.body.colour;
  let year = req.body.year;

  let updatedCar = updateCar(id, make, model, colour, year);

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
