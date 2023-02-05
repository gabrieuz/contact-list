import { Request, Response } from "express";
import createContactService from "../../services/contacts/createContact.service";
import { IContactRequest } from "../../interfaces/contacts";
import { instanceToPlain } from "class-transformer";

const createContactController = async (req: Request, res: Response) => {
	const userId = req.user.id;
	const contact = await createContactService(req.body as IContactRequest, userId as string);
	return res.status(201).json(instanceToPlain(contact));
};

export default createContactController;
