// let consultar saldo;
// let saque;
// let depósito;
// let transferencia;

const prompt = require('prompt-sync')();
let saldo = 1000
let start = true

function consultarSaldo(){
    return saldo
}

let deposito = 1000
function fazerDeposito(deposito){
    if (deposito <= saldo) {
        saldo -= deposito;
        saque = deposito;
        return `Deposito de R$ ${deposito} realizado com sucesso. Novo saldo: R$ ${saldo}`;
    } else {
        return "Saldo insuficiente para realizar o deposito";
    }
}
let transferencia = 0;
function fazerTransferencia(transferencia){
    if (transferencia <= saldo) {
        saldo -= transferencia;
        saque = transferencia;
        return `transferencia de R$ ${transferencia} realizada com sucesso. Novo saldo: R$ ${saldo}`;
    } else {
        return "Saldo insuficiente para realizar o transferencia";
    }
}
let valorSaque = 500
function fazerSaque(valorSaque){
    if (valorSaque <= saldo) {
        saldo -= valorSaque;
        saque = valorSaque;
        return `Saque de R$ ${valorSaque} realizado com sucesso. Novo saldo: R$ ${saldo}`;
    } else {
        return "Saldo insuficiente para realizar o saque";
    }
}

function executarAcao() {
    while (start) {
        console.log('BANCO DIGITAL' );
        console.log(`Saldo atual: R$ ${saldo}`);
        console.log("Escolha uma operação:");
        console.log("1 - Consultar saldo");
        console.log("2 - Fazer saque");
        console.log("3 - Fazer depósito");
        console.log("4 - Fazer transferência");
        console.log("5 - Sair");

        let escolha = prompt("Digite o número da operação desejada: ");

        switch (escolha) {
            case "1":
                console.log(`\nSeu saldo atual é: R$ ${consultarSaldo()}`);
                break;

            case "2":
                let valorSaque = Number(prompt("Digite o valor que deseja sacar: R$ "));
                console.log(fazerSaque(valorSaque));
                break;

            case "3":
                let valorDeposito = Number(prompt("Digite o valor que deseja depositar: R$ "));
                console.log(fazerDeposito(valorDeposito));
                break;

            case "4":
                let contaDestino = prompt("Digite o número da conta de destino: ");
                let valorTransferencia = Number(prompt("Digite o valor que deseja transferir: R$ "));
                console.log(fazerTransferencia(valorTransferencia));
                break;

            case "5":
                console.log("\nObrigado por usar nosso banco!");
                start = false;
                break;

            default:
                console.log("\nOpção inválida! Por favor, escolha uma opção válida.");
        }

        if (start) {
            prompt("Pressione ENTER para continuar");
            console.clear();
        }
    }
}

executarAcao();





                                                    
                                                    


