import { User } from '../../../modules/users/entities/User';

describe("Model | User", () => {
    it("should be able to create an user with all props", () => {
        const user = new User();

        Object.assign(user, {
            name: "John Doe",
            email: "johndoe@email.com",
            created_at: new Date(),
            updated_at: new Date(),
        });

        expect(user).toMatchObject({
            name: "John Doe",
            email: "johndoe@email.com",
        });

        expect(user.created_at).toBeInstanceOf(Date);
        expect(user.updated_at).toBeInstanceOf(Date);
    })
});