import express from 'express'
import 'dotenv/config'
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Test')
})

const port = process.env.PORT || 3001
app.listen(port, () =>{
    console.log("Servidor executando na porta " + port)
})