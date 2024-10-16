import express from 'express'
import filmesRouter from './routes/rotasVagas.js'
import sequelize from './database.js'

try {
    await sequelize.sync()
    console.log('conectou')
} catch (error) {
    console.error('erro:', error)
}
const app = express()

app.use(express.json())
app.use(filmesRouter)

app.listen(3000, () => console.log('Servidor rodando'))