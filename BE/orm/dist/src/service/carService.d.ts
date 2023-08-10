declare class CarService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
    edit: (id: any, product: any) => Promise<void>;
    delete: (id: any) => Promise<void>;
    findByCompany: (company: any) => Promise<any>;
    findByID: (id: any) => Promise<any>;
}
declare const _default: CarService;
export default _default;
