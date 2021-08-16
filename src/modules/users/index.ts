import { UsersRepository } from './repositories/implementations/UsersRepository';
import { CreateUserUseCase } from './useCases/CreateUserUseCase';
import { CreateUserController } from './controllers/CreateUserController';

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };