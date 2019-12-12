const db = require("../db/db");

const getAllCars = () => {
  return { cars: db };
};

const getSingleCar = id => {
  let singleCar = db.filter(car => car.id === id);
  return { car: singleCar };
};

const createNewCar = newCar => {
  db.push(newCar);
  return newCar;
};

const updateCar = (id, make, model, colour, year) => {
  let chosenCar;
  let itemIndex;

  db.map((car, index) => {
    if (car.id === id) {
      chosenCar = car;
      itemIndex = index;
    }
  });

  const updatedCar = {
    id: chosenCar.id,
    make: make || chosenCar.make,
    model: model || chosenCar.model,
    colour: colour || chosenCar.colour,
    year: year || chosenCar.year
  };

  db.splice(itemIndex, 1, updatedCar);

  return updatedCar;
};

const deleteCar = id => {
  db.map((car, index) => {
    if (car.id === id) {
      db.splice(index, 1);
    }
  });
  return { message: "Car deleted successfuly" };
};

module.exports = {
  getAllCars,
  getSingleCar,
  createNewCar,
  updateCar,
  deleteCar
};
