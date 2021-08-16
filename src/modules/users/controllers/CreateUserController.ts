import { Request, Response } from 'express';

import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email, password, avatar } = request.body;

            const user = await this.createUserUseCase.execute({ name, email, password, avatar });

            return response.status(200).json({ user });
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
}

export { CreateUserController };