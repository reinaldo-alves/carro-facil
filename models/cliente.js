const mongoose = require('mongoose');

const Cliente = mongoose.Schema({
    idPessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa',
        required: true
    },
    nuCarteiraMotorista: {
        type: String,
        required: true
    },
    anoVencimentoCarteira: {
        type: Number,
        required: true
    },
}, { VersionKey: false })

module.exports = mongoose.model('Cliente', Cliente);