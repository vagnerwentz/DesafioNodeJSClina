import { User } from '../model/User';

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

interface IUsersRepository {
    create({ name, email, password, avatar }: ICreateUserDTO): Promise<User>;
    list(): Promise<User[]>;
}

export { IUsersRepository, ICreateUserDTO };