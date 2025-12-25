import type { Request } from "express";
import { prisma } from "../libs/prisma.lib.js";
import { responseSuccess } from "../common/helper/function.helper.js";
import { BadRequestException } from "../common/helper/exception.helper.js";
export const likeResService = {
  // like and unlike
  async like(req: Request) {
    const { userId, resId } = req.body;
    const exist = await prisma.like_res.findFirst({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });

    if (exist) {
      await prisma.like_res.deleteMany({
        where: {
          user_id: userId,
          res_id: resId,
        },
      });
      throw new BadRequestException("You have already liked this restaurant");
    }
    return await prisma.like_res.create({
      data: {
        user_id: userId,
        res_id: resId,
        date_like: new Date(),
      },
    });
  },
  // get like for user
  async getLikeUser(req: Request) {
    const { userId } = req.body;
    const likes = await prisma.like_res.findMany({
      where: {
        user_id: userId,
      },
      include: {
        Restaurent: {
          select: {
            res_id: true,
            res_name: true,
            image: true,
          },
        },
      },
    });
    if (!likes) {
      throw new BadRequestException("Not Found like");
    }
    if (likes) {
      return likes;
    }
  },
  // get like for Restaurant
  async getLikeRes(req: Request) {
    const { resId } = req.body;
    const likes = await prisma.like_res.findMany({
      where: {
        res_id: resId,
      },
      include: {
        Users: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
    });
    return likes;
  },
  // template
  async findAll(req: Request) {
    return `This action returns all likeRes`;
  },

  async findOne(req: Request) {
    return `This action returns a id: ${req.params.id} likeRes`;
  },

  async update(req: Request) {
    return `This action updates a id: ${req.params.id} likeRes`;
  },

  async remove(req: Request) {
    return `This action removes a id: ${req.params.id} likeRes`;
  },
};

export default likeResService;
