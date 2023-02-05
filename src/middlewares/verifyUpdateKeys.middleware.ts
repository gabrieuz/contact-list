import { Request, Response, NextFunction } from "express";

const verifyUpdateKeys = (req: Request, res: Response, next: NextFunction) => {
	if (req.body.hasOwnProperty("id") || req.body.hasOwnProperty("isAdm") || req.body.hasOwnProperty("isActive")) {
		return res.status(401).json({ message: "You are trying to update a protected field." });
	}

	next();
};

export default verifyUpdateKeys;
