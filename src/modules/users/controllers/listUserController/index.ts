import { UsersRepository } from "../../repositories/implementations/UsersRepository"
import { ListUserUseCase } from "../../useCases/ListUserUseCase";
import { ListUserController } from "./ListUserController";

export default (): ListUserController => {
  const usersRepository = new UsersRepository();
  const listUserUseCase = new ListUserUseCase(usersRepository);
  const listUserController = new ListUserController(listUserUseCase);

  return listUserController;
}