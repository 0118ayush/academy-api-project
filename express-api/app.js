const express = require("express");
const db = require("./db/db");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get all cars
app.get("/cars", (req, res) => {
  res.status(200).send({
    cars: db
  });
});

// get s(ingle car
// app.get("/cars/:id", (req, res) => {
//     res.status(200).send({
//         singleCar
//     })
// })

// create new car
app.post("/cars", (req, res) => {
  console.log(req.body);

  let newObj = {
    id: db.length + 1,
    make: req.body.make,
    model: req.body.make,
    colour: req.body.colour,
    year: req.body.year
  };

  db.push(newObj);
  res.send(req.body);
});

// delete request
app.delete("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);

  db.map((car, index) => {
    if (car.id === id) {
      db.splice(index, 1);
      return res.status(200).send({
        success: "true",
        message: "Car deleted successfuly"
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
