const mongoose = require('mongoose');

const Promocao = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    dtValidade: {
        type: Date,
        required: true
    }
}, { VersionKey: false })

module.exports = mongoose.model('Promocao', Promocao);