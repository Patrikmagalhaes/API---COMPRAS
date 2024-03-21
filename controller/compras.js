import { Cerveja } from "../models.js/Compras.js"


const getCervejas = async (req, res) => {
    try {
        const cerveja = await Cerveja.findAll({attributes: ['nome']})
        res.status(200).send({ cerveja })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ message: "Deu merda" })
    }
}

const postCompras = async (req, res) => {
    const { nome, abv, tipo, nacionalidade } = req.body
    try {
        if (!nome || !abv ||!tipo ||!nacionalidade ) return res.status(404).send({
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

const putCompras = async (res, req) => {

    try {
        const { id } = req.params
        const { produto, preco } = req.body
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ essage: "Deu merda" })
    }

}

export { getCervejas, postCompras, putCompras }