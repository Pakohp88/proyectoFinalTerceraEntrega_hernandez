const { Router } = require('express');
const router = Router();
const pedidosController = require('../controllers/pedidos.controller')
const authController = require('../controllers/auth.controller');

router.post('/pedidos/singup', authController.generateToken);

router.get('/pedidos', authController.verifyToken, pedidosController.getPedidos);

router.get('/pedidos/:id', authController.verifyToken, pedidosController.getPedido);

router.post('/pedidos', authController.verifyToken, pedidosController.createPedido);

router.put('/pedidos/:id', authController.verifyToken, pedidosController.editPedido);

router.delete('/pedidos/:id', authController.verifyToken, pedidosController.deletePedido);

module.exports = router;