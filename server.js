const express = require("express");
const config = require("./config");

const app = express();

app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json("=> api products");
});

app.listen(config.PORT, function () {
  console.log(`Server is running on port: ${config.PORT}`);
  console.log(`Server is working on http://localhost:${8000}`);
  console.log("Happy coding!");
});
