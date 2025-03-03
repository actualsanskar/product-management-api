import express from "express";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.routes.js"
const app = express();


const PORT = process.env.port || 3000;

app.use(express.json());
app.use('/api/products', productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("the server has started and is running at: http://localhost:/" + PORT);
})

