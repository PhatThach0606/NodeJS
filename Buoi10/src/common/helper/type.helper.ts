import "express";

export interface UserExist {
  id: number;
  email: string;
  fullName: string | null;
  avatar: string | null;
  password: string | null;
  googleId: string | null;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
declare module "express" {
  interface Request {
    user?: UserExist;
  }
}
