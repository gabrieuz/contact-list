import "reflect-metadata";
import "express-async-errors";
import express from "express";
import usersRouter from "./routes/users.routes";
import contactsRouter from "./routes/contacts.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import sessionsRouter from "./routes/sessions.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/contacts", contactsRouter);
app.use("/login", sessionsRouter);
app.use(handleErrorMiddleware);

export default app;
