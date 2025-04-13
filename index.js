const express=require("express");
// import dotEnv from "dotenv" 
const dotEnv=require('dotenv')
const mongoose=require('mongoose'); 
const vendorRoutes = require('./routes/vendorRoutes')
const bodyParser =require('body-parser');
const firmRoutes =require('./routes/firmRoutes')
require('dotenv').config(); 
const productRoutes = require('./routes/productRoutes')
const cors =require('cors');
const path =require('path')

const app=express()  

const PORT = process.env.PORT || 4000;

dotEnv.config();
app.use(cors())

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongodb connected successfully"))
.catch((error) => console.log(error))

app.use(bodyParser.json());
app.use('/vendor', vendorRoutes); 
app.use('/firm',firmRoutes)
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'));

app.listen(PORT,()=>{
    console.log(`server started and running at ${PORT}`);
});
app.use('/',(req,res)=>{
    res.send("<h1>Welcome to SUBY");
})


