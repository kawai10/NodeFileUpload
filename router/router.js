"use strict";
import express from "express";
import { filesUploadRouter } from "../src/filesUpload/router.js";
import { userRouter } from "../src/users/router.js";

export const uploadRouter = express.Router();

uploadRouter.use("/upload"), filesUploadRouter;

uploadRouter.use("/users", userRouter);
