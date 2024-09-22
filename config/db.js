import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect ("mongodb+srv://skyden69:S2IzWwlt74Ym1qZU@cluster0.bjwzg.mongodb.net/food-del")
    .then(()=>console.log("MongoDB connected"))
};