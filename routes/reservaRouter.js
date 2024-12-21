const express = require('express');
const router = express.Router();

const reservaController = require('../controllers/reservaController');

router.post('/reserva', reservaController.inserir);
router.get('/reserva', reservaController.buscar);
router.put('/reserva', reservaController.atualizar);

module.exports = router;