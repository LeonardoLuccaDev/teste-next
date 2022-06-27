import { Request, Response } from "express";
import { CreateUserService } from "../../Service/User/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const {
            name,
            email,
            password
        } = request.body;

        const service = new CreateUserService();

        const result = await service.execute({
            name: name,
            email: email,
            password: password
        });
        
        return response.json(result);
    }
}

export { CreateUserController }