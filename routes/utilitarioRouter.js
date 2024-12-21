const express = require('express');
const router = express.Router();

const utilitarioController = require('../controllers/utilitarioController');

router.post('/utilitario', utilitarioController.inserir);

module.exports = router;