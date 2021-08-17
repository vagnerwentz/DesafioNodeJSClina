import { CreateUserUseCase } from "../../../modules/users/useCases/CreateUserUseCase";
import { UsersRepositoryInMemory } from "./in-memory/UsersRepositoryInMemory";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Use Case | Create User", () => {

  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to create a new user", async () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'johndoepassword'
    };

    await createUserUseCase.execute({
      name: user.name,
      email: user.email,
      password: user.password
    });

    const userCreated = await usersRepositoryInMemory.findByEmail(user.email);

    expect(userCreated).toHaveProperty('id');
  });

  it("should not be able to create a new user if user already exists", async () => {
      const user = {
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: 'johndoepassword'
      };

      const userIsNotAbleToBeCreated = {
        name: 'Ana Lin',
        email: 'johndoe@email.com',
        password: 'Ana Lin'
      };

      await createUserUseCase.execute({
        name: user.name,
        email: user.email,
        password: user.password
      });

      await expect(createUserUseCase.execute({
        name: userIsNotAbleToBeCreated.name,
        email: userIsNotAbleToBeCreated.email,
        password: userIsNotAbleToBeCreated.password
      })).rejects.toBeInstanceOf(Error);
  });
});