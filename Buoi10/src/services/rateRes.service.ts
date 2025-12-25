import type { Request } from "express";
import { prisma } from "../libs/prisma.lib.js";
import {
  BadRequestException,
  ConflictException,
} from "../common/helper/exception.helper.js";
export const rateResService = {
  async rateRes(req: Request) {
    const { userId, resId, amount } = req.body;
    if (amount < 1 || amount > 5) {
      throw new BadRequestException("Amount must be between 1 and 5");
    }
    const existed = await prisma.rate_res.findFirst({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });

    if (existed) {
      throw new ConflictException("You have already rated this restaurant");
    }

    return prisma.rate_res.create({
      data: {
        user_id: userId,
        res_id: resId,
        amount: amount,
        date_rate: new Date(),
      },
    });
  },
  async getRateUser(req: Request) {
    const userId = req.params.id;
    if (!userId) {
      throw new BadRequestException("Not Found userId");
    }
    const rates = await prisma.rate_res.findMany({
      where: {
        user_id: Number(userId),
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

    if (rates.length === 0) {
      throw new BadRequestException("Not Found rate");
    }
    return rates;
  },
  async getRateRes(req: Request) {
    const resId = Number(req.params.id);
    const rates = await prisma.rate_res.findMany({
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
    if (rates.length === 0) {
      throw new BadRequestException("Not Found rate");
    }
    return rates;
  },

  // CRUD
  async create(req: Request) {
    return `This action create`;
  },

  async findAll(req: Request) {
    return `This action returns all rateRes`;
  },

  async findOne(req: Request) {
    return `This action returns a id: ${req.params.id} rateRes`;
  },

  async update(req: Request) {
    return `This action updates a id: ${req.params.id} rateRes`;
  },

  async remove(req: Request) {
    return `This action removes a id: ${req.params.id} rateRes`;
  },
};
