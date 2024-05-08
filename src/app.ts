import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { AppDataSource } from './data-source'

const app = express()

app.use(express.json())
app.use(cors())

AppDataSource
    .initialize()
    .then(() => {
        console.log("Banco de dados conectado!")
    })
    .catch((e) => {
        console.error("Erro na conxeão do banco de dados:", e)
    })


app.get('/', (req, res) => {
    res.send('Test')
})

const port = process.env.PORT || 3001
app.listen(port, () =>{
    console.log("Servidor executando na porta " + port)
})