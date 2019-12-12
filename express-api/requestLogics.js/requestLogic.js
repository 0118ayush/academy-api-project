import db from "../db/db";

export const getAllCars = () => {
  return { cars: db };
};

export const getSingleCar = id => {
  let singleCar = db.filter(car => car.id === id);
  return { car: singleCar };
};

export const createNewCar = newCar => {
  db.push(newCar);
  return newCar;
};

export const deleteCar = id => {
  db.map((car, index) => {
    if (car.id === id) {
      db.splice(index, 1);
    }
    return { message: "Car deleted successfuly" };
  });
};
