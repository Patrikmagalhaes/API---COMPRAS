import { Cerveja } from "../models.js/Compras.js"


const getCervejas = async (req, res) => {
    try {
        const cerveja = await Cerveja.findAll({ attributes: ['nome'] })
        res.status(200).send({ cerveja })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ message: "Deu merda" })
    }
}

const postCerveja = async (req, res) => {
    const { nome, abv, tipo, nacionalidade } = req.body
    try {
        if (!nome || !abv || !tipo || !nacionalidade) return res.status(404).send({
            message:
                'informações incompletas'
        })

        const produtoCriado = await Cerveja.create({ nome, abv, tipo, nacionalidade })
        res.status(201).send({ produtoCriado })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'erro ao inserir produto' })
    }



}

const putCerveja = async (req, res) => {
   
    try {
        const { nome, abv, tipo, nacionalidade } = req.body
        const { id } = req.params
        
        await Cerveja.update({nome, abv, tipo, nacionalidade  }, {where: {id}})
        res.status(200).send({ message: "Cerveja atualizada" })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ essage: "Deu merda" })
    }

}

const deleteCerveja = async (req, res) => {
   
    try {
        const { id } = req.params
        await Cerveja.destroy({where: {id}})
        res.status(200).send({ message: "Cerveja Apagada" })
        console.log(id)
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ message: "Deu merda" })
    }

}

const getDetalhes = async (req, res) => {
   
    try {
        const { id } = req.params
        const cerveja = await Cerveja.findAll({ where: {id} })
        res.status(200).send({ cerveja})
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ message: "Deu merda" })
    }

}
const getNacionalidae = async (req, res) => {
   
    try {
        const { pais } = req.params
        const cerveja = await Cerveja.findAll({ where: {nacionalidade: pais} })
        res.status(200).send({ cerveja})
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ message: "Deu merda" })
    }

}

const getTipo = async (req, res) => {
   
    try {
        const { tipo } = req.params
        const cerveja = await Cerveja.findAll({ where: {tipo: tipo} })
        res.status(200).send({ cerveja})
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ message: "Deu merda" })
    }

}
export { getCervejas, postCerveja, putCerveja, deleteCerveja, getDetalhes,getNacionalidae, getTipo }