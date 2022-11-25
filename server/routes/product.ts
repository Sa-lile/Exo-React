import express from 'express'
import ProductController from "../controller/ProductController";

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

productRouter.post('/product', async function(req, res) {
    const email: string = req.body.name
    const price: Float32Array = req.body.price
    const quantity: Int16Array = req.body.quantity

    // let result = await ProductController.ListProducts(name, price, quantity)
    // if ( result ) {
    //     req.session.save(function(err) {
    //         if ( err ) {
    //             res.status(500).send("Error while creating session")
    //         } else {
    //             req.session.connected = true
    //             res.send(true)
    //         }
    //     })
    // } else {
    //     res.status(403).send("Connection Failed")
    // }
})
productRouter.get('/product', async function(req, res) {
    // if ( req.session.connected ) {
    //     res.send( await productRouter.ListProducts() )
    // } else {
    //     res.status(401).send('You need to be connected to access this information')
    // }
})
export = productRouter