import express from "express";
import { orderFoodController } from "../controllers/orderFood.contronller.js";

const orderFoodRouter = express.Router();

orderFoodRouter.post("/", orderFoodController.orderFood);

// Tạo route CRUD
orderFoodRouter.post("/", orderFoodController.create);
orderFoodRouter.get("/", orderFoodController.findAll);
orderFoodRouter.get("/:id", orderFoodController.findOne);
orderFoodRouter.patch("/:id", orderFoodController.update);
orderFoodRouter.delete("/:id", orderFoodController.remove);

export default orderFoodRouter;
