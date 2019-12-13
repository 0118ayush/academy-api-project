class InMemoryDatabase {
  constructor() {
    this.cars = [
      {
        id: 1,
        make: "Audi",
        model: "A4",
        colour: "red",
        year: 2013
      },
      {
        id: 3,
        make: "Mercedes",
        model: "A-Class",
        colour: "white",
        year: 2009
      }
    ];
    this.idCounter = 0;
  }

  listCars() {
    return this.cars;
  }
}

module.exports = InMemoryDatabase;
