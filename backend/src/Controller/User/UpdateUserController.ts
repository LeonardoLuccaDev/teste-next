import { Request, Response } from "express";
import { UpdateUserService } from "../../Service/User/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const {
            name,
            email
        } = request.body;

        const { id } = request.params;

        const service = new UpdateUserService();

        const result = await service.execute({
            name: name,
            email: email,
            id: id
        });

        return response.json(result);
    }
}

export { UpdateUserController }