import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/appError";   

const deleteUserService = async (id: string): Promise<Boolean> => {

	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ id });

	if (!user) {
        throw new AppError("User not found.", 404);
    }

    if (!user.isActive) {
        throw new AppError("User already deleted.", 400);
    }
        
	await userRepository.update(id, {
		isActive: false,
	});

	const deletedUser = await userRepository.findOneBy({ id });

	return true;
};

export default deleteUserService;
