API de Currículo 📄
Projeto de API RESTful desenvolvido como trabalho acadêmico para a disciplina de Aplicações Orientadas a Serviço, do curso de Sistemas para Internet.

Esta API permite o gerenciamento completo (CRUD) de um currículo profissional, incluindo dados pessoais, histórico de experiências e habilidades. O projeto foi publicado na Vercel e utiliza um banco de dados PostgreSQL hospedado no NeonDB.

💻 Tecnologias Utilizadas
Backend: Node.js

Servidor: Express

ORM: Sequelize (para abstração do banco de dados)

Banco de Dados: PostgreSQL (hospedado no NeonDB)

Segurança: CORS (para permitir acesso de front-ends)

Variáveis de Ambiente: Dotenv

Deploy: Vercel

🚀 Como Executar (Localmente)
Clone o repositório:

Bash

git clone 
cd curriculo_api
Instale as dependências:

Bash

npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto (curriculo_api/).

Adicione sua string de conexão do PostgreSQL (NeonDB):

Snippet de código

DATABASE_URL="postgresql://user:password@host/db_curriculo?sslmode=require"
Rode o servidor de desenvolvimento:

Bash

npm run dev
(O servidor estará disponível em http://localhost:3000)

🛠️ Endpoints da API
A URL base da API (em produção) é: [URL_DA_SUA_API_NA_VERCEL]

Pessoa
Define os dados pessoais do dono do currículo.

POST /api/pessoa - Cria os dados pessoais.

GET /api/pessoa - Lista todas as pessoas cadastradas.

GET /api/pessoa/:id - Busca uma pessoa por ID (incluindo suas experiências e habilidades associadas).

PUT /api/pessoa/:id - Atualiza os dados de uma pessoa.

DELETE /api/pessoa/:id - Deleta uma pessoa (e, em cascata, todas as suas experiências e habilidades).

Experiência
Define as experiências profissionais.

POST /api/experiencia - Cria uma nova experiência (requer personId no body).

GET /api/experiencia - Lista todas as experiências.

PUT /api/experiencia/:id - Atualiza uma experiência.

DELETE /api/experiencia/:id - Deleta uma experiência.

Habilidade
Define as habilidades e competências.

POST /api/habilidade - Cria uma nova habilidade (requer personId no body).

GET /api/habilidade - Lista todas as habilidades.

PUT /api/habilidade/:id - Atualiza uma habilidade.

DELETE /api/habilidade/:id - Deleta uma habilidade.
