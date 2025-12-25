import type { Request } from "express";
import {
  BadRequestException,
  NotFoundException,
} from "../common/helper/exception.helper.js";
import { prisma } from "../libs/prisma.lib.js";
export const orderFoodService = {
  async orderFood(req: Request) {
    const { userId, foodId } = req.body;

    if (!userId || !foodId) {
      throw new BadRequestException("Missing required fields");
    }

    const user = await prisma.users.findFirst({
      where: { id: userId, isDeleted: false },
    });
    if (!user) {
      throw new NotFoundException("User not found");
    }
    const food = await prisma.food.findFirst({
      where: { food_id: foodId, isDeleted: false },
    });
    if (!food) {
      throw new NotFoundException("Food not found");
    }

    return prisma.orders.create({
      data: {
        userId,
        foodId,
      },
    });
  },

  //CRUD
  async create(req: Request) {
    return `This action create`;
  },

  async findAll(req: Request) {
    return `This action returns all orderFood`;
  },

  async findOne(req: Request) {
    return `This action returns a id: ${req.params.id} orderFood`;
  },

  async update(req: Request) {
    return `This action updates a id: ${req.params.id} orderFood`;
  },

  async remove(req: Request) {
    return `This action removes a id: ${req.params.id} orderFood`;
  },
};
