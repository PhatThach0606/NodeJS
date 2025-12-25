import { responseSuccess } from "../common/helper/function.helper.js";
import { orderFoodService } from "../services/orderFood.services.js";
import type { Request, Response, NextFunction } from "express";
export const orderFoodController = {
  async orderFood(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await orderFoodService.orderFood(req);
      const response = responseSuccess(result, `Create orderFood successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  //CRUD
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await orderFoodService.create(req);
      const response = responseSuccess(result, `Create orderFood successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await orderFoodService.findAll(req);
      const response = responseSuccess(
        result,
        `Get all orderFoods successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await orderFoodService.findOne(req);
      const response = responseSuccess(
        result,
        `Get orderFood #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await orderFoodService.update(req);
      const response = responseSuccess(
        result,
        `Update orderFood #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await orderFoodService.remove(req);
      const response = responseSuccess(
        result,
        `Remove orderFood #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
