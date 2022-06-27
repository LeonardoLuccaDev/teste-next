import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { router } from './Routes';

config();

const port = process.env.PORT ?? 4000;

const app = express();

const allowedOrigins = process.env.CORS ?? "http://localhost:3000";

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());

app.use('/api', router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(400).json({
        status: 'Error',
        message: error.message
    });
});

app.listen(port, () => console.log(`server running on port ${port}`));

