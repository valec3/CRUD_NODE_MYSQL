import { Router } from "express";
import {
  createThing,
  getThings,
  deleteThing,
  updateThing,
} from "../controllers/task.controller.js";
const router = Router();

router.post("/create", createThing);
router.get("/", getThings);
router.delete("/delete/:id", deleteThing);
router.put("/update/:id", updateThing);

export default router;
