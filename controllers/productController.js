const Products = require("./../models/productsModel");

exports.getProducts = async (req,res) =>{
  try{
      const products = await Products.find();
      res.status(200).json({
          status: "success",
          results: products.length,
          data: {
              products,
          },
      });
  }  catch(error){
      res.status(500).json({
          status: "error",
          data: {
              error: error.message,
          },
      });
  }
};

exports.createProducts = async (req,res) => {
try {
    const newProduct = await Products.create(request.body);
    res.status(201).json({
        status: "success",
        data: {
            newProduct,
        },
    });
}catch{
    res.status(500).json({
    status:"error",
    error: error.message
})
}
};