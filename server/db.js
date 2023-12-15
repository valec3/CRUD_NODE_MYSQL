import mysql from "mysql";
import { configDB } from "./config.js";

const db = mysql.createConnection(configDB);

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

export default db;
