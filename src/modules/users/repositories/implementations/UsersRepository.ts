import { getRepository, Repository } from 'typeorm';

import { User } from "../../entities/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
        });

        await this.repository.save(user);
    }

    async list(): Promise<User[]> {
        return await this.repository.find();
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });

        return user;
    }
}

export { UsersRepository };