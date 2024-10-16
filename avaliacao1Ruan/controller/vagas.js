import { Vaga } from "../models/vaga.js";

const cadastrarVaga = async(req, res) => {
    try{
        const {titulo, descricao, cargo, cidade} = req.body

        const vaga = Vaga.create({titulo, descricao, cargo, cidade})
        res.status(201).send({ vaga })
    }catch (erro) {
        console.log(erro)
        res.status(500).send({erro})
    }
}

const tituloVaga = async(req, res) => {
    try{
        const resposta = await Vaga.findAll({ attributes: ['titulo'] })
        console.log(resposta)
        res.status(200).send({titulo:resposta})
    }catch (erro){
        console.log(erro)
        res.status(500).send({erro:erro})
    }
}

const detalharVaga = async(req,res) => {
    try{
        const id = req.params.id
        const detalhes = await Vaga.findAll({ where: {id}})
        res.status(200).send({detalhes: detalhes})
    }catch (erro) {
        console.log(erro)
        res.status(500).send({erro})
    }
}

const atualizarVaga = async(req, res) => {
    try{
        const id =  req.params.id
        const {titulo, descricao, cargo, cidade} = req.body

        const atualizar = await Vaga.update({titulo, descricao, cargo, cidade}, {where: {id}})
        res.status(200).send({atualizar})
    }catch (erro) {
        console.log(erro)
        res.status(500).send({erro})
    }
}

const apagarVaga = async(req, res) => {
    try{
        const id = req.params.id

        await Vaga.destroy({where: {id}})
        res.status(200).send({mensagem: 'vaga preenchida'})
    }catch(erro){
        console.log(erro)
        res.status(500).send({erro:erro})
    }
}

const vagaPorCargo = async(req, res) => {
    try{
        const cargo = req.params.cargo
        const buscarPorCargo = await Vaga.findAll({where: {cargo}})
        res.status(200).send({buscarPorCargo: buscarPorCargo})
    }catch (erro) {
        console.log(erro)
        res.status(500).send({erro:erro})
    }
}

const vagaPorLocal = async(req, res) => {
    try {
        const cidade = req.params.cidade
        const buscarPorCidade = await Vaga.findAll({where: {cidade}})
        res.status(200).send({buscarPorCidade})
    }catch (erro) {
        console.log(erro)
        res.status(500).send({erro:erro})
    }
}

export {cadastrarVaga, tituloVaga, detalharVaga, atualizarVaga, apagarVaga, vagaPorCargo, vagaPorLocal}