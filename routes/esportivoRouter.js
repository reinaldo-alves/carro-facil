const express = require('express');
const router = express.Router();

const esportivoController = require('../controllers/esportivoController');

router.post('/esportivo', esportivoController.inserir);

module.exports = router;