import {Car} from "../entity/car";
import {AppDataSource} from "../data-source";

class CarService {
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(Car);
    }

    getAll = async () => {
        let products = await this.productRepository.find();
        return products;
    }

    add = async (product) => {
        await this.productRepository.save(product)
    }
    edit = async (id,product)=>{
        await this.productRepository.update(id,product)
    }
    delete = async (id)=>{
        await this.productRepository.delete(id)
    }
    findByCompany = async (company)=>{
     return    await this.productRepository.find({
            where : {
                carCompany : company
            }
        })
    }
    findByID = async (id)=>{
      return   await this.productRepository.find({
            where : {
                 id
            }
        })
    }
}

export default new CarService();
