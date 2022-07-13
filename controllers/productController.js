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
exports.getOneProduct = async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);

      res.status(200).json({
        status: "success",
        data: {
          product:product,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  };
  exports.deleteProduct = async (req, res) => {
    try {
      
      await Products.findByIdAndDelete(req.params.id);
      
      res.status(204).json({
        status: "success",
        data: {},
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  };
  exports.updateProduct = async (req, res) => {
    try {
    
      const updatedProduct = await Products.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    
      res.status(200).json({
        status: "success",
        data: {
          updatedProduct,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  };