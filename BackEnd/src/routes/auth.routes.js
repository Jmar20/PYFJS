import { Router } from "express";
import { register, login, logout, profile, solicitarCambioContrasena, cambiarContrasena } from '../controllers/auth.controllers.js';
import { authRequired } from "../middlewares/ValidateToken.js";
import { validateAuth } from "../middlewares/ValidateAuth.js";

const router = Router();

router.post('/register', validateAuth, register);
router.post('/login', validateAuth, login);
router.post('/logout', logout);

router.post('/solicitar-cambio-contrasena', solicitarCambioContrasena);

router.post('/cambiar-contrasena', cambiarContrasena);

export default router;