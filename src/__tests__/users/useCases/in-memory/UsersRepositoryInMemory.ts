import { User } from "../../../../modules/users/entities/User";
import { ICreateUserDTO, IUsersRepository } from "../../../../modules/users/repositories/IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password
    });

    this.users.push(user);
  }

  async list(): Promise<User[]> {
    return await this.users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
}

export { UsersRepositoryInMemory };