import "reflect-metadata";
import connection from "./infra/typeorm";
import express from "express";

connection.create();

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

export { app };