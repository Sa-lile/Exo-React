import ProductModel from '../model/ProductModel';

class ProductController {

/**
 * Register
     * function to register a user in the app
     * @param name name of the product
     * @param price price of the product
     * @param quantity quantity of the product
     * @returns {boolean} true if register is sucessfull else false
     * */

    public static async Create(name: string, price: number, quantity: number) {
        const result: any = await ProductModel.Create(name, price, quantity);
        return result;
    }

    public static async Get() {
		const result: any = await ProductModel.Get();
		return result;
	}
    
}

export= ProductController;