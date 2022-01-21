export class ContaCorrente{
    agencia;
    _saldo;

    sacar(valor){
        if(valor > this._saldo){
            console.log("nao posso sacar");
        }else{
            console.log("saquei o valor "+valor);
            return this._saldo -= valor;
        }   
    }

    depositar(valor){
        if(valor <= 0){
            console.log("nao posso depositar esse valor");
        }else{
            console.log("depositei o valor "+valor);
            return this._saldo += valor;
        }
    }
}