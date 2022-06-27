import { Request, Response } from "express";
import { GetUserService } from "../../Service/User/GetUserService";

class GetUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new GetUserService();

        const result = await service.execute({
            id: id
        });

        return response.json(result);
    }
}

export { GetUserController }