const Promocao = require('../models/promocao');

module.exports = class promocaoController {
    static async inserir(req, res) {
        const promocao = new Promocao({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            dtValidade: req.body.dtValidade
        })
        promocao.save(promocao).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message || `Erro ao tentar inserir os dados da promoção: ${promocao}.`});
        })
    }
}