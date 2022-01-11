// src/middleware/not-found.middleware.ts

import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {

  const message = "Resource not found";
  console.log("404 error Handler came here")
  response.status(404).send(message);
};