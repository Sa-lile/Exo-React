import { query } from 'express';
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

	public static async Update(name: string, price: number, quantity: number, id: number) {
		let query = 'UPDATE `product` SET `name` = ?, `price` = ?, `quantity` = ? WHERE `product`.`id` = ?';
		return new Promise((resolve, reject) => {
			Database.execute(query, [name, price, quantity, id])
				.then((res) => {
					resolve(true);
				})
				.catch((err) => {
					console.log(err);
					resolve(false);
				});
		});
	}

	public static async Delete(id: number) {
		let query = 'DELETE FROM `product` WHERE `product`.`id` = ? ';
		return new Promise((resolve, reject) => {
			Database.execute(query, [id])
				.then((res) => {
					resolve(true);
				})
				.catch((err) => {
					console.log(err);
					resolve(false);
				});
		});
	}

	public static async Save() {
		let query = 'SELECT `name`, `price`, `quantity` FROM product';
		const [rows, fields] = await Database.execute(query);
		return this.Save;
	}
	/* Save BDD of products  */
	public static async SaveListProducts() {
		let query = 'SELECT `name`, `price`, `quantity` FROM product';
		const [rows, fields] = await Database.execute(query);
		return this.SaveListProducts;
	}
}

export = ProductModel;
