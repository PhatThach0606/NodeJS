import type { Request, Response, NextFunction } from "express";
import { responseError } from "./function.helper.js";
import {
  BadRequestException,
  NotFoundException,
  ForbiddenException,
  UnauthorizedException,
} from "./exception.helper";

type AppException =
  | BadRequestException
  | NotFoundException
  | ForbiddenException
  | UnauthorizedException;
// Để ở cuối và nó sẽ gom all error
const appError = (
  err: AppException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Middleware đặt biệt bắt lỗi: ", err);
  const response = responseError(err?.message, err?.code, err?.stack);
  res.status(response.statusCode).json(response);
};
export default appError;
