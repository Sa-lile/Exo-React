import { Database } from '../conf/DatabaseConf';


class ProductModel {
	public static async Create(name: string, price: number, quantity: number) {
		let query = 'INSERT INTO `product` (`name`, `price`, `quantity`) VALUES ( ?, ?, ?)';
		return new Promise((resolve, reject) => {
			Database.execute(query, [name, price, quantity])
				.then((res) => {
					resolve(true);
				})
				.catch((err) => {
					console.log(err);
					resolve(false);
				});
		});
	}

	public static async Get() {
		let query = 'SELECT `name`, `price`, `quantity` FROM product';
		const [rows, fields] = await Database.execute(query);
		return rows;
	}
}

export = ProductModel;
