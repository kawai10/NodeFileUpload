"use strict";
import { config } from "../config/config.js";
import SQ from "sequelize";

const { user, database, password } = config.db;
export const sequelize = new SQ.Sequelize(database, user, password, {
  dialect: "postgres",
});
