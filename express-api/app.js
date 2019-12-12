const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const db = require("./db/db");
const {
  getAllCars,
  getSingleCar,
  createNewCar,
  updateCar,
  deleteCar
} = require("./requestLogics.js/requestLogic");

app.use(bodyParser.json());

<<<<<<< HEAD
// function setID() {
//   for (const num of db) {
//     console.log(num.id);
//     let nextid = num.id + 1;
//     console.log(nextid);
//     if (nextid - num != 1) {
//       console.log(nextid);
//       return nextid - num;
//     }
//   }
// }

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
  var newID = setID()
  let newCar = {
    id: newID,
    make: req.body.make,
    model: req.body.model,
    colour: req.body.colour,
    year: req.body.year
  };
  var madeNewCar = createNewCar(newCar);
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
  let deleteMessage = deleteCar(id);
  res.status(200).send(deleteMessage);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
