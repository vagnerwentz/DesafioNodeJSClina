import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { CreateUserUseCase } from '../../useCases/CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

export default (): CreateUserController => {
  const usersRepository = new UsersRepository();
  const createUserUseCase = new CreateUserUseCase(usersRepository);
  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController;
}