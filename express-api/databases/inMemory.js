class InMemoryDatabase {
  constructor() {
    this.cars = [];
    this.idCounter = 0;
  }

  listCars() {
    return this.cars;
  }

  getNewID() {
    return this.cars.length;
  }

  createCar(data) {
    let newId = ++this.idCounter
    let newCar = {
      id: newId,
      make: data.make,
      model: data.model,
      colour: data.colour,
      year: data.year
    };
    this.cars.push(newCar);
    return newCar;
  }

  removeCar(id) {
    this.cars.map((car, index) => {
      if (car.id === id) {
        this.cars.splice(index, 1);
      }
    });
  }
}

module.exports = InMemoryDatabase;
