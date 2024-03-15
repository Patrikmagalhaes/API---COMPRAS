import { Compra } from "../models.js/Compras.js"


const getCompras = async (req, res) => {
    try {
        const compras = await Compra.findAll()
        res.status(200).send({ compras })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ message: "Deu merda" })
    }
}

const postCompras = async (req, res) => {
    const { produto, preco } = req.body
    try {
        if (!produto || !preco) return res.status(404).send({
            message:
                'informações incompletas'
        })

        const produtoCriado = await Compra.create({ produto, preco })
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

export { getCompras, postCompras, putCompras }