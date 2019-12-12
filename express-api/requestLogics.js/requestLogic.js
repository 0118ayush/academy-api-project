import db from "../db/db";

export const getAllCars = (req, res) => {
  res.status(200).send({
    cars: db
  });
};

export const getSingleCar = (req, res) => {
  const id = parseInt(req.params.id);

  let singleCar = db.filter(car => car.id === id);
  return res.status(200).send({
    car: singleCar
  });
};

export const createNewCar = (req, res) => {
  let newCar = {
    id: db.length + 1,
    make: req.body.make,
    model: req.body.make,
    colour: req.body.colour,
    year: req.body.year
  };

  db.push(newCar);
  return res.status(200).send(newCar);
};

export const deleteCar = (req, res) => {
  const id = parseInt(req.params.id);

  db.map((car, index) => {
    if (car.id === id) {
      db.splice(index, 1);
      return res.status(200).send({
        message: "Car deleted successfuly"
      });
    }
  });
};
