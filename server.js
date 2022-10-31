import db from "./db/connection.js"
import router from "./Routues/index.js";
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", router);

db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));
  app.listen(PORT, () => {
    console.log(
      `Express server running in development on ${PORT}`
    );
  });
});
