import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome ="Quezia";
cliente1.cpf = 45478565862;
cliente1.agencia = 2002;
cliente1._saldo = 99.25;

console.log(cliente1);

const contaCorrente = new ContaCorrente();
contaCorrente.agencia = 2002;
contaCorrente._saldo =8856.25;
console.log(contaCorrente);
contaCorrente.sacar(10000);
contaCorrente.depositar(45.90);
console.log(contaCorrente);

