const express = require("express");
const db = require("./db/db");
const app = express();
const PORT = 5000;

// get all cars
app.get("/cars", (req, res) => {
  res.status(200).send({
    cars: db
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
