import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoute from "./routes/AuthRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", AuthRoute);

app.listen(port, async () => {
  try {
    console.log(`Running server on PORT : ${port}`);
  } catch (error) {
    console.log("Got some Error while running server.");
  }
});
