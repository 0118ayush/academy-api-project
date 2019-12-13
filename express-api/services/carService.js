class CarService {
  constructor(dataBase) {
    this.database = dataBase;
  }

  getAllCars = () => {
    return this.database.listCars();
  };

  getSingleCar = id => {
    let singleCar = this.database.listCars().filter(car => car.id === id);
    return singleCar;
  };

  updateCar = (id, reqData) => {
    let chosenCar;
    let itemIndex;

    this.database.listCars().map((car, index) => {
      if (car.id === id) {
        chosenCar = car;
        itemIndex = index;
      }
    });

    const updatedCar = {
      id: chosenCar.id,
      make: reqData.make || chosenCar.make,
      model: reqData.model || chosenCar.model,
      colour: reqData.colour || chosenCar.colour,
      year: reqData.year || chosenCar.year
    };

    this.database.listCars().splice(itemIndex, 1, updatedCar);

    return updatedCar;
  };

  createNewCar = newCar => {
    let createdCar = this.database.createCar(newCar);
    return createdCar;
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
