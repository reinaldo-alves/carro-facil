const Cliente = require('../models/cliente');
const Pessoa = require('../models/pessoa')

module.exports = class clienteController {
    static async inserir(req, res) {
        const pessoa = new Pessoa({
            nome: req.body.nome,
            cpf: req.body.cpf,
            idade: req.body.idade,
            dtNascimento: req.body.dtNascimento,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco
        })
        pessoa.save(pessoa).then(data => {
            const cliente = new Cliente({
                idPessoa: data._id,
                nuCarteiraMotorista: req.body.nuCarteiraMotorista,
                anoVencimentoCarteira: req.body.anoVencimentoCarteira
            });
            cliente.save(cliente).then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({message: err.message || `Erro ao tentar inserir os dados do cliente: ${cliente}.`});
            })
        }).catch(err => {
            console.log(pessoa)
            res.status(500).send({message: err.message || `Erro ao tentar inserir os dados para o CPF: ${req.body.cpf}.`});
        });
    }
}