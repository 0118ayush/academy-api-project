const db = require("../db/db");

class CarService {
  constructor(dataBase) {
    
    this.database = dataBase;
  }

  getAllCars = () => {
    return { cars: this.database.listCars() };
  };

  getSingleCar = id => {
    let singleCar = db.filter(car => car.id === id);
    return { car: singleCar };
  };

  createNewCar = (newCar) => {
    //newCar.id = this.database.get
    let createdCar = this.database.createCar(newCar);
    return createdCar;
  };

  updateCar = (id, make, model, colour, year) => {
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

  deleteCar = id => {
    this.database.removeCar(id);
    
    /*db.map((car, index) => {
      if (car.id === id) {
        db.splice(index, 1);
      }
    });*/
    return { message: "Car deleted successfuly" };
  };
}

module.exports = CarService;
