const { Router } = require("express");
const router = Router();
const peliculasController = require("../controllers/peliculas.controller");
const authController = require("../controllers/auth.controller");

router.post("/peliculas/singup", authController.generateToken);

router.get("/peliculas", authController.verifyToken, peliculasController.getPeliculas);

router.get("/peliculas/:id", authController.verifyToken, peliculasController.getPelicula);

router.post("/peliculas", authController.verifyToken, peliculasController.createPelicula);

router.put("/peliculas/:id", authController.verifyToken, peliculasController.editPelicula);

router.delete("/peliculas/:id", authController.verifyToken, peliculasController.deletePelicula);

module.exports = router;