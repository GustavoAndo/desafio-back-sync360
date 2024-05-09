# Persistência de Dados da Aplicação

### Repositório com o back-end da solução do desafio da empresa Sync360

---
### Sobre este projeto

Este é o back-end para o a solução que possui também um front-end ([Clique aqui para acessar o repositório](https://github.com/GustavoAndo/desafio-front-sync360.git)). Nele existe duas rotas, um para exibir o perfil de um usuário específico do banco (com uma entidade com os campos: nome, data de nascimento, estado, cidade, bairro, rua e biografia) e outro para atualizar as suas informações. Esses endpoints são acessados através da url */users*, um pelo método *GET* e outro pelo método *PATCH* respectivamente.

---

### Tecnologias:
* Typescript
* NodeJS
* TypeORM
* MySQL

---
### Execução: 

Caso não tenha criado o banco de dados ainda, entre no prompt de comando do MySQL e crie o banco de dados "biblioteca":
```console
CREATE DATABASE sync360;
```
Com o banco criado, faça uma cópia do projeto:
```console
git clone https://github.com/GustavoAndo/desafio-back-sync360.git
```
Entre na raiz do projeto:
```console
cd desafio-back-sync360 
```
Antes, também é necessário configurar as variáveis de ambiente, criando um arquivo .env na raíz do projeto com as seguintes linhas:
```console
DB_HOST = *Seu host, normalmente localhost*
DB_PORT = *Número da porta do banco de dados, a padrão de instalação do MySQL é a 3306*
DB_USER = *Usuário criado para o banco de dados*
DB_PASS = *Senha do usuário criado para o banco de dados*
DB_NAME = *Nome do banco criado, no meu caso e nessas instruções está como sync360*
PORT = *Porta na qual será rodado o servidor back-end, caso não exista essa variável, será rodado na porta 3001 como padrão deste projeto*
```
Execue os comandos:
```console
npm install
```
```console
npm start
```
Ao executar o projeto, a tabela do banco é automaticamente criada seguindo o mapeamento criado através da ferramenta TypeORM, que foi a ORM utilizada para realizar este projeto, além de também inserir um usuário inicial que será utilizado pelo front-end criado para este desafio. O DDL dessa tabela seria dessa maneira:
```console
CREATE TABLE USERS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    birthday DATETIME NOT NULL,
    state VARCHAR(30) NOT NULL,
    city VARCHAR(30) NOT NULL,
    district VARCHAR(30) NOT NULL,
    street VARCHAR(60) NOT NULL,
    biography LONGTEXT NOT NULL
);

INSERT INTO USERS (name, birthday, state, city, district, street, biography) VALUES ('Gustavo Kenji Ando', '2003-08-02', 'São Paulo', 'São José dos Campos', 'Jardim Oriente', 'Rua Kumamoto', 'Me formei em Análise e Desenvolvimento de Sistemas na FATEC de São José dos Campos no final de 2023.Durante meu desenvolvimento em estudos, consegui conhecimento em linguagens de programação como Python Java, TypeScript e PHP, além de aprender um pouco de Front-End com HTML e CSS. Os frameworks que já estudei foram: Express (Node.js), Spring Boot, Flask, React e Vue.js. Tive também contato com banco de dados, como MySQL, PostgresSQL e MongoDB. Além disso, tenho experiências em versionamento com Git e metodologia ágil Scrum, que auxiliou na melhora de minhas habilidades de trabalho em equipe e proatividade. Minha experiência profissional ocorreu no INPE, onde eu trabalhei com o desenvolvimento de rotinas em Python para o gerenciamento de uma base de dados de sistemas aquáticos por sensoriamento remoto. Isso me trouxe um desenvolvimento profissional inicial na minha carreira, me ajudando a ter melhor noção de programação em Python e de colaboração dentro de uma equipe de uma empresa. Atualmente, estou em busca de oportunidades de inserção no mercado de trabalho para me tornar um Desenvolvedor Web Full Stack.');
```
> Observação: Verifique se o arquivo .env possui as configurações corretas do seu banco de dados MySQL

---

Por Gustavo Kenji Ando