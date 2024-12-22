const mongoose = require('mongoose');

const Pessoa = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        unique: true,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    dtNascimento: {
        type: Date,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    }
}, { VersionKey: false })

module.exports = mongoose.model('Pessoa', Pessoa);