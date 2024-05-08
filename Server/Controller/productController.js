import ProductModel from "../Modal/ProductsModel.js";
export const  getProducts= async(req,res)=>{
    try {
       const products =await ProductModel.find()
       res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getProductById = async(req,res)=>{
    try {
        const id = req.params.id;
        const productId =await ProductModel.find({'id':id})
        res.status(200).json(productId);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}