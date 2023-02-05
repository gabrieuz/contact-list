import { Request, Response } from "express";
import listContactService from "../../services/contacts/listContacts.service";
import { instanceToPlain } from "class-transformer";

const listContactsController = async (req: Request, res: Response) => {
	const userId = req.user.id;
	const contacts = await listContactService(userId);
	return res.status(200).json(instanceToPlain(contacts));
};

export default listContactsController;
