import express from "express";
import morgan from "morgan";
import cors from "cors";
import testRoutes from "./routes/test.routes.js";
import taskRoutes from "./routes/task.routes.js";
import mysql from "mysql";
import { configDB } from "./config.js";
import myConnection from "express-myconnection";

const app = express();

// middlewares to connect to database
app.use(
  myConnection(
    mysql,
    {
      host: configDB.host,
      user: configDB.user,
      password: configDB.password,
      port: configDB.port,
      database: configDB.database,
    },
    "single"
  )
);
// Configurar CORS
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/test", testRoutes);
app.use("/api/task", taskRoutes);

export default app;
