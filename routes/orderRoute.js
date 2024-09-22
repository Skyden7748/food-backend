import { placeOrder } from "../controllers/orderController.js";
import authmiddleware from "../middleware/auth.js";
import { verifyOrder } from "../controllers/orderController.js";
import { userOrders } from "../controllers/orderController.js";
import express from "express";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authmiddleware , placeOrder );
orderRouter.post("/verify" , verifyOrder );
orderRouter.post("/userorders",authMiddleware,userOrders);



export default  orderRouter