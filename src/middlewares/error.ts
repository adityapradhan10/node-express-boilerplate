import { Error } from "@/common/interfaces";
import { NextFunction, Request, Response } from "express";

export default (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(error.status || 500);
  res.send({
    result: {
      status: error.status || 500,
      payload: {
        message: error.message,
      },
    },
  });
};
