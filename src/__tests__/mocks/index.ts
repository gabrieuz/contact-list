import { IUserLogin, IUserRequest } from "../../interfaces/users";
import { IContactRequest } from "../../interfaces/contacts";

export const mockedUser : IUserRequest = {
    fullName: "Joana",
    password: "123456",
    email: "joana@mail.com",
    phone: "11999999999",
}

export const mockedAdmin : IUserRequest = {
    fullName: "Felipe",
    password: "123456",
    email: "felipe@mail.com",
    phone: "11999999999",
}

export const mockedUserLogin : IUserLogin = {
    email: "joana@mail.com",
    password: "123456"
}

export const mockedAdminLogin : IUserLogin = {
    email: "felipe@mail.com",
    password: "123456"
}

export const mockedContact: IContactRequest = {
    fullName: "Carlos",
    email: "carlos@email.com",
    phone: "11999999999",
}

