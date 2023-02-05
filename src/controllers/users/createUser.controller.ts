import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";
import { IUserRequest } from "../../interfaces/users";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
	const user = await createUserService(req.body as IUserRequest);
	return res.status(201).json(instanceToPlain(user));
};

export default createUserController;
