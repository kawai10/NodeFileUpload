"use strict";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { sequelize } from "./connection/connection.js";
import { uploadRouter as upload } from "./router/router.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", upload);

sequelize
  .sync()
  .then(() => {
    console.log("성공");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(8080);
