import { Request, Response, NextFunction } from "express";

const softAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	if (!req.user.isAdm) {
		if (req.user.id == req.params.id) {
			next();
		}
		return res.status(403).json({
			message: "You are not authorized to perform this action.",
		});
	}

	next();
};

export default softAdmMiddleware;
