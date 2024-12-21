const express = require('express');
const router = express.Router();

const funcionarioController = require('../controllers/funcionarioController');

router.post('/funcionario', funcionarioController.inserir);

module.exports = router;