class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(valor > this.saldo){
            console.log("nao posso sacar");
        }else{
            this.saldo -= valor
            console.log("saquei o valor "+valor);
        }   
    }
}

const cliente1 = new Cliente();
cliente1.nome ="Quezia";
cliente1.cpf = 45478565862;
cliente1.agencia = 2002;
cliente1.saldo = 99.25;

console.log(cliente1);

const contaCorrente = new ContaCorrente();
contaCorrente.agencia = 2002;
contaCorrente.saldo =8856.25;
console.log(contaCorrente);
contaCorrente.sacar(10000);

