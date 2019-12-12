const express = require("express");
const db = require("./db/db");
const app = express();

// get all todos
app.get("/cars", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "cars retrieved successfully",
    cars: db
  });
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
