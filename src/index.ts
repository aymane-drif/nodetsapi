import 'module-alias/register';
import dotenv from "dotenv"
dotenv.config()
import express from "express";
import { connectDB } from "@/services/db";



const app= express();
const PORT= process.env.PORT || 5000;

//connect to db
connectDB()

app.use(express.json());


const server=app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    }
)
process.on("unhandledRejection",(error,promise)=>{
    console.log(`Logged Error: ${error}`);
    server.close(()=>process.exit(1))

})