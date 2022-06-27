import { Request, Response } from "express";
import { UpdateProfileService } from "../../Service/User/UpdateProfileService";

class UpdateProfileController {
    async handle(request: Request, response: Response) {
        const {
            name,
            email,
            password
        } = request.body;

        const { id } = request;

        const service = new UpdateProfileService();

        const result = await service.execute({
            name: name,
            email: email,
            password: password,
            id: id
        });

        return response.json(result);
    }
}

export { UpdateProfileController }