import { Sequelize } from 'sequelize'
const conexao = new Sequelize('postgresql://fabricio:LB76xR83WTYQnVLVGBRKbA@banco-do-fabas-2808.j77.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')

try {
    await conexao.authenticate()
    console.log('conectou')
} catch (error) {
    console.error('erro:', error)
}

export default conexao
