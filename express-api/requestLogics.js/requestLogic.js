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

const deleteCar = id => {
  db.map((car, index) => {
    if (car.id === id) {
      db.splice(index, 1);
    }
  });
  return { message: "Car deleted successfuly" };
};

module.exports = { getAllCars, getSingleCar, createNewCar, deleteCar };
