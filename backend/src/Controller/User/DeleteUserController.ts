import { Request, Response } from "express";
import { DeleteUserService } from "../../Service/User/DeleteUserService";

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteUserService();

        const result = await service.execute({
            id: id
        });

        return response.json(result);
    }
}

export { DeleteUserController }