const Carro = require('./carro');

class Utilitario extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, vDiaria, observacao, qtPassageiro, tmBagageiro, kmLitro) {
        super(placa, ano, cor, modelo, quilometragem, vDiaria, observacao);
        this.qtPassageiro = qtPassageiro;
        this.tmBagageiro = tmBagageiro;
        this.kmLitro = kmLitro;
    }
}

module.exports = Utilitario;