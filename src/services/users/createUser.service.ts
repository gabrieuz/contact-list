import { User } from "../../entities/users.entity";
import { IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import bcrypt from "bcrypt";
import AppError from "../../errors/appError";

const createUserService = async ({ fullName, email, password, phone, isAdm }: IUserRequest): Promise<User> => {
	const userRepository = AppDataSource.getRepository(User);
	password = bcrypt.hashSync(password, 10);
	const userExists = await userRepository.findOneBy({ email });

	if (userExists) {
		throw new AppError("User already exists", 400);
	}

	const user = userRepository.create({
		fullName,
		email,
		password,
		phone,
		isAdm: isAdm || false,
		isActive: true,
	});

	await userRepository.save(user);

	return user;
};

export default createUserService;
