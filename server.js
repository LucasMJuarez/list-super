const express = require ('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'});

connectDB();
const compras = require('./routes/compras');

const app = express();
app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/compras',compras)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`));