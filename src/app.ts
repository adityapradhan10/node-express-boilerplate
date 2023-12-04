import express, { Application, Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import errorHandler from "@/middlewares/error";

export default (): Application => {
  const app: Application = express();

  app.use(express.json());

  app.use((req: Request, res: Response, next: NextFunction): void => {
    next(createHttpError.NotFound());
  });

  app.use(errorHandler);

  return app;
};
