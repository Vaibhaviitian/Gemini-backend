import {  Router } from "express";
import { getdata } from "../controllers/Getdata.js";

const router = Router();

router.route('/getdata').get(getdata);

export default router;