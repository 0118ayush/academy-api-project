const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const db = require("./db/db");
const {
  getAllCars,
  getSingleCar,
  createNewCar,
  deleteCar
} = require("./requestLogics.js/requestLogic");

app.use(bodyParser.json());


function setID() {
  let idArray = [];
  for (const num of db) {
    idArray.push(num.id);
  }
  idArray.sort();
  console.log(idArray);
  for (let i = 0; i < idArray.length; i++) {
    if((idArray[i+1] - idArray[i]) != 1) {
      let newID = idArray[i] + 1;
      return newID;
    }
    if(i == idArray.length) {
      let newID = idArray[i] + 1;
      return newID
    }
  }
}

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

// delete request
app.delete("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let deleteMessage = deleteCar(id);
  res.status(200).send(deleteMessage);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
