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

// productRouter.post('/product', async function (req, res) {
// 	const name: string = req.body.name
// 	const price: Float32Array = req.body.price
// 	const quantity: Int16Array = req.body.quantity
// 	let result = await ProductController.Product(name, price, quantity)
    
// 	if (result) {
// 		req.session.save(function (err) {
// 			if (err) {
// 				res.status(500).send('Error while creating session');
// 			} else {
// 				req.session.connected = true;
// 				res.send(true);
// 			}
// 		});
// 	} else {
// 		res.status(403).send('Connection Failed');
// 	}
// })

productRouter.post('/', async function (req, res) {
	console.log('body', req.body)
	const name: string = req.body.name
	const price: number = req.body.price
	const quantity: number = req.body.quantity
	const result: boolean = await ProductController.Create(name, price, quantity);
	if (result) {
		res.send(true);
	} else {
		res.status(422).send('product is already used');
	}
});

productRouter.get('/list', async function (req, res) {
	res.send(await ProductController.Get());
});

export = productRouter;
