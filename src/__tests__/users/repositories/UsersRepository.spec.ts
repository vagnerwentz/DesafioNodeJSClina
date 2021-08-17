import { User } from 'modules/users/entities/User';
import { Connection, createConnection, getRepository, Repository } from 'typeorm';
import { validate } from "uuid";
import { UsersRepository } from "../../../modules/users/repositories/implementations/UsersRepository";

describe("Users Repository", () => {
    let connection: Connection;

    let ormUsersRepository: Repository<User>;

    beforeAll(async () => {
        connection = await createConnection();

        ormUsersRepository = getRepository(User);
    })

    it("should be able to create a new user", async () => {
        const user = await usersRepository.create({
            name: 'John Doe',
            email: 'johndoe@email.com',
            password: 'password',
        });

        expect(user).toMatchObject({
            name: 'John Doe',
            email: 'johndoe@email.com',
            password: 'password',
            avatar: 'johndoeavatar',
        });
    });

    // it("should be able to list all users", () => {
    //     const user = usersRepository.create({
    //         name: 'John Doe',
    //         email: 'johndoe@email.com',
    //         password: 'password',
    //         avatar: 'johndoeavatar',
    //     });

    //     const users = usersRepository.list();

    //     expect(users).toStrictEqual(expect.arrayContaining([user]));
    // });
});