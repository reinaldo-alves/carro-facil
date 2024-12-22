const Reserva = require('../models/reserva');
const Cliente = require('../models/cliente');
const Carro = require('../models/carro');

module.exports = class reservaController {
    static async inserir(req, res) {
        const carro = await Carro.findOne({ placa: req.body.placa });
        const cliente = await Cliente.findOne({ cpf: req.body.cpf });
        const reserva = new Reserva({
            placaCarro: carro.placa,
            cpfCliente: cliente.cpf,
            status: req.body.status,
            dtInicio: req.body.dtInicio,
            dtFim: req.body.dtFim
        })
        reserva.save(reserva).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message || `Erro ao tentar inserir os dados da reserva: ${reserva}.`});
        })
    }

    static async buscar(req, res) {
        Reserva.findOne({cpfCliente: req.body.cpfCliente}).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({message: err.message || `Erro ao tentar buscar od dados da reserva com cpf: ${req.body.cpfCliente}.`});
        })
    }

    static async atualizar(req, res) {
        const id = req.query;
        Reserva.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
            if(!data) {
                res.status(500).send({message: `Não conseguiu encontrar a reserva com id: ${id}.`})
            } else {
                res.send({message: `Reserva com id ${id} atualizada com sucesso.`});
            }
        }).catch(err => {
            res.status(500).send({message: err.message || `Erro ao tentar atualizar a reserva com id: ${id}.`});
        })
    }
}