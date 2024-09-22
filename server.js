import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express(); 
const port = 4000

//middleware
app.use(express.json()); 
app.use(cors());

//db
connectDB();
// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>
{
    res.send("Api Working")
})

app.listen(port, ()=>
{
    console.log(`Listening on http://localhost:${port}`)

})

//mongodb+srv://skyden69:S2IzWwlt74Ym1qZU@cluster0.bjwzg.mongodb.net/?

//mongodb+srv://skyden69:S2IzWwlt74Ym1qZU@cluster0.bjwzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0