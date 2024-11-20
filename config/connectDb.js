const mongoose=require('mongoose');
const colors=require('colors');
const connectDb=async()=>{
    try{
        await mongoose.connect('mongodb+srv://1122rahulchoudhary:Rahul184@cluster0.yy3mr.mongodb.net/finance_tracker');
        console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
    }
    catch(error){
        console.log(`${error}`.bgRed);
    }
};
module.exports = connectDb;