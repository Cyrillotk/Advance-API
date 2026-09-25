const Product = require('../models/Product');

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find()
      .select('name category price stock')
      .lean();

    res.success(products, 'Products retrieved successfully');
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
      .select('name category price stock')
      .lean();

    if (!product) {
      const error = new Error('Product not found');
      error.status = 404;
      throw error;
    }

    res.success(product, 'Product retrieved successfully');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProductById
};