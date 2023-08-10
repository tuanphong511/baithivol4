import {Router} from "express";
import productController from "../controller/carController";

const carRouter = Router();
carRouter.get('/:id', productController.findById);

carRouter.get('/', productController.findAll);
carRouter.post('/', productController.addCar);
carRouter.put('/:id', productController.edit);
carRouter.delete('/:id', productController.delete);
export default carRouter;
