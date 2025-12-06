// src/routes/ocorrenciasRoutes.ts
import { Router } from "express";
import { ocorrenciaController } from "../controllers/ocorrenciaController";
import { upload } from "../config/multer";

const router = Router();

router.post(
  "/ocorrencias",
  upload.single("foto"),   // <- AQUI está o que faltava!
  ocorrenciaController.create
);

router.get("/ocorrencias", ocorrenciaController.list);
router.get("/ocorrencias/:id", ocorrenciaController.getById);

export default router;
