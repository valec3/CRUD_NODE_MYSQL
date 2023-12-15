import { Router } from "express";
import {
  testController,
  getNameTablesOfDB,
  countRecordsOfAllTables,
} from "../controllers/test.controller.js";
const router = Router();

router.get("/", testController);
router.get("/countRecordsOfAllTables", countRecordsOfAllTables);

export default router;
