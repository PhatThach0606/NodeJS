import express from "express";
import likeResRouter from "./likeRes.router.js";
import rateResRouter from "./rateRes.router.js";
import orderFoodRouter from "./orderFood.router.js";
const rootRouter = express.Router();

rootRouter.use("/like", likeResRouter);
rootRouter.use("/rate", rateResRouter);
rootRouter.use("/order", orderFoodRouter);
export default rootRouter;
