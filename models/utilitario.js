const Carro = require('./carro');

class Utilitario extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, vDiaria, observacao, qtPassageiro, tmBagageiro, kmLitro) {
        if(vDiaria <= 0) {
            throw new Error('O valor da diária do carro não pode ser menor ou igual a zero');
        }
        super(placa, ano, cor, modelo, quilometragem, vDiaria, observacao);
        this.qtPassageiro = qtPassageiro;
        this.tmBagageiro = tmBagageiro;
        this.kmLitro = kmLitro;
    }
}

module.exports = Utilitario;