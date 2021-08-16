import { User } from '../model/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute({ name, email, password, avatar }: IRequest): Promise<User> {
        return await this.usersRepository.create({ name, email, password, avatar });
    }
}

export { CreateUserUseCase };