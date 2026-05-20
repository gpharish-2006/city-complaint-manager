import { getAllComplaints,updateStatus,deleteComplaint } from "../controllers/adminController.mjs";
import authMiddleware from "../middleware/authMiddleware.mjs";
import adminMiddleware from "../middleware/adminMiddleware.mjs";
import express from "express";

const router = express.Router();

router.get("/complaints", authMiddleware, adminMiddleware, getAllComplaints);
router.put("/complaints/:id", authMiddleware, adminMiddleware, updateStatus);
router.delete("/complaints/:id",authMiddleware, adminMiddleware, deleteComplaint);


export default router;