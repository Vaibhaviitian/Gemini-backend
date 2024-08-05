import express from "express";
const app = express();
import cors from 'cors'
app.use(express.json({
    limit:"20kb"
}));
app.use(express.urlencoded({
    extended:true,
    limit:"20kb"
}))
app.use(express.static("Public"));
const corsOptions = {
  origin: 'http://localhost:5174',
  credentials: true,
};
app.use(cors(corsOptions));
import dataroutes from './Routes/Data.routes.js'
import userRoutes from './Routes/User.routes.js'
 app.use('/user',userRoutes)
app.use("/data",dataroutes)
export {app}