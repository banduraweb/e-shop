const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

const uri = process.env.MONGO_ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


const productsRouter = require('./routes/products.routes');

app.use('/products', productsRouter);


app.listen(port, ()=>{
    console.log(`Started...${port}`);
});