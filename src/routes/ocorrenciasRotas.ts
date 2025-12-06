// src/routes/ocorrenciasRoutes.ts
import { Router } from "express";
import { ocorrenciaController } from "../controllers/ocorrenciaController";
import { upload } from "../config/multer";
import { protect } from "../middleware/auth";

const router = Router();

// ✅ CORRETO - Todos protegidos por autenticação
router.post("/ocorrencias", protect, upload.single("foto"), ocorrenciaController.create);
router.get("/ocorrencias", protect, ocorrenciaController.list);
router.get("/ocorrencias/filter", protect, ocorrenciaController.filter);
router.get("/ocorrencias/:id", protect, ocorrenciaController.getById);
router.put("/ocorrencias/:id", protect, upload.single("foto"), ocorrenciaController.update);  // ❗ MUDAR PARA PUT
router.delete("/ocorrencias/:id", protect, ocorrenciaController.delete); // ❗ MUDAR PARA DELETE
router.get("/stats/dashboard", protect, ocorrenciaController.getStats);

export default router;