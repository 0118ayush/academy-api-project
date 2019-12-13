class InMemoryDatabase {
  constructor() {
    this.cars = [];
  }

  listCars() {
    return this.cars;
  }

  getNewID() {
    return this.cars.length;
  }
}

module.exports = InMemoryDatabase;
