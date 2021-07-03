import { Router } from 'express';
import itemRouter from './item.router';

const appRouter = Router();

appRouter.use('/item', itemRouter)

export default appRouter;