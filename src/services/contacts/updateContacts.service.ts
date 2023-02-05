import { IUserUpdate } from "../../interfaces/users";
import { User } from "../../entities/users.entity";
import bcrypt from "bcrypt";
import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";

const updateUserService = async ({ name, email, password }: IUserUpdate, id: string): Promise<User> => {

	const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id });

	if (!user) {
		throw new AppError("User not found.", 404);
	}

	await userRepository.update(id, {
		name: name || user.name,
		email: email || user.email,
		password: password ? await bcrypt.hash(password, 10) : user.password,
	});

	const updatedUser = await userRepository.findOneBy({ id });

	return updatedUser!;
};

export default updateUserService;
