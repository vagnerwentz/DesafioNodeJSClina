import { User } from '../../../modules/users/entities/User';

describe("User Model", () => {
    it("should be able to create an user with all props", () => {
        const user = new User();

        Object.assign(user, {
            name: "John Doe",
            email: "johndoe@email.com",
            avatar: "avatar-string",
            created_at: new Date(),
            updated_at: new Date(),
        });

        expect(user).toMatchObject({
            name: "John Doe",
            email: "johndoe@email.com",
            avatar: "avatar-string",
        });

        expect(user.created_at).toBeInstanceOf(Date);
        expect(user.updated_at).toBeInstanceOf(Date);
    })
});