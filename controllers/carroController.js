const Carro = require('../models/carro');

module.exports = class carroController {
    static async inserir(req, res) {
        const carro = new Carro({
            placa: req.body.placa,
            ano: req.body.ano,
            modelo: req.body.modelo,
            tipo: req.body.tipo,
            quilometragem: req.body.quilometragem,
            diaria: req.body.diaria,
            observacao: req.body.observacao
        })
        carro.save(carro).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message || `Erro ao tentar inserir os dados do carro: ${carro}.`});
        })
    }

    static async buscarPeloTipo(req, res) {
        Carro.find({tipo: req.body.tipo}).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message || `Erro ao tentar buscar o carro pelo tipo: ${req.body.tipo}.`});
        })
    }

    static async buscarPelaPlaca(req, res) {
        Carro.find({placa: req.body.placa}).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message || `Erro ao tentar buscar o carro pela placa: ${req.body.placa}.`});
        })
    }

    static async deletar(req, res) {
        const id = req.query;
        Carro.findByIdAndDelete(id, {useFindAndMany: false}).then(data => {
            if(!data) {
                res.status(404).send({message: `Não foi possível deletar o carro pelo id: ${id}.`})
            } else {
                res.send({message: `Carro com id ${id} foi deletado com sucesso.`});
            }
        }).catch(err => {
            res.status(500).send({message: error.message || `Erro ao tentar deletar o carro pelo id: ${id}.`});
        })
    }
}