import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
	const { id } = req.params as { id: string };
	const { email, password, fullName, phone } = req.body as IUserUpdate;
	const user: IUserUpdate = { email, password, fullName, phone };
	const updatedUser = await updateUserService(user, id);
	return res.status(200).json(updatedUser);
};

export default updateUserController;
