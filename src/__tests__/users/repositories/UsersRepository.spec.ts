import { validate } from "uuid";
import { UsersRepository } from "../../../modules/users/repositories/implementations/UsersRepository";

describe("Users Repository", () => {
    let usersRepository: UsersRepository;

    beforeAll(() => {
        usersRepository = UsersRepository.getInstance();
    });

    it("should be able to create a new user", () => {
        const user = usersRepository.create({
            name: 'John Doe',
            email: 'johndoe@email.com',
            avatar: 'johndoeavatar',
        });

        expect(user).toMatchObject({
            name: 'John Doe',
            email: 'johndoe@email.com',
            avatar: 'johndoeavatar',
        });

        expect(validate(user.id)).toBe(true);
        expect(user.created_at).toBeInstanceOf(Date);
        expect(user.updated_at).toBeInstanceOf(Date);
    });

    it("should be able to list all users", () => {
        const user = usersRepository.create({
            name: 'John Doe',
            email: 'johndoe@email.com',
            avatar: 'johndoeavatar',
        });

        const users = usersRepository.list();

        expect(users).toStrictEqual(expect.arrayContaining([user]));
    });
});