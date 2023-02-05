import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { mockedContact, mockedUser, mockedUserLogin} from "../../mocks"


describe("/users", () => {
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /contacts -  Must be able to create a contact",async () => {
        const response = await request(app).post('/contacts').send(mockedContact)

        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("fullName")
        expect(response.body).toHaveProperty("phone")
        expect(response.body).toHaveProperty("email")
        expect(response.body).toHaveProperty("isActive")
        expect(response.body).toHaveProperty("createdAt")
        expect(response.body).toHaveProperty("updatedAt")
        expect(response.body).not.toHaveProperty("password")
        expect(response.body.name).toEqual("Carlos")
        expect(response.body.phone).toEqual("11999999999")
        expect(response.body.email).toEqual("carlos@mail.com")
        expect(response.body.isActive).toEqual(true)
        expect(response.status).toBe(201)        
    })

    test("POST /contacts -  should not be able to create a contact that already exists", async () => {
		const response = await request(app).post("/contacts").send(mockedContact);

		expect(response.body).toHaveProperty("message");
		expect(response.status).toBe(400);
	});

    test("GET /contacts -  Must be able to list contacts", async () => {
        await request(app).post('/contacts').send(mockedUser)
        const userLoginResponse = await request(app).post("/login").send(mockedUserLogin);
        const response = await request(app).get('/contacts').set("Authorization", `Bearer ${userLoginResponse.body.token}`)

        expect(response.body).toHaveLength(1)
        expect(response.status).toBe(200)
    })

    test("GET /contacts -  should not be able to list contacts without authentication", async () => {
		const response = await request(app).get("/contacts");

		expect(response.body).toHaveProperty("message");
		expect(response.status).toBe(401);
	});

    test("DELETE /contacts/:id -  should not be able to delete contact without authentication", async () => {
		const response = await request(app).delete("/contacts/1");

		expect(response.body).toHaveProperty("message");
		expect(response.status).toBe(401);
	});
})