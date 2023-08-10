import {Router} from "express";
import carRouter from "./carRouter";

const router = Router();
router.use('/car', carRouter);
export default router;
