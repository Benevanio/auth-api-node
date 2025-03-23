
```markdown
# Auth API Node

Uma API RESTful simples de autenticação com cadastro e login de usuários, desenvolvida com Node.js, Express, MongoDB e JWT. Ideal para projetos que precisam de um sistema de autenticação básica com armazenamento seguro de senhas.

---

## 🚀 Funcionalidades

- Cadastro de usuário com senha criptografada
- Login com verificação de senha e geração de token JWT
- Integração com MongoDB usando Mongoose
- Rota de teste raiz (`GET /`)
- Estrutura pronta para testes com Jest + Supertest

---

## 📦 Dependências

### Produção

| Pacote         | Versão     |
|----------------|------------|
| bcrypt         | ^5.1.1     |
| dotenv         | ^16.4.7    |
| express        | ^4.21.2    |
| jsonwebtoken   | ^9.0.2     |
| mongoose       | ^8.12.2    |
| nodemon        | ^3.1.9     |
| supertest      | ^7.1.0     |
| jest           | ^29.7.0    |

### Desenvolvimento

| Pacote         | Versão     |
|----------------|------------|
| @types/jest    | ^29.5.14   |

---

## 🛠️ Instalação e execução

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/auth-api-node.git
cd auth-api-node

# Instale as dependências
npm install

# Crie o arquivo .env
touch .env
```

Preencha o arquivo `.env` com as seguintes variáveis:

```env
DATABASE_URL=mongodb://localhost:27017/seu-banco
TOKEN_SECRET=sua_chave_jwt_secreta
NODE_ENV=development
```

### Rodar o servidor localmente

```bash
npm star
```

### Rodar os testes

```bash
npm run test
```

---

## 🔌 Rotas da API

### `GET /`

- Retorna mensagem padrão:
```json
"Hello, world!"
```

---

### `POST /api/users`

- Cria um novo usuário
- Exemplo de body:
```json
{
  "name": "Fulano",
  "email": "fulano@email.com",
  "password": "123456"
}
```

---

### `POST /api/users/auth`

- Autentica o usuário
- Exemplo de body:
```json
{
  "email": "fulano@email.com",
  "password": "123456"
}
```

- Resposta (token JWT):
```json
{
  "token": "eyJhbGciOi..."
}
```

---

## 🧪 Testes

Testes simples com Jest + Supertest para garantir que a aplicação responde corretamente na rota raiz.

---

## 📂 Estrutura de pastas

```
.
├── model/
│   └── User.js          # Schema do usuário
├── src/
│   └── server.js        # Arquivo principal da aplicação
├── __tests__/
│   └── app.test.js      # Testes com Jest e Supertest
├── .env                 # Variáveis de ambiente
├── package.json
└── README.md
```

---

## 📖 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---