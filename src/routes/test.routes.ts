import { Router } from "express";
import { getTest } from "../controllers/test.controller";


const router = Router();

//Perfiles
router.get('/', getTest);

export default router;