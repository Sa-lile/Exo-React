import express from 'express';
import ProductController from '../controller/ProductController';

declare module 'express-session' {
	interface SessionData {
		connected: boolean;
	}
}
const productRouter = express.Router();

/**
 * 1 TODO create a /list function
 * 2 Create and user productController
 * 3 Create list function in productController
 * 4 Create productModel
 * 5 Create list function in productModel
 *  5.1 Create request to get product from database
 * 6 send response to client
 * example user/list
 */


productRouter.post('/create', async function (req, res) {
	const name: string = req.body.name
	const price: number = req.body.price
	const quantity: number = req.body.quantity
	const result: boolean = await ProductController.Create(name, price, quantity);
	if (result) {
		res.send(true);
	} else {
		res.status(500).send('product is already used');
	}
});

productRouter.get('/list', async function (req, res) {
	res.send(await ProductController.List());
});

productRouter.post('/update/:id', async function (req, res) {
	const id: number = parseInt(req.params.id as string);
	const name: string = req.body.name;
	const price: number = req.body.price;
	const quantity: number = req.body.quantity;
	console.log("id", id);
	console.log("name", name);
	console.log("price", price);
	console.log("quantity", quantity);
	const result: boolean = await ProductController.Update(id, name, price, quantity);
	if (result) {
		res.send(true);
	} else {
		res.status(422).send('Product is already used');
	} 
});

productRouter.delete('/delete/:id', async function (req, res) {
	const id: number = parseInt(req.params.id as string)
	const result: boolean = await ProductController.Delete(id);
	if (result) {
		res.send(true);
	} else {
		res.status(500).send('error');
	}
});

export = productRouter;
