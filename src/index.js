import dotenv from "dotenv";
dotenv.config();
console.log("HEllo world");
console.log(process.env.API_KEY);
import { app } from "./app.js";
console.log(process.env.PORT);
app.listen(process.env.PORT||1023,()=>{
console.log(`⚙️ Server is running at ${process.env.PORT} `);
})

