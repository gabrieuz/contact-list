import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import loginSessionService from "../../services/sessions/loginSession.service";

const loginSessionController = async (req: Request, res: Response) => {
	const user: IUserLogin = req.body;

	const token = await loginSessionService(user);
	return res.status(200).json({ token });
};

export default loginSessionController;
