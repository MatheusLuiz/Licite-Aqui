# 🏙️ Licite Aqui

Este é o projeto **TI Sociedade**, Desenvolvida como projeto final de empresa real para uma aplicação Web, usando Node.js que oferece suporte para funcionalidades de gestão comunitária, com foco em sustentabilidade, governança e participação social.

## 🛠 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript
- **Express** — Framework para servidor web
- **Sequelize** — ORM para banco de dados relacional
- **MySQL** — Banco de dados utilizado
- **Dotenv** — Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

## 🚀 Como Executar o Projeto

### ✔️ Pré-requisitos

- Node.js instalado
- MySQL instalado
- Git (opcional)

### ⚙️ Passos

1. Clone o repositório:

```bash
git clone https://github.com/Andreikgs/projeto-ti-sociedade_back.git
cd projeto-ti-sociedade_back
Instale as dependências:

bash
Copiar
Editar
npm install
Configure o arquivo .env:

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

env
Copiar
Editar
DB_NAME=nome_do_banco
DB_USER=usuario
DB_PASSWORD=senha
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3000
Execute as migrações ou sincronize os modelos:

bash
Copiar
Editar
npx sequelize db:migrate
# ou
npm run dev
Inicie o servidor:

bash
Copiar
Editar
npm start
A API estará disponível em: http://localhost:3000

✅ Funcionalidades
 Cadastro de usuários

 Autenticação básica

 Gerenciamento de projetos comunitários (em desenvolvimento)

 Dashboard para indicadores sociais (em breve)

📌 Observações
O projeto está em desenvolvimento ativo.

Contribuições são bem-vindas! Entre em Contato

📄 Licença
Este projeto está sob a licença MIT.


