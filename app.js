require('dotenv').config();

const express = require('express');

const connectDB = require('./config/db');
const logger = require('./middleware/logger');
const responseFormatter = require('./middleware/responseFormatter');
const errorHandler = require('./middleware/errorHandler');

const productRoutes = require('./routes/productRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use(logger);
app.use(responseFormatter);

app.get('/', (req, res) => {
  res.success(
    {
      name: 'Advanced REST API'
    },
    'API is running'
  );
});

app.use('/api/products', productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});