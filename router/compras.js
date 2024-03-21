import express from "express"
import { getCervejas, postCompras, putCompras } from '../controller/compras.js'
const router = express.Router()

router.get('/cervejas', getCervejas)
router.post('/', postCompras)
router.put('/:id', putCompras)

export  {router}
