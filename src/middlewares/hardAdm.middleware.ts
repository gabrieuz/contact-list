import { Request, Response, NextFunction } from "express";

const hardAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	if (!req.user.isAdm) {
		return res.status(403).json({
			message: "Only admins can access this route.",
		});
	}

	next();
};

export default hardAdmMiddleware;
