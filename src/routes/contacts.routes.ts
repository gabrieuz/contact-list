import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

import createContactController from "../controllers/contacts/createContact.controller";
import deleteContactController from "../controllers/contacts/deleteContact.controller";
import listContactsController from "../controllers/contacts/listContacts.controller";
import updateContactController from "../controllers/contacts/updateContacts.controller";
import softAdmMiddleware from "../middlewares/softAdm.middleware";

const contactsRouter = Router();

contactsRouter.post("/", ensureAuthMiddleware, createContactController);
contactsRouter.get("/", ensureAuthMiddleware, listContactsController);
contactsRouter.patch("/:id", ensureAuthMiddleware, updateContactController);
contactsRouter.delete("/:id", ensureAuthMiddleware, deleteContactController);

export default contactsRouter;
