import { DataTypes } from 'sequelize'
import sequelize from '../database.js'

const Vaga =  sequelize.define('Vaga', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    cargo: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    }
})

export {Vaga}