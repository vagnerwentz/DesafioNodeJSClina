import { Router } from 'express';
import multer from 'multer';

import { createUserController } from '../modules/users';

import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository';

const usersRoutes = Router();

const upload = multer({
    dest: 'tmp/'
});

usersRoutes.post("/", (request, response) => {
    createUserController.handle(request, response);

    return response.status(200).send();
});

usersRoutes.get("/", (request, response) => {
    // const usersRepository = UsersRepository.getInstance();

    // return response.status(200).json(usersRepository.list());
});

export { usersRoutes };