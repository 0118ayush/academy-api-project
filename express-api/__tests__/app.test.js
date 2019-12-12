const app = require("../app");
const {
  getAllCars,
  getSingleCar,
  createNewCar,
  deleteCar
} = require("../requestLogics.js/requestLogic");

it("retrieves list of cars from get call", () => {
  expect(getAllCars());
});
