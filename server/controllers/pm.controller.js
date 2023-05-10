const Product = require('../models/pm.models');

// module.exports.index = (req, res) => { 
//     res.json({
//         message: "Hello World"
//     });
// }
module.exports.createProduct = (req, res) => {
        Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err))
}
//     getAllProducts: (req,res)=> {
//         Product.find({})
//         .then((allProducts)=>{
//             res.json(allProducts)
//         })
//         .catch((err)=> {
//             res.status(400).json({msg: "something went wrong", error:err})
//         })
// },
//     getOneProduct: (req, res)=> {
//         Product.findOne({_id:req.params.id})
//         .then((oneProduct) => {
//             res.json({
//                 product: oneProduct
//             })
//         })
//         .catch((err)=> {
//             res.status(400).json({msg: "something went wrong getting one product", error:err})
//         })
//     },
//     updateProduct: (req, res) => {
//         Product.findByIdAndUpdate({_id: req.params.id},req.body,{new:true, runValidators: true})
//         .then((updateProduct)=>{
//             res.json({
//                 updateProduct:updateProduct
//             })
//         })
//         .catch((err)=>{
//             res.status(400).json({msg: "Something went wrong with update", error: err})
//         })
//     },
//     deleteProduct: (req, res) => {
//         Product.findByIdAndDelete(req.params.id)
//         .then(result => res.json(result))
//         .catch(err => res.json(err))
//     }
// }