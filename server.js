const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json("=> api products");
});

app.listen(8000, function () {
  console.log(`Server is running on port: `, 8000);
  console.log("Happy coding!");
});
