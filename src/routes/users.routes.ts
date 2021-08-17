import { Router } from 'express';

import createUserController from '../modules/users/controllers/createUserController';
import listUserController from '../modules/users/controllers/listUserController';

const usersRoutes = Router();

usersRoutes.post("/", async (request, response) => {
    await createUserController().handle(request, response);

    return response.status(200).send();
});

usersRoutes.get("/", async (request, response) => {
    const users = await listUserController().handle(request, response);
    return response.status(200).json({message: users});
});

export { usersRoutes };