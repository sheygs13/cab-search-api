import express, { Request, Response, NextFunction, Application } from 'express';
import { urlencoded, json } from 'body-parser';
import helmet from 'helmet';
import 'dotenv/config';
import { Server } from 'http';

const PORT: number = Number(process.env.PORT) || 5000;
const app: Application = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({ message: 'OK' });
});

const server: Server = app.listen(PORT, () =>
        console.log(`server App listening on port ${PORT} ⚡...`)
);

export default server;
