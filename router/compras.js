import express from "express"
import { getCompras, postCompras, putCompras } from '../controller/compras.js'
const router = express.Router()

router.get('/', getCompras)
router.post('/', postCompras)
router.put('/:id', putCompras)

export  {router}
