const orderModel = require("../models/ordreModel");
const productModel = require("../models/productModel");

exports.createOrder=async(req, res, next) => {
    // console.log(req.body);
    const cartItem = req.body;
    const amount = Number(cartItem.reduce((acc,item)=>(acc+item.product.price * item.qty),0)).toFixed(2);
    // console.log(amount);
    const status = "Processing";

 const order=  await  orderModel.create({cartItem, amount, status})


 //minus the stock qty
 cartItem.forEach(async (item)=> {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })
    res.json({
        success: true,
        order
    });
}