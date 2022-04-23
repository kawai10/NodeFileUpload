"use strict";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", uploadRouter);

app.listen(8080);
