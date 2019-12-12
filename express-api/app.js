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

// delete request
app.delete("/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
