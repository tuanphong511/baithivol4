import {Request, Response} from "express";
import carService from "../service/carService";
import * as fs from "fs";

class CarController {
    private productService;

    constructor() {
        this.productService = carService;
    }

    findAll = async (req: Request, res: Response) => {
        console.log(1)
        let listProduct
        if (req.query.carCompany){
             listProduct = await this.productService.findByCompany(req.query.carCompany)

        }else {
            listProduct = await this.productService.getAll();
        }

        res.json(listProduct);
    }
    addCar = async (req: Request, res: Response) => {
        let addCar = await this.productService.add(req.body)
        res.json(addCar)
    }
    edit = async (req: Request, res: Response) => {
        let edit = await this.productService.edit(req.params.id, req.body);
        res.json(edit)
    }
    delete = async (req: Request, res: Response) => {
        let remove = await this.productService.delete(req.params.id);
        res.json(remove)
    }
    findByCar = async (req: Request, res: Response) => {
        let find = await this.productService.findByCompany(req.query.carCompany)
        res.json(find)
    }
    findById = async (req: Request, res: Response) => {
        let findByID = await this.productService.findByID(req.params.id)
        res.json(findByID)
}

}

export default new CarController();
