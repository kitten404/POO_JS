import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;
    _saldo;

    set cliente(instance){
        if(instance instanceof Cliente){
            this._cliente = instance;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(valor > this._saldo){
            console.log("nao posso sacar");
        }else{
            console.log("saquei o valor "+valor);
            this._saldo -= valor;
            return valor;
        }   
    }

    depositar(valor){
        if(valor <= 0){
            console.log("nao posso depositar esse valor");
        }else{
            console.log("valor depositado: "+valor);
            this._saldo += valor;
            return valor;
        }
    }

    transferir(valor, conta){
        console.log("o valor a ser transferido para conta de é: "+valor)
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}