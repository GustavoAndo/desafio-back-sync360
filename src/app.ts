import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { AppDataSource } from './data-source'
import addInitialUser from './seeds/initialUser'
import routesUser from './routes/users'

const app = express()

app.use(express.json())
app.use(cors())

AppDataSource
    .initialize()
    .then(() => {
        console.log("Banco de dados conectado!")
        addInitialUser()
    })
    .catch((e) => {
        console.error("Erro na conxeão do banco de dados:", e)
    })

app.use('/users', routesUser)

const port = process.env.PORT || 3001
app.listen(port, () =>{
    console.log("Servidor executando na porta " + port)
})