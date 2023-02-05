import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
	let token = req.headers.authorization;

	if (!token) {
		return res.status(401).json({ message: "Missing authorization token." });
	}

	if (token.startsWith("Bearer ")) {
		token = token.slice(7, token.length);
	}

	jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
		if (error) {
			return res.status(401).json({ message: "Missing authorization token." });
		}

		req.user = {
			id: decoded.sub,
			isAdm: decoded.isAdm,
			isActive: decoded.isActive,
		};

		next();
	});
};

export default ensureAuthMiddleware;
