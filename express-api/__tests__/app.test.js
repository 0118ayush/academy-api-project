const app = require("../app");
const {
  getAllCars,
  getSingleCar,
  createNewCar,
  deleteCar
} = require("../services/carService");

it("retrieves list of cars from get call", () => {
  expect(getAllCars());
});
