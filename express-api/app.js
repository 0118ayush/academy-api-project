const express = require("express");
const db = require("./db/db");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sendData = {
  id: 2,
  make: "Tesla",
  model: "ES",
  colour: "blue",
  year: 2018
}
// get all cars
app.get("/cars", (req, res) => {
  res.status(200).send({
    cars: db
  });
});

app.post("/cars", (req, res) => {
  console.log(req.body);
  //db.push(sendData);
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
