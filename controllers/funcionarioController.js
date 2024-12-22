const Funcionario = require('../models/funcionario');
const Pessoa = require('../models/pessoa')

module.exports = class funcionarioController {
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
            const funcionario = new Funcionario({
                idPessoa: data._id,
                dtContratacao: req.body.dtContratacao,
                salario: req.body.salario,
                qtAlugueis: req.body.qtAlugueis,
                status: req.body.status
            });
            funcionario.save(funcionario).then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({message: err.message || `Erro ao tentar inserir os dados do funcionário: ${funcionario}.`});
            })
        }).catch(err => {
            res.status(500).send({message: err.message || `Erro ao tentar inserir os dados para o CPF: ${req.body.cpf}.`});
        });
    }
}