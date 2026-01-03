import express from "express"
import "dotenv/config"
import userRoute from "./routes/userRoute.js";
import { disconnectDB } from "./config/db.js";
const app = express();

const PORT = process.env.PORT


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",userRoute)

const server = app.listen(PORT, ()=>{
    console.log("Server is listening at PORT ",PORT)
})



process.on("unhandledRejection",(err)=>{
    console.log("Unhandled Rejection :",err.message);
    server.close(async()=>{
        await disconnectDB();
        process.exit(1)
    })
})


process.on("uncaughtException",async(err)=>{
    console.log("uncaught Exception :",err.message);
    await disconnectDB();
    process.exit(1);

})

process.on("SIGTERM",async()=>{
    console.log("SIGTERM recieved , shutting down gracefully");
    server.close(async()=>{
      await  disconnectDB();
      process.exit(0);
    })
})