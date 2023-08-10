"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carService_1 = __importDefault(require("../service/carService"));
class CarController {
    constructor() {
        this.findAll = async (req, res) => {
            console.log(1);
            let listProduct;
            if (req.query.carCompany) {
                listProduct = await this.productService.findByCompany(req.query.carCompany);
            }
            else {
                listProduct = await this.productService.getAll();
            }
            res.json(listProduct);
        };
        this.addCar = async (req, res) => {
            let addCar = await this.productService.add(req.body);
            res.json(addCar);
        };
        this.edit = async (req, res) => {
            let edit = await this.productService.edit(req.params.id, req.body);
            res.json(edit);
        };
        this.delete = async (req, res) => {
            let remove = await this.productService.delete(req.params.id);
            res.json(remove);
        };
        this.findByCar = async (req, res) => {
            let find = await this.productService.findByCompany(req.query.carCompany);
            res.json(find);
        };
        this.findById = async (req, res) => {
            let findByID = await this.productService.findByID(req.params.id);
            res.json(findByID);
        };
        this.productService = carService_1.default;
    }
}
exports.default = new CarController();
//# sourceMappingURL=carController.js.map