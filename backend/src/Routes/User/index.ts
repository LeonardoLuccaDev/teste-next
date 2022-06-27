import { Router } from "express";
import { CreateUserController } from "../../Controller/User/CreateUserController";
import { DeleteUserController } from "../../Controller/User/DeleteUserController";
import { GetAllUsersController } from "../../Controller/User/GetAllUsersController";
import { GetUserController } from "../../Controller/User/GetUserController";
import { LoginController } from "../../Controller/User/LoginController";
import { ProfileController } from "../../Controller/User/ProfileController";
import { UpdateProfileController } from "../../Controller/User/UpdateProfileController";
import { UpdateUserController } from "../../Controller/User/UpdateUserController";
import { EnsureAuthenticated } from "../../Middleware/EnsureAuthenticated";

const userRoutes = Router();

userRoutes.post('/', new CreateUserController().handle)
userRoutes.post('/login', new LoginController().handle)
userRoutes.get('/', EnsureAuthenticated, new GetAllUsersController().handle)
userRoutes.get('/profile/:id', EnsureAuthenticated, new GetUserController().handle)
userRoutes.get('/profile', EnsureAuthenticated, new ProfileController().handle)
userRoutes.put('/', EnsureAuthenticated, new UpdateProfileController().handle)
userRoutes.put('/:id', EnsureAuthenticated, new UpdateUserController().handle)
userRoutes.delete('/:id', EnsureAuthenticated, new DeleteUserController().handle)

export { userRoutes }