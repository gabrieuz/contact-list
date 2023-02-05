export interface IUserRequest {
	email: string;
	password: string;
	fullName: string;
	phone: string;
	isAdm?: boolean;
}

export interface IUser extends IUserRequest {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	isActive: boolean;
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUserUpdate {
	email?: string;
	password?: string;
	fullName?: string;
	phone?: string;
}
