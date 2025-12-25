import express from "express";
import likeResController from "../controllers/likeRes.controller.js";
const likeResRouter = express.Router();

// Tạo route CRUD
likeResRouter.post("/like-res", likeResController.like);
likeResRouter.get("/get-like-user", likeResController.getLikeUser);
likeResRouter.get("/get-like-res", likeResController.getLikeRes);
// template
likeResRouter.get("/", likeResController.findAll);
likeResRouter.get("/:id", likeResController.findOne);
likeResRouter.patch("/:id", likeResController.update);
likeResRouter.delete("/:id", likeResController.remove);

export default likeResRouter;
