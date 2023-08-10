import { Request, Response } from "express";
declare class CarController {
    private productService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    addCar: (req: Request, res: Response) => Promise<void>;
    edit: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    findByCar: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CarController;
export default _default;
