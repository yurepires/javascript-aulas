import express from "express";
import AdminController from "../controllers/AdminController.js";

const router = express.Router()

router.get('/', AdminController.index)

router.get('/listar-usuarios', AdminController.listarUsuarios)

export default router