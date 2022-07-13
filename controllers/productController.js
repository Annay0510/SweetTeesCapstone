const Products = require("./../models/productsModel");

exports.getProducts = async (req,res) =>{
  try{
      const products = await Products.find();
      res.status(200).json({
          status: "success",
          data: {
              products:products
          },
      });
  }  catch(error){
      res.status(500).json({
          status: "error",
          message: error,
      });
  }
};

exports.createProducts = async (req,res) => {
try {
    const newProduct = await Products.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            newProduct:newProduct,
        }
    });
}catch(error){
    res.status(500).json({
    status:"error",
    message: error,
})
}
};