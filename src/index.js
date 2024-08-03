import dotenv from "dotenv";
import cors from 'cors' 
import mongoose from 'mongoose'
import { app } from "./app.js";
dotenv.config();


const port = 3000;  //after compeletion , we will push this  into .env 
const mongo_uri = 'mongodb+srv://mradhruv460:quiz_dhruv@cluster0.8iwgdu0.mongodb.net/gemini_project'

app.use(cors());
mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(port,()=>{
console.log(`⚙️ Server is running at ${port} `);
})

