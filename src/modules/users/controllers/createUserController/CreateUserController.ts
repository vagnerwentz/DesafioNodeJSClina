import { Request, Response } from 'express';

import { CreateUserUseCase } from "../../useCases/CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email, password } = request.body;

            const user = await this.createUserUseCase.execute({ name, email, password });

            return response.status(200).json({ user });
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
}

export { CreateUserController };