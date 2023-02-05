import { Request, Response } from "express";
import { IContactUpdate } from "../../interfaces/contacts";
import updateUserService from "../../services/users/updateUser.service";

const updateContactController = async (req: Request, res: Response) => {
	const { id } = req.params as { id: string };
	const { email, fullName, phone } = req.body as IContactUpdate;
	const contact: IContactUpdate = { email, fullName, phone };
	const updatedContact = await updateUserService(contact, id);
	return res.status(200).json(updatedContact);
};

export default updateContactController;
