/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import * as UserService from "../services/user.service";
import HttpStatusCodes from "http-status-codes";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: any = req.body;
    console.log(req.body, " is request body");
    const createdUser = await UserService.create(user);
    res.status(HttpStatusCodes.CREATED).send(createdUser);
  } catch (e) {
    next(e);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password }: { email: string; password: string } = req.body
    const{refereshToken, accessToken} = await UserService.login(email,password)
    res.cookie('refereshToken', refereshToken,
    {httpOnly:true,path: '/refresh'}
  );
  } catch (error) {
    next(error);
  }
};

export const remove = async  (req: Request, res: Response, next: NextFunction) => {
  const userId = Number(req.params.id)
  console.log(userId, ' request params ko id yo ho hai')
  try {
  const user = await UserService.remove(userId)
  res.status(HttpStatusCodes.NO_CONTENT).send()
}catch(err){
  next(err)
}
}

