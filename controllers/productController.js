const ProductModel = require('../models/productModel'); 

exports.getProducts=async(req,res,next)=>{


   const products= await ProductModel.find({})


    res.json({
        success: true,
        products
    });
}
exports.getSingleProducts=async(req,res,next)=>{
try {
    const product = await ProductModel.findById(req.params.id);

     res.json({
        success: true,
        product
    });
    
} catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message
    });
    
}
    
   
}