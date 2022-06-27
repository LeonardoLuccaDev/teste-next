import { Request, Response } from "express";
import { ProfileService } from "../../Service/User/ProfileService";

class ProfileController {
    async handle(request: Request, response: Response) {
        const { id } = request;

        const service = new ProfileService();

        const result = await service.execute({
            id: id
        });

        return response.json(result);
    }
}

export { ProfileController }