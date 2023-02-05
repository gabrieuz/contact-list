import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { IContact } from "../../interfaces/contacts";

const listContactService = async (userId: string): Promise<IContact[]> => {
	const contactRepository = AppDataSource.getRepository(Contact);
	const contacts = await contactRepository.find({ where: { user: { id: userId } } });
	const activeContacts = contacts.filter((contact) => contact.isActive);

	if (!activeContacts) {
		throw new Error("No contacts found.");
	}
	
	return activeContacts;
};

export default listContactService;
