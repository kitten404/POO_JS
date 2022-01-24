import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome ="Quezia";
cliente1.cpf = 45478565862;

const contaCorrente = new ContaCorrente();
contaCorrente.cliente = cliente1;
contaCorrente.agencia = 2002;
contaCorrente._saldo =3000;
console.log(contaCorrente);
contaCorrente.sacar(10000);
contaCorrente.depositar(45.90);

const cliente2 = new Cliente();
cliente2.nome = "Bruno";
cliente2.cpf = 45677585692;
const contaCorrente2 = new ContaCorrente();
contaCorrente2.cliente = cliente2;
contaCorrente2.agencia =3319;
contaCorrente2._saldo =2000

console.log("A quezia vai depositar 100 na conta do Bruno");
console.log("Valores iniciais da conta da Quezia e Bruno, respectivamente");
console.log(contaCorrente);
console.log(contaCorrente2);
contaCorrente.transferir(100, contaCorrente2);
console.log("estado final das cc/s");
console.log(contaCorrente);
console.log(contaCorrente2);

console.log(contaCorrente2.cliente);
console.log(contaCorrente2.saldo);

//contaCorrente2.saldo =4000;


