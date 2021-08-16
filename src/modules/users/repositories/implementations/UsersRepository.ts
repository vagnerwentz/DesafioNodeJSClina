import { getRepository, Repository } from 'typeorm';

import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async create({ name, email, password, avatar }: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({
            name,
            email,
            password,
            avatar
        });

        await this.ormRepository.save(user);

        return user;
    }

    public async list(): Promise<User[]> {
        return this.ormRepository.find();
    }
}

export { UsersRepository };