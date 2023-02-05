import { Router } from "express";

import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";

import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import hardAdmMiddleware from "../middlewares/hardAdm.middleware";
import softAdmMiddleware from "../middlewares/softAdm.middleware";
import verifyUpdateKeys from "../middlewares/verifyUpdateKeys.middleware";

const usersRouter = Router();

usersRouter.post("/", createUserController);
usersRouter.get("/", ensureAuthMiddleware, hardAdmMiddleware, listUsersController);
usersRouter.patch("/:id", verifyUpdateKeys, ensureAuthMiddleware, softAdmMiddleware, updateUserController);
usersRouter.delete("/:id", ensureAuthMiddleware, hardAdmMiddleware, deleteUserController);

export default usersRouter;
