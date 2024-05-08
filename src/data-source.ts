import { DataSource } from "typeorm"
import "reflect-metadata"
import 'dotenv/config'
import { User } from './entities/User'

const DB_PORT = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})