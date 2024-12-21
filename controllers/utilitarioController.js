const Utilitario = require('../models/utilitario');

module.exports = class utilitarioController {
    static async inserir(req, res) {
        try {
            res.send(new Utilitario('ABC123', 1993, 'bege', 'Fusca', '60 mil', '115', 'Muito bom', 4, '10L', '15km/L'));
        } catch (error) {
            res.status(500).send({message: error.message || 'Erro ao tentar criar o carro utilitário'})
        }
    }
}