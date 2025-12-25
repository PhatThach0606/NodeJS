import express from "express";
import { rateResController } from "../controllers/rateRes.controller.js";

const rateResRouter = express.Router();

rateResRouter.post("/post-rate", rateResController.rateRes);
rateResRouter.get("/get-rate-user/:id", rateResController.getRateUser);
rateResRouter.get("/get-rate-res/:id", rateResController.getRateRes);

// Tạo route CRUD
rateResRouter.post("/", rateResController.create);
rateResRouter.get("/", rateResController.findAll);
rateResRouter.get("/:id", rateResController.findOne);
rateResRouter.patch("/:id", rateResController.update);
rateResRouter.delete("/:id", rateResController.remove);

export default rateResRouter;
