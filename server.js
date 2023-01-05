import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8888;
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", productRoutes);

mongoose.set("strictQuery", true);

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.once("open", () => console.log("Connected to the database"));
db.on("error", (error) => console.log(`Error ${error}`));
app.get("/", (req, res) => {
  res.send("<h1>Welcome on CraftShop server!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
