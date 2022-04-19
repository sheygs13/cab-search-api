import express, { Express, Request, Response } from 'express';
import { urlencoded, json } from 'body-parser';
import helmet from 'helmet';
import 'dotenv/config';

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
        res.status(200).json({ message: 'OK' });
});

app.listen(PORT, () => console.log(`server App listening on port ${PORT} ⚡...`));
