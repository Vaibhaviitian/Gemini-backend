import express from "express";
const app = express();
app.use(express.json({
    limit:"20kb"
}));
app.use(express.urlencoded({
    extended:true,
    limit:"20kb"
}))
app.use(express.static("Public"));

import dataroutes from './Routes/Data.routes.js'

app.use("/data",dataroutes)
export {app}