import dotenv from "dotenv";

dotenv.config();

export const config = {
  db: {
    user: process.env["DB_USER"],
    database: process.env["DB_DATABASE"],
    password: process.env["DB_PASSWORD"],
  },
};
