import { Response, Request } from "express";
import { ListUserUseCase } from "../../useCases/ListUserUseCase";

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const users = await this.listUserUseCase.execute();

    return response.status(200).json({ users });
  }
}

export { ListUserController };