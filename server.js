const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const colors=require('colors');
const dotenv=require('dotenv');
const path=require('path')
const connectDb = require('./config/connectDb');
connectDb()
const app=express();
dotenv.config();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api/v1/users',require('./routes/userRoute'))
app.use('/api/v1/transactions',require('./routes/transactionRoute'))
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
const PORT = 8080 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
});