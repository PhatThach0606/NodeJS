import { rateResService } from "../services/rateRes.service.js";
import type { Request, Response, NextFunction } from "express";
import { responseSuccess } from "./../common/helper/function.helper.js";
export const rateResController = {
  async rateRes(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await rateResService.rateRes(req);
      const response = responseSuccess(result, `post rateRes successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
  async getRateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await rateResService.getRateUser(req);
      const response = responseSuccess(
        result,
        `getRateUser rateRes successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
  async getRateRes(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await rateResService.getRateRes(req);
      const response = responseSuccess(
        result,
        `getRateRes rateRes successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await rateResService.create(req);
      const response = responseSuccess(result, `Create rateRes successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await rateResService.findAll(req);
      const response = responseSuccess(result, `Get all rateRess successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await rateResService.findOne(req);
      const response = responseSuccess(
        result,
        `Get rateRes #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await rateResService.update(req);
      const response = responseSuccess(
        result,
        `Update rateRes #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await rateResService.remove(req);
      const response = responseSuccess(
        result,
        `Remove rateRes #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
