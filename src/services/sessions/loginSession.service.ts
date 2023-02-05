import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/users/index";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppError from "../../errors/appError";
import bcrypt from "bcrypt";

const loginSessionService = async ({ email, password }: IUserLogin): Promise<string> => {
	const userRepository = AppDataSource.getRepository(User);
	const user = await userRepository.findOneBy({ email });

	if (!user) {
		throw new AppError("E-mail or password incorrect.", 403);
	}

	const isCorrectPassword = bcrypt.compareSync(password, user.password);

	if (!isCorrectPassword) {
		throw new AppError("E-mail or password incorrect.", 403);
	}

	const token = jwt.sign({ isAdm: user.isAdm, isActive: user.isActive }, process.env.SECRET_KEY as string, {
		expiresIn: "24h",
		subject: user.id,
	});

	return token;
};

export default loginSessionService;
