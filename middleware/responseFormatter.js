const responseFormatter = (req, res, next) => {
  res.success = (data, message = 'Request successful') => {
    res.status(200).json({
      success: true,
      message,
      data
    });
  };

  next();
};

module.exports = responseFormatter;