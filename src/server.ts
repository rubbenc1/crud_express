import express, { Request, Response, NextFunction } from 'express';
import serverRoutes from './routes/router';
const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());

app.use('/users', serverRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});