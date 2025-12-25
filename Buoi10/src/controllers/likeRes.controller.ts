import type { Request, Response, NextFunction } from "express";
import likeResService from "../services/likeRes.service.js";
import { responseSuccess } from "./../common/helper/function.helper.js";
export const liekResController = {
  // like and unlike
  async like(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await likeResService.like(req);
      const response = responseSuccess(result, `Create liekRes successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  // get like for user
  async getLikeUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await likeResService.getLikeUser(req);
      const response = responseSuccess(result, `Get Like User Success`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async getLikeRes(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await likeResService.getLikeRes(req);
      const response = await responseSuccess(result, "Get Like Res Success");
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  // template
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await likeResService.findAll(req);
      const response = responseSuccess(result, `Get all liekRess successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await likeResService.findOne(req);
      const response = responseSuccess(
        result,
        `Get liekRes #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await likeResService.update(req);
      const response = responseSuccess(
        result,
        `Update liekRes #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await likeResService.remove(req);
      const response = responseSuccess(
        result,
        `Remove liekRes #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};

export default liekResController;
