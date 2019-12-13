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
    let check = this.database.dataCheck(newCar);
    if (check == true) {
      try {
        let createdCar = this.database.createCar(newCar);
        let sendCar = {createdCar, message: "Car created successfuly!"};
        return sendCar;
      }
      catch (error) {
        return { message: "Failed to create car.", error: error.message };
      }
    } else {
      return { message: check };
    }
  };

  deleteCar = id => {
    if (this.database.removeCar(id)) {
      return { message: "Car deleted successfuly" };
    } else {
      return { message: "Car does not exist!" };
    }
  };
}

module.exports = CarService;
