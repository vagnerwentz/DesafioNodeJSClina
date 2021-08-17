import { User } from 'src/modules/users/entities/User';
import connection from '../../../infra/typeorm';
import { UsersRepository } from "../../../modules/users/repositories/implementations/UsersRepository";

let usersRepository: UsersRepository;

describe("Repository | User", () => {
    beforeAll(async ()=>{
        await connection.create();
        usersRepository = new UsersRepository();
    });
      
    afterAll(async ()=> {
        await connection.close();
    });
    
    beforeEach(async () => {
        await connection.clear();
    });

    it("should be able to create a new user", async () => {
        const user = {
            name: 'John Doe',
            email: 'john@email.com',
            password: 'john',
            created_at: new Date(),
            updated_at: new Date(),
        };

        await usersRepository.create(user);

        const users = await usersRepository.list();

        expect(users).toHaveLength(1);
    });

    it("should be able to list all users", async () => {
        const firstUser: User = {
            name: 'John Doe',
            email: 'john@email.com',
            password: 'john',
            created_at: new Date(),
            updated_at: new Date()
        };

        const secondUser: User = {
            name: 'Ana Linz',
            email: 'ana@email.com',
            password: 'ana',
            created_at: new Date(),
            updated_at: new Date()
        };

        await usersRepository.create(firstUser);        
        await usersRepository.create(secondUser);

        expect(await usersRepository.list()).toEqual(
            expect.arrayContaining([
              expect.objectContaining({email: 'john@email.com'}),
              expect.objectContaining({email: 'ana@email.com'})
            ])
          );
    });

    it("should be able find an user with the findByEmail method", async () => {
        const user: User = {
            name: 'John Doe',
            email: 'john@email.com',
            password: 'john',
            created_at: new Date(),
            updated_at: new Date()
        };

        await usersRepository.create(user);        

        const userFound = await usersRepository.findByEmail(user.email);

        console.log(user);

        expect(userFound).toEqual(user);
    });
});