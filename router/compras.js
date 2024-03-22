import express from "express"
import { getCervejas, postCerveja, putCerveja, deleteCerveja, getDetalhes, getNacionalidae, getTipo } from '../controller/compras.js'
const router = express.Router()

router.get('/cervejas', getCervejas)
router.post('/cervejas', postCerveja)
router.put('/cervejas/:id', putCerveja)
router.delete('/cervejas/:id', deleteCerveja)
router.get('/cervejas/:id', getDetalhes)
router.get('/nacionalidade/:pais', getNacionalidae)
router.get('/tipo/:tipo', getTipo)
export  {router}
