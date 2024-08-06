import dotenv from "dotenv";

import mongoose from 'mongoose'
import { app } from "./app.js";
dotenv.config();


const mongo_uri = 'mongodb+srv://mradhruv460:quiz_dhruv@cluster0.8iwgdu0.mongodb.net/gemini_project'
// const mongo_uri = 'mongodb+srv://gemini:123@cluster0.zlp0toa.mongodb.net/gemini'
// everybodu add your port in your .env file 


mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT,()=>{
console.log(`⚙️ Server is running at ${process.env.PORT} `);
})

