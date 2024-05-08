import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

async function addInitialUser() {
    const existsUser = await AppDataSource.manager.findOne(User, {where: {name: "Gustavo Kenji Ando"}})

    if (!existsUser) {
        const user = AppDataSource.manager.create(User, {name: "Gustavo Kenji Ando", birthday: "02-08-2003", state: "São Paulo", city: "São José dos Campos", district: "Jardim Oriente", street: "Rua Kumamoto", biography: "Me formei em Análise e Desenvolvimento de Sistemas na FATEC de São José dos Campos no final de 2023.\nDurante meu desenvolvimento em estudos, consegui conhecimento em linguagens de programação como Python Java, TypeScript e PHP, além de aprender um pouco de Front-End com HTML e CSS. Os frameworks que já estudei foram: Express (Node.js), Spring Boot, Flask, React e Vue.js. Tive também contato com banco de dados, como MySQL, PostgresSQL e MongoDB. Além disso, tenho experiências em versionamento com Git e metodologia ágil Scrum, que auxiliou na melhora de minhas habilidades de trabalho em equipe e proatividade. \nMinha experiência profissional ocorreu no INPE, onde eu trabalhei com o desenvolvimento de rotinas em Python para o gerenciamento de uma base de dados de sistemas aquáticos por sensoriamento remoto. Isso me trouxe um desenvolvimento profissional inicial na minha carreira, me ajudando a ter melhor noção de programação em Python e de colaboração dentro de uma equipe de uma empresa.\nAtualmente, estou em busca de oportunidades de inserção no mercado de trabalho para me tornar um Desenvolvedor Web Full Stack."})

        await AppDataSource.manager.save(User, user)
    }
}

export default addInitialUser