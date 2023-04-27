import "reflect-metadata";
import { Request, Response } from "express";
import express = require("express");
import routes from "./routes";
import { AppDataSource } from './database';





const server = express();

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

server.use(express.json());
server.use(routes);

server.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ message: "Backend On!" });
});

server.listen(5000, () => console.log(`Server on`));

export default server;
