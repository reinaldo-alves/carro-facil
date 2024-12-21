const express = require('express');
const router = express.Router();

const carroController = require('../controllers/carroController');

router.post('/carro', carroController.inserir);
router.get('/carro/tipo', carroController.buscarPeloTipo);
router.get('/carro/placa', carroController.buscarPelaPlaca);
router.delete('/carro', carroController.deletar);

module.exports = router;