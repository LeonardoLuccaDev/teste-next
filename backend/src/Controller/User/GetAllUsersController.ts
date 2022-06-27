import { Request, Response } from "express";
import { GetAllUsersService } from "../../Service/User/GetAllUsersService";

class GetAllUsersController {
    async handle(request: Request, response: Response) {
        const service = new GetAllUsersService();

        const result = await service.execute();

        return response.json(result);
    }
}

export { GetAllUsersController }