const ProductManager = require('../controllers/pm.controller')

module.exports = (app) => {
    // app.get("/", (req, res)=>{
    //     res.json({msg:"Hello World"})
    // })
    // app.get('/api', ProductManager.index);
    app.post('/api/products', ProductManager.createProduct);
    // app.get('/api/products', ProductManager.getAllProducts);
    // app.get('/api/products/:id', ProductManager.getOneProduct);
    // app.patch('/api/products/:id', ProductManager.updateProduct);
    // app.delete('/api/products/:id', ProductManager.deleteProduct )
}
