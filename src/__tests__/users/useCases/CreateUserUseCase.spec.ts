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

    console.log(userCreated);

    expect(userCreated).toHaveProperty('id');
  });
});