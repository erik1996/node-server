import { Router } from 'express';
import { getItemController, insertItemController, removeItemController } from '../controllers/item.controller';
import { validationMiddleware } from '../middleware/validation.middleware';
import { itemValidation } from '../validation/item.validation';

const itemRouter = Router();

itemRouter.get('/', getItemController);
itemRouter.post('/', validationMiddleware(itemValidation), insertItemController);
itemRouter.delete('/:id', removeItemController);

export default itemRouter;