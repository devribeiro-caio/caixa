💰 Banco Digital - Terminal
Um simples sistema bancário de terminal criado com Node.js. Permite consultar saldo, realizar saques, depósitos e transferências via linha de comando.

🧾 Funcionalidades
Consultar saldo

Fazer saque

Fazer depósito

Fazer transferência

Encerrar o sistema

🚀 Tecnologias Utilizadas
Node.js

prompt-sync — para entrada de dados via terminal

📦 Instalação
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
Instale as dependências:

bash
Copiar
Editar
npm install prompt-sync
Execute o programa:

bash
Copiar
Editar
node index.js
Nota: Substitua index.js pelo nome do seu arquivo principal, se for diferente.

📝 Exemplo de Uso
bash
Copiar
Editar
BANCO DIGITAL
Saldo atual: R$ 1000
Escolha uma operação:
1 - Consultar saldo
2 - Fazer saque
3 - Fazer depósito
4 - Fazer transferência
5 - Sair
O usuário interage escolhendo opções e inserindo valores conforme as instruções.

📌 Observações
O saldo inicial é de R$ 1000.

O sistema é executado em um loop até o usuário escolher a opção de sair.

Não há persistência de dados; os valores são mantidos em memória enquanto o programa está em execução.

🛠️ Melhorias Futuras
Validação de entrada de dados

Persistência de dados com arquivos ou banco de dados

Interface gráfica com Electron ou Web

Sistema de autenticação de usuário

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
