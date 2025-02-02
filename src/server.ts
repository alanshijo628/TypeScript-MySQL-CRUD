import express from 'express';
import userRoutes from './routes/userRoute';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRoutes);

export default app;