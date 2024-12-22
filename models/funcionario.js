const mongoose = require('mongoose');

const Funcionario = mongoose.Schema({
    idPessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa',
        required: true
    },
    dtContratacao: {
        type: Date,
        required: true
    },
    salario: {
        type: String,
        required: true
    },
    qtAlugueis: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
}, { VersionKey: false })

module.exports = mongoose.model('Funcionario', Funcionario);