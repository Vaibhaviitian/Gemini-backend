import {  Router } from "express";
import { Blogresult, BLogsummary, BLogtitle, converttopara, jobrole, lipost, liprofileview, pcaption, promotionaldata, utubevuddes, utubevuditle } from "../controllers/Getdata.js";

const router = Router();

router.route('/api/v1/kol/Blogtitle').post(BLogtitle);
router.route('/api/v1/kol/Blogsummary').post(BLogsummary);
router.route('/api/v1/kol/Blogresult').post(Blogresult);
router.route('/api/v1/kol/paragraph').post(converttopara);
router.route('/api/v1/kol/promotion').post(promotionaldata);
router.route('/api/v1/kol/utubeviddescr').post(utubevuddes);
router.route('/api/v1/kol/utubevidtitle').post(utubevuditle);
router.route('/api/v1/kol/jobrole').post(jobrole);
router.route('/api/v1/kol/piccaption').post(pcaption);
router.route('/api/v1/kol/lipost').post(lipost);
router.route('/api/v1/kol/liprofileview').post(liprofileview);


export default router;