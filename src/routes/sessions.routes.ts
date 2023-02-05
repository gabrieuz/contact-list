import { Router } from "express";
import loginSessionController from "../controllers/sessions/loginSession.controller";

const sessionsRouter = Router();

sessionsRouter.post("/", loginSessionController);

export default sessionsRouter;
