import User from "../../entities/users.entity";

export interface IContactRequest {
	fullName: string;
	email: string;
	phone: string;
	user?: User;
}

export interface IContact extends IContactRequest {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	isActive: boolean;
}

export interface IContactUpdate {
	fullName?: string;
	email?: string;
	phone?: string;
}
