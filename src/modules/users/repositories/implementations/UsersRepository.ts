import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: User[];

    private constructor() {
        this.users = [];
    }

    private static INSTANCE: UsersRepository;

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    create({ name, email, avatar }: ICreateUserDTO): User {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            avatar,
            created_at: new Date(),
            updated_at: new Date(),
        });

        this.users.push(user);

        return user;
    }
}

export { UsersRepository };