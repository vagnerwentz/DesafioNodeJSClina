import connection from "../../../infra/typeorm";
import { UsersRepository } from "../../../modules/users/repositories/implementations/UsersRepository";

let usersRepository: UsersRepository;

describe("Repository | User", () => {
  beforeAll(async () => {
    await connection.create();
    usersRepository = new UsersRepository();
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  it("should be able to create a new user", async () => {
    const user = {
      name: "John Doe",
      email: "john@email.com",
      password: "john",
    };

    await usersRepository.create(user);

    const users = await usersRepository.list();

    expect(users).toHaveLength(1);
  });

  it("should be able to list all users", async () => {
    const firstUser = {
      name: "John Doe",
      email: "john@email.com",
      password: "john",
    };

    const secondUser = {
      name: "Ana Linz",
      email: "ana@email.com",
      password: "ana",
    };

    await usersRepository.create(firstUser);
    await usersRepository.create(secondUser);

    const users = await usersRepository.list();

    users.forEach((user, index) => expect(user).toEqual(users[index]));
  });

  it("should be able to find an user with the findByEmail method", async () => {
    const user = {
      name: "John Doe",
      email: "john@email.com",
      password: "john",
    };

    await usersRepository.create(user);

    const userFound = await usersRepository.findByEmail(user.email);

    expect(userFound.email).toEqual(user.email);
  });
});
