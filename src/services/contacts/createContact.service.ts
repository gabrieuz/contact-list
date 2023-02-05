import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { IContactRequest } from "../../interfaces/contacts";
import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";

const createContactService = async ({ fullName, email, phone }: IContactRequest, userId: string): Promise<Contact> => {
	const contactRepository = AppDataSource.getRepository(Contact);
	const contactExists = await contactRepository.findOneBy({ email });

	const user = await AppDataSource.getRepository(User).findOneBy({ id: userId });

	if (contactExists) {
		throw new AppError("Contact already exists", 400);
	}

	const contact = contactRepository.create({
		fullName,
		email,
		phone,
		user: user!,
	});

	await contactRepository.save(contact);

	return contact;
};

export default createContactService;
