import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

class ListUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  async execute(): Promise<User[]> {
    return await this.usersRepository.list();
  }
}

export { ListUserUseCase };