const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const jwt = require("jsonwebtoken");
const cors=require("cors");
const userRoutes=require("./routes/user");
const orderRoutes=require("./routes/order")
mongoose.connect("mongodb+srv://shiva_17:7758015455@laundrydata.a1zpr.mongodb.net/laundryData?retryWrites=true&w=majority");
app.use(cors());

// app.use('/orders',function(req,res,next){
//     try{
//         const token = req.headers.authorization?.split(" ")[1];
//         if (!token){
//             return res.status(401).json({
//                 status:"failed",
//                 message:"Not Authenticated"
//             })
//         }
//         const decoded=jwt.verify(token,'Laundry-Secret-123');
//         if(!decoded){
//             return res.status(401).json({
//                 status:"failed",
//                 message:"Invalid token"
//             })
//         }
//         console.log(decoded)
//         req.user = decoded.data;
//     }catch(e){
//         res.json({
//             status:'failed',
//             message:e.message
//         })
//     }
//     next();
// });


app.use(bodyParser());

app.use("/",userRoutes);
app.use("/orders",orderRoutes);
app.listen('3070',console.log('Server listening to port 3070'));