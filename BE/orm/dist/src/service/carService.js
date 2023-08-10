"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("../entity/car");
const data_source_1 = require("../data-source");
class CarService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find();
            return products;
        };
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.edit = async (id, product) => {
            await this.productRepository.update(id, product);
        };
        this.delete = async (id) => {
            await this.productRepository.delete(id);
        };
        this.findByCompany = async (company) => {
            return await this.productRepository.find({
                where: {
                    carCompany: company
                }
            });
        };
        this.findByID = async (id) => {
            return await this.productRepository.find({
                where: {
                    id
                }
            });
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(car_1.Car);
    }
}
exports.default = new CarService();
//# sourceMappingURL=carService.js.map