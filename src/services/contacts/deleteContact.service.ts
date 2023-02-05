import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import AppError from "../../errors/appError";   

const deleteContactService = async (id: string): Promise<Boolean> => {

	const contactRepository = AppDataSource.getRepository(Contact);

	const contact = await contactRepository.findOneBy({ id });

	if (!contact) {
		throw new AppError("Contact not found.", 404);
	}

	if (!contact.isActive) {
		throw new AppError("Contact already deleted.", 400);
	}
        
	await contactRepository.update(id, {
		isActive: false,
	});

	const deletedContact = await contactRepository.findOneBy({ id });

	return true;
};

export default deleteContactService;
