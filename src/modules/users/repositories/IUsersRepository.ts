import { User } from '../model/User';

interface ICreateUserDTO {
    name: string;
    email: string;
    avatar: string;
}

interface IUsersRepository {
    create({ name, email, avatar }: ICreateUserDTO): User;
}

export { IUsersRepository, ICreateUserDTO };