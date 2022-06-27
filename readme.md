# Teste técnico da Next tecnologia

Aplicação desenvolvida com a finalidade ser avaliada para o processo seletivo da empresa Next tecnologia


# Configuração da aplicação
- Em seu terminal, escreva o código para copiar o projeto para sua máquina
> git clone https://github.com/LeonardoLuccaDev/teste-next.git
- Para instalar as dependências da back-end, digite os seguintes códigos no terminal:
> cd teste-next/

> cd backend/

> npm install ou yarn install

- Com as dependências instaladas na API, dentro da pasta da back-end, crie um arquivo **.env** com as seguintes variáveis de ambiente:
> DATABASE_URL=**(local onde o banco em SQLite irá ficar, exemplo: "file:./dev.db")**

> JWT_SECRET= **(local onde armazena o segredo jwt para autenticação, exemplo: código gerado pelo comando no terminal openssl rand -hex 32)**

> PORT=**(Porta onde estará rodando a API, exemplo: 4000)**

> ALLOWED_ORIGINS=**(Para qual front-end ele irá disponibilizar as rotas da API, exemplo: http://localhost:3000)**

- Com as variáveis de ambiente criadas, execute o comando no terminal para criar o banco com as tabelas configuradas:

> npx prisma migrate dev ou yarn prisma migrate dev

- Para confirmar se o banco foi realmente criado, após executar o código, irá aparecer um arquivo **dev.db** dentro da pasta **./src/Database/** e no terminal irá aparecer a seguinte linha:

>SQLite database dev.db created at file:../src/Database/dev.db
>Applying migration `20220626171302_create_user_table`
>
>The following migration(s) have been applied:
>
>migrations/
>  └─ 20220626171302_create_user_table/       
>    └─ migration.sql
>
>Your database is now in sync with your schema.
>
>✔ Generated Prisma Client (3.15.2 | library) to .\node_modules\@prisma\client in 54ms

- No arquivo **./node_modules/@types/express/index.d.ts**, na interface Request, dentro das chaves, digite:
> id: string

- A interface deverá estar mais ou menos assim:

>interface Request<
>P = core.ParamsDictionary,
>ResBody = any,
>ReqBody = any,
>ReqQuery = core.Query,
>Locals extends Record<string, any>  = Record<string, any>
>  extends core.Request<P, ResBody, ReqBody, ReqQuery, Locals>  {
>id: string
>}
- Após configurar este arquivo, para rodar a API, execute o comando dentro do terminal da back-end:
> npm run dev ou yarn dev
- No terminal a API estará rodando quando tiver o seguinte retorno do comando:
> backend@1.0.0 dev
> ts-node-dev --exit-child src/app.ts
[INFO] 22:44:25 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.8.1, typescript ver. 4.7.4)
server running on port (porta escolhida)

- Após o retorno do comando, a API estará rodando em **http://localhost:(porta escolhida)/api**

- Para instalar as dependências do front-end, digite os seguintes códigos em um outro terminal:

> cd teste-next/

> cd frontend/

> npm install ou yarn install

- Com as dependências instaladas no front-end, dentro da pasta do front-end, crie um arquivo **.env** com as seguintes variáveis de ambiente:

>REACT_APP_API= **(http://localhost:(porta escolhida na API)/api)**

- Após configurar este arquivo, para rodar a parte web, execute o comando dentro do terminal do front-end:

> npm run start ou yarn start

- Após a execução do comando, as telas poderão ser visualizadas em **http://localhost:3000**

- Após a configuração, a aplicação estará pronta para utilização.
